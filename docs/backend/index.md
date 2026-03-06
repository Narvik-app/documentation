---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Narvik - Backend"
  text: "Gestion des données"
  tagline: Obligatoire au fonctionnement du projet
  actions:
    - theme: brand
      text: Démarrer
      link: ./docs/installation/01.prerequis
    - theme: alt
      text: Participer au développement
      link: ./dev/participer
    - theme: alt
      text: GitHub
      link: https://github.com/Narvik-app/backend
      target: _blank

features:
  - title: Symfony / API Platform
    details: Basé sur le framework API Platform et Symfony.
  - title: Performance & Légèreté
    details: >
      - Optimisé pour Raspberry Pi <br/>
      - Faible consommation de RAM (512 Mo) <br/>
      - Runtime moderne avec FrankenPHP
  - title: Sécurité & Auth
    details: >
      - Authentification OAuth2 <br/>
      - Système de Refresh Token <br/>
      - Permissions granulaires (Voters)
  - title: Architecture Modulaire
    details: >
      - Système de plugins par club <br/>
      - Isolation des données multi-tenant <br/>
      - Messagerie asynchrone (Messenger)
---
