import User from "./user-model";
import Chat from "./chat-model";
import Message from "./message-model";

// chat has many user in a array
Chat.belongsToMany(User, {
    through: "ChatUsers",
    foreignKey: "chatId",
    otherKey: "userId",
});

// user has many chat in a array
User.belongsToMany(Chat, {
    through: "ChatUsers",
    foreignKey: "userId",
    otherKey: "chatId",
});

// message belongs to a chat
Message.belongsTo(Chat, {
    foreignKey: "chatId",
});

// chat has many messages
Chat.hasMany(Message, {
    foreignKey: "chatId",
});

// message belongs to a user
Message.belongsTo(User, {
    foreignKey: "sender",
});

// user has many messages
User.hasMany(Message, {
    foreignKey: "sender",
});

export {
    User,
    Chat,
    Message,
};