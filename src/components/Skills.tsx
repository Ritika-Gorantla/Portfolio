import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Front-end': [
      'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js'
    ],
    'Back-end': [
      'Node.js', 'RESTful APIs', 'Python (FastAPI)', 'Java', 'Express.js', 'Serverless Functions'
    ],
    'Databases': [
      'SQL', 'MongoDB', 'PostgreSQL', 'Database Design Optimization', 'Data Modeling'
    ],
    'Salesforce': [
      'LWC', 'Apex', 'SOQL', 'SOSL', 'Visualforce', 'Administration'
    ],
    'Tools': [
      'Git', 'CI/CD', 'Jira', 'Figma', 'Slack', 'BASH', 'AWS Lambda', 'Docker'
    ],
    'State Management': [
      'Redux', 'RxJS'
    ],
    'AI/ML & Gen AI': [
      'LLMs', 'Langchain', 'Prompt Engineering', 'Model Fine-Tuning', 'Vector Databases (FAISS, Pinecone)'
    ]
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Skills & Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }} alignItems="stretch">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Grid key={category} item xs={12} md={4} display="flex">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 260,
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillList.map((skill) => (
                      <Typography
                        key={skill}
                        sx={{
                          bgcolor: '#e3f2fd',
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          fontSize: '0.9rem',
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 