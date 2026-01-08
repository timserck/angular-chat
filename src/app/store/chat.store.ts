import { Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Message } from '../models/message.model';
import { MessageService } from '../services/message.service';

@Injectable({ providedIn: 'root' })
export class ChatStore {
  messages; // Signal readonly, initialisation dans le constructeur
  user = signal('John');

  constructor(private service: MessageService) {
    // Ici, service est déjà initialisé
    this.messages = toSignal(this.service.getMessages(), { initialValue: [] });
  }

  addMessage(msg: Message) {
    this.service.sendMessage(msg); // Modification via le service
  }

  messagesByUser(user: string) {
    return this.messages().filter(m => m.user === user);
  }
}
