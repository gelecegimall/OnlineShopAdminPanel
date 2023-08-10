import { BaseDTO } from "./base-dto";

export interface SettingsResponseDTO extends BaseDTO{
    id: number;
    key: string;
    value: string;
}