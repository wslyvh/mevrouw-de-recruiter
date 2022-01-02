import { DateTime } from "luxon"
import Image from 'next/image'
import { Layout } from 'components/layout'
import { GetStaticProps } from 'next'
import { GetBlogs, GetServices } from 'services/content'
import { Blog, Service } from 'utils/types'
import styles from './index.module.scss'

interface Props {
  blogs: Array<Blog>
  services: Array<Service>
}

export default function Index(props: Props) {
  return (
    <Layout>
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

      {/* <h3>Blogs</h3>
      {props.blogs.map((i) => {
        return <div key={i.slug}>
          <h4>{i.title}</h4>
          <p>{i.description}</p>
          <p>{DateTime.fromMillis(i.date).toFormat('DD MMM yyyy')}</p>
        </div>
      })} */}
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