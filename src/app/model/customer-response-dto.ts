import {OrderResponseDTO} from "./order-response-dto";

export interface CustomerResponseDTO {
  person: PersonResponseDTO
  isCorporate: boolean
  companyName: String
  taxNumber: String
  taxOffice: String
  orderList: OrderResponseDTO[]
}
