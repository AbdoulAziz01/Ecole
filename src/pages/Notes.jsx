import { useState } from 'react';

const Notes = () => {
  const [selectedClasse, setSelectedClasse] = useState('all');
  const [selectedMatiere, setSelectedMatiere] = useState('all');

  // Données fictives des notes
  const notesData = [
    {
      id: 1,
      eleve: 'Marie Dupont',
      classe: '3ème A',
      matiere: 'Mathématiques',
      note: 15,
      appreciation: 'Bon travail',
      date: '15/01/2025',
      type: 'Devoir surveillé'
    },
    {
      id: 2,
      eleve: 'Thomas Martin',
      classe: '3ème A',
      matiere: 'Mathématiques',
      note: 12,
      appreciation: 'Peut mieux faire',
      date: '15/01/2025',
      type: 'Devoir surveillé'
    },
    {
      id: 3,
      eleve: 'Sophie Bernard',
      classe: '3ème B',
      matiere: 'Français',
      note: 17,
      appreciation: 'Excellent',
      date: '16/01/2025',
      type: 'Composition'
    },
    {
      id: 4,
      eleve: 'Lucas Petit',
      classe: '2ème A',
      matiere: 'Physique-Chimie',
      note: 14,
      appreciation: 'Assez bien',
      date: '16/01/2025',
      type: 'TP'
    },
    {
      id: 5,
      eleve: 'Emma Robert',
      classe: '2ème A',
      matiere: 'Anglais',
      note: 18,
      appreciation: 'Très bon niveau',
      date: '17/01/2025',
      type: 'Oral'
    },
    {
      id: 6,
      eleve: 'Hugo Durand',
      classe: '2ème B',
      matiere: 'Histoire-Géographie',
      note: 13,
      appreciation: 'Moyen',
      date: '17/01/2025',
      type: 'Devoir maison'
    },
    {
      id: 7,
      eleve: 'Chloé Leroy',
      classe: '1ère A',
      matiere: 'SVT',
      note: 16,
      appreciation: 'Bon travail',
      date: '18/01/2025',
      type: 'Devoir surveillé'
    },
    {
      id: 8,
      eleve: 'Nathan Moreau',
      classe: '1ère A',
      matiere: 'Mathématiques',
      note: 11,
      appreciation: 'À revoir',
      date: '18/01/2025',
      type: 'Devoir surveillé'
    },
    {
      id: 9,
      eleve: 'Léa Simon',
      classe: '1ère B',
      matiere: 'Philosophie',
      note: 15,
      appreciation: 'Bon raisonnement',
      date: '19/01/2025',
      type: 'Dissertation'
    },
    {
      id: 10,
      eleve: 'Gabriel Laurent',
      classe: 'Terminale S',
      matiere: 'Physique-Chimie',
      note: 19,
      appreciation: 'Exceptionnel',
      date: '19/01/2025',
      type: 'Concours'
    }
  ];

  // Liste des classes et matières uniques
  const classes = ['all', ...new Set(notesData.map(n => n.classe))];
  const matieres = ['all', ...new Set(notesData.map(n => n.matiere))];

  // Filtrer les notes
  const filteredNotes = notesData.filter(note => {
    const classeMatch = selectedClasse === 'all' || note.classe === selectedClasse;
    const matiereMatch = selectedMatiere === 'all' || note.matiere === selectedMatiere;
    return classeMatch && matiereMatch;
  });

  // Obtenir la couleur selon la note
  const getNoteColor = (note) => {
    if (note >= 16) return '#27ae60';
    if (note >= 12) return '#3498db';
    if (note >= 10) return '#f39c12';
    return '#e74c3c';
  };

  // Calculer les statistiques
  const stats = {
    total: filteredNotes.length,
    moyenne: filteredNotes.length > 0 
      ? (filteredNotes.reduce((acc, note) => acc + note.note, 0) / filteredNotes.length).toFixed(1)
      : 0,
    excellent: filteredNotes.filter(n => n.note >= 16).length,
    insuffisant: filteredNotes.filter(n => n.note < 10).length
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
          Gestion des Notes
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
          + Ajouter une note
        </button>
      </div>

      {/* Filtres */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            color: '#555', 
            fontWeight: 'bold' 
          }}>
            Classe:
          </label>
          <select
            value={selectedClasse}
            onChange={(e) => setSelectedClasse(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            {classes.map(classe => (
              <option key={classe} value={classe}>
                {classe === 'all' ? 'Toutes les classes' : classe}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '5px', 
            color: '#555', 
            fontWeight: 'bold' 
          }}>
            Matière:
          </label>
          <select
            value={selectedMatiere}
            onChange={(e) => setSelectedMatiere(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            {matieres.map(matiere => (
              <option key={matiere} value={matiere}>
                {matiere === 'all' ? 'Toutes les matières' : matiere}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistiques */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Total Notes</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#3498db' }}>
            {stats.total}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Moyenne</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#f39c12' }}>
            {stats.moyenne}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Excellent (≥16)</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>
            {stats.excellent}
          </p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>Insuffisant (&lt;10)</h4>
          <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#e74c3c' }}>
            {stats.insuffisant}
          </p>
        </div>
      </div>

      {/* Tableau des notes */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Élève</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Classe</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Matière</th>
              <th style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>Note</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Type</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Date</th>
              <th style={{ padding: '15px', textAlign: 'left', fontWeight: 'bold' }}>Appréciation</th>
              <th style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotes.map((note, index) => (
              <tr
                key={note.id}
                style={{
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e8f4f8'}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f8f9fa';
                }}
              >
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
                  {note.eleve}
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                  <span style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {note.classe}
                  </span>
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                  {note.matiere}
                </td>
                <td style={{ 
                  padding: '15px', 
                  borderBottom: '1px solid #eee', 
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: getNoteColor(note.note),
                  fontSize: '16px'
                }}>
                  {note.note}/20
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                  <span style={{
                    backgroundColor: '#ecf0f1',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {note.type}
                  </span>
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>
                  {note.date}
                </td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', color: '#7f8c8d' }}>
                  {note.appreciation}
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
    </div>
  );
};

export default Notes;
