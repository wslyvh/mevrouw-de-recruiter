import React from 'react'
import Head from 'next/head'
import settings from '../../content/settings.json'
import { useRouter } from 'next/dist/client/router'

interface Props {
  title?: string
  description?: string
  imageUrl?: string
}

export function SEO(props: Props) {
  const router = useRouter()
  const title = props.title ? `${props.title} · ${settings.title}` : settings.title
  const description = props.description || settings.description
  const socialImage = `${settings.url.replace(/\/$/, '')}${settings.social}`
  let imageUrl = props.imageUrl
  if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `${settings.url.replace(/\/$/, '')}${imageUrl}`
  }
  const image = imageUrl || socialImage
  const url = router.route === '/' ? settings.url : settings.url.replace(/\/$/, '') + router.asPath.split('?')[0]

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="application-name" content={settings.title} />
      <meta name="description" content={description} key="description" />
      <meta name="image" content={image} key="image" />

      <meta property="og:type" content="website" key="og_type" />
      <meta property="og:site_name" content={settings.title} key="og_site_name" />
      <meta property="og:title" content={title} key="og_title" />
      <meta property="og:description" content={description} key="og_description" />
      <meta property="og:url" content={url} key="og_url" />
      
      <meta property="og:image" content={image} key="og_image" />
      <meta property="og:image:url" content={image} key="og_image_url" />
      <meta property="og:image:secure_url" content={image} key="og_image_secure_url" />
      <meta property="og:image:alt" content={`${settings.title} social image`} key="og_image_alt" />
      <meta property="og:image:type" content='image/png' key="og_image_type" />
      <meta property="og:image:width" content="1200" key="og_image_width" />
      <meta property="og:image:height" content="630" key="og_image_height" />

      {settings.twitter && <meta name="twitter:site" content={settings.twitter} />}
      <meta name="twitter:card" content="summary_large_image" key="tw_card" />
      <meta name="twitter:title" content={title} key="tw_title" />
      <meta name="twitter:description" content={description} key="tw_description" />
      <meta name="twitter:image" content={image} key="tw_image" />
    </Head>
  )
}
