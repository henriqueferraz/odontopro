export function formatPhone(value: string) {

    const cleanedValue = value.replace(/\D/g, '');

    if (cleanedValue.length > 11) {
        return value.slice(0, 15);
    }

    const formatedValue = cleanedValue.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    return formatedValue;
}