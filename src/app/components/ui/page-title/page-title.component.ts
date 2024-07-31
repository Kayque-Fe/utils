import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ng-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  title = input.required<string>();
  titleStyle = input<'default' | 'box' | 'clear'>('box');
  size = input<'small' | 'medium' | 'large'>('medium');
  color = input<
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'primary'
    | 'secondary'
    | 'dark'
    | 'light'
  >('success');
  subtitle = input<string>();
  icon = input<string>();
  iconType = input<'material' | 'class'>('material');
  iconStyle = input<'default' | 'box' | 'shadow'>('default');
}
