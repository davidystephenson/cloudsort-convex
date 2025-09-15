import contextCreator from 'context-creator'
import type { DefaultFunctionArgs, FunctionReference } from 'convex/server'
import { useArchedQuery } from './useArchedQuery'
import type { QueryContext } from './archedTypes'
import type { ReactNode } from 'react'

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
    useValue: (contextProps: { args: QueryArgs }) => {
      return useArchedQuery({
        args: contextProps.args,
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
    if (query.isPending || query.isError) {
      return <>{props.children}</>
    }
    return (
      <dataContext.Provider data={query.data}>
        {props.children}
      </dataContext.Provider>
    )
  }

  function Provider (props: {
    args: QueryArgs
    children: ReactNode
  }): ReactNode {
    return (
      <queryContext.Provider args={props.args}>
        <Consumer>
          {props.children}
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
