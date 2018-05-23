// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../styles/main.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{__html: stylesheet}} />
          <title>Test App</title>          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}