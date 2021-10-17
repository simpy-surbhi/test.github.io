import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import * as React from 'react';
import { Contact } from '../../../model/Contacts';
import { DetailDialog } from './DetailDialog';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
  },
  grid: {
    textAlign:'right',
  },
  card: {
    marginBottom: theme.spacing(2),
    width:"100%",
  },
  cardMedia: {
    borderRadius: '50%',
    height: 30,
    width: 30,
    padding: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typography: {
    paddingLeft: theme.spacing(1.5),
    textAlign: 'left',
    width: '90%',
  },

  info: {
    width:"100%",
textAlign:"center",
margin:20,
  },

  img: {
    width: '10%',
    textAlign: 'right',
  },
  snackbarStyle:{
  backgroundColor:"red"
  },
}));

interface Props {
  tabValue: String;
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  contacts: Contact[];
}

export const AddressList: React.FC<Props> = ({ tabValue, setContacts, contacts }) => {
  const classes = useStyles();
  const [showModal, setModal] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [selectedContact, setSelectedContact] = React.useState<Contact>();

  const displayContacts = contacts.filter(
    (f) => f.name.first.charAt(0).toLowerCase() === tabValue.toLowerCase(),
  );
  const url = `https://randomuser.me/api?results=50`;
  const fetchContacts = async () => {
    try {
    const resp = await fetch(url);
    const respJson = await resp.json();
    setContacts(respJson.results);
    } catch(error) {
      setError(true);
    }
  }

  React.useEffect(() => {
    fetchContacts()
  },[]);
 
  return (
    <React.Fragment>
      {(!displayContacts || displayContacts.length===0)&& <Typography variant="h5" className={classes.info}>
          <strong> No Contact(s) found! </strong>
      </Typography>}
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6} lg={6} className={classes.grid}>
          {displayContacts
            ?.slice(0, Math.ceil(displayContacts.length / 2))
            .map((contact, index) => (
              <Card className={classes.card} key={index}>
                <CardActionArea
                  onClick={(ev) => {
                    setSelectedContact(contact);
                    setModal(true);
                  }}
                >
                  <CardContent className={classes.cardContent}>
                    <CardMedia
                      image={contact?.picture.thumbnail}
                      className={classes.cardMedia}
                    />
                    <Typography variant="h5" className={classes.typography}>
                      {contact.name.last + ', ' + contact.name.first}
                    </Typography>
                    <Box className={classes.img}>
                      <KeyboardArrowRight />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {displayContacts
            ?.slice(Math.ceil(displayContacts.length / 2))
            .map((contact, index) => (
              <Card className={classes.card} key={index}>
                <CardActionArea
                  onClick={(ev) => {
                    setSelectedContact(contact);
                    setModal(true);
                  }}
                >
                  <CardContent className={classes.cardContent}>
                    <CardMedia
                      image={contact?.picture.thumbnail}
                      className={classes.cardMedia}
                    />
                    <Typography variant="h5" className={classes.typography}>
                      {contact.name.last + ', ' + contact.name.first}
                    </Typography>
                    <Box className={classes.img}>
                      <KeyboardArrowRight />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </Grid>
      </Grid>
      <DetailDialog
        selectedContact={selectedContact}
        setModal={setModal}
        dialogProps={{
          open: showModal,
          onClose: (e) => {
            setModal(false);
          },
          fullWidth: true,
          maxWidth: 'md',
        }}
      />

<Snackbar
  open={error}
  autoHideDuration={2000}
  message="Error occurred!"
  color="secondary"
  onClose={() => setError(false)}
  ContentProps={{ className:classes.snackbarStyle }} 
/>
    </React.Fragment>
  );
};
