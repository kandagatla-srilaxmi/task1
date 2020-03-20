import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public id: number;
  public empData: any;
  constructor(private empservice: EmpServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.empData = {
      id: null,
      name: null,
      age: null
    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      console.log(this.id);
    });
    this.empservice.getById(this.id).subscribe(data => {
      this.empData = data;
      // this.empData = data[0];

    })
  }
  edit() {
    this.empservice.updateDetails(this.empData)
      .subscribe(data => {
        console.log(data);
      });
    alert("updated successfully");
    this.router.navigate(['/empdetails']);
  }
}