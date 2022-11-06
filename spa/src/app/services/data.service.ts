import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../environments/environments/environment';
import { ToDoList } from '../interfaces/ToDoList';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ToDoList: ToDoList[] = [];
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTodoList() {
    if (this.ToDoList.length > 0) {
      return of(this.ToDoList);
    }
    return this.http.get<ToDoList[]>(this.baseUrl + 'ToDoList').pipe(map(todolist => {
      this.ToDoList = todolist;
      return todolist;
    }));
  }

  getTodoListById(id: string) {
    const todolist = this.ToDoList.find(x => {
      x.id === id;
    })
    if (todolist !== undefined) {
      return of(todolist);
    }
    return this.http.get<ToDoList>(this.baseUrl + "ToDoList/" + id);
  }

  CreateNewToDoList(Todolist: ToDoList) {
    // return this.http.post<IToDoList>(this.baseUrl + "ToDoList").pipe(map(todolist => {
    //   this.ToDoList = todolist;
    //   return todlist;
    // }));
    return this.http.post<ToDoList>(this.baseUrl + 'ToDoList', JSON.stringify(Todolist), {'headers': {'content-Type': 'application/json'}})
  }

  UpdateToDoList(id: string, Todolist: ToDoList) {
    return this.http.put<ToDoList>(this.baseUrl + 'ToDoList/' + id, JSON.stringify(Todolist), {'headers': {'content-Type': 'application/json'}})
  }

  DeleteToDoList(id: string) {
    return this.http.delete<ToDoList>(this.baseUrl + 'ToDoList/' + id);
  }
}