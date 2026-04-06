import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { clearCart, removeFromCart } from '../../store/cart/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$: Observable<string[]>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  remove(product: string) {
    this.store.dispatch(removeFromCart({ product }));
  }

  clear() {
    this.store.dispatch(clearCart());
  }
}
