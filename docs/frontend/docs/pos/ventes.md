---
next: false
---

<script setup>
import RoleLevelComponent from '../../../components/RoleLevelComponent.vue'
</script>

# Ventes <RoleLevelComponent level="supervisor" />

## Imprimer la liste des prix <RoleLevelComponent level="supervisor" />
Pour imprimer la liste de prix à jour, il suffit de faire "Imprimer la page" depuis votre navigateur.

Le raccourci clavier pour la plupart des navigateur est : `Ctrl` + `P`

Une liste sur 2 colonnes sera générée.

![](./images/vente-impression.png)

## Faire une vente <RoleLevelComponent level="supervisor" />
1. [Sélection d'un vendeur](#sélection-dun-vendeur)
2. [Ajout d'un article au panier](#article-présent-dans-la-liste) ou [Ajout d'un article personnalisé au panier](#article-non-existant--prix-personnalisé)
3. [Finalisation de la vente](#finalisation-de-la-vente)

![](./images/vente-liste-1.png)

::: danger Attention
Afin de pouvoir effectuer une vente un vendeur doit être sélectionné.
:::

### Sélection d'un vendeur
La liste affiche toutes les personnes ayant le rôle bénévole ou administrateur.

### Article présent dans la liste
Pour ajouter le produit au panier, il suffit de cliquer sur l'icône de caddie bleue situé toute à droite du produit.

Celui-ci sera ajouté dans la colonne de droite, le total à payer sera recalculé automatiquement.

![](./images/vente-liste-2.png)

En cas de besoin, il est possible d'augmenter ou de diminuer la quantité ajoutée au panier en cliquant sur les flèches bleues.

![](./images/vente-liste-3.png)

Le bouton `Vider le panier` supprimera tous les articles présents dans le panier.

### Article non existant / Prix personnalisé
::: danger Attention
L'utilisation d'un article personnalisé ne modifiera pas l'état des stocks.
:::

Dans le cas où l'article ne serait pas présent, ou pour un produit avec tarif dégressif (licence prise pendant l'année par exemple).

Il est possible de créer un article personnalisé.

Pour cela, il suffit de cliquer sur le bouton `+` bleu situé à droite de la barre de recherche.

![](./images/vente-liste-4.png)

Une fois cliqué dessus, une fenêtre s'ouvre avec à remplir dedans le nom de l'article ainsi que son prix de vente.

Le prix peut être négatif dans le cas d'une réduction par exemple.

![](./images/vente-liste-5.png)

Une fois ajouté au panier celui-ci sera donc visible dans la colonne de droite avec le nom spécifié.

![](./images/vente-liste-6.png)

### Finalisation de la vente
Pour que la vente puisse être finalisée, il faut que le mode de paiement soit sélectionné (case en bleu foncé pour le mode sélectionné).

Il est possible d'entrer un commentaire à propos de la vente.  
Cela peut être utile, par exemple, pour les licences afin de savoir quelle personne a renouvelé et payé.

![](./images/vente-liste-7.png)

## Modification / Suppression d'une vente <RoleLevelComponent level="supervisor" />
Une fois la vente validée, le vendeur est redirigé sur le récapitulatif.

![](./images/vente-detail-1.png)

Il est possible de modifier le commentaire de celle-ci.

![](./images/vente-detail-2.png)
::: info <RoleLevelComponent level="admin" />
La modification de date n'est possible que pour les administrateurs.
:::

En cas d'erreur sur un article acheté, il faudra supprimer la vente et la recréer.

