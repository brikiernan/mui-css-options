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
import { ListCssModules } from 'components/list-css-modules/ListCssModules';
import { ListJss } from 'components/list-jss/ListJss';
import { ListSxProp } from 'components/list-sx-prop/ListSxProp';
import { ListStyledComponents } from 'components/list-styled-components/ListStyledComponent';
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
        pros={["Simple Syntax", "Most Commonly Known", "Cleaner markup"]}
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
      <Heading>CSS Modules</Heading>
      <ListCssModules items={items} />
      <ProsAndCons
        pros={[
          'Creates a random identifier to avoid naming collisions',
          'Modular and reusable CSS',
          'Local scope',
        ]}
        cons={[
          "More difficult to do dynamic CSS",
          " To describe global styles, you must use a syntax that does not belong to the CSS specification",
          "Complicated",
        ]}
        resources={[
          {
            href: 'https://create-react-app.dev/docs/adding-a-css-modules-stylesheet',
            title: 'Create React App CSS Modules Docs',
          },
          {
            href: 'https://css-tricks.com/css-modules-part-1-need',
            title: 'Css Tricks Css Modules',
          },
        ]}
      />
    </Section>
    <StyledDivider />
    <Section>
      <Heading>CSS in JS</Heading>
      <ListJss items={items} />
      <ProsAndCons
        pros={[
          "Not global styling",
          "Given unique ID to avoid naming collisions",
          "Pass props or conditions to give styling to that condition",
          "Makes conditional rendering significantly easier",
          "Complicated and clunky",
          "Less maintainable, weird pattern",
        ]}
        cons={[
          'More complicated to write',
          'Not the recommended version',
          'Verbose',
        ]}
        resources={[
          {
            href: 'https://mui.com/system/styles/advanced/',
            title: 'Mui JSS Docs',
          },
        ]}
      />
    </Section>
    <StyledDivider />
    <Section>
      <Heading>SX Prop</Heading>
      <ListSxProp items={items} />
      <ProsAndCons
        pros={[
          "Can specify any valid CSS using this prop",
          "Reusable",
          "Use for 'one-time' styling, similar to inline styling",
          "No boilerplate code (requires less code)",
        ]}
        cons={[
          "More code, heavy markup",
          "No custom class name on the DOM",
          "Not Abstract",
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
      <Heading>Styled Components</Heading>
      <ListStyledComponents items={items} />
      <ProsAndCons
        pros={[
          'Abstract all styling components and package them into a new component',
          'Reusable',
          'Pure CSS, no different syntax',
          'Dynamic styling by using props',
        ]}
        cons={[
          'Polluting the React DOM- this library adds many levels of nesting',
          'Debugging can get tedious',
          'Workarounds are required',
          'Unusual way to write styles',
        ]}
        resources={[
          {
            href: 'https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component',
            title: 'Mui Docs On Using Styled Components',
          },
          {
            href: 'https://devrecipes.net/styled-components-pros-and-cons/',
            title: 'Styled Components',
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
          "ThemeProvider allows overridden stlyes to be applied to specific sections",
          "We can create themes and export them anywhere within the provider",
          "Makes conditional rendering significantly easier",
          "Reusable",
          "All the benefits of global CSS, none of the cons",
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
