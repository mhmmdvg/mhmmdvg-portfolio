import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-white text-black dark:bg-black dark:text-white transition">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
