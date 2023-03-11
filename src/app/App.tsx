import { Navbar } from '../widgets/Navbar';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';

function App() {

  return (
      <div className="App app_dark_theme">
        <Suspense fallback="">
          <Navbar />
          <Suspense fallback='...'>
            <MainPage />
          </Suspense>
        </Suspense>
      </div>
  );
}

export default App;
