import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { IStudent, ISubjects } from 'src/app/shared/models/main.interfaces';
import { RequestsService } from 'src/app/shared/providers/external/requests.service';

@Component({
  selector: 'app-califications',
  templateUrl: './califications.component.html',
  styleUrls: ['./califications.component.css']
})
export class CalificationsComponent implements OnInit {

  public students: IStudent[] = [];
  public selected?:  IStudent;
  public editing?: boolean = false;
  public subjects?: any;
  public spanish: number = 0;
  public math: number = 0;
  public naturalSciences: number = 0;
  public historyScience: number = 0;
  public label: string= '';
  public studentsId= 0;
  public form = this.fb.group({
    spanishLanguage: ['', Validators.required],
    math: ['', Validators.required],
    naturalSciences:  ['', Validators.required],
    studentId: ['', Validators.required],
    historyScience: ['', Validators.required],
  })
  constructor(private requestService: RequestsService,
              private fb: FormBuilder) {
     this.getStudents();
   }

  ngOnInit(): void {
  }
  public async getStudents(): Promise<void> {
    const resp = await this.requestService.getStudents().then((resp) => resp);
    this.students = [...resp.result];
  }
  public async onSelect(student: IStudent): Promise<void>{
    this.selected = student;
    this.studentsId = student.studentId
    await this.getSubject(student.studentId)

  }

  public async getSubject(id: number): Promise<void>{
    this.spanish = 0;
    this.math = 0;
    this.naturalSciences = 0;
    this.historyScience = 0;
    this.editing = false;
    const resp = await this.requestService.getSubject(id).then((resp) => resp);
    if (resp.result) {
      console.log('trajo')
      this.editing = true;
      this.subjects = resp.result
      this.spanish = resp.result.spanishLanguage;
      this.math = resp.result.math;
      this.naturalSciences = resp.result.naturalSciences;
      this.historyScience = resp.result.historyScience;
     // this.label = this.form.value.spanishLanguage
    }

  }
  public async accept(): Promise<void>{
    if (this.editing) {

      await this.requestService.putSubject(this.form.value).then((c) => c);
      alert('Editado correctamente');
    }
    else{
      if (this.studentsId == 0) {
        console.log('Selecciona a un estudiante')
        return
      }
      await this.requestService.postSubject(this.form.value).then((c) => c);
      
      alert('Corregido correctamente');

    }

  }

  public letra(number: number): string{
    if (number == 100) {
      return 'A+';
    }
    else if (number >= 90) {
      return 'A';
    }
    else if (number >= 80) {
      return 'c';
    }else if (number >= 70) {
      return 'c';
    }else if (number < 70) {
      return 'R';
    }
    return ' ';
  }
}
