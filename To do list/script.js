var counter = 1;

function addItems () {
        var text = $('#myInput').val();
        $('#menu').append('<li><span>'+ text + ' </span><input type="submit" id="edit' + counter + '" value="Edit">' + 
        ' </span><input type="submit" id="done' + counter + '" value="Done">' +
        '<input type="submit" class="done" id="delete' + counter + '" value="Delete">' +'</li>');
  
$('#edit' + counter).click(function(){
    $(this).prev().attr('contenteditable','true');
    $(this).prev().focus();
});

$('#done' +counter).click(function(){
    if ($(this).closest("li").find("span").css('textDecoration') === 'line-through') {
        $(this).closest("li").find("span").css('textDecoration', 'none');
      } else
    {
        $(this).closest("li").find("span").css('textDecoration', 'line-through');
      }
}
    );


$('#delete' + counter).click(function(){
    $(this).parent().remove();
});

  counter++;
};

$(function() {
    $('.addBtn').on('click', addItems);
});

