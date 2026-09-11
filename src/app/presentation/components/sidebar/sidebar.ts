import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '@environments/environment';

interface MenuGroup {
  readonly label: string;
  readonly path: string;
  readonly iconClass: string;
  readonly items: ReadonlyArray<MenuItem>;
}

interface MenuItem {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly collapsed = input(false);
  readonly userName = 'Jorge Rivera';
  readonly environmentName = environment.environmentName;
  readonly appVersion = environment.appVersion;

  readonly menuGroups: ReadonlyArray<MenuGroup> = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      iconClass: 'pi-home',
      items: [],
    },
    {
      label: 'Canchas',
      path: '/canchas',
      iconClass: 'pi-th-large',
      items: [],
    },
    {
      label: 'Reservas',
      path: '/reservas',
      iconClass: 'pi-calendar',
      items: [],
    },
    {
      label: 'Clientes',
      path: '/clientes',
      iconClass: 'pi-users',
      items: [],
    },
    {
      label: 'Pagos',
      path: '/pagos',
      iconClass: 'pi-wallet',
      items: [],
    },
    {
      label: 'Configuración',
      path: '/configuracion',
      iconClass: 'pi-cog',
      items: [
        {
          label: 'Tabla maestra',
          path: '/master-table'
        }
      ],
    }
  ];
}
