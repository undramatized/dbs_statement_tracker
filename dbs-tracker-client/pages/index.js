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

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by RK
      </a>
    </footer>
  </div>
)

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/investments')
  const invdata = await response.json()

  return { props: { invdata } }
}


export default Home
