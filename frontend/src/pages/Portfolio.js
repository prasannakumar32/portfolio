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
  Chip,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  Storage,
  Api,
  Build,
  Web,
  School,
  Work,
  LocationOn,
  Phone,
} from '@mui/icons-material';

const GITHUB_USER = 'prasannakumar32';
const repoUrl = (name) => `https://github.com/${GITHUB_USER}/${name}`;

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
  },
  {
    title: 'CRM Extractor',
    repo: 'crm-extractor',
    language: 'JavaScript',
    description: 'Tool to extract and process CRM data, useful for reporting and data migration workflows.',
  },
  {
    title: 'Reminder App',
    repo: 'reminder-app-',
    language: 'CSS',
    description: 'Lightweight reminder application with a clean, responsive user interface.',
  },
  {
    title: 'Truth or Dare App',
    repo: 'truth-or-dare-app',
    language: 'JavaScript',
    description: 'Fun party game app that randomly picks truth or dare prompts for groups.',
  },
  {
    title: 'Smart Bookmark',
    repo: 'smart-bookmark',
    language: 'TypeScript',
    description: 'Smart bookmark manager built with TypeScript for saving, organizing, and accessing links.',
  },
  {
    title: 'Sale Dashboard',
    repo: 'sale_dashboard',
    language: 'JavaScript',
    description: 'Sales analytics dashboard with charts and metrics to visualize business performance.',
  },
  {
    title: 'Asset Management System',
    repo: 'asset-management',
    language: 'JavaScript',
    description: 'Full-stack asset allocation, return, and lifecycle tracking application with role-based access.',
  },
  {
    title: 'Pipeline Node Abstraction',
    repo: 'pipeline_node_abstraction',
    language: 'JavaScript',
    description: 'Abstraction layer for building and composing pipeline-based processing nodes.',
  },
  {
    title: 'DDB Test',
    repo: 'ddb_test_32',
    language: 'JavaScript',
    description: 'Experiments and tests around AWS DynamoDB data modeling and operations.',
  },
  {
    title: 'Short URL Generator',
    repo: 'shorter_url',
    language: 'JavaScript',
    description: 'URL shortening service with unique short link generation, redirection, and click tracking.',
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

const accentGradient = 'linear-gradient(135deg, #8B7CFF 0%, #22D3EE 100%)';
const gradientTextSx = {
  color: '#F8FAFC',
  '@supports (background-clip: text)': {
    background: 'linear-gradient(90deg, #F8FAFC 0%, #C4B5FD 52%, #67E8F9 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
};

const sectionTitleSx = {
  fontWeight: 800,
  fontSize: { xs: '2rem', md: '2.75rem' },
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  ...gradientTextSx,
};

const cardSx = {
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  bgcolor: 'rgba(15,23,42,0.72)',
  color: '#F8FAFC',
  backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))',
  '& .MuiTypography-colorTextSecondary': {
    color: '#CBD5E1',
  },
  border: '1px solid rgba(148,163,184,0.16)',
  borderRadius: '24px',
  boxShadow: '0 12px 36px rgba(2,6,23,0.18)',
  transition: 'transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: accentGradient,
    opacity: 0.65,
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139,124,255,0.42)',
    boxShadow: '0 20px 48px rgba(2,6,23,0.32), 0 8px 28px rgba(34,211,238,0.08)',
  },
  '&:focus-within': {
    borderColor: 'rgba(103,232,249,0.55)',
    boxShadow: '0 0 0 3px rgba(103,232,249,0.12)',
  },
};

const skillCardSx = {
  ...cardSx,
  p: 3,
  '&:hover': {
    ...cardSx['&:hover'],
    transform: 'translateY(-4px)',
  },
};

const skillChipSx = {
  fontWeight: 600,
  borderRadius: '999px',
  bgcolor: 'rgba(139,124,255,0.1)',
  color: '#C4B5FD',
  border: '1px solid rgba(139,124,255,0.22)',
  '&:hover': { bgcolor: 'rgba(139,124,255,0.18)' },
};

const projectCardSx = {
  ...cardSx,
  bgcolor: '#0D1424',
  backgroundImage: 'none',
};

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
    <Typography
      variant="overline"
      sx={{
        display: 'block',
        mb: 1,
        color: '#67E8F9',
        fontWeight: 700,
        letterSpacing: '0.18em',
      }}
    >
      {eyebrow}
    </Typography>
    <Typography variant="h3" sx={{ ...sectionTitleSx, mb: 1.5 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, fontSize: '1.02rem' }}>
        {subtitle}
      </Typography>
    )}
    <Box
      sx={{
        width: 76,
        height: 3,
        mt: 2,
        borderRadius: '999px',
        background: accentGradient,
      }}
    />
  </Box>
);

const ProjectCard = ({ project }) => (
  <Card sx={projectCardSx} elevation={0}>
    <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: { xs: 2.5, md: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.5, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
          <Avatar
            sx={{
              width: 42,
              height: 42,
              borderRadius: '14px',
              bgcolor: 'rgba(139,124,255,0.14)',
              color: '#C4B5FD',
              border: '1px solid rgba(139,124,255,0.24)',
            }}
          >
            <Code sx={{ fontSize: 21 }} />
          </Avatar>
          <Typography variant="h6" sx={{ minWidth: 0, overflowWrap: 'anywhere', fontWeight: 800, fontSize: '1rem', lineHeight: 1.35, color: '#F8FAFC' }}>
            {project.title}
          </Typography>
        </Box>
        {project.repo && (
          <Tooltip title="View on GitHub">
            <IconButton
              size="medium"
              component="a"
              href={repoUrl(project.repo)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} repository on GitHub`}
              sx={{
                flexShrink: 0,
                width: 40,
                height: 40,
                color: 'text.secondary',
                bgcolor: 'rgba(148,163,184,0.08)',
                border: '1px solid rgba(148,163,184,0.14)',
                '&:hover': { color: '#67E8F9', bgcolor: 'rgba(34,211,238,0.1)', borderColor: 'rgba(34,211,238,0.28)' },
              }}
            >
              <GitHub sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
        <Chip
          size="small"
          icon={<Code sx={{ fontSize: 14 }} />}
          label={project.language}
          sx={skillChipSx}
        />
        {project.featured && (
          <Chip
            size="small"
            label="Featured"
            sx={{
              fontWeight: 700,
              borderRadius: '999px',
              bgcolor: 'rgba(34,211,238,0.12)',
              color: '#67E8F9',
              border: '1px solid rgba(34,211,238,0.28)',
            }}
          />
        )}
      </Box>

      <Typography variant="body2" sx={{ mb: project.features ? 1.5 : 0, flexGrow: 1, color: '#CBD5E1' }}>
        {project.description}
      </Typography>

      {project.features && (
        <Box sx={{ mb: 1.5 }}>
          {project.features.map((feature) => (
            <Box key={feature} sx={{ display: 'flex', gap: 1, py: 0.4 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#67E8F9', mt: '8px', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ fontSize: '0.84rem', color: '#CBD5E1' }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {project.featured && (
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto', pt: 2 }}>
          <Chip
            size="small"
            label="Production Project"
            sx={{
              fontWeight: 700,
              borderRadius: '999px',
              bgcolor: 'rgba(139,124,255,0.12)',
              color: '#C4B5FD',
              border: '1px solid rgba(139,124,255,0.26)',
            }}
          />
        </Box>
      )}
    </CardContent>
  </Card>
);

const Portfolio = () => {
  const stats = [
    { value: '6+', label: 'REST APIs integrated' },
    { value: '10K+', label: 'Records processed' },
    { value: projects.length, label: 'Projects built' },
  ];

  const profileDetails = [
    { icon: <LocationOn />, text: 'Namakkal, Tamil Nadu, India' },
    { icon: <Email />, text: 'espprasanna613@gmail.com', href: 'mailto:espprasanna613@gmail.com' },
    { icon: <Phone />, text: '+91 90033 81176', href: 'tel:+919003381176' },
    { icon: <GitHub />, text: `@${GITHUB_USER} on GitHub`, href: `https://github.com/${GITHUB_USER}` },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 85% 70% at 50% 0%, black 15%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 0%, black 15%, transparent 78%)',
          }}
        />
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: -180,
            left: '6%',
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,124,255,0.22), transparent 68%)',
            filter: 'blur(10px)',
          }}
        />
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            top: -120,
            right: '4%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.14), transparent 68%)',
            filter: 'blur(10px)',
          }}
        />

        <Container id="home" maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
          <Grid container spacing={{ xs: 5, md: 7 }} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Chip
                icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#34D399', boxShadow: '0 0 0 3px rgba(52,211,153,0.15)' }} />}
                label="Open to Full Stack Developer roles"
                sx={{
                  mb: 3,
                  height: 34,
                  bgcolor: 'rgba(52,211,153,0.1)',
                  color: '#6EE7B7',
                  border: '1px solid rgba(52,211,153,0.25)',
                  fontWeight: 700,
                  '& .MuiChip-icon': { color: '#34D399' },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.7rem', md: '4.35rem' },
                  lineHeight: 1.04,
                  letterSpacing: '-0.045em',
                  mb: 2,
                }}
              >
                Hi, I'm <Box component="span" sx={gradientTextSx}>Prasannakumar E</Box>
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#67E8F9',
                  fontSize: { xs: '1.35rem', md: '1.8rem' },
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.08rem', maxWidth: 640, lineHeight: 1.75 }}>
                I build scalable web applications using React.js, Node.js, and modern backend technologies.
                From production–consumption allocation platforms to asset management systems — I focus on
                clean architecture, performance, and maintainable code that delivers real business value.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  sx={{
                    px: 4,
                    background: accentGradient,
                    color: '#070B14',
                    '&:hover': { background: 'linear-gradient(135deg, #9D8FFF, #38E1F2)', transform: 'translateY(-2px)' },
                    transition: 'transform 0.2s ease, background 0.2s ease',
                  }}
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    borderColor: 'rgba(148,163,184,0.28)',
                    color: 'text.primary',
                    '&:hover': { borderColor: '#22D3EE', color: '#67E8F9', bgcolor: 'rgba(34,211,238,0.06)' },
                  }}
                >
                  View Projects
                </Button>
              </Box>

              <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap' }}>
                {stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography variant="h4" sx={{ ...gradientTextSx, fontWeight: 800, lineHeight: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: '0.04em' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Box sx={{ position: 'relative', maxWidth: 430, mx: { xs: 'auto', lg: 0 } }}>
                <Box
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    inset: -24,
                    borderRadius: '32px',
                    background: 'radial-gradient(circle at 30% 20%, rgba(139,124,255,0.2), transparent 62%)',
                    filter: 'blur(18px)',
                  }}
                />
                <Paper
                  elevation={0}
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    p: { xs: 3, md: 3.5 },
                    borderRadius: '24px',
                    bgcolor: 'rgba(13,20,36,0.78)',
                    border: '1px solid rgba(148,163,184,0.16)',
                    backdropFilter: 'blur(18px)',
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentGradient }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                    <Box sx={{ position: 'relative', width: 76, height: 76, flexShrink: 0 }}>
                      <Box
                        aria-hidden="true"
                        sx={{
                          position: 'absolute',
                          inset: -7,
                          borderRadius: '50%',
                          background: accentGradient,
                          filter: 'blur(12px)',
                          opacity: 0.55,
                        }}
                      />
                      <Avatar
                        sx={{
                          width: 76,
                          height: 76,
                          fontSize: '1.55rem',
                          fontWeight: 800,
                          background: accentGradient,
                          color: '#070B14',
                          border: '2px solid rgba(255,255,255,0.14)',
                          position: 'relative',
                        }}
                      >
                        PE
                      </Avatar>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        Prasannakumar E
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#67E8F9', fontWeight: 600 }}>
                        Full Stack Developer
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    size="small"
                    label="Open to opportunities"
                    sx={{
                      mb: 2.5,
                      fontWeight: 700,
                      borderRadius: '999px',
                      bgcolor: 'rgba(52,211,153,0.1)',
                      color: '#6EE7B7',
                      border: '1px solid rgba(52,211,153,0.24)',
                    }}
                  />
                  <Divider sx={{ mb: 2, borderColor: 'rgba(148,163,184,0.14)' }} />
                  {profileDetails.map((item) => (
                    <Box
                      key={item.text}
                      component={item.href ? 'a' : 'div'}
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                        mb: 1.4,
                        minHeight: item.href ? 44 : undefined,
                        color: 'inherit',
                        textDecoration: 'none',
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'rgba(103,232,249,0.2)',
                        '&:active': { opacity: 0.7 },
                        '&:focus-visible': { outline: '2px solid #67E8F9', outlineOffset: 3, borderRadius: 4 },
                      }}
                    >
                      <Box sx={{ color: '#67E8F9', display: 'flex', '& svg': { fontSize: 18 } }}>{item.icon}</Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.88rem' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                  <Button
                    fullWidth
                    variant="outlined"
                    href="#contact"
                    sx={{ mt: 2.5, borderColor: 'rgba(139,124,255,0.35)', color: '#E9D5FF' }}
                  >
                    Let's Connect
                  </Button>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About */}
      <Container id="about" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader eyebrow="01 · Profile" title="About Me" subtitle="A quick look at my background, working style, and the kind of products I enjoy building." />
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Paper sx={{ ...cardSx, p: { xs: 3, md: 4 }, height: '100%' }} elevation={0}>
              <Typography variant="overline" sx={{ color: '#67E8F9', fontWeight: 700, letterSpacing: '0.16em' }}>
                Professional Summary
              </Typography>
              <Typography
                variant="h4"
                sx={{ ...gradientTextSx, fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.15rem' }, lineHeight: 1.18, my: 2 }}
              >
                Clean code, thoughtful UX, and reliable systems.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75, flexGrow: 1 }}>
                Full Stack Developer at T-Mark Techs with hands-on experience developing and maintaining web
                applications, building RESTful APIs, and automating business processes. Skilled in React.js,
                JavaScript, Node.js, Express.js, SharePoint, SPFx, Power Automate, and Supabase. Experienced in
                SharePoint solutions, CRUD operations, third-party API integrations, and workflow automation.
                I have also worked on real-time transport and car parking availability systems, including data
                synchronization, backend APIs, and database management. Familiar with VPS deployment, server
                configuration, and application maintenance, and passionate about building scalable, efficient,
                user-friendly software.
              </Typography>
              <Chip
                label="Strio Kaizen Hi-Tech Research Labs • Nov 2024 – Present"
                sx={{ mt: 3, fontWeight: 700, borderRadius: '999px', bgcolor: 'rgba(139,124,255,0.12)', color: '#C4B5FD', border: '1px solid rgba(139,124,255,0.24)' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper sx={{ ...skillCardSx, p: { xs: 3, md: 4 }, height: '100%' }} elevation={0}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                What I do best
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                Translating business workflows into working software, with an emphasis on reusable components,
                maintainable APIs, and responsive interfaces.
              </Typography>
              <Grid container spacing={1.5}>
                {[
                  'Building reusable React components',
                  'Designing RESTful APIs with Node.js & Express',
                  'Working with SQL and NoSQL databases',
                  'Translating business workflows into working software',
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: accentGradient, flexShrink: 0, mt: '7px' }} />
                      <Typography variant="body2" color="text.secondary">{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Divider sx={{ my: 3, borderColor: 'rgba(148,163,184,0.14)' }} />
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Continuously learning and improving by building real-world projects and writing clean,
                maintainable code.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Skills */}
      <Container id="skills" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader eyebrow="02 · Stack" title="Technical Skills" subtitle="The technologies and tools I use to design, build, and ship modern web applications." />
        <Grid container spacing={3}>
          {[
            { title: 'Languages', icon: <Code />, items: technicalSkills.languages, wide: false },
            { title: 'Frontend', icon: <Web />, items: technicalSkills.frontend, wide: false },
            { title: 'Backend', icon: <Api />, items: technicalSkills.backend, wide: false },
            { title: 'Databases', icon: <Storage />, items: technicalSkills.databases, wide: false },
            { title: 'Tools & Concepts', icon: <Build />, items: technicalSkills.tools, wide: true },
          ].map((group) => (
            <Grid item xs={12} md={group.wide ? 12 : 6} key={group.title}>
              <Paper sx={skillCardSx} elevation={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '15px',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#C4B5FD',
                      bgcolor: 'rgba(139,124,255,0.13)',
                      border: '1px solid rgba(139,124,255,0.22)',
                      flexShrink: 0,
                    }}
                  >
                    {React.cloneElement(group.icon, { sx: { fontSize: 25 } })}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>{group.title}</Typography>
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
      <Container id="experience" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader eyebrow="03 · Experience" title="Work Experience" />
        <Grid container spacing={4} justifyContent="center">
          {experience.map((exp, index) => (
            <Grid item xs={12} md={10} key={index}>
              <Card sx={{ ...cardSx, p: 0 }} elevation={0}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'rgba(34,211,238,0.12)', color: '#67E8F9', width: 52, height: 52, borderRadius: '16px' }}>
                      <Work />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 800 }}>{exp.title}</Typography>
                      <Typography variant="h6" sx={{ color: '#67E8F9', fontWeight: 700 }}>{exp.company}</Typography>
                      <Chip
                        size="small"
                        label={`${exp.period} • ${exp.type}`}
                        sx={{ mt: 1.25, fontWeight: 700, borderRadius: '999px', bgcolor: 'rgba(34,211,238,0.1)', color: '#67E8F9', border: '1px solid rgba(34,211,238,0.24)' }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    {exp.description.map((desc) => (
                      <Box key={desc} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, py: 0.55 }}>
                        <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#67E8F9', mt: '8px', flexShrink: 0 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                          {desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Projects */}
      <Container id="projects" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader
          eyebrow="04 · Selected Work"
          title="Projects & Repositories"
          subtitle="A collection of my GitHub repositories and production-focused applications."
        />
        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Education */}
      <Container id="education" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader eyebrow="05 · Education" title="Education" />
        <Grid container spacing={3} justifyContent="center">
          {education.map((edu, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={cardSx} elevation={0}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                    <Avatar sx={{ bgcolor: 'rgba(34,211,238,0.12)', color: '#67E8F9', borderRadius: '14px' }}>
                      <School />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1rem', lineHeight: 1.35 }}>{edu.degree}</Typography>
                      <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
                      {edu.period && <Typography variant="body2" color="text.secondary">{edu.period}</Typography>}
                    </Box>
                  </Box>
                  {edu.cgpa && (
                    <Chip label={`CGPA: ${edu.cgpa}`} size="small" sx={{ ...skillChipSx, mt: 1 }} />
                  )}
                  {edu.percentage && (
                    <Chip label={`Percentage: ${edu.percentage}`} size="small" sx={{ ...skillChipSx, mt: 1, ml: edu.cgpa ? 1 : 0 }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact */}
      <Container id="contact" maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
        <SectionHeader eyebrow="06 · Contact" title="Get In Touch" subtitle="Have a project, role, or collaboration in mind? I'd love to hear from you." />
        <Grid container spacing={3} justifyContent="center">
          {[
            { icon: <Email />, label: 'Email', value: 'espprasanna613@gmail.com', href: 'mailto:espprasanna613@gmail.com' },
            { icon: <Phone />, label: 'Phone', value: '+91 90033 81176', href: 'tel:+919003381176' },
            { icon: <LinkedIn />, label: 'LinkedIn', value: 'linkedin.com/in/prasanna-kumar-e-4b370a253', href: 'https://www.linkedin.com/in/prasanna-kumar-e-4b370a253' },
            { icon: <GitHub />, label: 'GitHub', value: `github.com/${GITHUB_USER}`, href: `https://github.com/${GITHUB_USER}` },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Card
                component="a"
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={`${item.label}: ${item.value}`}
                sx={{
                  ...cardSx,
                  textDecoration: 'none',
                  color: 'inherit',
                  p: 0,
                  minHeight: 160,
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'rgba(103,232,249,0.2)',
                  '&:active': { transform: 'scale(0.98)' },
                  '&:focus-visible': { outline: '2px solid #67E8F9', outlineOffset: 3 },
                }}
                elevation={0}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', py: 3.5 }}>
                  <Avatar sx={{ mx: 'auto', mb: 1.5, width: 50, height: 50, borderRadius: '16px', bgcolor: 'rgba(34,211,238,0.12)', color: '#67E8F9' }}>
                    {item.icon}
                  </Avatar>
                  <Typography variant="subtitle2" color="text.secondary">{item.label}</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, wordBreak: 'break-all' }}>{item.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 }, mb: { xs: 5, md: 7 } }}>
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, rgba(139,124,255,0.18), rgba(34,211,238,0.1))',
            border: '1px solid rgba(139,124,255,0.25)',
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              width: 280,
              height: 280,
              right: -100,
              top: -120,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 68%)',
              filter: 'blur(8px)',
            }}
          />
          <Typography variant="h3" sx={{ ...gradientTextSx, fontWeight: 800, mb: 1.5, position: 'relative' }}>
            I'm actively looking for opportunities
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3, fontWeight: 500, position: 'relative' }}>
            as a Full Stack Developer / React Developer where I can contribute to building
            scalable products and continue growing as a software engineer.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              px: 5,
              position: 'relative',
              background: accentGradient,
              color: '#070B14',
              '&:hover': { background: 'linear-gradient(135deg, #9D8FFF, #38E1F2)', transform: 'translateY(-2px)' },
            }}
          >
            Let's Work Together
          </Button>
        </Paper>
      </Container>

      <Box sx={{ borderTop: '1px solid rgba(148,163,184,0.12)', py: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Prasannakumar E · Built with React & Material UI
        </Typography>
      </Box>
    </Box>
  );
};

export default Portfolio;
