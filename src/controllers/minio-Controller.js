const express = require('express');
var Fs = require('fs')

module.exports = {
    insertObject
};
  
async function insertObject(request, response) {
  console.log("Inserting Object");
  minioClient = connectMinio();
  console.log(minioClient)

  response.status(200).json({
    data: {
      status: "success",
      message: "Item has been added successfully!"
    },
  });
}

const connectMinio = (req, res) =>{
  var Minio = require('minio')

  var minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: process.env.PORT,
    useSSL: true,
    accessKey: process.env.ACCESSKEY,
    secretKey: process.env.SECRETKEY
  });

  var filePath = process.env.PATH;
  const metadata = process.env.METADATA;
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
