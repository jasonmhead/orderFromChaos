function formWord(){
    $('.word-btn').text('Working...');

    var word = $('.wordFld').val();
    word = word.toLowerCase();
    var wordlen = word.length;
    
    //reset
    $('.final-result').html('');
    $('.words-gened').html('');
    
    var possible = "abcdefghijklmnopqrstuvwxyz";
    var count = 0;
    var limit = 50001; // make sure it has a stopping point
    var genWord = '';
    
    while(word != genWord && count < limit){
        genWord = makeword(wordlen);  
        count++;
        
        if(word == genWord){
            $('.final-result').html('It took '+count+' tries to make the word "'+word+'"');
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