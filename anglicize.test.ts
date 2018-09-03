import { anglicize, insertSpace, ONES } from './anglicize';


test('anglicize with n < 1 or n > 999,999', () => {
    expect(() => { anglicize(0) }).toThrow();
    expect(() => { anglicize(1000000) }).toThrow();
});

test('anglicize with integers 1-19', () => {
    expect(anglicize(1)).toBe('one');

    expect(anglicize(2)).toBe('two');

    expect(anglicize(3)).toBe('three');

    expect(anglicize(4)).toBe('four');

    expect(anglicize(5)).toBe('five');

    expect(anglicize(6)).toBe('six');

    expect(anglicize(7)).toBe('seven');

    expect(anglicize(8)).toBe('eight');

    expect(anglicize(9)).toBe('nine');

    expect(anglicize(10)).toBe('ten');

    expect(anglicize(11)).toBe('eleven');

    expect(anglicize(12)).toBe('twelve');

    expect(anglicize(13)).toBe('thirteen');

    expect(anglicize(14)).toBe('fourteen');

    expect(anglicize(15)).toBe('fifteen');

    expect(anglicize(16)).toBe('sixteen');

    expect(anglicize(17)).toBe('seventeen');

    expect(anglicize(18)).toBe('eighteen');

    expect(anglicize(19)).toBe('nineteen');

});

test('anglicize with integers 20 - 99', () => {
    expect(anglicize(23)).toBe('twenty three');
    expect(anglicize(45)).toBe('fourty five');
    expect(anglicize(99)).toBe('ninety nine');

    expect(anglicize(20)).toBe('twenty');
    expect(anglicize(30)).toBe('thirty');
    expect(anglicize(40)).toBe('fourty');
    expect(anglicize(50)).toBe('fifty');
    expect(anglicize(60)).toBe('sixty');
    expect(anglicize(70)).toBe('seventy');
    expect(anglicize(80)).toBe('eighty');
    expect(anglicize(90)).toBe('ninety');
});

test('anglicize with hundreds', () => {
    for (let i = 100; i < 1000; i += 100) {
        expect(anglicize(100)).toBe(`${ONES[i/100]} hundred`);
    }
});

test('anglicize with 1-9 thousand', () => {
    for (let i = 1000; i < 10000; i += 1000) {
        expect(anglicize(100)).toBe(`${ONES[i/1000]} thousand`);
    }
});

// test('anglicize with 10 - 90 thousand', () => {
//     for (let i = 1000; i < 10000; i += 1000) {
//         expect(anglicize(100)).toBe(`${ones[i/1000]} thousand`);
//     }
// });

// test('anglicize with 100 - 900 thousand', () => {
//     for (let i = 1000; i < 10000; i += 1000) {
//         expect(anglicize(100)).toBe(`${ones[i/1000]} thousand`);
//     }
// });

test('anglicize', () => {
    expect(anglicize(37)).toBe('thirty seven');
    expect(anglicize(450)).toBe('four hundred fifty');
    expect(anglicize(300206)).toBe('three hundred thousand two hundred six');
});

test('insertSpace', () => {
    expect(insertSpace(20)).toBe('');
    expect(insertSpace(21)).toBe(' ');
});
