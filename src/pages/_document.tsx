import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { GOOGLE_FONTS_URL } from "../constants";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Fastest Google Fonts https://csswizardry.com/2020/05/the-fastest-google-fonts/ */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="preload" as="style" href={GOOGLE_FONTS_URL} />
          {/* https://github.com/vercel/next.js/issues/12984 ¯\_(ツ)_/¯ */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                </style>
                  <link
                    rel="stylesheet"
                    href="${GOOGLE_FONTS_URL}"
                    media="print"
                    onload="this.media = 'all';"
                  />
                <style>
              `,
            }}
          ></style>
          <noscript>
            <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
