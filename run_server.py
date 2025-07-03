#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 52677
os.chdir('/workspace')

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

print(f"Starting server on port {PORT}")
print("Access at: https://52677-9088200f-d208-44ce-bd66-3de39f0ca821.h1097.daytona.work")

with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    httpd.serve_forever()