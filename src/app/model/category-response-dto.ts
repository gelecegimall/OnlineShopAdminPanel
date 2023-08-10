import { BaseDTO } from "./base-dto";
import { ProductResponseDTO } from "./product-response-dto";

export interface CategoryResponseDTO extends BaseDTO {
    name: string;
    productList: ProductResponseDTO[];
}