import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  public emplist=[];
  constructor(private empservice:EmpServiceService,private router:Router) { }
  
  ngOnInit(): void {
      this.empservice.getAllDetails().subscribe(data=>this.emplist=data);
    }

deleteemp(id){
  this.empservice.deleteMethod(id).subscribe(data=>{
    console.log(data);
   this.empservice.getAllDetails().subscribe(data=>{
    this.emplist=data;
    }) 
  });
  alert("deleted");
}
editemp(id){
  this.router.navigate(['/editemployee',id]);
}
}