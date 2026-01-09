import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private socket$ = webSocket<Message>('ws://localhost:3000');

  messages$ = this.socket$.asObservable();

  sendMessage(msg: Message) {
    this.socket$.next(msg);
  }
}