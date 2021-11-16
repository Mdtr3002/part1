import React from 'react'
const Header = ({course}) => {
    return(
      <h1>{course}</h1>
    )
    }
    
    const Part = ({part, exercises}) => {
      return (
        <p>{part} {exercises}</p>
      )
    }
    const Content = ({parts}) => {
    return(
      <>
      {parts.map(part => <Part id={part.id} part={part.name} exercises={part.exercises} />)}
      </>
    )
    }
    
    const Footer = ({parts}) => {
      return(
       <p><b>total of {parts.reduce((sum, x) => sum+x.exercises,0)} exercises</b></p>
      )
    }
    const Course = ({props}) => {
      return (<div>
        <Header course={props.name}/>
        <Content parts={props.parts}/>
        <Footer  parts={props.parts} />
      </div>)
    }
export default Course