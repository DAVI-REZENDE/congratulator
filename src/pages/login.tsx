import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export default function Login() {
  const [dimensionsScreen, setDimensionsScrenn] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensionsScrenn({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
  }, [])

  return (
    <div className="bg-zinc-800 w-screen h-screen flex items-center justify-center p-2">
      <Confetti
        numberOfPieces={50}
        width={dimensionsScreen.width}
        height={dimensionsScreen.height}
      />
      <main className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center gap-5 w-full max-w-sm animate-slide-top">
        <h1 className="font-bold text-2xl">Login</h1>

        <form className="flex flex-col gap-3 w-full">
          <label className="flex flex-col gap-1 w-full">
            <span className="text-sm text-zinc-400">Digite seu e-mail:</span>
            <input
              className="bg-transparent py-2 border-0 border-b-2 focus:border-cyan-400 focus:outline-none"
              type="text"
              placeholder="jonhdoe@example.com"
            />
          </label>

          <label className="flex flex-col gap-1 w-full">
            <span className="text-sm text-zinc-400">Digite sua senha:</span>
            <input
              className="bg-transparent py-2 border-0 border-b-2 focus:border-cyan-400 focus:outline-none"
              type="password"
              placeholder="*********"
            />
          </label>

          <button
            type="submit"
            className="bg-cyan-300 rounded-lg px-4 py-3 text-zinc-900 font-bold hover:bg-cyan-400"
          >
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}
