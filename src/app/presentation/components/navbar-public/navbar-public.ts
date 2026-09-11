import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-public.html',
  styleUrl: './navbar-public.scss',
})
export class NavbarPublic {
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
