export type ModalType = 'success' | 'error' | 'warning' | 'confirm';

export interface ModalOptions {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
  type?: ModalType;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface InternalModalConfig extends ModalOptions {
  id: string;
  type: ModalType;
  visible: boolean;
  resolve?: (value: boolean) => void;
}
