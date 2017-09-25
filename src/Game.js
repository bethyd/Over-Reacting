import React from 'react'
import glamorous from 'glamorous'

const Game = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '32px 23px'
})

const GameType = glamorous.div({
    fontSize: '90px',
    fontStyle: 'italic',
    fontFamily: 'Overwatch',
    color: '#ce1631',
    // color: '-webkit-linear-gradient(#ce1631, #000)'

})

const Map = glamorous.div({
    fontSize: '28px',
    fontStyle: 'italic',
    color: '#FFF',
    position: 'relative',
    top: '-42px',
    left: '13px',
    fontFamily: 'Overwatch'
})

const Character = glamorous.div({
    fontSize: '55px',
    fontStyle: 'italic',
    color: '#fff',
    position: 'relative',
    top: '13px',
    left: '-12px',
    fontFamily: 'Overwatch'
})
export default ({hero}) =>
    <Game>
        <div>
            <GameType>Attack</GameType>
            <Map>Volskaya Industries</Map>
        </div>
        <Character>{hero}</Character>
    </Game>

        