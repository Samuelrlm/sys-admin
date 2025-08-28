import Breadcrumb from "@/components/Breadcrumb";
import PageWrapper from "@/components/PageWrapper";
import { getProductMock } from "@/helpers/getProductMock";
import { ProductDetails } from "@/interfaces/ProductDetails";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Product() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<ProductDetails>({} as ProductDetails);

    useEffect(() => {
        function fetchProduct(){
            const product = getProductMock({ id: Number(id)})

            if(product){
                setProduct(product)
            }
        }

        fetchProduct()
    }, [])

    return (
        <PageWrapper>
            <Breadcrumb 
                items={[]}
            />
        </PageWrapper>
    )
}