import { Component } from '@angular/core';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarText: string;
  rating: number;
  quote: string;
  verified: boolean;
}

@Component({
  selector: 'app-testimonios',
  imports: [],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.scss',
})
export class Testimonios {
  readonly testimonials: TestimonialItem[] = [
    {
      id: 'carlos-ruiz',
      name: 'Carlos Ruiz',
      role: 'Capitán, Liga Veteranos',
      avatarText: 'CR',
      rating: 5,
      quote:
        'La calidad del césped en San José es simplemente impresionante. Se siente como jugar en una cancha profesional europea. La iluminación nocturna y la cancha techada marcan la diferencia.',
      verified: true,
    },
    {
      id: 'maripaz-solano',
      name: 'Maripaz Solano',
      role: 'Jugadora Vóley Club',
      avatarText: 'MS',
      rating: 5,
      quote:
        'Increíble el nivel de atención. Los petos y balones están siempre impecables y las canchas de vóley tienen las medidas reglamentarias con la mejor amortiguación. ¡Volveremos siempre!',
      verified: true,
    },
    {
      id: 'jorge-mendoza',
      name: 'Jorge Mendoza',
      role: 'Gerente de RRHH',
      avatarText: 'JM',
      rating: 5,
      quote:
        'Hicimos el torneo anual de nuestra empresa y el complejo resolvió todo: música, marcador digital, arbitraje e hidratación. Recomendadísimos para eventos corporativos e integración.',
      verified: true,
    },
  ];
}
