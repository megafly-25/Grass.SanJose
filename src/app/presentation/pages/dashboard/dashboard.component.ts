import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  template: `
    <div class="dashboard-page">
      <header class="page-header">
        <h1 class="page-title">Panel de Control</h1>
        <p class="page-subtitle">Resumen general y métricas operativas de canchas sintéticas</p>
      </header>

      <div class="metrics-grid">
        <div class="metric-card">
          <span class="metric-icon">&#9917;</span>
          <div class="metric-info">
            <span class="metric-value">12</span>
            <span class="metric-label">Reservas Hoy</span>
          </div>
        </div>

        <div class="metric-card">
          <span class="metric-icon">&#128176;</span>
          <div class="metric-info">
            <span class="metric-value">S/ 1,450</span>
            <span class="metric-label">Ingresos del Día</span>
          </div>
        </div>

        <div class="metric-card">
          <span class="metric-icon">&#128101;</span>
          <div class="metric-info">
            <span class="metric-value">85</span>
            <span class="metric-label">Clientes Activos</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-page {
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

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.25rem;
    }

    .metric-card {
      background-color: var(--color-surface);
      padding: 1.5rem;
      border-radius: var(--border-radius-base);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--color-border);
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .metric-icon {
      font-size: 2.25rem;
    }

    .metric-info {
      display: flex;
      flex-direction: column;
    }

    .metric-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-main);
    }

    .metric-label {
      font-size: var(--font-size-sm);
      color: var(--color-text-muted);
    }
  `]
})
export class DashboardComponent {}
