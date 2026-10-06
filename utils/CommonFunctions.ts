import fs from 'fs'


export function fileChecker(file:any){
   if(!fs.existSync(file)){
      throw new Error(`File not exist ${file}`);
   }
}