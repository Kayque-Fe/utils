import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClickOutsideDirective } from '../../click-outside.directive';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'ng-dropdown',
  standalone: true,
  imports: [ButtonComponent, ClickOutsideDirective],
  templateUrl: './button-dropdown.component.html',
  styleUrl: './button-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('dropdown', [
      state('void', style({ height: '0' })),
      state('*', style({ height: '*' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ButtonDropdownComponent {
  
  dropdown: boolean = false;
  test = 'test';

  toggleDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  clickOut() {
    this.dropdown = false;
  }
}
