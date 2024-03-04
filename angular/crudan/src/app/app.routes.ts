import { Routes } from '@angular/router';
import { CoursesComponent } from '../pages/courses/courses.component';
import { CourseFormComponent } from '../pages/courses/course-form/course-form.component';
import { CourseResolver } from '../guards/courses.resolver';
export const routes: Routes = [
  { path: 'courses', component: CoursesComponent }, // Update path to start with "courses"
  { path: 'courses/new', component: CourseFormComponent, resolve: { course: CourseResolver } },
  { path: 'courses/edit/:id', component: CourseFormComponent, resolve: { course: CourseResolver } }
];
