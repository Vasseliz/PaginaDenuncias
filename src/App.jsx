// No seu App.jsx ou componente pai
import { DenunciaProvider } from './context/DenunciaContext';
import MainContent from './MainContent';

import ProgressBar from './components/ProgressBar';
import HeaderComply from './components/HeaderComply';

function App() {
  return (
    <DenunciaProvider>

      <div>
          <HeaderComply/>
          <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <ProgressBar />
      </div>
    </div>
        <MainContent />
      </div>
    </DenunciaProvider>
  );
}
export default App