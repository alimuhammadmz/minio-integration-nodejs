const express = require('express');
var Fs = require('fs')

module.exports = {
    insertObject
};
  
async function insertObject(request, response) {
  console.log("Inserting Object");
  minioClient = connectMinio();
  console.log(minioClient)
  var PATH = "TESTING";
  response.status(200).json({
    data: {
      status: "success",
      message: "Item has been added successfully!"
    },
  });
  
  console.log("The path is:", PATH)
}

const connectMinio = (req, res) =>{
  var Minio = require('minio')

  var minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
  });

  var filePath = 'C:/Users/hp/Downloads/zakat-affi.pdf';
  const metadata = "size: 12kb";
  var fileStat = Fs.stat(filePath, function(err, stats) {
    if (err) {
      return console.log(err)
    }
    minioClient.putObject('test-pingup', 'test.pdf', filePath, metadata, function(err, objInfo) {
        if(err) {
          return console.log(err) // err should be null
        }
    console.log("Success", objInfo)
    })
  })

  return minioClient;
}