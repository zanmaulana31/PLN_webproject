import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient:HttpClient
  ) { }

  insertData(data)
  {
    return this.httpClient.post('', data);
  }

}
