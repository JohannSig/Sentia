/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready( function() {
    $('[data-toggle="popover"]').popover({
        content : "<li><a class='staff-tab btn btn-link' role='tab' data-toggle='tab' href='#staff-1'>Soffía Elín Sigurðardóttir</a></li>\n\
<li><a class='staff-tab btn btn-link' role='tab' data-toggle='tab' href='#staff-2'>Elín Anna Baldursdóttir</a></li>\n\
<li><a class='staff-tab btn btn-link' role='tab' data-toggle='tab' href='#staff-3'>Hanna Dorothéa Bizouerne</a></li>"
    });    
    console.log('Done.');
});


$(document).on('shown.bs.tab', '[data-toggle="tab"]', function() {     
    console.log(this);
    //$('a[role="tab"][data-toggle="popover"]').parent().addClass('active');
    $('[data-toggle="popover"]').popover('hide'); 
    if ($(this).hasClass("staff-tab")) {
        $('a[role="tab"][data-toggle="popover"]').parent().addClass('active');
    }
});