import Head from 'next/head';
import dynamic from 'next/dynamic';

const SocialMedia = dynamic(() => import('../components/navbar'));
const Works = dynamic(() => import('../components/works'));

const About = () => (
    <div className="app">
        <Head>
            <title>About Me - Horace's Personal Webpage</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="Description" content="Personal Webpage of Horace Lai" />

            <link rel="apple-touch-icon" sizes="180x180" href="image/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="image/favicon-16x16.png" />
            <link rel="manifest" href="image/site.webmanifest" />
            <link rel="mask-icon" href="image/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="theme-color" content="#91FFE8" />
            <script dangerouslySetInnerHTML={{
                __html: `
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
        <SocialMedia />
        <div className="about container">
            <h2>About Me</h2>
            <img src="image/icon.jpeg" alt='Horace Lai' />
            <p>Hello, my name is Horace and I am a Graduand of HKUST majoring in Computer Science.</p>
            <p>I am interested in web development and web design.</p>
            <p>If you have any question about me, feel free to reach me by email or my social media.</p>
        </div>
        <Works />
        <div className='container'>
            <div className='contact'>
                <p>If you want to know more about me, feel free to download my <a href='resume/resume.pdf' target="_blank" rel="noopener">r&#233;sum&#233;</a>.</p>
            </div>
        </div>
        </main>
        <footer>
            Copyright &#169; Lai Ho Long 2020
        </footer>
    </div>
)

export default About
