import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient();
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = global.prismaGlobal || prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
    global.prismaGlobal = prisma;
}