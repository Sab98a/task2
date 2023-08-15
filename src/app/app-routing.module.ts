import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarkComponent } from './mark/mark.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'mark', component:MarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
