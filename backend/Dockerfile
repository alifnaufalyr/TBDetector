# Use Node.js 18 with Debian Slim as base
FROM node:18-slim

# Set TensorFlow environment variables
ENV TF_CPP_MIN_LOG_LEVEL=2
ENV TF_ENABLE_ONEDNN_OPTS=0

# Install required dependencies for tfjs-node
RUN apt-get update && \
    apt-get install -y python3 build-essential && \
    rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend files
COPY . .

# Copy model folder specifically
COPY model ./model

# Copy frontend build
COPY ../frontend/dist ./frontend

# Expose the application port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
