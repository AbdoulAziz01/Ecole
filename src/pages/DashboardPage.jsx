const DashboardPage = () => {
  // Données fictives pour les statistiques
  const stats = [
    {
      title: 'Total Élèves',
      value: '245',
      color: 'var(--primary-blue)',
      bgColor: 'var(--primary-blue-bg)',
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'Total Classes',
      value: '12',
      color: '#10B981',
      bgColor: '#D1FAE5',
      trend: '+2%',
      trendUp: true
    },
    {
      title: 'Total Enseignants',
      value: '28',
      color: '#F59E0B',
      bgColor: '#FEF3C7',
      trend: '+5%',
      trendUp: true
    },
    {
      title: 'Total Notes',
      value: '1,234',
      color: '#8B5CF6',
      bgColor: '#EDE9FE',
      trend: '+8%',
      trendUp: true
    }
  ];

  // Données fictives pour les activités récentes
  const recentActivities = [
    {
      id: 1,
      action: 'Nouvel élève inscrit',
      details: 'Marie Dupont - Classe 3ème A',
      time: 'Il y a 2 heures',
      color: 'var(--primary-blue)'
    },
    {
      id: 2,
      action: 'Note ajoutée',
      details: 'Mathématiques - Classe 2ème B',
      time: 'Il y a 4 heures',
      color: '#10B981'
    },
    {
      id: 3,
      action: 'Enseignant ajouté',
      details: 'M. Martin - Physique-Chimie',
      time: 'Hier',
      color: '#F59E0B'
    },
    {
      id: 4,
      action: 'Classe modifiée',
      details: 'Classe 1ère C - Effectif mis à jour',
      time: 'Hier',
      color: '#8B5CF6'
    }
  ];

  // Données fictives pour les performances
  const performanceData = [
    {
      classe: '3ème A',
      moyenne: '14.5',
      evolution: '+0.5',
      color: 'var(--primary-blue)'
    },
    {
      classe: '3ème B',
      moyenne: '13.8',
      evolution: '-0.2',
      color: '#10B981'
    },
    {
      classe: '2ème A',
      moyenne: '15.2',
      evolution: '+1.1',
      color: '#F59E0B'
    },
    {
      classe: '2ème B',
      moyenne: '14.1',
      evolution: '+0.3',
      color: '#8B5CF6'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: 'var(--gray-900)',
          marginBottom: 'var(--spacing-sm)'
        }}>
          Dashboard
        </h1>
        <p style={{
          fontSize: '1rem',
          color: 'var(--gray-500)',
          margin: 0
        }}>
          Bienvenue sur votre tableau de bord. Voici un aperçu de votre établissement.
        </p>
      </div>

      {/* Cartes de statistiques */}
      <div className="dashboard-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-header">
              <div className="stat-card-icon">
              </div>
              <div className={`flex items-center gap-sm text-sm font-semibold ${
                stat.trendUp ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{stat.trend}</span>
                <span>{stat.trendUp ? '▲' : '▼'}</span>
              </div>
            </div>
            
            <div>
              <h3 className="stat-card-label">
                {stat.title}
              </h3>
              <p className="stat-card-value">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Deuxième rangée : Activités récentes et Performances */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-xl)'
      }}>
        {/* Activités récentes */}
        <div className="table-container">
          <div className="table-header">
            <h2 className="table-title">
              Activités Récentes
            </h2>
            <button style={{
              color: 'var(--primary-blue)',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '0.875rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Voir tout →
            </button>
          </div>
          
          <div style={{ padding: 'var(--spacing-lg)' }}>
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-md p-sm rounded-lg hover:bg-gray-50 transition cursor-pointer"
                style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius)',
                  marginBottom: 'var(--spacing-md)'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: activity.color + '20',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                  color: activity.color
                }}>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontWeight: '500',
                    color: 'var(--gray-900)',
                    marginBottom: '2px'
                  }}>
                    {activity.action}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--gray-500)',
                    marginBottom: '2px'
                  }}>
                    {activity.details}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--gray-400)'
                  }}>
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performances des classes */}
        <div className="table-container">
          <div className="table-header">
            <h2 className="table-title">
              Performances des Classes
            </h2>
            <button style={{
              color: 'var(--primary-blue)',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '0.875rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              Détails →
            </button>
          </div>
          
          <div style={{ padding: 'var(--spacing-lg)' }}>
            {performanceData.map((perf, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-sm rounded-lg border border-gray-200"
                style={{
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius)',
                  marginBottom: 'var(--spacing-md)'
                }}
              >
                <div className="flex items-center gap-md">
                  <div style={{
                    width: '8px',
                    height: '40px',
                    backgroundColor: perf.color,
                    borderRadius: 'var(--border-radius)'
                  }} />
                  <div>
                    <div style={{
                      fontWeight: '500',
                      color: 'var(--gray-900)',
                      marginBottom: '2px'
                    }}>
                      {perf.classe}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: 'var(--gray-500)'
                    }}>
                      Moyenne: {perf.moyenne}/20
                    </div>
                  </div>
                </div>
                <div className={`flex items-center gap-sm text-sm font-semibold ${
                  perf.evolution.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  <span>{perf.evolution}</span>
                  <span>{perf.evolution.startsWith('+') ? '▲' : '▼'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section rapide - Actions */}
      <div style={{
        marginTop: 'var(--spacing-2xl)',
        backgroundColor: 'var(--primary-blue-bg)',
        borderRadius: 'var(--border-radius-xl)',
        padding: 'var(--spacing-xl)',
        border: '1px solid var(--primary-blue-lighter)'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'var(--primary-blue)',
          marginBottom: 'var(--spacing-lg)',
          margin: '0 0 var(--spacing-lg) 0'
        }}>
          Actions Rapides
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-md)'
        }}>
          <button
            className="bg-white rounded-lg shadow-sm hover-lift transition cursor-pointer border border-gray-200"
            style={{
              padding: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--gray-700)'
            }}
          >
            Ajouter un élève
          </button>
          <button
            className="bg-white rounded-lg shadow-sm hover-lift transition cursor-pointer border border-gray-200"
            style={{
              padding: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--gray-700)'
            }}
          >
            Générer un rapport
          </button>
          <button
            className="bg-white rounded-lg shadow-sm hover-lift transition cursor-pointer border border-gray-200"
            style={{
              padding: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--gray-700)'
            }}
          >
            Envoyer une notification
          </button>
          <button
            className="bg-white rounded-lg shadow-sm hover-lift transition cursor-pointer border border-gray-200"
            style={{
              padding: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--gray-700)'
            }}
          >
            Paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
