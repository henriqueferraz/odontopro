const Currency_Formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
});

export function formatCurrency(number: number) {
    return Currency_Formatter.format(number);
}