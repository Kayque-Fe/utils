import { Component, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonComponent } from '../ui/button/button.component';
import { PageTitleComponent } from '../ui/page-title/page-title.component';

@Component({
  selector: 'ng-delete-dialog',
  standalone: true,
  imports: [DialogModule, ButtonComponent, PageTitleComponent],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  visible = model<boolean>(false);
}
