Run the backend server with docker:

```bash
# to build the docker image
docker build -f ./Dockerfile . -t node-rtsp-streaming

# to run the container
docker run -p 3000:3000 -p 8000:8000 node-rtsp-streaming
```
