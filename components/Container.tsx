import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority" 
import { HTMLAttributes, FC } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

export const containerVariants = cva(
  'list-none p-mobile',
  {
    variants: {
      variant: {
        default: 'relative bg-gray-dark rounded-[16px] after:rounded-[inherit] after:pointer-events-none after:inset-0 after:absolute after:shadow-[inset_0_1px_0_rgb(255,255,255,.05),inset_0_-1px_0_rgb(255,255,255,.01),inset_1px_0_0_rgb(255,255,255,.02),inset_-1px_0_0_rgb(255,255,255,.02)]',
        transparent: '',
      },
      opacity: {
        'visible': 'bg-opacity-100',
        'through': 'bg-opacity-75',
      }
    },
    defaultVariants: {
      variant: 'default',
      opacity: 'visible'
    }
  }
)

export const Container: FC<ContainerProps> = ({ className, variant, opacity, ...props }) => {
  return <div className={cn(containerVariants({ variant, opacity, className }))} {...props} />
}