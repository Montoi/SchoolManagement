import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificationsComponent } from './features/private/califications/califications.component';
import { DashboardComponent } from './features/private/dashboard/dashboard.component';
import { HomeComponent } from './features/private/home/home.component';
import { ListComponent } from './features/private/list/list.component';
import { StudentsComponent } from './features/private/students/students.component';
import { AddStudentComponent } from './shared/components/add-student/add-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: HomeComponent},
  {path: 'estudiantes', component: StudentsComponent},
  {path: 'calificaciones', component: CalificationsComponent},
  {path: 'lista', component: ListComponent},
  {path: 'addStudent', component: AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
