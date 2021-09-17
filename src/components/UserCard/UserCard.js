import React, {useEffect} from 'react';
import { UserModal } from '../UI';
const UserCard = (props) => {
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, [])
  return (
    <UserModal>
      UserCard
    </UserModal>
  )
}
export default UserCard;