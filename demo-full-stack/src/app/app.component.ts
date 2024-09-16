import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'demo-full-stack-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <header class="flex p-4 bg-gray-600 w-screen jutify-center text-gray-200 uppercase">
    <a class="block mr-5" [routerLink]="'/'" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active-header-link">Home</a>
    <a class="block mr-5" [routerLink]="'/about'" routerLinkActive="active-header-link">About</a>
    <a [routerLink]="'/articles'" routerLinkActive="active-header-link">Articles</a>
  </header>
  <router-outlet></router-outlet>
   `,
})
export class AppComponent {}
