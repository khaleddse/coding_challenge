import { Fragment } from "react";
import { Startup } from "../../Types/Startup";
import "./Startup.css";
interface startupsProps {
  startups: Startup[];
}

const StartupList: React.FC<startupsProps> = ({ startups }) => {
  return (
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
              <div className="card" key={name}>
                <div className="container">
                  <h2>
                    <b>{name}</b>
                  </h2>
                  <p className="subTitle">
                    Founded:{dateFounded}|{employees} Employes|{totalFunding}
                    $|
                    {currentInvestmentStage}
                  </p>
                  <p>
                    <b>{shortDescription}</b>
                  </p>
                </div>
              </div>
            );
          }
        )
      ) : (
        <p>No startup found</p>
      )}
    </Fragment>
  );
};
export default StartupList;
