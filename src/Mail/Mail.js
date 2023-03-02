import { IconButton } from '@mui/material'
import React from 'react'
import './Mail.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';
import { useNavigate } from 'react-router';
function Mail() {

  
const navigate = useNavigate();
  function handleClick() {
  navigate('/')
  }


 const selectedMail = useSelector(selectOpenMail);

  return (
    <div className='mail'>
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={handleClick}>
           <ArrowBackIcon />
          </IconButton>

          <IconButton>
           <MoveToInboxIcon />
          </IconButton>

          <IconButton>
           <ErrorIcon />
          </IconButton>
          
          <IconButton>
           <DeleteIcon />
          </IconButton>

          <IconButton>
           <EmailIcon />
          </IconButton>

          <IconButton>
           <WatchLaterIcon />
          </IconButton>

          <IconButton>
           <CheckCircleOutlineIcon />
          </IconButton>

          <IconButton>
           <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />           
          </IconButton>

        </div>
        <div className="mail-toolsRight">

          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className='mail-important' />
          <p>{selectedMail?.title}f</p>
          <p className='mail-time'>{selectedMail?.time}</p>

        </div>
        <div className="mail-message">
          <p>
            {selectedMail?.descryption}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mail