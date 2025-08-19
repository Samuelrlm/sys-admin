import { Product } from "@/interfaces/Product"

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group overflow-hidden hover:shadow-lg transition-all
        duration-300 bg-[#2c313a]/50 backdrop-blur-sm
        ">
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300
                    group-hover:scale-105"
                />
            </div>
        </div>
    )
}