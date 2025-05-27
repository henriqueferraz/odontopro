import { getAllService } from "../_data-access/get-all-service";
import { ServicesList } from "./service-list";

interface ServiceContentProps {
    userId: string;
}


export async function ServiceContent({ userId }: ServiceContentProps) {

    const services = await getAllService({ userId: userId })

    return (
        <ServicesList services={services.data || []} />
    )
}