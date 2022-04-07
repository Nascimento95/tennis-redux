

export const advantagePlayerBooleen = (playerId) => {
    return state => state.advantage === playerId
}

export const scorePlayer = (playerId) => {
    return state => state[playerId]
}