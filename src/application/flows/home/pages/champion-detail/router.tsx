import ChampionDetail from ".";
import { PATH, NAME } from "../../../../routes/path";
import { IAppRoute } from "../../../../routes/routes.types";

const ChampionDetailRouter: IAppRoute = {
  Page: <ChampionDetail />,
  path: PATH.CHAMPION_DETAIL,
  name: NAME.CHAMPIONS_DETAIL,
};

export default ChampionDetailRouter;