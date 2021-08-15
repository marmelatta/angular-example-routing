import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'first-parent',
        pathMatch: 'full'
      },
      {
        path: 'first-parent',
        component: FirstParentComponent,
      },
      {
        path: 'second-parent',
        component: SecondParentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
