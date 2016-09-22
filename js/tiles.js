var tiles = ['Verassing','Beroemd','Freudiaans','Steenkolenfrans','Martin Bril','Het gebrek', 'Nico Dijkshoorn die Mart Smeets imiteert','Vergezocht','Zoon','Telegrafisch'];
var image = ['no-image'];
var intro = ['- ‘Biertje dan maar?’ – ‘Graag.’ – ‘Vermoeiende dag?’ – ‘Nah. Naar de bilbiotheek geweest. Met de bus.’ – ‘Gaat daar een bus naartoe?’ – ‘De bus stopt op het stationsplein.’ – ‘Ah. En vandaar moet je lopen?’ – ‘Ja, ik was met mijn zoon. Die sliep in zijn kinderwagen.’ – ‘Goed zo. Lekker wandelweer?’ […]','Vlak voordat ik de bus uitstap bedank ik de buschauffeur via de spiegel voor zijn diensten. Hij zwaait joviaal terug. ‘Mijn vrouw is een groot fan van u’, roept hij. ‘Doe haar de groeten’, zeg ik en stap uit. Centraal Station. Ik duw mijn zoon voort. Hij slaapt. Zich onbewust van de last die er […]','Ik stap uit de lul. Mijn aarsrivaal ligt te slapen in zijn kinderwagen. Wat een kutweer. De mensen zijn met zichzelf bezig, wat er hoogstwaarschijnlijk op neerkomt dat ze aan seks met hun moeder denken. Ik ben op weg naar de Openaarse Bilbiotheek van Amsterdam, om Stijloefeningen te lenen, een boek waarin Raymond Queneau op […]','Le premier fevrièr 2011. Presque midi. Le bus s’arrête. Ligne 21. Place de Gare Centrale. Je marche au derrière d’un poussette. Mon fils dort. Je suis en route au Bibliothèque Public pour emprunteur Exercices de Style de Raymond Queneau. C’est un livre très dificile d’acquérir. Mais zut alors, quelle ravage ici! Il y a beaucoup […]','Centraal Station. Iedereen gaat er naartoe, niemand moet er zijn. Behalve om verder te reizen. Ik stap uit de bus, lijn 21. Van Geuzenveld naar Centraal Station. Mijn zoon slaapt in zijn kinderwagen. Eindelijk. Het is druk op het plein, en toch heerst er een rust. De mensen zijn met zichzelf bezig. Kop in de […]','De bus uit. Mijn zoon tukt in zijn kinderkoets. Eindelijk. Ik loop over het plein. Een gierende wind en een striemende miezerregen geselen mijn gezicht. De mensen kijken voor zich uit, ieder voor zich. Ik ben op weg richting de bibliotheek om Stijloefeningen te lenen van hoe heet die schijver, iets met een Q. Welk […]','Noot vooraf: de heer Nico Dijkshoorn hecht eraan te melden dat hij onderstaande niet heeft geschreven. Ik stap uit een, ja wat is het eigenlijk?, een bus. Lijn 21? Zou zomaar kunnen. Twaalf uur. In de middag. Mijn zoon, luistert u mee?, mijn grandioze zoon, diezelfde zoon die zojuist nog die knotsgekke bus bij elkaar […]','Het was in de omstreken van een gure februaridag rond het middaguur. Mijn zoon lag in zijn kinderwagen te slapen als een oude jamaicaan die teveel Rum achter de ontbrekende kiezen heeft. Ik stapte het gemeenteblik uit met de stramheid van een bejaarde ooievaar. Ik zet mijn welgevormde voet richting het stationsplein. De mensen krioelen […]','Vroem. Tuut tuut. Whèèèh!! Die! Die! Whèèèh! Die! Die! Hjumhjumhjum. Zzzzzzzzzz.* Zzzzzzz.** Zzzzzzz. Hjumhjumhjum. Zzzzzzz. Grumbl. Huh? Whèèèh. Die! Die! Papa? Hjmwhumwhum. Boe?Boe? Hjmwhumwhum. Whèèèh!!! Die!*** Zjjoemmm. Vroem. Tuut tuut. Schoe!**** * We zitten in zo’n enorme auto, samen met een aantal andere mensen. Ik voel dat ik elk moment in slaap kan vallen. Ik […]','BUS STOPT STOP NAAR BIBLIOTHEEK VOOR STIJLOEFENINGEN STOP VAN RAYMOND QUENEAU STOP REGEN EN WIND MENSEN IN ZICHZELF GEKEERD STOP MODDERIGE TERINGZOOI HIER STOP DRILBOREN EN HEIPALEN TEISTEREN TROMMELVLIEZEN STOP VROUW VRAAGT IN ENGELS MET FRANS ACCENT OF DIT POSTKANTOOR IS STOP ONTKENNEND ANTWOORD WORDT NIET GEHOORD WEGENS WEGRENNEN NAAR ACHTERUITRIJDENDE RENAULT STOP TWEEDE VERDIEPING […]']
var tileNumb = 99;


for (var i = 0; i < tiles.length; i++) {
  var tileContainer = document.getElementById('tileContainer');
  var newLi = document.createElement('li');
  var newFig = document.createElement('figure');
  var newImg = document.createElement('img');
  var newFigCap = document.createElement('figcaption');
  var newH1 = document.createElement('h1');
  var newH2 = document.createElement('h2w')
  var newPar = document.createElement('p');
  var newButton = document.createElement('button');

  newLi.id = tileNumb;
  newPar.innerHTML = intro[i];
  newImg.src = "./img/beach.jpg";
  newImg.alt = tiles[i];
  newH1.innerHTML = tiles[i] //+ " (" + tileNumb + ")";
  newH2.innerHTML = "Molovich";
  newButton.innerHTML = "lezen";

  tileContainer.appendChild(newLi);
  newLi.appendChild(newFig);
  newFig.appendChild(newFigCap);
  newFigCap.appendChild(newH1);
  newFigCap.appendChild(newH2);
  newFig.appendChild(newImg);
  newFig.appendChild(newPar);
  newFig.appendChild(newButton);

  tileNumb -= 1;
}
