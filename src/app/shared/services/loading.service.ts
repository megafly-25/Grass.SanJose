import { Injectable, signal, type Signal, effect, type EffectRef } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private activeRequests = signal<number>(0);
    readonly isLoading = signal<boolean>(false);

    show(): void {
        this.activeRequests.update((count) => count + 1);
        this.isLoading.set(true);
    }

    hide(): void {
        this.activeRequests.update((count) => Math.max(0, count - 1));
        if (this.activeRequests() === 0) {
            this.isLoading.set(false);
        }
    }

    reset(): void {
        this.activeRequests.set(0);
        this.isLoading.set(false);
    }

    /**
     * Vincula una señal booleana local del componente con el estado de carga global.
     * Cuando la señal es `true` muestra el overlay de carga y cuando es `false` lo oculta.
     *
     * Debe invocarse dentro de un contexto de inyección (constructor del componente o
     * inicializador de campo) para que el efecto se destruya junto con el componente.
     *
     * @example
     * // En el constructor del componente:
     * this.loadingService.bind(this.loading);
     */
    bind(loading: Signal<boolean>): EffectRef {
        return effect(() => {
            if (loading()) {
                this.show();
            } else {
                this.hide();
            }
        });
    }
}
