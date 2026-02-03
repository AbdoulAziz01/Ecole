const Header = () => {
  const handleLogout = () => {
    console.log('Déconnexion...');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1 className="header-title">UCAO - Plateforme de Gestion Scolaire</h1>
          <p className="header-subtitle">Tableau de bord principal</p>
        </div>
      </div>

      <div className="header-actions">
        <button className="header-logout" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
};

export default Header;
