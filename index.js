const hoy1 = new Date();
const navidad = new Date(hoy1.getFullYear(), 11, 25); // 11 representa diciembre (0-indexed)

if (hoy1 > navidad) {
  navidad.setFullYear(hoy1.getFullYear() + 1);
}

const diferenciaEnMs = navidad - hoy1;
const diasRestantes = Math.floor(diferenciaEnMs / (1000 * 60 * 60 * 24));

console.log(`Días hasta Navidad: ${diasRestantes}`);


const fechaNacimiento = new Date('2003-10-05'); 
const hoy = new Date();
let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

if (hoy < new Date(hoy.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
  edad--;
}

console.log(`Edad: ${edad} años`);


const formulario = {
    nombre: 'Carlos',
    email: 'carlose@example.com',
    fechaNacimiento: '2003-10-05', 
  };
  
  let errores = [];
  
  if (!formulario.nombre) {
    errores.push('El nombre es obligatorio');
  }
  
  if (!formulario.email || !/^\S+@\S+\.\S+$/.test(formulario.email)) {
    errores.push('El email no es válido');
  }
  
  if (formulario.fechaNacimiento) {
    const fechaNac = new Date(formulario.fechaNacimiento);
    if (isNaN(fechaNac.getTime())) {
      errores.push('La fecha de nacimiento no es válida');
    }
  }
  
  
  if (errores.length > 0) {
    console.log('Errores en el formulario:');
    errores.forEach(error => {
      console.log(`- ${error}`);
    });
  } else {
    console.log('Formulario válido');
  }

  if(typeof exports != 'undefined'){
    if(typeof module != 'undefined' && module.exports){
        exports = module.exports = param_replacer;
    }
    exports.param_replacer = param_replacer;
}else{
    ShadowRoot.param_replacer = param_replacer;
}
  
