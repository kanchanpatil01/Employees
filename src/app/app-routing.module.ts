import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmoployeeComponent } from './emoployee/emoployee.component';
import { EditComponent } from "./emoployee/edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: EmoployeeComponent 
  },
  {
    path: "employee/add",
    component: EditComponent
  },
  {
    path: "employee/edit/:id",
    component: EditComponent
  },
  {
    path: "employee/delete/:id",
    component: EmoployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
