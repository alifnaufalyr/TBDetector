# Build frontend
FROM node:20-slim as frontend-builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Build backend and run
FROM node:20-slim
WORKDIR /app

# Copy backend files
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Copy built frontend
COPY --from=frontend-builder /app/dist ./frontend

# Copy model
COPY backend/model ./model

EXPOSE 3001

CMD ["npm", "start"]