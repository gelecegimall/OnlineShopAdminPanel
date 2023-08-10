import { BaseDTO } from "./base-dto";

export interface TaxResponseDTO extends BaseDTO {
    name:string;
    code:string;
    rate:number;
}
