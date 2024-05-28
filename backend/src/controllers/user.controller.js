import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const {username, email, password, age} = req.body;
    try {
        const userFoundByEmail = await User.findOne({email});
        const userFoundByUsername = await User.findOne({username});
        if (userFoundByEmail) return res.status(400).json({message: "El email ya está en uso."});
        if (userFoundByUsername) return res.status(400).json({message: "El nombre de usuario ya está en uso."});

        const passwordHash = await bcryptjs.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password,
            age,
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id, username: userSaved.username});

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
        });

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            password: userSaved.password,
            age: userSaved.age,
            create_account: userSaved.createdAt,
        });

        /* POSIBILIDAD DE ENVÍO DE CORREO DE REGISTRO */
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Debido a un error no se ha podido registrar el usuario."});
    }
}

export const login = async (req, res) => {
    const { username, email, password, age } = req.body;
    try {
        const userFound = await User.findOne({username});
        if (!userFound) return res.status(400).json({message: "El nombre de usuario no existe."});

        const isMatch = await bcryptjs.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta."});

        const token = await createAccessToken({id: userFound._id, username: userFound.username,});

        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
        });

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            password: userFound.password,
            age: userFound.age,
            create_account: userFound.createdAt,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Debido a un error el usuario no ha podido iniciar sesión."})
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        expires: new Date(0),
    })

    return res.sendStatus(200);
}

export const getUsers = async (req, res) => {
    try {
        const showUsers = await User.find();
        res.json(showUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "No se han podido visualizar los usuarios del sistema."})
    }
}

export const getUser = async (req, res) => {
    try {
        const showUser = await User.findById(req.params.id);
        if (!showUser) return res.status(404).json({message: "Usuario no encontrado."});
        return res.json(showUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Debido a un error no se ha podido encontrar al usuario solicitado."})
    }
}

export const deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(404).json({message: "Usuario no encontrado."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Debido a un error no se ha podido borrar el usuario."})
    }
}

export const updateUser = async (req, res) => {
    try {
        const {username, email, password, age} = req.body;
        const passwordHash = await bcryptjs.hash(password, 10);
        const userUpdated = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {username, email, password: passwordHash, age},
            {new: true}
        )
        return res.json(userUpdated);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Debido a un error no se ha podido actualizar el usuario."})
    }
}
