var checkCookie = setInterval(function () {
	if (_iqfb_hasCookie() && getCookie('_iqnomyvid')) {
		clearInterval(checkCookie);
		_iqfb_init();
	}
}, 100);

function _iqfb_hasCookie() {
	if ( typeof getCookie !== 'undefined') {	
		return true;
	}
}

function _iqfb_init() {
	if (!_iqfbvrs) {
		return false;
	}
	_iqfbvrs['iqurl'] = window.location;
	_iqfbvrs['tenant'] = _iqsTenant;
	_iqfbvrs['vid'] = getCookie('_iqnomyvid');
	_iqfbvrs['fid'] = getCookie('_iqnomyfid');
	
	(function() {
		var _iqprms = '', _iqfb, _iqfbs;
		for (var k in _iqfbvrs) {if (_iqprms != '') { _iqprms += '&'; } _iqprms += k + '=' + encodeURIComponent(_iqfbvrs[k]);}
		_iqfb = document.createElement('script'); _iqfb.type = 'text/javascript'; _iqfb.async = true;
		_iqfb.src = '//app.test.iqnomy.com/fbc?' + _iqprms;
		_iqfbs = document.getElementsByTagName('script')[0]; _iqfbs.parentNode.insertBefore(_iqfb, _iqfbs);
	})();
}

setTimeout(function() {
	clearInterval(checkCookie);	
}, _iqsImpress.timeout);