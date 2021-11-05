import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postAlertes(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getAlertes() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateAlertes(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteAlertes(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }


  postServices(data: any) {
    return this.http.post<any>("http://localhost:3000/profile", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getServices() {
    return this.http.get<any>("http://localhost:3000/profile")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateServices(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/profile/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteServices(id: number) {
    return this.http.delete<any>("http://localhost:3000/profile/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}

