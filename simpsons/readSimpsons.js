const readline = require('readline-sync');
const path = require('path');
const fs = require('fs').promises

//Exercise 1
// const getData = async () => {
//     try {
//         const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'))
//         const response = JSON.parse(data)
//         response.forEach((element, index) => {
//             console.log( response[index].id ,response[index].name);
//         });
//     } catch (error) {
//         console.log('foda né irmão');
//     }
// }
// getData()

//Exercise 2
// const getDataByID = (id) => {

//     return (new Promise(async(resolve, reject) => {
//         const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'))
//         const response = JSON.parse(data)
//         let resolver = true

//         for (let i = 1; i < response.length; i+= 1) {
//             if (id === response[i].id) {
//                 resolver = false
//                 resolve(response[i]);
//                 break;
//             } 
//         }

//         if(resolver) {   
//             reject('id não encontrado')
//         }


//     })).then(resolve => console.log(resolve)).catch((error) =>{console.log(error);});


// }
// getDataByID('37');


//Exercise 3

// const getDataByID = async (id) => {

//     const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'))
//     const response = JSON.parse(data)


//     try {
//         for (let i = 0; i < response.length; i += 1) {
//             if (id === response[i].id) {
//                 response.splice(id - 1, 1)
//                 console.log(response);
//             }
//         }
//         const newArchive = JSON.stringify(response)
//         await fs.writeFile(path.resolve(__dirname, 'simpsons.json'), newArchive)
//     } catch (error) {
//         console.error(`O ${id} digitado não existe ou já foi apagado`);
//     }

// }
// getDataByID('10');


// Exercise 4

// const createNewArchive = async () => {

//     const data = await fs.readFile(path.resolve(__dirname, 'simpsons.json'))
//     const response = JSON.parse(data)

//     const newData = []
//     for (let i = 0; i < 4; i += 1) {
//         newData.push(response[i])
//         console.log(newData);
//     }

//     const write = JSON.stringify(newData);

//     fs.writeFile(path.resolve(__dirname,'simpsonFamily.json'), write, (err) => {
//         if (err) throw err;
//         console.log('O arquivo foi criado!');
//     })

// }

// createNewArchive();

// Exercise 5

// const addNewCharacter = async () => {

//     const data = await fs.readFile(path.resolve(__dirname, 'simpsonFamily.json'))
//     const response = JSON.parse(data)

//     const newResponse = JSON.stringify([...response, {id: "5", name: "Nelson Muntz"}])

//     fs.writeFile(path.resolve(__dirname,'simpsonFamily.json'), newResponse, (err) => {
//             if (err) throw err;
//         console.log('O arquivo foi criado!');
//             })

// }

// addNewCharacter()

// Exercise 6

// const getDataByID = async () => {
//     try {
//         const data = await fs.readFile(path.resolve(__dirname, 'simpsonFamily.json'));
//         let response = JSON.parse(data);

//         for (let i = 0; i < response.length; i += 1) {
//             if ('5' === response[i].id.toString()) {
//                 response.splice(i, 1, { id: 5, name: "Maggie Simpson" });
//                 console.log(response);
//                 break; 
//             }
//         }
//         const newArchive = JSON.stringify(response);
//         await fs.writeFile(path.resolve(__dirname, 'simpsonFamily.json'), newArchive);
//         console.log("Dados atualizados com sucesso!");
//     } catch (error) {
//         console.error(`O id 5 digitado não existe ou já foi apagado`);
//     }
// };

// getDataByID();


function fibonnaci () {

}