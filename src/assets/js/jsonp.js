import originJsonp from 'jsonp'

function contactUrl(params){
    let url = ''
    for(let key in params){
        let val = params[key] === undefined ? '': params[key]
        url += `&${key}=${encodeURIComponent(val)}`
    }
    return url ? url.substring(1) : ''
}

export default function jsonp(url,params,option){
    url += (url.indexOf('?') < 0 ? '?' : '') + contactUrl(params)
    return new Promise((resolve,reject)=>{
        originJsonp(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}