import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

const FrontPage = (props) => {
  const navigate = useNavigate()

return (
  <div className="mainContainer">
    <div className={'titleContainer'}>
      <div>Welcome!</div>
    </div>
    <div>This is the home page.</div>
  </div>
)
}

export default FrontPage