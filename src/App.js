import './App.css';
import HomePage from './pages/home/home.page';
import Pricing from './components/pricing/pricing.component';
import Testimonial from './components/testimonial/testimonial.component';
import Features from './components/features/features.component';
import CustomNavbar from './components/navbar/navbar.component';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      {/* <HomePage /> */}
      <Switch>
          <Route exact path='/homepage' component={HomePage} />
          <Route  path='/pricing' component={Pricing} />
          <Route  path='/testimonials' component={Testimonial} />
          <Route  path='/about' component={Features} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
