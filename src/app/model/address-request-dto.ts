import { BaseDTO } from "./base-dto";
import { PersonRequestDTO } from "./person-request-dto";

export interface AddressRequestDTO extends BaseDTO{
    id: number;
    title: string;
    address: string;
    person: PersonRequestDTO;
}