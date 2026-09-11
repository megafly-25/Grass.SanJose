import { Injectable, signal } from '@angular/core';
import { InternalModalConfig, ModalOptions, ModalType } from './modal.types';
import { MODAL_DEFAULTS } from './modal.options';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  readonly activeModal = signal<InternalModalConfig | null>(null);

  /**
   * Abre un modal de forma imperativa y delega la acción al callback onConfirm/onCancel.
   * No devuelve Promise -> el sitio de uso no necesita `await` ni `then/catch`.
   */
  show(
    options: Required<Pick<ModalOptions, 'title' | 'message' | 'type'>> & Omit<ModalOptions, 'type'>,
  ): void {
    const d = MODAL_DEFAULTS[options.type];

    const config: InternalModalConfig = {
      id: Date.now().toString(),
      type: options.type,
      title: options.title,
      message: options.message,
      confirmText: options.confirmText ?? d.confirmText,
      cancelText: options.cancelText ?? d.cancelText,
      showCancel: options.showCancel ?? d.showCancel,
      onConfirm: options.onConfirm,
      onCancel: options.onCancel,
      visible: true,
    };

    this.activeModal.set(config);
  }

  /**
   * Atajos que aplican los defaults de un tipo (incluyendo título/mensaje) y devuelven Promise.
   * Útiles para mensajes rápidos: success({ onConfirm: () => ... }).
   */
  confirm(options: Omit<ModalOptions, 'type'>): Promise<boolean> {
    return this.open({ ...options, type: 'confirm' });
  }

  success(options: Omit<ModalOptions, 'type'>): Promise<boolean> {
    return this.open({ ...options, type: 'success' });
  }

  error(options: Omit<ModalOptions, 'type'>): Promise<boolean> {
    return this.open({ ...options, type: 'error' });
  }

  warning(options: Omit<ModalOptions, 'type'>): Promise<boolean> {
    return this.open({ ...options, type: 'warning' });
  }

  private open(options: ModalOptions & { type: ModalType }): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.show({
        ...options,
        onConfirm: () => {
          options.onConfirm?.();
          resolve(true);
        },
        onCancel: () => {
          options.onCancel?.();
          resolve(false);
        },
      });
    });
  }

  resolveActive(result: boolean): void {
    const current = this.activeModal();
    if (!current) return;

    if (result && current.onConfirm) {
      current.onConfirm();
    } else if (!result && current.onCancel) {
      current.onCancel();
    }

    current.resolve?.(result);
    this.activeModal.set(null);
  }
}
