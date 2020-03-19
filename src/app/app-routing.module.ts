import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { PNFComponent } from './pnf/pnf.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';



const routes: Routes = [
  {path:'', redirectTo:'/emplist', pathMatch: 'full'},
  {path:'empdetails',component:EmpDetailsComponent},
  {path:'emplist',component:EmpListComponent},
  
  {path:'editemployee',component:EditEmployeeComponent},
  {path:'addemployee',component:AddEmployeeComponent},
  {path:'**',component:PNFComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
