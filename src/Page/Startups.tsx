import React, { Fragment, useEffect, useState } from "react";
import CircularIndeterminate from "../Components/Loading/Loading";
import StartupList from "../Components/Startup/StartupList";
import { StartupHttpService } from "../Http/Startup/Startup.http.service";
import { Startup } from "../Types/Startup";

let api = new StartupHttpService();

const Startups: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allStartups, SetAllStartups] = useState<any>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data: Startup[] | Startup = await api.getStartups();
      SetAllStartups(Object.values(data));
      setIsLoading(false);
    })();
  }, []);

  return (
    <Fragment>
      {isLoading && <CircularIndeterminate />}
      <StartupList startups={allStartups} />
    </Fragment>
  );
};
export default Startups;
