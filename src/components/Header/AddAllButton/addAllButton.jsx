import { Add } from "@mui/icons-material";
import "./addAllButton.css";  
// AddAllButton component (Simulated, No Functionality)
export default function AddAllButton() {
  return (
    <div className="addallbox"> 
      <button className="addallbuttonbox" onClick={()=>{
        console.log("Add All button is simulated")
      }}> <Add/>Add All </button> 
    </div>
  );
}
