import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Teacher } from './teacher';
import { Student } from './student';
import { Subject } from './subject';
import { GeneralData } from './generalData';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabIC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
        <Tab label="Datos Generales" {...a11yProps(0)} />
          <Tab label="Docentes" {...a11yProps(1)} />
          <Tab label="Estudiantes" {...a11yProps(2)} />
          <Tab label="Materias" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GeneralData></GeneralData>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Teacher></Teacher>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Student></Student>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Subject></Subject>
      </TabPanel>
      
    </Box>
  );
}
