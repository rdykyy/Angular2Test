import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiration'
})
export class ExpirationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let currentTime = new Date().getTime(),
        offerExpireTime = new Date(value).getTime();

    return (offerExpireTime - currentTime) / 31536000000 > 1 ? 'Ongoing' : value;
  }

}
