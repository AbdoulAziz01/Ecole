import { useState } from 'react';

const NotesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Données fictives des notes
  const notesData = [
    { id: 1, eleve: 'Marie Dupont', classe: '3ème A', matiere: 'Mathématiques', note: 15, appreciation: 'Bon travail', date: '15/01/2025' },
    { id: 2, eleve: 'Thomas Martin', classe: '3ème A', matiere: 'Mathématiques', note: 12, appreciation: 'Peut mieux faire', date: '15/01/2025' },
    { id: 3, eleve: 'Sophie Bernard', classe: '3ème B', matiere: 'Français', note: 17, appreciation: 'Excellent', date: '16/01/2025' },
    { id: 4, eleve: 'Lucas Petit', classe: '2ème A', matiere: 'Physique-Chimie', note: 14, appreciation: 'Assez bien', date: '16/01/2025' },
    { id: 5, eleve: 'Emma Robert', classe: '2ème A', matiere: 'Anglais', note: 18, appreciation: 'Très bon niveau', date: '17/01/2025' },
    { id: 6, eleve: 'Hugo Durand', classe: '2ème B', matiere: 'Histoire-Géographie', note: 13, appreciation: 'Moyen', date: '17/01/2025' }
  ];

  // Filtrer les notes
  const filteredNotes = notesData.filter(note => 
    note.eleve.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.matiere.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.appreciation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtenir la couleur selon la note
  const getNoteColor = (note) => {
    if (note >= 16) return { bg: '#D1FAE5', text: '#10B981', label: 'Excellent', emoji: '🏆' };
    if (note >= 14) return { bg: '#DBEAFE', text: '#3B82F6', label: 'Bien', emoji: '👍' };
    if (note >= 12) return { bg: '#FEF3C7', text: '#F59E0B', label: 'Assez bien', emoji: '👌' };
    if (note >= 10) return { bg: '#FED7AA', text: '#FB923C', label: 'Passable', emoji: '😐' };
    return { bg: '#FEE2E2', text: '#EF4444', label: 'Insuffisant', emoji: '❌' };
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
              Gestion des Notes
            </h1>
            <p style={{
              fontSize: '1rem',
              color: 'var(--gray-500)',
              margin: 0
            }}>
              Consultez et gérez l'ensemble des notes des élèves
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
            ➕ Ajouter une note
          </button>
        </div>
      </div>

      {/* Recherche */}
      <div className="bg-white rounded-lg shadow-sm p-lg mb-xl">
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Rechercher par élève, matière ou appréciation..."
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

      {/* Tableau des notes */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Liste des notes</h2>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Élève</th>
                <th>Classe</th>
                <th>Matière</th>
                <th>Note</th>
                <th>Appréciation</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotes.map((note) => {
                const noteColors = getNoteColor(note.note);
                return (
                  <tr key={note.id}>
                    <td style={{ fontWeight: '500' }}>{note.eleve}</td>
                    <td>
                      <span className="badge badge-info">{note.classe}</span>
                    </td>
                    <td>{note.matiere}</td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                        <span style={{
                          backgroundColor: noteColors.bg,
                          color: noteColors.text,
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          minWidth: '50px',
                          textAlign: 'center'
                        }}>
                          {noteColors.emoji} {note.note}/20
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          color: noteColors.text,
                          fontWeight: '500'
                        }}>
                          {noteColors.label}
                        </span>
                      </div>
                    </td>
                    <td>{note.appreciation}</td>
                    <td>{note.date}</td>
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
      {filteredNotes.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-xl text-center">
          <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔍</div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: 'var(--spacing-sm)' }}>
            Aucune note trouvée
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-500)', margin: 0 }}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default NotesPage;
