import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';


@Injectable({ providedIn: 'root' })
export class MessageService {
  private messages$ = new BehaviorSubject<Message[]>([]);

  getMessages() {
    return this.messages$.asObservable();
  }

  sendMessage(msg: Message) {
    this.messages$.next([...this.messages$.value, msg]);
  }
}
