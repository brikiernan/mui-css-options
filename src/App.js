import {
  Stack,
  styled,
  Divider,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { items } from 'data/items';
import { theme } from 'themes/theme';
import { ListCss } from 'components/list-css/ListCss';
import { ListSxProp } from 'components/list-sx-prop/ListSxProp';
import { ListMuiTheme } from 'components/list-mui-theme/ListMuiTheme';
import { ProsAndCons } from 'components/ProsAndCons';

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

const StyledDivider = styled(Divider)({
  borderColor: 'white',
  width: 500,
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
      <ProsAndCons
        pros={['Simple Syntax', 'Most Commonly Known', 'Cleaner markup']}
        cons={[
          'Global, unless defined otherwise',
          'Could add duplicates or over-ride stlyes',
          'Not easily re-usable',
        ]}
        resources={[
          {
            href: 'https://create-react-app.dev/docs/adding-a-stylesheet',
            title: 'Create React App Global CSS Docs',
          },
          {
            href: "https://every-layout.dev/rudiments/global-and-local-styling/'",
            title: 'Global CSS',
          },
        ]}
      />
    </Stack>

    <StyledDivider />

    <Section>
      <Heading>SX Prop</Heading>
      <ListSxProp items={items} />
      <ProsAndCons
        pros={[
          'Can specify any valid CSS using this prop',
          'Reusable',
          "Use for 'one-time' styling, similar to inline styling",
          'No boilerplate code (requires less code)',
        ]}
        cons={[
          'More code, heavy markup',
          'No custom class name on the DOM',
          'Not Abstract',
        ]}
        resources={[
          {
            href: 'https://mui.com/system/getting-started/the-sx-prop/',
            title: 'Mui SX Docs',
          },
        ]}
      />
    </Section>

    <StyledDivider />

    <Section>
      <Heading>Mui Theme</Heading>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ListMuiTheme items={items} />
      </ThemeProvider>
      <ProsAndCons
        pros={[
          'ThemeProvider allows overridden stlyes to be applied to specific sections',
          'We can create themes and export them anywhere within the provider',
          'Makes conditional rendering significantly easier',
          'Reusable',
          'All the benefits of global CSS, none of the cons',
        ]}
        cons={[
          'Overriding them theme requires knowledge of theme override syntax',
          'More complicated to write',
          'Verbose',
        ]}
        resources={[
          {
            href: 'https://mui.com/material-ui/customization/theming/',
            title: 'Mui Theme Docs',
          },
          {
            href: 'https://mui.com/material-ui/customization/default-theme/',
            title: 'Mui Default Theme Docs',
          },
        ]}
      />
    </Section>
  </Stack>
);

export default App;
