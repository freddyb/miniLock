// entry point for firefox add-on

var buttons = require('sdk/ui/button/action');
function handleClick() {
	var tabs = require('sdk/tabs');
	var index =  require('sdk/self').data.url('index.html') 
	tabs.open(index);
}
buttons.ActionButton({
	id: 'miniLock-link',
	label: 'Open miniLock',
	icon: {
		'16': './img/icon16.png',
		'32': './img/icon32.png',
		'48': './img/icon48.png',
		'128': './img/icon128.png',
		'256': './img/icon256.png',
		'512': './img/icon512.png'	
	},
	onClick: handleClick
});
