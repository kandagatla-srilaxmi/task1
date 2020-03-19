import { Component, OnInit } from '@angular/core';
import {EmpServiceService} from '../emp-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
 public emplist=[];
  constructor(private empservice:EmpServiceService) { }

  ngOnInit(): void {
    this.empservice.getAllDetails().subscribe(data=>this.emplist=data);
  }

}
