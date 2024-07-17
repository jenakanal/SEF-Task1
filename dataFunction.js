const fs = require("fs")
const { json } = require("stream/consumers")

const loadData = ()=>{
    try {
        const allData = fs.readFileSync("dataBase.json").toString()
        return JSON.parse(allData) 
    }
    catch{
        return []
    }
}

const saveData = (allData)=>{
    const saveData = JSON.stringify(allData)
    fs.writeFileSync("dataBase.json",saveData)
    
}

const addData = (id,fname,lname,age,city)=>{

    const allData = loadData()
    const doblucateID = allData.filter((obj)=>{
        return obj.id==id
    })
    console.log(doblucateID.length)
    if(doblucateID.length==0){
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
    
        saveData(allData)
    }
    else{
        console.log("sorry id already exists")
    }
  
}


const deleteData = (id)=>{
    const allData = loadData()

    const DataAfterDelate = allData.filter((ob)=>{
        return ob.id!=id
    })
    if(allData.length==DataAfterDelate.length){      //this logic if id not found .. if lenght is equal then it not delete item becouse it not foun id
        console.log("id not found")
    }
    saveData(DataAfterDelate)
}


const showDataById = (id)=>{
    const allData = loadData()

    const showData = allData.filter((obj)=>{
        return obj.id ==id
    })

    if(showData.length>0){
        console.log(showData)
    }
    else{
        console.log("id not found")
    }
} 




const showData = ()=>{
    const allData = loadData()

    const dataShow = allData.forEach(elm => {
        console.log("the name is "+ elm.fname + " the city is "+ elm.city)
    });

}

module.exports = {
    addData,
    deleteData,
    showDataById,
    showData
}