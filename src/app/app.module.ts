import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RebateDirective } from './directives/rebate.directive';

import { FeaturedDealsComponent } from './components/featured-deals/featured-deals.component';
import { MerchantDetailComponent } from './components/merchant-detail/merchant-detail.component';
import { DescriptionComponent } from './components/merchant-detail/description.component';
import { OffersComponent } from './components/merchant-detail/offers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FeaturedDealsService } from './services/featured-deals.service';
import { MerchantService } from './services/merchant.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app.routing.module';

import { ExpirationPipe } from './pipes/expiration.pipe';

import { MerchantResolve } from './components/merchant-detail/merchant-detaill.resolver';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedDealsComponent,
    RebateDirective,
    MerchantDetailComponent,
    ExpirationPipe,
    HeaderComponent,
    FooterComponent,
    DescriptionComponent,
    OffersComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FeaturedDealsService,
    MerchantService,
    AuthService,
    MerchantResolve,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
