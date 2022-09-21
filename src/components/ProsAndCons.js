import { Box, Typography, List, Link, ListItem } from "@mui/material";

export const ProsAndCons = ({ pros, cons, resources }) => (
  <Box>
    <Typography variant="h6">Pros:</Typography>
    <List>
      {pros.map((pro) => (
        <ListItem key={pro}>{pro}</ListItem>
      ))}
    </List>
    <Typography variant="h6">Cons:</Typography>
    <List>
      {cons.map((con) => (
        <ListItem>{con}</ListItem>
      ))}
    </List>
    <Typography variant="h6">Resources:</Typography>
    {resources.map(({ href, title }) => (
      <Link
        variant="body2"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </Link>
    ))}
  </Box>
);
