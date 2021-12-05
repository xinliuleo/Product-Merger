import { MergedProduct } from './services/models/MergedProduct.type';
import { getProductBarcodesBySKU, Product, hasMatchBarcode, getMergedProductBySKU } from './services/productListManipulator';
import { LoadJsonToCsv } from './services/LoadJsonToCsv';
import { SupplierProductBarcode } from './services/models/SupplierProductBarcode.type';
import { LoadCsvToJson } from './services/loadCsvToJson';
import { Catalog } from './services/models/Catalog.type';
import { writeFile } from 'fs';

(async () => {
    try {
        const catalogA = await LoadCsvToJson<Catalog>('./input/catalogA.csv');
        const catalogB = await LoadCsvToJson<Catalog>('./input/catalogB.csv');
        const supplierProductBarcodesA = await LoadCsvToJson<SupplierProductBarcode>('./input/barcodesA.csv');
        const supplierProductBarcodesB = await LoadCsvToJson<SupplierProductBarcode>('./input/barcodesB.csv');
        let productsA: Product[] = [];
        let productsB: Product[] = [];
        let duplicatedProducts: Product[] = [];
        let mergedProducts: MergedProduct[] = [];

        // get all barcodes for each catalog product for company A and B
        catalogA.forEach(catalog => {
          const product = getProductBarcodesBySKU(catalog.SKU, supplierProductBarcodesA);
          if(product !== undefined)
          {
            productsA.push(product);
          }
        })

        catalogB.forEach(catalog => {
          const product = getProductBarcodesBySKU(catalog.SKU, supplierProductBarcodesB);
          if(product !== undefined)
          {
            productsB.push(product);
          }
        })

        // deduplicate products
        let mergedProductsA = productsA;
        let mergedProductsB = productsB;

        productsA.forEach(productA => {
          productsB.forEach(productB => {
            if(hasMatchBarcode(productA, productB))
            {
              duplicatedProducts.push(productA);
              mergedProductsA = mergedProductsA.filter(product => product !== productA);
              mergedProductsB = mergedProductsB.filter(product => product !== productB);
            }
          })
        });

        // get product details for output
        duplicatedProducts.forEach(duplicatedProduct => {
          const mergedProduct = getMergedProductBySKU(duplicatedProduct.SKU, catalogA, 'A');
          mergedProducts.push(mergedProduct);
        });

        mergedProductsA.forEach(mergedProductA => {
          const mergedProduct = getMergedProductBySKU(mergedProductA.SKU, catalogA, 'A');
          mergedProducts.push(mergedProduct)
        });

        mergedProductsB.forEach(mergedProductB => {
          const mergedProduct = getMergedProductBySKU(mergedProductB.SKU, catalogB, 'B');
          mergedProducts.push(mergedProduct)
        });

        // output csv result
        const result = await LoadJsonToCsv(mergedProducts);
        writeFile('./output/result1.csv', result, err => {
            if (err) {
              console.error(err)
              return
            }
          });
    } catch (e) {
        console.log(e)
    }
})();
