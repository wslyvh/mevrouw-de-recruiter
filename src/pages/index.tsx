import { DateTime } from "luxon"
import Image from 'next/image'
import { Layout } from 'components/layout'
import { GetStaticProps } from 'next'
import { GetBlogs, GetServices } from 'services/content'
import { Blog, Service } from 'utils/types'
import styles from './index.module.scss'
import settings from '../../content/settings.json'
import { marked } from 'marked'

interface Props {
  blogs: Array<Blog>
  services: Array<Service>
}

export default function Index(props: Props) {
  return (
    <Layout>
      <section id='about' className={styles.about}>
        <div className={styles.left}>
          <img className={styles.picture} src={settings.profile} />
        </div>
        <div className={styles.right}>
          <h1>{settings.title}</h1>
          <h2>{settings.description}</h2>
          <div className={styles.body} dangerouslySetInnerHTML={{__html: marked.parse(settings.about) }} />
        </div>
      </section>

      <section className={styles.divider}>
        <hr />
      </section>

      <section id='services' className={styles.services}>
        <h3>Services</h3>
        <hr />

        <div className={styles.grid}>
          {props.services.map((i) => {
            return <article key={i.slug} className={styles.service}>
              <div className={styles.image}>
                <Image src={i.image} alt={i.title} layout="fill" objectFit="cover" />
              </div>
              <div className={styles.body}>
                <h4>{i.title}</h4>
                <p>{i.description}</p>
                {/* <p>{i.body}</p> */}
              </div>
            </article>
          })}
        </div>
      </section>

      <section className={styles.divider}>
        <hr />
      </section>

      <section id='blogs' className={styles.blogs}>
        <h3>Laatste Blogs</h3>
        <hr />

        {props.blogs.map((i) => {
          return <article key={i.slug} className={styles.blog}>
            <div className={styles.title}>
              <h4>{i.title}</h4>
              <span>{DateTime.fromMillis(i.date).toFormat('dd LLL yyyy')}</span>
            </div>
            <p>{i.description}</p>              
          </article>
        })}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = GetBlogs()
  const services = GetServices()

  return {
    props: {
      blogs,
      services
    },
  }
}