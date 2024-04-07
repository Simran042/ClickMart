import categoryModel from "../models/categoryModel.js";
import slugify from 'slugify'
export const createCategoryController= async(req, res)=>{
    try {
        const {name}= req.body;
        if(!name){ 
            res.status(400).send({
                success: false,
                message: 'Name is required'
            })
            return;
        }
        const existingCategory= await categoryModel.findOne({name});
        if(existingCategory){
            res.status(200).send({
                success: true,
                message: 'Category already exists'
            })
            return;
        }
        const category= await new categoryModel({name, slug: slugify(name)}).save();
        res.status(201).send({
            success: true,
            message: 'Category created',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: 'Error in category Route'
        })
    }
} 


export const updateCategoryController= async(req, res)=>{
    try {
        const {name}= req.body;
        const {id}= req.params;
        if(!name){ 
            res.status(400).send({
                success: false,
                message: 'Name is required'
            })
            return;
        }
        const category= await categoryModel.findByIdAndUpdate(id, {name, slug: slugify(name)}, {new:true});
        res.status(201).send({
            success: true,
            message: 'Category updated successfully',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: 'Error in category Route'
        })
    }
}

export const categoryController= async(req, res)=>{
    try {
        const category= await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: "All categories list",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: 'Error in category Route'
        })
    }
}

export const singleCategoryController= async(req, res)=>{
    try {
        const {slug}= req.params;
        const category= await categoryModel.findOne({slug})
        res.status(200).send({
            success: true,
            message: "Got single category successfully",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: 'Error in category Route'
        })
    }
}

export const deleteCategoryController= async(req, res)=>{
    try {
        const {id}= req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Deleted category"
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            error,
            message: 'Error in category Route'
        })
    }
}