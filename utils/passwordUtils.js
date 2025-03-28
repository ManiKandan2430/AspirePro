import bcrypt from 'bcryptjs'

export const hashPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password,salt)
    return hashedpassword
}

export const ComparePassword = async (password,hashedpassword) =>{
    const isMatch = await bcrypt.compare(password,hashedpassword)
    return isMatch
}