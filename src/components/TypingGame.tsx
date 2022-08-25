import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import shuffledWordBank from "../assets/wordBank";
import WordChip from "./WordChip";
import Timer from './Timer';

type TypingGameProps = {}

const TypingGame = ({}: TypingGameProps) => {
  // TODO: could probably dump this all into useReducer
  const [userInput, setUserInput] = useState('');
  const [timerStarted, setTimerStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [completedGame, setCompletedGame] = useState(false);
  const [ timeLapsed, setTimeLapsed ] = useState(1);

  useEffect(() => {
    if (userInput === `${shuffledWordBank[wordCount]} `) { // adding a space
      setWordCount(wordCount + 1);
      setUserInput('');
    }

    if (!timerStarted && (userInput.length > 0)) {
      // start timer on first user input
      setTimerStarted(true);
    }
  }, [userInput])

  const stopTimer = () => {
    setTimerStarted(false);
    setCompletedGame(true);
  }

  const restartGame = () => {
    setCompletedGame(false);
    setTimerStarted(false);
    setWordCount(0);
    setUserInput('');
    setTimeLapsed(1);
  }

  const wpmLabel =  timerStarted || completedGame ? ( (60 / timeLapsed) * wordCount ) : '?'
  const timeLeftLabel =  timerStarted ? ( <Timer seconds={10} setTimeLapsed={setTimeLapsed} stopTimer={stopTimer}/> ) : (60);

  return (
    <React.Fragment>
      <div className='infoHeader'>
        {/* ignoring CPM (characters per minute) for now */}
        <Box>WPM: {wpmLabel}</Box>
        <Box>Timer: {timeLeftLabel}</Box>
        <Button
          variant='outlined'
          size='small'
          onClick={restartGame}>
          Restart
        </Button>
      </div>
      <div className='wordContainer'>
        { shuffledWordBank.map((word, index) => {
          return (
            <WordChip
              key={index}
              index={index}
              userInput={userInput}
              word={word}
              wordCount={wordCount}
            />
          )
        })}
      </div>
      <div className='typeField'>
        <Typography variant='subtitle1'>{ completedGame ? 'Time\'s up!' : 'Start Typing When Ready'}</Typography>
        <TextField
          placeholder='Type here...'
          disabled={completedGame}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}>
        </TextField>
      </div>
    </React.Fragment>
  );
}


export default TypingGame;