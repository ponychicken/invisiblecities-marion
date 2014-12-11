/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchstart", function(sym, e) {
         e.preventDefault();
         
         var touch = e.touches[0] || e.changedTouches[0];
         
         sym.startPosTouch = touch.pageX;
         sym.startPosTime = curPos;

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //______________________________ TITLE ____________________________________
         
         sym.play("titre");
         
         //____________________________ PARALLAX ___________________________________
         
         sym.stageWidth = sym.$('Stage').width();
         sym.animTimelineLength = 40000;
         
         marionStinkt = false;
         
         curPos = 0;
         
         sym.onSwipe = function(pos)
         {
         	var diff = sym.startPosTouch - pos;
         	curPos = sym.startPosTime + diff/40;
         
         	if (curPos < 0) curPos = 0;
         	if (curPos > 2048) curPos = 2048;
         
         	calculatedPos = (curPos/sym.stageWidth) * sym.animTimelineLength;
         
         	if (marionStinkt){
         		// scrub to corresponding anim frame
         		sym.getSymbol("parallax").stop(calculatedPos);
         		sym.getSymbol("Ebene1out").stop(calculatedPos);
         		sym.getSymbol("neuKnopf").stop(calculatedPos);
         		sym.getSymbol("textes").stop(calculatedPos);
         	}
         
         
         //__________________________________ AUDIO ___________________________________________
         
         
         	Howler.position(calculatedPos/500, 0, 0);
         
         }		
         
         
         radiocigales = new Howl({
           urls: ['media/radiocigales.mp3'],
           volume:6
         });
         
         circus = new Howl({
           urls: ['media/circus.mp3']
         });
         
         tropical = new Howl({
           urls: ['media/tropical.mp3'],
           volume:5
         });
         
         formule1 = new Howl({
           urls: ['media/formule1.mp3'],
           volume:7
         });
         
         ville1 = new Howl({
           urls: ['media/ville1.mp3'],
           autoplay: true,
           loop: true
         }).position(12, 0, -0.5);
         
         villevivante1 = new Howl({
           urls: ['media/villevivante1.mp3'],
           autoplay: true,
           loop: true
         }).position(28, 0, -0.5);
         
         tram1 = new Howl({
           urls: ['media/tram1.mp3'],
           autoplay: true,
           loop: true
         }).position(38, 0, -0.5);
         
         pinpon1 = new Howl({
           urls: ['media/pinpon1.mp3'],
           autoplay: true,
           loop: true,
           volume: 2
         }).position(60, 0, -4.5);
         
         walkloop1 = new Howl({
           urls: ['media/walkloop1.mp3'],
           autoplay: true,
           loop: true
         }).position(0, 0, -0.5);
         
         eglise = new Howl({
           urls: ['media/eglise.mp3'],
           autoplay: true,
           loop: true,
           rolloffFactor:6,
         }).position(66, 4, -0.5);
         
         muezzin = new Howl({
           urls: ['media/muezzin.mp3'],
           autoplay: true,
           loop: true,
           rolloffFactor:5,
         }).position(30, 1, -0.5);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         e.preventDefault();
         var touch = e.touches[0] || e.changedTouches[0];
         sym.getComposition().getStage().onSwipe( touch.pageX );

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${titre}", "touchstart", function(sym, e) {
         //_______________ BERGE BEWEGEN SICH___________________________
         
         sym.getSymbol("Ebene1out").getSymbol("Ebene1in").getSymbol("startmontain1").play();
         sym.getSymbol("parallax").getSymbol("Ebene2").getSymbol("startmontain2").play();
         sym.getSymbol("parallax").getSymbol("Ebene3").getSymbol("startmontain3").play();
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("titre").play('titre_fin');
         
         //_________________ PARALLAXE WIRD NUR JETZT ACTIV ____________
         
         marionStinkt = true;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Ebene1'
   (function(symbolName) {   
   
   })("Ebene1");
   //Edge symbol end:'Ebene1'

   //=========================================================
   
   //Edge symbol: 'Ebene2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("Ebene2");
   //Edge symbol end:'Ebene2'

   //=========================================================
   
   //Edge symbol: 'Ebene3'
   (function(symbolName) {   
   
   })("Ebene3");
   //Edge symbol end:'Ebene3'

   //=========================================================
   
   //Edge symbol: 'parallax'
   (function(symbolName) {   
   
      

      

      

      

      

      

   })("parallax");
   //Edge symbol end:'parallax'

   //=========================================================
   
   //Edge symbol: 'gratteciel'
   (function(symbolName) {   
   
      

   })("gratteciel");
   //Edge symbol end:'gratteciel'

   //=========================================================
   
   //Edge symbol: 'sport'
   (function(symbolName) {   
   
   })("sport");
   //Edge symbol end:'sport'

   //=========================================================
   
   //Edge symbol: 'autostadt'
   (function(symbolName) {   
   
   })("autostadt");
   //Edge symbol end:'autostadt'

   //=========================================================
   
   //Edge symbol: 'palaststadt'
   (function(symbolName) {   
   
   })("palaststadt");
   //Edge symbol end:'palaststadt'

   //=========================================================
   
   //Edge symbol: 'Ebene1out'
   (function(symbolName) {   
   
   })("Ebene1out");
   //Edge symbol end:'Ebene1out'

   //=========================================================
   
   //Edge symbol: 'Knoepfe'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${RectangleGratteciel}", "touchstart", function(sym, e) {
         var xPosition = e.originalEvent.pageX;
         
         var eineStadt = sym.getParentSymbol().getParentSymbol().getSymbol("grattecielstadt");
         
         // oder vielleicht "relative" statt "absolute"
         eineStadt.getSymbolElement().css("position", "absolute");
         
         
         //y position also höhe
         eineStadt.getSymbolElement().css("top", "850px");
         
         
         // xposition, die variable, die wir vorher gespeichert hatten
         eineStadt.getSymbolElement().css("left", xPosition + 'px');
         
         
         
         eineStadt.$('gratteciel').fadeIn(2000);
         
         setTimeout(function() { 
         eineStadt.$('gratteciel').fadeOut(2000)
         }, 4000);
         
         
         
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutongratteciel").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutongratteciel").fadeIn(2000)
         }, 4000);
         
         
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleGratteciel").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleGratteciel").fadeIn(2000)
         }, 4000);
         
         
         
         // Play an audio track 
         radiocigales.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleSport}", "touchstart", function(sym, e) {
         var xPosition = e.originalEvent.pageX;
         
         var eineStadt = sym.getParentSymbol().getParentSymbol().getSymbol("sportstadt");
         
         // oder vielleicht "relative" statt "absolute"
         eineStadt.getSymbolElement().css("position", "absolute");
         
         
         //y position also höhe
         eineStadt.getSymbolElement().css("top", "540px");
         
         
         // xposition, die variable, die wir vorher gespeichert hatten
         eineStadt.getSymbolElement().css("left", xPosition + 'px');
         
         
         
         eineStadt.$('sport').fadeIn(2000);
         
         setTimeout(function() { 
         eineStadt.$('sport').fadeOut(2000)
         }, 4000);
         
         
         
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutonsport2").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutonsport2").fadeIn(2000)
         }, 4000);
         
         
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleSport").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleSport").fadeIn(2000)
         }, 4000);
         
         
         
         // Play an audio track 
         circus.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectangleAuto}", "touchstart", function(sym, e) {
         var xPosition = e.originalEvent.pageX;
         
         var eineStadt = sym.getParentSymbol().getParentSymbol().getSymbol("autostadt");
         
         // oder vielleicht "relative" statt "absolute"
         eineStadt.getSymbolElement().css("position", "absolute");
         
         
         //y position also höhe
         eineStadt.getSymbolElement().css("top", "700px");
         
         
         
         // xposition, die variable, die wir vorher gespeichert hatten
         eineStadt.getSymbolElement().css("left", xPosition + 'px');
         
         
         // Name des gifs eintragen
         eineStadt.$('autos').fadeIn(2000);
         
         setTimeout(function() { 
         eineStadt.$('autos').fadeOut(2000)
         }, 4000);
         
         
         //Name des blaue element details eintragen und direction wie man da hinkommt
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("blauestrasse").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("blauestrasse").fadeIn(2000)
         }, 4000);
         
         //Name des knopfs(RectangleBlabla) eintragen und direction wie man da hinkommt
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleAuto").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectangleAuto").fadeIn(2000)
         }, 4000);
         
         
         // Play an audio track 
         formule1.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RectanglePalast}", "touchstart", function(sym, e) {
         var xPosition = e.originalEvent.pageX;
         
         var eineStadt = sym.getParentSymbol().getParentSymbol().getSymbol("palaststadt");
         
         // oder vielleicht "relative" statt "absolute"
         eineStadt.getSymbolElement().css("position", "absolute");
         
         
         //y position also höhe
         eineStadt.getSymbolElement().css("top", "680px");
         
         
         // xposition, die variable, die wir vorher gespeichert hatten
         eineStadt.getSymbolElement().css("left", xPosition + 'px');
         
         
         // Name des gifs eintragen
         eineStadt.$('palaststadt').fadeIn(2000);
         
         setTimeout(function() { 
         eineStadt.$('palaststadt').fadeOut(2000)
         }, 4000);
         
         
         //Name des blaue element details eintragen und direction wie man da hinkommt
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutonpalast").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("parallax").getSymbol("Ebene2").$("boutonpalast").fadeIn(2000)
         }, 4000);
         
         //Name des knopfs(RectangleBlabla) eintragen und direction wie man da hinkommt
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectanglePalast").fadeOut(2000);
         setTimeout(function() { 
         sym.getParentSymbol().getParentSymbol().getSymbol("neuKnopf").getSymbol("Knoepfe").$("RectanglePalast").fadeIn(2000)
         }, 4000);
         
         
         
         // Play an audio track 
         tropical.play();

      });
      //Edge binding end

   })("Knoepfe");
   //Edge symbol end:'Knoepfe'

   //=========================================================
   
   //Edge symbol: 'startmontain3'
   (function(symbolName) {   
   
   })("startmontain3");
   //Edge symbol end:'startmontain3'

   //=========================================================
   
   //Edge symbol: 'startmontain1'
   (function(symbolName) {   
   
   })("startmontain1");
   //Edge symbol end:'startmontain1'

   //=========================================================
   
   //Edge symbol: 'startmontain2'
   (function(symbolName) {   
   
   })("startmontain2");
   //Edge symbol end:'startmontain2'

   //=========================================================
   
   //Edge symbol: 'neuKnopf'
   (function(symbolName) {   
   
   })("neuKnopf");
   //Edge symbol end:'neuKnopf'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'FEDORA'
   (function(symbolName) {   
   
   })("FEDORA");
   //Edge symbol end:'FEDORA'

   //=========================================================
   
   //Edge symbol: 'titre'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("titre");
   //Edge symbol end:'titre'

   //=========================================================
   
   //Edge symbol: 'S'
   (function(symbolName) {   
   
   })("S");
   //Edge symbol end:'S'

   //=========================================================
   
   //Edge symbol: 'text'
   (function(symbolName) {   
   
   })("text");
   //Edge symbol end:'text'

   //=========================================================
   
   //Edge symbol: 'textes'
   (function(symbolName) {   
   
   })("textes");
   //Edge symbol end:'textes'

   //=========================================================
   
   //Edge symbol: 'FumeeEbeneZwei'
   (function(symbolName) {   
   
   })("FumeeEbeneZwei");
   //Edge symbol end:'FumeeEbeneZwei'

   //=========================================================
   
   //Edge symbol: 'FumeeGrandeUsine'
   (function(symbolName) {   
   
   })("FumeeGrandeUsine");
   //Edge symbol end:'FumeeGrandeUsine'

   //=========================================================
   
   //Edge symbol: 'Fumee'
   (function(symbolName) {   
   
   })("Fumee_1");
   //Edge symbol end:'Fumee_1'

   //=========================================================
   
   //Edge symbol: 'Voegel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Voegel");
   //Edge symbol end:'Voegel'

   //=========================================================
   
   //Edge symbol: 'oiseauxEbene3'
   (function(symbolName) {   
   
   })("oiseauxEbene3");
   //Edge symbol end:'oiseauxEbene3'

   //=========================================================
   
   //Edge symbol: 'vogelGruppe'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40066, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("vogelGruppe");
   //Edge symbol end:'vogelGruppe'

   //=========================================================
   
   //Edge symbol: 'oiseauxGroupe'
   (function(symbolName) {   
   
   })("oiseauxGroupe_1");
   //Edge symbol end:'oiseauxGroupe_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-66808672");