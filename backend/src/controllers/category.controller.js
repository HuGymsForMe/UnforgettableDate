import Category from "../models/category.model.js";

export const getCategories = async(req, res) => {
    try {
       const showCategories = Category.find();
       res.json(showCategories); 
    } catch (error) {
        res.json(500).json({message: "Debido a un error no se han podido mostrar las categorías"});
    }
}

export const getCategory = async(req, res) => {
    try {
        const showCategory = await Category.findById(req.params.id);
        if(!showCategory) return res.status(404).json({mesage: "No se ha encontrado dicha categoría"});
        return res.json(showCategory);
    } catch (error) {
        return res.status(500).json({message: "Se produjo un error a buscar dicha categoría por su ID"});
    }
}

export const AddCategory = async(req, res) => {
    const {name} = req.body;
    try {
        const newCategory = new Category ({
            name,
        })

        const categorySaved = await newCategory.save();

        res.json({
            id: categorySaved._id,
            name: categorySaved.name,
        })
    } catch (error) {
        res.status(500).json({message: "Debido a un error no se ha podido añadir la categoría."})   
    }
}

export const UpdateCategory = async(req, res) => {
    try {
        const {name} = req.body;
        const categoryUpdated = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {name},
            {new: true}
        );
        return res.json(categoryUpdated);
    } catch (error) {
        return res.status(500).json({message: "Debido a un error no se ha podido editar la categoría"});
    }
}

export const deleteCategory = async(req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if(!deletedCategory) return res.status(404).json({message: "Categoría no encontrada"});
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: "Se produjo un error al intentar borrar la categoría"});
    }
}