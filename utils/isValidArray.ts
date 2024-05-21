export const isValidArray = (data: any) => {
    return data && Array.isArray(data) && data.length > 0
}
export default isValidArray
