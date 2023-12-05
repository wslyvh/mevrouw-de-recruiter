import React, { ReactNode } from 'react'
import { SEO } from './seo'
import { Newsletter } from './newsletter'
import styles from './layout.module.scss'
import settings from '../../content/settings.json'
import Image from 'next/image'
import logo from 'assets/images/white_logo_transparent_background.png'
import { Link } from './link'

type Props = {
  children: ReactNode
}

export function Layout(props: Props) {
  return (
    <div className={styles.container}>
      <SEO />

      <div className={styles.header}>
        <header className={styles.inner}>
          <nav className={styles.nav}>
            <ul>
              <li><Link href='/blog'>Blog</Link></li>
              <li><Link href={`mailto:${settings.email}`}>Contact</Link></li>
            </ul>
          </nav>
          <div className={styles.image}>
            <Link href='/' className={styles.logo}>
              <Image src={logo} alt='Mevrouw de Recruiter logo' />
            </Link>
          </div>
        </header>
      </div>

      <main className={styles.content}>
        <div className={styles.inner}>
          {props.children}
        </div>
      </main>

      <div className={styles.footer}>
        <footer className={styles.inner}>
          <div className={styles.flex}>
            <Newsletter className={styles.newsletter} />

            <section className={styles.contact}>
              <h3>Contact</h3>

              <div className={styles.icons}>
                <Link href={settings.linkedin}>
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link href={`mailto:${settings.email}`}>
                  <i className="bi bi-envelope-fill"></i>
                </Link>
              </div>
            </section>
          </div>
          <p className={styles.copyright}>
            2022 - Mevrouw de Recruiter / Nicole Oosterveer
          </p>
        </footer>
      </div>
    </div>
  )
}
