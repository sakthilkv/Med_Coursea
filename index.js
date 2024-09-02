const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const ffmpegPath = require('ffmpeg-static');
const cors = require('cors');
const app = express();

ffmpeg.setFfmpegPath(ffmpegPath);
app.use(cors());

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
    }
});

const upload = multer({ storage: storage });

// Route for uploading the video
app.post('/upload', upload.single('video'), (req, res) => {
    const filePath = req.file.path;
    const outputDir = path.join(__dirname, 'output', path.basename(filePath, path.extname(filePath)));

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process video to generate HLS chunks for different resolutions
    const resolutions = [
        { name: '480p', width: 854, height: 480, bandwidth: 800000 },
        { name: '720p', width: 1280, height: 720, bandwidth: 1500000 },
        { name: '1080p', width: 1920, height: 1080, bandwidth: 3000000 }
    ];

    let processingCount = resolutions.length;
    let hasError = false;

    function checkCompletion() {
        if (processingCount === 0) {
            if (hasError) {
                res.status(500).json({
                    success: false,
                    message: 'Error processing video. Some resolutions might have failed.'
                });
            } else {
                createMasterPlaylist(outputDir, resolutions);
                res.json({
                    success: true,
                    message: 'Video uploaded and processing completed.',
                    url: 'http://127.0.0.1:3020/player?id=' + path.basename(filePath, path.extname(filePath))
                });
            }
        }
    }

    resolutions.forEach(res => {
        const outputFolder = path.join(outputDir, res.name);
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder, { recursive: true });
        }

        ffmpeg(filePath)
            .output(path.join(outputFolder, 'index.m3u8'))
            .videoCodec('libx264')
            .size(res.width + 'x' + res.height)
            .format('hls')
            .outputOptions([
                '-hls_time 100',
                '-hls_list_size 0',
                '-f hls'
            ])
            .on('end', () => {
                console.log(res.name + ' HLS segment created');
                processingCount -= 1;
                checkCompletion();
            })
            .on('error', err => {
                console.error('Error processing ' + res.name + ' resolution: ' + err.message);
                hasError = true;
                processingCount -= 1;
                checkCompletion();
            })
            .run();
    });
});

// Function to create master playlist
function createMasterPlaylist(outputDir, resolutions) {
    const masterPlaylistPath = path.join(outputDir, 'index.m3u8');
    let masterPlaylistContent = '#EXTM3U\n#EXT-X-VERSION:3\n';

    resolutions.forEach(res => {
        masterPlaylistContent += '#EXT-X-STREAM-INF:BANDWIDTH=' + res.bandwidth + ',RESOLUTION=' + res.width + 'x' + res.height + '\n';
        masterPlaylistContent += res.name + '/index.m3u8\n';
    });

    fs.writeFileSync(masterPlaylistPath, masterPlaylistContent);
    console.log('Master playlist created:', masterPlaylistPath, '\n');
}

// Serve HLS video segments and playlists
app.use('/video', express.static(path.join(__dirname, 'output')));

// Serve the upload form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/player', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'video.html'));
});

// Start the server
app.listen(3020, () => {
    console.log('Server is running on http://localhost:3020');
});
