import { app } from "./routes/routeManager";
import { PORT } from "./utils/envLoader";
import { logger } from "./utils/logManager";

app.listen(PORT, () => {
  logger.info(`server started at http://localhost:${PORT}`);
});
