# 🚀 Top Prompts Library - 180+ Premium AI Prompts

Une collection soigneusement organisée de 180+ prompts AI de haute qualité, catégorisés et prêts à l'emploi pour ChatGPT, Claude, et d'autres modèles d'IA.

## ✨ Caractéristiques

- **180+ Prompts de Qualité Professionnelle** (en cours d'expansion vers 1000+)
- **11 Catégories Complètes** :
  - 💻 Development & Coding (20 prompts)
  - 📈 Marketing & SEO (20 prompts)
  - ✍️ Creative Writing (20 prompts)
  - 💼 Business & Strategy (15 prompts)
  - 🎓 Education & Learning (15 prompts)
  - ⚡ Productivity & Time Management (15 prompts)
  - 📊 Data Analysis & Insights (15 prompts)
  - 🎨 Design & UI/UX (15 prompts)
  - 🤖 AI/ML & Data Science (15 prompts) **NOUVEAU**
  - 💼 Sales & Customer Success (15 prompts) **NOUVEAU**
  - 📱 Social Media & Community (15 prompts) **NOUVEAU**

### Fonctionnalités Avancées

- **Interface Moderne** avec design élégant
- **Toggle Dark/Light Mode** ⚡ - Personnalisez votre expérience visuelle
- **Système de Favoris** ⭐ - Sauvegardez vos prompts préférés localement
- **Export de Données** 📥 - Exportez vos prompts en JSON ou CSV
- **Recherche en Temps Réel** dans tous les prompts
- **Filtres Avancés** par catégorie et niveau de difficulté
- **Copie en Un Clic** pour utiliser immédiatement les prompts
- **100% Responsive** - fonctionne sur tous les appareils
- **Pas de Backend** - fonctionne entièrement côté client
- **localStorage** - Vos favoris et préférences sont sauvegardés

## 🎯 Niveaux de Difficulté

Chaque prompt est classé selon trois niveaux :

- 🟢 **Beginner** - Simple et direct, idéal pour commencer
- 🟡 **Intermediate** - Nécessite une compréhension de base du domaine
- 🔴 **Advanced** - Pour utilisateurs expérimentés avec expertise

## 🚀 Installation et Utilisation

### Option 1: Ouvrir Localement

1. Clonez ce repository :
```bash
git clone https://github.com/ludovicsanchez38-creator/Synoptia-Prompts-utiles.git
cd Synoptia-Prompts-utiles
```

2. Ouvrez `index.html` dans votre navigateur

C'est tout! Aucune installation de dépendances nécessaire.

### Option 2: Hébergement Web

Vous pouvez héberger cette application sur n'importe quel service d'hébergement statique :
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Ou tout serveur web

## 📖 Comment Utiliser

1. **Personnaliser** - Cliquez sur le bouton 🌙/☀️ en haut à droite pour changer de thème
2. **Parcourir** - Explorez les 180+ prompts organisés en 11 catégories
3. **Rechercher** - Utilisez la barre de recherche pour trouver des prompts spécifiques
4. **Filtrer** - Filtrez par catégorie ou niveau de difficulté
5. **Favoris** ⭐ - Cliquez sur l'étoile pour sauvegarder vos prompts favoris
6. **Voir Favoris** - Cliquez sur "Show Favorites" pour voir uniquement vos favoris
7. **Cliquer** - Cliquez sur une carte pour voir le prompt complet
8. **Copier** - Cliquez sur "Copy Prompt" pour copier dans le presse-papiers
9. **Exporter** - Exportez vos prompts filtrés en JSON ou CSV
10. **Utiliser** - Collez dans ChatGPT, Claude, ou votre IA préférée

### Nouvelles Fonctionnalités 🎉

- **Favoris** : Tous vos favoris sont sauvegardés localement dans votre navigateur
- **Thème** : Votre préférence de thème (dark/light) est mémorisée
- **Export** : Exportez les prompts actuellement affichés (respecte les filtres actifs)

## 🎨 Personnalisation des Prompts

Chaque prompt utilise des placeholders entre crochets `[PLACEHOLDER]` que vous devez remplacer :

Exemple :
```
Avant: "Create a [COMPONENT] for [USE CASE]"
Après: "Create a Button Component for User Authentication"
```

## 🔧 Structure du Projet

```
Synoptia-Prompts-utiles/
├── index.html          # Page principale
├── styles.css          # Styles CSS modernes
├── app.js             # Logique JavaScript
├── prompts-data.json  # Base de données des prompts
└── README.md          # Documentation
```

## 📊 Format des Données

Les prompts sont stockés dans `prompts-data.json` avec la structure suivante :

```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "icon": "🎯",
      "description": "Category description",
      "prompts": [
        {
          "id": "prompt-id",
          "title": "Prompt Title",
          "description": "Short description",
          "prompt": "Full prompt text with [PLACEHOLDERS]",
          "tags": ["tag1", "tag2"],
          "difficulty": "beginner|intermediate|advanced"
        }
      ]
    }
  ]
}
```

## 🤝 Contribution

Les contributions sont les bienvenues! Pour ajouter de nouveaux prompts :

1. Fork ce repository
2. Ajoutez vos prompts dans `prompts-data.json`
3. Suivez la structure existante
4. Assurez-vous que vos prompts sont :
   - Clairs et bien formatés
   - Testés avec des modèles d'IA
   - Correctement catégorisés
   - Avec des tags pertinents
5. Soumettez une Pull Request

### Guidelines pour les Prompts

- ✅ Utilisez des placeholders clairs `[PLACEHOLDER]`
- ✅ Incluez des instructions détaillées
- ✅ Spécifiez les livrables attendus
- ✅ Ajoutez des tags pertinents
- ✅ Testez vos prompts avant soumission
- ❌ Évitez le jargon inutile
- ❌ Ne copiez pas de prompts propriétaires

## 📚 Sources d'Inspiration

Cette collection est basée sur des recherches approfondies des meilleures pratiques en prompt engineering, incluant :

- GitHub awesome-chatgpt-prompts
- Anthropic Claude Prompt Library
- God of Prompt Library
- OpenAI Best Practices
- Community contributions

## 🔮 Roadmap

### ✅ Complété (Novembre 2025)

- [x] Structure de base avec 120+ prompts
- [x] Interface utilisateur moderne
- [x] Recherche et filtrage
- [x] Expansion à 180+ prompts
- [x] Ajout de catégories supplémentaires :
  - [x] AI & Machine Learning ✅
  - [x] Sales & Customer Success ✅
  - [x] Social Media & Community ✅
- [x] Système de favoris avec localStorage ⭐
- [x] Export de prompts (JSON et CSV) 📥
- [x] Toggle dark/light mode 🌓

### 🚧 À Venir

- [ ] Expansion à 500 prompts
- [ ] Expansion à 1000+ prompts
- [ ] Nouvelles catégories :
  - [ ] Content Creation
  - [ ] Research & Analysis
  - [ ] Personal Development
  - [ ] Finance & Accounting
  - [ ] Legal & Compliance
  - [ ] Healthcare
  - [ ] E-commerce
  - [ ] Project Management
  - Et plus encore...
- [ ] Partage de prompts favoris
- [ ] Système de notation des prompts
- [ ] Historique d'utilisation
- [ ] Versions multilingues (EN, ES, DE, etc.)
- [ ] API pour accès programmatique
- [ ] Suggestions de prompts par IA
- [ ] Collections personnalisées

## 💡 Cas d'Usage

Cette bibliothèque est parfaite pour :

- **Développeurs** - Génération de code, debugging, reviews
- **Marketeurs** - Stratégies SEO, contenu, campagnes
- **Écrivains** - Brainstorming, édition, storytelling
- **Entrepreneurs** - Business plans, stratégies, analyses
- **Éducateurs** - Plans de cours, explications, évaluations
- **Designers** - UX research, wireframes, prototypes
- **Analystes** - Visualisation de données, insights, rapports
- **Et bien plus encore!**

## 🌐 Compatibilité

Testé et compatible avec :

- ✅ ChatGPT (GPT-3.5, GPT-4, GPT-4 Turbo)
- ✅ Claude (Claude 3 Opus, Sonnet, Haiku)
- ✅ Google Gemini
- ✅ Perplexity AI
- ✅ Autres modèles de langage

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 🙏 Remerciements

Merci à toute la communauté d'IA et de prompt engineering pour le partage de connaissances et de meilleures pratiques.

## 📞 Contact

Pour questions, suggestions ou collaborations :
- **Email** : ludo@synoptia.fr
- **Entreprise** : Synoptia
- Créez une issue sur GitHub
- Soumettez une Pull Request
- Partagez avec la communauté

---

**⭐ Si vous trouvez ce projet utile, n'hésitez pas à lui donner une étoile!**

Développé par **Synoptia** avec ❤️ pour la communauté AI
