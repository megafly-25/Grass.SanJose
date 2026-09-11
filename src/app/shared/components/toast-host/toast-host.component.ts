import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-host',
  imports: [ToastModule],
  template: `
    @for (container of toastService.containers(); track container.key) {
      <p-toast [position]="container.position" [key]="container.key" />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastHostComponent {
  protected readonly toastService = inject(ToastService);
}
