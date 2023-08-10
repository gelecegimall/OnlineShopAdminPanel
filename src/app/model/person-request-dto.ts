import { AddressRequestDTO } from "./address-request-dto";

export interface PersonRequestDTO{
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressRequestDTO[];
}