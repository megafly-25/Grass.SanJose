import { inject, Injectable, signal } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'
  | 'center';

export interface ToastContainerConfig {
  key: string;
  position: ToastPosition;
}

export interface ToastOptions {
  /** Título del toast */
  summary: string;
  /** Mensaje principal */
  detail: string;
  /** Tipo de severidad (color) */
  severity?: ToastSeverity;
  /** Key del contenedor toast (por defecto 'global') */
  key?: string;
  /** Posición en pantalla del contenedor (por defecto 'bottom-right') */
  position?: ToastPosition;
}

/**
 * Servicio global de notificaciones toast.
 * Registra dinámicamente contenedores `<p-toast>` según `key` y `position`.
 *
 * Cualquier componente puede inyectar este servicio y llamar:
 *   this.toast.success({ summary: 'Éxito', detail: '...' });
 *   this.toast.error({ summary: 'Error', detail: '...', key: 'form', position: 'top-center' });
 */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly messageService = inject(MessageService);

  private readonly DEFAULT_KEY = 'global';
  private readonly DEFAULT_POSITION: ToastPosition = 'bottom-right';

  readonly containers = signal<ToastContainerConfig[]>([
    { key: this.DEFAULT_KEY, position: this.DEFAULT_POSITION },
  ]);

  show(options: ToastOptions): void {
    const key = options.key ?? this.DEFAULT_KEY;
    const position = options.position ?? this.DEFAULT_POSITION;

    this.ensureContainer(key, position);

    this.messageService.add({
      severity: options.severity ?? 'info',
      summary: options.summary,
      detail: options.detail,
      key,
      life: 3000,
    });
  }

  success(options: Omit<ToastOptions, 'severity'>): void {
    this.show({ ...options, severity: 'success' });
  }

  info(options: Omit<ToastOptions, 'severity'>): void {
    this.show({ ...options, severity: 'info' });
  }

  warn(options: Omit<ToastOptions, 'severity'>): void {
    this.show({ ...options, severity: 'warn' });
  }

  error(options: Omit<ToastOptions, 'severity'>): void {
    this.show({ ...options, severity: 'error' });
  }

  clear(key: string = this.DEFAULT_KEY): void {
    this.messageService.clear(key);
  }

  private ensureContainer(key: string, position: ToastPosition): void {
    const existing = this.containers().find((container) => container.key === key);

    if (!existing) {
      this.containers.update((containers) => [...containers, { key, position }]);
      return;
    }

    if (existing.position !== position) {
      console.warn(
        `[ToastService] El contenedor "${key}" ya está registrado en "${existing.position}". ` +
        `Se ignora la posición "${position}".`,
      );
    }
  }
}
