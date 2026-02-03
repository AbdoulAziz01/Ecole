import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard'
    },
    {
      name: 'Élèves',
      path: '/eleves'
    },
    {
      name: 'Classes',
      path: '/classes'
    },
    {
      name: 'Enseignants',
      path: '/enseignants'
    },
    {
      name: 'Notes',
      path: '/notes'
    }
  ];

  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    console.log('Déconnexion depuis la sidebar...');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          UCAO
        </div>
        <div className="sidebar-subtitle">
          Gestion Scolaire
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
          >
            <span className="sidebar-link-text">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-logout">
        <button 
          className="sidebar-logout-link" 
          onClick={handleLogout}
        >
          <span className="sidebar-link-text">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
