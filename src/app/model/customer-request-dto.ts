import { BaseDTO } from "./base-dto"
import { PersonRequestDTO } from "./person-request-dto"

export interface CustomerRequestDTO extends BaseDTO{
  person: PersonRequestDTO
  isCorporate: boolean
  companyName: String
  taxNumber: String
  taxOffice: String
  // orderUUIDList: number[]
}
