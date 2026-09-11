import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  template: `
    <div class="profile-page">
      <header class="page-header">
        <h1 class="page-title">Mi Perfil</h1>
        <p class="page-subtitle">Información de la cuenta y preferencias</p>
      </header>

      <div class="profile-card">
        <div class="profile-avatar-wrapper">
          <span class="profile-avatar">&#128100;</span>
        </div>
        <div class="profile-details">
          <h3>Administrador General</h3>
          <p class="text-muted">admin&#64;grassanjose.com</p>
          <span class="badge-role">Rol: Super Administrador</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-page {
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

    .profile-card {
      display: flex;
      align-items: center;
      gap: 2rem;
      background-color: var(--color-surface);
      padding: 2rem;
      border-radius: var(--border-radius-base);
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
    }

    .profile-avatar-wrapper {
      font-size: 4rem;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background);
      border-radius: var(--border-radius-pill);
    }

    .profile-details h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.25rem;
    }

    .badge-role {
      display: inline-block;
      margin-top: 0.5rem;
      padding: 0.25rem 0.75rem;
      background-color: var(--color-primary-light);
      color: var(--color-primary);
      font-size: var(--font-size-sm);
      font-weight: 600;
      border-radius: var(--border-radius-pill);
    }
  `]
})
export class ProfileComponent {}
