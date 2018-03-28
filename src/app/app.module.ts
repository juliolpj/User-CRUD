import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryApiService } from './in-memory-api.service';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    UserCrudComponent,
    UserDetailComponent,
    UserFormComponent,
    UserEditComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
