import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: 'li[contar-clicks]',
})

export class ContarClicksDirective{
    clickN =0;
    @HostBinding('style.opacity') opacity: number = .1; //me permite editar el elemento del dom o el html al que este asiganado desde nuestra propia directiva
    @HostListener('click', ['$event.target']) onClick(btn){   //es un escuchador de eventos de parte del usuario en el dom
        console.log('a', btn, "Número de Clicks", this.clickN++)
        this.opacity += .1;
    }

}