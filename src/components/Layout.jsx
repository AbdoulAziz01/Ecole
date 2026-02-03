import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Menu latéral */}
      <aside style={{
        width: '250px',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '20px 0'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ecf0f1' }}>
          Gestion Scolaire
        </h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/dashboard" 
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  backgroundColor: '#34495e',
                  borderRadius: '4px',
                  margin: '0 10px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4a5f7f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/eleves" 
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  backgroundColor: '#34495e',
                  borderRadius: '4px',
                  margin: '0 10px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4a5f7f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                Élèves
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/classes" 
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  backgroundColor: '#34495e',
                  borderRadius: '4px',
                  margin: '0 10px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4a5f7f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                Classes
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/enseignants" 
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  backgroundColor: '#34495e',
                  borderRadius: '4px',
                  margin: '0 10px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4a5f7f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                Enseignants
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/notes" 
                style={{
                  display: 'block',
                  padding: '12px 20px',
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  backgroundColor: '#34495e',
                  borderRadius: '4px',
                  margin: '0 10px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4a5f7f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#34495e'}
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Zone de contenu principale */}
      <main style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#ffffff',
          padding: '20px 30px',
          borderBottom: '1px solid #ddd',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ margin: 0, color: '#2c3e50', fontSize: '24px' }}>
            Plateforme de Gestion Scolaire
          </h1>
        </header>

        {/* Contenu des pages */}
        <div style={{ padding: '30px' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
