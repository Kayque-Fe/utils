import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDropdownComponent } from './components/button-dropdown/button-dropdown.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { PageTitleComponent } from './components/ui/page-title/page-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageTitleComponent,
    ButtonComponent,
    DeleteDialogComponent,
    ButtonDropdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent
{
  show_dialog = false;
}
