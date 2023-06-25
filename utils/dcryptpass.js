import bcrypt from 'bcrypt';

export const hashedPass = async (password) => {
    // hashing password with bcrypt library with the help of password which comes whenever this function is used and second is salt value to bcrypt the password with this salt value
    const hashPassword = await bcrypt.hash(password,10)
    // returning the hashed password
    return hashPassword;
}

// comparing password user entered password and usermodel/database password
export const comparePassword = async (oldPass,newPass) => {
    // comparing password with the help of compare function and it returns boolean value.
    const status = bcrypt.compare(oldPass,newPass)
    // returning the boolean status
    return status;
}