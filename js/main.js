function formWord(){
    $('.word-btn').text('Working...');
    console.log('Working...');

    var word = $('.wordFld').val();
    word = word.toLowerCase();
    var wordlen = word.length;
    
    //reset
    $('.final-result').html('');
    $('.words-gened').html('');
    
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    var limit = 1000001; // make sure it has a stopping point
    var genWord = '';
    $('.final-result').html('Working...');
    
    while(word != genWord && count < limit){
        genWord = makeword(wordlen);  
        count++;
        
        if(word == genWord){
            $('.final-result').html('It took '+count+' random word generations to make the word "'+word+'"');
            $('.words-gened').prepend("<b>"+genWord+"</b>, ");
            $('.word-btn').text('Form Word Randomly');
        }else{
            $('.words-gened').prepend(genWord+", ");
        }
        
        if(count == limit-1){
            $('.final-result').html(count+' tries and still no match for "'+word+'"');
            $('.word-btn').text('Form Word Randomly');
        }
    }
        
}

function makeword(wordlen)
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < wordlen; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}