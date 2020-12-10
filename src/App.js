
import './App.css';
import Header from './Header'
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import "./App.css"
function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
        <div className='sideStyle'>
          <Sidebar />
        </div>
        <div>
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
