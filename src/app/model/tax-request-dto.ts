import { BaseDTO } from "./base-dto";

export interface TaxRequestDTO extends BaseDTO {
    name:string;
    code:string;
    rate:number;
}
