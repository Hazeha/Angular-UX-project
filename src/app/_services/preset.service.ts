import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

const presetUrl = 'https://mentalshowerbackend.ndrejr.dk/api/preset';

interface Presets {
  airflow: number;
  user_id: number;
  zone_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class PresetService {

  constructor(private http: HttpClient) { }

  postPreset(data){
    return this.http.post(presetUrl, data);
  }
  getPreset(id: number): Observable<Presets[]>{
    return this.http.get<Presets[]>(`${presetUrl}/${id}`);
  }

  putPresets(id, data): Observable<any> {
    return this.http.post(`${presetUrl}/${id}`, data);
  }
}
