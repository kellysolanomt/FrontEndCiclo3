//****************************************GET SKATE***********************************************/
function traerInfoSkate(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Skate/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaSkate) {
            console.log(respuestaSkate);
            pintarRespSkate(respuestaSkate);
            $('#tableCategorias').hide(); 
            $('#tableClientes').hide(); 
            $('#tableMensajes').hide(); 
            $('#tableReservas').hide();
            $('#tableAdministradores').hide();
            $('#tablePatinetas').show(); 
        },
        error:function(jdXHR, textStatus, errorThrown){
        }
    });
}

//****************************************GET CATEGORY***********************************************/
function traerInfoCategory(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaCategory) {
            console.log(respuestaCategory);
            pintarRespCategory(respuestaCategory);
            $('#tableClientes').hide(); 
            $('#tableMensajes').hide(); 
            $('#tableReservas').hide();
            $('#tableAdministradores').hide();
            $('#tablePatinetas').hide(); 
            $('#tableCategorias').show();
        },
        error:function(jdXHR, textStatus, errorThrown){
        }
    });
}

//****************************************GET CLIENTE***********************************************/
function traerInfoClient(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaClient) {
            console.log(respuestaClient);
            pintarRespClient(respuestaClient);
            $('#tableMensajes').hide(); 
            $('#tableReservas').hide();
            $('#tableAdministradores').hide();
            $('#tablePatinetas').hide(); 
            $('#tableCategorias').hide();
            $('#tableClientes').show();
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

//****************************************GET MESSAGE***********************************************/
function traerInfoMessage(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaMessage) {
            console.log(respuestaMessage);
            pintarRespMessage(respuestaMessage); 
            $('#tableReservas').hide();
            $('#tableAdministradores').hide();
            $('#tablePatinetas').hide(); 
            $('#tableCategorias').hide();
            $('#tableClientes').hide();
            $('#tableMensajes').show(); 
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

//****************************************GET RESERVATION***********************************************/
function traerInfoReservation(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaReservation) {
            console.log(respuestaReservation);
            pintarRespReservation(respuestaReservation);
            $('#tableAdministradores').hide();
            $('#tablePatinetas').hide(); 
            $('#tableCategorias').hide();
            $('#tableClientes').hide();
            $('#tableMensajes').hide();  
            $('#tableReservas').show();
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

function traerInfoAdmin(){
    $.ajax({
        url:"http://168.138.124.98:80/api/Admin/all",
        type:"GET",
        datatype:"JSON",
        success:function (respuestaAdmin) {
            console.log(respuestaAdmin);
            pintarRespAdmin(respuestaAdmin);
            $('#tableAdministradores').hide();
            $('#tablePatinetas').hide(); 
            $('#tableCategorias').hide();
            $('#tableClientes').hide();
            $('#tableMensajes').hide();  
            $('#tableReservas').hide();
            $('#tableAdministradores').show();
        },
        error:function(jdXHR, textStatus, errorThrown){
            
        }
    });
}

//****************************************PINTAR RESPUESTA -> TABLA SKATE*************************************/
function pintarRespSkate(itemsSkate){
    var fila = '';
    for(i=0;i<itemsSkate.length;i++){
        fila+="<tr>"
        //fila+="<td>"+itemsSkate[i].id+"</td>";
        fila+="<td>"+itemsSkate[i].name+"</td>";
        fila+="<td>"+itemsSkate[i].brand+"</td>";
        fila+="<td>"+itemsSkate[i].year+"</td>";
        fila+="<td>"+itemsSkate[i].description+"</td>";
        fila+="<td> <button onClick='borrarElementoSkate("+itemsSkate[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecSkate("+itemsSkate[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoSkate').html(fila);
}

//********************************************PINTAR RESPUESTA -> TABLA CATEGORY***************************************/
function pintarRespCategory(itemsCategory){
    var fila = '';
    for(i=0;i<itemsCategory.length;i++){
        fila+="<tr>"
        fila+="<td>"+itemsCategory[i].name+"</td>";
        fila+="<td>"+itemsCategory[i].description+"</td>";
        fila+="<td> <button onClick='borrarElementoCategory("+itemsCategory[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecCategory("+itemsCategory[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoCategory').html(fila);
}

//*********************************************PINTAR RESPUESTA -> TABLA CLIENT*******************************************/
function pintarRespClient(itemsClient){
    var fila = '';
    for(i=0;i<itemsClient.length;i++){
        fila+="<tr>"
        fila+="<td>"+itemsClient[i].name+"</td>";
        fila+="<td>"+itemsClient[i].email+"</td>";
        fila+="<td>"+itemsClient[i].password+"</td>";
        fila+="<td>"+itemsClient[i].age+"</td>";
        fila+="<td> <button onClick='borrarElementoClient("+itemsClient[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecClient("+itemsClient[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoClient').html(fila);
}

//***********************************************PINTAR RESPUESTA -> TABLA MESSAGE*********************************************/
function pintarRespMessage(items){
    var fila = '';
    for(i=0;i<items.length;i++){
        fila+="<tr>"
        fila+="<td>"+items[i].messageText+"</td>";
        fila+="<td> <button onClick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecMessage("+items[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoMessage').html(fila);
}

//***********************************************PINTAR RESPUESTA -> TABLA RESERVATION*********************************************/
function pintarRespReservation(items){
    var fila = '';
    for(i=0;i<items.length;i++){
        fila+="<tr>"
        fila+="<td>"+items[i].startDate+"</td>";
        fila+="<td>"+items[i].devolutionDate+"</td>";
        fila+="<td>"+items[i].status+"</td>";
        fila+="<td>"+items[i].score+"</td>";
        fila+="<td> <button onClick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecMessage("+items[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoReservation').html(fila);
}

//***********************************************PINTAR RESPUESTA -> TABLA ADMIN*********************************************/
function pintarRespAdmin(items){
    var fila = '';
    for(i=0;i<items.length;i++){
        fila+="<tr>"
        fila+="<td>"+items[i].name+"</td>";
        fila+="<td>"+items[i].email+"</td>";
        fila+="<td> <button onClick='borrarElementoMessage("+items[i].id+")'>Borrar</button>";
        fila+="<td> <button onClick='obtenerItemEspecMessage("+items[i].id+")'>Detalles</button>";
        fila+="</tr>";
    }
    // myTable+="</table>";
    $('#resultadoAdmin').html(fila);
}

function mostrarFormularioSkate(){
    $('#formularioCategorias').hide();
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').hide(); 
    $('#formularioReserva').hide(); 
    $('#formularioAdministradores').hide(); 
    $('#formularioPatinetas').show(); 
}

function mostrarFormularioCategory(){
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').hide(); 
    $('#formularioReserva').hide(); 
    $('#formularioAdministradores').hide(); 
    $('#formularioPatinetas').hide();
    $('#formularioCategorias').show();
}

function mostrarFormularioClient(){ 
    $('#formularioMensaje').hide(); 
    $('#formularioReserva').hide(); 
    $('#formularioAdministradores').hide(); 
    $('#formularioPatinetas').hide();
    $('#formularioCategorias').hide();
    $('#formularioCliente').show();
}

function mostrarFormularioMessage(){ 
    $('#formularioReserva').hide(); 
    $('#formularioAdministradores').hide(); 
    $('#formularioPatinetas').hide();
    $('#formularioCategorias').hide();
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').show();
}

function mostrarFormularioReservation(){ 
    $('#formularioAdministradores').hide(); 
    $('#formularioPatinetas').hide();
    $('#formularioCategorias').hide();
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').hide();
    $('#formularioReserva').show();
}

function mostrarFormularioAdmin(){ 
    $('#formularioPatinetas').hide();
    $('#formularioCategorias').hide();
    $('#formularioCliente').hide(); 
    $('#formularioMensaje').hide();
    $('#formularioReserva').hide();
    $('#formularioAdministradores').show();
}

//CREAR SKATE
function guardarInfoSkate(){
    let myData={
        name:$("#name_skate").val(),
        brand:$("#brand_skate").val(),
        year:$("#year_skate").val(),
        description:$("#description_skate").val(),
        categoryId:$("#categoryId_skate").val(),
    };
    
    $.ajax({
        url:"http://168.138.124.98:80/api/Skate/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaSkate) {
            $("#resultadoSkate").empty();
            $("#name_skate").val("");
            $("#brand_skate").val("");
            $("#year_skate").val("");
            $("#description_skate").val("");
            $("#categoryId_skate").val("");
            traerInfoSkate();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

function guardarInfoCategory(){
    let myData={
        name:$("#name_category").val(),
        description:$("#description_category").val(),
    };
    //let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.124.98:80/api/Category/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaCategory) {
            $("#resultadoCategory").empty();
            $("#name_category").val("");
            $("#description_category").val("");
            traerInfoCategory();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

function guardarInfoClient(){
    let myData={
        name:$("#name_client").val(),
        email:$("#email_client").val(),
        password:$("#password_client").val(),
        age:$("#age_client").val()
    };
    $.ajax({
        url:"http://168.138.124.98:80/api/Client/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaClient) {
            $("#resultadoClient").empty();
            $("#name_client").val("");
            $("#email_client").val("");
            $("#password_client").val("");
            $("#age_client").val("");
            traerInfoClient();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

function guardarInfoMessage(){
    let myData={
        messageText:$("#messagetext_message").val(),
        clientId:$("#client_message").val(),
        skateId:$("#skate_message").val(),
    };
    $.ajax({
        url:"http://168.138.124.98:80/api/Message/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaMessage) {
            $("#resultadoMessage").empty();
            $("#messagetext_message").val("");
            $("#client_message").val("");
            $("#skate_message").val("");
            traerInfoMessage();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

function guardarInfoReservation(){
    let myData={
        startDate:$("#startdate_reservation").val(),
        devolutionDate:$("#devolution_reservation").val(),
        clientId:$("#client_reservation").val(),
        skateId:$("#skate_reservation").val(),
    };
    $.ajax({
        url:"http://168.138.124.98:80/api/Reservation/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaReservation) {
            $("#resultadoReservation").empty();
            $("#startdate_reservation").val("");
            $("#devolution_reservation").val("");
            $("#client_reservation").val("");
            $("#skate_reservation").val("");
            traerInfoReservation();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

function guardarInfoAdmin(){
    let myData={
        name:$("#name_admin").val(),
        email:$("#email_admin").val(),
        password:$("#password_admin").val(),
    };
    $.ajax({
        url:"http://168.138.124.98:80/api/Admin/save",
        type:"POST",
        data:myData,
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        data:JSON.stringify(myData),
        success:function (respuestaAdmin) {
            $("#resultadoAdmin").empty();
            $("#name_admin").val("");
            $("#email_admin").val("");
            $("#password_admin").val("");
            traerInfoAdmin();
            alert("Se ha guardado exitosamente");
        },
        error:function(jdXHR, textStatus, errorThrown){
            alert("No se ha guardado exitosamente");
        }
    });
}

// //ENVIO DE DATOS DE SKATE ESPECIFICO
// function obtenerItemEspecSkate(idItem){
//     $.ajax({
//         url:"http://localhost:8080/api/Skate/"+idItem,
//         type:"GET",
//         datatype:"JSON",
//         success:function (respuestaSkate) {
//             console.log(respuestaSkate);
//             var item=respuestaSkate.items[0];
//             $("#id_skate").val(item.id);
//             $("#id_skate").attr("readonly", true);
//             $("#brand_skate").val(item.brand);
//             $("#model_skate").val(item.model);
//             $("#category_id_skate").val(item.category_id);
//             $("#name_skate").val(item.name);
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function obtenerItemEspecClient(idItem){
//     $.ajax({
//         url:"http://localhost.98:8080/api/Client/"+idItem,
//         type:"GET",
//         datatype:"JSON",
//         success:function (respuestaClient) {
//             console.log(respuestaClient);
//             var item=respuestaClient.items[0];
//             $("#id_client").val(item.id);
//             $("#id_client").attr("readonly", true);
//             $("#name_client").val(item.name);
//             $("#email_client").val(item.email);
//             $("#age_client").val(item.age);
//         },
//         error:function(jdXHR, textStatus, errorThrown){
            
//         }
//     });
// }

// function obtenerItemEspecMessage(idItem){
//     $.ajax({
//         url:"http://localhost.98:8080/api/Message/"+idItem,
//         type:"GET",
//         datatype:"JSON",
//         success:function (respuestaClient) {
//             console.log(respuestaClient);
//             var item=respuestaClient.items[0];
//             $("#id_message").val(item.id);
//             $("#id_message").attr("readonly", true);
//             $("#messagetext_message").val(item.messagetext);
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// //ACTUALIZAR SKATE
// function editarInfoSkate(){
//     let myData={
//         id:$("#id_skate").val(),
//         brand:$("#brand_skate").val(),
//         model:$("#model_skate").val(),
//         category_id:$("#category_id_skate").val(),
//         name:$("#name_skate").val()
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
//         type:"PUT",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuestaSkate) {
//             $("#resultadoSkate").empty();
//             $("#id_skate").val("");
//             $("#id_skate").attr("readonly", false);
//             $("#brand_skate").val("");
//             $("#model_skate").val("");
//             $("#category_id_skate").val("");
//             $("#name_skate").val("");
//             traerInfoSkate();
//             alert("Se ha actualizado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function editarInfoClient(){
//     let myData={
//         id:$("#id_client").val(),
//         name:$("#name_client").val(),
//         email:$("#email_client").val(),
//         age:$("#age_client").val()
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
//         type:"PUT",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuestaClient) {
//             $("#resultadoClient").empty();
//             $("#id_client").val("");
//             $("#id_client").attr("readonly", false);
//             $("#name_client").val("");
//             $("#email_client").val("");
//             $("#age_client").val("");
//             traerInfoClient();
//             alert("Se ha actualizado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function editarInfoMessage(){
//     let myData={
//         id:$("#id_message").val(),
//         messagetext:$("#messagetext_message").val()
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
//         type:"PUT",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuesta) {
//             $("#resultadoMessage").empty();
//             $("#id_message").val("");
//             $("#id_message").attr("readonly", false);
//             $("#messagetext_message").val("");
//             traerInfoMessage();
//             alert("Se ha actualizado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function borrarElementoSkate(idElemento){
//     let myData={
//         id:idElemento
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
//         type:"DELETE",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuesta) {
//             $("#resultadoSkate").empty();
//             traerInfoSkate();
//             alert("Se ha borrado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function borrarElementoClient(idElemento){
//     let myData={
//         id:idElemento
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
//         type:"DELETE",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuesta) {
//             $("#resultadoClient").empty();
//             traerInfoClient();
//             alert("Se ha borrado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

// function borrarElementoMessage(idElemento){
//     let myData={
//         id:idElemento
//     };
//     let dataToSend=JSON.stringify(myData);
//     $.ajax({
//         url:"https://ga133b1f8ca3808-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
//         type:"DELETE",
//         data:dataToSend,
//         contentType:"application/JSON",
//         datatype:"JSON",
//         success:function (respuesta) {
//             $("#resultadoMessage").empty();
//             traerInfoMessage();
//             alert("Se ha borrado exitosamente");
//         },
//         error:function(jdXHR, textStatus, errorThrown){

//         }
//     });
// }

$(document).ready(function(){
    $('#tablePatinetas').css('display', 'none');
    $('#tableClientes').css('display', 'none');
    $('#tableMensajes').css('display', 'none');
    $('#tableCategorias').css('display', 'none');
    $('#tableReservas').css('display', 'none');
    $('#tableAdministradores').css('display', 'none');
    $('#formularioPatinetas').css('display', 'none');
    $('#formularioCategorias').css('display', 'none');
    $('#formularioCliente').css('display', 'none');
    $('#formularioMensaje').css('display', 'none');
    $('#formularioReserva').css('display', 'none');
    $('#formularioAdministradores').css('display', 'none');
})