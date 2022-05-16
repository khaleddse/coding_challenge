import { Fragment } from "react";
import { Startup } from "../../Types/Startup";
import "./Startup.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface startupsProps {
  startups: Startup[];
}

const card: React.FC<startupsProps> = ({ startups }) => (
  <Fragment>
    {startups?.length > 0 ? (
      startups.map(
        ({
          name,
          shortDescription,
          dateFounded,
          employees,
          totalFunding,
          currentInvestmentStage,
        }) => {
          return (
            <Card className="Card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Founded:{dateFounded}|{employees} Employes|{totalFunding}
                  $|
                  {currentInvestmentStage}
                </Typography>
                <Typography variant="body2">{shortDescription}</Typography>
              </CardContent>
            </Card>
          );
        }
      )
    ) : (
      <p>No startup found</p>
    )}
  </Fragment>
);

export default function OutlinedCard(startups: startupsProps) {
  return (
    <Box sx={{ minWidth: 275 }} className="Box">
      {card(startups)}
    </Box>
  );
}
