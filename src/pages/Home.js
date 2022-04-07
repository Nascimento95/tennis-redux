import { Display } from "../components/Display";
import { PlayPauseButton } from "../components/PlayPauseButton";
import { ResetGameButton } from "../components/ResetGameButton";
import { PlayScoredButton } from "../components/PlayScoredButton";
import { PlayerScore } from "../components/PlayerScore";
const Home = () => {
  return (
    <div>
      <h1>ma home</h1>
      <Display />
      <PlayerScore playerId='player1' />
      <PlayerScore playerId='player2'/>
      <div className="buttons-row">
        <PlayScoredButton player="player1"/>
        <PlayScoredButton player="player2"/>
      </div>
      <div className="buttons-row">
        <PlayPauseButton />
        <ResetGameButton />
      </div>
    </div>
  );
};

export default Home;