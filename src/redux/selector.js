export const advantagePlayerBooleen = (playerId) => {
    return state => state.advantage === playerId
}

export const scorePlayer = (playerId) => {
    return state => state[playerId]
}


export const playerGameWin = (playerId) => {
    return (state) => state.history.filter(game => game.winner.includes(playerId)).length
}