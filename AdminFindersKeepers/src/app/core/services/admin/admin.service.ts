import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Stats } from '../../models/stats.model';
import { Users } from '../../models/users.model';
import { UserObject } from '../../models/object.model'
import { Conversation } from '../../models/conversation.model';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl = environment.apiUrl.replace(/\/+$/, '');

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(`${this.baseUrl}/admin/stats`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors du chargement des statistiques'));
      })
    );
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.baseUrl}/users`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors du chargement des utilisateurs'));
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors de la suppression de l\'utilisateur'));
      })
    );
  }

  updateUserStatus(id: number, userData: Partial<Users>) {
    return this.http.put<Users>(`${this.baseUrl}/users/${id}/status`, userData, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors de la mise à jour de l\'utilisateur'));
      })
    );
  }
  getAllObjects(): Observable<UserObject[]> {
    return this.http.get<UserObject[]>(`${this.baseUrl}/objects`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors du chargement des annonces'));
      })
    );
  }

  updateObjectReclame(id: number, reclame: boolean): Observable<any> {
    return this.http.put(`${this.baseUrl}/objects/${id}`, { reclame }, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur de mise à jour'));
      })
    );
  }


  deleteObject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/objects/${id}`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors de la suppression de l’objet'));
      })
    );
  }
  getAllConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(`${this.baseUrl}/conversation/all`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors du chargement des conversations'));
      })
    );
  }

  getMessagesByConversation(conversationId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}/messages/conversation/${conversationId}`, { withCredentials: true }).pipe(
      catchError(err => {
        return throwError(() => new Error('Erreur lors du chargement des messages'));
      })
    );
  }
}
