import { IoSearch } from "react-icons/io5";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "../../../public/logo.png"
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 bg-[#111418]/95
         backdrop-blur-sm w-full border-b">
            <div className="w-full flex h-16 items-center justify-between">
                <div className="w-[33%]">
                    <Image 
                        src={Logo.src}
                        alt="Logo"
                        width={200}
                        height={100}
                        className="ml-4 max-h-12 h-auto object-cover"
                    />
                </div>
                <div className="hidden md:flex flex-1 px-8 w-[33%] justify-center">
                    <CustomInput 
                        type="text"
                        placeholder="Buscar Produtos"
                        icon={<IoSearch />}
                    />
                </div>
                <div className="flex items-center space-x-4 w-[33%] justify-end pr-4">
                    <CustomButton 
                        variant="ghost"
                        width="w-10"
                        className="h-10 hover:bg-[#5593f7] hover:text-[#111418]"
                    >
                        <FiShoppingCart />
                    </CustomButton>
                    <CustomButton 
                        variant="ghost"
                        width="w-10"
                        className="h-10 hover:bg-[#5593f7] hover:text-[#111418]"
                    >
                        <FaRegBell  />
                    </CustomButton>
                    <CustomButton 
                        variant="ghost"
                        width="w-10"
                        className="h-10 hover:bg-[#5593f7] hover:text-[#111418]"
                    >
                        <FiUser />
                    </CustomButton>
                </div>
            </div>
        </header>
    )
}