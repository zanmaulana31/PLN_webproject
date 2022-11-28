import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { Forms2Component } from './forms2/forms2.component';
import { HomeComponent } from './home/home.component';
import { Forms4Component } from './forms4/forms4.component';
import { Forms5Component } from './forms5/forms5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Forms6Component } from './forms6/forms6.component';
import { Forms7Component } from './forms7/forms7.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebarModule } from 'ng-sidebar';
import { Forms8Component } from './forms8/forms8.component';
import { Forms9Component } from './forms9/forms9.component';
import { Forms10Component } from './forms10/forms10.component';




@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TableComponent,
    Forms2Component,
    HomeComponent,
    Forms4Component,
    Forms5Component,
    Forms6Component,
    Forms7Component,
    SidenavComponent,
    Forms8Component,
    Forms9Component,
    Forms10Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
