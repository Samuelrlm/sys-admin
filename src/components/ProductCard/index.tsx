import { Product } from "@/interfaces/Product"
import { Badge } from "../Badge";
import CustomButton from "../CustomButton";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import StarsRating from "../StarsRating";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const router = useRouter();
    
    function handleClick() {
        router.push(`/products/${product.id}`)
    }

    return (
        <div 
        onClick={handleClick}
        className="group overflow-hidden hover:shadow-lg transition-all
        duration-300 backdrop-blur-sm rounded-lg 
        bg-[#181C22] cursor-pointer">
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300
                    group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <Badge>
                            Novo
                        </Badge>
                    )}
                    {product.discount && (
                        <Badge variant="destructive">
                            -{product.discount}%
                        </Badge>
                    )}
                </div>

                <CustomButton
                    variant="ghost"
                    width="w-[40px]"
                    className={`absolute top-3 right-3 bg-[#181C22]/80 opacity-0
                         group-hover:opacity-100 transition-opacity duration-300
                         h-[40px] hover:bg-[#181C22] hover:cursor-pointer`}
                >
                    <CiHeart size={20}/>
                </CustomButton>

                <CustomButton
                    variant="ghost"
                    className={`bg-[#5593f7] absolute bottom-3 left-1/2
                        transform -translate-x-1/2 opacity-0 group-hover:opacity-100
                        transition-all duration-300 translate-y-2 group-hover:translate-y-0
                        w-[120px] h-[35px]`}
                >
                    <FiShoppingCart  size={20}/>
                    <span className="text-sm font-medium ml-2">Adicionar</span>
                </CustomButton>
            </div>

            <div className="p-4">
                <div className="space-y-2">
                    <Badge
                        variant="outline"
                    >
                        {product.category}
                    </Badge>

                    <h3 className="font-semibold line-clamp-2 text-sm leading-tight">
                        {product.name}
                    </h3>

                    <StarsRating
                        rating={product.rating}
                        reviews={product.reviews}
                    />

                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#5593f7]">
                            {product.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm line-through">
                                {product.originalPrice.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}