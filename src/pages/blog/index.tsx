import { DateTime } from "luxon"
import Image from 'next/image'
import { Layout } from 'components/layout'
import { GetStaticProps } from 'next'
import { GetBlogs } from 'services/content'
import { Blog } from 'utils/types'
import styles from './index.module.scss'
import { Link } from "components/link"

interface Props {
  blogs: Array<Blog>
}

export default function Index(props: Props) {
  return (
    <Layout>
      <section id='blog' className={styles.blogs}>
        <h2>Blog</h2>
        <hr />

        {props.blogs.map((i) => {
          return <Link href={`/blog/${i.slug}`} key={i.slug} className={styles.blog}>
            <div className={styles.image}>
              <Image src={i.image} alt={i.title} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.body}>
              <p className={styles.date}>{DateTime.fromMillis(i.date).toFormat('dd LLL yyyy')}</p>
              <h4>{i.title}</h4>
              <hr />

              <p className={styles.description}>{i.description}</p>
            </div>       
          </Link>
        })}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = GetBlogs()

  return {
    props: {
      blogs,
    },
  }
}