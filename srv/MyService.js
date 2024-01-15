const express = require('express');
app = express()
const cds = require('@sap/cds')


class MyService extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const {student} = cds.entities ('chobani.db');
        const {users} = cds.entities('chobani.db');

        this.on ('READ','readData', async (req) => {
            
                let results = await SELECT.from(student)
                console.log(JSON.stringify(results))
                return results
            })
        
        this.on('READ', 'userDetails', async (req) => {
            try {
                let results = await SELECT.from(users);
                console.log(results);
                return results;
            } catch (error) {
                console.error('Error executing READ operation:', error);
                // Handle or propagate the error appropriately based on your application's needs
                throw error;
            }
        });
      
        // this.on ('READ','writedata', async (req) => {
        //     // var { data } = req.data
        //     // let approvedata = JSON.parse(data)
        //     let approvedata = [
        //         {
        //             "Id":121,
        //             "name":"Manish",
        //             "degree": "test",
        //             "salary": "500"
        //         },
        //         {
        //             "Id":122,
        //             "name":"Manish",
        //             "degree": "test",
        //             "salary": "500"
        //         },
        //         {
        //             "Id":123,
        //             "name":"Manish",
        //             "degree": "test",
        //             "salary": "500"
        //         }
        //         ]

        //         for(var i=0;i<approvedata.length;i++){

                    
        //             await INSERT.into(student).columns (
        //                 'Id', 'name', 'degree', 'salary'
        //             ) .values (
        //                 approvedata[i]['Id'], approvedata[i].name,approvedata[i]['degree'],approvedata[i]['salary']
        //             ) ;
        //             }

        //             let results =  await SELECT.from(student);
        //         return results
        //     })

    

        // this.on ('rejectIdoc', async (req) => {
        //             // var { data } = req.data
        //             // let approvedata = JSON.parse(data)
        //             let approvedata = [
        //                 {
        //                     "Id":116,
        //                     "name":"Manish",
        //                     "degree":"Bca",
        //                     "salary":500
        //                 },
        //                 {
        //                     "Id":117,
        //                     "name":"Manish",
        //                     "degree":"Bca",
        //                     "salary":500
        //                 },
        //                 {
        //                     "Id":118,
        //                     "name":"Manish",
        //                     "degree":"Bca",
        //                     "salary":500
        //                 }
        //                 ]
        //             for(var i=0;i<approvedata.length;i++){
        //                 console.log(approvedata[i]['Id']);

        //                 let so_header =  await SELECT.from(student);
        //                 await INSERT.into(student).columns (
        //                     'Id', 'name', 'degree', 'salary'
        //                 ) .values (
        //                     approvedata[i]['Id'], approvedata[i].name,approvedata[i]['degree'],approvedata[i]['salary']
        //                 ) ;
        //                 }
                
        //             return { Status: 201 };
        //         });
        
    
        // this.on ('READ','writedataUser', async (req) => {
        //     // var { data } = req.data
        //     // let approvedata = JSON.parse(data)
        //     let approvedata = [
        //         {
        //             "id":121,
        //             "name":"Manish",
        //             "userName": "test",
        //             "password": "500"
        //         },
        //         {
        //             "id":122,
        //             "name":"Manish",
        //             "userName": "test",
        //             "password": "500"
        //         }
        //         ]

        //         for(var i=0;i<approvedata.length;i++){    
        //             await INSERT.into(users).columns (
        //                 'Id', 'name', 'userName', 'password'
        //             ) .values (
        //                 approvedata[i]['id'], approvedata[i].name,approvedata[i]['userName'],approvedata[i]['password']
        //             ) ;
        //             }

        //             // let results =  await SELECT.from(student);
        //         return results
        //     })

        this.on ('userLogin', async (req) => {
                    var { data } = req.data
                    let approvedata = JSON.parse(data)
                    console.log(approvedata);
                    // let approvedata = [
                    //     {
                    //         "Id":116,
                    //         "name":"Manish",
                    //         "degree":"Bca",
                    //         "salary":500
                    //     },
                    //     {
                    //         "Id":117,
                    //         "name":"Manish",
                    //         "degree":"Bca",
                    //         "salary":500
                    //     },
                    //     {
                    //         "Id":118,
                    //         "name":"Manish",
                    //         "degree":"Bca",
                    //         "salary":500
                    //     }
                    //     ]
                    // for(var i=0;i<approvedata.length;i++){
                    //     console.log(approvedata[i]['Id']);

                    //     let so_header =  await SELECT.from(student);
                    //     await INSERT.into(student).columns (
                    //         'Id', 'name', 'degree', 'salary'
                    //     ) .values (
                    //         approvedata[i]['Id'], approvedata[i].name,approvedata[i]['degree'],approvedata[i]['salary']
                    //     ) ;
                    //     }
                    let record = await SELECT.from(users).where(userName = approvedata.userName);

                    if(record){
                        if(record.password == approvedata.password){
                            return {respond: JSON.stringify(record)}
                        }
                        else{
                            return {respond: "Wrong Password"};
                        }
                    }
                    else{
                        return {respond: "Wrong Credentials"};
                    }
                    // return { Status: 201 };
                });
        
        await super.init();
    }
}
module.exports = {MyService}