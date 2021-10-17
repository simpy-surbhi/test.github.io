import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    ...theme.mixins.gutters(),
    marginBottom: theme.spacing(3),
  },
  filterDateInputs: {
    marginTop: theme.spacing(1.25),
  },
  matchContainer: {
    display: 'flex',
  },
  leftMatch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 200,
  },
  rightMatch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 200,
  },
  vsSeperater: {
    fontSize: 11,
    padding: 20,
  },
}));
