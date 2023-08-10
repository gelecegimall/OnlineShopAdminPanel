import { BaseDTO } from "./base-dto";
import { CategoryRequestDTO } from "./category-request-dto";
import { ColorEnum } from "./enum/color-enum";
import { TaxRequestDTO } from "./tax-request-dto";

export interface ProductRequestDTO extends BaseDTO {
    name : string;
    code : string;
    color : ColorEnum;
    sellPrice : number;
    buyPrice : number;
    quantity : number;
    categoryList : CategoryRequestDTO[];
    tax : TaxRequestDTO[];
}
