import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap,
  faChartLine,
  faUsers,
  faBook,
  faChalkboardTeacher,
  faFileAlt,
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
  faBell,
  faPlus,
  faSearch,
  faRefresh,
  faEye,
  faEdit,
  faTrash,
  faEnvelope,
  faPhone,
  faCalendar,
  faMapMarkerAlt,
  faBriefcase,
  faStar,
  faExclamationTriangle,
  faCheckCircle,
  faTrendingUp,
  faTrendingDown,
  faDownload,
  faFilter,
  faLock,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Icon = ({ icon, ...props }) => {
  const iconMap = {
    'graduation-cap': faGraduationCap,
    'chart-line': faChartLine,
    'users': faUsers,
    'book': faBook,
    'chalkboard-teacher': faChalkboardTeacher,
    'file-alt': faFileAlt,
    'home': faHome,
    'user': faUser,
    'cog': faCog,
    'sign-out-alt': faSignOutAlt,
    'bell': faBell,
    'plus': faPlus,
    'search': faSearch,
    'refresh': faRefresh,
    'eye': faEye,
    'edit': faEdit,
    'trash': faTrash,
    'envelope': faEnvelope,
    'phone': faPhone,
    'calendar': faCalendar,
    'map-marker-alt': faMapMarkerAlt,
    'briefcase': faBriefcase,
    'star': faStar,
    'exclamation-triangle': faExclamationTriangle,
    'check-circle': faCheckCircle,
    'trending-up': faTrendingUp,
    'trending-down': faTrendingDown,
    'download': faDownload,
    'filter': faFilter,
    'lock': faLock,
    'chevron-down': faChevronDown
  };

  const selectedIcon = iconMap[icon] || faChartLine;

  return <FontAwesomeIcon icon={selectedIcon} {...props} />;
};

export default Icon;
