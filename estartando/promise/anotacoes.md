# Anotações durante o exercício

## Antes da promise

~~~javascript
function printB(){

  setTimeout(()=>{ //setTimeout para segurar alguns segundos para aparecer a função,com isso o "B" não vai aparecer depois do"A"

    console.log("B") //função dela é dar print em B

  },1000);

}

function main(){

console.log("A");

printB();

console.log("C");
}

main();

~~~

## Depois da promise

A promise foi usada para resolver a questão de aparecer o "B" depois do "A" mesmo com o setTimeout

- Resolve
~~~javascript
function printB() {
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{ 
      console.log("B") 
      resolve();
    },2000);
  });

}

function main(){
console.log("A")
printB().then(()=>{

  console.log("C")
});
}

main();

~~~

- Reject

precisa usar o catch

~~~javascript
function printB(){
  return new Promise((resolve,reject)=>{

    setTimeout(()=>{ 
      console.log("B") 
      reject();
    },2000);
  });

}

function main(){
console.log("A")
printB().then(()=>{

  console.log("C")
}).catch(()=>{
  console.log("C com Erro")
})
}

main();

~~~

# Async/ await 

~~~~javascript
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

// O async é usado na função que eu preciso

async function main(){

  console.log("I")
  try{ // try é relacionado com o parâmetro resolve

    const response = await printName("Izadora")
    console.log(response)
  }catch(error) { // catch é relacionado com o parâmetro reject
    console.log(error)
  }
}

main();

~~~~