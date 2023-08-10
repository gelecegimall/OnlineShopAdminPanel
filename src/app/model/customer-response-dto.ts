import { BaseDTO } from "./base-dto";
import {OrderResponseDTO} from "./order-response-dto";
import { PersonResponseDTO } from "./person-response-dto";

export interface CustomerResponseDTO extends BaseDTO {
  person: PersonResponseDTO
  isCorporate: boolean
  companyName: String
  taxNumber: String
  taxOffice: String
  orderList: OrderResponseDTO[]
}
