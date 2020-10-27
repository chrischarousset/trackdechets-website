# Trackdéchets - Site Web

Ce dépôt contient les sources du site web de [Trackdéchets](https://trackdechets.beta.gouv.fr).

- [Installation](#installation)
- [Déploiement](#deploiement)
- [Modifier les CGU](#modifier-les-cgu)
- [Ajouter un partenaire](#ajouter-un-partenaire)

## Installation

1. Installer Node.js
2. Lancer la commande `npm install`
3. Démarrer l'application via la commande `npm start`

## Déploiement

Le site est automatiquement déployée comme une page GitHub (branche `gh-pages`) lorsqu'un nouveau commit est poussé sur la branche `master`.
Ce déploiement est effectué via une [action GitHub](./.github/workflows/deploy.yml).

## Modifier les CGU

Les CGU sont rédigées en markdown dans le fichier `content/pages/cgu.md`.
Il est possible de les éditer directement sur GitHub :

- [Éditer le fichier `content/pages/cgu.md`](https://github.com/MTES-MCT/trackdechets-website/edit/master/content/pages/cgu.md)

Un résumé de la syntaxe markdown est disponible ici : [https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)

## Ajouter un partenaire

Pour ajouter un partenaire, il suffit d'ajouter le logo dans le répertoire `content/partners`.

Il peut être nécessaire de redimmensionner le logo afin de l'équilibrer par rapport aux autres.
Les logos font entre 180 et 220 pixels de largeur, en cas de doute commencez par 200.

Il est possible d'uploader un logo directement sur GitHub :

- [Uploader un logo dans `content/partners`](https://github.com/MTES-MCT/trackdechets-website/upload/master/content/partners)

## LICENCE

[MIT](./LICENSE)
