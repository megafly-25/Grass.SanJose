import { Component, OnDestroy, afterNextRender, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface SlideItem {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

@Component({
  selector: 'app-carrusel-public',
  imports: [RouterLink],
  templateUrl: './carrusel-public.html',
  styleUrl: './carrusel-public.scss',
})
export class CarruselPublic implements OnDestroy {
  readonly slides: SlideItem[] = [
    {
      image: 'images/carrusel-1.jpg',
      badge: 'COMPLEJO DEPORTIVO DE ALTO RENDIMIENTO',
      title: 'SAN JOSÉ',
      subtitle: 'TU CANCHA, TU JUEGO',
      description:
        'Experimenta el fútbol y vóleibol en césped sintético profesional de máxima calidad. Cancha totalmente techada para jugar con comodidad en cualquier clima e iluminación LED de nivel estadio.',
      primaryCtaText: 'Reservar Cancha Ahora',
      primaryCtaLink: '/reservas',
      secondaryCtaText: 'Ver Instalaciones',
      secondaryCtaLink: '/servicios',
    },
    {
      image: 'images/carrusel-2.jpg',
      badge: '¡VIVE LA PASIÓN DEL FÚTBOL EN VIVO!',
      title: 'ARMA TU PARTIDO',
      subtitle: 'EL MEJOR GRASS DE LA ZONA',
      description:
        'Reúne a tus amigos, desafía a tus rivales y siente la adrenalina de cada gol. Reserva tu turno online en segundos y asegura tu horario estelar antes de que se agote.',
      primaryCtaText: 'Asegurar Mi Cancha',
      primaryCtaLink: '/reservas',
      secondaryCtaText: 'Ver Tarifas',
      secondaryCtaLink: '/tarifas',
    },
    {
      image: 'images/carrusel-3.jpg',
      badge: 'CAMPEONATOS, RETOS Y TORNEOS',
      title: 'JUEGA COMO CAMPEÓN',
      subtitle: 'MOMENTOS INOLVIDABLES CON TU EQUIPO',
      description:
        'El escenario perfecto para tus pichangas, campeonatos de barrio o eventos corporativos. Disfruta de instalaciones seguras, vestuarios y el mejor ambiente deportivo.',
      primaryCtaText: 'Reservar Cancha Ahora',
      primaryCtaLink: '/reservas',
      secondaryCtaText: 'Contáctanos',
      secondaryCtaLink: '/contacto',
    },
  ];

  readonly currentIndex = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => this.startAutoplay());
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.stopAutoplay();
    this.intervalId = setInterval(() => {
      this.next();
    }, 6000);
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  next(): void {
    this.currentIndex.update((i) => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.currentIndex.update((i) => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
    this.startAutoplay();
  }
}