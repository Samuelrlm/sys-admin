import { productsDetailsMocks } from "@/mocks/producstsDetails";

interface getProductMockProps {
    id: number
}

export function getProductMock({ id }: getProductMockProps){
    return productsDetailsMocks.find((product) => product.id === id)
}