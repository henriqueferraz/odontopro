
/**
 * Converte um valor monetário em reais (BRL) para centavos (Cents).
 * @param {string} amount O valor monetário em reais (BRL) a ser convertido.
 * @returns {number} O valor convertido em centavos (Cents).
 * 
 * @example
 * convertRealToCents("100,00") // Retorna 10000
 */
export function convertRealToCents(amount: string) {
    const numericPrice = parseFloat(amount.replace(/\./g, '').replace(',', '.'));
    const priceInCents = Math.round(numericPrice * 100);

    return priceInCents;
}