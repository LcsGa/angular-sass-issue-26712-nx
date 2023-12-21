import { Component } from '@angular/core';
import { ButtonComponent } from '@org/components/button';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'angular-sass-issue-26712-nx-root',
  template:
    '<org-button>Text should become red on screen width < 420px</org-button>',
})
export class AppComponent {}
