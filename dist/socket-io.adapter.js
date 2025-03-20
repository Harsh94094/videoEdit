"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
class SocketIoAdapter extends platform_socket_io_1.IoAdapter {
    app;
    ioServer;
    constructor(app) {
        super(app);
        this.app = app;
    }
    createIOServer(port, options) {
        console.log('✅ Custom Socket.io Adapter Initializing...');
        this.ioServer = super.createIOServer(port, {
            cors: { origin: '*' },
        });
        return this.ioServer;
    }
}
exports.SocketIoAdapter = SocketIoAdapter;
//# sourceMappingURL=socket-io.adapter.js.map