import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<RequestDTO, ResponseDTO> {
  protected readonly apiUrl = 'http://localhost:8082/';
  abstract mapping: string;

  constructor(private httpClient: HttpClient) { }

  create(request: RequestDTO): Observable<ResponseDTO> {
    return this.httpClient.post<ResponseDTO>(`${this.apiUrl}${this.mapping}`, request);
  }

  getAll(): Observable<ResponseDTO[]> {
    return this.httpClient.get<ResponseDTO[]>(`${this.apiUrl}${this.mapping}`);
  }

  getByUUID(uuid: string): Observable<ResponseDTO> {
    return this.httpClient.get<ResponseDTO>(`${this.apiUrl}${this.mapping}/${uuid}`);
  }

  updateByUUID(uuid: string, request: RequestDTO): Observable<RequestDTO> {
    return this.httpClient.put<RequestDTO>(`${this.apiUrl}${this.mapping}/${uuid}`, request);
  }

  deleteByUUID(uuid: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}${this.mapping}/${uuid}`);
  }
}
