import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from './starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private url = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json';

  constructor(private http: HttpClient) {}

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.url);
  }
}



