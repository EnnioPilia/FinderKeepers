Finders Keepers – Monorepo Fullstack

Application complète de gestion d’objets perdus et trouvés, développée en architecture fullstack moderne avec un backend Java Spring Boot et plusieurs interfaces frontend (mobile, web et admin).

Présentation du projet

Finders Keepers permet aux utilisateurs de :

Publier et rechercher des objets perdus ou trouvés

📍 Localiser des annonces

💬 Communiquer entre utilisateurs

👤 Gérer leur profil

🛡️ Administrer la plateforme via une interface dédiée

Le projet est structuré en monorepo, regroupant toutes les parties de l’application.

🧱 Architecture du monorepo
FindersKeepers/
│
├── backend/                → API Spring Boot (Java 17)
├── frontend/               → App mobile + web (React Native + React)
├── admin/                  → Interface admin (Angular)
└── README.md               → Documentation globale
🛠️ Stack technique
🔧 Backend

Java 17

Spring Boot 3

Spring Security (JWT)

JPA / Hibernate

PostgreSQL / MySQL

📱 Frontend (User)

React Native (Expo)

React (Web)

React Navigation

Axios

Context API

🛡️ Frontend Admin

Angular 19

Angular Router

HttpClient


✨ Fonctionnalités principales
👤 Utilisateur

Inscription / Connexion (JWT)

Gestion de profil

Publication d’annonces (objets perdus/trouvés)

Upload d’images

Recherche et filtres avancés

💬 Interaction

Messagerie entre utilisateurs

Consultation des annonces

🛡️ Administration

Gestion des utilisateurs

Modération des annonces

Accès aux messages (admin)

Dashboard avec statistiques

🚀 Installation et lancement
1. Cloner le monorepo
git clone https://github.com/EnnioPilia/FindersKeepers.git
cd FindersKeepers
2. Lancer le backend
cd backend
./mvnw clean install
./mvnw spring-boot:run

API disponible sur :
http://localhost:8080

3. Lancer le frontend (mobile + web)
cd frontend
npm install
npm start

Mobile : via Expo Go

Web : navigateur

4. Lancer le back office (admin)
cd admin
npm install
ng serve

Accessible sur :
http://localhost:4200

⚙️ Configuration

Avant de lancer le projet :

Configurer la base de données dans :
backend/src/main/resources/application.yml

Vérifier :

URL de l’API dans le frontend

Clés JWT

Ports utilisés

📸 Aperçu
📱 Application utilisateur

Recherche d’objets

Détail d’annonce

Profil utilisateur

🛡️ Interface admin

Dashboard

Gestion utilisateurs

Modération

(Ajoute ici tes captures si tu veux centraliser)

📌 Auteurs

👨‍💻 Quentin – Développeur Fullstack

Backend Spring Boot

Frontend React / React Native

Admin Angular

👨‍💻 Ennio Pilia – Co-développeur

Contribution backend et frontend

📄 Documentation

API : Swagger (à venir)

README spécifiques :

/backend/README.md

/frontend/README.md

/admin/README.md

📆 Contexte

🎓 Projet fullstack réalisé dans le cadre d’un apprentissage en développement web et mobile
📅 2025
