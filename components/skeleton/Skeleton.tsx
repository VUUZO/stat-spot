import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { HTMLAttributes, FC } from "react"

interface SkeletonType extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariant> {}

const skeletonVariant = cva(
  "w-full h-auto bg-gray-neutral border border-gray-dark relative overflow-hidden",
  {
    variants: {
      animation: {
        shimmer: 'after:absolute after:inset-0 after:bg-[linear-gradient(to_right,transparent,hsla(0,0%,30%,.4),transparent)] after:-translate-x-full after:animate-shimmer',
        second: '',
      },
      rounded: {
        default: 'rounded-[8px]',
        medium: 'rounded-[16px]',
        full: 'rounded-full'
      },
      size: {
        sm: 'h-[16px]',
        default: 'h-[19px]',
        md: 'h-[27.27px]',
        lg: 'h-[42.27px]',
      },
    },
    defaultVariants: {
      animation: "shimmer",
      rounded: "default",
      size: 'default'
    }
  }
)


export const Skeleton: FC<SkeletonType> = ({ className, animation, rounded, size, ...props }) => {
  return (
    <div className={cn(skeletonVariant({ animation, rounded, size, className }))} {...props} />
  )
}