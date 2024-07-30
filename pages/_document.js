import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zxx">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/Logo Daihatsu.png"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"></script>
      </body>
    </Html>
  );
}
