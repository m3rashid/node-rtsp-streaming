# Step 1: Use the ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Step 2: Install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Step 3: Install nodejs 18 LTS
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Step 4: Install pnpm
RUN npm install -g pnpm

# Step 5: Expose the ports 3000 and 8000
EXPOSE 3000
EXPOSE 8000

WORKDIR /app

# Step 6: Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Step 7: Run pnpm install
RUN pnpm install

# Step 8: Copy the rest of the files
COPY . .

# Step 9: Run the container by node index.js
CMD ["node", "index.js"]


