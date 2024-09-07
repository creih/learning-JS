// a function to write hi on template
function salute()
{
    document.write("Hello lad!!!")
}
// mimic the print function
function print(_word)
{
    document.write(_word);
}
// locating an alphabet' s index 
function locate(character)
{
    const alphab = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (var i=0; i<26; i++){
        if (character == alphab[i])
        {
            document.write(character+" found at: "+i);
        }
    }
}
// caesar cipher
function c_cipher(word){
    locate(word);
    
}