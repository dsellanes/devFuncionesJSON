const cubrimientoModulos = (modulos) => {
    let doneContent = {};
    for (const prop in modulos.content_module){
       doneContent[prop] = false; 
    }

    let res = [];
    for (const prop in modulos.auth_module){
        let pos = -1;

        modulos.auth_module[prop].forEach(   (elem, index) => {

            for (const prop2 in modulos.content_module){
                if (pos < 0 ){
                    let esta = modulos.content_module[prop2].includes(elem); 
                    if (!doneContent[prop2] && esta) {
                        doneContent[prop2] = true; 
                        pos = index;
                        
                    } 
                }
            }
        }   );
        res.push(modulos.auth_module[prop][pos]);
        
    }
    return res; 
}

module.exports = cubrimientoModulos; 