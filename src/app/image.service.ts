import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  viewer=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
}
