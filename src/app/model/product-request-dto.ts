import { ColorEnum } from "./enum/color-enum";

export interface ProductRequestDTO {
    name : string;
    code : string;
    color : ColorEnum;
    sellPrice : number;
    buyPrice : number;
    quantity : number;
    categoryList : CategoryRequestDTO[];
    tax : TaxRequestDTO[];
}
