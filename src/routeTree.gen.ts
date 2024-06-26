/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TestLazyImport = createFileRoute('/test')()
const TestTestLazyImport = createFileRoute('/test/test')()

// Create/Update Routes

const TestLazyRoute = TestLazyImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/test.lazy').then((d) => d.Route))

const TestTestLazyRoute = TestTestLazyImport.update({
  path: '/test',
  getParentRoute: () => TestLazyRoute,
} as any).lazy(() => import('./routes/test/test.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestLazyImport
      parentRoute: typeof rootRoute
    }
    '/test/test': {
      id: '/test/test'
      path: '/test'
      fullPath: '/test/test'
      preLoaderRoute: typeof TestTestLazyImport
      parentRoute: typeof TestLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  TestLazyRoute: TestLazyRoute.addChildren({ TestTestLazyRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/test"
      ]
    },
    "/test": {
      "filePath": "test.lazy.tsx",
      "children": [
        "/test/test"
      ]
    },
    "/test/test": {
      "filePath": "test/test.lazy.tsx",
      "parent": "/test"
    }
  }
}
ROUTE_MANIFEST_END */
