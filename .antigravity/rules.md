# Grass San José - Arquitectura y Guía Técnica de Desarrollo

## 1. Visión General del Proyecto
**Grass San José** es una aplicación web empresarial moderna construida sobre **Angular 22+**, diseñada para la administración, reserva, control operativo y visualización de canchas de grass sintético, torneos, tablas maestras y proveedores.

La arquitectura sigue los principios de **Clean Architecture**, alta cohesión, bajo acoplamiento, reactividad basada en **Signals**, componentes **Standalone** nativos y un sistema de diseño modular en SCSS.

---

## 2. Estructura de Directorios

```
src/
  app/
    core/                  # Capa de dominio y aplicación (Clean Architecture)
      application/         # Casos de uso (Use Cases) y puertos (ports)
      domain/
        entities/          # Entidades de dominio con identidad y reglas de negocio
        models/            # Modelos de datos e interfaces puras
        repositories/      # Interfaces (contratos) de repositorios
        value-objects/     # Objetos de valor inmutables
      infrastructure/      # Implementaciones: HTTP, DTOs de transporte, mappers, repositorios
    presentation/          # Capa de presentación (UI)
      components/          # Componentes de interfaz (header, sidebar, footer, navbar-public, carrusel-public)
      layouts/
        main-layout/       # Layout autenticado (header + sidebar + router-outlet)
        public-layout/     # Layout público (navbar-public + router-outlet + footer)
      pages/               # Páginas por módulo (auth, dashboard, master-table, private, profile, public, supplier)
    shared/                # Código compartido transversal
      components/
        modals/            # Sistema de modales genérico (ModalService + ModalHost + BaseModal)
        toast-host/        # Host global de notificaciones toast
      directives/          # Directivas compartidas
      dtos/                # DTOs transversales
      enums/               # Enums compartidos (EnumRecordStatus)
      pipes/               # Pipes compartidos
      services/            # Servicios transversales (ToastService)
      utils/               # Funciones puras y helpers
  styles/
    styles/
      _variables.scss      # Paleta $colors, variables CSS en :root y función getColor($key)
      _buttons.scss        # Clases .btn / .btn-icon + variantes de color
      _utilities.scss      # Utilidades .text-*, .bg-*, .border-*, .text-primary-error, .required-asterisk
```

---

## 3. Principios de Clean Architecture

1. **Independencia del Dominio**:
   - `core/domain` no tiene dependencias de librerías externas ni de Angular UI.
   - Las reglas de negocio y entidades residen en `core/domain/entities` y `core/domain/models`.
   - Los contratos de acceso a datos son interfaces en `core/domain/repositories`.
2. **Capa de Aplicación (`core/application`)**:
   - Coordina los flujos de trabajo mediante casos de uso.
   - Orquesta la interacción entre repositorios de dominio y servicios.
3. **Capa de Infraestructura (`core/infrastructure`)**:
   - Implementa los repositorios definidos en el dominio.
   - Maneja llamadas HTTP (`HttpClient`), transformación de datos (mappers) y serialización DTOs.
4. **Capa de Presentación (`presentation`)**:
   - Se enfoca exclusivamente en la experiencia de usuario y presentación de datos.
   - Consume casos de uso o servicios de aplicación.
   - Organizada en layouts desacoplados (`main-layout` y `public-layout`).

---

## 4. Estándares Técnicos (Angular 22+ & TypeScript)

### TypeScript
- Tipado estricto (`strict: true`).
- Evitar el uso de `any`; usar `unknown` o tipos genéricos fuertemente tipados.
- Preferir inferencia de tipos cuando sea evidente.

### Componentes y Reactividad
- **Standalone por defecto**: No especificar `standalone: true` en decoradores (es el valor por defecto en Angular v20+).
- **OnPush por defecto**: No especificar `changeDetection: ChangeDetectionStrategy.OnPush` explícitamente (es el valor por defecto en Angular v22+).
- **Signals para Estado**:
  - `signal()` para estado local mutable.
  - `computed()` para estado derivado puro.
  - `linkedSignal()` para estado dependiente sincronizado entre múltiples fuentes.
  - No usar `.mutate()`; usar `.update()` o `.set()`.
- **Inputs y Outputs**:
  - Usar las funciones `input()` y `output()` en lugar de los decoradores `@Input()` y `@Output()`.
  - Usar `model()` para propiedades two-way binding con sintaxis `[(prop)]`.
- **Host Bindings & Listeners**:
  - Prohibido usar `@HostBinding` y `@HostListener`. Usar el objeto `host` en `@Component` o `@Directive`:
    ```typescript
    @Component({
      selector: 'app-example',
      host: {
        'class': 'example-host',
        '(click)': 'onClick()'
      }
    })
    ```
- **Templates**:
  - Control flow nativo obligatorio: `@if`, `@for (...; track ...)`, `@switch`.
  - Prohibido el uso de `ngClass` y `ngStyle`; usar bindings de clase y estilo estándar: `[class]`, `[class.active]`, `[style]`.
  - Usar `NgOptimizedImage` para imágenes estáticas (no base64 inline).

### Servicios e Inyección
- Preferir inyección mediante la función `inject()`.
- Servicios singleton definidos con `@Injectable({ providedIn: 'root' })`.

### Enrutamiento
- Carga perezosa (*lazy loading*) obligatoria mediante `loadComponent` en `app.routes.ts`.

---

## 5. Sistema de Estilos y Tokens SCSS

### Variables y Paleta (`src/styles/styles/_variables.scss`)
- Paleta `$colors`: `primary` (#1e7e34), `primary-hover`, `primary-light`, `primary-error`, `secondary`, `success`, `warning`, `danger`, `surface`, `background`, etc.
- Variables CSS expuestas en `:root`: `--color-*`, `--font-size-*`, `--border-radius-*`, `--shadow-*`.
- Función SCSS: `getColor($key)` para obtener valores directamente de `$colors`.

### Botones (`src/styles/styles/_buttons.scss`)
- Clase base `.btn`: Botón con padding equilibrado, foco accesible y transiciones suaves.
- Clase `.btn-icon`: Botón cuadrado o circular (`.rounded`) para iconos y acciones rápidas.
- Variantes: `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-outline-*`.

### Utilidades (`src/styles/styles/_utilities.scss`)
- Clases de texto: `.text-primary`, `.text-secondary`, `.text-success`, `.text-danger`, `.text-muted`, `.text-main`, `.text-white`.
- Texto de error prioritario: `.text-primary-error`.
- Indicador requerido: `.required-asterisk` (asterisco rojo para etiquetas de formularios).
- Clases de fondo: `.bg-primary`, `.bg-surface`, `.bg-background`, etc.
- Clases de bordes: `.border`, `.border-primary`, `.rounded`, `.rounded-lg`, `.rounded-pill`.

---

## 6. Sistema de Modales y Notificaciones (Shared)

### Sistema de Modales (`src/app/shared/components/modals/`)
- `ModalService`: Permite abrir cualquier componente dinámicamente retornando una `Promise<R>` con los resultados (`open(component, data)`).
- `ModalHostComponent`: Contenedor global colocado en los layouts que proyecta modales activos usando `NgComponentOutlet`.
- `BaseModalComponent`: Componente contenedor con backdrop, accesibilidad ARIA, slots de contenido y footer (`[modal-footer]`).

### Sistema de Toasts (`src/app/shared/services/toast.service.ts`)
- `ToastService`: Servicio reactivo con Signal `toasts` para lanzar alertas tipo `success()`, `error()`, `warning()`, `info()`.
- `ToastHostComponent`: Contenedor flotante superior con animación y soporte de cierre manual o temporizado.

### Enums Compartidos (`src/app/shared/enums/`)
- `EnumRecordStatus`:
  - `ACTIVE = 'A'`
  - `INACTIVE = 'I'`
  - `DELETED = 'D'`
  - `PENDING = 'P'`
