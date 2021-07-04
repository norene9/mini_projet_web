import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [


 { path: 'dashboard', component:DashboardComponent },
   { path: 'login', component: LoginComponent },
   
     { path: 'edit', component: EditComponent },
      { path: 'delete', component: DeleteComponent },
        { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
