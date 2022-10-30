import qs from "qs";
export const getStringParameters = (str: string)=>{
    return qs.parse(str.slice(1))
}
export const setStringParameters = (obj: {})=>{
    return qs.stringify(obj)
}