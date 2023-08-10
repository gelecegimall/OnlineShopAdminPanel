import { ColorEnum } from "./enum/color-enum";

export interface ProductResponseDTO {
  name : string;
    code : string;
    color : ColorEnum;
    sellPrice : number;
    buyPrice : number;
    quantity : number;
    categoryList : CategoryResponseDTO[];
    tax : TaxResponseDTO[];
}
