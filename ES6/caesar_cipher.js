/*
this is a mere imitation of the caesar cipher
using variables to store both cipher and plain text and even key to be used

the formula used:

cipher_text = (plain_text + key) modululs 26

*/

key = 110
alphabets=[
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z"]

p_txt = "abaja"
c_txt = new Array (p_txt.length)

for(var index=0; index<p_txt.length; index++)
{
    for (var ind=0; ind<alphabets.length; ind++)
    if (p_txt[index] == alphabets[ind])
        {
            formula = (ind+key) % 26
            c_txt = alphabets[formula]
            console.log(c_txt)
            
        }
}