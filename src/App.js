import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Business from './Components/Business/Business';
import BillingInvoice from './Components/BillingInvoice/BillingInvoice';
import CardDeal from './Components/CardDeal/CardDeal';
import Testinomial from './Components/Testinomials/Testinomial';
import Social from './Components/Social/Social';
import Letstry from './Components/LetsTry/Letstry';
import Footer from './Components/Footer/Footer';
 

function App() {
  return (
    <div className="bg_gradient">
      <Navbar/>
      <Home/>
      <Review/>
      <Business/>
      <BillingInvoice/>
      <CardDeal/>
      <Testinomial/>
     
      <Letstry/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
