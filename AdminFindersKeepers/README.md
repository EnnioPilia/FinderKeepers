#  AdminFindersKeepers – Interface web d’administration Angular

Frontend web d’administration pour l’application Finders Keepers, destiné aux modérateurs et gestionnaires.  

Permet la gestion des utilisateurs, annonces, et le suivi des signalements.

---

##  Fonctionnalités principales

-  Tableau de bord avec statistiques (annonces, utilisateurs, objets retrouvés)  
-  Gestion des utilisateurs : recherche, tri, blocage, suppression  
-  Modération des annonces : consultation, suppression, archivage  
-  Accès aux messages pour gestion des litiges (rôle admin uniquement)  
-  Authentification sécurisée via JWT  

---

## 🛠️ Stack technique

| Frontend                  | Bibliothèques                | Tests                    | Déploiement              |
|---------------------------|-----------------------------|--------------------------|--------------------------|
| Angular 19                | Angular Router, HttpClient  | Jasmine, Karma           | Netlify, Vercel          |

---

##  Installation et lancement

1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/EnnioPilia/AdminFindersKeepers.git
   cd AdminFindersKeepers
   ```
2. Installer les dépendances :  
   ```bash
   npm install
   ```
3. Démarrer le serveur de développement :  
   ```bash
   ng serve
   ```
4. L’interface sera accessible sur `http://localhost:4200`

---

##  Auteurs

**Ennio Pilia** – Développeur Fullstack Java / Angular  
**Quentin** – Co-développeur frontend admin  


---

##  Captures d’écran

![Capture écran 1](./Docu/Capture/admin_screen1.png)  
*Tableau de bord*

![Capture écran 2](./Docu/Capture/admin_screen2.png)  
*Gestion des utilisateurs*

---


