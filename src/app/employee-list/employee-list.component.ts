import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2 style="font-family:Arial; color:blue; text-align: center">Here is the Team 31, the best coders of Paraiba Valley: </h2>
  <div class="center"><p-listbox  [options]="employees" optionLabel="name" [(ngModel)]="selected" (click)="onSelect(selected)" ></p-listbox>
  </div><!-->
  < ul *ngFor ="let employee of employees">
    <li class=list (click)="onSelect(employee)"> {{employee.id}} - {{employee.name}}</li>
  </ul> <-->

    <router-outlet></router-outlet>
     `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public selectedId;
  public selected: EmployeeService; // pelo 2way data bindind receberá o employee clicado
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
    // o metodo acima faz a request e chama observable casteado

    // o metodo acima subscreve o observable ao vetor da classe
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }
  onSelect(employee) {
    // no matter what the url is, append the departmentId and go to it
    this.router.navigate([employee.id], { relativeTo: this.route });
  }
}
