function printName(name){
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{ 
      if(name){
        
        resolve("Meu nome é " + name)
      }else {
        
        reject("Um nome deve ser passado por parametro");
      }
      
    },2000);
  });

}


async function main(){

  console.log("I")
  try{ 

    const response = await printName("Izadora")
    console.log(response)
  }catch(error) { 
    console.log(error)
  }
}

main();