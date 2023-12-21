import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'org-button',
  styles: `
    @use 'responsive';

    :host {
      @include responsive.mobile {
        color: red;
      }
    }
  `,
  template: '<button><ng-content /></button>',
})
export class ButtonComponent {}
