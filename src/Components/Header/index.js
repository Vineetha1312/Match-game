import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="nav-score-container">
        <p className="score">
          Score: <span className="span-score">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-icon"
        />
        <p className="timer-count">{timer} Sec</p>
      </div>
    </nav>
  )
}

export default Header
