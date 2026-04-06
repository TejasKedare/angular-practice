import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from '../../store/cart/cart.actions';

@Component({
  selector: 'app-listing',
  standalone: false,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {

  products = ['Laptop', 'Phone', 'Headphones', 'Watch'];

  constructor(private store: Store) { }

  add(product: string) {
    this.store.dispatch(addToCart({ product }));
  }

}
