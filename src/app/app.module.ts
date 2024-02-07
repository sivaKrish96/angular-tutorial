import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentoneComponent } from './parentone/parentone.component';
import { ChildoneComponent } from './childone/childone.component';
import { OnchangesParentComponent } from './onchanges-parent/onchanges-parent.component';
import { OnchangesChildComponent } from './onchanges-child/onchanges-child.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { FormChildComponent } from './form-child/form-child.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormValidationReactiveComponent } from './form-validation-reactive/form-validation-reactive.component';
import { HttpRequestComponent } from './http-request/http-request.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    ParentoneComponent,
    ChildoneComponent,
    OnchangesParentComponent,
    OnchangesChildComponent,
    AngularFormsComponent,
    FormChildComponent,
    ReactiveFormsComponent,
    FormValidationComponent,
    FormValidationReactiveComponent,
    HttpRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
