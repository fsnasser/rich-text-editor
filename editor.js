$(document).ready(function(){
    var selectedClass = 'selected';

    $('.toolbar a').click(function(e) {
        var command = $(this).data('command');

        if(command == 'bold' || command === 'italic' || command === 'underline') {
            checkSelectedClass($(this));
        }

        document.execCommand(command, false, null);
        e.preventDefault();
    });

    $('.toolbar select#font-family').change(function() {
        var value = this.value;
        document.execCommand('fontName', false, value);
    });

    $('.toolbar select#font-size').change(function() {
        var value = this.value;
        document.execCommand('fontSize', false, value);
    });

    $('.toolbar select#title-size').change(function() {
        var value = this.value;
        document.execCommand('formatBlock', false, value);
    });

    $('.editor').on('input', function() {
        var actualValue = $(this).html();
        if(!actualValue || actualValue === '<br>') {
            resetToolbar();
        }
    });

    function checkSelectedClass(e) {
        if(e.hasClass(selectedClass)) {
            e.removeClass(selectedClass);
        } else {
            e.addClass(selectedClass);
        }
    }

    function resetToolbar() {
        $('.toolbar>a').removeClass(selectedClass);
        $('.toolbar select#font-family').val('Arial');
        $('.toolbar select#font-size').val('3');
        $('.toolbar select#title-size').val('H1');
    }
});