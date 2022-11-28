import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { Forms4Component } from './forms4/forms4.component';
import { Forms5Component } from './forms5/forms5.component';
import { Forms6Component } from './forms6/forms6.component';
import { Forms7Component } from './forms7/forms7.component';
import { Forms8Component } from './forms8/forms8.component';
import { Forms9Component } from './forms9/forms9.component';
import { Forms10Component } from './forms10/forms10.component';
import { Forms2Component } from './forms2/forms2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:  TableComponent},
  { path: 'forms1', component:  FormsComponent},
  { path: 'forms2', component:  Forms2Component},
  { path: 'forms4', component:  Forms4Component},
  { path: 'forms5', component:  Forms5Component},
  { path: 'forms6', component:  Forms6Component},
  { path: 'forms7', component:  Forms7Component},
  { path: 'forms8', component:  Forms8Component},
  { path: 'forms9', component:  Forms9Component},
  { path: 'forms10', component:  Forms10Component},
  { path: 'table', component:  TableComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
