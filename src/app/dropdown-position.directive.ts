import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[dropdownPosition]',
  standalone: true,
})
export class DropdownPositionDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.isLeftViewport(this.el.nativeElement) === 'left') {
      this.el.nativeElement.style.left = '0'
      console.log('left')
    } else if (this.isLeftViewport(this.el.nativeElement) === 'both') {
      console.log('both')
      this.el.nativeElement.style.left = '0'
      this.el.nativeElement.style.right = '0'
    } else {
      console.log('right')
      this.el.nativeElement.style.right = '0'
    }
  }

  isLeftViewport(target: HTMLElement): string {
    const rect = target.getBoundingClientRect()

    console.log(rect.left, rect.right, window.innerWidth)
    if (rect.left < 0 && rect.right < window.innerWidth) {
      return 'both'
    } else if (rect.left < 0) {
      return 'left'
    } else {
      return 'right'
    }
  }
}
