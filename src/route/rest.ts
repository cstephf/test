import { brand } from '@controller';
import { Router } from 'express';

const router: Router = Router({ caseSensitive: true });

// Brands route
router.put('/brand', brand.put.addBrand);
router.get('/brands', brand.get.all.getAllBrands);
router.get('/brand/:id', brand.get.byId.getBrandById);

export default router;
