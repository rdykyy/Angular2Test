import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FeaturedDeal } from '../models/featured-deal';


@Injectable()
export class FeaturedDealsService {
  private url = 'https://api.cartera.com/content/v3/placements?page_id=2405&brand_id=251&mem_id=2fCiDMytn%2FbrgzlQf5%2FxOx7hBhdA0E0VYBZnWaSjz0LWuoL8FjZlEtHvq7c2%2Fn0EtwS1jNuqbNy%2B6lgPXugCWTWcxWu7t6YfsJ7pMq7H0x8fulftfuBt0C5E7Mz4k0RhHLC%2FylUAo%2FhnnbCpMnC5ZBDa2p41iMSnUd6DFY105PbdPMhA%2B6SWEB%2F3WjK8AhotxHqUHnGkOBRM6p%2Bqoo%2FC176rqrs4xbN14kafxJ%2FMvP4%3D&app_key=b27091852f7d2c41e0421dc0bdb48293&app_id=0eb5f623&sort_by=random&fields=assets%2CclickUrl%2Ccode%2CcouponCode%2CstopDatetime%2Cid%2Cmerchant.logoUrls%2Cmerchant.showRebate%2Cmerchant.rebate%2Cmerchant.id%2Cmerchant.name&limit=12&content_group_id=535';

  constructor(private http: Http) {}

  getFeaturedDeals(): Promise<FeaturedDeal[]> {
    return this.http.get(this.url)
        .toPromise()
        .then(response => this.manageResponse(response.json().response))
        .catch(this.handleError);
  }

  private manageResponse(response): FeaturedDeal[] {
    response.forEach( (element) => {
      const TEXT_MAX_LENGTH = 60;
      if (element.assets.text.length > TEXT_MAX_LENGTH) {
        element.assets.textTruncated = element.assets.text.substr(0, element.assets.text.lastIndexOf(' ', TEXT_MAX_LENGTH)) + '...';
      } else {
        element.assets.textTruncated = element.assets.text;
      }
    });
    return response as FeaturedDeal[];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
