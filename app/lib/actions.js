"use server"
import {connectToDb} from "@/app/lib/utils";
import {Product, User} from "@/app/lib/models";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import bcrypt from "bcrypt";
import {signIn} from "@/app/auth";

export const addUser = async (formData) => {
    const {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive
    } = Object.fromEntries(formData)

    try {
        await connectToDb()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive
        });

        await newUser.save();

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Add User!")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const updateUser = async (formData) => {
    const {
        username,
        email,
        password,
        id,
        isAdmin,
        isActive,
        phone,
        address
    } = Object.fromEntries(formData)
    try {
        await connectToDb()
        const updateFields = {
            username,
            email,
            password,
            isAdmin,
            isActive,
            phone,
            address
        }
        Object.keys(updateFields).forEach((key) =>
            (updateFields[key] === "" || undefined && delete updateFields[key])
        )
        await User.findByIdAndUpdate(id, updateFields)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Update User!")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const deleteUser = async (formData) => {
    const {id} = Object.fromEntries(formData)
    try {
        await connectToDb()
        await User.findByIdAndDelete(id)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Delete User!")
    }
    revalidatePath("/dashboard/users")
}

export const addProduct = async (formData) => {
    const {
        title,
        price,
        stock,
        color,
        size,
        cat,
        desc
    } = Object.fromEntries(formData)

    try {
        await connectToDb()

        const newProduct = new Product({
            title,
            price,
            stock,
            color,
            size,
            cat,
            desc
        })
        await newProduct.save()

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Add Product!")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")

};

export const updateProduct = async (formData) => {
    const {
        id,
        title,
        price,
        stock,
        color,
        size,
        cat,
        desc
    } = Object.fromEntries(formData)
    try {
        await connectToDb()
        const updateFields = {
            title,
            price,
            stock,
            color,
            size,
            cat,
            desc
        }
        Object.keys(updateFields).forEach(key =>
            (updateFields[key] === "" || undefined && delete updateFields[key])
        )
        await Product.findByIdAndUpdate(id, updateFields)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Update Product!")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}

export const deleteProduct = async (formData) => {
    const {id} = Object.fromEntries(formData)

    try {
        await connectToDb()
        await Product.findByIdAndDelete(id)

    } catch (err) {
        console.log(err)
        throw new Error("Failed to Delete Product!")
    }
    revalidatePath("/dashboard/products")
};

export const authenticate = async (prevState, formData) => {
    const {username, password} = Object.fromEntries(formData)
    try {
        await signIn("credentials", {username, password})

    } catch (err) {
        return "Wrong Credentials!"
    }
}
