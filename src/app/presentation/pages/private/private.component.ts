import { Component } from '@angular/core';

@Component({
  selector: 'app-private-page',
  template: `
    <div class="private-page">
      <header class="page-header">
        <h1 class="page-title">Área Privada</h1>
        <p class="page-subtitle">Sección restringida para usuarios autorizados</p>
      </header>

      <div class="private-content">
        <p>Contenido protegido del sistema de gestión de Grass San José.</p>
      </div>
    </div>
  `,
  styles: [`
    .private-page {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .page-header {
      margin-bottom: 0.5rem;
    }

    .page-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--color-text-main);
      margin: 0 0 0.25rem 0;
    }

    .page-subtitle {
      color: var(--color-text-muted);
      margin: 0;
    }

    .private-content {
      background-color: var(--color-surface);
      padding: 2rem;
      border-radius: var(--border-radius-base);
      border: 1px solid var(--color-border);
    }
  `]
})
export class PrivateComponent {}
