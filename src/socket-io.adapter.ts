import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { Server, ServerOptions } from 'socket.io';

export class SocketIoAdapter extends IoAdapter {
  private ioServer: Server;

  constructor(private app: INestApplication) {
    super(app);
  }

  createIOServer(port: number, options?: ServerOptions): Server {
    console.log('✅ Custom Socket.io Adapter Initializing...');
    
    
    this.ioServer = super.createIOServer(port, {
      cors: { origin: '*' }, 
    });

    return this.ioServer;
  }
}
