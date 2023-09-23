import { Request, Response } from "express";

import { User } from "../models";
import { UserModel } from "../types/model-types";

export const signup = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user: UserModel = await User.create({
            username,
            passwordHash: password,
            profilePicture: ""
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user: UserModel | null = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const validPassword = await user.validPassword(password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = user.generateToken();

        res.json({ token });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req: Request, res: Response) => {
    try {
        res.json({ message: "Logout successful" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};