import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function main() {
    prisma.post.findMany()
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

