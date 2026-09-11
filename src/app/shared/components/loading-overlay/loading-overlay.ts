import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading-overlay',
  imports: [ProgressSpinnerModule],
  templateUrl: './loading-overlay.html',
  styleUrl: './loading-overlay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingOverlay {
  readonly loadingService = inject(LoadingService);
}
