import { hasMatchBarcode, getProductBarcodesBySKU, getMergedProductBySKU } from './productListManipulator';

describe('hasMatchBarcode', () => {
    it('should return true if barcodes match', () => {
        const productA = {
            SKU: '647-vyk-317',
            Barcodes: [
                'z2783613083817',
                'z2783613083818',
                'z2783613083819',
                'n7405223693844',
                'c7417468772846',
                'w3744746803743',
                'w2572813758673',
                's7013910076253',
                'm1161615509466'
            ]
        };
    
        const productB = {
            SKU: '999-vyk-317',
            Barcodes: [
                'z2783613083817',
                'n7405223693844',
                'c7417468772846',
                'w3744746803743',
                'w2572813758673',
                's7013910076253',
                'm1161615509466'
            ]
        };
    
        const result = hasMatchBarcode(productA, productB);
    
        expect(result).toBe(true);
    });

    it('should return false if not match barcode', () => {
        const productA = {
            SKU: '647-vyk-317',
            Barcodes: [
                'z2783613083811',
                'z2783613083812',
                'z2783613083813',
            ]
        };

        const productB = {
            SKU: '999-vyk-317',
            Barcodes: [
                'z2783613083814',
                'z2783613083815',
                'z2783613083816',
            ]
        };

        const result = hasMatchBarcode(productA, productB);
    
        expect(result).toBe(false);
    });
});

describe('getProductBarcodesBySKU', () => {

    it('should return product list if SKU exists', () => {
        const sku = '647-vyk-317'

        const supplierProductBarcodes = [
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'z2783613083817'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'z2783613083818'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'z2783613083819'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'n7405223693844'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'c7417468772846'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'w3744746803743'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'w2572813758673'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 's7013910076253'
            },
            {
              SupplierID: '00001',
              SKU: '647-vyk-317',
              Barcode: 'm1161615509466'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'p2359014924610'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'a7802303764525'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'o5194275040472'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'j9023946968130'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'x5678105140949'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'c9083052423045'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'f4322915485228'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'i0471865670980'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'i0471865670981'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'i0471865670982'
            },
            {
              SupplierID: '00002',
              SKU: '280-oad-768',
              Barcode: 'b4381274928349'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'u5160747892301'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'm8967092785598'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'l7342139757479'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'p1667270888414'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'v0874763455559'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'p9774916416859'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'c4858834209466'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'x7331732444187'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'u7720008047675'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'i2431892662423'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'o1336108796249'
            },
            {
              SupplierID: '00003',
              SKU: '165-rcy-650',
              Barcode: 'w7839803663600'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a6971219877032'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a7340270328026'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a0126648261918'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a9858014383660'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a2338856941909'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a5056026479965'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a7425424390056'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a0864219864945'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a1257743939800'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a0880467790155'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a4469253605532'
            },
            {
              SupplierID: '00004',
              SKU: '167-eol-949',
              Barcode: 'a0891358702681'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'n8954999835177'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'd2381485695273'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'y0588794459804'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'v8710606253394'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'o5184937926186'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'r4059282550570'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'k3213966445562'
            },
            {
              SupplierID: '00005',
              SKU: '650-epd-782',
              Barcode: 'a3343396882074'
            }
          ];

        const expectedProductList = {
            SKU: '647-vyk-317',
            Barcodes: [
                'z2783613083817',
                'z2783613083818',
                'z2783613083819',
                'n7405223693844',
                'c7417468772846',
                'w3744746803743',
                'w2572813758673',
                's7013910076253',
                'm1161615509466'
            ]
        };

        const result = getProductBarcodesBySKU(sku, supplierProductBarcodes);

        expect(result).toStrictEqual(expectedProductList);
    });

    it('should return undefined if SKU does not exit', () => {
        const sku = '647-vyk-317'

        const supplierProductBarcodes = [
        {
            SupplierID: '00005',
            SKU: '650-epd-782',
            Barcode: 'a3343396882074'
          }
        ];

        const result = getProductBarcodesBySKU(sku, supplierProductBarcodes);

        expect(result).toBeUndefined();
    });
});

describe('getMergedProductBySKU', () => {
    it('should return merged product if SKU exists', () => {
        const sku = '647-vyk-317';
        const supplier = 'A';
        const catalogs = [
            { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
            { SKU: '280-oad-768', Description: 'Bread - Raisin' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
            { SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
            { SKU: '650-epd-782', Description: 'Carbonated Water - Lemon Lime' }
          ];

        const expectedResult = {
            SKU: sku,
            Description: 'Walkers Special Old Whiskey',
            Source: supplier,
        }

        const result = getMergedProductBySKU(sku, catalogs, supplier);

        expect(result).toStrictEqual(expectedResult);
    });

    it('should return undefined if SKU does not exist', () => {
        const sku = '647-000-abc';
        const supplier = 'A';
        const catalogs = [
            { SKU: '647-vyk-317', Description: 'Walkers Special Old Whiskey' },
            { SKU: '280-oad-768', Description: 'Bread - Raisin' },
            { SKU: '165-rcy-650', Description: 'Tea - Decaf 1 Cup' },
            { SKU: '167-eol-949', Description: 'Cheese - Grana Padano' },
            { SKU: '650-epd-782', Description: 'Carbonated Water - Lemon Lime' }
          ];

        const expectedResult = {
            SKU: sku,
            Description: 'Walkers Special Old Whiskey',
            Source: supplier,
        }

        const result = getMergedProductBySKU(sku, catalogs, supplier);

        expect(result).toBeUndefined();
    });
});