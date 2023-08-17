import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
          />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function (i, s, o, g, r, a, m, n) {
                  i.moengage_object = r; t = {}; q = function (f) { return function () { (i.moengage_q = i.moengage_q || []).push({ f: f, a: arguments }); }; }; f = ['track_event', 'add_user_attribute', 'add_first_name', 'add_last_name', 'add_email', 'add_mobile', 'add_user_name', 'add_gender', 'add_birthday', 'destroy_session', 'add_unique_user_id', 'moe_events', 'call_web_push', 'track', 'location_type_attribute'], h = { onsite: ["getData", "registerCallback"] }; for (k in f) { t[f[k]] = q(f[k]); } for (k in h) for (l in h[k]) { null == t[k] && (t[k] = {}), t[k][h[k][l]] = q(k + "." + h[k][l]); } a = s.createElement(o); m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m); i.moe = i.moe || function () { n = arguments[0]; return t; }; a.onload = function () { if (n) { i[r] = moe(n); } };
                })(window, document, 'script', 'https://cdn.moengage.com/webpush/moe_webSdk.min.latest.js', 'Moengage');

                Moengage = moe({
                  app_id: "%NEXT_PUBLIC_MOENGAGE%",
                  cluster: "DC_2",
                  debug_logs: "%NEXT_PUBLIC_MAIN_URL%" === 'https://plastk.ca' ? 0 : 1,
                  swPath: "service-worker.js"
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
