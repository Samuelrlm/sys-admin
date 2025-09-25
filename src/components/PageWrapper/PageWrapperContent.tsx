interface PageWrapperContentProps {
    children: React.ReactNode
}

export default function PageWrapperContent({ children }: PageWrapperContentProps){
    return (
        <main className="py-8 space-y-12 px-28 text-[#F1F2F3]">
            {children}
        </main>
    )
}