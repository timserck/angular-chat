import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChatStore } from '../store/chat.store';

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
    const text = this.form.value.message.trim();
    if (!text) return;

    this.chatStore.addMessage({
      id: Date.now(),
      user: this.chatStore.user(),
      text,
      timestamp: new Date()
    });

    this.form.reset(); // Vide le champ après envoi
  }
}
