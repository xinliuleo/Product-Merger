import { LoadJsonToCsv } from './LoadJsonToCsv';

describe('LoadJsonToCsv', () => {
    it('should convert correctly', async () => {
        const jsonObj = [
            {
              SKU: '647-vyk-317',
              Description: 'Walkers Special Old Whiskey',
              Source: 'A'
            },
            { SKU: '280-oad-768', Description: 'Bread - Raisin', Source: 'A' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup', Source: 'A' },
            {
              SKU: '999-eol-949',
              Description: 'Cheese - Grana Padano',
              Source: 'B'
            },
            {
              SKU: '167-eol-949',
              Description: 'Cheese - Grana Padano',
              Source: 'A'
            },
            {
              SKU: '999-epd-782',
              Description: 'Carbonated Water - Lemon Lime',
              Source: 'B'
            },
            {
              SKU: '650-epd-782',
              Description: 'Carbonated Water - Lemon Lime',
              Source: 'A'
            }
          ];
        const expectedResult = `SKU,Description,Source
647-vyk-317,Walkers Special Old Whiskey,A
280-oad-768,Bread - Raisin,A
165-rcy-650,Tea - Decaf 1 Cup,A
999-eol-949,Cheese - Grana Padano,B
167-eol-949,Cheese - Grana Padano,A
999-epd-782,Carbonated Water - Lemon Lime,B
650-epd-782,Carbonated Water - Lemon Lime,A`;

        const result = await LoadJsonToCsv(jsonObj);

        expect(result).toBe(expectedResult);
    });

    it('should return undefined if json object is null', async () => {
        const jsonObj = null;

        const result = await LoadJsonToCsv(jsonObj);

        expect(result).toBeUndefined();
    })
});