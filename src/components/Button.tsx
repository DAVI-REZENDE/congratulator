import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

function ButtonRoot({ children, asChild, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className="bg-cyan-300 hover:bg-cyan-400 text-zinc-800 font-bold text-base px-4 py-3 rounded-lg flex gap-2"
      {...rest}
    >
      {children}
    </Comp>
  )
}

interface ButtonIconProps {
  children: ReactNode
}

function ButtonIcon({ children }: ButtonIconProps) {
  return <Slot className="text-zinc-800 text-2xl">{children}</Slot>
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
}
