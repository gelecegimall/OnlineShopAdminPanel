import { BaseDTO } from "./base-dto";
import { PersonResponseDTO } from "./person-response-dto";

export interface AddressResponseDTO extends BaseDTO{
    id: number;
    title: string;
    address: string;
    person: PersonResponseDTO;
}