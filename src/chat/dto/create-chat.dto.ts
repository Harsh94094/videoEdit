export class CreateChatDto {

      sender: string;
      
      message: string;
      
      room: string;

      constructor(sender: string, message: string, room: string) {
        this.sender = sender;
        this.message = message;
        this.room = room;
      }
      
}
