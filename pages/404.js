// 404.js
import Head from 'next/head'
import Link from 'next/link'

export default function FourOhFour() {
  return <>
  <Head>
    <script type="text/javascript" src="/static/script.js"></script>
  </Head>
    <h1>404 - Custom Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}