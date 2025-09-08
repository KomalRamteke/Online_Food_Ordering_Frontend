import { Button } from "@mui/material";

export default function OrderCard() {
  return (
    <div className="flex items-center justify-between w-full max-w-lg p-5 bg-white rounded-lg shadow-md">
    
      <div className="flex-shrink-0">
        <img
          className="object-cover w-16 h-16 rounded-lg"
          src="https://miro.medium.com/v2/resize:fit:1200/1*rAjyyqwOPn82BtJnEnz3Kg.jpeg"
          alt="burger"
        />
      </div>

     
      <div className="flex flex-col ml-4">
        <p>Burger</p>
        <p>$200</p>
      </div>

  
      <div>
        <Button disabled className="cursor-not-allowed" variant="contained">
          Completed
        </Button>
      </div>
    </div>
  );
}
