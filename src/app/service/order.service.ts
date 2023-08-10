import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderRequestDTO} from "../model/order-request-dto";
import {OrderResponseDTO} from "../model/order-response-dto";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderResponse: OrderResponseDTO[] = []
  apiUrl: String = "http://localhost:8080/";
  orderResponseByUUID?: OrderResponseDTO;

  constructor(private httpClient: HttpClient) {
  }

  create(orderRequest: OrderRequestDTO): void {
    this.httpClient.post(this.apiUrl + "order", orderRequest).subscribe(
      response => {
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  getAll(): Observable<OrderResponseDTO[]> {
    return this.httpClient.get<OrderResponseDTO[]>(this.apiUrl + "order")
  }


  getByUUID(uuid: string) {
    this.httpClient.get<OrderResponseDTO>(this.apiUrl + "order/" + uuid).subscribe(x => {
      this.orderResponseByUUID = x;
    });

    return this.orderResponseByUUID;
  }


  deleteByUUID(uuid: string) {
    this.httpClient.delete(this.apiUrl + "order/" + uuid).subscribe(
      response => {
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

}
