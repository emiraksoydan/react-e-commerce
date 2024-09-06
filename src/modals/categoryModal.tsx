import { ProductModal } from "./productModal";

export interface CategoryModal {
    id: string,
    name: string,
    status: string,
    description: string,
    products: ProductModal[],
}