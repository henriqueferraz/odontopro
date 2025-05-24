import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface ProfileFormProps {
    name: string | null;
    address: string | null;
    phone: string | null;
    status: boolean | null;
    timeZone: string | null;
}

const profileSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    status: z.string(),
    timeZone: z.string().min(1, { message: "Selecione o fuzo horário" }),
})

export type ProfileFormData = z.infer<typeof profileSchema>


export function useProfileForm({ name, address, phone, status, timeZone }: ProfileFormProps) {
    return useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: name || "",
            address: address || "",
            phone: phone || "",
            status: status ? "active" : "inactive",
            timeZone: timeZone || ""
        }
    })
}
