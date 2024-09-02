import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoE]',
  standalone: true,
})
export class NoEDirective {
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }
}
