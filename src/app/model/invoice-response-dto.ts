import { BaseDTO } from "./base-dto";
import { OrderResponseDTO } from "./order-response-dto";

export interface InvoiceResponseDTO extends BaseDTO {
    billno: number;
    billDate: number;
    taxRate: number;
    taxAmount: number;
    totalSellNetPrice: number;
    totalSellPrice: number;
    order: OrderResponseDTO;
}
