import { BaseDTO } from "./base-dto";
import { ProductResponseDTO } from "./product-response-dto";

export interface CategoryRequestDTO extends BaseDTO {
    name: string;
    productList: ProductResponseDTO[];
}