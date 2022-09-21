import { Box, Typography, List, ListItem } from '@mui/material';

function StyledProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>
          Abstract all styling components and package them into a new component
        </ListItem>
        <ListItem>Reusable</ListItem>
        <ListItem>Pure CSS, no different syntax</ListItem>
        <ListItem>Dynamic styling by using props</ListItem>
        </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>
          Polluting the React DOM- this library adds many levels of nesting{' '}
        </ListItem>
        <ListItem>Debugging can get tedious </ListItem>
        <ListItem>Workarounds are required </ListItem>
        <ListItem>Unusual way to write styles</ListItem>
        </List>
        <Typography variant='body2'>See further information <a href="https://devrecipes.net/styled-components-pros-and-cons/" target="_blank" rel="noreferrer noopener"> here</a>!</Typography>
    </Box>
  )
}

export default StyledProsAndCons;

