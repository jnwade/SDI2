//alert("JavaScript works!");

// Type of drums
var drumKit = ["Drums", "Crash Cybals", "Ride Cymbols", "Pedals", "Hi-Hats"]  

// Brand
var noun = [ "Ludwig", "Zildjen", "Sabian", "DW", "Paiste" ]

// Adding things to the beginning of my array
drumKit.unshift( "Sticks" );
noun.unshift( "Vic Firth" );



// My loop statement complete with concatenation
for (var i = 0, d = drumKit.length; i < d; i++) {
    console.log( "My " + drumKit[i] + " are " + noun[i] + "." );
};

var songSections = [ "Intro", "1st Verse", "1st Pre-Chorus", "1st Chorus", "2nd Verse","2nd Pre- Chorus", "2nd Chorus", "Bridge", "Outro" ],
       
    numberOfBars = [ 8, 16, 4, 8, 12, 4, 8, 20, 8 ] ;  

var playOneSection = function() {
       var songSection = songSections[sectionNumber],
              barsThisSection = numberOfBars[sectionNumber]
       console.log("Playing the " + songSection + " for " + barsThisSection + " bars.");
       for (var bars = 0; bars < barsThisSection; bars += 4) {
             var barsRemain = barsThisSection - bars;
             console.log(bars + " played, " + barsRemain + " left to go!");
	}
            console.log(songSection + " dominated!" )   
};
for (var sectionNumber = 0; sectionNumber < songSections.length; sectionNumber++) {
      playOneSection();
}

var say = function(message) { console.log(message);
};
//say(" I think I'm getting the hang of this!");


// Converting Fahrenheit to Celsius and Vice Versa
// F = ((9 / 5) * C) + 32
// C = (F - 32) * (5 / 9)

var fahFromCel = function( celsius ) {
	return ((9/5) * celsius) + 32;
};
say("32C = " + fahFromCel( 32 ) + "F.")

var isLeapYear = function( year) {
	var  isDivisibleBy = function (numerator, denominator) {
	        var fraction = numerator / denominator;
	        return (fraction === Math.floor(fraction));
           };
	if (isDivisibleBy(year, 400)) { return true; }
	else if(isDivisibleBy(year, 100)) { return false; }
	else if(isDivisibleBy(year, 4)) { return true; }
	else { return false; }
};
say("2000 is a leap year: " + isLeapYear(2000)); 
say("1900 is a leap year: " + isLeapYear(1900));
say("2008 is a leap year: " + isLeapYear(2008)); 
say("2011 is a leap year: " + isLeapYear(2011)); 


