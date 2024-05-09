Run the backend server with docker:

```bash
docker run -p 80:80 -p 8080:8080 -e RTSP_STREAM_DEBUG=true roverr/rtsp-stream:2-management
```

Checkout the docs at https://github.com/Roverr/rtsp-stream/blob/master/docs/api/README.md

Run the frontend:

```bash
pnpm dev
```
