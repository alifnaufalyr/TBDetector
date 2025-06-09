# Build frontend
FROM node:18-slim as frontend-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Build backend and run
FROM node:18-slim
WORKDIR /app

# Copy backend files
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Copy built frontend from builder stage
COPY --from=frontend-builder /frontend/dist ../frontend/dist

# Copy model files
COPY backend/model/ ./model/

# Copy database file
COPY backend/tb_history.db ./tb_history.db

# Ensure model directory exists and has correct permissions
RUN chmod -R 755 ./model/

EXPOSE 3001

ENV NODE_ENV=production
CMD ["npm", "start"]