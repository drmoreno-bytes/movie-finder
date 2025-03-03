export const parseDecimalString = (value: string) => {
    return value === 'N/A' || isNaN(parseFloat(value))
        ? 0
        : parseFloat(value) / 2;
};
