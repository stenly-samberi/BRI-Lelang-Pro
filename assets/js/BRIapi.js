$(document).ready(function() {
    $('#fetchData').click(function() {
        var token = 'pYJAYccp57iYEpiNnIq5b9p8oGBhtinj';
        var timestamp = new Date().toISOString();
        var signature = 'G4jouyA504aXtAzy';

        $.ajax({
            url: 'https://sandbox.partner.api.bri.co.id/v1.0/info-lelang/asset',
            type: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'BRI-Timestamp': timestamp,
                'BRI-Signature': signature,
                'Content-Type': 'application/json'
            },
            success: function(response) {
                console.log(response);
                alert(JSON.stringify(response));
            },
            error: function(error) {
                console.log(error);
                alert('Gagal Koneksi : ' + error.responseText);
            }
        });
    });
});


// $(document).ready(function() {
//     $.ajax({
//         url: 'https://sandbox.partner.api.bri.co.id/v1.0/info-lelang/asset', 
//         type: 'GET', // Metode request
//         headers: {
//             'Authorization': 'Bearer pYJAYccp57iYEpiNnIq5b9p8oGBhtinj', 
//             'BRI-Timestamp': new Date().toISOString(), 
//             'BRI-Signature': 'G4jouyA504aXtAzy',
//             'Content-Type': 'application/json'
//         },
//         success: function(response) {
//             console.log(response); // Menampilkan respon di console
//             // Menampilkan data respon di halaman web
//             response.data.forEach(function(asset) {
//                 $('#lelang-info').append(
//                     `<div>
//                         <h3>${asset.name}</h3>
//                         <p>ID: ${asset.id}</p>
//                         <p>Lokasi: ${asset.location}</p>
//                         <p>Status: ${asset.status}</p>
//                     </div>`
//                 );
//             });
//         },
//         error: function(error) {
//             console.error('Error:', error); // Menampilkan error di console
//         }
//     });
// });