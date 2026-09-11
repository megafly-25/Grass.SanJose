import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly sidebarCollapsed = input(false);
  readonly sidebarToggle = output<void>();

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }
}
