import CustomButton from "../CustomButton";

export default function ProductsSection(){
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                    Produtos em Destaque
                </h2>
                <CustomButton variant="outline" width="w-[100px]">
                    Ver todos
                </CustomButton>
            </div>
        </section>
    )
}