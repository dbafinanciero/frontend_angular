import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';



const routes: Routes = [
  { path: 'users', redirectTo: 'users/index', pathMatch: 'full'},
  { path: 'users/index', component: IndexComponent },
  { path: 'users/create', component: CreateComponent },
  { path: 'users/:postId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
