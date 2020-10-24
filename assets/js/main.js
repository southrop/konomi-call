/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {
		var $window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Touch?
		if (skel.vars.touch)
			$body.addClass('is-touch');

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Lang.
		var $lang = $('#lang');
		$lang.wrapInner('<div class="inner"></div>');
		$lang._locked = false;
		$lang._lock = function () {
			if ($lang._locked)
				return false;

			$lang._locked = true;
			window.setTimeout(function () {
				$lang._locked = false;
			}, 350);
			return true;
		};
		$lang._show = function () {
			if ($lang._lock())
				$body.addClass('is-lang-visible');
		};
		$lang._hide = function () {
			if ($lang._lock())
				$body.removeClass('is-lang-visible');
		};
		$lang._toggle = function () {
			if ($lang._lock())
				$body.toggleClass('is-lang-visible');
		};
		$lang
			.appendTo($body)
			.on('click', function (event) {
				event.stopPropagation();
			})
			.on('click', 'a', function (event) {
				var href = $(this).attr('href');
				event.preventDefault();
				event.stopPropagation();

				// Hide.
				$lang._hide();

				// Redirect.
				if (href == '#menu')
					return;

				window.setTimeout(function () {
					window.location.href = href;
				}, 350);
			})
			.append('<a class="close" href="#menu">Close</a>');

		// Menu.
		var $menu = $('#menu');
		$menu.wrapInner('<div class="inner"></div>');
		$menu._locked = false;
		$menu._lock = function () {
			if ($menu._locked)
				return false;

			$menu._locked = true;
			window.setTimeout(function () {
				$menu._locked = false;
			}, 350);
			return true;
		};
		$menu._show = function () {
			if ($menu._lock())
				$body.addClass('is-menu-visible');
		};
		$menu._hide = function () {
			if ($menu._lock())
				$body.removeClass('is-menu-visible');
		};
		$menu._toggle = function () {
			if ($menu._lock())
				$body.toggleClass('is-menu-visible');
		};
		$menu
			.appendTo($body)
			.on('click', function (event) {
				event.stopPropagation();
			})
			.on('click', 'a', function (event) {
				var href = $(this).attr('href');
				event.preventDefault();
				event.stopPropagation();

				// Hide.
				$menu._hide();

				// Redirect.
				if (href == '#menu')
					return;

				window.setTimeout(function () {
					window.location.href = href;
				}, 350);
			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#lang"]', function (event) {
				event.stopPropagation();
				event.preventDefault();

				// Toggle.
				$lang._toggle();
			})
			.on('click', 'a[href="#menu"]', function (event) {
				event.stopPropagation();
				event.preventDefault();

				// Toggle.
				$menu._toggle();
			})
			.on('click', function (event) {
				// Hide.
				$lang._hide();
				$menu._hide();
			})
			.on('keydown', function (event) {
				// Hide on escape.
				if (event.keyCode == 27) {
					$lang._hide();
					$menu._hide();
				}
			});
	});
})(jQuery);