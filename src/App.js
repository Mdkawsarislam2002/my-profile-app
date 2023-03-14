import './App.scss';
import Header from './components/header/header';
import MyRoutes from './routes/routes';

function App() {
  return (
    <div className="main-container ">
      <Header></Header>
      <MyRoutes></MyRoutes>
    </div>
  );
}

export default App;
