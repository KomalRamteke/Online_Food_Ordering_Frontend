import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function OrderCard() {
  return (
    <Card className="w-full max-w-md rounded-lg shadow-md">
      <CardMedia
        component="img"
        height="140"
        image="https://miro.medium.com/v2/resize:fit:1200/1*rAjyyqwOPn82BtJnEnz3Kg.jpeg"
        alt="Burger"
      />

      <CardContent className="flex items-center justify-between">
        <div>
          <Typography variant="h6">INdian Fast Food</Typography>
          <Typography variant="body2" color="text.secondary">
            50% on Your first order
          </Typography>
          <Typography>
            <div className="py-2 space-y-2 ">
              <p>{"akola"}</p>
              <p className="text-green-600 "> February 14,2025 12:00</p>
              <p className="text-red-600 "> February 29,2024 12:00</p>
            </div>
          </Typography>
        </div>

        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
