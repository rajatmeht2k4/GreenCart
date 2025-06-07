import express from 'express'
import authUser from '../middleware/authUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD } from '../controllers/orderController.js';
import { authSeller } from '../middleware/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.post('/user', authUser, getUserOrders)
orderRouter.post('/seller', authSeller, getAllOrders)

export default orderRouter