import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import NavbarComponent from './components/Navbar';
import HeroSection from './components/HeroSection';
import PropertyValuationCalculator from './components/PropertyValuationCalculator';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './App.css'; // Custom CSS
import PropertyAdviceForm from './components/PropertyAdviceForm';
import ScrollingImages from './components/ScrollingImages';
import PropertyValuation from './components/PropertyValuation';
import PropertyValHome from './components/PropertyValHome';
import CartPage from './components/CartPage';
import DocumentsPage from './components/DocumentsPage'; // Import DocumentsPage

function App() {
  const [currentPage, setCurrentPage] = useState('main'); // Default to main content

  const handleNext = () => {
    // Toggle between 'cart' and 'documents'
    if (currentPage === 'cart') {
      setCurrentPage('documents');
    } else if (currentPage === 'documents') {
      console.log('Proceeding to payment...'); // Placeholder for next step
    }
  };

  const handlePageChange = (page) => {
    // Function to manually change pages
    setCurrentPage(page);
  };

  return (
    <Router> {/* Wrap the app inside Router */}
      <div className="App">
        <NavbarComponent /> {/* Navbar is always visible */}

        {/* Render CartPage or DocumentsPage based on currentPage state */}
        {currentPage === 'cart' && <CartPage onNext={handleNext} />}
        {currentPage === 'documents' && <DocumentsPage onNext={handleNext} />}

        {/* Main Content Sections */}
        {currentPage === 'main' && (
          <> 
            <HeroSection /> {/* Hero/Banner section */}
            <PropertyValHome /> {/* Property Valuation Home */}
            <PropertyValuationCalculator /> {/* Main property valuation section */}
            <PropertyAdviceForm /> {/* Property advice form */}
            <PropertyValuation /> {/* Detailed property valuation section */}
            <ScrollingImages /> {/* Section with scrolling images */}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;