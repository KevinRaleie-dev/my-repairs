type FieldError = {
    field: string
    message: string
}


/**
 * @description Convert an array of field errors to an object
 * @param arg 
 * @returns Record<string, string>
 */
export function convertToObject(arg: FieldError[]): Record<string, string> {
    const obj: Record<string, string> = {};
    arg.forEach(item => {
        obj[item.field] = item.message
        }
    )
    return obj;
}