import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/global.css'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import 'highlight.js/styles/base16/windows-10-light.css'
import '../styles/Header.css'
import '../styles/Post.css'
import '../styles/PostPage.css'
import '../styles/Author.css'
import '../styles/Footer.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>fecat233的博客</title>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <Component {...pageProps} />
          </div>
          <div className="col-2">
            <Author />
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp
