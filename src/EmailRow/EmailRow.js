
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import React from 'react'
import './EmailRow.css';

import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
import { useNavigate } from 'react-router';



function EmailRow({id, title, subject, descryption, time}) {



  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleClick() {dispatch(
      selectMail(
      {id,
     title,
     subject,
      descryption,
      time,
      }
  
  )); 
  navigate("/mail");
  } 

  return (
    <div onClick={handleClick} className='emailRow'>
        <div className="emailRow-options">
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>
        <h3 className="emailRow-title">
            {title}
        </h3>
        <div className="emailRow-message">
            <h4>
                {subject} {' '}
                <span className="emailRow-descryption">-
                    {descryption}
                </span>
            </h4>
        </div>
        <p className="emailRow-time">{time}</p>

    </div>
  )
}


export default EmailRow