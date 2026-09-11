import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  readonly whatsappUrl =
    'https://wa.me/51938564690?text=' +
    encodeURIComponent('Hola, deseo cotizar y más información sobre las canchas de Grass San José.');
}
