import React, { useState } from 'react';
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
  Collapse,
  IconButton,
  Tooltip,
  Divider,
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
  Storage,
  Api,
  LocationOn,
  Phone,
  ContentCopy,
  Terminal,
  ExpandMore,
  OpenInNew,
} from '@mui/icons-material';

const GITHUB_USER = 'prasannakumar32';
const repoUrl = (name) => `https://github.com/${GITHUB_USER}/${name}`;

const cloneSteps = (repo, pkg = 'npm') => [
  `git clone ${repoUrl(repo)}.git`,
  `cd ${repo}`,
  `${pkg} install`,
  `${pkg} start`,
];

const technicalSkills = {
  languages: ['JavaScript', 'Python'],
  frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI'],
  backend: ['Node.js', 'Express.js', 'REST APIs'],
  databases: ['MySQL', 'DynamoDB', 'MongoDB'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'MVC Architecture', 'CRUD Operations', 'Authentication'],
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
      'Collaborated in an agile development environment with real-world business requirements.',
    ],
  },
];

const projects = [
  {
    title: 'AI-Driven E-Commerce Site',
    repo: 'ai_driven_e-commerce_site',
    language: 'JavaScript',
    description: 'AI-driven e-commerce application with product catalog, recommendations, and a modern shopping experience.',
    install: cloneSteps('ai_driven_e-commerce_site'),
  },
  {
    title: 'T-Mark NSW Transport',
    repo: 'tmark-nsw-transport',
    language: 'JavaScript',
    description: 'Transport management system for tracking and managing transport operations and logistics workflows.',
    install: cloneSteps('tmark-nsw-transport'),
  },
  {
    title: 'Voice Assistance',
    repo: 'voice_assistance',
    language: 'JavaScript',
    description: 'Voice-controlled assistant web app leveraging the Web Speech API for hands-free interaction.',
    install: cloneSteps('voice_assistance'),
  },
  {
    title: 'CRM Portal',
    repo: 'crm_portal',
    language: 'JavaScript',
    description: 'Customer relationship management portal for managing contacts, leads, and customer interactions.',
    install: cloneSteps('crm_portal'),
  },
  {
    title: 'CRM Extractor',
    repo: 'crm-extractor',
    language: 'JavaScript',
    description: 'Tool to extract and process CRM data, useful for reporting and data migration workflows.',
    install: cloneSteps('crm-extractor'),
  },
  {
    title: 'Reminder Webpart',
    repo: 'reminder_webpart',
    language: 'JavaScript',
    description: 'Reusable reminder component/web part that can be embedded to add reminder functionality.',
    install: cloneSteps('reminder_webpart'),
  },
  {
    title: 'Reminder App',
    repo: 'reminder-app-',
    language: 'CSS',
    description: 'Lightweight reminder application with a clean, responsive user interface.',
    install: [
      `git clone ${repoUrl('reminder-app-')}.git`,
      'cd reminder-app-',
      'Open index.html in your browser',
    ],
  },
  {
    title: 'Truth or Dare App',
    repo: 'truth-or-dare-app',
    language: 'JavaScript',
    description: 'Fun party game app that randomly picks truth or dare prompts for groups.',
    install: cloneSteps('truth-or-dare-app'),
  },
  {
    title: 'Smart Bookmark',
    repo: 'smart-bookmark',
    language: 'TypeScript',
    description: 'Smart bookmark manager built with TypeScript for saving, organizing, and accessing links.',
    install: [
      `git clone ${repoUrl('smart-bookmark')}.git`,
      'cd smart-bookmark',
      'npm install',
      'npm run dev',
    ],
  },
  {
    title: 'Sale Dashboard',
    repo: 'sale_dashboard',
    language: 'JavaScript',
    description: 'Sales analytics dashboard with charts and metrics to visualize business performance.',
    install: cloneSteps('sale_dashboard'),
  },
  {
    title: 'Asset Management System',
    repo: 'asset-management',
    language: 'JavaScript',
    description: 'Full-stack asset allocation, return, and lifecycle tracking application with role-based access.',
    install: cloneSteps('asset-management'),
  },
  {
    title: 'Pipeline Node Abstraction',
    repo: 'pipeline_node_abstraction',
    language: 'JavaScript',
    description: 'Abstraction layer for building and composing pipeline-based processing nodes.',
    install: cloneSteps('pipeline_node_abstraction'),
  },
  {
    title: 'DDB Test',
    repo: 'ddb_test_32',
    language: 'JavaScript',
    description: 'Experiments and tests around AWS DynamoDB data modeling and operations.',
    install: cloneSteps('ddb_test_32'),
  },
  {
    title: 'Short URL Generator',
    repo: 'shorter_url',
    language: 'JavaScript',
    description: 'URL shortening service with unique short link generation, redirection, and click tracking.',
    install: cloneSteps('shorter_url'),
  },
  {
    title: 'Allocation Management System',
    repo: null,
    language: 'React.js',
    featured: true,
    description: 'Real-world production–consumption allocation platform developed at Strio Kaizen.',
    features: [
      'Allocation logic for production, consumption, and banking units',
      'Interactive dashboards for allocation and utilization',
      'Integration of 6+ REST APIs',
      'Processed and managed 10,000+ records',
    ],
    install: null,
  },
];

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Sri Ramakrishna Institute of Technology, Coimbatore',
    period: '2020 – 2024',
    cgpa: '7.669 / 10',
  },
  {
    degree: 'HSC (12th)',
    institution: 'Little Angels Matric School',
    period: '',
    percentage: '68.5%',
  },
  {
    degree: 'SSLC (10th)',
    institution: 'Surabi Matric School',
    period: '',
    percentage: '83.4%',
  },
];

const sectionTitleSx = {
  fontWeight: 800,
  fontSize: { xs: '1.9rem', md: '2.4rem' },
  mb: 1,
  background: 'linear-gradient(90deg, #818cf8, #22d3ee)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const cardSx = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  bgcolor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(12px)',
  borderRadius: 3,
  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'rgba(129,140,248,0.5)',
    boxShadow: '0 12px 40px rgba(99,102,241,0.25)',
  },
};

const CommandRow = ({ command }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) { /* clipboard unavailable */ }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        bgcolor: 'rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 1.5,
        px: 1.5,
        py: 0.8,
      }}
    >
      <Typography
        component="code"
        sx={{ fontFamily: '"JetBrains Mono", Consolas, monospace', fontSize: '0.8rem', color: '#a5f3fc', wordBreak: 'break-all' }}
      >
        {command}
      </Typography>
      <Tooltip title={copied ? 'Copied!' : 'Copy'}>
        <IconButton size="small" onClick={copy} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.light' } }}>
          <ContentCopy sx={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card sx={cardSx}>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5, gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.35 }}>
            {project.title}
          </Typography>
          {project.repo && (
            <Tooltip title="View on GitHub">
              <IconButton
                size="small"
                component="a"
                href={repoUrl(project.repo)}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', '&:hover': { color: '#e6edf3' } }}
              >
                <OpenInNew sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
          <Chip
            size="small"
            icon={<Code sx={{ fontSize: 14 }} />}
            label={project.language}
            sx={{ bgcolor: 'rgba(129,140,248,0.15)', color: '#a5b4fc', border: '1px solid rgba(129,140,248,0.3)', fontWeight: 600 }}
          />
          {project.featured && (
            <Chip size="small" label="Featured" sx={{ bgcolor: 'rgba(34,211,238,0.15)', color: '#67e8f9', border: '1px solid rgba(34,211,238,0.3)', fontWeight: 600 }} />
          )}
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, flexGrow: 1 }}>
          {project.description}
        </Typography>

        {project.features && (
          <List dense sx={{ py: 0, mb: 1.5 }}>
            {project.features.map((f, i) => (
              <ListItem key={i} sx={{ py: 0.25, px: 0 }}>
                <ListItemText
                  primary={`• ${f}`}
                  primaryTypographyProps={{ variant: 'body2', sx: { fontSize: '0.82rem' } }}
                />
              </ListItem>
            ))}
          </List>
        )}

        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {project.repo && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<GitHub />}
              href={repoUrl(project.repo)}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary', '&:hover': { borderColor: '#e6edf3', bgcolor: 'rgba(255,255,255,0.06)' } }}
            >
              Code
            </Button>
          )}
          {project.install && (
            <Button
              variant="contained"
              size="small"
              endIcon={<ExpandMore sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />}
              onClick={() => setOpen(!open)}
              sx={{
                ml: 'auto',
                background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                '&:hover': { background: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
              }}
            >
              Setup
            </Button>
          )}
        </Box>

        {project.install && (
          <Collapse in={open}>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Terminal sx={{ fontSize: 16, color: '#67e8f9' }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: 1 }}>
                  INSTALLATION
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {project.install.map((cmd, i) => (
                  <CommandRow key={i} command={cmd} />
                ))}
              </Box>
            </Box>
          </Collapse>
        )}
      </CardContent>
    </Card>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <Box sx={{ textAlign: 'center', mb: 5 }}>
    <Typography variant="h3" sx={sectionTitleSx}>{title}</Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }}>
        {subtitle}
      </Typography>
    )}
    <Box sx={{ width: 80, height: 4, mx: 'auto', mt: 2, borderRadius: 2, background: 'linear-gradient(90deg, #6366f1, #22d3ee)' }} />
  </Box>
);

const skillCardSx = {
  p: 3,
  height: '100%',
  bgcolor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 3,
  transition: 'transform 0.25s ease, border-color 0.25s ease',
  '&:hover': { transform: 'translateY(-4px)', borderColor: 'rgba(129,140,248,0.4)' },
};

const skillChipSx = {
  fontWeight: 600,
  bgcolor: 'rgba(129,140,248,0.12)',
  color: '#a5b4fc',
  border: '1px solid rgba(129,140,248,0.25)',
  '&:hover': { bgcolor: 'rgba(129,140,248,0.22)' },
};

const Portfolio = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(99,102,241,0.25), transparent), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(34,211,238,0.15), transparent)',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 1 }} id="home">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={8}>
              <Chip
                label="🚀 Open to Full Stack Developer roles"
                sx={{ mb: 2, bgcolor: 'rgba(34,211,238,0.12)', color: '#67e8f9', border: '1px solid rgba(34,211,238,0.3)', fontWeight: 600 }}
              />
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.4rem', md: '3.6rem' },
                  lineHeight: 1.15,
                  background: 'linear-gradient(90deg, #f8fafc, #a5b4fc 60%, #67e8f9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Hi, I'm Prasannakumar E
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  background: 'linear-gradient(90deg, #818cf8, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  width: 'fit-content',
                }}
              >
                Full Stack Developer | React • Node.js • REST APIs • NoSQL
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', maxWidth: 620 }}>
                I build scalable web applications using React.js, Node.js, and modern backend technologies.
                From production–consumption allocation platforms to asset management systems — I focus on
                clean architecture, performance, and maintainable code that delivers real business value.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5, mb: 3, mt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 1, color: '#67e8f9', fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">Namakkal, Tamil Nadu, India</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ mr: 1, color: '#67e8f9', fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">espprasanna613@gmail.com</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
                    '&:hover': { background: 'linear-gradient(90deg, #4f46e5, #06b6d4)', transform: 'translateY(-2px)' },
                    transition: 'transform 0.2s',
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#projects"
                  sx={{ px: 4, borderColor: 'rgba(255,255,255,0.25)', '&:hover': { borderColor: '#22d3ee', color: '#67e8f9' } }}
                >
                  View Projects
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -12,
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #6366f1, #22d3ee, #ec4899, #6366f1)',
                    filter: 'blur(20px)',
                    opacity: 0.6,
                    animation: 'spin 6s linear infinite',
                    '@keyframes spin': { '100%': { transform: 'rotate(360deg)' } },
                  }}
                />
                <Avatar
                  sx={{
                    width: { xs: 180, md: 220 },
                    height: { xs: 180, md: 220 },
                    mx: 'auto',
                    fontSize: '3.4rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                    color: '#0b0f1a',
                    border: '4px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                  }}
                >
                  PE
                </Avatar>
              </Box>
              <Typography variant="subtitle1" sx={{ mt: 3, color: 'text.secondary', fontWeight: 600 }}>
                Prasannakumar E
              </Typography>
              <Typography variant="caption" color="text.secondary">
                @{GITHUB_USER} on GitHub
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="about">
        <SectionHeader title="About Me" />
        <Paper sx={{ ...skillCardSx, p: 4, maxWidth: 860, mx: 'auto' }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.08rem', color: 'text.secondary' }}>
            Computer Science graduate with practical industry experience gained at Strio Kaizen Hi-Tech
            Research Labs. I've worked across the full development lifecycle — designing user interfaces,
            implementing backend logic, and integrating multiple APIs.
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#a5b4fc', mt: 3, mb: 1.5 }}>
            What I do best:
          </Typography>
          <Grid container spacing={1.5}>
            {[
              'Building reusable React components',
              'Designing RESTful APIs with Node.js & Express',
              'Working with SQL and NoSQL databases',
              'Translating business workflows into working software',
            ].map((item) => (
              <Grid item xs={12} sm={6} key={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(90deg,#6366f1,#22d3ee)', flexShrink: 0 }} />
                  <Typography variant="body2" color="text.secondary">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.08)' }} />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Continuously learning and improving by building real-world projects and writing clean,
            maintainable code.
          </Typography>
        </Paper>
      </Container>

      {/* Skills */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="skills">
        <SectionHeader title="Technical Skills" subtitle="The technologies and tools I work with every day." />
        <Grid container spacing={3}>
          {[
            { title: 'Languages', icon: <Code sx={{ fontSize: 28, color: '#a5b4fc' }} />, items: technicalSkills.languages, wide: false },
            { title: 'Frontend', icon: <Dashboard sx={{ fontSize: 28, color: '#67e8f9' }} />, items: technicalSkills.frontend, wide: false },
            { title: 'Backend', icon: <Api sx={{ fontSize: 28, color: '#a5b4fc' }} />, items: technicalSkills.backend, wide: false },
            { title: 'Databases', icon: <Storage sx={{ fontSize: 28, color: '#67e8f9' }} />, items: technicalSkills.databases, wide: false },
            { title: 'Tools & Concepts', icon: <Build sx={{ fontSize: 28, color: '#f0abfc' }} />, items: technicalSkills.tools, wide: true },
          ].map((group) => (
            <Grid item xs={12} md={group.wide ? 12 : 6} key={group.title}>
              <Paper sx={skillCardSx}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  {group.icon}
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{group.title}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.items.map((skill) => (
                    <Chip key={skill} label={skill} size="small" sx={skillChipSx} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Experience */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="experience">
        <SectionHeader title="Experience" />
        <Grid container spacing={4} justifyContent="center">
          {experience.map((exp, index) => (
            <Grid item xs={12} md={10} key={index}>
              <Card sx={{ ...cardSx, p: 0 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                      <Work />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>{exp.title}</Typography>
                      <Typography variant="h6" sx={{ color: '#a5b4fc', fontWeight: 600 }}>{exp.company}</Typography>
                      <Chip
                        size="small"
                        label={`${exp.period} • ${exp.type}`}
                        sx={{ mt: 1, bgcolor: 'rgba(34,211,238,0.1)', color: '#67e8f9', border: '1px solid rgba(34,211,238,0.25)', fontWeight: 600 }}
                      />
                    </Box>
                  </Box>
                  <List dense>
                    {exp.description.map((desc, i) => (
                      <ListItem key={i} sx={{ py: 0.4, px: 0 }}>
                        <ListItemText
                          primary={desc}
                          primaryTypographyProps={{ variant: 'body2', sx: { color: 'text.secondary' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="projects">
        <SectionHeader
          title="Projects & Repositories"
          subtitle={`A collection of my GitHub repositories. Click "Setup" on any card for installation instructions.`}
        />
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Education */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="education">
        <SectionHeader title="Education" />
        <Grid container spacing={4} justifyContent="center">
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={cardSx}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                    <Avatar sx={{ bgcolor: 'rgba(236,72,153,0.15)', color: '#f9a8d4' }}>
                      <School />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>{edu.degree}</Typography>
                      <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
                      {edu.period && <Typography variant="body2" color="text.secondary">{edu.period}</Typography>}
                    </Box>
                  </Box>
                  {edu.cgpa && (
                    <Chip label={`CGPA: ${edu.cgpa}`} size="small" sx={{ mt: 1, bgcolor: 'rgba(129,140,248,0.12)', color: '#a5b4fc', border: '1px solid rgba(129,140,248,0.3)', fontWeight: 600 }} />
                  )}
                  {edu.percentage && (
                    <Chip label={`Percentage: ${edu.percentage}`} size="small" sx={{ mt: 1, ml: edu.cgpa ? 1 : 0, bgcolor: 'rgba(129,140,248,0.12)', color: '#a5b4fc', border: '1px solid rgba(129,140,248,0.3)', fontWeight: 600 }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="contact">
        <SectionHeader title="Get In Touch" />
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: <Email />, label: 'Email', value: 'espprasanna613@gmail.com', href: 'mailto:espprasanna613@gmail.com' },
            { icon: <Phone />, label: 'Phone', value: '+91 90033 81176', href: 'tel:+919003381176' },
            { icon: <LinkedIn />, label: 'LinkedIn', value: 'linkedin.com/in/prasannakumar', href: 'https://linkedin.com/in/prasannakumar' },
            { icon: <GitHub />, label: 'GitHub', value: `github.com/${GITHUB_USER}`, href: repoUrl('').replace(/\/$/, '') },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Card
                component={item.href ? 'a' : 'div'}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                sx={{ ...cardSx, textDecoration: 'none', color: 'inherit', p: 0 }}
              >
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Avatar sx={{ mx: 'auto', mb: 1.5, bgcolor: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>{item.icon}</Avatar>
                  <Typography variant="subtitle2" color="text.secondary">{item.label}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, wordBreak: 'break-all' }}>{item.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Container maxWidth="lg" sx={{ py: 6, mb: 6 }}>
        <Paper
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(34,211,238,0.15))',
            border: '1px solid rgba(129,140,248,0.3)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5 }}>
            I'm actively looking for opportunities
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3, fontWeight: 400 }}>
            as a Full Stack Developer / React Developer where I can contribute to building
            scalable products and continue growing as a software engineer.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              px: 5,
              background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
              '&:hover': { background: 'linear-gradient(90deg, #4f46e5, #06b6d4)' },
            }}
          >
            Let's Work Together
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Portfolio;
