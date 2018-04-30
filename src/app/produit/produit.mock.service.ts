import {Produit} from '../shared/produit';
import {Injectable} from '@angular/core';

@Injectable()
export class ProduitMockService{
  private PRODUCTS: Produit[] = [];

  constructor(){
    let p1: Produit = new Produit("PC", 10, 10);
    let p2: Produit = new Produit("souris", 10, 10);
    let p3: Produit = new Produit("câbles", 10, 10);

    this.PRODUCTS.push(p1);
    this.PRODUCTS.push(p2);
    this.PRODUCTS.push(p3);
  }

  public getProduits(): Produit[]{
    return this.PRODUCTS;
  }
}
