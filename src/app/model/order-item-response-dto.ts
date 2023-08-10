import { BaseDTO } from "./base-dto";
import { ProductResponseDTO } from "./product-response-dto";

export interface OrderItemResponseDTO extends BaseDTO{
    product: ProductResponseDTO;
    quantity: number;
    sellPrice: number;
}
