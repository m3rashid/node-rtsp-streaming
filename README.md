Run the backend server with docker:

```bash
docker run -p 80:80 -p 8080:8080 -e RTSP_STREAM_DEBUG=true roverr/rtsp-stream:2-management
```

Run the frontend:

```bash
pnpm dev
```
