import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'org-button',
  styles: `
    @use 'responsive';

    button {
      @include responsive.mobile {
        color: red;
      }

      // @media (width < 420px) { color: red }
    }
  `,
  template: '<button><ng-content /></button>',
})
export class ButtonComponent {}
