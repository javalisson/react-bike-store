import React from 'react';
import './App.css';
import Cart from './Cart';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Bike Store</h1>
      </header>

      <aside className='App-sidebar'>
        <Cart />
      </aside>

      <main className="App-main-content">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
