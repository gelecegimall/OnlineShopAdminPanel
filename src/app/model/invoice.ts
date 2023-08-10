export interface Invoice {
billno: number;
taxRate: number;
taxAmount: number;
totalSellNetPrice: number;
totalSellPrice: number;
order: OrderDTO;

}
