import { ServerState, TrackerRequestContext } from '@uniformdev/optimize-tracker-common';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { createLocalTracker } from 'lib/tracking/local-tracker';

const fonts = `
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin */
@font-face {
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2mXaeHmmc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

type CustomDocumentProps = DocumentInitialProps & {
  serverState: ServerState;
};

class MyDocument extends Document<CustomDocumentProps> {
  static getRequestContext = (ctx: DocumentContext): TrackerRequestContext => {
    const { req } = ctx;

    return {
      url: 'https://' + req?.headers.host + req?.url,
      cookies: req?.headers.cookie,
      userAgent: req?.headers['user-agent'],
    };
  };

  static async getInitialProps(ctx: DocumentContext): Promise<CustomDocumentProps> {
    const serverTracker = createLocalTracker(ctx);
    const requestContext = MyDocument.getRequestContext(ctx);

    await serverTracker.initialize();
    const { signalMatches, scoring } = await serverTracker.reevaluateSignals(requestContext);

    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props: any) =>
          <App {...props} tracker={serverTracker} ssrMatches={signalMatches} scoring={scoring} />,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      serverState: {
        scoring,
      },
    };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://res.cloudinary.com" />
          <style dangerouslySetInnerHTML={{ __html: fonts }} />
          <link
            href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAACMuAAAjLgAAAAAAAAAAAAAZGRr/GRka/wcHCP9/f4D//////zk5Of8PDxD/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8HBwj/f3+A//////85OTn/Dw8Q/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/BwcI/39/gP//////OTk5/xAQEf8PDxD/CgoL/xkZGv8ZGhv/Gw0L/xoODf8ZGhv/GRka/xkZGv8ZGRr/GRka/wcHCP9/f4D//////zk5Of8HBwj/QUFC/1lZWv8UExP/GRcX/xBbbf8SVGT/GhUV/xkYGf8ZGRr/GRka/xkZGv8HBwj/f3+A//////83Nzf/BAQF/8rKyv//////Liws/xAMDf8AkrL/AYah/xsREf8ZGBn/GRka/xkZGv8ZGRr/BwcI/39/gP//////Kior/zg4Of///////////35+f/8DBAX/NTU4/zEyNP8XFxj/GRka/xkZGv8ZGRr/GRka/wcHCP9/f4D//////yUlJv+Xl5j/3d3d/7e3t//c3Nz/ERES/8vJyP+8urr/DQ0P/xcXGP8ZGRr/GRka/xkZGv8HBwj/f3+A//z8/P9EREX/7u7u/4CAgP84ODr//////1VVVf/Hx8f/w8PE/w0NDv8XFxj/GRka/xkZGv8ZGRr/BwcI/4CAgP/z8/P/lJSV//j4+P8xMTL/BgYH/9XV1f+0tLX/xMTE/7+/v/8NDQ7/FxcY/xkZGv8ZGRr/GRka/wcHCP98fH3/+vr7//Ly8v+ysrL/CQkK/wQEBf9xcXL//f39//Dw8P+4uLj/DQ0O/xcXGP8ZGRr/GRka/xkZGv8HBwj/enp7////////////VFRU/wgICf8SEhP/IyMk/+rq6v//////tbW2/w0NDv8XFxj/GRka/xkZGv8ZGRr/BgYH/4CAgf//////09PU/xUVFv8VFRb/GRka/wUFBv+Wlpf//////7y8vf8NDQ7/FxcY/xkZGv8ZGRr/GRka/xMTFP86Ojv/bm5v/0FBQv8RERL/GRka/xkZGv8TExT/LCwu/2xsbP9OTk//FRUW/xgYGf8ZGRr/GRka/xkZGv8aGhv/EhIT/wYGB/8ODg//Ghob/xkZGv8ZGRr/Ghob/xMTFP8HBwj/DQ0O/xoaG/8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/GRka/xkZGv8ZGRr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
            rel="icon"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <script
            id="__UNIFORM_DATA__"
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(this.props.serverState),
            }}
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
