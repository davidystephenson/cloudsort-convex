export interface ArchedLoading {
  data: undefined
  loading: true
}

export interface ArchedLoaded<T> {
  data: T
  loading: false
}

export type ArchedResult<T> = ArchedLoading | ArchedLoaded<T>

export type ArchedFound<T> = ArchedLoaded<NonNullable<T>>
