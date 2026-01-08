import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Build,
  School,
  Work,
  Dashboard,
  Assessment,
  Storage,
  Api,
  LocationOn,
  Phone,
} from '@mui/icons-material';

const Portfolio = () => {
  const technicalSkills = {
    languages: ['JavaScript', 'Python'],
    frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI'],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    databases: ['MySQL', 'DynamoDB', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'MVC Architecture', 'CRUD Operations', 'Authentication']
  };

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Strio Kaizen Hi-Tech Research Labs',
      period: 'Nov 2024 – Present',
      type: 'Remote',
      description: [
        'Developed reusable and scalable React.js components used across multiple application modules.',
        'Designed and integrated 6+ RESTful APIs using Node.js and Express.js.',
        'Implemented production and consumption allocation logic processing 10,000+ records.',
        'Worked with DynamoDB for managing large-scale NoSQL datasets.',
        'Optimized API performance and frontend rendering, improving load times by ~20%.',
        'Collaborated in an agile development environment with real-world business requirements.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Allocation Management System (Production & Consumption)',
      tech: ['React.js', 'Node.js', 'Express.js', 'DynamoDB'],
      github: '',
      description: [
        'A real-world allocation management system developed at Strio Kaizen to efficiently allocate production units against consumption demands.',
        'Key Features:',
        'Allocation logic for production, consumption, and banking units',
        'Interactive dashboards to visualize allocation and utilization',
        'Integration of 6+ REST APIs',
        'Processed and managed 10,000+ records',
        'Outcome:',
        'Improved visibility and efficiency in managing production–consumption workflows.'
      ]
    },
    {
      title: 'Asset Management System',
      tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Sequelize'],
      github: 'https://github.com/prasannakumar32/kt_task',
      description: [
        'A full-stack web application to manage asset allocation, returns, and lifecycle tracking.',
        'Key Features:',
        'Asset assignment and return management',
        'Role-based authentication and authorization',
        'CRUD operations for assets and users',
        'Managed 300+ assets',
        'Outcome:',
        'Reduced manual asset tracking effort by ~30% through automation.'
      ]
    },
    {
      title: 'Short URL Generator',
      tech: ['Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/prasannakumar32/shorter_url',
      description: [
        'A URL shortening service similar to Bitly.',
        'Key Features:',
        'Unique short URL generation',
        'Redirection and click tracking',
        'Input validation and error handling',
        'Managed 1,000+ URL mappings',
        'Outcome:',
        'Built a scalable backend service with clean API design.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'Sri Ramakrishna Institute of Technology, Coimbatore',
      period: '2020 – 2024',
      cgpa: '7.669 / 10'
    },
    {
      degree: 'HSC (12th)',
      institution: 'Little Angels Matric School',
      period: '',
      percentage: '68.5%'
    },
    {
      degree: 'SSLC (10th)',
      institution: 'Surabi Matric School',
      period: '',
      percentage: '83.4%'
    }
  ];

  return React.createElement(
    Box,
    { sx: { minHeight: '100vh', bgcolor: 'background.default' } },
    
    // Hero Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'home' },
      React.createElement(
        Grid,
        { container: true, spacing: 4, alignItems: 'center' },
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 8 },
          React.createElement(
            Box,
            { sx: { textAlign: { xs: 'center', md: 'left' } } },
            React.createElement(
              Typography,
              { variant: 'h2', gutterBottom: true, fontWeight: 800, color: 'primary.main' },
              'Hi, I\'m Prasannakumar E'
            ),
            React.createElement(
              Typography,
              { variant: 'h4', color: 'text.secondary', gutterBottom: true, fontWeight: 600 },
              'Full Stack Developer | React • Node.js • REST APIs • NoSQL'
            ),
            React.createElement(
              Typography,
              { variant: 'body1', color: 'text.secondary', paragraph: true, sx: { fontSize: '1.1rem', mb: 3 } },
              'I\'m a Full Stack Developer with hands-on experience building scalable web applications using React.js, Node.js, and modern backend technologies. I have worked on real-world systems such as production–consumption allocation platforms and asset management applications, focusing on clean architecture, performance, and maintainable code.'
            ),
            React.createElement(
              Typography,
              { variant: 'body1', color: 'text.secondary', paragraph: true, sx: { fontSize: '1.1rem', mb: 3 } },
              'I enjoy solving practical problems, building efficient APIs, and creating responsive user interfaces that deliver real business value.'
            ),
            React.createElement(
              Box,
              { sx: { mb: 3 } },
              React.createElement(
                Box,
                { sx: { display: 'flex', alignItems: 'center', mb: 1 } },
                React.createElement(LocationOn, { sx: { mr: 1, color: 'primary.main', fontSize: 20 } }),
                React.createElement(
                  Typography,
                  { variant: 'body2', color: 'text.secondary' },
                  '📍 Namakkal, Tamil Nadu, India'
                )
              ),
              React.createElement(
                Box,
                { sx: { display: 'flex', alignItems: 'center', mb: 1 } },
                React.createElement(Email, { sx: { mr: 1, color: 'primary.main', fontSize: 20 } }),
                React.createElement(
                  Typography,
                  { variant: 'body2', color: 'text.secondary' },
                  '📧 espprasanna613@gmail.com'
                )
              )
            ),
            React.createElement(
              Box,
              { sx: { mt: 3 } },
              React.createElement(
                Button,
                { variant: 'contained', sx: { mr: 2, px: 4 }, href: '#contact' },
                'Get In Touch'
              ),
              React.createElement(
                Button,
                { variant: 'outlined', sx: { px: 4 }, href: '#projects' },
                'View Projects'
              )
            )
          )
        ),
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 4 },
          React.createElement(
            Box,
            { sx: { textAlign: 'center' } },
            React.createElement(
              Avatar,
              {
                sx: {
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 3,
                  background: 'linear-gradient(45deg, #6366f1 30%, #ec4899 90%)',
                  fontSize: '3rem',
                  fontWeight: 800
                }
              },
              'PE'
            )
          )
        )
      )
    ),

    // About Me Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'about' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '🧑‍💻 About Me'
      ),
      React.createElement(
        Paper,
        { sx: { p: 4 } },
        React.createElement(
          Typography,
          { variant: 'body1', paragraph: true, sx: { fontSize: '1.1rem' } },
          'I am a Computer Science graduate with practical industry experience gained during my role at Strio Kaizen Hi-Tech Research Labs. I have worked across the full development lifecycle — from designing user interfaces to implementing backend logic and integrating multiple APIs.'
        ),
        React.createElement(
          Typography,
          { variant: 'h6', gutterBottom: true, mt: 3, mb: 2, color: 'primary.main' },
          'My strengths include:'
        ),
        React.createElement(
          List,
          { dense: true },
          React.createElement(
            ListItem,
            { sx: { py: 0.5 } },
            React.createElement(ListItemText, {
              primary: '• Building reusable React components',
              primaryTypographyProps: { variant: 'body1' }
            })
          ),
          React.createElement(
            ListItem,
            { sx: { py: 0.5 } },
            React.createElement(ListItemText, {
              primary: '• Designing RESTful APIs using Node.js and Express',
              primaryTypographyProps: { variant: 'body1' }
            })
          ),
          React.createElement(
            ListItem,
            { sx: { py: 0.5 } },
            React.createElement(ListItemText, {
              primary: '• Working with SQL and NoSQL databases',
              primaryTypographyProps: { variant: 'body1' }
            })
          ),
          React.createElement(
            ListItem,
            { sx: { py: 0.5 } },
            React.createElement(ListItemText, {
              primary: '• Understanding business workflows and translating them into working software',
              primaryTypographyProps: { variant: 'body1' }
            })
          )
        ),
        React.createElement(
          Typography,
          { variant: 'body1', paragraph: true, sx: { fontSize: '1.1rem', mt: 3 } },
          'I am continuously learning and improving my skills by building real-world projects and writing clean, maintainable code.'
        )
      )
    ),

    // Technical Skills Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'skills' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '🛠 Technical Skills'
      ),
      React.createElement(
        Grid,
        { container: true, spacing: 3 },
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 6 },
          React.createElement(
            Paper,
            { sx: { p: 3, height: '100%' } },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
              React.createElement(Code, { sx: { mr: 2, color: 'primary.main', fontSize: 30 } }),
              React.createElement(Typography, { variant: 'h6', fontWeight: 600 }, 'Languages')
            ),
            React.createElement(
              Grid,
              { container: true, spacing: 1 },
              technicalSkills.languages.map((skill) =>
                React.createElement(
                  Grid,
                  { item: true, xs: 6, sm: 4, key: skill },
                  React.createElement(Chip, {
                    label: skill,
                    size: 'small',
                    sx: { 
                      bgcolor: 'primary.light', 
                      color: 'primary.contrastText',
                      fontWeight: 500
                    }
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 6 },
          React.createElement(
            Paper,
            { sx: { p: 3, height: '100%' } },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
              React.createElement(Dashboard, { sx: { mr: 2, color: 'secondary.main', fontSize: 30 } }),
              React.createElement(Typography, { variant: 'h6', fontWeight: 600 }, 'Frontend')
            ),
            React.createElement(
              Grid,
              { container: true, spacing: 1 },
              technicalSkills.frontend.map((skill) =>
                React.createElement(
                  Grid,
                  { item: true, xs: 6, sm: 4, key: skill },
                  React.createElement(Chip, {
                    label: skill,
                    size: 'small',
                    sx: { 
                      bgcolor: 'secondary.light', 
                      color: 'secondary.contrastText',
                      fontWeight: 500
                    }
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 6 },
          React.createElement(
            Paper,
            { sx: { p: 3, height: '100%' } },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
              React.createElement(Api, { sx: { mr: 2, color: 'primary.main', fontSize: 30 } }),
              React.createElement(Typography, { variant: 'h6', fontWeight: 600 }, 'Backend')
            ),
            React.createElement(
              Grid,
              { container: true, spacing: 1 },
              technicalSkills.backend.map((skill) =>
                React.createElement(
                  Grid,
                  { item: true, xs: 6, sm: 4, key: skill },
                  React.createElement(Chip, {
                    label: skill,
                    size: 'small',
                    sx: { 
                      bgcolor: 'primary.light', 
                      color: 'primary.contrastText',
                      fontWeight: 500
                    }
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 6 },
          React.createElement(
            Paper,
            { sx: { p: 3, height: '100%' } },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
              React.createElement(Storage, { sx: { mr: 2, color: 'secondary.main', fontSize: 30 } }),
              React.createElement(Typography, { variant: 'h6', fontWeight: 600 }, 'Databases')
            ),
            React.createElement(
              Grid,
              { container: true, spacing: 1 },
              technicalSkills.databases.map((skill) =>
                React.createElement(
                  Grid,
                  { item: true, xs: 6, sm: 4, key: skill },
                  React.createElement(Chip, {
                    label: skill,
                    size: 'small',
                    sx: { 
                      bgcolor: 'secondary.light', 
                      color: 'secondary.contrastText',
                      fontWeight: 500
                    }
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          Grid,
          { item: true, xs: 12 },
          React.createElement(
            Paper,
            { sx: { p: 3, height: '100%' } },
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
              React.createElement(Build, { sx: { mr: 2, color: 'primary.main', fontSize: 30 } }),
              React.createElement(Typography, { variant: 'h6', fontWeight: 600 }, 'Tools & Concepts')
            ),
            React.createElement(
              Grid,
              { container: true, spacing: 1 },
              technicalSkills.tools.map((skill) =>
                React.createElement(
                  Grid,
                  { item: true, xs: 6, sm: 4, md: 2, key: skill },
                  React.createElement(Chip, {
                    label: skill,
                    size: 'small',
                    sx: { 
                      bgcolor: 'primary.light', 
                      color: 'primary.contrastText',
                      fontWeight: 500
                    }
                  })
                )
              )
            )
          )
        )
      )
    ),

    // Experience Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'experience' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '💼 Experience'
      ),
      React.createElement(
        Grid,
        { container: true, spacing: 4 },
        experience.map((exp, index) =>
          React.createElement(
            Grid,
            { item: true, xs: 12, key: index },
            React.createElement(
              Card,
              { sx: { p: 3, height: '100%' } },
              React.createElement(
                Box,
                { sx: { display: 'flex', alignItems: 'flex-start', mb: 2 } },
                React.createElement(Work, { sx: { mr: 2, color: 'primary.main', fontSize: 28 } }),
                React.createElement(Box, { sx: { flex: 1 } },
                  React.createElement(
                    Typography,
                    { variant: 'h5', fontWeight: 700, gutterBottom: true },
                    exp.title
                  ),
                  React.createElement(
                    Typography,
                    { variant: 'h6', color: 'primary', gutterBottom: true },
                    exp.company
                  ),
                  React.createElement(
                    Typography,
                    { variant: 'body2', color: 'text.secondary', gutterBottom: true },
                    `${exp.period} • ${exp.type}`
                  )
                )
              ),
              React.createElement(
                List,
                { dense: true },
                exp.description.map((desc, i) =>
                  React.createElement(
                    ListItem,
                    { key: i, sx: { py: 0.5 } },
                    React.createElement(ListItemText, {
                      primary: desc,
                      primaryTypographyProps: { variant: 'body2' }
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),

    // Projects Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'projects' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '🚀 Projects'
      ),
      React.createElement(
        Grid,
        { container: true, spacing: 4 },
        projects.map((project, index) =>
          React.createElement(
            Grid,
            { item: true, xs: 12, key: index },
            React.createElement(
              Card,
              { sx: { height: '100%', display: 'flex', flexDirection: 'column' } },
              React.createElement(
                CardContent,
                { sx: { flexGrow: 1 } },
                React.createElement(
                  Box,
                  { sx: { display: 'flex', alignItems: 'center', mb: 2 } },
                  React.createElement(Assessment, { sx: { mr: 2, color: 'primary.main', fontSize: 24 } }),
                  React.createElement(
                    Typography,
                    { variant: 'h6', fontWeight: 600 },
                    `🔹 ${project.title}`
                  )
                ),
                React.createElement(
                  Box,
                  { sx: { mb: 2 } },
                  React.createElement(
                    Typography,
                    { variant: 'body2', color: 'text.secondary', mb: 1 },
                    `Tech Stack: ${project.tech.join(', ')}`
                  ),
                  project.github && React.createElement(
                    Button,
                    {
                      variant: 'outlined',
                      size: 'small',
                      href: project.github,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      sx: { mr: 1 }
                    },
                    React.createElement(GitHub, { sx: { mr: 1, fontSize: 16 } }),
                    'GitHub'
                  )
                ),
                React.createElement(
                  List,
                  { dense: true },
                  project.description.map((desc, i) =>
                    React.createElement(
                      ListItem,
                      { key: i, sx: { py: 0.5 } },
                      React.createElement(ListItemText, {
                        primary: desc,
                        primaryTypographyProps: { 
                          variant: 'body2',
                          sx: { 
                            fontWeight: desc.includes('Key Features:') || desc.includes('Outcome:') ? 600 : 'normal',
                            color: desc.includes('Key Features:') || desc.includes('Outcome:') ? 'primary.main' : 'text.primary'
                          }
                        }
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),

    // Education Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8 }, id: 'education' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '🎓 Education'
      ),
      React.createElement(
        Grid,
        { container: true, spacing: 4 },
        education.map((edu, index) =>
          React.createElement(
            Grid,
            { item: true, xs: 12, md: 4, key: index },
            React.createElement(
              Card,
              { sx: { p: 3, height: '100%' } },
              React.createElement(
                Box,
                { sx: { display: 'flex', alignItems: 'flex-start', mb: 2 } },
                React.createElement(School, { sx: { mr: 2, color: 'primary.main', fontSize: 24 } }),
                React.createElement(Box, { sx: { flex: 1 } },
                  React.createElement(
                    Typography,
                    { variant: 'h6', fontWeight: 600, gutterBottom: true },
                    edu.degree
                  ),
                  React.createElement(
                    Typography,
                    { variant: 'body2', color: 'text.secondary', gutterBottom: true },
                    edu.institution
                  ),
                  edu.period && React.createElement(
                    Typography,
                    { variant: 'body2', color: 'text.secondary', gutterBottom: true },
                    edu.period
                  ),
                  edu.cgpa && React.createElement(
                    Typography,
                    { variant: 'body2', color: 'primary.main', fontWeight: 600 },
                    `CGPA: ${edu.cgpa}`
                  ),
                  edu.percentage && React.createElement(
                    Typography,
                    { variant: 'body2', color: 'primary.main', fontWeight: 600 },
                    `Percentage: ${edu.percentage}`
                  )
                )
              )
            )
          )
        )
      )
    ),

    // Contact Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8, mb: 4 }, id: 'contact' },
      React.createElement(
        Typography,
        { variant: 'h3', gutterBottom: true, textAlign: 'center', mb: 4 },
        '📫 Contact'
      ),
      React.createElement(
        Grid,
        { container: true, spacing: 4, justifyContent: 'center' },
        React.createElement(
          Grid,
          { item: true, xs: 12, md: 8 },
          React.createElement(
            Card,
            { sx: { p: 4 } },
            React.createElement(
              Grid,
              { container: true, spacing: 3 },
              React.createElement(
                Grid,
                { item: true, xs: 12, sm: 6 },
                React.createElement(
                  Box,
                  { sx: { display: 'flex', alignItems: 'center' } },
                  React.createElement(Email, { sx: { mr: 2, color: 'primary.main' } }),
                  React.createElement(ListItemText, {
                    primary: 'Email',
                    secondary: 'espprasanna613@gmail.com'
                  })
                )
              ),
              React.createElement(
                Grid,
                { item: true, xs: 12, sm: 6 },
                React.createElement(
                  Box,
                  { sx: { display: 'flex', alignItems: 'center' } },
                  React.createElement(Phone, { sx: { mr: 2, color: 'primary.main' } }),
                  React.createElement(ListItemText, {
                    primary: 'Phone',
                    secondary: '+91 90033 81176'
                  })
                )
              ),
              React.createElement(
                Grid,
                { item: true, xs: 12, sm: 6 },
                React.createElement(
                  Box,
                  { sx: { display: 'flex', alignItems: 'center' } },
                  React.createElement(LinkedIn, { sx: { mr: 2, color: 'primary.main' } }),
                  React.createElement(ListItemText, {
                    primary: 'LinkedIn',
                    secondary: 'linkedin.com/in/prasannakumar'
                  })
                )
              ),
              React.createElement(
                Grid,
                { item: true, xs: 12, sm: 6 },
                React.createElement(
                  Box,
                  { sx: { display: 'flex', alignItems: 'center' } },
                  React.createElement(GitHub, { sx: { mr: 2, color: 'primary.main' } }),
                  React.createElement(ListItemText, {
                    primary: 'GitHub',
                    secondary: 'github.com/prasannakumar32'
                  })
                )
              )
            )
          )
        )
      )
    ),

    // Call to Action Section
    React.createElement(
      Container,
      { maxWidth: 'lg', sx: { py: 8, mb: 4 } },
      React.createElement(
        Paper,
        { sx: { p: 6, textAlign: 'center', bgcolor: 'primary.light', color: 'primary.contrastText' } },
        React.createElement(
          Typography,
          { variant: 'h4', gutterBottom: true, fontWeight: 700 },
          '🎯 I am actively looking for opportunities'
        ),
        React.createElement(
          Typography,
          { variant: 'h6', gutterBottom: true, mb: 3 },
          'as a Full Stack Developer / React Developer where I can contribute to building scalable products and continue growing as a software engineer.'
        ),
        React.createElement(
          Button,
          { variant: 'contained', size: 'large', sx: { bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }, href: '#contact' },
          'Get In Touch'
        )
      )
    )
  );
};
export default Portfolio;