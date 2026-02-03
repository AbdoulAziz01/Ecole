const Dashboard = () => {
  const stats = [
    { title: 'Total Élèves', value: '245', color: '#3498db', icon: '👥' },
    { title: 'Total Classes', value: '12', color: '#2ecc71', icon: '📚' },
    { title: 'Total Enseignants', value: '28', color: '#e74c3c', icon: '👨‍🏫' },
    { title: 'Moyenne Générale', value: '14.5', color: '#f39c12', icon: '📊' }
  ];

  const recentActivities = [
    { id: 1, action: 'Nouvel élève inscrit', details: 'Marie Dupont - Classe 3ème A', time: 'Il y a 2 heures' },
    { id: 2, action: 'Note ajoutée', details: 'Mathématiques - Classe 2ème B', time: 'Il y a 4 heures' },
    { id: 3, action: 'Enseignant ajouté', details: 'M. Martin - Physique-Chimie', time: 'Hier' },
    { id: 4, action: 'Classe modifiée', details: 'Classe 1ère C - Effectif mis à jour', time: 'Hier' }
  ];

  return (
    <div>
      <h2 style={{ 
        color: '#2c3e50', 
        marginBottom: '30px',
        fontSize: '28px'
      }}>
        Dashboard
      </h2>

      {/* Cartes de statistiques */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderLeft: `4px solid ${stat.color}`,
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <span style={{ fontSize: '32px', marginRight: '15px' }}>{stat.icon}</span>
              <h3 style={{ margin: 0, color: '#555', fontSize: '16px', fontWeight: 'normal' }}>
                {stat.title}
              </h3>
            </div>
            <p style={{
              margin: 0,
              fontSize: '32px',
              fontWeight: 'bold',
              color: stat.color
            }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Activités récentes */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '25px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          color: '#2c3e50',
          fontSize: '20px'
        }}>
          Activités Récentes
        </h3>
        
        <div style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              style={{
                padding: '15px 0',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '5px' }}>
                  {activity.action}
                </div>
                <div style={{ color: '#777', fontSize: '14px' }}>
                  {activity.details}
                </div>
              </div>
              <div style={{ color: '#999', fontSize: '12px' }}>
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Graphique simple (placeholder) */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '25px',
        marginTop: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 20px 0',
          color: '#2c3e50',
          fontSize: '20px'
        }}>
          Évolution des Notes
        </h3>
        <div style={{
          height: '200px',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999'
        }}>
          [Graphique à implémenter]
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
