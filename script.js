//Yeni isim giriş fonksiyonu
function newName() {
  let name
  name = prompt('İsminiz nedir?') //name değişkenimize prompt ile kullanıcıdan veri girişi sağladık
  if (!name) { //eğer name değişkeninin içi boş ise;
    alert("Ad kısmı boş bırakılamaz") //uyarı göster,
    return newName();                 //aynı fonksiyonu tekrar çalıştır.
  } else if (name) { //eğer name değişkeninin içi dolu ise;
    document.querySelector("#myName").innerHTML = `${name}! ` //id'si myName olan elementi bul ve içeriğine temperal literals yöntemiyle name değişkenin içeriğini ata
  }
}

//Saat kısmı
function showTime() {
  const today = new Date(); //Bu günün tarihini al değişkene ata
  let h = today.getHours(); //Bu günün tarihinden saati al
  let m = today.getMinutes(); //Bu günün tarihinden dakikaları al
  let s = today.getSeconds(); //Bu günün tarihinden saniyeleri al
  let day = today.getDay(); //Bu günün index sayısını al

  m = checkTime(m); //m yani dakikaları al fonksiyon paramtresi olarak ata
  s = checkTime(s); //s yani saniyeleri al fonksiyon paramtresi olarak ata

  //Saat formatlama
  function checkTime(i) { //i parametreli fonksiyon ata
    if (i < 10) { //i değişkeni eğer 10'dan küçükse
      i = "0" + i //başına sıfır ekle, (yani eğer saniye 5 ise başına 0 eklediğinden 05 olur)
    };
    return i; //i değişkenini geri döndür, artık m veya s i'nin değeri oldu
  }

  /*  if (day == 1) {
     day = day = "Pazartesi"
   } else if (day == 2) {
     day = day = "Salı"
   } else if (day == 3) {
     day = day = "Çarşamba"
   } else if (day == 4) {
     day = day = "Perşembe"
   } else if (day == 5) {
     day = day = "Cuma"
   } else if (day == 6) {
     day = day = "Cumartesi"
   } else if (day == 7) {
     day = day = "Pazar"
   } */

  switch (day) { //Day değişkeni hangi case'e eşit olursa o blok çalışır.
    case 0:
      day = day = "Pazar"
      break;
    case 1:
      day = day = "Pazartesi"
      break;
    case 2:
      day = day = "Salı"
      break;
    case 3:
      day = day = "Çarşamba"
      break;
    case 4:
      day = day = "Perşembe"
      break;
    case 5:
      day = day = "Cuma"
      break;
    case 6:
      day = day = "Cumartesi"
      break;
  }

  document.getElementById('myClock').innerHTML = `${h}:${m}:${s} / ${day}`; //HTML belgesindeki myClock id'li div elementine ulaş ve içeriğini temperal literals yönetimiyle yazdır
  setTimeout(showTime, 1000); //showTime fonksiyonu için setTimeout metodunu kullandık her 1 saniyede bir çalışacak ve saat güncellenecek
};