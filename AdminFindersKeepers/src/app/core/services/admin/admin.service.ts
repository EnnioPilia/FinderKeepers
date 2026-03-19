import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.prod';
import { Stats } from '../../models/stats.model';
import { Users } from '../../models/users.model';
import { UserObject } from '../../models/object.model'
import { Conversation } from '../../models/conversation.model';  // j'imagine que tu as ce fichier
import { Message } from '../../models/message.model';  // j'imagine que tu as ce fichier

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl = environment.apiUrl.replace(/\/+$/, '');

  constructor(private http: HttpClient) {}

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(`${this.baseUrl}/admin/stats`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des statistiques', err);
        return throwError(() => new Error('Erreur lors du chargement des statistiques'));
      })
    );
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/users`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des utilisateurs', err);
        return throwError(() => new Error('Erreur lors du chargement des utilisateurs'));
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error(`Erreur lors de la suppression de l'utilisateur avec id ${id}`, err);
        return throwError(() => new Error('Erreur lors de la suppression de l\'utilisateur'));
      })
    );
  }

updateUserStatus(id: number, userData: Partial<Users>) {
  return this.http.put<Users>(`${this.baseUrl}/users/${id}/status`, userData, { withCredentials: true }).pipe(
    catchError(err => {
      console.error('Erreur lors de la mise à jour de l\'utilisateur', err);
      return throwError(() => new Error('Erreur lors de la mise à jour de l\'utilisateur'));
    })
  );
}
  getAllObjects(): Observable<UserObject[]> {
    return this.http.get<UserObject[]>(`${this.baseUrl}/objects`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des annonces', err);
        return throwError(() => new Error('Erreur lors du chargement des annonces'));
      })
    );
  }

updateObjectReclame(id: number, reclame: boolean): Observable<any> {
  return this.http.put(`${this.baseUrl}/objects/${id}`, { reclame }, { withCredentials: true }).pipe(
    catchError(err => {
      console.error('Erreur lors de la mise à jour de l\'état reclame', err);
      return throwError(() => new Error('Erreur de mise à jour'));
    })
  );
}


  deleteObject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/objects/${id}`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error(`Erreur lors de la suppression de l'objet ${id}`, err);
        return throwError(() => new Error('Erreur lors de la suppression de l’objet'));
      })
    );
  }
    getAllConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(`${this.baseUrl}/conversation/all`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error('Erreur lors du chargement des conversations', err);
        return throwError(() => new Error('Erreur lors du chargement des conversations'));
      })
    );
  }

  getMessagesByConversation(conversationId: number): Observable<Message[]> {
      console.log(`Calling API: getMessagesByConversationId with conversationId=${conversationId}`);

    return this.http.get<Message[]>(`${this.baseUrl}/messages/conversation/${conversationId}`, { withCredentials: true }).pipe(
      catchError(err => {
        console.error(`Erreur lors du chargement des messages de la conversation ${conversationId}`, err);
        return throwError(() => new Error('Erreur lors du chargement des messages'));
      })
    );
  }
}
