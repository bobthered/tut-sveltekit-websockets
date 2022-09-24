import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';

export const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server) {
    const io = new Server(server.httpServer);

    io.on('connect', (socket) => {
      socket.emit('eventFromServer', 'Hello, World!');
    });
  }
};

const config = {
  plugins: [sveltekit(), webSocketServer]
};

export default config;
