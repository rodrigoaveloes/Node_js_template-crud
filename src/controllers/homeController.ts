import { User } from './../models/user';
import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { Op } from 'sequelize';

export const home = async  (req: Request, res: Response)=>{

const Users = await User.findAll({})






    let list =  Product.getAll();
    let expensiveList =  Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Rodrigo',
        lastName: 'Avelões',
        showOld: 90,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        Users,
    });
};