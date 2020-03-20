import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public formData:any;

  constructor(private empservice:EmpServiceService,private router:Router) { 
    this.formData={
    id:null,
    name:null,
    age:null,
    num:null,
    }

  }

  ngOnInit(): void {
  }
  addDetails(){
    
    this.empservice.insertDetails(this.formData)
    .subscribe(data=>{
      console.log(data);
    });
    alert('hurrayyyyyy data inserted.......');
    this.router.navigate(['/empdetails']);
  }

}
