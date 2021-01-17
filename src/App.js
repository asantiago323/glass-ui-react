import './App.css';

import { Dashboard } from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      {/* main */}
      <main>
        <section className="glass">
        {/* dashboard */}
          <Dashboard />
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
