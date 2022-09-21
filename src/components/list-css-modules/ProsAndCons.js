import { Box, Typography, List, ListItem } from '@mui/material';

function ModulesProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>
          Creates a random identifier to avoid naming collisions
        </ListItem>
        <ListItem>Modular and reusable CSS</ListItem>
        <ListItem>Local scope</ListItem>
      </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>More difficult to do dynamic CSS</ListItem>
        <ListItem>
          To describe global styles, you must use a syntax that does not belong
          to the CSS specification
        </ListItem>
        <ListItem></ListItem>
      </List>
      <Typography variant='body2'>
        See further information{' '}
        <a
          href='https://css-tricks.com/css-modules-part-1-need/'
          target='_blank'
          rel='noreferrer noopener'
        >
          {' '}
          here
        </a>
        !
      </Typography>
    </Box>
  );
}

export default ModulesProsAndCons;
