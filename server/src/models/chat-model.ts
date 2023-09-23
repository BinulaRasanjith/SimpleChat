import { DataTypes } from "sequelize";

import sequelize from "../db";

const Chat = sequelize.define(
    "Chat",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isGroupChat: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        groupAdmin: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        latestMessage: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "chats",
        timestamps: false,
    }
);

export default Chat;