import Header from "../Header"

type PageWrapperProps = {
    children: React.ReactNode,
    header?: boolean
}

export default function PageWrapper({children, header = true}: PageWrapperProps){
    return (
        <div className="min-h-screen bg-[#111418]">
           <Header />
        </div>
    )
}