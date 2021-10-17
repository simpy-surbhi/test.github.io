import { Box, Tabs, Tab, makeStyles, Typography } from '@material-ui/core';
import { Contact } from 'model';
import * as React from 'react';
import { TabInfo } from '../Address';

const useStyles = makeStyles(() => ({
  typography: {
width:"100%",
textAlign:"center",
margin:20,
  },
box: {
  display:"flex",
  justifyContent:"center",
},
  tab: {
    fontSize: 20,
    minWidth: 59,
    margin: 2,
    background: 'white',
  },
}));

interface Props {
  setTab: React.Dispatch<React.SetStateAction<String>>;
  tabValue: String;
  contacts: Contact[];
}

export const AddressTab: React.FC<Props> = ({ setTab, tabValue, contacts }) => {
  const classes = useStyles();
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    processData();
  },[contacts]);

  const tabsInfo: TabInfo[] = [
    { tabName: 'A', count: 0 },
    { tabName: 'B', count: 0 },
    { tabName: 'C', count: 0 },
    { tabName: 'D', count: 0 },
    { tabName: 'E', count: 0 },
    { tabName: 'F', count: 0 },
    { tabName: 'G', count: 0 },
    { tabName: 'H', count: 0 },
    { tabName: 'I', count: 0 },
    { tabName: 'J', count: 0 },
    { tabName: 'K', count: 0 },
    { tabName: 'L', count: 0 },
    { tabName: 'M', count: 0 },
    { tabName: 'N', count: 0 },
    { tabName: 'O', count: 0 },
    { tabName: 'P', count: 0 },
    { tabName: 'Q', count: 0 },
    { tabName: 'R', count: 0 },
    { tabName: 'S', count: 0 },
    { tabName: 'T', count: 0 },
    { tabName: 'U', count: 0 },
    { tabName: 'V', count: 0 },
    { tabName: 'W', count: 0 },
    { tabName: 'X', count: 0 },
    { tabName: 'Y', count: 0 },
    { tabName: 'Z', count: 0 },
  ];
  const [tabsInfoState, setAllTabsInfo] = React.useState<TabInfo[]>(tabsInfo);

  return (
    <React.Fragment>
      <Typography variant="h2" className={classes.typography}>
          <strong> CONTACTS LIST </strong>
      </Typography>
      <Box className={classes.box}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          TabIndicatorProps={{ style: { height: 5 } }}
        >
          {tabsInfoState.map((t, index) => (
            <Tab
              value={t.tabName}
              label={
                <React.Fragment>
                  {t.tabName}
                  <br />
                  <span
                    style={{
                      width: '100%',
                      fontSize: 11,
                      textAlign: 'right',
                    }}
                  >
                    {t.count}
                  </span>
                </React.Fragment>
              }
              href={`#${t.tabName}`}
              className={classes.tab}
              disabled={t.count === 0}
              key={index}
            />
          ))}
        </Tabs>
      </Box>
    </React.Fragment>
  );

  function processData() {
    tabsInfo.forEach((tab) => {
      tab.count = contacts
        ? contacts.filter(
            (f) =>
              f.name.first.charAt(0).toLowerCase() ===
              tab.tabName.toLowerCase(),
          ).length
        : 0;
    });
    setAllTabsInfo(tabsInfo);
  }

};
