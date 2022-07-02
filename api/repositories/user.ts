import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
	rejectOnNotFound: true,
})

export default class UserRepository {
	async read() {
		return await prisma.user.findMany({
			select: {
				name: true,
				password: true,
			}
		})
	}

    async create(name: string, password: string) {
		return await prisma.user.create({
			data: {
				name: name,
                password:password,
			}
		})
	}
    async findByUserId(userId: string) {
		return await prisma.user.findUnique({
			where: {
				name: userId,
			},
			select: {
				name: true,
				password: true,
			}
		})
	}
}