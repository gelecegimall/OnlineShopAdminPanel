import { AddressResponseDTO } from "./address";

export interface PersonResponseDTO{
    id: number;
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressResponseDTO[];
}

export interface PersonRequestDTO{
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressResponseDTO[];
}