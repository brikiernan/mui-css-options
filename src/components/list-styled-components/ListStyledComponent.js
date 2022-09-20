import { useState } from 'react';
import { RuxButton, RuxStatus } from '@astrouxds/react';
import {
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

export const ListStyledComponents = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List>
        {items.map((item, i) => (
          <ListItemButton
            disableRipple
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
          >
            <ListItemIcon>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText primary={item.text} secondary={item.subText} />
            <Stack>
              <Typography>{item.dateStart}</Typography>
              <Typography>{item.timeStart}</Typography>
            </Stack>
            <Stack>
              <Typography>{item.dateEnd}</Typography>
              <Typography>{item.timeEnd}</Typography>
            </Stack>
            <RuxButton icon='edit' iconOnly borderless />
            <RuxButton icon='more-vert' iconOnly borderless />
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
