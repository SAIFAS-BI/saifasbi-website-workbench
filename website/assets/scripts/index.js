window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

$(document).ready(function(){
	$('.conctact-us-btn').on('click', function(e){
		e.preventDefault();
		$('#modal').fadeIn(100);
		$('.modalBody').slideDown(300);

	});
	$('.modal-close, #modal').on('click', function(e){
		e.preventDefault();
		$('.modalBody').slideUp(100);
		$('#modal').fadeOut(300);
	});
});
