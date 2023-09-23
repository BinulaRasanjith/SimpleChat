import { DataTypes } from "sequelize";

import sequelize from "../db";

const Message = sequelize.define(
    "Message",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sender: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recipient: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chatId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        readBy: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
        },
    },
    {
        tableName: "messages",
        timestamps: true,
    }
);

export default Message;