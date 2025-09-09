import { ProductDetails } from "@/interfaces/ProductDetails"
import { Badge } from "../Badge"
import StarsRating from "../StarsRating"
import formatCurrency from "@/helpers/formatCurrency"
import CustomButton from "../CustomButton"
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi"
import { useState } from "react"
import { CiHeart } from "react-icons/ci"
import { LuShare2 } from "react-icons/lu"
import { BsTruck } from "react-icons/bs"
import { MdOutlineShield } from "react-icons/md"
import { RiResetLeftFill } from "react-icons/ri"

interface ProductInfoProps {
    product: ProductDetails
}

export default function ProductInfo({ product }: ProductInfoProps){
    const [quantity, setQuantity] = useState(1)
    const shippingInfos = [
        {value: product.shipping, color: "green", icon: <BsTruck />},
        {value: product.warranty, color: "blue", icon: <MdOutlineShield />},
        {value: product.return, color: "orange", icon: <RiResetLeftFill />}
    ]

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
                            className={`h-[30px] w-[30px] ${quantity <= 1 ? "opacity-50 cursor-default" : "hover:bg-[#5593f7]"}`}
                            disabled={quantity <= 1}
                            onClick={
                                () => setQuantity(quantity - 1)
                            }
                        >
                            <FiMinus />
                        </CustomButton>
                        <span className="px-4 py-2 text-sm font-medium">
                            {quantity}
                        </span>
                        <CustomButton
                            variant="ghost"
                            className="h-[30px] w-[30px] hover:bg-[#5593f7]"
                            onClick={
                                () => setQuantity(quantity + 1)
                            }
                        >
                            <FiPlus />
                        </CustomButton>
                    </div>
                </div>
                <div className="flex gap-3">
                    <CustomButton
                        className="flex-1 h-[45px] flex items-center justify-center gap-2"
                    >
                        <FiShoppingCart />
                        Adicionar ao carrinho
                    </CustomButton>

                    <CustomButton
                        className="w-[80px] h-[45px] border border-[#2c313a]/50 hover:bg-[#5593f7]"
                        variant="ghost"
                    >
                        <CiHeart size={20}/>
                    </CustomButton>

                    <CustomButton
                        className="w-[80px] h-[45px] border border-[#2c313a]/50 hover:bg-[#5593f7]"
                        variant="ghost"
                    >
                        <LuShare2 size={20}/>
                    </CustomButton>
                </div>
                <CustomButton
                    variant="secondary"
                    className="h-[45px]"
                >
                    Comprar agora
                </CustomButton>
            </div>
            <div className="space-y-3 pt-4 border-t border-[#2c313a]/50">
                {shippingInfos.map((info, index) => {
                    return (
                        <div key={index} className="flex items-center gap-3 text-sm">
                            <div
                                className={`
                                    ${info.color == "green" && "text-green-600"}
                                    ${info.color == "blue" && "text-blue-600"}
                                    ${info.color == "orange" && "text-orange-600"}
                                `}
                            >
                                {info.icon}
                            </div>
                            <span>{info.value}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}