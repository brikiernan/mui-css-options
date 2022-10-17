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

const sx = {
  p: theme => theme.spacing(0.5, 2),
  gap: 2, // 16px
  '&:hover': {
    backgroundColor: 'var(--color-background-surface-hover)',
  },
  '&.Mui-selected': {
    backgroundColor: 'var(--color-background-surface-selected)',
    borderLeft: '4px solid var(--color-border-interactive-default)',
    paddingLeft: 1.5, // 12px
  },
  '&.MuiListItemButton-divider': {
    borderBottom: '2px solid var(--color-text-inverse)',
  },
};

export const ListSxProp = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <List
        disablePadding
        sx={{ bgcolor: 'var(--color-background-surface-default)' }}
      >
        {items.map((item, i) => (
          <ListItemButton
            divider
            disableRipple
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
            sx={sx}
          >
            <ListItemIcon sx={{ minWidth: '14px' }}>
              <RuxStatus status={item.status} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-base)',
              }}
              secondaryTypographyProps={{
                noWrap: true,
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: 'var(--line-height-sm)',
                maxWidth: '80%',
              }}
              primary={item.text}
              secondary={item.subText}
            />
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateStart}</Typography>
              <Typography fontSize='var(--font-size-sm)'>
                {item.timeStart}
              </Typography>
            </Stack>
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateEnd}</Typography>
              <Typography fontSize='var(--font-size-sm)'>
                {item.timeEnd}
              </Typography>
            </Stack>
            <ButtonGroup>
              <IconButton disableRipple>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton disableRipple sx={{ p: 0 }}>
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </ListItemButton>
        ))}
      </List>
    </ClickAwayListener>
  );
};
