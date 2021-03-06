import React from 'react'
import glamorous from 'glamorous'
import genji from './assets/heros/genji.png'
import mccree from './assets/heros/mccree.png'
import pharah from './assets/heros/pharah.png'
import reaper from './assets/heros/reaper.png'
import soldier76 from './assets/heros/soldier-76.png'
import sombra from './assets/heros/sombra.png'
import tracer from './assets/heros/tracer.png'
import bastion from './assets/heros/bastion.png'
import hanzo from './assets/heros/hanzo.png'
import junkrat from './assets/heros/junkrat.png'
import mei from './assets/heros/mei.png'
import torbjorn from './assets/heros/torbjorn.png'
import widowmaker from './assets/heros/widowmaker.png'
import dva from './assets/heros/dva.png'
import reinhardt from './assets/heros/reinhardt.png'
import roadhog from './assets/heros/roadhog.png'
import winston from './assets/heros/winston.png'
import zarya from './assets/heros/zarya.png'
import lucio from './assets/heros/lucio.png'
import mercy from './assets/heros/mercy.png'
import symmetra from './assets/heros/symmetra.png'
import zenyatta from './assets/heros/zenyatta.png'
import defense from './assets/roles/defense.png'
import offense from './assets/roles/offense.png'
import support from './assets/roles/support.png'
import tank from './assets/roles/tank.png'

const images = {
    genji,
    mccree,
    pharah,
    reaper,
    soldier76,
    sombra,
    tracer,
    bastion,
    hanzo,
    junkrat,
    mei,
    torbjorn,
    widowmaker,
    dva,
    reinhardt,
    roadhog,
    zarya,
    winston,
    lucio,
    symmetra,
    zenyatta,
    mercy
}

const shields = {
    defense,
    offense,
    support,
    tank
}

const Heroes = glamorous.div({
    gridArea: 'heroes',
    display: 'grid',
    gridTemplateColumns: '241px 213px 206px 177px',
    justifyContent: 'center',
    gridColumnGap: '32px',
    padding: '100px'
})

const Category = glamorous.div({
    display: 'flex',
    alignItems: 'center'
})

// const Shield = ({ shield }) => {
//     const ShieldElement = glamorous.div(
//         {
//             width: '50px',
//             height: '50px',
//             border: '1px solid #fff',
//             display: 'inline',
//             borderRadius: '50%',
//             justifyContent: 'center',
//             transform: 'scaleY(-1)',
//             '::after': {
//                 content: '^',
//                 color: '#fff',
//                 fontFamily: 'Overwatch'
//             }
//         },
//         ({ shield }) => ({ backgroundImage: `url(${shields[shield]}` })
//     )
//     return <ShieldElement shield={shield} />
// }


const Option = ({ hero, selectHero }) => {
    const clickHandler = () => selectHero(hero)
    const Element = glamorous.div(
        {
            width: '40px',
            height: '54px',
            background: 'black',
            marginRight: '3.2px',
            backgroundSize: 'cover',
            transform: 'skewX(-15deg)',
            transformOrigin: 'bottom left',
            boxShadow: 'inset 0px 2px 0px 0px #fff, inset 0px -1px 0px 0px #fff',
            borderRadius: '3px',
            transitionDuration: '25ms',
            ':hover': {
                transform: 'scale(1.15) skewX(-15deg) translate(-2px, 2px)',
                boxShadow: 'inset 1px 2px 1px 1px #fff, 1px 1px 1px 1px #fff',
                zIndex: 2
            },
            justifyContent: 'center'
        },
        ({ hero }) => ({ backgroundImage: `url(${images[hero]})` })
    )
    return <Element hero={hero} onClick={clickHandler} />
}

const Attack = ({ selectHero }) =>
    <Category>
        <Option hero='genji' selectHero={selectHero} />
        <Option hero='mccree' selectHero={selectHero} />
        <Option hero='pharah' selectHero={selectHero} /> 
        <Option hero='reaper' selectHero={selectHero} /> 
        <Option hero='soldier76' selectHero={selectHero} />
        <Option hero='tracer' selectHero={selectHero} /> 
    </Category>

const Defense = ({ selectHero }) =>
    <Category>
        <Option hero='bastion' selectHero={selectHero} /> 
        <Option hero='hanzo' selectHero={selectHero} />
        <Option hero='junkrat' selectHero={selectHero} /> 
        <Option hero='mei' selectHero={selectHero} /> 
        <Option hero='torbjorn' selectHero={selectHero} /> 
        <Option hero='widowmaker' selectHero={selectHero} /> 
    </Category>

const Tank = ({ selectHero }) =>
    <Category>
        <Option hero='dva' selectHero={selectHero} /> 
        <Option hero='reinhardt' selectHero={selectHero} />
        <Option hero='roadhog' selectHero={selectHero} /> 
        <Option hero='winston' selectHero={selectHero} /> 
        <Option hero='zarya' selectHero={selectHero} /> 
    </Category>

const Support = ({ selectHero }) =>
    <Category>
        <Option hero='lucio' selectHero={selectHero} /> 
        <Option hero='mercy' selectHero={selectHero} />
        <Option hero='symmetra' selectHero={selectHero} /> 
        <Option hero='zenyatta' selectHero={selectHero} /> 
    </Category>

export default ({ selectHero }) =>
    <Heroes>
        <Attack selectHero={selectHero} />
        <Defense selectHero={selectHero} />
        <Tank selectHero={selectHero} />
        <Support selectHero={selectHero} />
    </Heroes>