import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
export default function UserProfile() {
    const handleLogout=()=>{
        
    }
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
    <div className="flex flex-col items-center justify-center">
    <AccountCircleIcon sx={{fontSize:'9rem'}} />
    <h1 className="py-5 text-2xl font-semibold">Code with Komal</h1>
    <p>email:komal@gmail.com</p>
    <Button sx={{margine:"2rem"}} onClick={handleLogout} variant='contained'>Logout</Button>
    </div>
    </div>
  )
}