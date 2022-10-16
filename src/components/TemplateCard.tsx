import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { ReactNode } from 'react'
import { Button } from './Button'

interface TemplateCardProps {
  type: 'simple' | 'complete' | 'custom'
  children: ReactNode
}

export function TemplateCard({ type, children }: TemplateCardProps) {
  const allTitles = {
    simple: 'Template Simples',
    complete: 'Template Completo',
    custom: 'Template Personalizado',
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-between border border-zinc-600 hover:border-cyan-300 hover:-translate-y-2 transition rounded p-6 ml-4">
      <h4 className="font-bold text-2xl uppercase leading-none">
        {allTitles[type]}
      </h4>

      <ul className="list-disc text-zinc-400 ml-4">{children}</ul>

      <Link href={`/newpage/${type}`} prefetch>
        <Button.Root>
          Continuar
          <Button.Icon>
            <ArrowRight weight="bold" />
          </Button.Icon>
        </Button.Root>
      </Link>
    </div>
  )
}
