import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Merchant } from './../../models/merchant';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'merchant-detail',
  templateUrl: './merchant-detail.component.html',
  styleUrls: ['./merchant-detail.component.scss']
})
export class MerchantDetailComponent implements OnInit {
  merchant: Merchant;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.merchant = this.route.snapshot.data['merchant'];
  }

}
