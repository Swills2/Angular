import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { authorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    authorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }