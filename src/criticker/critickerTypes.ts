import { z } from 'zod'

export const critickerSchema = z.object({
  ' Date Rated': z.string(),
  ' Film Name': z.string(),
  ' Year': z.string(),
  ' Mini Review': z.string(),
  ' URL': z.string(),
  ' IMDB ID': z.string(),
  Score: z.string()
})
export type Criticker = z.infer<typeof critickerSchema>
