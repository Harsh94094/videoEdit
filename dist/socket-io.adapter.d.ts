import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { Server, ServerOptions } from 'socket.io';
export declare class SocketIoAdapter extends IoAdapter {
    private app;
    private ioServer;
    constructor(app: INestApplication);
    createIOServer(port: number, options?: ServerOptions): Server;
}
