import { MergedProduct } from './models/MergedProduct.type';
import { json2csvAsync } from 'json-2-csv';

export const LoadJsonToCsv = async (mergedProduct: Array<MergedProduct>): Promise<string | undefined> => {
    let result: string;
    await json2csvAsync(mergedProduct)
        .then((csvString)=>{
            result = csvString;
        })
        .catch((error) => {
            console.log('ERROR: ' + error.message);
            return undefined;
        });
    return result;
};
