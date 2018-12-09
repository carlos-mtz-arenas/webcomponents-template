
const homePageTemplate = document.createElement('template')
homePageTemplate.innerHTML = `
<div>
  <h1>hi</h1>
</div>
`

class HomePage extends HTMLElement {

  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.shadowRoot
      .appendChild(
        homePageTemplate.content.cloneNode(true))
  }
}

customElements.define('home-page', HomePage)
