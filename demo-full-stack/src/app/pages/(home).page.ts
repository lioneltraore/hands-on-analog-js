import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'demo-full-stack-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <demo-full-stack-analog-welcome/>
  `,
})
export default class HomeComponent {
}
