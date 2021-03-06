import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import { Link } from 'react-router-dom';
import {Style} from './style';

export const mainListItems = (

  <div>
   <Link to="/Inicio" style={Style.itemMenu} >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Início" />
    </ListItem>
    </Link>

    <Link to="/Monitoria" style={Style.itemMenu} >
    <ListItem button>
      <ListItemIcon>
        <RecordVoiceOverIcon />
      </ListItemIcon>
      <ListItemText primary="Monitoria" />
    </ListItem>
    </Link>

    <Link to="/Feedbacks" style={Style.itemMenu}>
    <ListItem button>
      <ListItemIcon>
        <HeadsetMicIcon />
      </ListItemIcon>
      <ListItemText primary="Feedbacks" />
    </ListItem>
    </Link>

    <Link to="/Frequencia" style={Style.itemMenu}>
    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Frequencia" />
    </ListItem>
    </Link>
        
    <Link to="/Funcionarios" style={Style.itemMenu}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Funcionários" />
    </ListItem>
    </Link>
    
    <Link to="/FichaFuncional" style={Style.itemMenu}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ficha Funcional" />
    </ListItem>
    </Link>
    
    </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Configurações Avançadas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
  
export default function MenuNavbar(){
  
}