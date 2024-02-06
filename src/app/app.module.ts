import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentoneComponent } from './parentone/parentone.component';
import { ChildoneComponent } from './childone/childone.component';
import { OnchangesParentComponent } from './onchanges-parent/onchanges-parent.component';
import { OnchangesChildComponent } from './onchanges-child/onchanges-child.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
