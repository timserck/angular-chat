import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChatStore } from '../store/chat.store';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, public chatStore: ChatStore) {
    this.form = this.fb.group({
      message: ['']  // Champ initialisé vide
    });
  }

  sendMessage() {
    const msg: Message = {
      id: Date.now(),
      user: this.chatStore.user(),
      text: this.form.value.message!,
      timestamp: new Date()
    };
  
    this.chatStore.addMessage(msg);
  }
  
}
