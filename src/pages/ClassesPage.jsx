import { useState } from 'react';

const ClassesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des classes
  const classesData = [
    { id: 1, nom: '3ème A', niveau: 'Troisième', effectif: 28, professeurPrincipal: 'Mme Dubois', salle: 'A101' },
    { id: 2, nom: '3ème B', niveau: 'Troisième', effectif: 25, professeurPrincipal: 'M. Martin', salle: 'A102' },
    { id: 3, nom: '2ème A', niveau: 'Deuxième', effectif: 30, professeurPrincipal: 'Mme Bernard', salle: 'B201' },
    { id: 4, nom: '2ème B', niveau: 'Deuxième', effectif: 27, professeurPrincipal: 'M. Petit', salle: 'B202' },
    { id: 5, nom: '1ère A', niveau: 'Première', effectif: 32, professeurPrincipal: 'Mme Robert', salle: 'C301' },
    { id: 6, nom: '1ère B', niveau: 'Première', effectif: 29, professeurPrincipal: 'M. Durand', salle: 'C302' }
  ];

  // Filtrer les classes
  const filteredClasses = classesData.filter(classe => 
    classe.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classe.niveau.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classe.professeurPrincipal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--gray-900)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              Liste des Classes
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-500)',
              margin: 0
            }}>
              Gérez l'ensemble des classes de l'établissement
            </p>
          </div>
          <button
            className="bg-primary text-white rounded-lg px-md py-sm hover-lift transition cursor-pointer"
            style={{
              padding: 'var(--spacing-sm) var(--spacing-lg)',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}
          >
            ➕ Ajouter une classe
          </button>
        </div>
      </div>

      {/* Recherche */}
      <div className="bg-white rounded-lg shadow-sm p-lg mb-xl">
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher par nom, niveau ou professeur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              padding: 'var(--spacing-sm) var(--spacing-md)',
              border: '1px solid var(--gray-300)',
              borderRadius: 'var(--border-radius)',
              fontSize: '0.875rem'
            }}
          />
          <button
            className="bg-gray-100 text-gray-700 rounded-lg px-md py-sm hover-lift transition cursor-pointer"
            style={{
              padding: 'var(--spacing-sm) var(--spacing-md)',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: '1px solid var(--gray-300)',
              backgroundColor: 'var(--gray-100)'
            }}
          >
            🔄 Réinitialiser
          </button>
        </div>
      </div>

      {/* Tableau des classes */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Liste des classes</h2>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Niveau</th>
                <th>Effectif</th>
                <th>Professeur principal</th>
                <th>Salle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.map((classe) => (
                <tr key={classe.id}>
                  <td>#{classe.id}</td>
                  <td style={{ fontWeight: '500' }}>{classe.nom}</td>
                  <td>{classe.niveau}</td>
                  <td>
                    <span className="badge badge-info">👥 {classe.effectif} élèves</span>
                  </td>
                  <td>{classe.professeurPrincipal}</td>
                  <td>
                    <span className="badge" style={{
                      backgroundColor: 'var(--primary-blue-bg)',
                      color: 'var(--primary-blue)'
                    }}>
                      📍 {classe.salle}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: 'var(--spacing-xs)', justifyContent: 'center' }}>
                      <button className="text-blue-600">👁️</button>
                      <button className="text-blue-600">✏️</button>
                      <button className="text-red-600">🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message si aucun résultat */}
      {filteredClasses.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-xl text-center">
          <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: 'var(--spacing-sm)' }}>
            Aucune classe trouvée
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', margin: 0 }}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default ClassesPage;
