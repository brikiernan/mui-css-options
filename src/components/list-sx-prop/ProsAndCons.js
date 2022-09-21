import { Box, Typography, List, ListItem } from '@mui/material';

function SXProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>Can specify any valid CSS using this prop</ListItem>
        <ListItem>Reusable</ListItem>
        <ListItem>Use for "one-time" styling</ListItem>
        <ListItem>No boilerplate code (requires less code)</ListItem>
      </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>More code</ListItem>
        <ListItem>No custom class name on the DOM</ListItem>
        <ListItem>Can be considered "inline" styling </ListItem>
        <ListItem>Not abstract</ListItem>
      </List>
      <Typography variant='body2'>
        See further information{' '}
        <a
          href='https://mui.com/system/getting-started/the-sx-prop/'
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

export default SXProsAndCons;
