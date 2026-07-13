import './App.css'
import Card from './components/Card'
function App() {
  let myObj={
    name:"Ritik Code and Fun",
    College:"IIT Indore"
  }
  return (
    <>
    <Card userName="Madhav Codes" views="2000"  description="Discover cutting-edge design patterns and UI components that elevate
        your digital experiences."/>
    <Card userName="Radha's Code" views="4555" description="Meet Your Peaceful place Gokul Vrindawan" obj={myObj}/>
    <Card userName="Ritik Aur Code" views="844" description="iam Come this world to have a experice of human Being"/>

    </>
  )
}

export default App
