import { useState } from 'react';
import { RuxIcon, RuxStatus } from '@astrouxds/react';
import {
  ButtonGroup,
  ClickAwayListener,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  Typography,
} from '@mui/material';

const TextSmall = styled(Typography)({
  fontSize: 'var(--font-size-sm)',
});

export const ListMuiTheme = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List>
        {items.map((item, i) => (
          <ListItemButton
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
          >
            <ListItemIcon>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText primary={item.text} secondary={item.subText} />
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateStart}</Typography>
              <TextSmall>{item.timeStart}</TextSmall>
            </Stack>
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateEnd}</Typography>
              <TextSmall>{item.timeEnd}</TextSmall>
            </Stack>
            <ButtonGroup>
              <IconButton>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
