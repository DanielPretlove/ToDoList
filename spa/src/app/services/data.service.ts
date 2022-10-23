import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../environments/environments/environment';
import { IToDoList } from '../interfaces/IToDoList';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ToDoList: IToDoList[] = [];
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTodoList() {
    if (this.ToDoList.length > 0) {
      return of(this.ToDoList);
    }
    return this.http.get<IToDoList[]>(this.baseUrl + 'ToDoList').pipe(map(todolist => {
      this.ToDoList = todolist;
      return todolist;
    }));
  }
}