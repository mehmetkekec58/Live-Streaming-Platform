import React from 'react';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import MyAvatarComponent from '../../../utilities/avatar-component/MyAvatarComponent';
import Button from 'react-bootstrap/esm/Button';
import FormControl from 'react-bootstrap/esm/FormControl';
import SendIcon from '@mui/icons-material/Send';
import './Chat.css';

const itemData = [
    {
        fullName:"Mehmet",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"deneme",
        Message:" Herkese merhabe ben Mehmet Kekeç ldp ladlşladadşdş  şş aşdişaidşş."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"hello",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"hey",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"its",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"Mehmet",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"its",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"Mehmet",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"its",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"what",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    {
        fullName:"Mehmet",
        Message:" Herkese merhabe ben Mehmet Kekeç."
    },
    
]
function Chat() {
    const OnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
         

        }
    }

  return (
    <div>
        <div className='chat-container'>
 Chat
 {itemData.map((item)=>(
  
<div className='general-message-container'>
{item.fullName == "what" ?
<div className='message-left'>
    <h6>{item.fullName}</h6>
    <MyAvatarComponent style={{float:'left'}}  fullName='O'/>
    <div className='div-for-message-left'><span className='message-text-for-message-left'> {item.Message}</span></div>
</div>
:
<div className='message-right'>
<h6>{item.fullName}</h6>
    <MyAvatarComponent style={{float:'right'}} fullName='A'/>
  <div className='div-for-message-right'>  <span className='message-text-for-message-right'> {item.Message}</span></div>
</div>}

</div>  

 ))}
                 
        </div>
                
        <InputGroup>
                <FormControl
                    placeholder="Yorum yaz."
                    as='input'
                    onChange={OnChange}
                    onKeyDown={handleKeyDown}
                />
        
                        <Button  className='button'>
                            <SendIcon />
                        </Button>
              
            </InputGroup>
    </div>
  )
}

export default Chat