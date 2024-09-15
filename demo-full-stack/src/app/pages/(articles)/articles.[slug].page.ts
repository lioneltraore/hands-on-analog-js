import { injectActivatedRoute } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './articles-detail.page.html',
  imports: [AsyncPipe]
})
export default class ArticlesDetailPageComponent {
  route = injectActivatedRoute();
  $slug = this.route.paramMap.pipe(map( param => param.get('slug') ) );
}
