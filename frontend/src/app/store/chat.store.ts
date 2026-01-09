import { Injectable, signal } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class ChatStore {
  messages = signal<Message[]>([]);   // ← tableau
  user = signal('John');

  constructor(private ws: WebsocketService) {
    this.ws.messages$.subscribe((msg: Message) => {
      this.messages.update(list => [...list, msg]);  // OK
    });
  }

  addMessage(msg: Message) {
    this.ws.sendMessage(msg);
  }
}
