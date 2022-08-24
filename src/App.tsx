import { useEffect, useState } from 'react'
import './App.css'
import { Container } from '@mui/system'
import { Card, Divider, TextField, Typography } from '@mui/material'
import wordBank from './assets/wordBank';

function App() {
  const [userInput, setUserInput] = useState('');

  // TODO: useReducer?
  const [timer, setTimer] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);

  // TODO: Randomize the wordBank
  const [nextWordUp, setNextWordUp] = useState(wordBank[0]);
  const [wordCount, setWordCount] = useState(0);

  const startTimer = () => {
    // setTimerStarted(true);
    // setInterval(() => {
    //   console.log("TEST");
    //   if (timer > 0) {
    //     setTimer(timer - 1);
    //   }
    // }, 1000)
  }

  const stopTimer = () => {
    // change component view to results
    // maybe tuck away results for comparison on future attempts - use localStorage?
  }

  useEffect(() => {
    if (userInput === `${nextWordUp} `) { // adding a space
      // TODO: maybe combine this using useReducer?
      setNextWordUp(wordBank[wordCount + 1]);
      setWordCount(wordCount + 1);
      setUserInput('');
    }

    if (!timerStarted) {
      startTimer();
    }
  }, [userInput])

  const splitUserInput = userInput.split('');

  return (
    <div className="App">
      <Container>
        <Card>
          <Typography variant="body2">{wordBank}</Typography>
          <Divider />
          <Typography variant="body2">
            { nextWordUp.split('').map((letter, index) => {
              // TODO: add keys to this map
              return letter === splitUserInput[index] ? (
                <b>{letter}</b>
              ) : (
                // TODO: add css for wrong letters
                // TODO: add logic for formatting for extra letters beyond first wrong one
                <span>{letter}</span>
              )
            })}
          </Typography>
          <Divider />
          <Typography variant="body2">WordCount: {wordCount}</Typography>
          <Divider />
          <Typography variant="body2">Timer: {timer}</Typography>
          <Divider />
          <TextField value={userInput} onChange={(e) => { setUserInput(e.target.value) }}></TextField>
        </Card>
      </Container>
    </div>
  )
}

export default App
