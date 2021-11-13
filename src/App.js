import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
const Button = (props) =>
<button onClick={props.func}>{props.text}</button>
const ShowAncedote = ({anecdotes,vote}) => {
  return(
    <>
    {anecdotes}<br/>
      has {vote} votes<br/>
    </>
  )
}
const Max = ({number, anecdotes}) => {
  let max = number[0] 
  let mostVoted = 0
  for(let i=0;i<7;i++) {
    if (max<number[i]) {
      max = number[i]
      mostVoted = i
    }
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <ShowAncedote anecdotes={anecdotes[mostVoted]} vote={number[mostVoted]} />
    </div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [vote, setVote] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0})
  const [selected, setSelected] = useState(0)
  const minh = {...vote}
  const countVote = () => {
    minh[selected]+=1
    setVote({...minh})
  }
  const random = () => 
  setSelected(Math.floor(Math.random()*7))
  console.log(vote[selected])
  return (
    <div>
      <ShowAncedote anecdotes={anecdotes[selected]} vote={vote[selected]} />
      <Button func={() => countVote()} text={"vote"} />
      <Button func={() => random()} text={"next ancedote"} />
      <Max anecdotes={anecdotes} number={vote} />
    </div>
  )
}
export default App;
