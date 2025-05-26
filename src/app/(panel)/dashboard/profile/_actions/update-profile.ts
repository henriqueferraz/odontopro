"use server" //Server Action

import { auth } from " @/lib/auth";
import prisma from " @/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    status: z.boolean(),
    timeZone: z.string(),
    times: z.array(z.string()).optional(),
})

type FormSchema = z.infer<typeof formSchema>

export async function updateProfile(formData: FormSchema) {

    const session = await auth();
    if (!session?.user?.id) {
        return {
            message: "Usuário não encontrado."
        }
    }

    const schema = formSchema.safeParse(formData)

    if (!schema.success) {
        return {
            message: "Erro ao atualizar o perfil"
        }
    }

    try {
        await prisma.user.update({
            where: {
                id: session.user.id
            },
            data: {
                name: formData.name,
                address: formData.address,
                phone: formData.phone,
                status: formData.status,
                timezone: formData.timeZone,
                times: formData.times || []
            }
        })

        revalidatePath("/dashboard/profile")
        return {
            data: "Perfil atualizado com sucesso"
        }
    } catch (error) {
        return {
            error: "Erro ao atualizar o perfil"
        }

    }

}