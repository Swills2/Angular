import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  allAuthor(){
    return this._http.get('/index');
  }

  createA(newA:object){
    console.log(newA);
    return this._http.post('/createA', newA);
  }
  deleteA(aId){
    return this._http.delete('/deleteA/'+aId);
  }

  findA(aId){
    return this._http.get('/findA/'+aId);
  }

  updateA(editA:object, aId){
    return this._http.put('/updateA/'+aId, editA);
  }
}