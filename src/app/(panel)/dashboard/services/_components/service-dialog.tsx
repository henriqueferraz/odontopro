"use client"

import { Button } from " @/components/ui/button";
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from " @/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from " @/components/ui/form";
import { Input } from " @/components/ui/input";
import { DialogServiceFormData, UseDialogServiceForm } from "./service-dialog-form";

export function ServiceDialog() {

    const form = UseDialogServiceForm()

    async function onSubmit(values: DialogServiceFormData) {
        console.log(values)
    }

    function changeCurrency(event: React.ChangeEvent<HTMLInputElement>) {
        let { value } = event.target;
        value = value.replace(/\D/g, '');

        if (value) {
            value = (parseInt(value, 10) / 100).toFixed(2);
            value = value.replace('.', ',');
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        event.target.value = value;
        form.setValue('price', value);
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Novo Serviço</DialogTitle>
                <DialogDescription>
                    Crie um novo serviço.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form
                    className="space-y-2"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">Nome do Serviço</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Digite o nome do serviço."
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">Valor do Serviço</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Digite o valor do serviço."
                                            onChange={changeCurrency}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <p className="font-semibold">Tempo de duração do serviço</p>
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="hours"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">Horas:</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="1"
                                            min="0"
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="minutes"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">Minutos:</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="0"
                                            min="0"
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full font-semibold text-white"
                    >
                        Adicionar serviço
                    </Button>
                </form>
            </Form>
        </DialogContent>
    )
}