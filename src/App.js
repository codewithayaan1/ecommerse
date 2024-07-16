import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import { Loading } from './components/loading/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const Products = lazy(() => import('./components/Products/Products'))


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <Suspense fallback={<><Loading /></>}>
              <Products />
            </Suspense>
          } />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
