import './App.css'
import { Container } from '@mui/system'
import { Box, Card, Typography } from '@mui/material'
import TypingGame from './components/TypingGame';


function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant='h2'>Typing Speed Test</Typography>
        <Typography variant='body1'>How fast are your fingers? Do the one-minute typing test to find out! Press the space bar after each word. At the end, you'll get your typing speed in CPM and WPM. Good luck!</Typography>
        <Box sx={{ maxWidth: 600, margin: '0 auto', marginTop: 8 }}>
          <Card variant="outlined">
            <TypingGame />
          </Card>
        </Box>
      </Container>
    </div>
  )
}

export default App
