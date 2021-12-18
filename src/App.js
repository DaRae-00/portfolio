import AboutMe from 'view/AboutMe';
import Archiving from 'view/Archiving';
import Career from 'view/Career';

function App() {
  return (
    <div className="sm:container p-8 mx-auto">
      <div className="mb-20">
        <AboutMe />
      </div>
      <div className="mb-20">
        <Archiving />
      </div>
      <div className="mb-20">
        <Career />
      </div>
    </div>
  );
}

export default App;
