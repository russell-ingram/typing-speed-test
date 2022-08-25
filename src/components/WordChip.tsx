import { Typography } from "@mui/material";

type WordProps = {
  index: number;
  userInput: string;
  word: string;
  wordCount: number;
}

const WordChip = ({ index, userInput, word, wordCount }: WordProps) => {
  const splitUserInput = userInput.split('');
  let wordClassName = 'wordChip';
  const selectedWord = wordCount === index;
  if (selectedWord) {
    wordClassName += ' selectedWord';
  } else if (wordCount > index) {
    wordClassName += ' previousWord';
  }

  return (
    <div className={wordClassName}>
      <Typography variant="body2">
        {
          selectedWord ? (
            word.split('').map((letter, i) => {
              return letter === splitUserInput[i] ? (
                <span key={i} className='correctLetter'>{letter}</span>
              ) : splitUserInput[i] ? ( // user has input at this index but it is wrong
                <span key={i} className='wrongLetter'>{letter}</span>
              ) : (
                <span key={i}>{letter}</span>
              )
            })
          ) : (
            word
          )
        }
      </Typography>
    </div>
  );
}

export default WordChip;