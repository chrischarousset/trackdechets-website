---
url: "/cgu"
---

# Conditions Générales d’Utilisation de Trackdéchets

Les présentes conditions générales d’utilisation (dites « CGU ») fixent le cadre juridique de la Plateforme “Trackdéchets” et définissent les conditions d’accès et d’utilisation des services par l’Utilisateur.

# Article 1 - Champ d’application

Le présent document a pour objet d’encadrer l’utilisation de la Plateforme, qui est d’accès libre et gratuit à tout Utilisateur. La simple visite de la Plateforme suppose l’acceptation par tout Utilisateur des présentes conditions générales d’utilisation.
L’inscription sur la Plateforme peut entraîner l’application de conditions spécifiques, listées dans les présentes Conditions d’Utilisation. Toute utilisation du service est subordonnée à l’acceptation préalable et au respect intégral des présentes conditions générales d’utilisation (CGU).

# Article 2 - Objet

La plateforme Trackdéchets a pour objectif de faciliter et simplifier l’édition dématérialisée de bordereaux de suivi de déchets, d’en assurer la traçabilité et de sécuriser la démarche.

# Article 3 – Définitions

**« L’Utilisateur »** est toute personne inscrite utilisant la plateforme.
Les **« Services »** sont les fonctionnalités offertes par la plateforme pour répondre à ses finalités.
**« Le responsable de traitement »** est la personne qui, au sens de l’article 4 du règlement UE) n°2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données détermine les finalités et les moyens des traitements de données à caractère personnel.

# Article 4- Fonctionnalités

## 4.1 Création de compte

La création d'un compte utilisateur est gratuite et est ouverte à plusieurs types de profils :

- producteurs de déchets,
- professionnels de la gestion de déchets (collecteurs, installations de tri-transit-regroupement, installations de traitement),
  transporteurs de déchets
- éco-organismes
- courtiers et négociants

La création d’un compte est réalisée en ligne via le service. Elle est relative à une personne physique représentant l’entreprise et ayant autorité pour le faire. La création de compte se fait en 2 étapes : 1/ création de compte individuel associé à une adresse email 2/ rattachement d'un compte à un établissement. Pour bénéficier d’un compte sur le service (étape 1), il convient :

- de renseigner les champs obligatoires du formulaire d’inscription en ligne,
- d’activer le compte en cliquant sur le lien reçu par courriel à l’adresse email indiquée.


Le rattachement d'un établissement à un utilisateur (étape 2) est soumis à un processus de vérification permettant de s'assurer de l'appartenance de l'utilisateur à l'établissement. Un courrier contenant un code de vérification pourra éventuellement être envoyé à l'adresse renseignée au Registre du Commerce et des Sociétés.

## 4.2 Édition de bordereaux de suivi de déchets


### 4.2.1 En ligne

Après connexion, l’utilisateur est dirigé vers le tableau comportant les bordereaux le concernant (si des bordereaux le concernant ont été édités). Le tableau permet de chercher, trier et vérifier l’état des bordereaux.
L’onglet “Créer un bordereau” permet la création d’un bordereau en mode brouillon. La création du bordereau nécessite de remplir les champs obligatoires décrits dans les arrêtés du 21 décembre 2021. 
Le service permet de conserver des favoris permettant un remplissage facilité des bordereaux suivants ayant des similitudes (destinataires, déchets, transports etc). Il permet au producteur de s’assurer qu’il utilise le bon code de nomenclature de son déchet.
Lorsque ce bordereau est rempli, il apparaît dans les bordereaux en brouillon.

Lors du départ du déchet vers l’installation de collecte ou de traitement (à l’enlèvement), il est nécessaire que les 2 parties prenantes valident ledit bordereau afin :

- d'acter l'enlèvement effectif approuvé par le producteur et le transporteur;
- de transférer ce bordereau en attente chez le prestataire;
- de suivre le statut du bordereau.

La validation consiste à confirmer le nom et la date du départ du déchet. Cliquer sur “Signer”, équivaut à valider les informations et apposer sa signature.

À noter : afin de mieux coller à la réalité du terrain (les utilisateurs producteurs n’ont pas tous un ordinateur ou un téléphone sous la main), il est également possible que le producteur signe sur le compte du transporteur, sur l'outil de ce dernier. Afin de sécuriser qu’il est bien habilité à le faire, le producteur doit saisir le code de sécurité de son établissement qui confirme la signature.

Si les champs requis ne sont pas tous complétés, le service invite à revenir corriger des champs manquants ou erronés sur le bordereau. La validation n’est possible que si les erreurs sont corrigées.

Pour des raisons pratiques, il est possible de dupliquer un bordereau existant. Ce bordereau se retrouve alors dans les brouillons de façon à pouvoir modifier certains paramètres (conditionnement ou quantité de déchets par exemple) avant validation.

**Edition d’un PDF**

Le service propose l'édition en mode PDF du récépissé du bordereau réalisé pour confier ce document au transporteur en cas rare d'absence de couverture réseau ou d'indisponibilité prolongée de la plateforme, afin de respecter les obligations réglementaires.
Si le BSD Trackdéchets est exceptionnellement rematérialisé, le transporteur peut exceptionnellement apposer sa signature physique sur l’espace réservé à son emplacement sur le bordereau, valant prise en charge du déchet.
Le bordereau comporte les informations nécessaires pour que le destinataire puisse se rendre sur le service et valider la prise en charge (ou non) du déchet (lien de connexion, SIRET de l'émetteur, numéro du BSD, etc).

Validation par le prestataire (installation de collecte et/ou traitement)
Il appartient au prestataire de :

- confirmer l’arrivée du déchet sur leur site en indiquant le nom de la personne responsable de la prise en charge, la date et le poids à l’arrivée sur site, confirmant l’acceptation du déchet ;
- confirmer le traitement du déchet en indiquant le nom de la personne responsable du traitement, la date et le code du traitement.

Ces actions ont un impact sur le statut du déchet indiqué sur le bordereau.
Dans les deux cas, cliquer sur “Je Valide" équivaut à valider les informations et apposer sa signature.

### 4.2.2 Par l'API

**Utilisation personnelle**

Une fois le compte créé, l’utilisateur peut, via son compte, générer un jeton d'accès lui permettant de se connecter à l'API Trackdéchets. Les détails techniques de ces accès sont documentés à l’adresse : https://developers.trackdechets.beta.gouv.fr/. Les jetons d'accès ont une durée de validité illimitée. Ils peuvent être révoqués à tout moment depuis le compte Trackdéchets.

**Développement d'une application tierce**

Il est possible de développer une application sur la plateforme Trackdéchets et d’y implémenter le procotole OAuth2 pour sa propre entreprise ou pour le compte de ses clients. Celui-ci permet à des logiciels tiers type SaaS déchets d'accéder à l'API Trackdéchets pour le compte d'utilisateurs sans exposer le mot de passe de celui-ci. Les utilisateurs peuvent à tout moment révoquer l'accès donné à une application tierce depuis leur compte Trackdéchets.

## 4.3 Vérification d’un prestataire

La responsabilité de la prise en charge et du traitement du déchet incombe au producteur/détenteur du déchet.

Si celui-ci a un doute sur une entreprise avec laquelle il envisage de travailler, il peut consulter la fiche entreprise de l'établissement concerné via le formulaire d'édition du BSD.

## 4.4 Suppression de compte

Pour supprimer un compte utilisateur Trackdéchets, l'utilisateur peut envoyer sa demande par courriel à l'adresse contact@trackdechets.beta.gouv.fr.

## 4.5 Autres fonctionnalités

Le titulaire du compte administrateur dispose notamment des fonctionnalités suivantes dans son espace :

- de connaître le statut du bordereau de suivi de déchets entre un producteur et un collecteur ou un producteur et une installation de traitement ;
- de conserver et d’archiver les bordereaux ;
- de visualiser le registre des déchets dangereux ;
- de vérifier un prestataire en consultant sa fiche entreprise;
- d'accéder à la documentation d'aide en ligne ;
- d'accéder à un tableau de bord récapitulatif ;
- d’inviter des membres à rejoindre l’établissement et de définir leurs droits ;
- de gérer les paramètres de l’entreprise, notamment les données publiques et privées liées à l’établissement (fiche entreprise, nom usuel, identifiant GEREP, renouvellement du code de sécurité.)



# Article 5 – Responsabilités

## 5.1 L’éditeur de la « Plateforme Trackdéchets »

Les sources des informations diffusées sur la Plateforme sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
L’éditeur s’autorise à suspendre ou révoquer n’importe quel compte et toutes les actions réalisées par ce biais, s’il estime que l’usage réalisé du service porte préjudice à son image ou ne correspond pas aux exigences de sécurité.
L’éditeur s’engage à la sécurisation de la Plateforme, notamment en prenant toutes les mesures nécessaires permettant de garantir la sécurité et la confidentialité des informations fournies.
L’éditeur fournit les moyens nécessaires et raisonnables pour assurer un accès continu, sans contrepartie financière, à la Plateforme. Il se réserve la liberté de faire évoluer, de modifier ou de suspendre, sans préavis, la plateforme pour des raisons de maintenance ou pour tout autre motif jugé nécessaire.

## 5.2 L’Utilisateur

### 5.2.1 Utilisateur final du Service

L’Utilisateur s’assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l’utilisation de son identifiant et mot de passe.
Il s’engage à ne pas commercialiser les données reçues et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi.
Toute information transmise par l’Utilisateur est de sa seule responsabilité. Il est rappelé que toute personne procédant à une fausse déclaration pour elle-même ou pour autrui s’expose, notamment, aux sanctions prévues à l’article 441-1 du code pénal, prévoyant des peines pouvant aller jusqu’à trois ans d’emprisonnement et 45 000 euros d’amende.
L’Utilisateur s’engage à ne pas mettre en ligne de contenus ou informations contraires aux dispositions légales et réglementaires en vigueur.
Le contenu de l’Utilisateur peut être à tout moment et pour n’importe quelle raison supprimé ou modifié par le site, sans préavis.

### 5.2.2 Éditeur d'applications tierces

L'éditeur d'une application tierce est responsable des traitements de données qu’il opère pour le compte de sa propre entreprise ou pour le compte de ses clients sur les données reçues au moyen du Service et, à ce titre, respecte les obligations inhérentes à ce traitement, notamment celles prévues par le RGPD et la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés modifiée.
L'éditeur d'une application tierce s’engage à ne pas commercialiser les données reçues et à ne pas les communiquer à des tiers en dehors des cas prévus par la loi. L'éditeur d'une application tierce s’engage à mettre en œuvre les mesures de sécurité techniques et organisationnelles nécessaires au bon fonctionnement du Service, notamment en matière de traçabilité interne, et à informer, le cas échéant, Trackdéchets de toute difficulté de nature à compromettre le bon fonctionnement du Service. En particulier, il garantit la confidentialité des jetons d'accès stockés. Dès lors que la confidentialité du jeton a pu être compromise, y compris de manière accidentelle, le jeton est révoqué. A cette fin, l’éditeur d'une application tierce s’engage à alerter sans délai Trackdéchets en envoyant un courriel à contact@trackdechets.beta.gouv.fr. En cas d’incident grave dans l’utilisation du Service, l’éditeur d'une application tierce s’engage à coopérer avec Trackdéchets dans la réalisation d’un audit, en fournissant toutes les informations nécessaires.

# Article 6 - Mise à jour des conditions d’utilisation

Les termes des présentes conditions d’utilisation peuvent être amendés à tout moment, sans préavis, en fonction des modifications apportées à la plateforme, de l’évolution de la législation ou pour tout autre motif jugé nécessaire.
Dernière modification : le 18 août 2022
