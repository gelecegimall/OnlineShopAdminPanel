export interface CustomerRequestDTO {
  person: PersonRequestDTO
  isCorporate: boolean
  companyName: String
  taxNumber: String
  taxOffice: String
  // orderUUIDList: number[]
}
