import { ModalType } from './modal.types';

/**
 * Configuración UI por defecto para cada tipo de modal.
 * Centralizar aquí evita duplicación entre confirm/success/error/warning.
 */
export const MODAL_DEFAULTS: Record<ModalType, {
  defaultTitle: string;
  defaultMessage: string;
  confirmText: string;
  cancelText: string;
  showCancel: boolean;
}> = {
  confirm: {
    defaultTitle: '¿Está seguro?',
    defaultMessage: 'Esta acción no se puede deshacer.',
    confirmText: 'Aceptar',
    cancelText: 'Cancelar',
    showCancel: true,
  },
  success: {
    defaultTitle: '¡Solicitud aprobada!',
    defaultMessage: 'La operación se completó exitosamente.',
    confirmText: 'Aceptar',
    cancelText: 'Cerrar',
    showCancel: true,
  },
  error: {
    defaultTitle: 'Solicitud rechazada',
    defaultMessage: 'Ocurrió un error al procesar la solicitud.',
    confirmText: 'Aceptar',
    cancelText: 'Cerrar',
    showCancel: true,
  },
  warning: {
    defaultTitle: 'Advertencia',
    defaultMessage: 'Por favor revise la información antes de continuar.',
    confirmText: 'Entendido',
    cancelText: 'Cerrar',
    showCancel: true,
  },
};
