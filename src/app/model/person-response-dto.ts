import { AddressResponseDTO } from "./address-response-dto";

export interface PersonResponseDTO{
    id: number;
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressResponseDTO[];
}