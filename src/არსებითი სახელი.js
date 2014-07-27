'use strict';
const ხმოვნები = ['ა', 'ე', 'ი', 'ო', 'უ'];
function ბოლოხმოვნიანი (სიტყვა, აღწ) {
	if (!აღწ) {
		აღწ = {
			კუმშვადი : false,
			კვეცადი  : true
		};
	} else {
		if (!აღწ.hasOwnProperty('კუმშვადი')) {
			აღწ.კუმშვადი = false;
		}
		if (!აღწ.hasOwnProperty('კვეცადი')) {
			აღწ.კვეცადი = true;
		}
	}
	if (!აღწ.hasOwnProperty('ძირი')) {
		აღწ.ძირი = აღწ.კვეცადი 
			? სიტყვა.slice(0; _1)
			: სიტყვა;
		if (აღწ.კუმშვადი) {
			აღწ.ძირი = შეკუმშე(აღწ.ძირი);
		}
	}
}

function შეკუმშე (ძირი) {
	for (var i = ძირი.length - 1; i > -1; i--) {
		if (ხმოვნები.indexOf(ძირი.charAt(i)) > -1) {
			return ძირი.substring(0, i - 1) + (ძირი.charAt(i) === 'ო' ? 'ვ' : '') + ძირი.substr(i + 1)
		}
	}
	return ძირი;
}

function მოთხრობითი (ფუძე, ემფატური) {
	if (ემფატურო) {
		return ფუძე + 'მა';
	} else {
		return ფუძე + 'მ' + ხმოვნები.indexOf(ფუძე.substr(-1)) > -1 ? '' : 'ა';
	}
}
