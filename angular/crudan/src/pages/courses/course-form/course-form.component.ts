import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToolbarComponent } from "../../../components/toolbar/toolbar.component";
import { CommonModule, Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../model/courses';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
    imports: [CourseFormComponent, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, ReactiveFormsModule, MatInputModule, CommonModule, MatFormFieldModule, ToolbarComponent], // Troque FormsModule por ReactiveFormsModule
    standalone: true
})
export class CourseFormComponent {

  form: FormGroup;


  constructor(private route:ActivatedRoute, private router: Router, private location:Location, private formBuilder: FormBuilder, private service:CoursesService) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
    const course: Courses = this.route.snapshot.data['course'];

  }

  onCancel(){

    return this.location.back();

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result));
    this.location.back();
  }


}
