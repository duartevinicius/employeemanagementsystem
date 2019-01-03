import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    TabMenuModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
