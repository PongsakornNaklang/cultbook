import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm text-black ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-primary-foreground",
        destructive: "bg-red-50 text-red-600",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
        secondary: "bg-gray-100 text-secondary-foreground hover:bg-gray-200",
        ghost: "bg-transparent text-primary hover:bg-gray-100",
        link: "text-primary underline-offset-4 hover:underline",
        blur: "bg-white/60 backdrop-blur-sm",
      },
      inputSize: {
        default: "h-10 px-4 py-3",
        sm: "h-8 rounded-[8px] px-4 py-2",
        lg: "h-12 rounded-[12px] px-6 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPasswordType = type === 'password'

    return (
      <div className="relative">
        <input
          type={isPasswordType ? (showPassword ? 'text' : 'password') : type}
          className={cn(
            inputVariants({ variant, inputSize, className }),
            isPasswordType && "pr-10"
          )}
          ref={ref}
          {...props}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }