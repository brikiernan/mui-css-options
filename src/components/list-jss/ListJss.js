import { useState } from 'react';
import { RuxIcon, RuxStatus } from '@astrouxds/react';
import { makeStyles } from '@mui/styles';
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

const useStyles = makeStyles({
  list: {
    backgroundColor: 'var(--color-background-surface-default)',
  },
  listItem: {
    gap: 16,
    padding: '4px 16px !important',
    '&:hover': {
      backgroundColor: 'var(--color-background-surface-hover) !important',
    },
    '&.Mui-selected': {
      backgroundColor: 'var(--color-background-surface-selected) !important',
      borderLeft: '4px solid var(--color-border-interactive-default)',
      paddingLeft: '12px !important',
    },
  },
  divider: {
    borderBottom: '2px solid var(--color-text-inverse) !important',
  },
  listItemIcon: {
    minWidth: '14px !important',
  },
  textPrimary: {
    color: 'var(--color-text-primary)',
    fontSize: 'var(--font-size-xl) !important',
    fontWeight: 'var(--font-weight-medium) !important',
    lineHeight: 'var(--line-height-base) !important',
  },
  textSecondary: {
    color: 'var(--color-text-secondary) !important',
    fontSize: 'var(--font-size-sm) !important',
    fontWeight: 'var(--font-weight-regular) !important',
    lineHeight: 'var(--line-height-sm) !important',
    maxWidth: '80%',
  },
  iconButton: {
    padding: '0 !important',
  },
});

export const ListJss = ({ items }) => {
  const styles = useStyles();
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List disablePadding classes={{ root: styles.list }}>
        {items.map((item, i) => (
          <ListItemButton
            className={styles.listItem}
            classes={{ divider: styles.divider }}
            disableRipple
            divider
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
          >
            <ListItemIcon className={styles.listItemIcon}>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: styles.textPrimary,
                secondary: styles.textSecondary,
              }}
              primaryTypographyProps={{ noWrap: true }}
              secondaryTypographyProps={{ noWrap: true }}
              primary={item.text}
              secondary={item.subText}
            />
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateStart}</Typography>
              <Typography>{item.timeStart}</Typography>
            </Stack>
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateEnd}</Typography>
              <Typography>{item.timeEnd}</Typography>
            </Stack>
            <ButtonGroup>
              <IconButton disableRipple>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton disableRipple classes={{ root: styles.iconButton }}>
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
