import { Box, Typography, List, ListItem } from '@mui/material';

function ThemeProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>ThemeProvider allows overridden stlyes to be applied to specific sections</ListItem>
        <ListItem>We can create themes and export them anywhere within the provider</ListItem>
        <ListItem>Makes conditional rendering significantly easier </ListItem>
        <ListItem>Reusable</ListItem>
        </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>Overriding them theme requires knowledge of theme override syntax </ListItem>
        <ListItem>More complicated to write</ListItem>
        <ListItem>Verbose</ListItem>
        </List>
        <Typography variant='body2'>See further information <a href="https://mui.com/material-ui/customization/theming/" target="_blank" rel="noreferrer noopener"> here</a>!</Typography>
    </Box>
  );
}

export default ThemeProsAndCons;
