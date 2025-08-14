import { IoSearch } from "react-icons/io5";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { FiShoppingCart } from "react-icons/fi";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 bg-[#111418]/95
         backdrop-blur-sm w-full border-b">
            <div className="container flex h-16 items-center justify-between">
                <div className=""></div>
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <CustomInput 
                        type="text"
                        placeholder="Buscar Produtos"
                        icon={<IoSearch />}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <CustomButton 
                        variant="ghost"
                        className="w-10 h-10 hover:bg-[#5593f7] hover:text-transparent"
                    >
                        <FiShoppingCart />
                    </CustomButton>
                </div>
            </div>
        </header>
    )
}