import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http:HttpClient) { }

getAllDetails():Observable<any>{
 return this.http.get<any>(`http://localhost:5000/getAllDetails`);
}
insertDetails(data):Observable<any>{
  return this.http.post<any>(`http://localhost:5000/insert`,data);
}
getById(id):Observable<any>{
  return this.http.get<any>(`http://localhost:5000/getById/${id}`);
}
updateDetails(data):Observable<any>{
  return this.http.put<any>(`http://localhost:5000/update`,data);
}
deleteMethod(id):Observable<any>{
  return this.http.delete<any>(`http://localhost:5000/delete/${id}`);
}
}
