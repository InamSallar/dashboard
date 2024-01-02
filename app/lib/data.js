import {Product, User} from "@/app/lib/models";
import {connectToDb} from "@/app/lib/utils";

export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2;

    try {
        await connectToDb()
        const count = await User.find({username: {$regex: regex}}).count();

        const users = await User.find({username: {$regex: regex}})
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return ({users, count})

    } catch (err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
};
export const fetchUser = async (id) => {
    try {
        await connectToDb()
        const user = await User.findById(id)
        return user

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Fetch User!")
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEM_PER_PAGE = 2;

    try {
        await connectToDb()
        const count = await Product.find({title: {$regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}})
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1))
        return {count, products}

    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products!")
    }

};

export const fetchProduct = async (id) => {
    try {
        await connectToDb()
        const product = await Product.findById(id)
        return product

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Fetch Product!")
    }
}