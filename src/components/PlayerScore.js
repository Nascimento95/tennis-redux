import { useSelector } from "react-redux"
import { advantagePlayerBooleen } from "../redux/selector"
import { scorePlayer } from "../redux/selector"


export const PlayerScore = ({playerId}) => {
    
    const score = useSelector(scorePlayer(playerId))
    // appel avec un selector du fichier selector.js
    const advantage = useSelector( advantagePlayerBooleen(playerId))
    console.log(advantage, "booleen " , playerId)
    return (
        <div className="player-score">
            <p>{playerId}</p>
            <p>{score} </p>
        </div>
    )
}
