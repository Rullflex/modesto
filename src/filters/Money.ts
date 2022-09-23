const locale = 'ru';
const currency = 'RUB';

function makeCurrencyFormatter(minimumFractionDigits = 0, withoutCurrency = false) {
    return new Intl.NumberFormat(locale, {
        style: withoutCurrency ? 'decimal' : 'currency',
        currency,
        minimumFractionDigits,
    });
}

/**
 * Returns a formatted money string.
 *
 * @returns Formatted to current currency value.
 */
export const moneyFilter = (value: number | string, withoutCurrency = false, fractionDigits = 0): string => {
    if (typeof value !== 'number') {
        const parsed = parseInt(value, 10);
        value = isNaN(parsed) ? 0 : parsed;
    }

    // Creates a new currency formatter with N decimal places.
    const formatter = makeCurrencyFormatter(fractionDigits, withoutCurrency);

    return formatter.format(value);
};

/**
 * Returns a Currency sign.
 *
 * @returns Currency sign for current locale.
 */
export const getCurrencySign = (): string => {
    // gets formatted money string of 0
    // and remove all symbols except currency sign
    return moneyFilter(0).replace(/[\d\s]/g, '');
};

export default moneyFilter;
