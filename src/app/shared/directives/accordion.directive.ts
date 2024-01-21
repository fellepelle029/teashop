import { Directive, ElementRef, AfterViewInit } from '@angular/core';
declare let $: any;

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    $(this.el.nativeElement).accordion();
  }
}
