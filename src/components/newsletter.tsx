import { usePlausible } from 'next-plausible'
import React from 'react'
import styles from './newsletter.module.scss'

interface Props {
  className?: string
}

export function Newsletter(props: Props) {
  const plausible = usePlausible()
  let className = `${styles.container}`
  if (props.className) className += ` ${props.className}`

  return (
    <section className={className}>
      <h3>Nieuwsbrief</h3>
      
      <form onSubmit={() => plausible('Subscribe')} action="https://mevrouwderecruiter.us20.list-manage.com/subscribe/post?u=2008f2f06bb7e8a1f7f4aea84&amp;id=a1700bfb1f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_2008f2f06bb7e8a1f7f4aea84_a1700bfb1f" tabIndex={-1} value="" readOnly />
          </div>
          
          <div className={styles.row}>
            <div>
              <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="email address" required />
            </div>
            <button type='submit' name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
          </div>
        </div>
      </form>
    </section>
  )
}
