
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-lime focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-brand-lime text-brand-navy hover:bg-brand-lime-dark",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-brand-silver bg-brand-navy-light/10 backdrop-blur hover:bg-brand-navy-light hover:text-brand-lime text-white",
        secondary:
          "bg-brand-navy-light text-brand-silver hover:bg-brand-navy hover:text-brand-lime",
        ghost: "hover:bg-brand-navy-light hover:text-brand-lime text-brand-silver",
        link: "text-brand-lime underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 min-h-[40px]",
        sm: "h-9 rounded-md px-3 min-h-[36px]",
        lg: "h-11 rounded-md px-6 md:px-8 min-h-[44px]",
        icon: "h-10 w-10 min-h-[40px] min-w-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
