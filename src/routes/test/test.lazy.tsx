import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/test/test')({
  component: () => <div>Hello /test/test!</div>
})