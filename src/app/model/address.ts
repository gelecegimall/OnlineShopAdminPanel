import { PersonRequestDTO, PersonResponseDTO } from "./person";

export interface AddressResponseDTO{
    id: number;
    title: string;
    address: string;
    person: PersonResponseDTO;
}

export interface AddressRequestDTO{
    id: number;
    title: string;
    address: string;
    person: PersonRequestDTO;
}