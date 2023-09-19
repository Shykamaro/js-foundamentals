
$('input:checkbox').change(function() {
    let checked = $('input:checkbox:checked').length;
    
    if (checked >= 3) {
        $('input:checkbox:not(:checked)').prop('disabled', true);
    }
});