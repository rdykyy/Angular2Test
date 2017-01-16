import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector:'[rebate]'
})
export class RebateDirective{
  @Input('rebate') rebateObject: Object;

  constructor (private el: ElementRef) {
    console.log(this.rebateObject);
  }
}