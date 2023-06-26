const express = require('express');
app = express()
const cds = require('@sap/cds')


class MyService extends cds.ApplicationService {

    async init() {
        const db = await cds.connect.to('db');

        const {student} = cds.entities ('data.db');

        this.on ('READ','readData', async (req) => {
            
                let results = await SELECT.from(student)
                console.log(JSON.stringify(results))
                return results
            })
      
            this.on ('READ','writedata', async (req) => {
                // var { data } = req.data
                // let approvedata = JSON.parse(data)
                let approvedata = [
                    {
                        "Id":121,
                        "name":"Manish",
                        "degree": "test",
                        "salary": "500"
                    },
                    {
                        "Id":122,
                        "name":"Manish",
                        "degree": "test",
                        "salary": "500"
                    },
                    {
                        "Id":123,
                        "name":"Manish",
                        "degree": "test",
                        "salary": "500"
                    }
                    ]

                    for(var i=0;i<approvedata.length;i++){
        
                        
                        await INSERT.into(student).columns (
                            'Id', 'name', 'degree', 'salary'
                        ) .values (
                            approvedata[i]['Id'], approvedata[i].name,approvedata[i]['degree'],approvedata[i]['salary']
                        ) ;
                        }

                        let results =  await SELECT.from(student);
                    return results
                })

    

   this.on ('rejectIdoc', async (req) => {
            // var { data } = req.data
            // let approvedata = JSON.parse(data)
            let approvedata = [
                {
                    "Id":116,
                    "name":"Manish",
                    "degree":"Bca",
                    "salary":500
                },
                {
                    "Id":117,
                    "name":"Manish",
                    "degree":"Bca",
                    "salary":500
                },
                {
                    "Id":118,
                    "name":"Manish",
                    "degree":"Bca",
                    "salary":500
                }
                ]
            for(var i=0;i<approvedata.length;i++){
                console.log(approvedata[i]['Id']);

                let so_header =  await SELECT.from(student);
                await INSERT.into(student).columns (
                    'Id', 'name', 'degree', 'salary'
                ) .values (
                    approvedata[i]['Id'], approvedata[i].name,approvedata[i]['degree'],approvedata[i]['salary']
                ) ;
                }
          
            return { Status: 201 };
        });

        await super.init();
    }
}
module.exports = {MyService}