from livereload import Server, shell

server = Server()

# Watch the current directory
server.watch('.', shell('Reloading'))

server.serve(root='.', port=5500)
