import { AddressRequestDTO } from "./address-request-dto";
import { BaseDTO } from "./base-dto";

export interface PersonRequestDTO extends BaseDTO{
    name: string;
    surname: string;
    birthYear: number;
    tc: string;
    addressList: AddressRequestDTO[];
}