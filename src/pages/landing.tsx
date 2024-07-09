import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <header style={{ width: '100%', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, backgroundColor: 'transparent', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>LUXEDRIVE</div>
        <nav>
          <Link to="/login" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Register</Link>
        </nav>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Discover the world on wheels with our car rental service</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
            <input type="text" placeholder="Pick-up Location" style={{ padding: '10px', marginRight: '10px', flex: 1 }} />
            <input type="date" placeholder="Pick-up date" style={{ padding: '10px', marginRight: '10px', flex: 1 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
            <input type="text" placeholder="Drop-off Location" style={{ padding: '10px', marginRight: '10px', flex: 1 }} />
            <input type="date" placeholder="Drop-off date" style={{ padding: '10px', marginRight: '10px', flex: 1 }} />
          </div>
          <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Find a Vehicle</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
