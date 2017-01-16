import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Merchant } from '../models/merchant';


@Injectable()
export class MerchantService {
  private apiEndpoint = 'https://api.cartera.com/content/v3/merchants/';
  private urlParams = '?page_id=2409&brand_id=251&mem_id=2fCiDMytn%2FbrgzlQf5%2FxOx7hBhdA0E0VYBZnWaSjz0LWuoL8FjZlEtHvq7c2%2Fn0EtwS1jNuqbNy%2B6lgPXugCWTWcxWu7t6YfsJ7pMq7H0x8fulftfuBt0C5E7Mz4k0RhHLC%2FylUAo%2FhnnbCpMnC5ZBDa2p41iMSnUd6DFY105PbdPMhA%2B6SWEB%2F3WjK8AhotxHqUHnGkOBRM6p%2Bqoo%2FC1407d0jFy3M6ExexefEQ1OQ%3D&app_key=b27091852f7d2c41e0421dc0bdb48293&app_id=0eb5f623&section_id=10213&with_offers=1&id=';
  private merchant: Merchant;

  constructor(private http: Http) {}

  getMerchant(id): Promise<Merchant> {
    // Return cached merchant if exist.
    if (this.merchant && this.merchant.id == id) {
      return Promise.resolve(this.merchant);
    }
    let url = this.apiEndpoint + id + this.urlParams + id;
    return this.http.get(url)
        .toPromise()
        .then(response => {
          this.merchant = response.json().response[0];
          return this.merchant as Merchant;
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
