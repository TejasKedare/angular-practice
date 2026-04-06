import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { TableComponent } from './table/table.component';
import { ChessComponent } from './chess/chess.component';
import { UserDataComponent } from '../component/user-data/user-data.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'vendor-listing', loadComponent: () => import('./vendor/vendor-listing/vendor-listing.component').then(m => m.VendorListingComponent)
    },
    {
        path: 'vendor-details', loadComponent: () => import('./vendor/vendor-details/vendor-details.component').then(m => m.VendorDetailsComponent)
    },
    {
        path: 'contact-us', loadComponent:() => import('./forms/contact-us/contact-us.component').then(m => m.ContactUsComponent)
    },
    {
        path:'become-a-partner', loadComponent: () => import('./forms/become-a-partner/become-a-partner.component').then(m => m.BecomeAPartnerComponent)
    },
    {
        path: 'rxjs',loadComponent:() => import('./rxjs/rxjs.component').then(m => m.RxjsComponent)
    },
    {
        path: 'table', component: TableComponent
    },
    {
        path: 'chess', component: ChessComponent
    },
    {
        path: 'user', component: UserDataComponent
    },
    {
        path: 'dynamic-form', loadComponent:() => import('../component/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent)
    },
    { path: '**', redirectTo: 'home' }
];
