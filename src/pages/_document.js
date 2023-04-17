import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Prayatna Learning Center" />
        <meta
          name="description"
          content="Best coaching center for the pre-school,high school,class-10,first PUC,second PUC,JEE mains,JEE advance,NATA and K-CET. We give one to one mentorship to all our student and also provide full assistance on the overall development of the student."
        />
        <meta name="keywords" content="best,best coaching center,PUC,K-CET" />
        <meta
          name="author"
          content="Ashwin kumar,Deepshikha Sharma and Ravi kumar"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Prayatna Learning Center | Rammurtynagar | Bengaluru",
            "description": "Best coaching center for the pre-school,high school,class-10,first PUC,second PUC,JEE mains,JEE advance,NATA and K-CET. We give one to one mentorship to all our student and also provide full assistance on the overall development of the student.",
            "url": "https://prayatnalearning.com"
          }
        `}
        </script>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
