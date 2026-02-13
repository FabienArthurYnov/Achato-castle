## Achato Castle Microservice

> By Fabien ARTHUR and Thibaut FIGUEIRA

Ce microservice gère les opérations sur les châteaux (CRUD) et nécessite une sécurité renforcée :

- Toutes les routes requièrent un token de service (`x-service-token`)
- Les routes d'écriture (POST, PUT, DELETE) requièrent aussi un JWT (`Authorization: Bearer <token>`)

### Prérequis

- Copier `.env` en `.env.local` et renseigner vos paramètres.
- Récupérer le token de service auprès de l'administrateur.
- Obtenir un JWT via le microservice Auth (login/register).

### Sécurité

- Header obligatoire pour toutes les routes :
  - `x-service-token: <votre_token_service>`
- Header obligatoire pour routes privées :
  - `Authorization: Bearer <votre_jwt>`

### Routes Chateaux

#### GET /api/chateaux

- Liste tous les châteaux
- Headers : `x-service-token`

#### GET /api/chateaux/:id

- Récupère un château par son ID
- Headers : `x-service-token`

#### POST /api/chateaux

- Crée un nouveau château
- Headers : `x-service-token`, `Authorization: Bearer <jwt>`
- Body :

```json
{
  "Chateau_Name": "Château de Test",
  "Chateau_Price": 1000000,
  "Chateau_Adresse": "123 rue du Château",
  "Chateau_Size": "500m2",
  "Chateau_Rate": "5 étoiles",
  "Image_Id": 1,
  "User_Id": 2
}
```

#### PUT /api/chateaux/:id

- Modifie un château
- Headers : `x-service-token`, `Authorization: Bearer <jwt>`
- Body : (mêmes champs que POST)

#### DELETE /api/chateaux/:id

- Supprime un château
- Headers : `x-service-token`, `Authorization: Bearer <jwt>`

### Modèle Château

- Voir `src/models/chateau.model.js` pour la structure complète.

### Vérification des tokens

- Le middleware vérifie le token de service pour toutes les routes.
- Pour les routes privées, le JWT est vérifié via `/api/secure/verify` du microservice Auth.

### Interconnexion avec Auth

- Utilisez `/api/secure/login` ou `/api/secure/register` sur le microservice Auth pour obtenir un JWT.
- Exemple de login :

```json
{
  "User_Email": "user@email.com",
  "User_Password": "motdepasse"
}
```

### Exemple d'appel Postman

- Ajouter dans les headers :
  - `x-service-token: <votre_token_service>`
  - `Authorization: Bearer <votre_jwt>` (pour POST, PUT, DELETE)

---

Pour toute question sur la sécurité ou l'intégration, contactez l'équipe Auth.
