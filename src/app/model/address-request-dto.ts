import { PersonRequestDTO } from "./person-request-dto";

export interface AddressRequestDTO{
    id: number;
    title: string;
    address: string;
    person: PersonRequestDTO;
}