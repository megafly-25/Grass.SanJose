import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface SedeConfig {
  id: string;
  name: string;
  address: string;
  scheduleWeek: string;
  scheduleWeekend: string;
  phone: string;
  latitude: number;
  longitude: number;
  zoom?: number;
}

@Component({
  selector: 'app-ubicacion-map',
  imports: [],
  templateUrl: './ubicacion-map.html',
  styleUrl: './ubicacion-map.scss',
})
export class UbicacionMap {
  private readonly sanitizer = inject(DomSanitizer);

  // Configuración de sede (Inputs configurables)
  readonly sectionTitle = input<string>('NUESTRAS SEDES');
  readonly sedeName = input<string>('SEDE PRINCIPAL SAN JOSÉ');
  readonly address = input<string>('Calle Chacarilla Nº 500, San José');
  readonly scheduleWeek = input<string>('Lunes - Viernes: 4:00 pm a 11:00 pm');
  readonly scheduleWeekend = input<string>('Sábado y Domingo: 7:00 am a 11:00 pm');
  readonly phone = input<string>('938 564 690 - 959 631 433');
  readonly latitude = input<number>(-12.0965);
  readonly longitude = input<number>(-77.0345);
  readonly zoom = input<number>(16);

  // URL del mapa embebido seguro
  readonly mapEmbedUrl = computed<SafeResourceUrl>(() => {
    const lat = this.latitude();
    const lng = this.longitude();
    const z = this.zoom();
    const rawUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${z}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  });

  // URL directa para abrir en Google Maps app / web
  readonly googleMapsUrl = computed<string>(() => {
    return `https://www.google.com/maps?q=${this.latitude()},${this.longitude()}`;
  });
}
