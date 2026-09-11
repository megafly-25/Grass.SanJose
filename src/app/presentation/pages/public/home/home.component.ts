import { Component } from '@angular/core';
import { CarruselPublic } from '../../../components/carrusel-public/carrusel-public';
import { CardsNegocio } from '../../../components/cards-negocio/cards-negocio';
import { QuienesSomos } from '../../../components/quienes-somos/quienes-somos';
import { Testimonios } from '../../../components/testimonios/testimonios';
import { UbicacionMap } from '../../../components/ubicacion-map/ubicacion-map';

@Component({
  selector: 'app-home',
  imports: [CarruselPublic, CardsNegocio, QuienesSomos, Testimonios, UbicacionMap],
  template: `
    <app-carrusel-public />
    <app-cards-negocio />
    <app-quienes-somos />
    <app-testimonios />
    <app-ubicacion-map />
  `,
})
export class HomeComponent {}
