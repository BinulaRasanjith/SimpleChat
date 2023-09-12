import { Model } from "sequelize";

interface UserAttributes {
    username: string;
    passwordHash: string;
    profilePicture: string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {
    validPassword: (password: string) => Promise<boolean>;
}