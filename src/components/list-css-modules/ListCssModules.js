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
import styles from './ListCssModules.module.css';

export const ListCssModules = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List className={styles['MuiList-root']}>
        {items.map((item, i) => (
          <ListItemButton
            className={`${styles['MuiListItemButton-root']} ${
              styles['MuiListItemButton-divider']
            } ${i === selected && styles['Mui-selected']}`}
            disableRipple
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
          >
            <ListItemIcon className={styles['MuiListItemIcon-root']}>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText
              className={`${styles['MuiListItemText-primary']} ${styles['MuiListItemText-secondary']}`}
              primary={item.text}
              secondary={item.subText}
            />
            <Stack className={styles.ListCssStack}>
              <Typography>{item.dateStart}</Typography>
              <Typography>{item.timeStart}</Typography>
            </Stack>
            <Stack className={styles.ListCssStack}>
              <Typography>{item.dateEnd}</Typography>
              <Typography>{item.timeEnd}</Typography>
            </Stack>
            <ButtonGroup>
              <IconButton disableRipple>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton
                disableRipple
                className={styles['MuiIconButton-root']}
              >
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
