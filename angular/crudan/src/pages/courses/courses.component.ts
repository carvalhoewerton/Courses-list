import { Component } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { Courses } from './model/courses';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule, Location } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CategoryPipe } from "../../shared/pipes/category.pipe";
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesMaterialTableComponent } from "./courses-material-table/courses-material-table.component";


@Component({
    selector: 'app-courses',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [MatButtonModule, MatIconModule, CommonModule, MatProgressSpinnerModule, ToolbarComponent, MatTableModule, MatCardModule, CategoryPipe, CoursesMaterialTableComponent]
})
export class CoursesComponent {
  courses$: Observable<Courses[]>;
  displayedColumns:string[] = [ 'name', 'category','actions'];

  constructor(private service:CoursesService, private router: Router,
    private route:ActivatedRoute, private location:Location
    ){
    this.courses$ = this.service.list();

  }
  onCancel(){
    this.location.back();
  }
  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(curso: Courses) {
    this.router.navigate(['edit', curso.id], { state: { curso: curso } });
  }
  onDelete(curso: Courses) {
    this.service.delete(curso.id).subscribe(() => {
    ;
    });
    this.refresh()
  }

  refresh(){
    this.courses$ = this.service.list();
  }


}
