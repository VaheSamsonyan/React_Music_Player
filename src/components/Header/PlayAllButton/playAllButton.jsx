import  {PlayArrow,KeyboardArrowDown}  from "@mui/icons-material";
import  "./playAllButton.css"
// PlayAllButton component (Simulated, No Functionality)
export default function PlayAllButton() {
  return (
    <div className="playallbox">
    <button className="playbuttonbox" onClick={()=>{
       console.log("Play All button is simulated")
    }} > <PlayArrow/>Play All  <KeyboardArrowDown/></button>
    </div>
  );
}