import { Component } from '@angular/core';

@Component({
  selector: 'app-master-table-page',
  template: `
    <div class="master-table-page">
      <header class="page-header">
        <h1 class="page-title">Tablas Maestras</h1>
        <p class="page-subtitle">Configuración y catálogos generales del sistema</p>
      </header>

      <div class="table-container">
        <p class="table-placeholder">Módulo para gestión de parámetros, tipos de canchas, tarifas y estados.</p>
      </div>
    </div>
  `,
  styles: [`
    .master-table-page {
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

    .table-container {
      background-color: var(--color-surface);
      padding: 2rem;
      border-radius: var(--border-radius-base);
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
    }
  `]
})
export class MasterTableComponent {}
