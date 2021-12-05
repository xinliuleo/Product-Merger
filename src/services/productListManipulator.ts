import { MergedProduct } from './models/MergedProduct.type';
import { Catalog } from './models/Catalog.type';
import { SupplierProductBarcode } from './models/SupplierProductBarcode.type';
export type Product = {
    SKU: string;
    Barcodes: string[];
}
export const hasMatchBarcode = (productA: Product, productB: Product) => productA.Barcodes.some(v => productB.Barcodes.includes(v));

export const getProductBarcodesBySKU = (sku: string, barcodes: SupplierProductBarcode[]): Product | undefined => {
    const barcodeList = barcodes.map(s => {
        if(s.SKU === sku){
            return s.Barcode;
        }
    }).filter(b => b !== undefined);

    if(barcodeList !== undefined && barcodeList.length !== 0)
    {
        return {
            SKU: sku,
            Barcodes: barcodeList,
        }
    }
    return undefined;
};

export const getMergedProductBySKU = (sku: string, catalogs: Catalog[], supplier: string): MergedProduct | undefined => {
    const productDescription = catalogs.filter(s => s.SKU === sku)[0]?.Description;
    if(productDescription !== undefined)
    {
        return {
            SKU: sku,
            Description: productDescription,
            Source: supplier,
        }
    }
    return undefined;
};