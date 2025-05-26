"use server";

import prisma from " @/lib/prisma";

export async function getAllService({ userId }: { userId: string }) {

    if (!userId) {
        return {
            error: 'Erro ao buscar serviços',
        }
    }

    try {
        const services = await prisma.service.findMany({
            where: {
                userId: userId,
                status: true
            }
        })

        return {
            data: services,
        }
    } catch (error) {
        return {
            error: 'Erro ao buscar serviços',
        }
    }
}