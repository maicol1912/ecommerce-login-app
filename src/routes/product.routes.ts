import {Router} from "express"
import { getProducts } from "../controllers/product.controller";
import validateToken from "./validate-token.routes";
const router = Router();

router.get('/',validateToken,getProducts)

export default router;