import {Component, OnInit} from '@angular/core';

import { FeaturedDeal } from './../../models/featured-deal';
import { FeaturedDealsService } from './../../services/featured-deals.service';

@Component({
  selector: 'featured-deals',
  templateUrl: './featured-deals.component.html',
  styleUrls: ['./featured-deals.component.scss']
})
export class FeaturedDealsComponent implements OnInit {
  featuredDeals: FeaturedDeal[];

  constructor(private featuredDealsService: FeaturedDealsService) { }

  getFeaturedDeals(): void {
    this.featuredDealsService
        .getFeaturedDeals()
        .then(featuredDeals => {this.featuredDeals = featuredDeals;});
  }

  ngOnInit() {
    this.getFeaturedDeals();
  }
}
