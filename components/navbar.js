import style from './navbar.module.css';
import Link from 'next/link';

const social = [
    {
        link: 'mailto:horacelai2011+site@gmail.com',
        icon: 'image/mail-icon.svg',
        alt: 'Mail'
    },
    {
        link: '//github.com/horacelai',
        icon: 'image/github-icon.svg',
        alt: 'GitHub'
    },
    {
        link: '//www.linkedin.com/in/horace-lai-367385193',
        icon: 'image/linkedin-icon.svg',
        alt: 'Linkedin'
    },
]

const pages = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About Me',
        link: '/about'
    },
    {
        title: 'Projects',
        link: '/projects'
    }
];

export default function socialMedia(){
    return (
        <div className={style.navbar}>
            <nav className={style.nav}>
                {
                    pages.map((page) => {
                        return (
                            <Link href={page.link} key={page.link}>
                                <a className={style.item}>{page.title}</a>
                            </Link>
                        )
                    })
                }
            </nav>
            <div className={style.social_media}>
                {
                    social.map((item) => {
                        return (
                            <a key={item.alt} href={item.link} target="_blank" rel="noopener">
                                <img src={item.icon} alt={item.alt} />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}