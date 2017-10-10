import React from 'react'
// import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <div>
    <nav className="navbar is-dark has-shadow">Gist nav bar menu</nav>
    <section> list of available gists </section>
    <main className="container">
      <section>Gist body
        <div>Gist description</div>
        <div>gist main
          <nav>toolbar
            <div>file name extension</div>
            <div>writing options</div>
          </nav>
          <text>body of the gist</text>
        </div>
        <section>buttons</section>
      </section>
    </main>
    <section>Footer</section>
  </div>
)

export default App
