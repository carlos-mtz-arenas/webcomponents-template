import {Router} from '@vaadin/router'

const lazyLoadChunk = (context) => {
  console.log('context', context)
  const jsModule = document.createElement('script')
  jsModule.src = `/build/${context.route.component}.js`
  jsModule.type = 'text/javascript'
  document.querySelector('body')
    .appendChild(jsModule)
}

const setupRoutes = (contentNode) => {
  const router = new Router(contentNode)
  router.setRoutes([
    {
      path: '/',
      component: 'home-page',
      action: lazyLoadChunk
    }
  ])
}

export {setupRoutes}
