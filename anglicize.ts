export const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
export const TEENS = ['ten', 'eleven', 'twelve', 'thirteen',
                    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
export const ONES_TEENS = ONES.concat(TEENS);
export const TEES = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/**
 * 
 * @param n number
 * produces a space if n doesn't end with a zero
 */
export const insertSpace = (n: number): string => n % 10 === 0 ? '' : ' ';

/**
 * anglicizes passed integers
 * @param n integer such that it satisfies 0 < n < 1,000,000
 */
export const anglicize = (n: number): string => {
    if (n < 1 || n > 999999) throw('n doesn\'t satisfy: 0 < n < 1,000,000');
    if (n < 20) return ONES_TEENS[n];
    if (n < 100) return `${TEES[Math.floor(n/10)]}${insertSpace(n)}${ONES[n%10]}`;
    if (n < 1000) return `${ONES[Math.floor(n/100)]} hundred${n % 100 > 0 ? ' ' + anglicize(n%100) : ''}`;
    return '';
}
