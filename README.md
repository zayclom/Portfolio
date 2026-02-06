# Portfolio de Moad Elhoussaini

Portfolio personnel moderne et responsive présentant mes compétences, projets et expérience en développement web et informatique.

## 🚀 Caractéristiques

- **Design Moderne** : Thème sombre avec effets néon et animations fluides
- **Responsive** : Compatible avec tous les appareils (mobile, tablette, desktop)
- **Performance** : Code optimisé pour un chargement rapide
- **Interactif** : Formulaire de contact avec backend API (optionnel)
- **Accessible** : Conçu selon les bonnes pratiques d'accessibilité
- **Effets spéciaux** : Animations sur les compétences, cartes 3D, particules

## 📋 Sections

1. **Accueil** : Présentation avec fond étoilé animé
2. **À Propos** : Informations personnelles, formation et éducation
3. **Projets** : Projets académiques et personnels
4. **Compétences** : Technologies organisées par catégories (IT, Programmation, Databases, APIs, Créatif, Hobbies)
5. **Contact** : Formulaire et informations de contact

## 🛠️ Technologies Utilisées

### Frontend
- HTML5
- CSS3 (Animations, Flexbox, Grid, Glassmorphism)
- JavaScript (Vanilla - Intersection Observer, Particles, 3D Effects)
- Font Awesome 6.4.0 (Icônes)
- Google Fonts (Inter)

### Backend (Optionnel)
- Node.js
- Express.js
- Nodemailer (Envoi d'emails)
- CORS
- dotenv (Configuration)

## 📦 Installation

### Frontend uniquement

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
```

2. Lancer le serveur de développement :
```bash
npm start
```

Ou simplement ouvrir `frontend/index.html` dans votre navigateur.

### Avec Backend

1. Installer les dépendances du backend :
```bash
npm run backend:install
```

2. Configurer les variables d'environnement :
```bash
cd backend
cp .env.example .env
```

3. Éditer `.env` avec vos informations email (voir [backend/README.md](backend/README.md))

4. Lancer le backend :
```bash
npm run backend
```

5. Activer le backend dans [frontend/script.js](frontend/script.js) :
```javascript
const USE_BACKEND = true;
```

## 🔧 Développement

Frontend avec rechargement automatique :
```bash
npm run dev
```

Backend en mode développement :
```bash
npm run backend:dev
```

## 🌐 Déploiement

### GitHub Pages
1. Pusher le code sur GitHub
2. Aller dans Settings > Pages
3. Sélectionner la branche et le dossier `/frontend`
4. Le site sera disponible à `https://votre-username.github.io/portfolio`

### Netlify
1. Créer un compte sur Netlify
2. Connecter votre repository GitHub
3. Configurer le build :
   - Build command : (laisser vide)
   - Publish directory : `frontend`
4. Déployer

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## 📝 Personnalisation

Pour personnaliser le portfolio :

1. **Informations personnelles** : Modifier `frontend/index.html`
2. **Couleurs et styles** : Ajuster les variables CSS dans `frontend/styles.css` (section `:root`)
3. **Projets** : Ajouter/modifier les cartes de projets dans la section `#projects`
4. **Compétences** : Mettre à jour la section `#skills`

## 📱 Responsive Breakpoints

- Mobile : < 480px
- Tablette : 481px - 768px
- Desktop : 769px - 1200px
- Large Desktop : > 1200px

## 🎨 Palette de Couleurs

- Primary : `#667eea`
- Secondary : `#764ba2`
- Accent : `#f093fb`
- Text : `#2d3748`
- Background : `#ffffff`

## 📧 Contact

**Moad Elhoussaini**
- Email : moadelhoussaini2@gmail.com
- Téléphone : (438) 364 0807
- Localisation : Montréal, QC H3L 2C8

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Font Awesome pour les icônes
- Google Fonts pour la typographie Inter
- Inspiration de designs modernes de portfolio

---

**Créé avec ❤️ par Moad Elhoussaini**
