import './App.css';
import MusicPlayerSlider from './Components/MusicPlayer/MusicPlayer';
import Playlist from './Components/Playlist/Playlist';

function App() {
  return (
    <div className=' pt-14 px-32' style={{ backgroundColor: 'darkcyan' }}>
      <div>
        <MusicPlayerSlider />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
