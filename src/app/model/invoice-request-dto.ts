import { BaseDTO } from "./base-dto";
import { OrderRequestDTO } from "./order-request-dto";

export interface InvoiceRequestDTO extends BaseDTO {
    billno: number;
    billDate: number;
    taxRate: number;
    taxAmount: number;
    totalSellNetPrice: number;
    totalSellPrice: number;
    order: OrderRequestDTO;
}
