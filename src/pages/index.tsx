import { Landing } from 'components/landing'
import { Layout } from 'components/layout'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Landing />
    </Layout>
  )
}

export default Home
