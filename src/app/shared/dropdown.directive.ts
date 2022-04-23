import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;

    /*@HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }*/

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.parentNode.children[0].contains(event.target) ? !this.isOpen : false;
    }
      
    constructor(private elRef: ElementRef) {}
}