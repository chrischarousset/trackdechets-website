# Trackdéchets - Site Web

Ce dépôt contient les sources du site web de [Trackdéchets](https://trackdechets.beta.gouv.fr).

- [Trackdéchets - Site Web](#trackdéchets---site-web)
  - [Installation](#installation)
  - [Déploiement](#déploiement)
  - [Modifier les CGU](#modifier-les-cgu)
  - [Modifier les mentions d'accessibilité](#modifier-les-mentions-daccessibilité)
  - [Modifier la politique de confidentialité](#modifier-la-politique-de-confidentialité)
  - [Modifier les mentions légales](#modifier-les-mentions-légales)
  - [Ajouter un partenaire](#ajouter-un-partenaire)
  - [Ajouter une bannière d'incident](#ajouter-une-bannière-dincident)
  - [LICENCE](#licence)

## Installation

1. Installer Node.js 14
2. Lancer la commande `npm install`
3. Démarrer l'application via la commande `npm run dev`

## Déploiement

Le site est automatiquement déployé par Scalingo. Le script server.js est utilisé en production pour servir le build. 

## Modifier les CGU

Les CGU sont rédigées en markdown dans le fichier `content/pages/cgu.md`.
Il est possible de les éditer directement sur GitHub :

- [Éditer le fichier `content/pages/cgu.md`](https://github.com/MTES-MCT/trackdechets-website/edit/master/content/pages/cgu.md)

Un résumé de la syntaxe markdown est disponible ici : [https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

## Modifier les mentions d'accessibilité

Les mentions d'accessibilité sont rédigées en markdown dans le fichier `content/pages/a11y.md`.
Il est possible de les éditer directement sur GitHub :

- [Éditer le fichier `content/pages/a11y.md`](https://github.com/MTES-MCT/trackdechets-website/edit/master/content/pages/a11y.md)

## Modifier la politique de confidentialité

Pour mettre à jour la politique de confidentialité, il faut remplacer le fichier pdf `politique-de-confidentialite.pdf` situé dans le répertoire `static`.
Il est donc important que votre fichier porte exactement le même nom.

- [Uploader le fichier pdf dans `static`](https://github.com/MTES-MCT/trackdechets-website/upload/master/static)

## Modifier les mentions légales

Pour mettre à jour les mentions légales, il faut remplacer le fichier pdf `mentions-legales.pdf` situé dans le répertoire `static`.
Il est donc important que votre fichier porte exactement le même nom.

- [Uploader le fichier pdf dans `static`](https://github.com/MTES-MCT/trackdechets-website/upload/master/static)

## Ajouter un partenaire

Pour ajouter un partenaire, il suffit d'ajouter le logo dans le répertoire `content/partners`.

Il peut être nécessaire de redimmensionner le logo afin de l'équilibrer par rapport aux autres.
Les logos font entre 180 et 220 pixels de largeur, en cas de doute commencez par 200.

Il est possible d'uploader un logo directement sur GitHub :

- [Uploader un logo dans `content/partners`](https://github.com/MTES-MCT/trackdechets-website/upload/master/content/partners)

## Ajouter une bannière d'incident

En cas d'incident, il est possible d'ajouter une bannière sur toutes les pages pour informer les utilisateurs.
Pour ce faire, il faut modifier la propriété `siteMetadata.incident` dans le fichier `gatsby-config.js`.

Cette propriété peut contenir du HTML, par exemple pour ajouter un lien pointant vers une page externe.
Définir cette propriété comme une chaîne de caractère vide aura pour conséquence de ne pas afficher la bannière.

## LICENCE

[MIT](./LICENSE)
