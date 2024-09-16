import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'demo-full-stack-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <header class="flex p-4 bg-gray-600 w-screen jutify-center text-gray-200 uppercase">
    <a class="block mr-5" routerLink="/">Home</a>
    <a class="block mr-5" routerLink="/about">About</a>
    <a routerLink="/articles">Articles</a>
  </header>
  <router-outlet></router-outlet>
   `,
})
export class AppComponent {}
