import {useState} from "react"
import './App.css';
import Box from './component/Box';
  
const choice = {
  rock:{
    name:"Rock",
    img:"https://cdn.pixabay.com/photo/2014/12/22/00/03/rocks-576663__340.png"  
  },
  paper:{
    name:"paper",
    img:"https://cdn.pixabay.com/photo/2013/07/12/19/00/certificate-154169__340.png"
  },
  scissors:{
    name:"scissors",
    img:"https://cdn.pixabay.com/photo/2014/04/03/10/51/scissors-311500__340.png"
  }
}

function App() {
  const [userSelect, setuserSelect] = useState(null)
  const [ComputerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play=(userChoice) => {
      setuserSelect(choice[userChoice])
      let ComputerChoice = randomChoice()
      setComputerSelect(ComputerChoice)
      setResult(judgement(choice[userChoice],ComputerChoice))
  };
  
  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let itemRandom = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[itemRandom]
    return choice[final]
  }
  
  const judgement = (user,computer) => {
    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")
    return computer.name == "Scissors" ? "win" : "lose";
    else if(user.name == "Scissors")
    return computer.name == "Paper" ? "win" : "lose";
    else if(user.name == "Paper")
    return computer.name == "Rock" ? "win" : "lose";
  }
  
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={ComputerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
