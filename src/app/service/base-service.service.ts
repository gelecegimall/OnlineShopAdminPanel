import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseServiceService<RequestDTO, ResponseDTO> {
  protected responseList: ResponseDTO[] = []
  protected readonly apiUrl: String = "http://localhost:8080/";
  protected responseByUUID?: ResponseDTO;
  abstract mapping: string;

  constructor(private httpClient: HttpClient) {
  }

  create(request: RequestDTO) {
    return this.httpClient.post(this.apiUrl + this.mapping, request);
  }

  getAll(): Observable<ResponseDTO[]> {
    return this.httpClient.get<ResponseDTO[]>(this.apiUrl + this.mapping);
  }


  getByUUID(uuid: string) {
    return this.httpClient.get<ResponseDTO>(this.apiUrl + this.mapping + "/" + uuid);
  }


  deleteByUUID(uuid: string) {
    return this.httpClient.delete(this.apiUrl + this.mapping + "/" + uuid);
  }

}
