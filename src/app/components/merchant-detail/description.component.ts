import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { MerchantService } from './../../services/merchant.service';

import { Merchant } from './../../models/merchant';

@Component({
  templateUrl: './description.component.html',
  styleUrls: ['./merchant-detail.component.scss']
})
export class DescriptionComponent implements OnInit {

  merchant: Merchant;

  constructor(
      private route: ActivatedRoute,
      private merchantService: MerchantService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      let id = +params["id"];
      this.merchantService.getMerchant(id).then(merchant => this.merchant = merchant);
    });
  }

}
