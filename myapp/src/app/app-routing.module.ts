import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './component/add-form/add-form.component';
import { ViewFormComponent } from './component/view-form/view-form.component';
import { EditFormComponent } from './component/edit-form/edit-form.component';
import { DisplayComponent } from './component/display/display.component';


const routes: Routes = [
  {
    path : "add-form",
    component : AddFormComponent
  },
  {
    path : "",
    component : ViewFormComponent
  },
  {
    path: '', // Or a specific parent path if needed
    children: [
      {
        path: 'edit-form/:id',
        component: EditFormComponent,
       
      },
      {
        path: 'display/:id',
        component: DisplayComponent
      },
      {
        path: 'delete/:id',
        component: DisplayComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
