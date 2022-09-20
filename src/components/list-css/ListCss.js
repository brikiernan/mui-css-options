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
  Typography,
} from '@mui/material';
import './ListCss.css';

export const ListCss = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List className='ListCss'>
        {items.map((item, i) => (
          <ListItemButton
            className='ListCssItem'
            disableRipple
            divider
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
          >
            <ListItemIcon className='ListCssItemIcon'>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText
              className='ListCssItemText'
              primary={item.text}
              secondary={item.subText}
            />
            <Stack className='ListCssStack'>
              <Typography>{item.dateStart}</Typography>
              <Typography>{item.timeStart}</Typography>
            </Stack>
            <Stack className='ListCssStack'>
              <Typography>{item.dateEnd}</Typography>
              <Typography>{item.timeEnd}</Typography>
            </Stack>
            <ButtonGroup>
              <IconButton disableRipple>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton disableRipple className='ListCssIconButton'>
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
