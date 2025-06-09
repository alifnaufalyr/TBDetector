# Use Node.js 16 with Debian Slim as base
FROM node:16-slim

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
