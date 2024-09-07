import { ProductModal } from "./productModal";

export interface CategoryModal {
    id: string,
    name: string,
    status: boolean,
    description: string,
    products: ProductModal[],
}