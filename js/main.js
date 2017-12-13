var signs = [
	{
		name: "Aries",
		image: "images/aries.png",
		positivetraits: "Adventurous, energetic, courageous, enthusiastic, confident, dynamic, and witty.",
		negativetraits: "Selfish, quick-tempered, impulsive, and impatient.",
		dateCutoff: '19',
		month: 'April',
		otherZodiac: 'Taurus'
	},
	{
		name: "Taurus",
		image: "images/taurus.png",
		positivetraits: "Patient, reliable, warmhearted, loving, persistent, and determined.",
		negativetraits: "Jealous, possessive, resentful, inflexible, and greedy.",
		dateCutoff: '20',
		month: 'May',
		otherZodiac: 'Gemini'
	},
	{
		name: "Gemini",
		image: "images/gemini.png",
		positivetraits: "Adaptable, versatile, communicative, witty, intellectual, eloquent, and lively.",
		negativetraits: "Nervous, tense, superficial, inconsistent, and shrewd.",
		dateCutoff: '20',
		month: 'June',
		otherZodiac: 'Cancer'
	},
	{
		name: "Cancer",
		image: "images/cancer.png",
		positivetraits: "Loving, intuitive, imaginative, cautious, protective, and sympathetic.",
		negativetraits: "Moody, touchy, and clingy.",
		dateCutoff: '22',
		month: 'July',
		otherZodiac: 'Leo'
	},
	{
		name: "Leo",
		image: "images/leo.png",
		positivetraits: "Generous, warmhearted, creative, enthusiastic, open-minded, and faithful.",
		negativetraits: "Pompous, patronizing, bossy, and intolerant.",
		dateCutoff: '22',
		month: 'August',
		otherZodiac: 'Virgo'
	},
	{
		name: "Virgo",
		image: "images/virgo.png",
		positivetraits: "Modest, meticulous, reliable, practical, diligent, intelligent, and analytical.",
		negativetraits: "Fussy, anxious, over-critical, and conservative.",
		dateCutoff: '22',
		month: 'September',
		otherZodiac: 'Libra'
	},
	{
		name: "Libra",
		image: "images/libra.png",
		positivetraits: "Diplomatic, romantic, charming, easygoing, sociable, and idealistic.",
		negativetraits: "Indecisive, changable, gullible, flirtatious, and self-indulgent.",
		dateCutoff: '22',
		month: 'October',
		otherZodiac: 'Scorpio'
	},
	{
		name: "Scorpio",
		image: "images/scorpio.png",
		positivetraits: "Determined, forceful, emotional, intuitive, passionate, exciting, and magnetic.",
		negativetraits: "Jealous, resentful, compulsive, obsessive, and secretive.",
		dateCutoff: '21',
		month: 'November',
		otherZodiac: 'Sagittarius'
	},
	{
		name: "Sagittarius",
		image: "images/sagittarius.png",
		positivetraits: "Jovial, good-humored, honest, intellectual, and philosophical.",
		negativetraits: "Blindly optimistic, careless, irresponsible, superficial, and tactless.",
		dateCutoff: '21',
		month: 'December',
		otherZodiac: 'Capricorn'
	},
	{
		name: "Capricorn",
		image: "images/capricorn.png",
		positivetraits: "Practical, prudent, ambitious, disciplined, patient, careful, humorous, and reserved.",
		negativetraits: "Pessimistic, fatalistic, miserly, and grudging.",
		dateCutoff: '19',
		month: 'January',
		otherZodiac: 'Aquarius'
	},
  {
		name: "Aquarius",
		image: "images/aquarius.png",
		positivetraits: "Friendly, honest, loyal, inventive, independent, and intellectual.",
		negativetraits: "Intractible, contrarian, perverse, unpredictable, and detached.",
		dateCutoff: '18',
		month: 'February',
		otherZodiac: 'Pisces'
	},
	{
		name: "Pisces",
		image: "images/pisces.png",
		positivetraits: "Imaginative, sensitive, compassionate, selfless, and sympathetic.",
		negativetraits: "Escapist, idealistic, secretive, vague, and weak-willed.",
		dateCutoff: '20',
		month: 'March',
		otherZodiac: 'Aries'
	}
];


for(var i = 1; i <= 30; i++) {
	var dropdown = document.getElementById('Date');
	var option = document.createElement('option');
  option.value=i;
  option.textContent=i;
  dropdown.appendChild(option);
}


function btnfunction()
{
	var dateValue =document.getElementById("Date").value;
	var monthValue =document.getElementById("Month").value;
	// console.log(x);
	// console.log(y);
	if(dateValue=="00" || monthValue=="0"){
		document.getElementById("button").style.visibility = "hidden";
	}
	else {
	        document.getElementById("button").style.visibility = "visible";
				}
}

function getInfo(){
	var userMonthvalue =document.getElementById("Month").value;
	var userDatevalue =document.getElementById("Date").value;

	for(var i = 0; i < signs.length; i++) {
		if(userMonthvalue==signs[i].month){
				if(userDatevalue<=signs[i].dateCutoff){
					document.getElementById("sign").innerHTML="You Are: " +signs[i].name;
					document.getElementById("icon").src=signs[i].image;
					document.getElementById("icon").width=200;
					document.getElementById("icon").height=200;
					document.getElementById("goodinfo").innerHTML=signs[i].positivetraits;
					document.getElementById("badinfo").innerHTML=signs[i].negativetraits;
				}
				else
				{
					var nextSign=(i+1)%12;
					// console.log(nextSign);
					document.getElementById("sign").innerHTML="You Are: " +signs[nextSign].name;
					document.getElementById("icon").src=signs[nextSign].image;
					document.getElementById("icon").width=200;
					document.getElementById("icon").height=200;
					document.getElementById("goodinfo").innerHTML=signs[nextSign].positivetraits;
					document.getElementById("badinfo").innerHTML=signs[nextSign].negativetraits;

				}

		}


	}
	// if(dateValue < 21) {
	// 	return 'Pisces'
	// }
  //
	// }
  // ifl (true) {
	// 		Mar 21 - Apr 19	Aries
	// 		Apr 20 - May 20	Taurus
	// 		May 21 - Jun 20	Gemini
	// 		Jun 21 - Jul 22	Cancer
	// 		Jul 23 - Aug 22	Leo
	// 		Aug 23 - Sep 22	Virgo
	// 		Sep 23 - Oct 22	Libra
	// 		Oct 23 - Nov 21	Scorpius
	// 		Nov 22 - Dec 21	Sagittarius
	// 		Dec 22 - Jan 19	Capricornus
	// 		Jan 20 - Feb 18	Aquarius
	// 		Feb 19 - Mar 20	Pisces
  // }
}



function myfunction(){
  var x =document.getElementById("dropdown").value;
  // document.getElementById("sign").innerHTML="You Are: " +x;

  for(var i = 0; i < signs.length; i++) {
    if(x==signs[i].name){
    // console.log(signs[i]);
    document.getElementById("sign").innerHTML="You Are: " +signs[i].name;
    document.getElementById("icon").src=signs[i].image;
    document.getElementById("icon").width=200;
    document.getElementById("icon").height=200;
    document.getElementById("goodinfo").innerHTML=signs[i].positivetraits;
    document.getElementById("badinfo").innerHTML=signs[i].negativetraits;
  }
}
}
