#  FrontFindersKeepers – Application Frontend React Native + React

Bienvenue dans le frontend de **Finders Keepers**, une application mobile et web conçue pour la gestion simplifiée de ressources et la recherche efficace d’objets, développée dans le cadre de mes projets en développement fullstack.

---

## Accès à l’application

Ce frontend est prêt à être intégré avec le backend correspondant.  

Pour une démonstration complète, l’application peut être lancée localement via Expo ou déployée en environnement de test.

---

##  Présentation

Cette application offre une interface intuitive permettant aux utilisateurs de :  

- Rechercher et filtrer des objets disponibles  
- Consulter les détails des ressources trouvées  
- Gérer leur profil et leurs interactions  
- Naviguer facilement sur mobile et desktop grâce à React Native et React  

L’application est conçue en **mobile-first**, garantissant une expérience fluide et adaptée à toutes les tailles d’écran.

---

##  Responsive Design & Cross-Platform

- Conçue principalement avec **React Native** pour mobile (iOS et Android via Expo)  
- Interface complémentaire React Web pour navigation desktop  
- Gestion adaptative des tailles d’écran et ergonomie optimisée  

---

##  Fonctionnalités principales

-  Recherche et filtrage avancé d’objets  
-  Visualisation détaillée des ressources  
-  Authentification et gestion sécurisée des utilisateurs  
-  Navigation fluide avec React Navigation  
-  Stockage local et gestion d’état (AsyncStorage, Context API)  
-  Tests unitaires front (Jest, React Testing Library)  

---

##  Stack technique

| Frontend                     | Outils & Bibliothèques                  | Tests                    | Déploiement              |
|-----------------------------|---------------------------------------|--------------------------|--------------------------|
| React Native (Expo)          | React Navigation, AsyncStorage, Axios | Jest, React Testing Library | Expo Go, Vercel (web)    |
| React (Web)                  | React Router, Tailwind CSS              |                          |                          |

---

##  Lancer le projet en local

1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/EnnioPilia/FrontFindersKeepers.git
   cd FrontFindersKeepers
   ```
2. Installer les dépendances :  
   ```bash
   npm install
   ```
3. Démarrer l’application avec Expo :  
   ```bash
   npm start
   ```
4. Scanner le QR code avec l’application Expo Go sur mobile ou ouvrir dans un navigateur pour la version web.

---

##  Auteurs

 **Ennio Pilia** – Étudiant développeur Fullstack Java / React Native / React  
 Projet scolaire réalisé dans le cadre de mon apprentissages fullstack  
 Rôle principal : développement frontend React Native et React, intégration UI/UX, gestion des états et navigation  

 **Quentin** – Co-développeur frontend  
 Contribution : développement et optimisation de composants React Native, assistance sur l’architecture UI  

 Projet Simplon – Juillet 2025

---

##  Captures d’écran

Voici quelques exemples d’écrans extraits du projet :  

![Capture écran 1](./Docu/Capture/screen1.png)  
*Écran de recherche et filtrage*

![Capture écran 2](./Docu/Capture/screen2.png)  
*Vue détail d’un objet*

![Capture écran 3](./Docu/Capture/screen3.png)  
*Profil utilisateur et navigation*

---

﻿# BackFindersKeepers – Backend microservices Spring Boot pour l’application Finders Keepers

Backend Java 17+ basé sur une architecture microservices RESTful, fournissant les services essentiels pour l’application de signalement d’objets perdus/trouvés.

---

## Services principaux

-  Service Utilisateur : gestion de l’authentification, profils, rôles (JWT + refresh token)  
-  Service Annonces : CRUD des objets perdus/trouvés, gestion des photos, localisation  
-  Service Messagerie : stockage et chiffrement des messages privés entre utilisateurs  
-  Service Fichiers : upload, compression et accès sécurisé aux photos  
-  Service Gateway : API Gateway pour gestion centralisée des requêtes  

---

##  Stack technique

| Backend                  | Base de données       | Sécurité                 | Tests                   | Outils                      |
|--------------------------|----------------------|--------------------------|-------------------------|----------------------------|
| Java 17+ Spring Boot 3   | PostgreSQL / MySQL   | Spring Security, JWT     | JUnit, Mockito          | Maven, Docker, GitHub       |

---

##  Installation et lancement

1. Cloner le dépôt :  
   ```bash
   git clone https://github.com/EnnioPilia/BackFindersKeepers.git
   cd BackFindersKeepers
   ```
2. Configurer les bases de données et les paramètres dans `application.yml`.  
3. Construire et lancer les microservices via Maven et Docker Compose :  
   ```bash
   ./mvnw clean install
   ```
4. L’API Gateway sera accessible sur `http://localhost:8080`

---

##  Auteurs
 **Ennio Pilia** – Développeur Fullstack Java / Spring Boot  
**Quentin** – Co-développeur backend  

---

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

## Stack technique

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


