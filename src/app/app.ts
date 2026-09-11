import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalHostComponent } from './shared/components/modals/modal-host/modal-host.component';
import { ToastHostComponent } from './shared/components/toast-host/toast-host.component';
import { LoadingOverlay } from './shared/components/loading-overlay/loading-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalHostComponent, ToastHostComponent, LoadingOverlay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Grass.SanJose');
}

