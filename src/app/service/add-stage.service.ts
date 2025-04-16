import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stage } from 'src/core/models/Stage';

@Injectable({
  providedIn: 'root'
})
export class AddStageService {

  private apiUrl = 'http://localhost:3000/stages';

  constructor(private http: HttpClient) { }

  addStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.apiUrl, stage);
  }
  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>('http://localhost:3000/stages');
  }

  getStageById(id: number): Observable<Stage> {
    return this.http.get<Stage>(`${this.apiUrl}/${id}`);
  }
  
}
