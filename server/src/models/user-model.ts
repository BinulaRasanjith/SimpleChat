import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import sequelize from "../db";
import { UserModel } from "../types/model-types";

const User = sequelize.define<UserModel>(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: "users",
    }
);

User.beforeCreate(async (user: any) => {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);

    user.passwordHash = passwordHash;
});

User.beforeUpdate(async (user: any) => {
    if (user.changed("passwordHash")) {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(user.passwordHash, saltRounds);

        user.passwordHash = passwordHash;
    }
});

User.prototype.validPassword = async function (password: string) {
    return await bcrypt.compare(password, this.passwordHash);
};

User.prototype.generateToken = function (): string {
    const token = jwt.sign(
        {
            id: this.id,
            username: this.username,
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: "7d",
        }
    );

    return token;
};

User.prototype.toJSON = function () {
    const values = { ...this.get() };

    delete values.passwordHash;
    return values;
};

export default User;
