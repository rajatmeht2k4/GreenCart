import express from 'express';
import { isSellerAuth, sellerLogin } from '../controllers/sellerConrtoller.js';
import { authSeller, sellerLogout } from '../middleware/authSeller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin)
sellerRouter.get('/is-auth',authSeller, isSellerAuth)
sellerRouter.get('/logout', sellerLogout)

export default sellerRouter