import { TemplateCard } from '../../components/TemplateCard'

export default function NewPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-2">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-4xl">Congratulator 🎉</h1>
        <p className="text-xl text-zinc-400">
          Para começar, selecione um template ou crie o seu proprio
        </p>

        <div className="flex flex-wrap items-stretch gap-4 mt-3">
          <TemplateCard type="simple">
            <li>Uma opção de cabeçalhos prontas</li>
            <li>Uma opção conteudo principal prontas</li>
            <li>Duas opção de roda-pe prontas</li>
          </TemplateCard>
          <TemplateCard type="complete">
            <li>Tres opções de cabeçalhos prontas</li>
            <li>Tres opção conteudo principal prontas</li>
            <li>Tres opção de roda-pe prontas</li>
          </TemplateCard>
          <TemplateCard type="custom">
            <span>Crie do jeito que quiser!</span>
          </TemplateCard>
        </div>
      </main>
    </div>
  )
}
