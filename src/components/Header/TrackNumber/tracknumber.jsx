import {KeyboardArrowDown,SwapVert} from '@mui/icons-material';
import  "./tracknumber.css"
// TrackNumber component (Simulated, No Functionality)
export default function TrackNumber () {
    return (
      <div>
        <button className='tracknumberbuttonbox'>
        <SwapVert />
          Track Number
          <KeyboardArrowDown />
        </button>
       
      </div>
    );
  }