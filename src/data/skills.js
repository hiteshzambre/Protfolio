// ============================================
// SKILLS DATA
// Edit this file to add/update your skills
// ============================================

import {
  FaCode,
  FaPaintBrush,
  FaChartBar,
  FaDatabase,
  FaTools,
} from 'react-icons/fa';

const skills = [
  {
    category: 'Programming',
    icon: FaCode,
    items: ['C', 'Java', 'Python', 'PHP', 'JavaScript'],
  },
  {
    category: 'Frontend',
    icon: FaPaintBrush,
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    category: 'Data Science',
    icon: FaChartBar,
    items: ['Python', 'Data Analysis', 'Data Preprocessing', 'Data Visualization'],
  },
  {
    category: 'Database',
    icon: FaDatabase,
    items: ['SQL'],
  },
  {
    category: 'Tools',
    icon: FaTools,
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

export default skills;
