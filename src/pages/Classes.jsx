import { useState } from 'react';

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des classes
  const classesData = [
    { 
      id: 1, 
      nom: '3ème A', 
      niveau: 'Troisième', 
      effectif: 28, 
      professeurPrincipal: 'Mme Dubois',
      salle: 'A101',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 2, 
      nom: '3ème B', 
      niveau: 'Troisième', 
      effectif: 25, 
      professeurPrincipal: 'M. Martin',
      salle: 'A102',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 3, 
      nom: '2ème A', 
      niveau: 'Deuxième', 
      effectif: 30, 
      professeurPrincipal: 'Mme Bernard',
      salle: 'B201',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 4, 
      nom: '2ème B', 
      niveau: 'Deuxième', 
      effectif: 27, 
      professeurPrincipal: 'M. Petit',
      salle: 'B202',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 5, 
      nom: '1ère A', 
      niveau: 'Première', 
      effectif: 32, 
      professeurPrincipal: 'Mme Robert',
      salle: 'C301',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 6, 
      nom: '1ère B', 
      niveau: 'Première', 
      effectif: 29, 
      professeurPrincipal: 'M. Durand',
      salle: 'C302',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 7, 
      nom: 'Terminale S', 
      niveau: 'Terminale', 
      effectif: 24, 
      professeurPrincipal: 'M. Leroy',
      salle: 'D401',
      anneeScolaire: '2024-2025'
    },
    { 
      id: 8, 
      nom: 'Terminale ES', 
      niveau: 'Terminale', 
      effectif: 26, 
      professeurPrincipal: 'Mme Moreau',
      salle: 'D402',
      anneeScolaire: '2024-2025'
    }
  ];

  // Filtrer les classes selon la recherche
  const filteredClasses = classesData.filter(classe =>
    classe.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classe.niveau.toLowerCase().includes(searchTerm.toLowerCase()) ||
    classe.professeurPrincipal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir la couleur selon l'effectif
  const getEffectifColor = (effectif) => {
    if (effectif < 25) return '#27ae60';
    if (effectif < 30) return '#f39c12';
    return '#e74c3c';
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
          Liste des Classes
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
          + Ajouter une classe
        </button>
      </div>

      {/* Barre de recherche */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom, niveau ou professeur..."
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

      {/* Grille des classes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '20px'
      }}>
        {filteredClasses.map((classe) => (
          <div
            key={classe.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '25px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${getEffectifColor(classe.effectif)}`,
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
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: 0, color: '#2c3e50', fontSize: '20px' }}>
                {classe.nom}
              </h3>
              <span style={{
                backgroundColor: getEffectifColor(classe.effectif),
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {classe.effectif} élèves
              </span>
            </div>

            {/* Informations de la classe */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>Niveau:</span>
                <span style={{ color: '#777' }}>{classe.niveau}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>Prof. principal:</span>
                <span style={{ color: '#777' }}>{classe.professeurPrincipal}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>Salle:</span>
                <span style={{ color: '#777' }}>{classe.salle}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#555', marginRight: '8px' }}>Année:</span>
                <span style={{ color: '#777' }}>{classe.anneeScolaire}</span>
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
                Voir les élèves
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
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Total Classes</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
            {classesData.length}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Total Élèves</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>
            {classesData.reduce((acc, classe) => acc + classe.effectif, 0)}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Effectif Moyen</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#f39c12' }}>
            {Math.round(classesData.reduce((acc, classe) => acc + classe.effectif, 0) / classesData.length)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Classes;
