import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { StudentsComponent } from './features/private/students/students.component';
import { ListComponent } from './features/private/list/list.component';
import { HomeComponent } from './features/private/home/home.component';
import { AddStudentComponent } from './shared/components/add-student/add-student.component';
import { CalificationsComponent } from './features/private/califications/califications.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    StudentsComponent,
    ListComponent,
    HomeComponent,
    AddStudentComponent,
    CalificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // ESTA APP ESTA HECHA SIN LIBRERIAS EXTERNAS, TODO A CODIGO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
