import { PersonResponseDTO } from "./person-response-dto";

export interface AddressResponseDTO{
    id: number;
    title: string;
    address: string;
    person: PersonResponseDTO;
}