import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

export default function AddressCard({ item, showButton,handleSelectAddress}) {
 

  return (
    <Card className="flex w-64 gap-5 p-5 border rounded-lg shadow-md">
      <HomeIcon fontSize="large" />
      <div className="space-y-4">
        <h1 className="text-lg font-semibold text-center">Home</h1>
        <p>Rajkam Chowk, Bus Stand, Amravati</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={()=>handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
}
