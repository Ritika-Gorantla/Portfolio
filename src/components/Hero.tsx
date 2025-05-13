import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Ritika Gorantla
          </Typography>
          <Typography variant="h4" gutterBottom>
            Full Stack & Salesforce Developer
          </Typography>
          <Typography variant="h6" paragraph>
            Results-oriented developer with 2+ years of experience building scalable web applications, specializing in modern JavaScript frameworks, RESTful APIs, and Salesforce development. Proven ability to deliver high-impact solutions and drive measurable improvements in user experience and system performance.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
            href="#projects"
          >
            View My Work
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 