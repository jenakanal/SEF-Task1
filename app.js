const yargs = require("yargs")

const dataFunction = require("./dataFunction")

yargs.command({
    command : "add",
    discribtion : "this to add item",
    builder :{
        Fname :{
            type : "string",
            describe : "this is first name",
            demandOption : true
        },
        Lname :{
            type : "string",
            describe : "this is last name",
            demandOption : true
        },
        ID : {
            describe : "this is unique id",
            demandOption : true
        }
    },
    handler :(data) =>{
        dataFunction.addData(data.ID,data.Fname,data.Lname,data.age,data.city)
    }
})

yargs.command({
    command : "delete",
    discribtion : "to delete item by id",
    builder:{
        ID : {
            describe : "this is unique id",
            demandOption : true
        }
    },
    handler :(data)=>{
        dataFunction.deleteData(data.ID)
    }
})

yargs.command({
    command : "showSingle",
    discribtion : "to delete item by id",
    builder:{
        ID : {
            describe : "this is unique id",
            demandOption : true
        }
    },
    handler :(data)=>{
        dataFunction.showDataById(data.ID)
    }
})


yargs.command({
    command : "showData",
    discribtion : "to delete item by id",
    handler :()=>{
        dataFunction.showData()
    }
})


yargs.parse()


