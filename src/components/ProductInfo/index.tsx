import { ProductDetails } from "@/interfaces/ProductDetails"
import { Badge } from "../Badge"
import StarsRating from "../StarsRating"
import formatCurrency from "@/helpers/formatCurrency"
import CustomButton from "../CustomButton"
import { FiMinus } from "react-icons/fi"

interface ProductInfoProps {
    product: ProductDetails
}

export default function ProductInfo({ product }: ProductInfoProps){
    return (
        <div className="space-y-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">
                        {product.category}
                    </Badge>
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

                <h1 className="text-2xl font-bold lg:text-3xl mb-4">
                    {product.name}
                </h1>

                <StarsRating 
                    rating={product.rating}
                    reviews={product.reviews}
                    size={16}
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#5593f7]">
                        {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                            {formatCurrency(product.originalPrice)}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-400">
                    ou 12x de R$ {formatCurrency(product.price / 12)} sem juros
                </p>
            </div>
            
            <div>
                <p className="text-gray-400 leading-relaxed">
                    {product.description}
                </p>
            </div>
        
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <label className="text-sm font-medium">
                        Quantidade
                    </label>
                    <div className="flex items-center border border-[#2c313a]/50 rounded-md">
                        <CustomButton
                            variant="ghost"
                            className="h-[30px] w-[30px] hover:bg-[#5593f7]"
                        >
                            <FiMinus />
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}