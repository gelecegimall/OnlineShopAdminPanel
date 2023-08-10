export interface InvoiceRequestDTO {
    billno: number;
    billDate: number;
    taxRate: number;
    taxAmount: number;
    totalSellNetPrice: number;
    totalSellPrice: number;
    order: OrderRequestDTO;
}
