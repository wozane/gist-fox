import React from 'react'
import GisFooter from './GistFooter'

const GistBody = () => (
  <div>
    <section>
      <input className="input" type="text" placeholder="Gist description..." />
      <div>gist main
        <nav>toolbar
          <div>file name extension</div>
          <div>writing options</div>
        </nav>
        <text>body of the gist</text>
      </div>
      <section>buttons</section>
    </section>
    <GisFooter />
  </div>
)

export default GistBody
