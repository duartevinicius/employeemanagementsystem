import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `<div class="center">
              <h3> Department List</h3>
            <ul >
         <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor= "let department of departments"> 
         {{department.id}} {{department.name}} </li>
                </ul>
                </div> `
  ,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
  ];
  public selectedId;
  constructor(private _departmentService: DepartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._departmentService.getDepartments()
      .subscribe(data => this.departments = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(department) {
    // no matter what the url is, append the departmentId and go to it
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
