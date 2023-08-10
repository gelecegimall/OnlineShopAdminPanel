import { BaseDTO } from "./base-dto";
import { CategoryResponseDTO } from "./category-response-dto";
import { ColorEnum } from "./enum/color-enum";
import { TaxResponseDTO } from "./tax-response-dto";

export interface ProductResponseDTO extends BaseDTO {
  name: string;
    code : string;
    color : ColorEnum;
    sellPrice : number;
    buyPrice : number;
    quantity : number;
    categoryList : CategoryResponseDTO[];
    tax : TaxResponseDTO[];
}
