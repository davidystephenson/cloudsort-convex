import contextCreator from 'context-creator'
import { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { useArchedQuery } from './useArchedQuery'
import { QueryContext } from './archedTypes'
import { ReactNode } from 'react'

export default function queryContext<
  Args extends DefaultFunctionArgs,
  Data,
  Query extends FunctionReference<
  'query', 'public', Args, Data
  >,
  QueryArgs extends Query['_args']
> (props: {
  name: string
  query: Query
}): QueryContext<Args, Data, Query, QueryArgs> {
  const queryName = `${props.name}Query`
  const queryContext = contextCreator({
    name: queryName,
    useValue: (contextProps: QueryArgs & { children?: ReactNode }) => {
      const { children, ...rest } = contextProps
      return useArchedQuery({
        args: rest as Args,
        query: props.query
      })
    }
  })

  const dataContext = contextCreator({
    name: props.name,
    useValue: (props: {
      data: Query['_returnType']
    }) => {
      return props.data
    }
  })

  function Consumer (props: {
    children: ReactNode
  }): ReactNode {
    const query = queryContext.use()
    if (query.loading) {
      return <>{props.children}</>
    }
    return (
      <dataContext.Provider data={query.data}>
        {props.children}
      </dataContext.Provider>
    )
  }

  function Provider (props: QueryArgs & {
    children: ReactNode
  }): ReactNode {
    const { children, ...rest } = props
    return (
      <queryContext.Provider {...rest as unknown as QueryArgs}>
        <Consumer>
          {children}
        </Consumer>
      </queryContext.Provider>
    )
  }

  const context = {
    Provider,
    data: dataContext,
    query: queryContext
  } as unknown as QueryContext<Args, Data, Query, QueryArgs>

  return context
}
