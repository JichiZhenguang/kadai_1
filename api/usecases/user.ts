import UserRepository from '../repositories/user'

const createUser = async (name:string,password:string) => {
    const userRepository = new UserRepository()
    return await userRepository.findByUserId(name)
}



