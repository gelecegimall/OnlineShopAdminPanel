import { AddressDTO } from "./address";

export interface PersonDTO{
    id: number;
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressDTO[];
}

export interface PersonRequestDTO{
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressDTO[];
}