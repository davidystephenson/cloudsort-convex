export type MarionActorInput<K, I> = { type: K } & I
export type MarionActor<
K extends keyof O & keyof I, I, O
> = (input: MarionActorInput<K, I[K]>) => O[K]
export type MarionActors<I extends object, O extends { [K in keyof I]: O[K] }, K extends keyof O & keyof I> = {
  [T in K]: MarionActor<T, I, O>;
}
export type MarionInput<
  I extends object,
  O extends { [K in keyof I]: O[K] },
  K extends keyof I & keyof O
> = { type: K } & I[K]

export default function marion<
I extends object,
O extends { [K in keyof I]: O[K] },
K extends keyof I & keyof O
> (
  actors: MarionActors<I, O, K>,
  input: MarionInput<I, O, K>
): O[K] {
  const actor = actors[input.type]
  return actor(input)
}

interface Alpha { type: 'alpha', count: number }
interface Beta { type: 'beta', label: string }

const alphaBeta = {
  alpha: (input: Alpha) => {
    void input
  },
  beta: (input: Beta) => {
    return input.label
  }
}

const alpha: Alpha = { type: 'alpha', count: 42 }
const x = marion(alphaBeta, alpha)
void x

type AlphaBeta = Alpha | Beta
const beta: AlphaBeta = { type: 'beta', label: 'Hello' }
const result = marion(alphaBeta, beta) // Output is string
void result
