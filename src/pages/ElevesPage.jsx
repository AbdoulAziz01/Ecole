import { useState } from 'react';

const ElevesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des élèves
  const elevesData = [
    { id: 1, nom: 'Dupont', prenom: 'Marie', classe: '3ème A', dateNaissance: '15/03/2010', email: 'marie.dupont@ecole.fr', statut: 'Actif' },
    { id: 2, nom: 'Martin', prenom: 'Thomas', classe: '3ème A', dateNaissance: '22/07/2010', email: 'thomas.martin@ecole.fr', statut: 'Actif' },
    { id: 3, nom: 'Bernard', prenom: 'Sophie', classe: '3ème B', dateNaissance: '08/01/2010', email: 'sophie.bernard@ecole.fr', statut: 'Suspendu' },
    { id: 4, nom: 'Petit', prenom: 'Lucas', classe: '2ème A', dateNaissance: '30/11/2009', email: 'lucas.petit@ecole.fr', statut: 'Actif' },
    { id: 5, nom: 'Robert', prenom: 'Emma', classe: '2ème A', dateNaissance: '14/05/2010', email: 'emma.robert@ecole.fr', statut: 'Actif' },
    { id: 6, nom: 'Durand', prenom: 'Hugo', classe: '2ème B', dateNaissance: '03/09/2009', email: 'hugo.durand@ecole.fr', statut: 'Actif' }
  ];

  // Filtrer les élèves
  const filteredEleves = elevesData.filter(eleve => 
    eleve.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.classe.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir la couleur du statut
  const getStatutColor = (statut) => {
    switch(statut) {
      case 'Actif': return { bg: '#D1FAE5', text: '#10B981' };
      case 'Suspendu': return { bg: '#FEE2E2', text: '#EF4444' };
      default: return { bg: '#F3F4F6', text: '#6B7280' };
    }
  };

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
              Liste des Élèves
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-500)',
              margin: 0
            }}>
              Gérez l'ensemble des élèves de l'établissement
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
            ➕ Ajouter un élève
          </button>
        </div>
      </div>

      {/* Recherche */}
      <div className="bg-white rounded-lg shadow-sm p-lg mb-xl">
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher par nom, prénom ou classe..."
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

      {/* Tableau des élèves */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Liste des élèves</h2>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Classe</th>
                <th>Date de naissance</th>
                <th>Email</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEleves.map((eleve) => {
                const statutColors = getStatutColor(eleve.statut);
                return (
                  <tr key={eleve.id}>
                    <td>#{eleve.id}</td>
                    <td style={{ fontWeight: '500' }}>{eleve.nom}</td>
                    <td>{eleve.prenom}</td>
                    <td>
                      <span className="badge badge-info">{eleve.classe}</span>
                    </td>
                    <td>{eleve.dateNaissance}</td>
                    <td>{eleve.email}</td>
                    <td>
                      <span className="badge" style={{
                        backgroundColor: statutColors.bg,
                        color: statutColors.text
                      }}>
                        {eleve.statut === 'Actif' ? '✅' : '⚠️'} {eleve.statut}
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message si aucun résultat */}
      {filteredEleves.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-xl text-center">
          <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: 'var(--spacing-sm)' }}>
            Aucun élève trouvé
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', margin: 0 }}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default ElevesPage;
