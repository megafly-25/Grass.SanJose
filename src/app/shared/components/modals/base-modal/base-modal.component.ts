import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalType } from '../modal.types';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseModalComponent {
  readonly visible = input<boolean>(false);
  readonly type = input<ModalType>('confirm');
  readonly title = input<string>('');
  readonly message = input<string>('');
  readonly confirmText = input<string>('Aceptar');
  readonly cancelText = input<string>('Cerrar');
  readonly showCancel = input<boolean>(true);
  readonly closeOnBackdrop = input<boolean>(false);

  readonly confirmed = output<void>();
  readonly cancelled = output<void>();

  handleConfirm(): void {
    this.confirmed.emit();
  }

  handleCancel(): void {
    this.cancelled.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop()) {
      this.handleCancel();
    }
  }
}
