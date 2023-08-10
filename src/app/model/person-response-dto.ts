import { AddressResponseDTO } from "./address-response-dto";
import { BaseDTO } from "./base-dto";

export interface PersonResponseDTO extends BaseDTO{
    id: number;
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressResponseDTO[];
}