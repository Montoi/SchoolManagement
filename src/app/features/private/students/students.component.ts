import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IStudent } from 'src/app/shared/models/main.interfaces';
import { RequestsService } from 'src/app/shared/providers/external/requests.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public students: IStudent[] = [];

  constructor(
    private requestService: RequestsService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}



  refresh(): void {
    this.router
      .navigateByUrl('/calificaciones', { skipLocationChange: true })
      .then(() => {
        console.log(decodeURI(this.location.path()));
        this.router.navigate([decodeURI(this.location.path())]);
      });
  }
  async ngOnInit(): Promise<void> {
    await this.getStudents();
  }

  public async getStudents(): Promise<void> {
    const resp = await this.requestService.getStudents().then((resp) => resp);
    this.students = [...resp.result];
    console.log(resp.result);
  }

  public async onDeleteStudents(id: number): Promise<void> {
    this.requestService.deleteStudents(id);
    this.refresh();
    alert('Eliminado Correctamente');

  }

}
