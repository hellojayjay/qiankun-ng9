import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponent } from './other/other.component';
import { EmptyComponent } from './empty.component';

const routes: Routes = [
  {
    path: 'ng9',
    children: [
      {
        path: 'lazy',
        loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
      },
      {
        path: 'other',
        component: OtherComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
