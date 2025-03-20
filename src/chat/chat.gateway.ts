import {
      WebSocketGateway,
      WebSocketServer,
      SubscribeMessage,
      MessageBody,
      ConnectedSocket,
      OnGatewayInit,
      OnGatewayConnection,
      OnGatewayDisconnect,
    } from '@nestjs/websockets';
    import { Server, Socket } from 'socket.io';
    import { ChatService } from './chat.service';
    
    @WebSocketGateway({ cors: { origin: '*' } }) // ✅ Ensure Socket.io is used
    export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
      @WebSocketServer()
      server: Server; // ✅ Ensure this is a Socket.io server
    
      constructor(private readonly chatService: ChatService) {}
    
      afterInit(server: Server) {
        console.log('✅ WebSocket Server Initialized:', server instanceof Server ? 'Socket.io Server' : 'Incorrect Server');
        this.server = server; // ✅ Explicitly assign the correct Socket.io instance
      }
    
      handleConnection(client: Socket) {
        console.log(`🟢 Client connected: ${client.id}`);
      }
    
      handleDisconnect(client: Socket) {
        console.log(`🔴 Client disconnected: ${client.id}`);
      }
    
      @SubscribeMessage('sendMessage')
      async handleMessage(
        @MessageBody() data: { sender: string; message: string; room: string },
        @ConnectedSocket() client: Socket,
      ) {
        console.log('📩 Received message:', data);
    
        try {
          // Save the message to MongoDB
          const savedMessage = await this.chatService.createMessage(data);
    
          // Ensure `this.server` is a valid Socket.io instance
          if (!(this.server instanceof Server)) {
            console.error('❌ WebSocket server is not a valid Socket.io instance');
            return;
          }
    
          // Emit the message to all clients in the room
          console.log(`📡 Broadcasting message to room: ${data.room}`);
          this.server.to(data.room).emit('receiveMessage', savedMessage);
        } catch (error) {
          console.error('❌ Error handling message:', error);
        }
      }
    
      @SubscribeMessage('joinRoom')
      handleJoinRoom(@ConnectedSocket() client: Socket, @MessageBody() room: string) {
        console.log(`🔹 Client ${client.id} joining room: ${room}`);
        client.join(room);
        client.emit('joinedRoom', `✅ Successfully joined room: ${room}`);
      }
    }
    