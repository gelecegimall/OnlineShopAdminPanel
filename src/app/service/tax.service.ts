import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { TaxRequestDTO } from '../model/tax-request-dto';
import { TaxResponseDTO } from '../model/tax-response-dto';
@Injectable({
  providedIn: 'root'
})
export class TaxService extends BaseService<TaxRequestDTO, TaxResponseDTO> {
  override mapping: string = "tax";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
