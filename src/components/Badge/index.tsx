import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
    {
        variants: {
            variant: {
                default: "border-transparent bg-[#5593f7] text-[#F1F2F3] hover:bg-[#5593f7]/80",
                destructive: "border-transparent bg-red-500 text-[#F1F2F3] hover:bg-red-500/80",
                outline: "text-[#F1F2F3]"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props}: BadgeProps){
    return (
        <div className={
            cn(
                badgeVariants(
                    { variant }
                ), 
                className
            )
        } 
        {...props}
        />
    );
}

export { Badge, badgeVariants}