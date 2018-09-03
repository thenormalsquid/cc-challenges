export const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
export const TEENS = ['ten', 'eleven', 'twelve', 'thirteen',
                    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
export const ONES_TEENS = ONES.concat(TEENS);

/**
 * anglicizes passed integers
 * @param n integer such that it satisfies 0 < n < 1,000,000
 */
export const anglicize = (n: number): string => {
    if (n < 1 || n > 999999) throw('n doesn\'t satisfy: 0 < n < 1,000,000');
    if (n < 20) return ONES_TEENS[n];
    return '';
}
