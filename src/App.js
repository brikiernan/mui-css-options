import {
  Stack,
  styled,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { items } from "data/items";
import { theme } from "themes/theme";
import { ListCss } from "components/list-css/ListCss";
import { ListCssModules } from "components/list-css-modules/ListCssModules";
import { ListJss } from "components/list-jss/ListJss";
import { ListSxProp } from "components/list-sx-prop/ListSxProp";
import { ListStyledComponents } from "components/list-styled-components/ListStyledComponent";
import { ListMuiTheme } from "components/list-mui-theme/ListMuiTheme";
import { ProsAndCons } from "components/ProsAndCons";
import Consensus from "components/consensus/Consensus";

const Heading = styled("h3")(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: theme.typography.fontWeightMedium,
  margin: theme.spacing(0),
}));

const Section = styled("section")({
  width: 480,
  gap: 8,
  display: "flex",
  flexDirection: "column",
  marginBottom: 16,
});

const App = () => (
  <Stack py={4} component="main" alignItems="center">
    <Stack
      mb={2}
      spacing={1}
      width={(theme) => theme.spacing(60)}
      component="section"
    >
      <Typography fontWeight="medium" fontSize="1.25rem" component="h3">
        Global CSS
      </Typography>
      <ListCss items={items} />
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Stack>

    <Section>
      <Heading>CSS Modules</Heading>
      <ListCssModules items={items} />
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Section>

    <Section>
      <Heading>CSS in JS</Heading>
      <ListJss items={items} />
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Section>

    <Section>
      <Heading>SX Prop</Heading>
      <ListSxProp items={items} />
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Section>

    <Section>
      <Heading>Styled Components</Heading>
      <ListStyledComponents items={items} />
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Section>

    <Section>
      <Heading>Mui Theme</Heading>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ListMuiTheme items={items} />
      </ThemeProvider>
      <ProsAndCons
        pros={["aklsdh", "laskd"]}
        cons={["lkahlk", "laksjals"]}
        resources={[{ href: "#", title: "Resource tile" }]}
      />
    </Section>

    <Section mt={8}>
      <Consensus />
    </Section>
  </Stack>
);

export default App;
