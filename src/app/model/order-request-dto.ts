import {OrderStatusEnum} from "./enum/order-status-enum";
import {CustomerRequestDTO} from "./customer-request-dto";
import { BaseDTO } from "./base-dto";

export interface OrderRequestDTO extends BaseDTO {
  customer: CustomerRequestDTO
  orderStatus: OrderStatusEnum
  orderList: OrderRequestDTO[]
  totalSellPrice: number
}
/*
@ManyToOne
private CustomerEntity customer;

@Enumerated(EnumType.STRING)
private OrderStatusEnum orderStatus;

@OneToMany
private List<OrderItemEntity> orderItemList;

@Column
private BigDecimal totalSellPrice;*/
