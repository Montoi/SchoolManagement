import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IStudent } from '../../models/main.interfaces';
import { RequestsService } from '../../providers/external/requests.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public name: string = '';
  public form = this.fb.group({
    studentId: [0, Validators.required],
    name: ['', Validators.required],
    lastName:  ['', Validators.required],
    age: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private requestService: RequestsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public async accept(): Promise<void>{
    //this.name = this.form.value.name;
   console.log(this.form.value)

    const resp = await this.requestService.postStudents(this.form.value).then((c) => c);
    console.log(resp)
    this.router.navigateByUrl('/estudiantes')
    alert('Agregado correctamente');



  }

}
