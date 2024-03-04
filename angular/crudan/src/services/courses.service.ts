import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../pages/courses/model/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //especifíca de onde virá a requisição
  private readonly API = 'api/courses'
  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Courses[]>(this.API);
  }
  save(record: Partial<Courses>){
    if(record.id){
      return this.update(record)
    }
    return this.create(record);

  }


  private create(curso: Partial<Courses>){
    return this.http.post<Courses>(this.API, curso);
  }

  private update(curso: Partial<Courses>){
    return this.http.put<Courses>(`${this.API}/${curso.id}`, curso);
  }

  delete(id:string){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id:string){
    return this.http.get<Courses>(`${this.API}/${id}`)
  }

}


