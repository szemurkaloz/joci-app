import Document, { Html, Main, NextScript, Head} from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head> 
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
            <meta
              name="leírás"
              content="Hogyan lehet egy ilyen melót megvalósítani"
            />
            <meta
              name="keywords"
              content="Full Stack delveloper Freelancer"
            />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument