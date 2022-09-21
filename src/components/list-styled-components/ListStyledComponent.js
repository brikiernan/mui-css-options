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
  styled,
} from '@mui/material';

const RuxList = styled(List)({
  backgroundColor: 'var(--color-background-surface-default)',
});

const RuxListItem = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  gap: theme.spacing(2),
  '&:hover': {
    backgroundColor: 'var(--color-background-surface-hover)',
  },
  '&.Mui-selected': {
    backgroundColor: 'var(--color-background-surface-selected)',
    borderLeft: '4px solid var(--color-border-interactive-default)',
    paddingLeft: theme.spacing(1.5),
  },
  '&.MuiListItemButton-divider': {
    borderBottom: '2px solid var(--color-text-inverse)',
  },
}));

const TextSmall = styled(Typography)({
  fontSize: 'var(--font-size-sm)',
});

export const ListStyledComponents = ({ items }) => {
  const [selected, setSelected] = useState(-1);
  const handleSelected = index => setSelected(index);
  const resetSelected = () => setSelected(-1);

  return (
    <ClickAwayListener onClickAway={resetSelected}>
      <RuxList disablePadding>
        {items.map((item, i) => (
          <RuxListItem
            divider
            disableRipple
            selected={i === selected}
            onClick={() => handleSelected(i)}
            key={i}
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
              <TextSmall>{item.timeStart}</TextSmall>
            </Stack>
            <Stack alignItems='center' minWidth='fit-content'>
              <Typography>{item.dateEnd}</Typography>
              <TextSmall>{item.timeEnd}</TextSmall>
            </Stack>
            <ButtonGroup>
              <IconButton disableRipple>
                <RuxIcon size='1.25rem' icon='edit' />
              </IconButton>
              <IconButton disableRipple sx={{ p: 0 }}>
                <RuxIcon size='1.75rem' icon='more-vert' />
              </IconButton>
            </ButtonGroup>
          </RuxListItem>
        ))}
      </RuxList>
    </ClickAwayListener>
  );
};
