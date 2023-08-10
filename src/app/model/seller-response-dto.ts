import { BaseDTO } from "./base-dto";

export interface SellerResponseDTO extends BaseDTO {
    name: string;
    surname: string;
    tc: string;
    email: string;
    shopName: string;
    taxNumber: string;
    taxOffice: string;
}



