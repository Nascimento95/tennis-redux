import { useDispatch } from "react-redux"
import { pointScored } from "../redux/action"

export const PlayScoredButton = ({player}) => {
    const dispatch = useDispatch()
    
    return (
    <button 
        className="button"
        onClick={() => {dispatch(pointScored(player))}}
    >
        Point {player}
    </button>
    )
}
