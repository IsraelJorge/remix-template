import { ChildrenProps } from '@/@types/ChildrenProps'
import { createRemixStub } from '@remix-run/testing'

export function TestWrapper({ children }: ChildrenProps) {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <>{children}</>
    }
  ])

  return <Stub />
}
