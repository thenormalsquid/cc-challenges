export const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
export const tens = ['ten', 'eleven', 'twelve', 'thirteen',
                    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
export const teens = ones.concat(tens);

/**
 * anglicizes passed integers
 * @param n integer such that it satisfies 0 < n < 1,000,000
 */
export const anglicize = (n: number): string => {
    if (n < 1 || n > 999999) throw('n doesn\'t satisfy: 0 < n < 1,000,000');
    if (n < 20) return teens[n];
    return '';
}
