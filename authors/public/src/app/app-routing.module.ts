import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { authorsComponent } from './authors/authors.component';

const routes: Routes = [
  {path: 'allAuthors', component:authorsComponent},
  {path: 'addAuthor', component:AddAuthorComponent},
  {path: 'updateA/:aId', component:EditAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
