"use client"

import { ProfileFormData, useProfileForm } from "./profile-form"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from " @/components/ui/card"
import Image from "next/image"
import ImgTeste from "../../../../../../public/foto1.png"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from " @/components/ui/form"
import { Input } from " @/components/ui/input"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectItem,
    SelectContent
} from " @/components/ui/select"
import { Label } from " @/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from " @/components/ui/dialog"
import { Button } from " @/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { cn } from " @/lib/utils"
import { Subscription, User } from " @/generated/prisma"


interface ProfileContentProps {
    user: User & {
        subscription: Subscription;
    };
}

export function ProfileContent({ user }: ProfileContentProps) {

    const form = useProfileForm({
        name: user.name,
        address: user.address,
        phone: user.phone,
        status: user.status,
        timeZone: user.timezone
    })

    const [selectedHours, setSelectedHours] = useState<string[]>(user.times ?? []);
    const [dialogOpen, setDialogOpen] = useState(false);

    function generateTimeSlots(): string[] {
        const hours: string[] = [];

        for (let i = 8; i <= 24; i++) {
            for (let j = 0; j < 2; j++) {
                const h = i.toString().padStart(2, '0');
                const m = (j * 30).toString().padStart(2, '0');
                hours.push(`${h}:${m}`);
            }
        }
        return hours;
    }

    const hours = generateTimeSlots();

    function toggleHours(hour: string) {
        setSelectedHours((prev) => prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour].sort());
    }

    const timezones = Intl.supportedValuesOf("timeZone").filter((zone) =>
        zone.startsWith("America/Sao_Paulo") ||
        zone.startsWith("America/Noronha") ||
        zone.startsWith("America/Cuiaba") ||
        zone.startsWith("America/Rio_Branco")
    );

    async function onSubmit(values: ProfileFormData) {
        const profilesData = {
            ...values,
            times: selectedHours
        }
        console.log(profilesData);
    }

    return (
        <div className="mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Meu Perfil</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex justify-center">
                                <div className="bg-gray-200 relative h-40 w-40 rounded-full overflow-hidden">
                                    <Image
                                        src={ImgTeste}
                                        alt="Imagem de Teste"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Nome da Clínica:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Digite o nome da clínica"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Endereço Completo:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Digite o endereço da clínica"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Telefone:</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Digite o telefone da clínica"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Status:</FormLabel>
                                            <FormControl>

                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value ? "active" : "inactive"}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="active">ATIVO (Clínica Aberta)</SelectItem>
                                                        <SelectItem value="inactive">INATIVO (Clínica Fechada)</SelectItem>
                                                    </SelectContent>
                                                </Select>

                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <div className="space-y-2">
                                    <Label className="font-semibold">
                                        Configurar horário
                                    </Label>
                                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="w-full justify-between">
                                                Clique aqui para selecionar horários
                                                <ArrowRight className="h-5 w-5" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Horários da clínica</DialogTitle>
                                                <DialogDescription>
                                                    Selecione os horários disponíveis para a clínica.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <section className="py-4">
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Clique nos horários disponíveis para selecionar.
                                                </p>
                                                <div className="grid grid-cols-5 gap-2">
                                                    {hours.map((hour) => (
                                                        <Button
                                                            key={hour}
                                                            variant="outline"
                                                            className={cn("h-10", selectedHours.includes(hour) && 'border-2 border-emerald-500 text-primary')}
                                                            onClick={() => toggleHours(hour)}
                                                        >
                                                            {hour}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </section>
                                            <Button
                                                className="w-full bg-emerald-500 hover:bg-emerald-600"
                                                onClick={() => setDialogOpen(false)}
                                            >
                                                Salvar Horário
                                            </Button>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="timeZone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-semibold">Selecione o fuzo horário:</FormLabel>
                                            <FormControl>

                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {timezones.map((zone) => (
                                                            <SelectItem key={zone} value={zone}>{zone}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>

                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-500 hover:bg-emerald-600"
                                >
                                    Salvar Alterações
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </div>
    )
}