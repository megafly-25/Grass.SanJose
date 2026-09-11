import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [RouterLink],
  template: `
    <div class="auth-card">
      <div class="auth-header">
        <h2 class="auth-title">Iniciar Sesión</h2>
        <p class="auth-desc">Accede al panel de administración de Grass San José</p>
      </div>

      <form class="auth-form" (submit)="$event.preventDefault()">
        <div class="form-group">
          <label for="email" class="form-label">
            Correo Electrónico <span class="required-asterisk">*</span>
          </label>
          <input
            id="email"
            type="email"
            class="form-control"
            placeholder="admin@grassanjose.com"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">
            Contraseña <span class="required-asterisk">*</span>
          </label>
          <input
            id="password"
            type="password"
            class="form-control"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
      </form>

      <div class="auth-footer">
        <a routerLink="/" class="text-primary">Volver al inicio</a>
      </div>
    </div>
  `,
  styles: [`
    .auth-card {
      max-width: 420px;
      margin: 4rem auto;
      padding: 2.5rem;
      background-color: var(--color-surface);
      border-radius: var(--border-radius-base);
      box-shadow: var(--shadow-md);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .auth-title {
      font-size: var(--font-size-xl);
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .auth-desc {
      color: var(--color-text-muted);
      font-size: var(--font-size-sm);
      margin: 0;
    }

    .form-group {
      margin-bottom: 1.25rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: var(--font-size-sm);
    }

    .form-control {
      width: 100%;
      padding: 0.65rem 0.75rem;
      font-family: inherit;
      font-size: var(--font-size-base);
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius-base);
      transition: border-color var(--transition-fast);

      &:focus {
        outline: none;
        border-color: var(--color-border-focus);
      }
    }

    .btn-block {
      width: 100%;
      margin-top: 1rem;
    }

    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: var(--font-size-sm);
    }
  `]
})
export class AuthComponent {}
