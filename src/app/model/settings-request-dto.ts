import { BaseDTO } from "./base-dto";

export interface SettingsRequestDTO extends BaseDTO{
    id: number;
    key: string;
    value: string;
}