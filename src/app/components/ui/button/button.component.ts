import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ng-button',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Display inputs
  label = input<string>();
  icon = input<string>();

  // Styling inputs
  iconPosition = input<'left' | 'right' | 'up' | 'down'>('left');
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
    | 'light-dark'
  >('success');
  buttonStyle = input<'filled' | 'outlined' | 'raised' | 'text' | 'flat'>(
    'filled'
  );

  type = input<'button' | 'submit' | 'reset'>('button');

  iconType = input<'material' | 'class'>('material');

  disabled = input<boolean>();
  rounded = input<boolean>();

  responsive = input<boolean>(true);
  responsiveText = input<boolean>(false);

  tooltip = input<string>();
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('top');

  onClick = output<void>();

  handleClick() {
    this.onClick.emit();
  }
}
