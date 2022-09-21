import {
  Box,
  Stack,
  styled,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { items } from 'data/items';
import { theme } from 'themes/theme';
import { ListCss } from 'components/list-css/ListCss';
import { ListCssModules } from 'components/list-css-modules/ListCssModules';
import { ListJss } from 'components/list-jss/ListJss';
import { ListSxProp } from 'components/list-sx-prop/ListSxProp';
import { ListStyledComponents } from 'components/list-styled-components/ListStyledComponent';
import { ListMuiTheme } from 'components/list-mui-theme/ListMuiTheme';

const Heading = styled('h3')(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  fontSize: '1.25rem',
  fontWeight: theme.typography.fontWeightMedium,
  margin: theme.spacing(0),
}));

const Section = styled('section')(({ theme }) => ({
  width: theme.spacing(60),
}));

const App = () => (
  <Stack py={4} component='main' alignItems='center'>
    <Box width={theme => theme.spacing(60)} component='section'>
      <Typography
        pt={2}
        pl={2}
        fontWeight='medium'
        fontSize='1.25rem'
        component='h3'
      >
        Global CSS
      </Typography>
      <ListCss items={items} />
    </Box>

    <Section>
      <Heading>CSS Modules</Heading>
      <ListCssModules items={items} />
    </Section>

    <Section>
      <Heading>CSS in JS</Heading>
      <ListJss items={items} />
    </Section>

    <Section>
      <Heading>SX Prop</Heading>
      <ListSxProp items={items} />
    </Section>

    <Section>
      <Heading>Styled Components</Heading>
      <ListStyledComponents items={items} />
    </Section>

    <Section>
      <Heading>Mui Theme</Heading>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ListMuiTheme items={items} />
      </ThemeProvider>
    </Section>
  </Stack>
);

export default App;
