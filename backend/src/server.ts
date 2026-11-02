import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/ratao_hub_db'
});

// Basic Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', project: 'RATAO_HUB' });
});

// WebSockets & WebRTC Signaling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Chat system
  socket.on('send_message', (data) => {
    // data: { channelId, userId, content }
    // Broadcast to channel room
    io.to(data.channelId).emit('receive_message', data);
  });

  socket.on('join_channel', (channelId) => {
    socket.join(channelId);
  });

  // WebRTC Signaling for Calls
  socket.on('join_call', (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user_joined_call', userId, socket.id);
  });

  socket.on('offer', (data) => {
    socket.to(data.target).emit('offer', data);
  });

  socket.on('answer', (data) => {
    socket.to(data.target).emit('answer', data);
  });

  socket.on('ice_candidate', (data) => {
    socket.to(data.target).emit('ice_candidate', data);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`RATAO_HUB Backend rodando na porta ${PORT}`);
});
