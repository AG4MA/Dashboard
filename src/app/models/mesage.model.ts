export interface MessageInterface {
  userName: string;
  messageText: string;
  fromBackend?: boolean;
}

export class Message {
  userName: string = '';
  messageText: string = '';
  fromBackend?: boolean = true;

  constructor(configObj: MessageInterface) {
    if (configObj) {
      this.userName = configObj.userName;
      this.messageText = configObj.messageText;
      this.fromBackend = configObj.fromBackend ?? true;
    }
  }
}
