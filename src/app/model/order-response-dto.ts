import {OrderStatusEnum} from "./order-status-enum";
import {CustomerResponseDTO} from "./customer-response-dto";

export interface OrderResponseDTO {
  customer: CustomerResponseDTO
  orderStatus: OrderStatusEnum
  orderList: OrderResponseDTO[]
  totalSellPrice: number
}
