import { useState } from 'react';

const EnseignantsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des enseignants
  const enseignantsData = [
    { id: 1, nom: 'Dubois', prenom: 'Marie', matiere: 'Mathématiques', email: 'marie.dubois@ecole.fr', statut: 'Titulaire' },
    { id: 2, nom: 'Martin', prenom: 'Jean', matiere: 'Français', email: 'jean.martin@ecole.fr', statut: 'Titulaire' },
    { id: 3, nom: 'Bernard', prenom: 'Sophie', matiere: 'Histoire-Géographie', email: 'sophie.bernard@ecole.fr', statut: 'Contractuel' },
    { id: 4, nom: 'Petit', prenom: 'Lucas', matiere: 'Physique-Chimie', email: 'lucas.petit@ecole.fr', statut: 'Titulaire' },
    { id: 5, nom: 'Robert', prenom: 'Emma', matiere: 'Anglais', email: 'emma.robert@ecole.fr', statut: 'Contractuel' },
    { id: 6, nom: 'Durand', prenom: 'Hugo', matiere: 'SVT', email: 'hugo.durand@ecole.fr', statut: 'Titulaire' }
  ];

  // Filtrer les enseignants
  const filteredEnseignants = enseignantsData.filter(enseignant => 
    enseignant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enseignant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enseignant.matiere.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir la couleur du statut
  const getStatutColor = (statut) => {
    switch(statut) {
      case 'Titulaire': return { bg: '#D1FAE5', text: '#10B981' };
      case 'Contractuel': return { bg: '#FEF3C7', text: '#F59E0B' };
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
              Liste des Enseignants
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-500)',
              margin: 0
            }}>
              Gérez l'ensemble des enseignants de l'établissement
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
            ➕ Ajouter un enseignant
          </button>
        </div>
      </div>

      {/* Recherche */}
      <div className="bg-white rounded-lg shadow-sm p-lg mb-xl">
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher par nom, prénom ou matière..."
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

      {/* Tableau des enseignants */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Liste des enseignants</h2>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Matière</th>
                <th>Email</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnseignants.map((enseignant) => {
                const statutColors = getStatutColor(enseignant.statut);
                return (
                  <tr key={enseignant.id}>
                    <td>#{enseignant.id}</td>
                    <td style={{ fontWeight: '500' }}>{enseignant.nom}</td>
                    <td>{enseignant.prenom}</td>
                    <td>
                      <span className="badge badge-info">{enseignant.matiere}</span>
                    </td>
                    <td>{enseignant.email}</td>
                    <td>
                      <span className="badge" style={{
                        backgroundColor: statutColors.bg,
                        color: statutColors.text
                      }}>
                        {enseignant.statut === 'Titulaire' ? '👨‍🏫' : '📝'} {enseignant.statut}
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
      {filteredEnseignants.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-xl text-center">
          <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: 'var(--spacing-sm)' }}>
            Aucun enseignant trouvé
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', margin: 0 }}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default EnseignantsPage;
