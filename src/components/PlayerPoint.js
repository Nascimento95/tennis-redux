import { useSelector } from "react-redux"
import { playerGameWin } from "../redux/selector"


export default function PlayerPoint({playerId}) {
    const historyGame = useSelector(playerGameWin(playerId))
    // const score = useSelector(scorePlayer(playerId))
    console.log(historyGame)
        
        
    return (
        <div className="player-games">
            <p>{playerId}</p>
            <p>
                {historyGame} {historyGame <= 1 ? "jeux gagné" : "jeux gagnés"} 
            </p>
        </div>
    )
}
