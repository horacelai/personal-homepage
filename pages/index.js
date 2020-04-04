import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const SocialMedia = dynamic(() => import('../components/navbar'));
const Header = dynamic(() => import('../components/header'));

const pages = [
  {
    title: 'About Me',
    link: '/about'
  },
  {
    title: 'Projects',
    link: '/projects'
  }
];

const Home = () => (
  <div className="app">
    <Head>
      <title>Horace's Personal Webpage</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="Description" content="Personal Webpage of Horace Lai" />

      <link rel="apple-touch-icon" sizes="180x180" href="image/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png" />
      <link rel="manifest" href="image/site.webmanifest" />
      <link rel="mask-icon" href="image/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#91FFE8" />
      <script dangerouslySetInnerHTML={{
        __html:`
          (function(e,t,n,i,s,a,c){e[n] = e[n] || function () { (e[n].q = e[n].q || []).push(arguments) }
        ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
        ;c.parentNode.insertBefore(a,c)
        })(window,document,"galite","script","https://cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js");

        galite('create', 'UA-140300076-1', 'auto');
        galite('send', 'pageview');
        `}}>
      </script>
    </Head>
    <main>
      <SocialMedia/>
      <Header />
      <div className="links">
        {
          pages.map((page) => {
            return (
              <Link href={page.link} key={page.link}>
                <a className="link" title={page.title}>{page.title}</a>
              </Link>
            )
          })
        }
      </div>
    </main>
    <footer>
    Copyright &#169; Lai Ho Long 2020
    </footer>
  </div>
)

export default Home
