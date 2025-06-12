export interface ConvexQueryLoading {
  data: undefined
  loading: true
}

export interface ConvexQueryLoaded<T> {
  data: T
  loading: false
}

export type ConvexQuery<T> = ConvexQueryLoading | ConvexQueryLoaded<T>
