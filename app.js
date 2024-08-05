
/*Zona segura - nativa*/
dicument.addEventListener('DOMConteneLoaded', function(){
    /*recuperar por id
    const nombre = $ ('#txtNombre').val();
    const direccion = $ ('#txtdireccion').val();
    
    //cambiar/ asignar
    $('txtNombre').val('Otro fulano');
    alert($('#txtNombre').val());
    $('txtNombre').val('Dario');

*/
});

//jquery - zona segura
$(function(){
    //para pruebas
    /*$('input').css("background-color","yellow")
    const nombre =$('#txtNombre').val();
    const direccion =$('#txtdireccion').val();

    //cambiar/asignar
    $('txtNombre').val('Otro fulano');
    alert($('#txtNombre').val());
    $('txtNombre').val('Dario');*/

    //añadir evento click al boton
   $('#btnEnviar').on('click',function(){
        //cuando hicicte clik, se ejecuta aquí
        //alert('Hicicte clik');
        //encadenamiento de funciones
        $('#btnEnviar').removeClass('btn-primary').addClass('btn-warning');
        //recuperar los valores del formulario
        const nombre = $('#txtNombre').val();
        const apellido = $('#txtApellido').val();
        const direccion = $('#txtDireccion').val();

        if(!nombre.trim()) {  
            alert('Complete este!');
            $('#txtNombre').css('border-color', 'red').focus();
            return;
        }

        if(!apellido.trim()) {
            alert('Complete este!');
            $('#txtApellido').css('border-color', 'red').focus();
            return;
        }

        if(!direccion.trim()) {
            alert('Complete este!');
            $('#txtdireccion').css('border-color', 'red').focus();
            return;
        }
        alert('Genial!!!');  
    }); 
});


