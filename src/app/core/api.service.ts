import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  
  postServices(data: any) {
    return this.http.post<any>("http://localhost:3000/comments", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getServices() {
    return this.http.get<any>("http://localhost:3000/comments")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateServices(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/comments/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteServices(id: number) {
    return this.http.delete<any>("http://localhost:3000/comments/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}

