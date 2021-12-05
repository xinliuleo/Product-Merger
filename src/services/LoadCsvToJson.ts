import csv from "csvtojson";

export const LoadCsvToJson = async <T>(csvFilePath: string): Promise<Array<T> | undefined> => {
    let result: Array<T>
    await csv()
        .fromFile(csvFilePath)
        .then((jsonArray)=>{
            result = jsonArray as unknown as Array<T>;
        },error => {
            console.log('ERROR: ' + error.message);
            return undefined;
        });
    return result;
};