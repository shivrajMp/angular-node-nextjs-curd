import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCreateDetailsComponent } from './core/features/edit-create-details/edit-create-details.component';
import { UserDetailsListComponent } from './core/features/user-details-list/user-details-list.component';

const routes: Routes = [
  {
    path: 'user-details-list',
    component: UserDetailsListComponent,
  },
  {
    path: 'create-charge',
    component: EditCreateDetailsComponent,
  },
  {
    path: '',
    redirectTo:'/user-details-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'/user-details-list'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
