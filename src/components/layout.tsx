import React, { ReactNode } from 'react'
import { SEO } from './seo'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
  return (
    <div>
      <SEO />
      <header>
        <h1>Mevrouw de Recruiter</h1>
      </header>

      <main>
        {props.children}
      </main>

      <footer>
        <p>
          <small>2022 - Mevrouw de Recruiter</small>
        </p>
      </footer>
    </div>
  )
}
