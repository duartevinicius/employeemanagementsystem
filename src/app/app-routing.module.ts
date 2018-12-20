import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
const routes: Routes = [{
    path: 'employees', component: EmployeeListComponent, children: [
        {path: ':id', component: EmployeeDetailComponent}
    ]
},
{
    path: 'departments', component: DepartmentListComponent
},
{
    path: 'departments/:id', component: DepartmentDetailComponent
},
{
    path: 'employees_info', component: EmployeeDetailComponent
},
{
    path: '', redirectTo: AppComponent, pathMatch: 'full'
},
{
    path: '**', component: PageNotFoundComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}
export const routingComponents = [EmployeeListComponent,
    DepartmentListComponent, EmployeeDetailComponent, PageNotFoundComponent, DepartmentDetailComponent];
