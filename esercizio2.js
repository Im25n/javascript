// 1. chiedi il prezzo all utente
let prezzo=("inserisci il prezzo del prodotto:");
prezzo = parseFloat (prezzo); // converti la stringa in numero decimale
// 2. chiedi se ha un coupon (si/no)
let hacoupn = prompt("hai un coupn sconto?(si/no)");
// 3. imposta regole per lo sconto 
// //-se l'utente ha coupon, 
 applichiamo uno sconto del 20%
 //- altrimenti nessuno sconto 
 //-bonus: se il prezzo è sopra un certo valore (es.100£), applichiamo uno sconto extra
 let sconto = 0;
 if (hacoupon.tolowercase() === "si" || hacoupon.tolowercase() === "si") 
