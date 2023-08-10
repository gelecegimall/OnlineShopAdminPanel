import {OrderStatusEnum} from "./enum/order-status-enum";
import {CustomerResponseDTO} from "./customer-response-dto";
import { BaseDTO } from "./base-dto";

export interface OrderResponseDTO extends BaseDTO {
  customer: CustomerResponseDTO
  orderStatus: OrderStatusEnum
  orderList: OrderResponseDTO[]
  totalSellPrice: number
}
