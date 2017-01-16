import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { MerchantService } from './../../services/merchant.service';

@Component({
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers: Object;

  constructor(
      private route: ActivatedRoute,
      private merchantService: MerchantService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      let id = +params["id"];
      this.merchantService.getMerchant(id).then(merchant => this.offers = merchant.offers);
    });
  }
}