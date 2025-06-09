#!/bin/bash

# Exit on error
set -e

# Set variables
IMAGE_NAME="nacit-lilongwe"
TAG="latest"
CONTAINER_NAME="nacit-lilongwe-container"

# Build the Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME:$TAG .

# Check if container already exists and remove it if it does
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container..."
    docker rm -f $CONTAINER_NAME
fi

# Run the container
echo "Starting container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 3000:3000 \
  --env-file .env.docker \
  $IMAGE_NAME:$TAG

echo "\nContainer is running!"
echo "- Local:   http://localhost:3000"
echo "- Network: http://$(hostname -I | awk '{print $1}'):3000"

echo "\nView logs: docker logs -f $CONTAINER_NAME"
echo "Stop container: docker stop $CONTAINER_NAME"
echo "Remove container: docker rm -f $CONTAINER_NAME"
