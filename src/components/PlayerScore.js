import { useSelector } from "react-redux"
import { advantagePlayerBooleen } from "../redux/selector"
import { scorePlayer } from "../redux/selector"


export const PlayerScore = ({playerId}) => {
    // appel avec un selector du fichier selector.js
    const score = useSelector(scorePlayer(playerId))
    const advantage = useSelector( advantagePlayerBooleen(playerId))
    
    return (
        <div className="player-score">
            <p>{playerId}</p>
            <p> {advantage ? "avantage" : ""} {score} </p>
        </div>
    )
}
