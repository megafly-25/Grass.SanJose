import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.scss',
})
export class QuienesSomos {
  readonly whatsappUrl =
    'https://wa.me/51938564690?text=' +
    encodeURIComponent('Hola, deseo más información sobre las canchas y servicios de Grass San José.');
}
