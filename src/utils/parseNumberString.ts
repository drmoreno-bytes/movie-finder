export const parseNumberString = (value: string) => {
    const cleaned = value.replace(',', '');
    return value === 'N/A' || isNaN(parseInt(cleaned, 10))
        ? 0
        : parseInt(cleaned, 10);
};
