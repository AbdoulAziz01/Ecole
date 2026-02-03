import { useState } from 'react';

const Enseignants = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des enseignants
  const enseignantsData = [
    {
      id: 1,
      nom: 'Dubois',
      prenom: 'Marie',
      matiere: 'Mathématiques',
      email: 'marie.dubois@ecole.fr',
      telephone: '06 12 34 56 78',
      classes: ['3ème A', '2ème A'],
      experience: 8,
      statut: 'Titulaire'
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Jean',
      matiere: 'Français',
      email: 'jean.martin@ecole.fr',
      telephone: '06 23 45 67 89',
      classes: ['3ème B', '1ère A'],
      experience: 12,
      statut: 'Titulaire'
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Sophie',
      matiere: 'Histoire-Géographie',
      email: 'sophie.bernard@ecole.fr',
      telephone: '06 34 56 78 90',
      classes: ['2ème A', '2ème B'],
      experience: 6,
      statut: 'Contractuel'
    },
    {
      id: 4,
      nom: 'Petit',
      prenom: 'Lucas',
      matiere: 'Physique-Chimie',
      email: 'lucas.petit@ecole.fr',
      telephone: '06 45 67 89 01',
      classes: ['1ère A', 'Terminale S'],
      experience: 15,
      statut: 'Titulaire'
    },
    {
      id: 5,
      nom: 'Robert',
      prenom: 'Emma',
      matiere: 'Anglais',
      email: 'emma.robert@ecole.fr',
      telephone: '06 56 78 90 12',
      classes: ['3ème A', '3ème B', '2ème B'],
      experience: 4,
      statut: 'Contractuel'
    },
    {
      id: 6,
      nom: 'Durand',
      prenom: 'Hugo',
      matiere: 'SVT',
      email: 'hugo.durand@ecole.fr',
      telephone: '06 67 89 01 23',
      classes: ['1ère B', 'Terminale ES'],
      experience: 10,
      statut: 'Titulaire'
    },
    {
      id: 7,
      nom: 'Leroy',
      prenom: 'Chloé',
      matiere: 'EPS',
      email: 'chloe.leroy@ecole.fr',
      telephone: '06 78 90 12 34',
      classes: ['Toutes classes'],
      experience: 7,
      statut: 'Titulaire'
    },
    {
      id: 8,
      nom: 'Moreau',
      prenom: 'Nathan',
      matiere: 'Technologie',
      email: 'nathan.moreau@ecole.fr',
      telephone: '06 89 01 23 45',
      classes: ['3ème A', '3ème B'],
      experience: 5,
      statut: 'Contractuel'
    }
  ];

  // Filtrer les enseignants selon la recherche
  const filteredEnseignants = enseignantsData.filter(enseignant =>
    enseignant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enseignant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enseignant.matiere.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir la couleur selon le statut
  const getStatutColor = (statut) => {
    return statut === 'Titulaire' ? '#27ae60' : '#f39c12';
  };

  return (
    <div>
      {/* En-tête avec bouton Ajouter */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ 
          color: '#2c3e50', 
          margin: 0,
          fontSize: '28px'
        }}>
          Liste des Enseignants
        </h2>
        <button
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#229954'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
        >
          + Ajouter un enseignant
        </button>
      </div>

      {/* Barre de recherche */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou matière..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      {/* Grille des enseignants */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '20px'
      }}>
        {filteredEnseignants.map((enseignant) => (
          <div
            key={enseignant.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '25px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${getStatutColor(enseignant.statut)}`,
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            {/* En-tête de la carte */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: '#2c3e50', fontSize: '20px' }}>
                  {enseignant.prenom} {enseignant.nom}
                </h3>
                <span style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}>
                  {enseignant.matiere}
                </span>
              </div>
              <span style={{
                backgroundColor: getStatutColor(enseignant.statut),
                color: 'white',
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {enseignant.statut}
              </span>
            </div>

            {/* Informations de l'enseignant */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>📧</span>
                <span style={{ color: '#777', fontSize: '14px' }}>{enseignant.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>📱</span>
                <span style={{ color: '#777', fontSize: '14px' }}>{enseignant.telephone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>📚</span>
                <span style={{ color: '#777', fontSize: '14px' }}>
                  {enseignant.classes.join(', ')}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>💼</span>
                <span style={{ color: '#777', fontSize: '14px' }}>
                  {enseignant.experience} ans d'expérience
                </span>
              </div>
            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              gap: '10px',
              borderTop: '1px solid #eee',
              paddingTop: '15px'
            }}>
              <button
                style={{
                  flex: 1,
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                Voir détails
              </button>
              <button
                style={{
                  flex: 1,
                  backgroundColor: '#95a5a6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#7f8c8d'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#95a5a6'}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Statistiques */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Total Enseignants</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
            {enseignantsData.length}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Titulaires</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>
            {enseignantsData.filter(e => e.statut === 'Titulaire').length}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Expérience moyenne</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#f39c12' }}>
            {Math.round(enseignantsData.reduce((acc, e) => acc + e.experience, 0) / enseignantsData.length)} ans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enseignants;
