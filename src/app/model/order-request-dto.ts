import {OrderStatusEnum} from "./order-status-enum";
import {CustomerRequestDTO} from "./customer-request-dto";

export interface OrderRequestDTO {
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
