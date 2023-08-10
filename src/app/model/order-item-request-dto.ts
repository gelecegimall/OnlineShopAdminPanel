import { BaseDTO } from "./base-dto";
import { ProductRequestDTO } from "./product-request-dto";

export interface OrderItemRequestDTO extends BaseDTO {
    product: ProductRequestDTO;
    quantity: number;
    sellPrice: number;
}
