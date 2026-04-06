import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListingComponent } from './listing/listing.component';
import { CartComponent } from "./cart/cart.component";


@NgModule({
  declarations: [DetailsComponent,ListingComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
]
})
export class ProductModule { }
