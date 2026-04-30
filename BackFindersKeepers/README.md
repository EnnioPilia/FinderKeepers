# BackFindersKeepers – Backend Spring Boot pour l’application FindersKeepers

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

##  Développeurs
 **Ennio Pilia** 
**Quentin Zampieri** 

---

