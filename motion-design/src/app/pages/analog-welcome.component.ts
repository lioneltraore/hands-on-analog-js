import { injectRouter } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'motion-design-analog-welcome',
  standalone: true,
  imports: [RouterLink],
  host: {
    class:
      'flex min-h-screen flex-col text-zinc-900 bg-zinc-50 px-4 pt-8 pb-32',
  },
  template: `
    <main class="flex flex-col justify-center items-center pt-20">
      <h1 class="uppercase text-[#353535] mb-8 font-bold text-4xl">Motion design</h1>
        <div class="grid grid-cols-5 gap-4">
          @for (exercice of exercices; track $index) {
            <div (click)="navTo(exercice.slug)" class="cursor-pointer p-8 rounded-md bg-[#01888F] text-[#FEF2E8] max-w-48 hover:bg-[#01686e]">
              <span class="font-bold text-2xl text-[#E7EBF3]">{{ exercice.id }}</span>
              <h2 class="uppercase text-xs mt-4 font-bold">{{ exercice.name }}</h2>
            </div>
          }
        </div>
    </main>
  `,
})
export class AnalogWelcomeComponent {
  exercices = [
    {
      id: '01',
      name: 'Product Feature With Video',
      slug: 'product-feature-with-video'
    },
    {
      id: '02',
      name: '-',
      slug: '-'
    },
    {
      id: '03',
      name: '-',
      slug: '-'
    },
    {
      id: '04',
      name: '-',
      slug: '-'
    },
    {
      id: '05',
      name: '-',
      slug: '-'
    },
    {
      id: '06',
      name: '-',
      slug: '-'
    },
    {
      id: '07',
      name: '-',
      slug: '-'
    },
    {
      id: '08',
      name: '-',
      slug: '-'
    },
    {
      id: '09',
      name: '-',
      slug: '-'
    },
    {
      id: '10',
      name: '-',
      slug: '-'
    },
    {
      id: '11',
      name: '-',
      slug: '-'
    },
    {
      id: '12',
      name: '-',
      slug: '-'
    },
    {
      id: '13',
      name: '-',
      slug: '-'
    },
    {
      id: '14',
      name: '-',
      slug: '-'
    },
    {
      id: '15',
      name: '-',
      slug: '-'
    },
    {
      id: '16',
      name: '-',
      slug: '-'
    },
    {
      id: '17',
      name: '-',
      slug: '-'
    },
    {
      id: '18',
      name: '-',
      slug: '-'
    },
    {
      id: '19',
      name: '-',
      slug: '-'
    },
  ];

  router = injectRouter();

  navTo(slug: string) {
    console.log(`navigate to ${slug}`);
    this.router.navigateByUrl(slug);
  }
}
