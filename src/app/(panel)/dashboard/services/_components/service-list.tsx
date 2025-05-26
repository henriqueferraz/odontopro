"use client";

import { Button } from " @/components/ui/button";
import { Card, CardHeader, CardTitle } from " @/components/ui/card";
import { Dialog, DialogTrigger } from " @/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ServiceDialog } from "./service-dialog";

export function ServicesList() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <section className="mx-auto">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-x-0 pb-2">
                        <CardTitle className="text-xl md:text-2xl font-bold">Serviços</CardTitle>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <ServiceDialog />
                    </CardHeader>
                </Card>
            </section>
        </Dialog>
    )
}