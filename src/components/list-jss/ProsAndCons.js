import { Box, Typography, List, ListItem } from '@mui/material';

function JSSProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>Not global styling</ListItem>
        <ListItem>Given unique ID to avoid naming collisions</ListItem>
        <ListItem>Pass props or conditions to give styling to that condition</ListItem>
        <ListItem>Makes conditional rendering significantly easier</ListItem>
        </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>More complicated to write</ListItem>
        <ListItem>Not the recommended version</ListItem>
        <ListItem>Verbose </ListItem>
        </List>
        <Typography variant='body2'>See further information <a href="https://mui.com/system/styles/advanced/" target="_blank" rel="noreferrer noopener"> here</a>!</Typography>
    </Box>
  );
}

export default JSSProsAndCons;
