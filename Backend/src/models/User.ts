import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserModel extends Document, IUser {
    comparePassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUserModel>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

// Hash password before saving
userSchema.pre<IUserModel>('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);
export default UserModel;
