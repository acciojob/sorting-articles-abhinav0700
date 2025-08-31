//your JS code here. If required.
const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

function stripp(inp) {
	return inp.replace(/^(a|an|the)/i,'').trim();	
};

const sorted_bands = band.sort((a,b)=>{
	return stripp(a).localeCompare(stripp(b));
});

document.getElementById('band').innerHTML = sorted_band.map(band=>`<li>${band}</li>`).join('');