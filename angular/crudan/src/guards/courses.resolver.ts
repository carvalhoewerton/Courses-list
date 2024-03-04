import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Courses } from '../pages/courses/model/courses';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que este serviço está disponível em toda a aplicação
})
export class CourseResolver implements Resolve<Courses> {

  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Courses> {
    const courseId = route.paramMap.get('id');
    if (courseId) {
      console.log(courseId);
      return this.coursesService.loadById(courseId);
    } else {
      // Caso não haja um id válido nos parâmetros da rota
      return of({ id: '', name: '', category: '' }); // Retorna um curso vazio
    }
  }
}
