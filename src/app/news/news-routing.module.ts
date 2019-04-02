import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewDetailComponent } from './news-detail/news-detail.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: ':slug',
        component: NewDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
