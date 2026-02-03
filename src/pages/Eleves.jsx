import { useState } from 'react';

const Eleves = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des élèves
  const elevesData = [
    { id: 1, nom: 'Dupont', prenom: 'Marie', classe: '3ème A', age: 14, email: 'marie.dupont@ecole.fr' },
    { id: 2, nom: 'Martin', prenom: 'Thomas', classe: '3ème A', age: 15, email: 'thomas.martin@ecole.fr' },
    { id: 3, nom: 'Bernard', prenom: 'Sophie', classe: '3ème B', age: 14, email: 'sophie.bernard@ecole.fr' },
    { id: 4, nom: 'Petit', prenom: 'Lucas', classe: '2ème A', age: 15, email: 'lucas.petit@ecole.fr' },
    { id: 5, nom: 'Robert', prenom: 'Emma', classe: '2ème A', age: 15, email: 'emma.robert@ecole.fr' },
    { id: 6, nom: 'Durand', prenom: 'Hugo', classe: '2ème B', age: 16, email: 'hugo.durand@ecole.fr' },
    { id: 7, nom: 'Leroy', prenom: 'Chloé', classe: '1ère A', age: 16, email: 'chloe.leroy@ecole.fr' },
    { id: 8, nom: 'Moreau', prenom: 'Nathan', classe: '1ère A', age: 17, email: 'nathan.moreau@ecole.fr' },
    { id: 9, nom: 'Simon', prenom: 'Léa', classe: '1ère B', age: 16, email: 'lea.simon@ecole.fr' },
    { id: 10, nom: 'Laurent', prenom: 'Gabriel', classe: 'Terminale S', age: 18, email: 'gabriel.laurent@ecole.fr' }
  ];

  // Filtrer les élèves selon la recherche
  const filteredEleves = elevesData.filter(eleve =>
    eleve.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    eleve.classe.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          Liste des Élèves
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
          + Ajouter un élève
        </button>
      </div>

      {/* Barre de recherche */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou classe..."
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

      {/* Tableau des élèves */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>ID</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Nom</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Prénom</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Classe</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Âge</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Email</th>
              <th style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEleves.map((eleve, index) => (
              <tr
                key={eleve.id}
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8f4f8'}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa';
                }}
              >
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{eleve.id}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>{eleve.nom}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{eleve.prenom}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                  <span style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {eleve.classe}
                  </span>
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>{eleve.age} ans</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', color: '#7f8c8d' }}>
                  {eleve.email}
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                  <button
                    style={{
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      marginRight: '5px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                  >
                    Modifier
                  </button>
                  <button
                    style={{
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Statistiques */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Total Élèves</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
            {elevesData.length}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Âge Moyen</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>
            {Math.round(elevesData.reduce((acc, eleve) => acc + eleve.age, 0) / elevesData.length)} ans
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flex: 1
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Classes</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>
            {[...new Set(elevesData.map(e => e.classe))].length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eleves;
