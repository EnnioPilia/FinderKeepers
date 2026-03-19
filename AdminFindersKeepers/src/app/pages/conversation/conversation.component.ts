import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin/admin.service';
import { Conversation, User } from '../../core/models/conversation.model';
import { Message } from '../../core/models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ConversationComponent implements OnInit {

  conversations: Conversation[] = [];
  messages: Message[] = [];
  selectedConversationId?: number;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadConversations();
  }

  // Charge toutes les conversations
  loadConversations(): void {
    console.log('Chargement des conversations...');
    this.adminService.getAllConversations().subscribe({
      next: (data) => {
        console.log('Conversations reçues :', data);
        this.conversations = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des conversations', err);
      }
    });
  }

  // Charge les messages d'une conversation
  fetchMessagesByConversationId(conversationId: number): void {
    this.selectedConversationId = conversationId;
    console.log(`Chargement des messages pour la conversation ${conversationId}...`);
    this.adminService.getMessagesByConversation(conversationId).subscribe({
      next: (data: Message[]) => {
        console.log(`Messages reçus pour conversation ${conversationId}`, data);
        this.messages = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des messages :', err);
      }
    });
  }

  // Retourne le nom complet ou email d'un utilisateur
  getUserDisplayName(user: User): string {
    if (user.prenom && user.nom) {
      return `${user.prenom} ${user.nom}`;
    }
    return user.email;
  }
}
