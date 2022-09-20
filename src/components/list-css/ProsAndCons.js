
import { Box, Typography, List, ListItem } from '@mui/material';

function GlobalProsAndCons() {
  return (
    <Box>
      <Typography variant='h6'>Pros:</Typography>
      <List>
        <ListItem>Simple Syntax</ListItem>
        <ListItem>Most commonly known</ListItem>
        </List>
      <Typography variant='h6'>Cons:</Typography>
      <List>
        <ListItem>Global, unless defined otherwise</ListItem>
        <ListItem>Could add duplicates or over-ride stlyes</ListItem>
        <ListItem>Not easily re-usable </ListItem>
        </List>
        <Typography variant='body2'>See further infomation <a href="https://every-layout.dev/rudiments/global-and-local-styling/" target="_blank" rel="noreferrer noopener"> here</a>!</Typography>
    </Box>
  );
}

export default GlobalProsAndCons;
