import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/global.css'
import Header from '../components/Header'
import Author from '../components/Author'
import 'highlight.js/styles/default.css'
import '../styles/Header.css'
import '../styles/Post.css'
import '../styles/PostPage.css'
import '../styles/Author.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
          fotter
        </div>
      </div>
    </>
  )
}

export default MyApp
