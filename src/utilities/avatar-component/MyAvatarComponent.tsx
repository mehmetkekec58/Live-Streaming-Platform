import React, { CSSProperties } from 'react'
import { Avatar } from '@mui/material';
import { COLOR_LIST } from '../../contains/colors'


function randomColor(): string {
  return COLOR_LIST[(Math.floor(Math.random() * COLOR_LIST.length))];
}

function selectFirstLetter(text: string): string {
  return text.trim().substring(0, 1).toLocaleUpperCase();
}

interface Props {
  photoUrl?: string | null | undefined;
  fullName: string;
  style?: CSSProperties;
}

const MyAvatarComponent: React.FC<Props> = ({ photoUrl, fullName, style }: Props) => {
  return (
    <div>
      {photoUrl != null || photoUrl != undefined ?
        <Avatar style={style} alt={fullName} src={photoUrl}></Avatar> :
        <Avatar alt={fullName} style={{ ...style, backgroundColor: `${randomColor()}` }}>{selectFirstLetter(fullName)}</Avatar>}
    </div>
  )
}

export default MyAvatarComponent