import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const showTasks = await Task.find();
        res.json(showTasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Se ha producido un error al mostrar todos las tareas de todos los usuarios del sistema."})
    }
}

export const getTask = async (req, res) => {
    try {
        const showTask = await Task.findById(req.params.id);
        if (!showTask) return res.status(404).json({message: "Tarea no encontrada."})
    } catch (error) {
        return res.status(500).json({message: "Se ha producido un error al buscar una tarea por su ID."})
    }
}

export const getTasksByUser = async(req, res) => {
    const idUser = req.params.id;
    
    try {
        const showTasks = await Task.find({username: idUser});
        res.json(showTasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Se ha producido un error al mostrar las tareas de un usuario."});
    }
}

export const addTask = async(req, res) => {
    const {title, description, category, date, time, done, notification} = req.body;
    const username = req.params.id;
    try {
        const newTask = new Task ({
            title,
            description,
            category,
            date,
            time,
            done,
            notification,
            username,
        })

        const taskSaved = await newTask.save();

        res.json({
            id: taskSaved._id,
            title: taskSaved.title,
            description: taskSaved.description,
            category: taskSaved.category,
            date: taskSaved.date,
            time: taskSaved.time,
            done: taskSaved.done,
            notification: taskSaved.notification,
            username: taskSaved.username,
        })
    } catch (error) {
        res.status(500).json({message: "Se ha producido un error al añadir el recordatorio"});
    }
}

export const updateTask = async (req, res) => {
    try {
        const {title, description, category, date, time, done, notification} = req.body;
        const taskUpdated = await Task.findOneAndUpdate(
            {_id: req.params.id},
            {title, description, category, date, time, done, notification},
            {new: true}
        );
        return res.json(taskUpdated);
    } catch (error) {
        return res.status(500).json({message: "No se pudo editar la tarea correctamente."})
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.status(404).json({message: "Tarea no encontrada."});
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({message: "Se ha producido un error al intentar borrar la tarea del sistema."})
    }
}

