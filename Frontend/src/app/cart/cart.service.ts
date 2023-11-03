import { Injectable } from '@angular/core';
import { CartItem } from '../cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // url: string = 'http://localhost:8080/orderitem';

  constructor() {}

  localStorageKey: string = 'cart';
  items : CartItem[];

  public addToCart(newCartItem: CartItem) {
    let items = this.loadCart();
    let found = false;
    for (let index = 0; index < items.length; index++) {
      let cartItem = items[index];
      if (cartItem.id == newCartItem.id) {
        cartItem.quantity++;
        items[index] = cartItem;
        found = true;
      }
    }
    if (found == false) {
      items.push(newCartItem);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(items));
  }

  public loadCart(): any[] {
    const items = localStorage.getItem(this.localStorageKey);
    return JSON.parse(items || '[]');
  }

  removeItem(cartItem: CartItem) {
    let items = this.loadCart();
    console.log(items);
    const index = items.findIndex((o) => o.id === cartItem.id);

    if (index > -1) {
      items.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(items));
    }
  }

  clearCart(items: CartItem[]) {
    localStorage.clear();
  }

  saveCart(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.items));
    localStorage.getItem(this.localStorageKey);
    this.loadCart;
  }
}
