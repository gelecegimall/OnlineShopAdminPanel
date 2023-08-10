import { BaseDTO } from "./base-dto";

export interface SellerRequestDTO extends BaseDTO {
    name: string;
    surname: string;
    tc: string;
    email: string;
    shopName: string;
    taxNumber: string;
    taxOffice: string;
}


