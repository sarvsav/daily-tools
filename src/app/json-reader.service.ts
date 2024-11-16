import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonReaderService {
  private jsonFilePath = '/daily-tools/data.json'; // Adjust the filename as needed
  constructor(private http: HttpClient) { }
  getJsonData(): Observable<any> {
    return this.http.get<any>(this.jsonFilePath);
  }
}
