import { Component } from '@angular/core';

export interface BusinessCardItem {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  whatsappMessage: string;
}

@Component({
  selector: 'app-cards-negocio',
  imports: [],
  templateUrl: './cards-negocio.html',
  styleUrl: './cards-negocio.scss',
})
export class CardsNegocio {
  readonly cards: BusinessCardItem[] = [
    {
      id: 'activaciones',
      title: 'ACTIVACIONES PARA MARCAS',
      image: 'images/carrusel-1.jpg',
      buttonText: 'QUIERO MÁS INFO',
      whatsappMessage: 'Hola, deseo más información sobre Activaciones para Marcas en Grass San José.',
    },
    {
      id: 'academias',
      title: 'ACADEMIAS Y PROFESORES',
      image: 'images/carrusel-2.jpg',
      buttonText: 'QUIERO MÁS INFO',
      whatsappMessage: 'Hola, deseo más información sobre horarios y convenios para Academias y Profesores en Grass San José.',
    },
    {
      id: 'torneo',
      title: 'ORGANIZA TU TORNEO',
      image: 'images/carrusel-3.jpg',
      buttonText: 'QUIERO MÁS INFO',
      whatsappMessage: 'Hola, deseo cotizar y organizar un Torneo Deportivo en Grass San José.',
    },
    {
      id: 'corporativos',
      title: 'EVENTOS CORPORATIVOS',
      image: 'images/carrusel-1.jpg',
      buttonText: 'QUIERO MÁS INFO',
      whatsappMessage: 'Hola, deseo cotizar un Evento Corporativo e integración en Grass San José.',
    },
  ];

  getWhatsappUrl(message: string): string {
    return `https://wa.me/51938564690?text=${encodeURIComponent(message)}`;
  }
}
