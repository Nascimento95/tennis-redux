import { useDispatch } from "react-redux"
import { restartGame } from "../redux/action"

export const ResetGameButton = () => {
    const dispatch = useDispatch()
    
    return (
        <button 
            className="button"
            onClick={() => {dispatch(restartGame())}}
        >
            Remmettre à zero
        </button>
    )

}