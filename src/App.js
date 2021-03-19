import './App.css'
import Footer from './component/Footer'
import { Header } from './component/Header'
import { Job } from './component/Job'
import { Profile } from './component/Profile'
import { Work } from './component/Work'

function App() {
  return (
    <div className="app">
        <Header />
        <Work />
        <Profile />
        <Job />
        <Footer />
    </div>
  );
}

export default App;
