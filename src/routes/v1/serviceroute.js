import { Express } from "express";
import { addService } from '../../controller/serviceController'

var router = express.Router();

router.post('/addService', addService);

export default router;