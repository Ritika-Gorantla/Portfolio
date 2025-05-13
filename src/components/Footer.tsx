import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#1a237e', color: 'white', py: 3, mt: 6, textAlign: 'center' }}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Ritika Gorantla. All rights reserved.
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>
      <Link href="mailto:ritikagorantla@gmail.com" color="inherit" underline="hover">ritikagorantla@gmail.com</Link> |
      <Link href="https://github.com/Ritika-Gorantla" color="inherit" underline="hover" target="_blank" rel="noopener"> GitHub</Link> |
      <Link href="https://www.linkedin.com/in/ritika-gorantla-719546207/" color="inherit" underline="hover" target="_blank" rel="noopener"> LinkedIn</Link>
    </Typography>
  </Box>
);

export default Footer; 