import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import Title from './Title';


const FrontPage = (props) => {
  const navigate = useNavigate()

return (
  <div className="mainContainer">
    <div className={'titleContainer'}>
      <Title>Welcome!</Title>
    </div>
    <Title>This is the home page.</Title>
  </div>
)
}

export default FrontPage