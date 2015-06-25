function appendH1(){
	$('body').append('<h1>Test h1 tag</h1>');
};

function appendText(){
	$('body').append('some text to be added to the body...');
};

function appendUL() {
	$('body').append('<ul><li>list item</li><li>list item</li><li>list item</li></ul>');
};

$('.myButton').click(function() {
	console.log('print this to console');
});

$('.appendText').click(appendText);

$('.appendH1').click(appendH1);

$('.appendUL').click(appendUL);


