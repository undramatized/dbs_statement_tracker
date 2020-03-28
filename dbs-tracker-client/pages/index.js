import Head from 'next/head'
import Investments from './page_components/investments'
import fetch from 'node-fetch'

const Home = ({ invdata }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className="card">
        <Investments data={invdata} />
      </div>
    </main>
  </div>
)

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/investments')
  const invdata = await response.json()

  return { props: { invdata } }
}


export default Home
