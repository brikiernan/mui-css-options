import {
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
import SXProsAndCons from 'components/list-sx-prop/ProsAndCons';
import JSSProsAndCons from 'components/list-jss/ProsAndCons';
import StyledProsAndCons from 'components/list-styled-components/ProsAndCons';
import ModulesProsAndCons from 'components/list-css-modules/ProsAndCons';
import GlobalProsAndCons from 'components/list-css/ProsAndCons';
import ThemeProsAndCons from 'components/list-mui-theme/ProsAndCons';
import Consensus from 'components/consensus/Consensus';

const Heading = styled('h3')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: theme.typography.fontWeightMedium,
  margin: theme.spacing(0),
}));

const Section = styled('section')({
  width: 480,
  gap: 8,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 16,
});

const App = () => (
  <Stack py={4} component='main' alignItems='center'>
    <Stack
      mb={2}
      spacing={1}
      width={theme => theme.spacing(60)}
      component='section'
    >
      <Typography fontWeight='medium' fontSize='1.25rem' component='h3'>
        Global CSS
      </Typography>
      <ListCss items={items} />
      <GlobalProsAndCons />
    </Stack>

    <Section>
      <Heading>CSS Modules</Heading>
      <ListCssModules items={items} />
      <ModulesProsAndCons />
    </Section>

    <Section>
      <Heading>CSS in JS</Heading>
      <ListJss items={items} />
      <JSSProsAndCons />
    </Section>

    <Section>
      <Heading>SX Prop</Heading>
      <ListSxProp items={items} />
      <SXProsAndCons />
    </Section>

    <Section>
      <Heading>Styled Components</Heading>
      <ListStyledComponents items={items} />
      <StyledProsAndCons />
    </Section>

    <Section>
      <Heading>Mui Theme</Heading>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ListMuiTheme items={items} />
      </ThemeProvider>
      <ThemeProsAndCons />
    </Section>

    <Section>
      <Consensus />
    </Section>
  </Stack>
);

export default App;
