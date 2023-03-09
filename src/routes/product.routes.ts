import {Router} from "express"
import { addProduct, deleteProduct, deleteProducts, getProducts } from "../controllers/product.controller";
import validateToken from "./validate-token.routes";
const router = Router();

router.get('/',validateToken,getProducts)
router.post('/add',validateToken,addProduct)
router.delete('/delete',validateToken,deleteProducts)
router.delete('/delete/:id', validateToken, deleteProduct)

export default router;