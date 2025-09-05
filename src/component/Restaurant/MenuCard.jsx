import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Checkbox, Experimental_CssVarsProvider, FormControlLabel, FormGroup } from "@mui/material";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function MenuCard() {
    const demo=[
        
           { category:"Nuts & Seeds",ingredient:["cashew"]},
           { category:"Protein",ingredient:["GroundBean","moongbean"]},
           { category:"Bread",ingredient:["cashew"]},
           
        
    ];
    const handleCheckBoxChange=(value)=>{
        console.log("value");
    }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="items-center justify-justify-center">
            <div className="items-center lg:flex lg:gap-5">
              <img
                src="https://th.bing.com/th/id/OIP.FgHALLjWU0S8WL1KCCGp6AHaC6?w=278&h=137&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt=""
                className="w-[7rem] h-[7rem] object-cover"
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="text-xl font-semibold">Burger</p>
              <CurrencyRupeeIcon/><p>466</p>
              <p> a burger is food consissting of fillings of ground meat ,beef placed inside a sliced bun or bread roll</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form>
            <div className="flex flex-wrap gap-5">
               {
                demo.map((item)=>(
                 <div> 
                 <p>{item.category}</p>
                 <FormGroup>
                 {item.ingredient.map((item)=>(
                     <FormControlLabel control={<Checkbox  onChange={()=>handleCheckBoxChange(item) }/>} label={item} />
                  
                 ))}
                   
                    </FormGroup>  </div>
                ))
                
               }
            </div>
            <div className="">
            <Button type="submit" variant="contained" color='success' disabled="false">{true ? "Add to Cart":"Out of stock"}</Button>
            </div>
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
