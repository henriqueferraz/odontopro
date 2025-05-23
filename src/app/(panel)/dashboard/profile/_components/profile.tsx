"use client"

import { useProfileForm } from "./profile-form"
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from " @/components/ui/dialog"
import { Button } from " @/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProfileContent() {

    const form = useProfileForm()

    return (
        <div className="mx-auto">
            <Form {...form}>
                <form>
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
                                    <Dialog>
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
                                                <p className="text-sm text-muted-foreground">
                                                    Clique nos horários disponíveis para selecionar.
                                                </p>
                                                <div>
                                                    ...
                                                </div>
                                            </section>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </Form>
        </div>
    )
}