# Finartz Frontend Development Project

### Desktop Görünüm:
<img width="1400"  src="https://github.com/Mehmet-Erdem-Akin/finartz-frontend-project/blob/master/src/Assets/Img/finartz-desktop.png?raw=true">

### Mobil Görünüm:
<img width="700"  src="https://github.com/Mehmet-Erdem-Akin/finartz-frontend-project/blob/master/src/Assets/Img/finartz-mobile.png?raw=true">

## Proje Yapısı ve Özellikleri
Projede, öncelikle dosya yapısını ve oluşturacağım componentleri hazırladım. Ardından sayfa/component tasarımlarını kodladım. Tasarımı kodlarken bazı element özelliklerini öğrenmek için https://www.themoviedb.org/ da inspect yöntemini kullandım. Ardından axios kullanarak verileri çektim. Daha sonra githubda bulup incelediğim lazy load kütüphanesini projede kullandım. axios ve lazy load kullanırken sık sık network'ü dinledim. Proje üzerinde çalışırken react hook yapılarını da kullandım. Projede değişiklik yaptıkça github'a pushladım.

### Özellikler
1) Kullanıcı slider veya tab üzerinde geçiş yaptığında lazy load şeklinde görüntülenme sağlanmaktadır. <br>
2) Her bir filmin score göstergesinde score'a göre renklendirme yaptım. score >= 70 ise yeşil, score < 70 ve score >= 40 ise sarı, score < 40 ise kırmızı renklendirme gerçkeleştiriyorum. <br>
3) Poster üzerinde thumbs up ve thumbs down iconları bulunmaktadır. Eğer kullanıcı iconlardan birine tıklarsa ekranda sadece tıkladığı icon gösterilir. Aynı icona tekrar tıklarsa 2 icon da tekrar görünebilir olmaktadır. <br>
4) Projede topla 9 component bulunmaktadır <br>
5) Projede mobil uyumlu olacak şekilde çalışılmıştır.



## NPM Paketleri
1) React <br>
2) Axios <br>
3) react-circular-progressbar <br>
    Filmlerin score göstergesini oluşturmak için bu paketi kullandım ve tasarıma göre özelleştirdim. 
4) react-lazy-load-image-component <br>
    Slider kaydırıldığında veya tab değiştirildiğinde lazy load uygulamak için bu paketi kullandım. Birkaç paket denedim fakat en düzgün çalışan bu oldu. 
5) react-responsive <br>
    Filter barı desktop görünümünde filter bar, mobil görünümde ise dropdown component olacak şekilde kodladım. Fakat hangi görünümde olduğumu anlayabilmek için bu paketin içinde bulunan MediaQuery componentini kullandım. 


## Nasıl Çalışır?
**1) Projede bulunan paketleri yüklemek İçin** : `npm install` <br />
**2) Projeyi ÇAlıştırmak İçin** : `npm start`


