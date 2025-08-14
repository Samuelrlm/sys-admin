import Header from "../Header"

type PageWrapperProps = {
    children: React.ReactNode,
    header?: boolean
}

export default function PageWrapper({children, header = true}: PageWrapperProps){
    return (
        <div className="min-h-screen bg-[#111418]">
           {header && <Header />}
           <main className="py-8 space-y-12 px-8 text-[#F1F2F3]">
            {children}
           </main>
        </div>
    )
}