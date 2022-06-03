import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './Models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
