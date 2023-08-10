import { PersonDTO } from "./person";

export interface AddressDTO{
    id: number;
    title: string;
    address: string;
    person: PersonDTO;
}

export interface AddressRequestDTO{
    id: number;
    title: string;
    address: string;
    personId: PersonDTO;
}