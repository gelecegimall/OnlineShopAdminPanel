import { OrderResponseDTO } from "./order-response-dto";

export interface InvoiceResponseDTO {
    billno: number;
    billDate: number;
    taxRate: number;
    taxAmount: number;
    totalSellNetPrice: number;
    totalSellPrice: number;
    order: OrderResponseDTO;
}
