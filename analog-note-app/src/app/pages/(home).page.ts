import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-note-app-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <analog-note-app-analog-welcome/>
  `,
})
export default class HomeComponent {
}
