const { response } = require("express");

const mahasiswaNim = '20220040253';
const updatedData = {
    nama: 'dilfa mahmood suhaimi',
    gender : 'L',
    prodi : 'TI',
    alamat : 'cisaat'
};

fetch('http://localhost:3000/mahasiswa%{mahasiswaNim}',{
    method : 'PUT',
    header : {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(updatedData)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('error:',error));