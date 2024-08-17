document.getElementById('imageDiv').addEventListener('click', function() {
	document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
	console.log('File selected!');
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			document.getElementById('preview').src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
});
