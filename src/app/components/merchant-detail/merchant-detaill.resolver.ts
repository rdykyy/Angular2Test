import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MerchantService } from './../../services/merchant.service';
import { Merchant } from './../../models/merchant';


@Injectable()
export class MerchantResolve implements Resolve<Merchant> {

    constructor(private merchantService: MerchantService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.merchantService.getMerchant(route.params['id']);
    }
}