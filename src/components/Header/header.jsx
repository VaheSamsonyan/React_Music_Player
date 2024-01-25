import PlayAllButton from './PlayAllButton/playAllButton';
import TrackNumber from './TrackNumber/tracknumber';
import AddAllButton from './AddAllButton/addAllButton';
import Filter from './Filter/filter';
import  "./header.css"


// Header component to collect and organize other components
  export default function Header() {
    return (
      <div className="header">
        <PlayAllButton />
        <AddAllButton />
        <TrackNumber />
       <Filter />
      </div>
    );
  }
