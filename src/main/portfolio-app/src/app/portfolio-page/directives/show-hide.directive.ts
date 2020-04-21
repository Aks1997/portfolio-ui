import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective {

  private show: boolean=false;

  constructor(private element: ElementRef) {
    this.setUp();
  }

  toggleInputType(span){
    this.show=!this.show;
    if(this.show){
      this.element.nativeElement.setAttribute('type', "text");
      span.innerHTML= 'Hide';
    }else{
      this.element.nativeElement.setAttribute('type', "password");
      span.innerHTML= 'Show';
    }
  }

  setUp(){
    const parent= this.element.nativeElement.parentNode;
    const span= document.createElement('span');
    span.innerHTML= 'Show';
    span.style.color= "green";
    span.style.cursor= 'pointer';
    span.addEventListener('click',()=>{
      this.toggleInputType(span);
    });
    parent.appendChild(span);
  }
}
