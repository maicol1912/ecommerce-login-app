import { validateToken } from './validate-token.routes';
import { getCategories, addCategory, deleteCategory } from './../controllers/category.controller';
import { Router } from 'express';

const router = Router()

router.get('/',validateToken,getCategories)
router.post('/add',validateToken,addCategory)
router.delete('/delete/:id',validateToken,deleteCategory)

export default router;