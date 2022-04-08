import { useDispatch } from "react-redux"
import { playPause } from "../redux/action"


export const PlayPauseButton = () => {
    const dispatch = useDispatch()
    return (
        <button 
        className="button"
            onClick={() => {dispatch(playPause())}}
        >
            Pause/ Reprendre
        </button>
    )
}