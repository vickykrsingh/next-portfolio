import bcrypt from 'bcrypt';

export const hashedPass = async (password) => {
    const hashPassword = await bcrypt.hash(password,10)
    return hashPassword;
}

export const comparePassword = async (oldPass,newPass) => {
    const status = bcrypt.compare(oldPass,newPass)
    return status;
}