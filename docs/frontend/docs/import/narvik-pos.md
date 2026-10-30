---
next: false
---

# Import / Export - Point de vente <BundleComponent bundle="sales" /> <RoleLevelComponent level="admin" />

L'import se fait depuis un CSV généré depuis le site itac

- [Export inventaire](#export-inventaire)
- [Export ventes](#export-ventes)
- [Import](#import)

## Export inventaire <RoleLevelComponent level="admin" />
> URL : https://narvik.app/admin/inventories

L'export de l'inventaire retournera un csv comportant les quantités actuels de chaque articles ainsi que le prix de vente et la catégorie.

## Export ventes <RoleLevelComponent level="admin" />
> URL : https://narvik.app/admin/sales/history

L'export en csv est possible lorsqu'une plage de dates est sélectionnées sur la page d'historique des ventes.

## Import <RoleLevelComponent level="admin" />
> URL : https://narvik.app/admin/sales/import

L'import se fait depuis l'interface d'administration.

**Exemple de CSV pour l'inventaire**
```csv
name,description,purchasePrice,canBeSold,sellingPrice,sellingQuantity,category.name
Carabine 10M,sed laboriosam molestiae aliquid quia et,2.89,0,13.41,2,Cibles
Cible C50,,1.47,1,14.31,1,Cibles
```

**Exemple de CSV pour les ventes**
```csv
seller.licence,paymentMode.name,price,comment,item.0.name,item.0.category,item.0.price,item.0.quantity,uuid,createdAt
31394762,Espèces,14.31,test,"Cible C50",Cibles,14.31,1,01950394-b472-7135-beb6-f138d91d624c,2025-02-14T08:30:32+00:00
```
