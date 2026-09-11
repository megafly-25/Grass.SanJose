import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rutas públicas (PublicLayout)
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layouts/public-layout/public-layout').then(
        m => m.PublicLayout
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./presentation/pages/public/home/home.component').then(
            m => m.HomeComponent
          )
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./presentation/pages/auth/auth.component').then(
            m => m.AuthComponent
          )
      }
    ]
  },

  // Rutas privadas / autenticadas (MainLayout)
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layouts/main-layout/main-layout').then(
        m => m.MainLayout
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./presentation/pages/dashboard/dashboard.component').then(
            m => m.DashboardComponent
          )
      },
      {
        path: 'master-table',
        loadComponent: () =>
          import('./presentation/pages/master-table/master-table.component').then(
            m => m.MasterTableComponent
          )
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./presentation/pages/profile/profile.component').then(
            m => m.ProfileComponent
          )
      },
      {
        path: 'private',
        loadComponent: () =>
          import('./presentation/pages/private/private.component').then(
            m => m.PrivateComponent
          )
      }
    ]
  },

  // Redirección por defecto
  {
    path: '**',
    redirectTo: ''
  }
];
