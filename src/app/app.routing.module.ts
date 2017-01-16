import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedDealsComponent } from './components/featured-deals/featured-deals.component';
import { MerchantDetailComponent } from './components/merchant-detail/merchant-detail.component';
import { DescriptionComponent } from './components/merchant-detail/description.component';
import { OffersComponent } from './components/merchant-detail/offers.component';

import {MerchantResolve} from "./components/merchant-detail/merchant-detaill.resolver";

import {AuthGuard} from './guards/auth.guard';



const routes: Routes = [
    {
        path: 'merchant/:id',
        component: MerchantDetailComponent,
        resolve: {
            merchant: MerchantResolve
        },
        canActivate: [AuthGuard],
        children: [
            { path: 'descriptions', component: DescriptionComponent },
            { path: 'offers', component: OffersComponent },
            {
                path: '',
                redirectTo: 'descriptions',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'featuredDeals',
        component: FeaturedDealsComponent
    },
    {
        path: '',
        redirectTo: '/featuredDeals',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
