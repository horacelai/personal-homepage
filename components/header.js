import style from './header.module.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`
const trans2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

export default () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    return (
        <header className={`container ${style.header}`} onMouseMove={({ clientX: x, clientY: y }) => {
            return set({ xy: calc(x, y) });
        }} onMouseLeave={() => { set({ xy: [0,0]}) }}>
            <animated.div className={style.header_img} style={{ transform: props.xy.interpolate(trans1) }}><img src="image/icon.jpeg" alt='Horace Lai' /></animated.div>
            <animated.div className={style.content} style={{ transform: props.xy.interpolate(trans2) }}>
                <h1>Horace Lai</h1>
                <h3>Lai Ho Long</h3>
                <p><span>I am a Computer Science student at HKUST. <br />
                I love to learn new things. <br />
                I also love to code and design.</span></p>
            </animated.div>
            <animated.div className={style.bg} style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
        </header>
    );
}