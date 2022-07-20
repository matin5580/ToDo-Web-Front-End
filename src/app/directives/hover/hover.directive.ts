import { Directive } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @Input('default') default: string = '#a1d3d5';
  @Input('highlight') highlight: string = '#526f70';

  constructor() { }

}
