# Base de Conocimiento del Proyecto - Grass San José

> **Reglas de Alta Criticidad:**
> 1. **Consulta Obligatoria por Defecto:** En cada requerimiento o tarea, se debe consultar esta base de conocimiento antes de responder o generar código para mantener consistencia técnica y de negocio.
> 2. **Registro Continuo:** Todo conocimiento nuevo sobre lógica de negocio, flujos, formularios, vistas, librerías y decisiones de arquitectura debe ser registrado y actualizado aquí.
> 3. **Code-Only Output:** Provide ONLY the raw code or the exact modifications requested. Do not include markdown introductions ("Sure, here is the code...") or conclusions.
> 4. **Zero Explanations:** Do not explain how the code works, why you chose a specific method, or how to install dependencies unless explicitly asked with "?".
> 5. **No Comments:** Remove all standard comments, docstrings, and explanatory annotations from the generated code. Code must be self-explanatory.
> 6. **No Placeholders:** Write the complete functional block or function requested. Avoid placeholder comments like `// TODO: implement later` or `// ... rest of your code`, as forcing the user to ask to "fill the blanks" consumes double the tokens.
---

## 1. Arquitectura y Stack Tecnológico

### 1.1 Tecnologías Principales
- **Framework:** Angular 22.1+ (Standalone components por defecto, ChangeDetection `OnPush` por defecto).
- **Lenguaje:** TypeScript 6.0+ (Strict mode, target ES2022).
- **UI & Componentes:** PrimeNG 21.1+ con `@primeuix/themes` y `primeicons` (v8.0+).
- **Renderizado:** Angular SSR con Express 5.1+.
- **Testing:** Vitest 4.0+.
- **Estilos:** Sass / SCSS (ubicado en `src/styles.scss`, con variables y tokens en `src/styles/styles/`).

### 1.2 Estructura del Código
El proyecto sigue una arquitectura desacoplada por capas:
```
src/
  app/
    core/                  # Capa de dominio y aplicación (Clean Architecture)
      application/         # Casos de uso y puertos (ports)
      domain/
        entities/          # Entidades de dominio
        models/            # Modelos de datos (interfaces)
        repositories/      # Interfaces (contratos) de repositorios
        value-objects/
      infrastructure/      # Implementaciones: http, dtos, mappers, repositories
    presentation/          # Capa de presentación
      components/          # Componentes de UI por layout (header, sidebar, footer, navbar-public, carrusel-public)
      layouts/
        main-layout/       # Layout autenticado (header + sidebar + router-outlet)
        public-layout/     # Layout público
      pages/               # Páginas por módulo (auth, dashboard, master-table, private, profile, public)
    shared/                # Código compartido transversal
      components/
        modals/            # Sistema de modales genérico (ModalService + ModalHost + BaseModal)
        toast-host/        # Host de toasts global
      directives/          # Directivas compartidas
      dtos/                # DTOs compartidos
      enums/               # Enums compartidos (EnumRecordStatus)
      pipes/               # Pipes compartidos
      services/            # Servicios compartidos (toast.service)
      utils/
  styles/
    styles/
      _variables.scss      # Paleta de colores ($colors + variables CSS + getColor())
      _buttons.scss        # Clases .btn / .btn-icon + variantes de color
      _utilities.scss      # Utilidades .text-* .bg-* .border-* .text-primary-error .required-asterisk
```
Los imports de estilos usan rutas relativas al includePaths configurado en `angular.json` (`src/styles`). Fuente global: Barlow.


## 2. Ambientes y Configuración (`Environments`)

### 2.1 Alias de TypeScript
En `tsconfig.json` está mapeado:
```json
"paths": {
  "@environments/*": [
    "src/environments/*"
  ]
}
```
En el código fuente se importa siempre de forma agnóstica al entorno:
```typescript
import { environment } from '@environments/environment';
```

### 2.2 Entornos Disponibles
1. **Development (`environment.development.ts`):** Entorno de desarrollo local con flags de depuración.
2. **Staging (`environment.staging.ts`):** Entorno de pre-producción / pruebas de integración.
3. **Production (`environment.production.ts`):** Entorno de producción con optimización y hash de bundles.

### 2.3 Scripts NPM
- **Servir:**
  - `npm run start:dev` (o `ng serve -c development`)
  - `npm run start:staging` (o `ng serve -c staging`)
  - `npm run start:prod` (o `ng serve -c production`)
- **Compilar:**
  - `npm run build:dev`
  - `npm run build:staging`
  - `npm run build:prod`

---

## 3. Lógica de Negocio y Dominio

*(Esta sección se irá ampliando conforme se desarrollen y definan las reglas de negocio)*

---

## 4. Flujos de la Aplicación y Navegación

- **Flujo Público:** Acceso a landing/portal público con `NavbarPublic` (`app-navbar-public`), `CarruselPublic` (`app-carrusel-public`), `CardsNegocio` (`app-cards-negocio`), `QuienesSomos` (`app-quienes-somos`), `Testimonios` (`app-testimonios`), `UbicacionMap` (`app-ubicacion-map`) en `HomeComponent` (`path: ''`), y `Footer` (`app-footer`).
  - `NavbarPublic`: Header público con franja superior en gradiente deportivo (#10b981 - #22c55e - #84cc16), fondo oscuro #0c130e, logo circular oficial (`public/images/logo.png`), enlaces de navegación (Servicios, Galería, Tienda, Tarifas, Opiniones, Contacto), llamada telefónica directa (938 564 690 - 959 631 433) y botón CTA "Reservar Cancha" con gradiente deportivo grass y sombra verde interactiva. Menú responsivo con drawer móvil.
  - `CarruselPublic`: Hero carrusel interactivo (`app-carrusel-public`) con 3 diapositivas reales del complejo deportivo (`public/images/carrusel-1.jpg`, `carrusel-2.jpg`, `carrusel-3.jpg`), copy persuasivo orientado a la conversión de reservas ("TU CANCHA, TU JUEGO", "ARMA TU PARTIDO", "JUEGA COMO CAMPEÓN"), botones de acción principal (Reservar Cancha Ahora con navegación a `/reservas`) y secundario (Ver Instalaciones/Tarifas/Contacto), controles laterales de navegación y barra de indicadores dinámicos. Reutiliza la paleta deportiva oscura con verde césped (`#22c55e`, `#15803d`, `#4ade80`).
  - `CardsNegocio`: Sección "HAZ NEGOCIO CON NOSOTROS" (`app-cards-negocio`) debajo del carrusel con 4 cards responsivas (Activaciones para marcas, Academias y profesores, Organiza tu torneo, Eventos corporativos). Utiliza las imágenes de la carpeta del proyecto, overlays oscuros graduados, tipografía deportiva en verde césped y botones en cápsula ("QUIERO MÁS INFO") vinculados a contacto por WhatsApp (51938564690). Efecto hover interactivo con elevación de card, zoom de imagen y resplandor verde césped.
  - `QuienesSomos`: Catálogo institucional "¿QUIÉNES SOMOS? SOMOS GRASS SAN JOSÉ" (`app-quienes-somos`) debajo de las cards de negocio. Cuenta con una cuadrícula mosaico bento a la izquierda (5 paneles con fotos de canchas techadas, partidos, torneos y tarjeta de marca con logo oficial `public/images/logo.png`) y a la derecha una tarjeta informativa flotante con características clave (césped certificado, 100% techado, iluminación LED estadio, estacionamiento) y botón CTA "¡HABLEMOS! →" en verde césped directo a WhatsApp (51938564690). Totalmente responsivo en desktop, tablet y móvil.
  - `Testimonios`: Sección "Voces de la cancha" (`app-testimonios`) debajo de QuienesSomos. Presenta 3 cards mejoradas con diseño premium oscuro, halo ambiental verde, 5 estrellas doradas brillantes (`#eab308`), cita textual de jugadores/clientes, avatar deportivo con iniciales y borde verde, nombre, rol y badge de verificación. Efecto hover interactivo con elevación y resplandor verde césped.
  - `UbicacionMap`: Sección "NUESTRAS SEDES" (`app-ubicacion-map`) debajo de Testimonios. Presenta la información de la sede (nombre, dirección, horarios de atención entre semana y fines de semana, teléfonos de contacto 938 564 690 - 959 631 433), contenedor de mapa interactivo responsive con iframe seguro (`DomSanitizer`) y botón flotante "Ver en Google Maps". Permite configuración total mediante inputs Angular (`name`, `address`, `scheduleWeek`, `scheduleWeekend`, `phone`, `latitude`, `longitude`, `zoom`).
- **Flujo Administrativo/Dashboard:**
  - `Sidebar`: Menú lateral con accesos a Dashboard, Canchas, Reservas, Clientes, Pagos y Configuración (Tabla Maestra).
  - `Header`: Barra superior con toggle de sidebar, notificaciones y perfil de usuario.

---

## 5. Formularios y Validaciones

- **Estándar:** Uso preferencial de Signal Forms (`@angular/forms/signals`) o Formularios Reactivos tipados (`ReactiveFormsModule`).
- Cero mutaciones directas de estado; reactividad gobernada por Signals (`signal`, `computed`, `linkedSignal`).

---

## 6. Convenciones Angular


- Standalone components (sin NgModules). No escribir `standalone: true` explícito (default en v20+).
- Signals para estado local, `computed()` para estado derivado, `input()` / `output()` en lugar de decoradores.
- `ChangeDetectionStrategy.OnPush` en todos los componentes.
- Reactive Forms (no template-driven).
- `inject()` en lugar de inyección por constructor.
- Control flow nativo `@if` / `@for` / `@switch` (no `*ngIf`, `*ngFor`).
- No usar `ngClass` ni `ngStyle`; usar bindings `class` / `style`.
- Rutas lazy con `loadComponent`.

### PrimeNG

Config global en `app.config.ts`:

```ts
providePrimeNG({
  theme: { preset: Aura, options: { darkModeSelector: false } }
})
```

- Preset activo: `Aura` (alternativas: `Lara`, `Nora`).
- Importar módulos standalone por componente, en el array `imports` del componente que los usa:
  - `ButtonModule` (`primeng/button`)
  - `SelectModule` (`primeng/select`)
  - `InputTextModule` (`primeng/inputtext`)
  - `TableModule` (`primeng/table`)
  - `Dialog` (`primeng/dialog`)
  - `Tag` (`primeng/tag`)
  - `Tooltip` (`primeng/tooltip`)
  - `ToastModule` (`primeng/toast`)
- Uso en plantillas mediante atributos/elementos directos: `<input pInputText>`, `<p-select [options]>`, `<p-table [value]>`, `<p-dialog>`, `<p-tag>`, `<p-toast>`.
- Iconos con `primeicons` (clases `pi pi-search`, `pi pi-plus`, `pi pi-download`, etc.).
- `ConfirmationService` y `MessageService` registrados en `app.config.ts`. `MessageService` lo consume internamente `ToastService`.

### Select desde master-table (app-master-table-select)

Componente compartido para selects que cargan opciones de una tabla maestra:

- Ubicación: `shared/components/master-table-select/` (`master-table-select.ts/.html/.scss`).
- Standalone, `ChangeDetectionStrategy.OnPush`, `ControlValueAccessor` (se usa con `formControlName`).
- Inputs: `parentId` (required), `label` (default 'Estado'), `placeholder`, `size` ('small'|'large'), `containerClass`, `includeAllOption`, `allOptionLabel`.
- Carga opciones con `MasterTableRepository.findAllByCustom({ IdMasterTableParent: parentId })` → mapea `{ label: item.Name, value: item.Value }`; con `includeAllOption` agrega `{ label: allOptionLabel, value: '' }` al inicio.
- Estilos del componente (encapsulación Angular). Clases internas: `.field-container` (flex column: label sobre select), `.field-label`, `.field-dropdown` con `:host ::ng-deep .p-select` (PrimeNG usa `p-select`).

Uso:

```html
<app-master-table-select [parentId]="1000" label="Estado Cancha" placeholder="Seleccione estado"
  [includeAllOption]="true" formControlName="statusField" />
```

---

## 7. Tokens de Diseño y Convenciones Técnicas

### 7.1 Sistema de Tokens de Color (`_variables.scss`)
- El mapa `$colors` contiene los tokens de color del sistema alineados a la identidad de Grass San José:
  - `primary`: `#22c55e` (verde césped vibrante)
  - `primary-hover`: `#16a34a` (verde interactivo)
  - `primary-dark`: `#15803d` (verde profundo para gradientes)
  - `primary-light`: `#dcfce7` (verde claro sutil)
  - `secondary`: `#0c130e` (fondo oscuro estadio / pitch)
  - `secondary-hover`: `#141f17`
  - `tertiary`: `#10b981` (esmeralda deportivo)
  - `accent`: `#4ade80` (resplandor lima césped)
  - `sports-lime`: `#84cc16` (lima enérgico)
  - `surface-dark`: `#0f1712`
  - `background`: `#0c130e`
- Se exponen como variables CSS `--color-{name}` y como función `getColor('{name}')`. Utilidades generadas en `_utilities.scss`: `.text-{name}`, `.bg-{name}`, `.border-{name}`.

### Botones (`_buttons.scss`)

- Clases base: `.btn` y `.btn-icon`.
- Variantes de color: `.btn-primary`, `.btn-secondary`, `.btn-tertiary` (fondo sólido) y `.btn-outline-{type}` (borde).
  - `primary`: fondo `primary` / texto `colorWhite`.
  - `secondary`: fondo `secondary` / texto `gray-dark`.
  - `tertiary`: fondo `tertiary` / texto `colorWhite`.
- Ejemplo:

```html
<button type="button" (click)="onSearch()" class="btn btn-primary">
  <i class="pi pi-search"></i>
  <span>BUSCAR</span>
</button>
```

### Modales genéricos

No usar `p-dialog` directo para confirmaciones. Usar `ModalService` (`shared/components/modals`):

- Imperativo (sin Promise):

```ts
modalService.show({
  type: 'confirm',
  title: 'Eliminar registro',
  message: `¿Está seguro de eliminar el registro ${id}?`,
  onConfirm: () => { /* acción */ },
});
```

- Atajos que devuelven `Promise<boolean>`: `confirm`, `success`, `error`, `warning`.

```ts
const ok = await modalService.confirm({ title: 'Título', message: 'Mensaje' });
```

- Tipos: `'success' | 'error' | 'warning' | 'confirm'`. Defaults por tipo en `modal.options.ts` (`MODAL_DEFAULTS`).
- Hosts ya montados en `app.html`: `<app-modal-host />` y `<app-toast-host />`. No re-montarlos.

### Modal de formulario Agregar/Editar (p-dialog)

Para formularios CRUD (no confirmaciones) sí se usa `p-dialog` directo (patrón de `master-table` y `data-update-request`):

- Importar `Dialog` de `primeng/dialog` y agregarlo al array `imports` del componente.
- En TS: `displayAddEditDialog = signal<boolean>(false)`, `submitting = signal<boolean>(false)` y un `FormGroup` dedicado con `Validators`.
- `onAdd()`: resetea el form con valores por defecto y hace `displayAddEditDialog.set(true)`.
- `saveX()`: si `form.invalid` → `markAllAsTouched()` y return; construye el DTO (`Number(...)` para enums/ids), llama al repositorio, cierra el diálogo, recarga la tabla y usa `toastService.success/error`.
- Template:

```html
<p-dialog header="Agregar X" [(visible)]="displayAddEditDialog" [modal]="true"
  [style]="{ width: '900px' }" [draggable]="false" [resizable]="false" [closable]="true"
  styleClass="<pagina>__dialog">
  <form [formGroup]="form" (ngSubmit)="saveX()" class="dialog-form">
    <div class="dialog-grid"> ...campos... </div>
    <div class="dialog-actions">
      <button type="button" class="btn btn-outline-primary" (click)="displayAddEditDialog.set(false)">Cancelar</button>
      <button type="submit" class="btn btn-primary" [disabled]="submitting() || form.invalid">{{ submitting() ? 'Guardando...' : 'Guardar' }}</button>
    </div>
  </form>
</p-dialog>
```

- Las clases `.dialog-form`, `.dialog-grid`, `.dialog-actions` se definen POR COMPONENTE en el SCSS de cada página (no son globales). Grid típico `repeat(2, 1fr)`; campo a ancho completo con `.xxx__field--full { grid-column: 1 / -1 }`; colapsar a `1fr` en `max-width: 576px`.
- Campo requerido: `<span class="required-asterisk">*</span>` en el label + mensaje con `<small class="text-primary-error">...`.
- `textarea pTextarea` lo provee `InputTextModule` (`primeng/inputtext`).

### Toasts genéricos

Usar `ToastService` (`shared/services/toast.service`), no `MessageService` directo:

```ts
toastService.success({ summary: 'Éxito', detail: 'Registro eliminado correctamente.' });
toastService.error({ summary: 'Error', detail: error.message });
toastService.info({ summary: 'Info', detail: '...' });
toastService.warn({ summary: 'Advertencia', detail: '...' });
```

- Método genérico: `show({ summary, detail, severity, key, position })`.
- Severidades: `'success' | 'info' | 'warn' | 'error'`.
- Contenedor global por defecto: `key: 'global'`, `position: 'bottom-right'`. Se registran contenedores dinámicamente según `key`/`position`.

### Enrutamiento

- Rutas definidas en `app.routes.ts` con `loadComponent` + import dinámico (lazy loading).
- Layouts como componentes contenedores con `children`:
  - `PublicLayout`: páginas públicas (`home`, `self-registration`).
  - `MainLayout`: páginas privadas (`dashboard`, `canchas`, `reservas`, `clientes`, `pagos`, `master-table`).
- Cada ruta lleva `data` con `breadcrumb`, `title`, `description`.
- `path: ''` redirige a `login`; `path: '**'` redirige a `login`.
- Navegación en plantillas con `RouterLink` y `RouterLinkActive` (ver `sidebar.ts`).
- SSR: `app.routes.server.ts` prerenderiza `**`.

### Capa de datos (core) — repositorios, DTOs, mappers y HTTP

- **Repositorio**: contrato abstracto en `core/domain/repositories/<feature>.repository.ts`; implementación en `core/infrastructure/repositories/<feature>/<feature>.repository.impl.ts` (clase `@Injectable({ providedIn: 'root' })` que implementa el abstracto). Se registra en `app.config.ts` con `{ provide: XRepository, useClass: XRepositoryImpl }`.
- **HTTP**: inyectar `GenericHttpClient` (`core/infrastructure/http/http-client.ts`) con `inject()`. Métodos `get/post/put/patch/delete` devuelven `Observable<T>`; en el repositorio se convierten a `Promise` con `lastValueFrom(...)`. La URL base es `environment.apiUrl` y los endpoints se concatenan así: `` `${this.env.X_Action}` ``.
- **Query strings**: usar `toQueryString(request)` de `core/infrastructure/http/services/query-string.builder.ts`.
- **DTOs**: `core/infrastructure/dtos/<feature>/` — uno por operación (`CreateRequest`, `UpdateRequest`, `UpdateStatusRequest`, `FindAllByCustomRequest`, `FindAllByCustomResponse`, `FindAllByCustomExcelRequest`, `AttachedFileBase64`). Propiedades en PascalCase (igual que el backend).
- **Mappers**: `core/infrastructure/mappers/<feature>.mapper.ts` — clase estática con `toModel(dto)` y `toModelList(dtos)` que transforman DTO → Modelo de dominio.
- **Environments**: cada endpoint del backend necesita una clave en los 4 archivos de `src/environments/` (`environment.ts`, `environment.development.ts`, `environment.production.ts`, `environment.staging.ts`). Convención: `{Feature}_{Action}: 'api/{Feature}/{Action}'` (ej: `DataUpdateRequest_Create: 'api/DataUpdateRequest/Create'`).

### 7.2 Compatibilidad TypeScript 6.0+
- Para compatibilidad con TypeScript 6.0+ y rutas mapeadas, `tsconfig.json` incluye `"ignoreDeprecations": "6.0"`.

### 7.3 Dependencia de Animaciones
- Se requiere `@angular/animations` como soporte para `provideAnimationsAsync()` y componentes de PrimeNG.


### 8. Copilot Chat — Compressed Response Style

Speak terse, like smart caveman. Full technical accuracy preserved. Only fluff die.

Applies to every Copilot Chat reply in this workspace, all models (including DeepSeek V4).

## Rules

Drop: articles (a/an/the), filler words (just/really/basically/actually/simply), pleasantries (sure/certainly/of course/happy to), hedging. Fragments OK. Short synonyms over long ones (big not extensive, fix not "implement a solution for").

No tool-call narration, no plan announcement before or between tool calls — fire tool calls direct. After a tool result: next call direct, or final answer — never announce next call. Text before a call only to warn about security/irreversible actions or resolve real ambiguity.

No decorative tables or emoji. No dumping long raw error logs unless asked — quote shortest decisive line.

Standard well-known tech acronyms OK (DB/API/HTTP/CLI). Never invent new abbreviations (cfg/impl/req/res/fn) — they tokenize same as the full word, save nothing, cost clarity. No causal arrows (→) — own token, saves nothing either.

Code blocks unchanged. Errors quoted exact. Numbers, units exact.

Never drop not/never/no/only/except — flips meaning, worse than any token saved.

Never ADD a word just to sound caveman. Compression only — style never grows output. No inserted pronoun/copula to fake broken grammar. Keep correct verb form when it costs the same token count.

Pattern: `[thing] [action] [reason]. [next step].`

Not: "Sure! I'd be happy to help you with that. The issue you're experiencing is likely caused by..."
Yes: "Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:"

## Language

Preserve user's language exactly — reply in whatever language the user writes in. Compress style, not language. Keep code, API names, CLI commands, commit-type keywords (feat/fix/...), and exact error strings verbatim regardless of reply language.

## Auto-clarity exceptions

Drop compressed style and write normal, clear prose when:
- Warning about security risks
- Confirming an irreversible action (delete, force-push, drop table, overwrite, etc.)
- A multi-step sequence where fragment order or dropped conjunctions could be misread
- Compression itself would create technical ambiguity
- User asks to clarify or repeats a question

Resume compressed style once that part is done.

## Boundaries — normal prose required, never compressed

- Code comments
- Commit messages
- Docs, README content
- Issue / PR / MR descriptions, bug reports
- Any text meant to be read by other humans outside this chat

## Turning it off

User can type "stop caveman" or "normal mode" in chat to request normal verbose replies for the rest of the session.