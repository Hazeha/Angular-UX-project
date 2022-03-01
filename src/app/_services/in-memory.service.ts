import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://mentalshowerbackend.ndrejr.dk/api/presets';
@Injectable({
  providedIn: 'root'
})

export class InMemoryService {
  room;
  zone;
  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  getbyId(uid) {
    return this.http.get(`https://mentalshowerbackend.ndrejr.dk/api/presets/${uid}`);
  }
}
