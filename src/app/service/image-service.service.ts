import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from '../model/image';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImageService {

  private imageUrl: string;

  constructor(private http: HttpClient) {
    this.imageUrl = 'http://localhost:8080/images';
  }

  public findAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageUrl);
  }

  /*public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }*/
}
