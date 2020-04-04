import ReactMarkdown from 'react-markdown';
import style from './works.module.css';

const works = [
    {
        title: '2019 Summer : Full Stack Developer Internship',
        company: 'POPTICKET Limited',
        description: "POPTICKET is an online ticketing system based in Hong Kong. \n\nI am responsible for adding new functions and debug for the system.",
        thumb: 'image/popticket.png'
    },
    {
        title: '2019 Oct - Nov : Student Helper of HKUST Infoday 2019',
        company: 'HKUST URAO',
        description: "I am responsible for updating the website and backend content for Infoday 2019 and Online Infoday 2019 \n\n Website: [infoday.ust.hk](//infoday.ust.hk/)",
        thumb: 'image/infoday.jpg'
    }
];

export default function socialMedia() {
    return (
        <div className={`container ${style.works}`}>
            <h2>Working Experiences</h2>
            {
                works.map((work, index) => {
                    return (
                        <div className={style.work} key={index}>
                            <div className={style.content}>
                                <h3><span>{work.title}</span></h3>
                                <h4>{work.company}</h4>
                                <ReactMarkdown source={work.description} renderers={{ link: props => <a href={props.href} target="_blank" rel='noreferrer noopener'>{props.children}</a> }} />
                            </div>
                            <div className={style.work_img}><img src={work.thumb} alt={work.company} /></div>
                        </div>
                    );
                })
            }
        </div>
    );
}