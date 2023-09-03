import Champions from ".";
import { NAME, PATH } from "../../../../routes/path";
import { IAppRoute } from "../../../../routes/routes.types";

const ChampionsRouter: IAppRoute = {
  Page: <Champions />,
  path: PATH.CHAMPIONS,
  name: NAME.CHAMPIONS,
};

export default ChampionsRouter;