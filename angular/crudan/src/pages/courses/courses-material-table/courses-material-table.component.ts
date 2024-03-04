import { Component, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Courses } from '../model/courses';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-courses-material-table',
  standalone: true,
  imports: [MatTableModule, MatIcon],
  templateUrl: './courses-material-table.component.html',
  styleUrl: './courses-material-table.component.scss'
})
export class CoursesMaterialTableComponent {
  @Input() courses: Courses[] =[];
  @Output() add = new EventEmitter<Boolean>;
  @Output() edit = new EventEmitter<Courses>;
  @Output() del = new EventEmitter<Courses>;
  displayedColumns:string[] = [ 'name', 'category','actions'];
  constructor(){

  }
  onAdd(){
    this.add.emit(true);
  }
  onEdit(curso: Courses){
    this.edit.emit(curso);
  }
  onDelete(curso: Courses){
    this.del.emit(curso);
  }
}
