import React from 'react'

const Gist = () => (
  <div>
    <section>Gist Header</section> {/* component */}
    <section className="container notification">Gist body
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
  </div>
)

export default Gist
