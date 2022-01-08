import { DateTime } from "luxon"
import Image from 'next/image'
import { Layout } from 'components/layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetBlogs } from 'services/content'
import { Blog } from 'utils/types'
import styles from './slug.module.scss'
import { marked } from 'marked'
import { ParsedUrlQuery } from "querystring"
import { Tag } from "components/tag"
import { Link } from "components/link"

interface Props {
  blog: Blog
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export default function Index(props: Props) {
  return (
    <Layout>
      <section id='blog' className={styles.blog}>
        <div className={styles.header}>
          <div className={styles.body}>
            <p className={styles.date}>{DateTime.fromMillis(props.blog.date).toFormat('dd LLL yyyy')}</p>
            <h4>{props.blog.title}</h4>
            <hr />

            <p className={styles.description}>{props.blog.description}</p>

            {props.blog.category.length > 0 && <p className={styles.tags}>
              {props.blog.category.map(i => <Tag key={i} text={i} />)}
            </p>}
          </div>
          <div className={styles.image}>
            <Image src={props.blog.image} alt={props.blog.title} layout="fill" objectFit="cover" />
          </div>
        </div>
        
        <div className={styles.content} dangerouslySetInnerHTML={{__html: marked.parse(props.blog.body) }} />

        <div className={styles.more}>
          <Link href='/blog'><i className='smaller bi bi-arrow-left'></i> bekijk alle blogs</Link>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = GetBlogs()

  return {
    paths: blogs.map(i => {
      return {
        params: { slug: i.slug }
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const slug = context.params?.slug
  const blogs = GetBlogs()
  const blog = blogs.find(i => i.slug === slug)

  if (!slug || !blog) {
    return {
      props: null,
      notFound: true,
    }
  }

  return {
    props: {
      blog,
    },
  }
}