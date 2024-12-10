const phoneNumbers  = {
    home: {country: "+1",  area: "211", number: "1234-543-5232"},
    work: {country: "+1",  area: "211", number: "1234-543-5232"},
    fax: {country: "+1",  area: "211", number: "1234-543-5232"}
}



const x : {[k:string] : string} = {}
const phones : {
    [k: string ]: {
        country: string
        area: string
        number: string
    }
} = {}