import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PNFComponent } from './pnf/pnf.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailsComponent,
    PNFComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
