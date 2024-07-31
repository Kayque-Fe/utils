import { DOCUMENT } from '@angular/common';
import
  {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    Output,
  } from '@angular/core';
import { Subscription, filter, fromEvent, tap } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy
{
  @Output() clickOutside = new EventEmitter<void>();
  documentClick$: Subscription | undefined;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterViewInit(): void
  {
    this.documentClick$ = fromEvent(this.document, 'click')
      .pipe(
        tap((event) => { }),
        filter((event) =>
        {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe(() =>
      {
        this.clickOutside.emit();
      });
  }

  ngOnDestroy(): void
  {
    this.documentClick$?.unsubscribe();
  }

  isInside(target: HTMLElement): boolean
  {
    return (
      target === this.el.nativeElement || this.el.nativeElement.contains(target)
    );
  }
}
