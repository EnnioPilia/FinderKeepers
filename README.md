#  FindersKeepers 

 **Finders Keepers** est une application mobile permettant de signaler, rechercher et gérer des objets perdus ou trouvés.
 Ce projet a été développé en binôme dans le cadre de la formation CDA Simplon Grenoble 2025-2026.

---

## Structure du projet

```text
FindersKeepers/
│
├── BackFindersKeepers/              # API REST - Spring Boot 
├── FrontFindersKeepers/             # Application mobile + web - React Native / React
├── AdminFindersKeepers/             # Interface d’administration - Angular
└── README.md
```

---

##  Présentation

Application permettant de :

-  Rechercher des objets perdus/trouvés  
-  Publier des annonces  
-  Ajouter photos + localisation  
-  Échanger entre utilisateurs  
-  Gérer son profil  
-  Administrer la plateforme  

---

##  Architecture

```text
Clients (Mobile / Web / Admin)
            ↓
        API Gateway
            ↓
 ┌───────────────┬───────────────┬───────────────┬───────────────┐
 │ User Service  │ Ads Service   │ Message Svc   │ File Service  │
 └───────────────┴───────────────┴───────────────┴───────────────┘
            ↓
     Databases (SQL)
```

---

## Backend – Spring Boot

###  Services

- Service Utilisateur (auth, JWT)
- Service Annonces (CRUD objets)
- Service Messagerie (messages privés)
- Service Fichiers (upload images)
- API Gateway

###  Stack

- Java 17
- Spring Boot 3
- Spring Security + JWT
- PostgreSQL / MySQL
- Maven

###  Lancement

```bash
cd backend
./mvnw clean install
```

API : http://localhost:8080

---

##  Frontend – React Native + React

###  Fonctionnalités

- Recherche et filtrage
- Consultation des annonces
- Authentification
- Navigation mobile + web

###  Stack

- React Native (Expo)
- React Web
- Axios
- React Navigation
- AsyncStorage
- Jest

###  Lancement

```bash
cd frontend
npm install
npm start
```

---

## Admin – Angular

###  Fonctionnalités

- Dashboard statistiques
- Gestion utilisateurs
- Modération annonces
- Gestion messages

### Stack

- Angular
- Angular Router
- HttpClient
- JWT

###  Lancement

```bash
cd admin
npm install
ng serve
```

Interface : http://localhost:4200

---

##  Installation globale

```bash
git clone https://github.com/EnnioPilia/FindersKeepers.git
cd FindersKeepers
```

Puis lancer chaque service séparément :

- backend
- frontend
- admin

---

##  Développeurs

- Ennio Pilia 
- Quentin Zampieri 

---

##  Licence

Projet pédagogique – Simplon (2025)
