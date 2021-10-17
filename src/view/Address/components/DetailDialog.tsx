import {
  CardMedia,
  DialogProps,
  Grid,
  makeStyles,
  TableRow,
  TableCell,
  Typography,
  Table,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import * as React from 'react';
import { Contact } from '../../../model/Contacts';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(1.2),
  },
  cardMedia: {
    paddingTop: '100%',
    borderRadius: '50%',
  },
  tableHeader: {
    fontSize: 20,
    borderBottom: 'none',
  },
  tableValue: {
    fontSize: 20,
    borderBottom: 'none',
  },
  title: {
    margin: 0,
    padding: 0,
    marginBottom: theme.spacing(2.5),
  },
  gridDetail: {},
}));
interface Props {
  dialogProps: DialogProps;
  selectedContact?: Contact;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DetailDialog: React.FC<Props> = ({
  dialogProps,
  selectedContact,
  setModal,
}) => {
  const [contact, setContact] = React.useState<Contact>();
  const classes = useStyles();

  const details = [
    { key: 'e-mail', value: contact?.email },
    { key: 'phone', value: contact?.phone },
    {
      key: 'street',
      value:
        contact?.location.street.number + ' ' + contact?.location.street.name,
    },
    { key: 'city', value: contact?.location.city },
    { key: 'state', value: contact?.location.state },
    { key: 'postcode', value: contact?.location.postcode },
  ];

  const tableData = details.map((item, index) => (
    <TableRow key={index}>
      <TableCell className={classes.tableHeader}>
        <strong>{item.key}</strong>
      </TableCell>
      <TableCell align="left" className={classes.tableValue}>
        {item.value?.toString()}
      </TableCell>
    </TableRow>
  ));
  React.useEffect(() => {
    setContact(selectedContact);
  }, [selectedContact]);
  return (
      <Dialog {...dialogProps}>
        <DialogTitle>
          Contact Details 
        </DialogTitle>
        <DialogContent>
          <Grid container className={classes.root}>
            <Grid item xs={6} md={6} lg={4}>
              <CardMedia
                image={contact?.picture.large}
                className={classes.cardMedia}
              />
            </Grid>
            <Grid item xs={6} md={6} lg={8} className={classes.gridDetail}>
              <Typography variant="h3" color="secondary" className={classes.title}>
                {contact?.name.last + ', ' + contact?.name.first}
              </Typography>
              <Table size="small">
                <TableBody>{tableData}</TableBody>
              </Table>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e)=> {
              setModal(false);
            }
            }
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
};
