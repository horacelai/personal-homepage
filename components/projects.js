import ReactMarkdown from 'react-markdown';
import style from './projects.module.css';

const projects = [
    {
        title: 'Orientation Camp Game System',
        description: "It's a system written for an orientation camp in HKUST. The system will display tasks for participants to do.The front-end is a web app written in React and Redux. The back-end is written in node.js and redis as the data storage. \n\nGitHub Repositories: [Front-end](https://github.com/horacelai/csess-frontend) / [Back-end](https://github.com/horacelai/csess-backend)",
        thumb: 'image/ocamp-screen.png'
    },
    {
        title: 'CSESS Society Website',
        description: "It's a website written for Computer Science and Engineering Student Society in HKUST. The website was designed by me and written in React.\n\nWebsite: [https://csess.su.ust.hk](https://csess.su.ust.hk)",
        thumb: 'image/socpagescreen.png'
    },
    {
        title: 'iWerewolf Party Game',
        description: "Players could play the classical board game, 'werewolf', on their phone.\n\nAn online party game written using socket.io and Node.js. I am responsible for the backend server and the UI design of the project. ",
        thumb: 'image/werewolf.png'
    }
];

export default function socialMedia() {
    return (
        <div className="container">
            <h2>Projects</h2>
            {
                projects.map((project, index) => {
                    return (
                        <div className={style.project} key={index}>
                            <div className={style.content}>
                                <h3><span>{project.title}</span></h3>
                                <div className={style.content}>
                                    <ReactMarkdown source={project.description} renderers={{ link: props => <a href={props.href} target="_blank" rel='noreferrer noopener'>{props.children}</a> }}/>
                                </div>
                            </div>
                            <div className={style.project_img}><img src={project.thumb} alt={project.title} /></div>
                        </div>
                    );
                })
            }
        </div>
    );
};