import logo from './logo.svg';
import './App.css';

const Header = (headerprop) => {
  return(
    <h1>{headerprop.course}</h1>
  )
  }
  
  const Part = (partprop) => {
    return (
      <p>{partprop.part} {partprop.exercises}</p>
    )
  }
  const Content = (contentprop) => {
  return(
    <>
    <Part part={contentprop.parts[0].name} exercises={contentprop.parts[0].exercises} />
    <Part part={contentprop.parts[1].name} exercises={contentprop.parts[1].exercises} />
    <Part part={contentprop.parts[2].name} exercises={contentprop.parts[2].exercises} />
    </>
  )
  }
  
  const Footer = (footerProp) => {
    return(
     <p>Number of exercises {footerProp.parts[0].exercises + footerProp.parts[1].exercises + footerProp.parts[2].exercises}</p>
    )
  }
  const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
  
  
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Footer  parts={course.parts} />
      </div>
    )
  }
export default App;
