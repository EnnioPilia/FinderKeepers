export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  enabled: boolean;
  age?: number | null;
  dateCreation: string;
  verifiedAt?: string | null;
  actif: boolean;
  username: string;
}

export interface Conversation {
  id: number;
  nom: string;
  user1: User;
  user2: User;
  partagee: boolean;
}
