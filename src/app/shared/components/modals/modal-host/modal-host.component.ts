import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ModalService } from '../modal.service';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-modal-host',
  standalone: true,
  imports: [BaseModalComponent],
  template: `
    @let modal = activeModal();
    @if (modal) {
      <app-base-modal
        [visible]="modal.visible"
        [type]="modal.type"
        [title]="modal.title"
        [message]="modal.message"
        [confirmText]="modal.confirmText!"
        [cancelText]="modal.cancelText!"
        [showCancel]="modal.showCancel!"
        (confirmed)="resolve(true)"
        (cancelled)="resolve(false)"
      />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalHostComponent {
  private readonly modalService = inject(ModalService);

  readonly activeModal = computed(() => this.modalService.activeModal());

  resolve(result: boolean): void {
    this.modalService.resolveActive(result);
  }
}
