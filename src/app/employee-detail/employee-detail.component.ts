import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee-detail',
  template: `
  <h2> {{employee?.position}} </h2>
  <div class="center">
<p-card header=" {{employee?.name}}" subheader="{{employee?.school}}" [style]="{width: '240px'}" styleClass="ui-card-shadow">
    <p-header>
        <img src="{{employee?.img}}">
    </p-header>
    <div>{{employee?.info}}</div>
    <p-footer>
        <button pButton type="button" label="Contato" (click)="handleClick($event)" icon="pi pi-envelope" style="margin-right: .25em">
        </button>
      <div *ngIf="clicked">{{employee?.email}} </div>
    </p-footer>

</p-card>
</div>
     `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employee: IEmployee;
  public clicked = false;
  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log(id);
      // this.employee = data.filter(employee => employee.id === id)[0];
      // console.log(JSON.stringify(this.employee));
      this._employeeService.getEmployee(id)
        .subscribe(data => {
          this.employee = <IEmployee>data;
          // o metodo acima faz a request e chama observable casteado

        });
    });
    // o metodo acima subscreve o observable ao vetor da classe
  }
  handleClick($event) {
    this.clicked = !this.clicked;
  }

}
