import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'motion-design-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <motion-design-analog-welcome/>
  `,
})
export default class HomeComponent {
}
