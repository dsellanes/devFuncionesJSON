const cubrimientoModulos = (modulos) => {
    let doneContent = {};
    for (const prop in modulos.content_module){
       doneContent[prop] = false; 
    }
    console.log('Modelo inicial: ');
    console.log(doneContent);
    let res = [];
    for (const prop in modulos.auth_module){
        let pos = -1;
        console.log(modulos.auth_module[prop]);
        modulos.auth_module[prop].forEach(   (elem, index) => {
            console.log(elem);
            for (const prop2 in modulos.content_module){
                if (pos < 0 ){
                    let esta = modulos.content_module[prop2].includes(elem); 
                    if (!doneContent[prop2] && esta) {
                        doneContent[prop2] = true; 
                        pos = index;
                        console.log(doneContent);
                        console.log(pos);
                    } 
                }
                //console.log('hola');
            }
        }   );
        //console.log(pos);
        console.log(modulos.auth_module[prop][pos]);
        res.push(modulos.auth_module[prop][pos]);
        
    }
    return res; 
}

module.exports = cubrimientoModulos; 