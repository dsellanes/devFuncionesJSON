const obtenerModulos = (jsons) => {
    //Definimos variable resultado 
    let res = {
        'auth_module': {},
        'content_module': {}
    }
    jsons.forEach( (json, index) => {
        const cm = json.provider.content_module
        const am = json.provider.auth_module
        if (typeof res.content_module[cm] == 'undefined') {
            res.content_module[cm] = [];
            
        }
        if (typeof res.auth_module[am] == 'undefined') {
            res.auth_module[am] = [];
        }

        res.auth_module[am].push(`./u${index}.json`);
        res.content_module[cm].push(`./u${index}.json`);
        //console.log(json.name);
        //console.log(res)
    });
    
    return res
}

module.exports = obtenerModulos; 
