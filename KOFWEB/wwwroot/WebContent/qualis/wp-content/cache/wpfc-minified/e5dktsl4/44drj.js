if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}).call(this);
(function ($){
new WOW().init();
$(function(){
$('.navbar-nav li a').bind('click', function(event){
var $anchor=$(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
$('.page-scroll a').bind('click', function(event){
var $anchor=$(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
});
if($('#parallax1').length||$('#parallax2').length){
$(window).stellar({
responsive:true,
scrollProperty: 'scroll',
parallaxElements: false,
horizontalScrolling: false,
horizontalOffset: 0,
verticalOffset: 0
});
}})(jQuery);
jQuery(document).ready(function (){
jQuery('.bxslider').bxSlider({
mode: 'horizontal',
slideMargin: 3,
auto:true
});
});
(function(t){var e={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:1000,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:1000,touchEnabled:!0,swipeThreshold:50,video:!1,useCSS:!0,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};t.fn.bxSlider=function(s){if(this.length!=0){if(this.length>1)return this.each(function(){t(this).bxSlider(s)}),this;var o={},r=this;e.el=this;var a=function(){o.settings=t.extend({},n,s),o.children=r.children(o.settings.slideSelector),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.animProp=o.settings.mode=="vertical"?"top":"left",o.usingCSS=o.settings.useCSS&&o.settings.mode!="fade"&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(t.style[e[i]]!==void 0)return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),o.settings.mode=="vertical"&&(o.settings.maxSlides=o.settings.minSlides),l()},l=function(){if(r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:o.settings.mode=="horizontal"?o.children.length*215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.children.css({"float":o.settings.mode=="horizontal"?"left":"none",listStyle:"none"}),o.children.width(c()),o.settings.mode=="horizontal"&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),o.settings.mode=="vertical"&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),o.settings.mode=="fade"&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:50,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&b(),o.settings.infiniteLoop&&o.settings.mode!="fade"&&!o.settings.ticker){var e=o.settings.mode=="vertical"?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),n=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(n)}o.active.last=o.settings.startSlide==h()-1,o.settings.video&&r.fitVids(),o.settings.ticker||(o.settings.pager&&x(),o.settings.controls&&m(),o.settings.auto&&o.settings.autoControls&&S(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),r.children().imagesLoaded(function(){o.loader.remove(),p(),o.settings.mode=="vertical"&&(o.settings.adaptiveHeight=!0),o.viewport.height(d()),o.settings.onSliderLoad(o.active.index),o.settings.auto&&o.settings.autoStart&&z(),o.settings.ticker&&q(),o.settings.pager&&A(o.settings.startSlide),o.settings.controls&&M(),o.settings.touchEnabled&&!o.settings.ticker&&D()})},d=function(){var e=0,n=t();if(o.settings.mode=="vertical"||o.settings.adaptiveHeight)if(o.carousel){var s=o.settings.moveSlides==1?o.active.index:o.active.index*u();for(n=o.children.eq(s),i=1;o.settings.maxSlides-1>=i;i++)n=s+i>=o.children.length?n.add(o.children.eq(i-1)):n.add(o.children.eq(s+i))}else n=o.children.eq(o.active.index);else n=o.children;return o.settings.mode=="vertical"?(n.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),e},c=function(){var t=o.settings.slideWidth,e=o.viewport.width();return o.settings.slideWidth==0?t=e:e>o.maxThreshold?t=(e-o.settings.slideMargin*(o.settings.maxSlides-1))/o.settings.maxSlides:o.minThreshold>e&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides),t},g=function(){var t=1;if(o.settings.mode=="horizontal")if(o.minThreshold>o.viewport.width())t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else o.settings.mode=="vertical"&&(t=o.settings.minSlides);return t},h=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/u();else{var e=0,i=0;while(o.children.length>e)++t,e=i+g(),i+=g()>=o.settings.moveSlides?o.settings.moveSlides:g()}else t=Math.ceil(o.children.length/g());return t},u=function(){return o.settings.moveSlides>0&&g()>=o.settings.moveSlides?o.settings.moveSlides:g()},p=function(){if(o.active.last){if(o.settings.mode=="horizontal"){var t=o.children.last(),e=t.position();v(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if(o.settings.mode=="vertical"){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();v(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*u()).position();o.active.index==h()-1&&(o.active.last=!0),e!=void 0&&(o.settings.mode=="horizontal"?v(-e.left,"reset",0):o.settings.mode=="vertical"&&v(-e.top,"reset",0))}},v=function(t,e,i,n){if(o.usingCSS){var s=o.settings.mode=="vertical"?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),e=="slide"?(r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),k()})):e=="reset"?r.css(o.animProp,s):e=="ticker"&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,s),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),v(n.resetValue,"reset",0),L()}))}else{var a={};a[o.animProp]=t,e=="slide"?r.animate(a,i,o.settings.easing,function(){k()}):e=="reset"?r.css(o.animProp,t):e=="ticker"&&r.animate(a,speed,"linear",function(){v(n.resetValue,"reset",0),L()})}},f=function(){var e="";pagerQty=h();for(var i=0;pagerQty>i;i++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(i),o.pagerEl.addClass("bx-custom-pager")):(n=i+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},x=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),f()),o.pagerEl.delegate("a","click",P)},m=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",w),o.controls.prev.bind("click",T),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},S=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.delegate(".bx-start","click",C),o.controls.autoEl.delegate(".bx-stop","click",E),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),y(o.settings.autoStart?"stop":"start")},b=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");e!=void 0&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},w=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},T=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},C=function(t){r.startAuto(),t.preventDefault()},E=function(t){r.stopAuto(),t.preventDefault()},P=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),n=parseInt(i.attr("data-slide-index"));n!=o.active.index&&r.goToSlide(n),e.preventDefault()},A=function(t){return o.settings.pagerType=="short"?(o.pagerEl.html(t+1+o.settings.pagerShortSeparator+o.children.length),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.find("a").eq(t).addClass("active"),void 0)},k=function(){if(o.settings.infiniteLoop){var t="";o.active.index==0?t=o.children.eq(0).position():o.active.index==h()-1&&o.carousel?t=o.children.eq((h()-1)*u()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),o.settings.mode=="horizontal"?v(-t.left,"reset",0):o.settings.mode=="vertical"&&v(-t.top,"reset",0)}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},y=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},M=function(){!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(o.active.index==0?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==h()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},z=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},q=function(){var e=0;if(o.settings.autoDirection=="next")r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e=o.settings.mode=="horizontal"?-i.left:-i.top}v(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+=o.settings.mode=="horizontal"?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,n=o.settings.mode=="horizontal"?"left":"top",s=i*(e-Math.abs(parseInt(r.css(n))));L(s)}),L()},L=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};o.settings.autoDirection=="next"?e=r.find(".bx-clone").first().position():i=o.children.first().position();var n=o.settings.mode=="horizontal"?-e.left:-e.top,s=o.settings.mode=="horizontal"?-i.left:-i.top,a={resetValue:s};v(n,"ticker",speed,a)},D=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",H)},H=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",I),o.viewport.bind("touchend",W)}},I=function(t){if(t.preventDefault(),o.settings.mode!="fade"){var e=t.originalEvent,i=0;if(o.settings.mode=="horizontal"){var n=e.changedTouches[0].pageX-o.touch.start.x;i=o.touch.originalPos.left+n}else{var n=e.changedTouches[0].pageY-o.touch.start.y;i=o.touch.originalPos.top+n}v(i,"reset",0)}},W=function(t){o.viewport.unbind("touchmove",I);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,o.settings.mode=="fade"){var n=Math.abs(o.touch.start.x-o.touch.end.x);n>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var n=0;o.settings.mode=="horizontal"?(n=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(n=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(o.active.index==0&&n>0||o.active.last&&0>n)?v(i,"reset",200):Math.abs(n)>=o.settings.swipeThreshold?(0>n?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):v(i,"reset",200)}o.viewport.unbind("touchend",W)};r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?h()-1:e>=h()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),i=="next"?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):i=="prev"&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=h()-1,o.settings.pager&&A(o.active.index),o.settings.controls&&M(),o.settings.mode=="fade")o.settings.adaptiveHeight&&o.viewport.height()!=d()&&o.viewport.animate({height:d()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",51).fadeIn(o.settings.speed,function(){t(this).css("zIndex",50),k()});else{o.settings.adaptiveHeight&&o.viewport.height()!=d()&&o.viewport.animate({height:d()},o.settings.adaptiveHeightSpeed);var n=0,s={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if(o.settings.mode=="horizontal"){var a=o.children.eq(o.children.length-1);s=a.position(),n=o.viewport.width()-a.width()}else{var l=o.children.length-o.settings.minSlides;s=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&i=="prev"){var c=o.settings.moveSlides==1?o.settings.maxSlides-u():(h()-1)*u()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(c);s=a.position()}else if(i=="next"&&o.active.index==0)s=r.find(".bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var g=e*u();s=o.children.eq(g).position()}var p=o.settings.mode=="horizontal"?-(s.left-n):-s.top;v(p,"slide",o.settings.speed)}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=o.active.index+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||o.active.index!=0){var t=o.active.index-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){o.settings.autoDirection=="next"?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&t!=1&&y("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&t!=1&&y("start"))},r.getCurrentSlide=function(){return o.active.index},r.getSlideCount=function(){return o.children.length};var N=t(window).width(),B=t(window).height();return t(window).resize(function(){var e=t(window).width(),i=t(window).height();(N!=e||B!=i)&&(N=e,B=i,o.children.add(r.find(".bx-clone")).width(c()),o.viewport.css("height",d()),o.active.last&&(o.active.index=h()-1),o.active.index>=h()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(f(),A(o.active.index)),o.settings.ticker||p())}),a(),this}}})(jQuery),function(t,e){var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(n){function s(){var e=t(g),i=t(h);a&&(h.length?a.reject(d,e,i):a.resolve(d)),t.isFunction(n)&&n.call(r,d,e,i)}function o(e,n){e.src===i||-1!==t.inArray(e,c)||(c.push(e),n?h.push(e):g.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),l&&a.notifyWith(t(e),[n,d,t(g),t(h)]),d.length===c.length&&(setTimeout(s),d.unbind(".imagesLoaded")))}var r=this,a=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(a.notify),d=r.find("img").add(r.filter("img")),c=[],g=[],h=[];return t.isPlainObject(n)&&t.each(n,function(t,e){"callback"===t?n=e:a&&a[t](e)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(t){o(t.target,"error"===t.type)}).each(function(n,s){var r=s.src,a=t.data(s,"imagesLoaded");a&&a.src===r?o(s,a.isBroken):s.complete&&s.naturalWidth!==e?o(s,0===s.naturalWidth||0===s.naturalHeight):(s.readyState||s.complete)&&(s.src=i,s.src=r)}):s(),a?a.promise(r):r}}(jQuery);
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(B 3i.3E!=="9"){3i.3E=9(e){9 t(){}t.5v=e;q 5c t}}(9(e,t,n,r){b i={1J:9(t,n){b r=d;r.$k=e(n);r.6=e.3K({},e.3A.2c.6,r.$k.w(),t);r.29=t;r.3U()},3U:9(){b t=d;7(B t.6.2M==="9"){t.6.2M.P(d,[t.$k])}7(B t.6.2I==="2F"){b n=t.6.2I;9 r(e){7(B t.6.3F==="9"){t.6.3F.P(d,[e])}m{b n="";1C(b r 2f e["h"]){n+=e["h"][r]["1K"]}t.$k.2h(n)}t.2Y()}e.5G(n,r)}m{t.2Y()}},2Y:9(e){b t=d;t.$k.w("h-4p",t.$k.2s("2t")).w("h-4K",t.$k.2s("J"));t.$k.A({2z:0});t.2A=t.6.v;t.4L();t.5R=0;t.1M;t.1P()},1P:9(){b e=d;7(e.$k.1S().S===0){q c}e.1O();e.3H();e.$X=e.$k.1S();e.G=e.$X.S;e.4M();e.$I=e.$k.16(".h-1K");e.$L=e.$k.16(".h-1h");e.2H="Y";e.15=0;e.1W=[0];e.p=0;e.4I();e.4G()},4G:9(){b e=d;e.2V();e.31();e.4D();e.35();e.4C();e.4A();e.2x();e.4z();7(e.6.2w!==c){e.4w(e.6.2w)}7(e.6.Q===j){e.6.Q=5i}e.1e();e.$k.16(".h-1h").A("4v","4r");7(!e.$k.2p(":33")){e.34()}m{e.$k.A("2z",1)}e.56=c;e.2o();7(B e.6.39==="9"){e.6.39.P(d,[e.$k])}},2o:9(){b e=d;7(e.6.1I===j){e.1I()}7(e.6.1A===j){e.1A()}e.4n();7(B e.6.3n==="9"){e.6.3n.P(d,[e.$k])}},3o:9(){b e=d;7(B e.6.3p==="9"){e.6.3p.P(d,[e.$k])}e.34();e.2V();e.31();e.4m();e.35();e.2o();7(B e.6.3t==="9"){e.6.3t.P(d,[e.$k])}},4i:9(e){b t=d;19(9(){t.3o()},0)},34:9(){b e=d;7(e.$k.2p(":33")===c){e.$k.A({2z:0});18(e.1r);18(e.1M)}m{q c}e.1M=4g(9(){7(e.$k.2p(":33")){e.4i();e.$k.4f({2z:1},2J);18(e.1M)}},5O)},4M:9(){b e=d;e.$X.5N(\'<M J="h-1h">\').3G(\'<M J="h-1K"></M>\');e.$k.16(".h-1h").3G(\'<M J="h-1h-4d">\');e.1U=e.$k.16(".h-1h-4d");e.$k.A("4v","4r")},1O:9(){b e=d;b t=e.$k.1V(e.6.1O);b n=e.$k.1V(e.6.28);7(!t){e.$k.K(e.6.1O)}7(!n){e.$k.K(e.6.28)}},2V:9(){b t=d;7(t.6.2Z===c){q c}7(t.6.4b===j){t.6.v=t.2A=1;t.6.17=c;t.6.1q=c;t.6.21=c;t.6.24=c;t.6.25=c;t.6.26=c;q c}b n=e(t.6.4a).1m();7(n>(t.6.1q[0]||t.2A)){t.6.v=t.2A}7(B t.6.17!=="3b"&&t.6.17!==c){t.6.17.5x(9(e,t){q e[0]-t[0]});1C(b r 2f t.6.17){7(B t.6.17[r]!=="3b"&&t.6.17[r][0]<=n){t.6.v=t.6.17[r][1]}}}m{7(n<=t.6.1q[0]&&t.6.1q!==c){t.6.v=t.6.1q[1]}7(n<=t.6.21[0]&&t.6.21!==c){t.6.v=t.6.21[1]}7(n<=t.6.24[0]&&t.6.24!==c){t.6.v=t.6.24[1]}7(n<=t.6.25[0]&&t.6.25!==c){t.6.v=t.6.25[1]}7(n<=t.6.26[0]&&t.6.26!==c){t.6.v=t.6.26[1]}}7(t.6.v>t.G&&t.6.49===j){t.6.v=t.G}},4C:9(){b n=d,r;7(n.6.2Z!==j){q c}b i=e(t).1m();n.3f=9(){7(e(t).1m()!==i){7(n.6.Q!==c){18(n.1r)}5o(r);r=19(9(){i=e(t).1m();n.3o()},n.6.48)}};e(t).47(n.3f)},4m:9(){b e=d;e.2j(e.p);7(e.6.Q!==c){e.3l()}},46:9(){b t=d;b n=0;b r=t.G-t.6.v;t.$I.2i(9(i){b s=e(d);s.A({1m:t.N}).w("h-1K",3q(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-1L",n)})},45:9(){b e=d;b t=0;b t=e.$I.S*e.N;e.$L.A({1m:t*2,V:0});e.46()},31:9(){b e=d;e.44();e.45();e.43();e.3x()},44:9(){b e=d;e.N=1N.5a(e.$k.1m()/e.6.v)},3x:9(){b e=d;b t=(e.G*e.N-e.6.v*e.N)*-1;7(e.6.v>e.G){e.C=0;t=0;e.3D=0}m{e.C=e.G-e.6.v;e.3D=t}q t},42:9(){q 0},43:9(){b t=d;t.H=[0];t.2C=[];b n=0;b r=0;1C(b i=0;i<t.G;i++){r+=t.N;t.H.2D(-r);7(t.6.14===j){b s=e(t.$I[i]);b o=s.w("h-1L");7(o!==n){t.2C[n]=t.H[i];n=o}}}},4D:9(){b t=d;7(t.6.2b===j||t.6.1s===j){t.D=e(\'<M J="h-4R"/>\').4Q("4P",!t.F.13).5E(t.$k)}7(t.6.1s===j){t.3Z()}7(t.6.2b===j){t.3Y()}},3Y:9(){b t=d;b n=e(\'<M J="h-5h"/>\');t.D.1k(n);t.1w=e("<M/>",{"J":"h-1l",2h:t.6.2T[0]||""});t.1y=e("<M/>",{"J":"h-Y",2h:t.6.2T[1]||""});n.1k(t.1w).1k(t.1y);n.z("2W.D 1Z.D",\'M[J^="h"]\',9(e){e.1n()});n.z("2a.D 2n.D",\'M[J^="h"]\',9(n){n.1n();7(e(d).1V("h-Y")){t.Y()}m{t.1l()}})},3Z:9(){b t=d;t.1o=e(\'<M J="h-1s"/>\');t.D.1k(t.1o);t.1o.z("2a.D 2n.D",".h-1p",9(n){n.1n();7(3q(e(d).w("h-1p"))!==t.p){t.1i(3q(e(d).w("h-1p")),j)}})},3T:9(){b t=d;7(t.6.1s===c){q c}t.1o.2h("");b n=0;b r=t.G-t.G%t.6.v;1C(b i=0;i<t.G;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.G-t.6.v}b o=e("<M/>",{"J":"h-1p"});b u=e("<3Q></3Q>",{54:t.6.38===j?n:"","J":t.6.38===j?"h-5l":""});o.1k(u);o.w("h-1p",r===i?s:i);o.w("h-1L",n);t.1o.1k(o)}}t.3a()},3a:9(){b t=d;7(t.6.1s===c){q c}t.1o.16(".h-1p").2i(9(n,r){7(e(d).w("h-1L")===e(t.$I[t.p]).w("h-1L")){t.1o.16(".h-1p").Z("2d");e(d).K("2d")}})},3d:9(){b e=d;7(e.6.2b===c){q c}7(e.6.2e===c){7(e.p===0&&e.C===0){e.1w.K("1b");e.1y.K("1b")}m 7(e.p===0&&e.C!==0){e.1w.K("1b");e.1y.Z("1b")}m 7(e.p===e.C){e.1w.Z("1b");e.1y.K("1b")}m 7(e.p!==0&&e.p!==e.C){e.1w.Z("1b");e.1y.Z("1b")}}},35:9(){b e=d;e.3T();e.3d();7(e.D){7(e.6.v>=e.G){e.D.3N()}m{e.D.3L()}}},5g:9(){b e=d;7(e.D){e.D.3j()}},Y:9(e){b t=d;7(t.1G){q c}t.p+=t.6.14===j?t.6.v:1;7(t.p>t.C+(t.6.14==j?t.6.v-1:0)){7(t.6.2e===j){t.p=0;e="2k"}m{t.p=t.C;q c}}t.1i(t.p,e)},1l:9(e){b t=d;7(t.1G){q c}7(t.6.14===j&&t.p>0&&t.p<t.6.v){t.p=0}m{t.p-=t.6.14===j?t.6.v:1}7(t.p<0){7(t.6.2e===j){t.p=t.C;e="2k"}m{t.p=0;q c}}t.1i(t.p,e)},1i:9(e,t,n){b r=d;7(r.1G){q c}7(B r.6.1F==="9"){r.6.1F.P(d,[r.$k])}7(e>=r.C){e=r.C}m 7(e<=0){e=0}r.p=r.h.p=e;7(r.6.2w!==c&&n!=="4e"&&r.6.v===1&&r.F.1u===j){r.1B(0);7(r.F.1u===j){r.1H(r.H[e])}m{r.1x(r.H[e],1)}r.2q();r.4k();q c}b i=r.H[e];7(r.F.1u===j){r.1T=c;7(t===j){r.1B("1D");19(9(){r.1T=j},r.6.1D)}m 7(t==="2k"){r.1B(r.6.2u);19(9(){r.1T=j},r.6.2u)}m{r.1B("1j");19(9(){r.1T=j},r.6.1j)}r.1H(i)}m{7(t===j){r.1x(i,r.6.1D)}m 7(t==="2k"){r.1x(i,r.6.2u)}m{r.1x(i,r.6.1j)}}r.2q()},2j:9(e){b t=d;7(B t.6.1F==="9"){t.6.1F.P(d,[t.$k])}7(e>=t.C||e===-1){e=t.C}m 7(e<=0){e=0}t.1B(0);7(t.F.1u===j){t.1H(t.H[e])}m{t.1x(t.H[e],1)}t.p=t.h.p=e;t.2q()},2q:9(){b e=d;e.1W.2D(e.p);e.15=e.h.15=e.1W[e.1W.S-2];e.1W.55(0);7(e.15!==e.p){e.3a();e.3d();e.2o();7(e.6.Q!==c){e.3l()}}7(B e.6.3z==="9"&&e.15!==e.p){e.6.3z.P(d,[e.$k])}},W:9(){b e=d;e.3k="W";18(e.1r)},3l:9(){b e=d;7(e.3k!=="W"){e.1e()}},1e:9(){b e=d;e.3k="1e";7(e.6.Q===c){q c}18(e.1r);e.1r=4g(9(){e.Y(j)},e.6.Q)},1B:9(e){b t=d;7(e==="1j"){t.$L.A(t.2y(t.6.1j))}m 7(e==="1D"){t.$L.A(t.2y(t.6.1D))}m 7(B e!=="2F"){t.$L.A(t.2y(e))}},2y:9(e){b t=d;q{"-1R-1a":"2B "+e+"1z 2r","-27-1a":"2B "+e+"1z 2r","-o-1a":"2B "+e+"1z 2r",1a:"2B "+e+"1z 2r"}},3I:9(){q{"-1R-1a":"","-27-1a":"","-o-1a":"",1a:""}},3J:9(e){q{"-1R-O":"1g("+e+"T, E, E)","-27-O":"1g("+e+"T, E, E)","-o-O":"1g("+e+"T, E, E)","-1z-O":"1g("+e+"T, E, E)",O:"1g("+e+"T, E,E)"}},1H:9(e){b t=d;t.$L.A(t.3J(e))},3M:9(e){b t=d;t.$L.A({V:e})},1x:9(e,t){b n=d;n.2g=c;n.$L.W(j,j).4f({V:e},{59:t||n.6.1j,3O:9(){n.2g=j}})},4L:9(){b e=d;b r="1g(E, E, E)",i=n.5f("M");i.2t.3P="  -27-O:"+r+"; -1z-O:"+r+"; -o-O:"+r+"; -1R-O:"+r+"; O:"+r;b s=/1g\\(E, E, E\\)/g,o=i.2t.3P.5k(s),u=o!==1d&&o.S===1;b a="5z"2f t||5C.4U;e.F={1u:u,13:a}},4A:9(){b e=d;7(e.6.22!==c||e.6.23!==c){e.3R();e.3S()}},3H:9(){b e=d;b t=["s","e","x"];e.12={};7(e.6.22===j&&e.6.23===j){t=["2W.h 1Z.h","2P.h 3V.h","2a.h 3W.h 2n.h"]}m 7(e.6.22===c&&e.6.23===j){t=["2W.h","2P.h","2a.h 3W.h"]}m 7(e.6.22===j&&e.6.23===c){t=["1Z.h","3V.h","2n.h"]}e.12["3X"]=t[0];e.12["2O"]=t[1];e.12["2N"]=t[2]},3S:9(){b t=d;t.$k.z("5A.h",9(e){e.1n()});t.$k.z("1Z.40",9(t){q e(t.1f).2p("5F, 5H, 5Q, 5S")})},3R:9(){9 o(e){7(e.2L){q{x:e.2L[0].2K,y:e.2L[0].41}}m{7(e.2K!==r){q{x:e.2K,y:e.41}}m{q{x:e.52,y:e.53}}}}9 u(t){7(t==="z"){e(n).z(i.12["2O"],f);e(n).z(i.12["2N"],l)}m 7(t==="R"){e(n).R(i.12["2O"]);e(n).R(i.12["2N"])}}9 a(n){b n=n.3B||n||t.3w;7(n.5d===3){q c}7(i.G<=i.6.v){q}7(i.2g===c&&!i.6.3v){q c}7(i.1T===c&&!i.6.3v){q c}7(i.6.Q!==c){18(i.1r)}7(i.F.13!==j&&!i.$L.1V("3s")){i.$L.K("3s")}i.11=0;i.U=0;e(d).A(i.3I());b r=e(d).2l();s.3g=r.V;s.3e=o(n).x-r.V;s.3c=o(n).y-r.5y;u("z");s.2m=c;s.30=n.1f||n.4c}9 f(r){b r=r.3B||r||t.3w;i.11=o(r).x-s.3e;i.2S=o(r).y-s.3c;i.U=i.11-s.3g;7(B i.6.2R==="9"&&s.2Q!==j&&i.U!==0){s.2Q=j;i.6.2R.P(i,[i.$k])}7(i.U>8||i.U<-8&&i.F.13===j){r.1n?r.1n():r.5M=c;s.2m=j}7((i.2S>10||i.2S<-10)&&s.2m===c){e(n).R("2P.h")}b u=9(){q i.U/5};b a=9(){q i.3D+i.U/5};i.11=1N.3x(1N.42(i.11,u()),a());7(i.F.1u===j){i.1H(i.11)}m{i.3M(i.11)}}9 l(n){b n=n.3B||n||t.3w;n.1f=n.1f||n.4c;s.2Q=c;7(i.F.13!==j){i.$L.Z("3s")}7(i.U<0){i.1t=i.h.1t="V"}m{i.1t=i.h.1t="2G"}7(i.U!==0){b r=i.4h();i.1i(r,c,"4e");7(s.30===n.1f&&i.F.13!==j){e(n.1f).z("3u.4j",9(t){t.4S();t.4T();t.1n();e(n.1f).R("3u.4j")});b o=e.4O(n.1f,"4V")["3u"];b a=o.4W();o.4X(0,0,a)}}u("R")}b i=d;b s={3e:0,3c:0,4Y:0,3g:0,2l:1d,4Z:1d,50:1d,2m:1d,51:1d,30:1d};i.2g=j;i.$k.z(i.12["3X"],".h-1h",a)},4h:9(){b e=d,t;t=e.4l();7(t>e.C){e.p=e.C;t=e.C}m 7(e.11>=0){t=0;e.p=0}q t},4l:9(){b t=d,n=t.6.14===j?t.2C:t.H,r=t.11,i=1d;e.2i(n,9(s,o){7(r-t.N/20>n[s+1]&&r-t.N/20<o&&t.3m()==="V"){i=o;7(t.6.14===j){t.p=e.4o(i,t.H)}m{t.p=s}}m 7(r+t.N/20<o&&r+t.N/20>(n[s+1]||n[s]-t.N)&&t.3m()==="2G"){7(t.6.14===j){i=n[s+1]||n[n.S-1];t.p=e.4o(i,t.H)}m{i=n[s+1];t.p=s+1}}});q t.p},3m:9(){b e=d,t;7(e.U<0){t="2G";e.2H="Y"}m{t="V";e.2H="1l"}q t},4I:9(){b e=d;e.$k.z("h.Y",9(){e.Y()});e.$k.z("h.1l",9(){e.1l()});e.$k.z("h.1e",9(t,n){e.6.Q=n;e.1e();e.36="1e"});e.$k.z("h.W",9(){e.W();e.36="W"});e.$k.z("h.1i",9(t,n){e.1i(n)});e.$k.z("h.2j",9(t,n){e.2j(n)})},2x:9(){b e=d;7(e.6.2x===j&&e.F.13!==j&&e.6.Q!==c){e.$k.z("57",9(){e.W()});e.$k.z("58",9(){7(e.36!=="W"){e.1e()}})}},1I:9(){b t=d;7(t.6.1I===c){q c}1C(b n=0;n<t.G;n++){b i=e(t.$I[n]);7(i.w("h-1c")==="1c"){4q}b s=i.w("h-1K"),o=i.16(".5b"),u;7(B o.w("1X")!=="2F"){i.w("h-1c","1c");4q}7(i.w("h-1c")===r){o.3N();i.K("4s").w("h-1c","5e")}7(t.6.4t===j){u=s>=t.p}m{u=j}7(u&&s<t.p+t.6.v&&o.S){t.4u(i,o)}}},4u:9(e,t){9 s(){r+=1;7(n.2X(t.2U(0))||i===j){o()}m 7(r<=2v){19(s,2v)}m{o()}}9 o(){e.w("h-1c","1c").Z("4s");t.5j("w-1X");n.6.4x==="4y"?t.5m(5n):t.3L();7(B n.6.3r==="9"){n.6.3r.P(d,[n.$k])}}b n=d,r=0;7(t.5p("5q")==="5r"){t.A("5s-5t","5u("+t.w("1X")+")");b i=j}m{t[0].1X=t.w("1X")}s()},1A:9(){9 s(){i+=1;7(t.2X(n.2U(0))){o()}m 7(i<=2v){19(s,2v)}m{t.1U.A("3h","")}}9 o(){b n=e(t.$I[t.p]).3h();t.1U.A("3h",n+"T");7(!t.1U.1V("1A")){19(9(){t.1U.K("1A")},0)}}b t=d;b n=e(t.$I[t.p]).16("5w");7(n.2U(0)!==r){b i=0;s()}m{o()}},2X:9(e){7(!e.3O){q c}7(B e.4B!=="3b"&&e.4B==0){q c}q j},4n:9(){b t=d;7(t.6.37===j){t.$I.Z("2d")}t.1v=[];1C(b n=t.p;n<t.p+t.6.v;n++){t.1v.2D(n);7(t.6.37===j){e(t.$I[n]).K("2d")}}t.h.1v=t.1v},4w:9(e){b t=d;t.4E="h-"+e+"-5B";t.4F="h-"+e+"-2f"},4k:9(){9 u(e,t){q{2l:"5D",V:e+"T"}}b e=d;e.1G=j;b t=e.4E,n=e.4F,r=e.$I.1E(e.p),i=e.$I.1E(e.15),s=1N.4H(e.H[e.p])+e.H[e.15],o=1N.4H(e.H[e.p])+e.N/2;e.$L.K("h-1Y").A({"-1R-O-1Y":o+"T","-27-4J-1Y":o+"T","4J-1Y":o+"T"});b a="5I 5J 5K 5L";i.A(u(s,10)).K(t).z(a,9(){e.3C=j;i.R(a);e.32(i,t)});r.K(n).z(a,9(){e.2E=j;r.R(a);e.32(r,n)})},32:9(e,t){b n=d;e.A({2l:"",V:""}).Z(t);7(n.3C&&n.2E){n.$L.Z("h-1Y");n.3C=c;n.2E=c;n.1G=c}},4z:9(){b e=d;e.h={29:e.29,5P:e.$k,X:e.$X,I:e.$I,p:e.p,15:e.15,1v:e.1v,13:e.F.13,F:e.F,1t:e.1t}},4N:9(){b r=d;r.$k.R(".h h 1Z.40");e(n).R(".h h");e(t).R("47",r.3f)},1Q:9(){b e=d;7(e.$k.1S().S!==0){e.$L.3y();e.$X.3y().3y();7(e.D){e.D.3j()}}e.4N();e.$k.2s("2t",e.$k.w("h-4p")||"").2s("J",e.$k.w("h-4K"))},5T:9(){b e=d;e.W();18(e.1M);e.1Q();e.$k.5U()},5V:9(t){b n=d;b r=e.3K({},n.29,t);n.1Q();n.1J(r,n.$k)},5W:9(e,t){b n=d,i;7(!e){q c}7(n.$k.1S().S===0){n.$k.1k(e);n.1P();q c}n.1Q();7(t===r||t===-1){i=-1}m{i=t}7(i>=n.$X.S||i===-1){n.$X.1E(-1).5X(e)}m{n.$X.1E(i).5Y(e)}n.1P()},5Z:9(e){b t=d,n;7(t.$k.1S().S===0){q c}7(e===r||e===-1){n=-1}m{n=e}t.1Q();t.$X.1E(n).3j();t.1P()}};e.3A.2c=9(t){q d.2i(9(){7(e(d).w("h-1J")===j){q c}e(d).w("h-1J",j);b n=3i.3E(i);n.1J(t,d);e.w(d,"2c",n)})};e.3A.2c.6={v:5,17:c,1q:[60,4],21:[61,3],24:[62,2],25:c,26:[63,1],4b:c,49:c,1j:2J,1D:64,2u:65,Q:c,2x:c,2b:c,2T:["1l","Y"],2e:j,14:c,1s:j,38:c,2Z:j,48:2J,4a:t,1O:"h-66",28:"h-28",1I:c,4t:j,4x:"4y",1A:c,2I:c,3F:c,3v:j,22:j,23:j,37:c,2w:c,3p:c,3t:c,2M:c,39:c,1F:c,3z:c,3n:c,2R:c,3r:c}})(67,68,69)',62,382,'||||||options|if||function||var|false|this||||owl||true|elem||else|||currentItem|return|||||items|data|||on|css|typeof|maximumItem|owlControls|0px|browser|itemsAmount|positionsInArray|owlItems|class|addClass|owlWrapper|div|itemWidth|transform|apply|autoPlay|off|length|px|newRelativeX|left|stop|userItems|next|removeClass||newPosX|ev_types|isTouch|scrollPerPage|prevItem|find|itemsCustom|clearInterval|setTimeout|transition|disabled|loaded|null|play|target|translate3d|wrapper|goTo|slideSpeed|append|prev|width|preventDefault|paginationWrapper|page|itemsDesktop|autoPlayInterval|pagination|dragDirection|support3d|visibleItems|buttonPrev|css2slide|buttonNext|ms|autoHeight|swapSpeed|for|paginationSpeed|eq|beforeMove|isTransition|transition3d|lazyLoad|init|item|roundPages|checkVisible|Math|baseClass|setVars|unWrap|webkit|children|isCss3Finish|wrapperOuter|hasClass|prevArr|src|origin|mousedown||itemsDesktopSmall|mouseDrag|touchDrag|itemsTablet|itemsTabletSmall|itemsMobile|moz|theme|userOptions|touchend|navigation|owlCarousel|active|rewindNav|in|isCssFinish|html|each|jumpTo|rewind|position|sliding|mouseup|eachMoveUpdate|is|afterGo|ease|attr|style|rewindSpeed|100|transitionStyle|stopOnHover|addCssSpeed|opacity|orignalItems|all|pagesInArray|push|endCurrent|string|right|playDirection|jsonPath|200|pageX|touches|beforeInit|end|move|touchmove|dragging|startDragging|newPosY|navigationText|get|updateItems|touchstart|completeImg|logIn|responsive|targetElement|calculateAll|clearTransStyle|visible|watchVisibility|updateControls|hoverStatus|addClassActive|paginationNumbers|afterInit|checkPagination|undefined|offsetY|checkNavigation|offsetX|resizer|relativePos|height|Object|remove|apStatus|checkAp|moveDirection|afterAction|updateVars|beforeUpdate|Number|afterLazyLoad|grabbing|afterUpdate|click|dragBeforeAnimFinish|event|max|unwrap|afterMove|fn|originalEvent|endPrev|maximumPixels|create|jsonSuccess|wrap|eventTypes|removeTransition|doTranslate|extend|show|css2move|hide|complete|cssText|span|gestures|disabledEvents|updatePagination|loadContent|mousemove|touchcancel|start|buildButtons|buildPagination|disableTextSelect|pageY|min|loops|calculateWidth|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|srcElement|outer|drag|animate|setInterval|getNewPosition|reload|disable|singleItemTransition|closestItem|updatePosition|onVisibleItems|inArray|originalStyles|continue|block|loading|lazyFollow|lazyPreload|display|transitionTypes|lazyEffect|fade|owlStatus|moveEvents|naturalWidth|response|buildControls|outClass|inClass|onStartup|abs|customEvents|perspective|originalClasses|checkBrowser|wrapItems|clearEvents|_data|clickable|toggleClass|controls|stopImmediatePropagation|stopPropagation|msMaxTouchPoints|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|text|shift|onstartup|mouseover|mouseout|duration|round|lazyOwl|new|which|checked|createElement|destroyControls|buttons|5e3|removeAttr|match|numbers|fadeIn|400|clearTimeout|prop|tagName|DIV|background|image|url|prototype|img|sort|top|ontouchstart|dragstart|out|navigator|relative|appendTo|input|getJSON|textarea|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|returnValue|wrapAll|500|baseElement|select|wrapperWidth|option|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}));
!function(s){"use strict";s.fn.mobileMenu=function(e){var i={MenuWidth:250,SlideSpeed:300,WindowsMaxWidth:767,PagePush:!0,FromLeft:!0,Overlay:!0,CollapseMenu:!0,ClassName:"mobile-menu"};return this.each(function(){function n(){1==d.FromLeft?c.css("left",-d.MenuWidth):c.css("right",-d.MenuWidth),c.find("ul:first").addClass(d.ClassName),g=d.ClassName,c.css("width",d.MenuWidth),c.find("."+g+" ul").css("display","none");var e='<span class="expand icon-plus"></span>';c.find("li ul").parent().prepend(e),s("."+g).append(''),s("."+g+" li:has(span)").each(function(){s(this).find("a:first").css("padding-right",55)})}function a(){var e=0,i=s(document).height();return c.find("."+g+" > li").each(function(){var i=s(this).height();e+=i}),i>=e&&(e=i),e}function l(e){C=s("."+g+" span.expand").height(),1===e&&c.find("."+g+" > li:has(span)").each(function(){var e=s(this).height(),i=(e-C)/2;s(this).find("span").css({"padding-bottom":i,"padding-top":i})}),2===e&&c.find("."+g+" > li > ul > li:has(span)").each(function(){var e=s(this).height(),i=(e-C)/2;s(this).find("span").css({"padding-bottom":i,"padding-top":i})})}function t(){u.addClass("mmPushBody"),1==d.Overlay?h.addClass("overlay"):h.addClass("overlay").css("opacity",0),c.css({display:"block",overflow:"hidden"}),1==d.FromLeft?(1==d.PagePush&&p.animate({left:d.MenuWidth},d.SlideSpeed,"linear"),c.animate({left:"0"},d.SlideSpeed,"linear",function(){c.css("height",a()),r=!0})):(1==d.PagePush&&p.animate({left:-d.MenuWidth},d.SlideSpeed,"linear"),c.animate({right:"0"},d.SlideSpeed,"linear",function(){c.css("height",a()),r=!0})),m||(l(1),m=!0)}function o(){1==d.FromLeft?(1==d.PagePush&&p.animate({left:"0"},d.SlideSpeed,"linear"),c.animate({left:-d.MenuWidth},d.SlideSpeed,"linear",function(){u.removeClass("mmPushBody"),h.css("height",0).removeClass("overlay"),c.css("display","none"),r=!1})):(1==d.PagePush&&p.animate({left:"0"},d.SlideSpeed,"linear"),c.animate({right:-d.MenuWidth},d.SlideSpeed,"linear",function(){u.removeClass("mmPushBody"),h.css("height",0).removeClass("overlay"),c.css("display","none"),r=!1}))}var d=s.extend({},i,e),c=s(this),h=s("#overlay"),u=s("body"),p=s("#page"),r=!1,m=!1,f=!1,C=0,g="";n(),s(".mm-toggle").click(function(){c.css("height",s(document).height()),1==d.Overlay&&h.css("height",s(document).height()),r?o():t()}),s(window).resize(function(){s(window).width()>=d.WindowsMaxWidth&&r&&c.css("left")!=-d.MenuWidth&&o()}),s("."+g+" > li > span.expand").click(function(){if(1==d.CollapseMenu){var e=s("."+g+" li span");e.hasClass("open")&&"none"===s(this).next().next().css("display")&&(s("."+g+" li ul").slideUp(),e.hasClass("open")?e.removeClass("icon-minus").addClass("icon-plus"):e.removeClass("icon-plus").addClass("icon-minus"),e.removeClass("open"))}s(this).nextAll("."+g+" ul").slideToggle(function(){1==d.CollapseMenu?s(this).promise().done(function(){c.css("height",a())}):c.css("height",a())}),s(this).hasClass("icon-plus")?s(this).removeClass("icon-plus").addClass("icon-minus"):s(this).removeClass("icon-minus").addClass("icon-plus"),s(this).toggleClass("open"),f||(l(2),f=!0)}),s("."+g+" > li > ul > li > span.expand").click(function(){if(1==d.CollapseMenu){var e=s("."+g+" li ul li span");e.hasClass("open")&&"none"===s(this).next().next().css("display")&&(s("."+g+" li ul ul").slideUp(),e.hasClass("open")?e.removeClass("icon-minus").addClass("icon-plus"):e.removeClass("icon-plus").addClass("icon-minus"),e.removeClass("open"))}s(this).nextAll("."+g+" ul ul").slideToggle(function(){1==d.CollapseMenu?s(this).promise().done(function(){c.css("height",a())}):c.css("height",a())}),s(this).hasClass("icon-plus")?s(this).removeClass("icon-plus").addClass("icon-minus"):s(this).removeClass("icon-minus").addClass("icon-plus"),s(this).toggleClass("open")}),s("."+g+" li a").click(function(){s("."+g+" li a").removeClass("active"),s(this).addClass("active"),o()}),h.click(function(){o()}),s("."+g+" li a.active").parent().children(".expand").removeClass("icon-plus").addClass("icon-minus open"),s("."+g+" li a.active").parent().children("ul").css("display","block")})}}(jQuery);
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}([0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}([0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});
(function ($){
"use strict";
$(document).ready(function (){
init_brandslider();
init_testimonials();
init_categorydescslider();
init_mobilemenu();
init_slideEffectAjax();
init_subdropdown();
});
$(window).scroll(function(){
$(this).scrollTop() > 150 ? $("#header").addClass("sticky-header"):$("#header").removeClass("sticky-header")
$(this).scrollTop() > 250 ? $("#header").addClass("sticky-header-bar"):$("#header").removeClass("sticky-header-bar")
});
$(window).load(function(){
$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
function init_brandslider(){
$("#brand-slider .slider-items").owlCarousel({
autoplay:true,
items:5,
itemsDesktop:[1024,5],
itemsDesktopSmall:[900,4],
itemsTablet: [600,2],
itemsMobile:[320,1],
navigation:false,
navigationText:["<a class=\"flex-prev\"></a>","<a class=\"flex-next\"></a>"],
slideSpeed:500,
pagination :true
});
}
function init_testimonials(){
$("#testimonials .slider-items").owlCarousel({
autoPlay:true,
autoplayTimeout:3000,
items:1,
itemsDesktop:[1024,1],
itemsDesktopSmall:[900,1],
itemsTablet: [600,1],
itemsMobile:[320,1],
navigation:true,
navigationText:["<a class=\"flex-prev\"></a>","<a class=\"flex-next\"></a>"],
slideSpeed:500,
pagination :false
});
}
function init_categorydescslider(){
$("#category-desc-slider .slider-items").owlCarousel({
autoPlay: true,
items: 1,
itemsDesktop: [1024, 1],
itemsDesktopSmall: [900, 1],
itemsTablet: [600, 1],
itemsMobile: [320, 1],
navigation: true,
navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
slideSpeed: 500,
pagination: false
});
}
function init_mobilemenu(){
$("#mobile-menu").mobileMenu({
MenuWidth: 250,
SlideSpeed: 300,
WindowsMaxWidth: 767,
PagePush: !0,
FromLeft: !0,
Overlay: !0,
CollapseMenu: !0,
ClassName: "mobile-menu"
});
$("p.stock.in-stock").detach().insertBefore("p.price");
$("p.stock.out-of-stock").detach().insertBefore("p.price");
$("nav.woocommerce-pagination ul.page-numbers").addClass("pagination");
$("a.compare.button").detach().insertAfter(".tinv-wraper.tinv-wishlist");
$(".sidebar .widget_product_categories ul.product-categories").wrap("<div class='box-content box-category'></div>");
$(".sidebar .widget_product_categories ul.product-categories > li.cat-parent").append('<span class="subDropdown plus"></span>');
$(".shop-sidebar .widget_nav_menu ul.menu").wrap("<div class='box-content box-category'></div>");
$(".shop-sidebar .widget_nav_menu ul.menu > li.cat-parent").append('<span class="subDropdown plus"></span>');
$("span.subDropdown").detach().insertBefore("ul.children");
$('.sidebar .custom-slider').closest('div').unwrap();
$(".wpcf7-form input[name='your-name'], .wpcf7-form input[type='email']").closest('p').wrapAll("<div class='row'></div>");
$(".wpcf7-form input[name='your-name'], .wpcf7-form input[type='email']").closest('p').wrap("<div class='col-lg-6'><div class='form-group'></div></div>");
if(!$(".toolbar.bottom").length){
$(".pro-coloumn").addClass("no-pagination");
}
$(".single-product .woocommerce-message").wrap("<div class='product-essential container klb-message'><div class='row'></div></div>");
$(".single-product .woocommerce-error").wrap("<div class='product-essential container klb-message'><div class='row'></div></div>");
$(".page img.alignleft[width='160']").closest("p").addClass("klbclear");
}
function init_slideEffectAjax(){
$(".fl-cart-contain").mouseenter(function(){
$(this).find(".fl-mini-cart-content").stop(true, true).slideDown()
}), $(".fl-cart-contain").mouseleave(function(){
$(this).find(".fl-mini-cart-content").stop(true, true).slideUp()
});
}
function init_sidebarmenu(){
$("ul.accordion li.parent, ul.accordion li.parents, ul#magicat li.open").each(function(){
$(this).append('<em class="open-close">&nbsp;</em>')
}), $("ul.accordion, ul#magicat").accordionNew(), $("ul.accordion li.active, ul#magicat li.active").each(function(){
$(this).children().next("div").css("display", "block")
});
}
function init_subdropdown(){
$(".subDropdown")[0]&&$(".subDropdown").on("click", function(){
$(this).toggleClass("plus"), $(this).toggleClass("minus"), $(this).parent().find("ul").slideToggle()
});
}})(jQuery);
var isTouchDevice="ontouchstart" in window||navigator.msMaxTouchPoints > 0;
jQuery(window).on("load", function(){
isTouchDevice&&jQuery("#nav a.level-top").on("click", function(){
if($t=jQuery(this), $parent=$t.parent(), $parent.hasClass("parent")){
if(!$t.hasClass("menu-ready")) return jQuery("#nav a.level-top").removeClass("menu-ready"), $t.addClass("menu-ready"), !1;
$t.removeClass("menu-ready")
}}), jQuery().UItoTop()
}),
function(e){
jQuery.fn.UItoTop=function(t){
var a={
text: "",
min: 200,
inDelay: 600,
outDelay: 400,
containerID: "toTop",
containerHoverID: "toTopHover",
scrollSpeed: 1200,
easingType: "linear"
},
i=e.extend(a, t),
n="#" + i.containerID,
s="#" + i.containerHoverID;
jQuery("body").append('<a href="#" id="' + i.containerID + '">' + i.text + "</a>"), jQuery(n).hide().on("click", function(){
return jQuery("html, body").animate({
scrollTop: 0
}, i.scrollSpeed, i.easingType), jQuery("#" + i.containerHoverID, this).stop().animate({
opacity: 0
}, i.inDelay, i.easingType), !1
}).prepend('<span id="' + i.containerHoverID + '"></span>').on("hover",function(){
jQuery(s, this).stop().animate({
opacity: 1
}, 600, "linear")
}, function(){
jQuery(s, this).stop().animate({
opacity: 0
}, 700, "linear")
}), jQuery(window).scroll(function(){
var t=e(window).scrollTop();
"undefined"==typeof document.body.style.maxHeight&&jQuery(n).css({
position: "absolute",
top: e(window).scrollTop() + e(window).height() - 50
}), t > i.min ? jQuery(n).fadeIn(i.inDelay):jQuery(n).fadeOut(i.Outdelay)
})
}}(jQuery),
jQuery.extend(jQuery.easing, {
easeInCubic: function(e, t, a, i, n){
return i * (t /=n) * t * t + a
},
easeOutCubic: function(e, t, a, i, n){
return i * ((t=t / n - 1) * t * t + 1) + a
}}),
jQuery.extend(jQuery.easing, {
easeInCubic: function(e, t, n, i, s){
return i * (t /=s) * t * t + n
},
easeOutCubic: function(e, t, n, i, s){
return i * ((t=t / s - 1) * t * t + 1) + n
}}),
function(e){
e.fn.extend({
accordion: function(){
return this.each(function(){})
}})
}(jQuery), jQuery(function(e){
e(".accordion").accordion(), e(".accordion").each(function(){
var t=e(this).find("li.active");
t.each(function(n){
e(this).children("ul").css("display", "block"), n==t.length - 1&&e(this).addClass("current")
})
})
}),
function(e){
e.fn.extend({
accordion: function(t){
var n={
accordion: "true",
speed: 300,
closedSign: "[+]",
openedSign: "[-]"
},
i=e.extend(n, t),
s=e(this);
s.find("li").each(function(){
0!=e(this).find("ul").size()&&(e(this).find("a:first").after("<em>" + i.closedSign + "</em>"), "#"==e(this).find("a:first").attr("href")&&e(this).find("a:first").on("click", function(){
return !1
}))
}), s.find("li em").on("click", function(){
0!=e(this).parent().find("ul").size()&&(i.accordion&&(e(this).parent().find("ul").is(":visible")||(parents=e(this).parent().parents("ul"), visible=s.find("ul:visible"), visible.each(function(t){
var n = !0;
parents.each(function(e){
return parents[e]==visible[t] ? (n = !1, !1):void 0
}), n&&e(this).parent().find("ul")!=visible[t]&&e(visible[t]).slideUp(i.speed, function(){
e(this).parent("li").find("em:first").html(i.closedSign)
})
}))), e(this).parent().find("ul:first").is(":visible") ? e(this).parent().find("ul:first").slideUp(i.speed, function(){
e(this).parent("li").find("em:first").delay(i.speed).html(i.closedSign)
}):e(this).parent().find("ul:first").slideDown(i.speed, function(){
e(this).parent("li").find("em:first").delay(i.speed).html(i.openedSign)
}))
})
}})
}(jQuery),
function(e){
e.fn.extend({
accordionNew: function(){
return this.each(function(){
function t(t, i){
e(t).parent(l).siblings().removeClass(s).children(c).slideUp(r), e(t).siblings(c)[i||o]("show"==i ? r:!1, function(){
e(t).siblings(c).is(":visible") ? e(t).parents(l).not(n.parents()).addClass(s):e(t).parent(l).removeClass(s), "show"==i&&e(t).parents(l).not(n.parents()).addClass(s), e(t).parents().show()
})
}
var n=e(this),
i="accordiated",
s="active",
o="slideToggle",
c="ul, div",
r="fast",
l="li";
if(n.data(i)) return !1;
e.each(n.find("ul, li>div"), function(){
e(this).data(i, !0), e(this).hide()
}), e.each(n.find("em.open-close"), function(){
e(this).on("click", function(){
return void t(this, o)
}), e(this).on("activate-node", function(){
n.find(c).not(e(this).parents()).not(e(this).siblings()).slideUp(r), t(this, "slideDown")
})
});
var a=location.hash ? n.find("a[href=" + location.hash + "]")[0]:n.find("li.current a")[0];
a&&t(a, !1)
})
}}), e(function(){
function t(){
var t=e('.navbar-collapse form[role="search"].active');
t.find("input").val(""), t.removeClass("active")
}
e('header, .navbar-collapse form[role="search"] button[type="reset"]').on("click keyup", function(n){
console.log(n.currentTarget), (27==n.which&&e('.navbar-collapse form[role="search"]').hasClass("active")||"reset"==e(n.currentTarget).attr("type"))&&t()
}), e(document).on("click", '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(t){
t.preventDefault();
var n=e(this).closest("form"),
i=n.find("input");
n.addClass("active"), i.focus()
})
})
}(jQuery);
jQuery(document).ready(function($){
"use strict";
$('a.button.detail-bnt').on('click', function(){
var data={
action: 'quick_view',
beforeSend: function(){
$(".loader-image").show();
},
'id': $(this).attr('id'),
};
$.post(MyAjax.ajaxurl, data, function(response){
$('.ajaxphp-results').html(response);
if($(".qty").attr("max")){
$('.plus').on('click', function (event){
event.preventDefault();
if($(this).prev().val() < $(".qty").attr("max")){
$(this).prev().val(+$(this).prev().val() + 1);
}});
}else{
$('.plus').on('click', function (event){
event.preventDefault();
if($(this).prev().val() < 100){
$(this).prev().val(+$(this).prev().val() + 1);
}});
}
$('.minus').on('click', function (event){
event.preventDefault();
if($(this).next().val() > 1){
if($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
}});
$('.popup1 .quick-view-box + #fade, .popup1.klb-quick-view img.x').on('click', function (){
$(".popup1.klb-quick-view").hide();
$(".zoomContainer").remove();
});
if($('#product-zoom').length > 0){
$('#product-zoom').elevateZoom({
zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750,
gallery: 'gallery_01'
});
};
$("#gallery_01 .slider-items").owlCarousel({
autoplay: false,
items: 4,
itemsDesktop: [1024, 3],
itemsDesktopSmall: [900, 4],
itemsTablet: [600, 3],
itemsMobile: [320, 2],
navigation: true,
navigationText: ["<a class=\"flex-prev\"></a>", "<a class=\"flex-next\"></a>"],
slideSpeed: 500,
pagination: false
}),
$("p.stock.in-stock").detach().insertBefore(".price-block");
$("p.stock.out-of-stock").detach().insertBefore(".price-block");
$(".loader-image").hide();
});
});
$('a.button-list').on('click', function(){
var data={
action: 'list_view',
beforeSend: function (){
$(".loader-image").show();
},
'id': MyAjax.post_idm,
'is_tax': MyAjax.is_tax,
'current_page': MyAjax.current_page,
'per_page': MyAjax.per_page,
};
$.post(MyAjax.ajaxurl, data, function(response){
$('.category-products').html(response);
$(".loader-image").hide();
$('a.button-grid').removeClass('button button-active');
$('a.button-list').addClass('button button-active');
});
});
$('a.button-grid').on('click', function(){
var data={
action: 'grid_view',
beforeSend: function (){
$(".loader-image").show();
},
'id': MyAjax.post_idm,
'is_tax': MyAjax.is_tax,
'current_page': MyAjax.current_page,
'per_page': MyAjax.per_page,
};
$.post(MyAjax.ajaxurl, data, function(response){
$('.category-products').html(response);
$(".loader-image").hide();
$('a.button-list').removeClass('button button-active');
$('a.button-grid').addClass('button button-active');
});
});
});
if(typeof Object.create!=='function'){
"use strict";
Object.create=function(obj){
function F(){};
F.prototype=obj;
return new F();
};}
(function(jQuery, window, document, undefined){
var ElevateZoom={
init: function(options, elem){
var self=this;
self.elem=elem;
self.jQueryelem=jQuery(elem);
self.imageSrc=self.jQueryelem.data("zoom-image") ? self.jQueryelem.data("zoom-image"):self.jQueryelem.attr("src");
self.options=jQuery.extend({}, jQuery.fn.elevateZoom.options, options);
if(self.options.tint){
self.options.lensColour="none",
self.options.lensOpacity="1"
}
if(self.options.zoomType=="inner"){
self.options.showLens=false;
}
self.jQueryelem.parent().removeAttr('title').removeAttr('alt');
self.zoomImage=self.imageSrc;
self.refresh(1);
jQuery('#' + self.options.gallery + ' a').click(function(e){
if(self.options.galleryActiveClass){
jQuery('#' + self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);
jQuery(this).addClass(self.options.galleryActiveClass);
}
e.preventDefault();
if(jQuery(this).data("zoom-image")){
self.zoomImagePre=jQuery(this).data("zoom-image")
}else{
self.zoomImagePre=jQuery(this).data("image");
}
self.swaptheimage(jQuery(this).data("image"), self.zoomImagePre);
return false;
});
},
refresh: function(length){
var self=this;
setTimeout(function(){
self.fetch(self.imageSrc);
}, length||self.options.refresh);
},
fetch: function(imgsrc){
var self=this;
var newImg=new Image();
newImg.onload=function(){
self.largeWidth=newImg.width;
self.largeHeight=newImg.height;
self.startZoom();
self.currentImage=self.imageSrc;
self.options.onZoomedImageLoaded(self.jQueryelem);
}
newImg.src=imgsrc;
return;
},
startZoom: function(){
var self=this;
self.nzWidth=self.jQueryelem.width();
self.nzHeight=self.jQueryelem.height();
self.isWindowActive=false;
self.isLensActive=false;
self.isTintActive=false;
self.overWindow=false;
if(self.options.imageCrossfade){
self.zoomWrap=self.jQueryelem.wrap('<div style="height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;" class="zoomWrapper" />');
self.jQueryelem.css('position', 'absolute');
}
self.zoomLock=1;
self.scrollingLock=false;
self.changeBgSize=false;
self.currentZoomLevel=self.options.zoomLevel;
self.nzOffset=self.jQueryelem.offset();
self.widthRatio=(self.largeWidth / self.currentZoomLevel) / self.nzWidth;
self.heightRatio=(self.largeHeight / self.currentZoomLevel) / self.nzHeight;
if(self.options.zoomType=="window"){
self.zoomWindowStyle="overflow: hidden;" + "background-position: 0px 0px;text-align:center;" + "background-color: " + String(self.options.zoomWindowBgColour) + ";width: " + String(self.options.zoomWindowWidth) + "px;" + "height: " + String(self.options.zoomWindowHeight) + "px;float: left;" + "background-size: " + self.largeWidth / self.currentZoomLevel + "px " + self.largeHeight / self.currentZoomLevel + "px;" + "display: none;z-index:100;" + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";background-repeat: no-repeat;" + "position: absolute;";
}
if(self.options.zoomType=="inner"){
var borderWidth=self.jQueryelem.css("border-left-width");
self.zoomWindowStyle="overflow: hidden;" + "margin-left: " + String(borderWidth) + ";" + "margin-top: " + String(borderWidth) + ";" + "background-position: 0px 0px;" + "width: " + String(self.nzWidth) + "px;" + "height: " + String(self.nzHeight) + "px;float: left;" + "display: none;" + "cursor:" + (self.options.cursor) + ";" + "px solid " + self.options.borderColour + ";background-repeat: no-repeat;" + "position: absolute;";
}
if(self.options.zoomType=="window"){
if(self.nzHeight < self.options.zoomWindowWidth / self.widthRatio){
lensHeight=self.nzHeight;
}else{
lensHeight=String((self.options.zoomWindowHeight / self.heightRatio))
}
if(self.largeWidth < self.options.zoomWindowWidth){
lensWidth=self.nzWidth;
}else{
lensWidth=(self.options.zoomWindowWidth / self.widthRatio);
}
self.lensStyle="background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth) / self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight) / self.heightRatio) + "px;float: right;display: none;" + "overflow: hidden;" + "z-index: 999;" + "-webkit-transform: translateZ(0);" + "opacity:" + (self.options.lensOpacity) + ";filter: alpha(opacity=" + (self.options.lensOpacity * 100) + "); zoom:1;" + "width:" + lensWidth + "px;" + "height:" + lensHeight + "px;" + "background-color:" + (self.options.lensColour) + ";" + "cursor:" + (self.options.cursor) + ";" + "border: " + (self.options.lensBorderSize) + "px" + " solid " + (self.options.lensBorderColour) + ";background-repeat: no-repeat;position: absolute;";
}
self.tintStyle="display: block;" + "position: absolute;" + "background-color: " + self.options.tintColour + ";" + "filter:alpha(opacity=0);" + "opacity: 0;" + "width: " + self.nzWidth + "px;" + "height: " + self.nzHeight + "px;";
self.lensRound='';
if(self.options.zoomType=="lens"){
self.lensStyle="background-position: 0px 0px;" + "float: left;display: none;" + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour + ";" + "width:" + String(self.options.lensSize) + "px;" + "height:" + String(self.options.lensSize) + "px;" + "background-repeat: no-repeat;position: absolute;";
}
if(self.options.lensShape=="round"){
self.lensRound="border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;" + "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";
}
self.zoomContainer=jQuery('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + self.nzOffset.left + 'px;top:' + self.nzOffset.top + 'px;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;"></div>');
jQuery('body').append(self.zoomContainer);
if(self.options.containLensZoom&&self.options.zoomType=="lens"){
self.zoomContainer.css("overflow", "hidden");
}
if(self.options.zoomType!="inner"){
self.zoomLens=jQuery("<div class='zoomLens' style='" + self.lensStyle + self.lensRound + "'>&nbsp;</div>").appendTo(self.zoomContainer).click(function(){
self.jQueryelem.trigger('click');
});
if(self.options.tint){
self.tintContainer=jQuery('<div/>').addClass('tintContainer');
self.zoomTint=jQuery("<div class='zoomTint' style='" + self.tintStyle + "'></div>");
self.zoomLens.wrap(self.tintContainer);
self.zoomTintcss=self.zoomLens.after(self.zoomTint);
self.zoomTintImage=jQuery('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + self.nzWidth + 'px; height: ' + self.nzHeight + 'px;" src="' + self.imageSrc + '">').appendTo(self.zoomLens).click(function(){
self.jQueryelem.trigger('click');
});
}}
if(isNaN(self.options.zoomWindowPosition)){
self.zoomWindow=jQuery("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo('body').click(function(){
self.jQueryelem.trigger('click');
});
}else{
self.zoomWindow=jQuery("<div style='z-index:999;left:" + (self.windowOffsetLeft) + "px;top:" + (self.windowOffsetTop) + "px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(self.zoomContainer).click(function(){
self.jQueryelem.trigger('click');
});
}
self.zoomWindowContainer=jQuery('<div/>').addClass('zoomWindowContainer').css("width", self.options.zoomWindowWidth);
self.zoomWindow.wrap(self.zoomWindowContainer);
if(self.options.zoomType=="lens"){
self.zoomLens.css({
backgroundImage: "url('" + self.imageSrc + "')"
});
}
if(self.options.zoomType=="window"){
self.zoomWindow.css({
backgroundImage: "url('" + self.imageSrc + "')"
});
}
if(self.options.zoomType=="inner"){
self.zoomWindow.css({
backgroundImage: "url('" + self.imageSrc + "')"
});
}
self.jQueryelem.bind('touchmove', function(e){
e.preventDefault();
var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
self.setPosition(touch);
});
self.zoomContainer.bind('touchmove', function(e){
if(self.options.zoomType=="inner"){
self.showHideWindow("show");
}
e.preventDefault();
var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
self.setPosition(touch);
});
self.zoomContainer.bind('touchend', function(e){
self.showHideWindow("hide");
if(self.options.showLens){
self.showHideLens("hide");
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.showHideTint("hide");
}});
self.jQueryelem.bind('touchend', function(e){
self.showHideWindow("hide");
if(self.options.showLens){
self.showHideLens("hide");
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.showHideTint("hide");
}});
if(self.options.showLens){
self.zoomLens.bind('touchmove', function(e){
e.preventDefault();
var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];
self.setPosition(touch);
});
self.zoomLens.bind('touchend', function(e){
self.showHideWindow("hide");
if(self.options.showLens){
self.showHideLens("hide");
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.showHideTint("hide");
}});
}
self.jQueryelem.bind('mousemove', function(e){
if(self.overWindow==false){
self.setElements("show");
}
if(self.lastX!==e.clientX||self.lastY!==e.clientY){
self.setPosition(e);
self.currentLoc=e;
}
self.lastX=e.clientX;
self.lastY=e.clientY;
});
self.zoomContainer.bind('mousemove', function(e){
if(self.overWindow==false){
self.setElements("show");
}
if(self.lastX!==e.clientX||self.lastY!==e.clientY){
self.setPosition(e);
self.currentLoc=e;
}
self.lastX=e.clientX;
self.lastY=e.clientY;
});
if(self.options.zoomType!="inner"){
self.zoomLens.bind('mousemove', function(e){
if(self.lastX!==e.clientX||self.lastY!==e.clientY){
self.setPosition(e);
self.currentLoc=e;
}
self.lastX=e.clientX;
self.lastY=e.clientY;
});
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.zoomTint.bind('mousemove', function(e){
if(self.lastX!==e.clientX||self.lastY!==e.clientY){
self.setPosition(e);
self.currentLoc=e;
}
self.lastX=e.clientX;
self.lastY=e.clientY;
});
}
if(self.options.zoomType=="inner"){
self.zoomWindow.bind('mousemove', function(e){
if(self.lastX!==e.clientX||self.lastY!==e.clientY){
self.setPosition(e);
self.currentLoc=e;
}
self.lastX=e.clientX;
self.lastY=e.clientY;
});
}
self.zoomContainer.add(self.jQueryelem).mouseenter(function(){
if(self.overWindow==false){
self.setElements("show");
}}).mouseleave(function(){
if(!self.scrollLock){
self.setElements("hide");
}});
if(self.options.zoomType!="inner"){
self.zoomWindow.mouseenter(function(){
self.overWindow=true;
self.setElements("hide");
}).mouseleave(function(){
self.overWindow=false;
});
}
if(self.options.zoomLevel!=1){
}
if(self.options.minZoomLevel){
self.minZoomLevel=self.options.minZoomLevel;
}else{
self.minZoomLevel=self.options.scrollZoomIncrement * 2;
}
if(self.options.scrollZoom){
self.zoomContainer.add(self.jQueryelem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e){
self.scrollLock=true;
clearTimeout(jQuery.data(this, 'timer'));
jQuery.data(this, 'timer', setTimeout(function(){
self.scrollLock=false;
}, 250));
var theEvent=e.originalEvent.wheelDelta||e.originalEvent.detail * -1
e.stopImmediatePropagation();
e.stopPropagation();
e.preventDefault();
if(theEvent / 120 > 0){
if(self.currentZoomLevel >=self.minZoomLevel){
self.changeZoomLevel(self.currentZoomLevel - self.options.scrollZoomIncrement);
}}else{
if(self.options.maxZoomLevel){
if(self.currentZoomLevel <=self.options.maxZoomLevel){
self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
}}else{
self.changeZoomLevel(parseFloat(self.currentZoomLevel) + self.options.scrollZoomIncrement);
}}
return false;
});
}},
setElements: function(type){
var self=this;
if(!self.options.zoomEnabled){
return false;
}
if(type=="show"){
if(self.isWindowSet){
if(self.options.zoomType=="inner"){
self.showHideWindow("show");
}
if(self.options.zoomType=="window"){
self.showHideWindow("show");
}
if(self.options.showLens){
self.showHideLens("show");
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.showHideTint("show");
}}
}
if(type=="hide"){
if(self.options.zoomType=="window"){
self.showHideWindow("hide");
}
if(!self.options.tint){
self.showHideWindow("hide");
}
if(self.options.showLens){
self.showHideLens("hide");
}
if(self.options.tint){
self.showHideTint("hide");
}}
},
setPosition: function(e){
var self=this;
if(!self.options.zoomEnabled){
return false;
}
self.nzHeight=self.jQueryelem.height();
self.nzWidth=self.jQueryelem.width();
self.nzOffset=self.jQueryelem.offset();
if(self.options.tint&&self.options.zoomType!="inner"){
self.zoomTint.css({
top: 0
});
self.zoomTint.css({
left: 0
});
}
if(self.options.responsive&&!self.options.scrollZoom){
if(self.options.showLens){
if(self.nzHeight < self.options.zoomWindowWidth / self.widthRatio){
lensHeight=self.nzHeight;
}else{
lensHeight=String((self.options.zoomWindowHeight / self.heightRatio))
}
if(self.largeWidth < self.options.zoomWindowWidth){
lensWidth=self.nzWidth;
}else{
lensWidth=(self.options.zoomWindowWidth / self.widthRatio);
}
self.widthRatio=self.largeWidth / self.nzWidth;
self.heightRatio=self.largeHeight / self.nzHeight;
if(self.options.zoomType!="lens"){
if(self.nzHeight < self.options.zoomWindowWidth / self.widthRatio){
lensHeight=self.nzHeight;
}else{
lensHeight=String((self.options.zoomWindowHeight / self.heightRatio))
}
if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
lensWidth=self.nzWidth;
}else{
lensWidth=(self.options.zoomWindowWidth / self.widthRatio);
}
self.zoomLens.css('width', lensWidth);
self.zoomLens.css('height', lensHeight);
if(self.options.tint){
self.zoomTintImage.css('width', self.nzWidth);
self.zoomTintImage.css('height', self.nzHeight);
}}
if(self.options.zoomType=="lens"){
self.zoomLens.css({
width: String(self.options.lensSize) + 'px',
height: String(self.options.lensSize) + 'px'
})
}}
}
self.zoomContainer.css({
top: self.nzOffset.top
});
self.zoomContainer.css({
left: self.nzOffset.left
});
self.mouseLeft=parseInt(e.pageX - self.nzOffset.left);
self.mouseTop=parseInt(e.pageY - self.nzOffset.top);
if(self.options.zoomType=="window"){
self.Etoppos=(self.mouseTop < (self.zoomLens.height() / 2));
self.Eboppos=(self.mouseTop > self.nzHeight - (self.zoomLens.height() / 2) - (self.options.lensBorderSize * 2));
self.Eloppos=(self.mouseLeft < 0 + ((self.zoomLens.width() / 2)));
self.Eroppos=(self.mouseLeft > (self.nzWidth - (self.zoomLens.width() / 2) - (self.options.lensBorderSize * 2)));
}
if(self.options.zoomType=="inner"){
self.Etoppos=(self.mouseTop < ((self.nzHeight / 2) / self.heightRatio));
self.Eboppos=(self.mouseTop > (self.nzHeight - ((self.nzHeight / 2) / self.heightRatio)));
self.Eloppos=(self.mouseLeft < 0 + (((self.nzWidth / 2) / self.widthRatio)));
self.Eroppos=(self.mouseLeft > (self.nzWidth - (self.nzWidth / 2) / self.widthRatio - (self.options.lensBorderSize * 2)));
}
if(self.mouseLeft <=0||self.mouseTop < 0||self.mouseLeft > self.nzWidth||self.mouseTop > self.nzHeight){
self.setElements("hide");
return;
}else{
if(self.options.showLens){
self.lensLeftPos=String(self.mouseLeft - self.zoomLens.width() / 2);
self.lensTopPos=String(self.mouseTop - self.zoomLens.height() / 2);
}
if(self.Etoppos){
self.lensTopPos=0;
}
if(self.Eloppos){
self.windowLeftPos=0;
self.lensLeftPos=0;
self.tintpos=0;
}
if(self.options.zoomType=="window"){
if(self.Eboppos){
self.lensTopPos=Math.max((self.nzHeight) - self.zoomLens.height() - (self.options.lensBorderSize * 2), 0);
}
if(self.Eroppos){
self.lensLeftPos=(self.nzWidth - (self.zoomLens.width()) - (self.options.lensBorderSize * 2));
}}
if(self.options.zoomType=="inner"){
if(self.Eboppos){
self.lensTopPos=Math.max(((self.nzHeight) - (self.options.lensBorderSize * 2)), 0);
}
if(self.Eroppos){
self.lensLeftPos=(self.nzWidth - (self.nzWidth) - (self.options.lensBorderSize * 2));
}}
if(self.options.zoomType=="lens"){
self.windowLeftPos=String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));
self.windowTopPos=String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));
self.zoomLens.css({
backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px'
});
if(self.changeBgSize){
if(self.nzHeight > self.nzWidth){
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}else{
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
self.changeBgSize=false;
}
self.setWindowPostition(e);
}
if(self.options.tint&&self.options.zoomType!="inner"){
self.setTintPosition(e);
}
if(self.options.zoomType=="window"){
self.setWindowPostition(e);
}
if(self.options.zoomType=="inner"){
self.setWindowPostition(e);
}
if(self.options.showLens){
if(self.fullwidth&&self.options.zoomType!="lens"){
self.lensLeftPos=0;
}
self.zoomLens.css({
left: self.lensLeftPos + 'px',
top: self.lensTopPos + 'px'
})
}}
},
showHideWindow: function(change){
var self=this;
if(change=="show"){
if(!self.isWindowActive){
if(self.options.zoomWindowFadeIn){
self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
}else{
self.zoomWindow.show();
}
self.isWindowActive=true;
}}
if(change=="hide"){
if(self.isWindowActive){
if(self.options.zoomWindowFadeOut){
self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut);
}else{
self.zoomWindow.hide();
}
self.isWindowActive=false;
}}
},
showHideLens: function(change){
var self=this;
if(change=="show"){
if(!self.isLensActive){
if(self.options.lensFadeIn){
self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
}else{
self.zoomLens.show();
}
self.isLensActive=true;
}}
if(change=="hide"){
if(self.isLensActive){
if(self.options.lensFadeOut){
self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
}else{
self.zoomLens.hide();
}
self.isLensActive=false;
}}
},
showHideTint: function(change){
var self=this;
if(change=="show"){
if(!self.isTintActive){
if(self.options.zoomTintFadeIn){
self.zoomTint.css({
opacity: self.options.tintOpacity
}).animate().stop(true, true).fadeIn("slow");
}else{
self.zoomTint.css({
opacity: self.options.tintOpacity
}).animate();
self.zoomTint.show();
}
self.isTintActive=true;
}}
if(change=="hide"){
if(self.isTintActive){
if(self.options.zoomTintFadeOut){
self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
}else{
self.zoomTint.hide();
}
self.isTintActive=false;
}}
},
setLensPostition: function(e){},
setWindowPostition: function(e){
var self=this;
if(!isNaN(self.options.zoomWindowPosition)){
switch (self.options.zoomWindowPosition){
case 1:
self.windowOffsetTop=(self.options.zoomWindowOffety);
self.windowOffsetLeft=(+self.nzWidth);
break;
case 2:
if(self.options.zoomWindowHeight > self.nzHeight){
self.windowOffsetTop=((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
self.windowOffsetLeft=(self.nzWidth);
}else{
}
break;
case 3:
self.windowOffsetTop=(self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2));
self.windowOffsetLeft=(self.nzWidth);
break;
case 4:
self.windowOffsetTop=(self.nzHeight);
self.windowOffsetLeft=(self.nzWidth);
break;
case 5:
self.windowOffsetTop=(self.nzHeight);
self.windowOffsetLeft=(self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2));
break;
case 6:
if(self.options.zoomWindowHeight > self.nzHeight){
self.windowOffsetTop=(self.nzHeight);
self.windowOffsetLeft=((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
}else{
}
break;
case 7:
self.windowOffsetTop=(self.nzHeight);
self.windowOffsetLeft=0;
break;
case 8:
self.windowOffsetTop=(self.nzHeight);
self.windowOffsetLeft=(self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);
break;
case 9:
self.windowOffsetTop=(self.nzHeight - self.zoomWindow.height() - (self.options.borderSize * 2));
self.windowOffsetLeft=(self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);
break;
case 10:
if(self.options.zoomWindowHeight > self.nzHeight){
self.windowOffsetTop=((self.options.zoomWindowHeight / 2) - (self.nzHeight / 2)) * (-1);
self.windowOffsetLeft=(self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);
}else{
}
break;
case 11:
self.windowOffsetTop=(self.options.zoomWindowOffety);
self.windowOffsetLeft=(self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);
break;
case 12:
self.windowOffsetTop=(self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1);
self.windowOffsetLeft=(self.zoomWindow.width() + (self.options.borderSize * 2)) * (-1);
break;
case 13:
self.windowOffsetTop=(self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1);
self.windowOffsetLeft=(0);
break;
case 14:
if(self.options.zoomWindowHeight > self.nzHeight){
self.windowOffsetTop=(self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1);
self.windowOffsetLeft=((self.options.zoomWindowWidth / 2) - (self.nzWidth / 2) + (self.options.borderSize * 2)) * (-1);
}else{
}
break;
case 15:
self.windowOffsetTop=(self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1);
self.windowOffsetLeft=(self.nzWidth - self.zoomWindow.width() - (self.options.borderSize * 2));
break;
case 16:
self.windowOffsetTop=(self.zoomWindow.height() + (self.options.borderSize * 2)) * (-1);
self.windowOffsetLeft=(self.nzWidth);
break;
default:
self.windowOffsetTop=(self.options.zoomWindowOffety);
self.windowOffsetLeft=(self.nzWidth);
}}else{
self.externalContainer=jQuery('#' + self.options.zoomWindowPosition);
self.externalContainerWidth=self.externalContainer.width();
self.externalContainerHeight=self.externalContainer.height();
self.externalContainerOffset=self.externalContainer.offset();
self.windowOffsetTop=self.externalContainerOffset.top;
self.windowOffsetLeft=self.externalContainerOffset.left;
}
self.isWindowSet=true;
self.windowOffsetTop=self.windowOffsetTop + self.options.zoomWindowOffety;
self.windowOffsetLeft=self.windowOffsetLeft + self.options.zoomWindowOffetx;
self.zoomWindow.css({
top: self.windowOffsetTop
});
self.zoomWindow.css({
left: self.windowOffsetLeft
});
if(self.options.zoomType=="inner"){
self.zoomWindow.css({
top: 0
});
self.zoomWindow.css({
left: 0
});
}
self.windowLeftPos=String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));
self.windowTopPos=String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
if(self.Etoppos){
self.windowTopPos=0;
}
if(self.Eloppos){
self.windowLeftPos=0;
}
if(self.Eboppos){
self.windowTopPos=(self.largeHeight / self.currentZoomLevel - self.zoomWindow.height()) * (-1);
}
if(self.Eroppos){
self.windowLeftPos=((self.largeWidth / self.currentZoomLevel - self.zoomWindow.width()) * (-1));
}
if(self.fullheight){
self.windowTopPos=0;
}
if(self.fullwidth){
self.windowLeftPos=0;
}
if(self.options.zoomType=="window"||self.options.zoomType=="inner"){
if(self.zoomLock==1){
if(self.widthRatio <=1){
self.windowLeftPos=0;
}
if(self.heightRatio <=1){
self.windowTopPos=0;
}}
if(self.largeHeight < self.options.zoomWindowHeight){
self.windowTopPos=0;
}
if(self.largeWidth < self.options.zoomWindowWidth){
self.windowLeftPos=0;
}
if(self.options.easing){
if(!self.xp){
self.xp=0;
}
if(!self.yp){
self.yp=0;
}
if(!self.loop){
self.loop=setInterval(function(){
self.xp +=(self.windowLeftPos - self.xp) / self.options.easingAmount;
self.yp +=(self.windowTopPos - self.yp) / self.options.easingAmount;
if(self.scrollingLock){
clearInterval(self.loop);
self.xp=self.windowLeftPos;
self.yp=self.windowTopPos
self.xp=((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
self.yp=(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
if(self.changeBgSize){
if(self.nzHeight > self.nzWidth){
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}else{
if(self.options.zoomType!="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
/*
if(!self.bgxp){self.bgxp=self.largeWidth/self.newvalue;}
if(!self.bgyp){self.bgyp=self.largeHeight/self.newvalue ;}
if(!self.bgloop){
self.bgloop=setInterval(function(){
self.bgxp +=(self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount;
self.bgyp +=(self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;
self.zoomWindow.css({ "background-size": self.bgxp + 'px ' + self.bgyp + 'px' });
}, 16);
}
*/
self.changeBgSize=false;
}
self.zoomWindow.css({
backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px'
});
self.scrollingLock=false;
self.loop=false;
}else{
if(self.changeBgSize){
if(self.nzHeight > self.nzWidth){
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}else{
if(self.options.zoomType!="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
self.changeBgSize=false;
}
self.zoomWindow.css({
backgroundPosition: self.xp + 'px ' + self.yp + 'px'
});
}}, 16);
}}else{
if(self.changeBgSize){
if(self.nzHeight > self.nzWidth){
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}else{
if(self.options.zoomType=="lens"){
self.zoomLens.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}
if((self.largeHeight / self.newvaluewidth) < self.options.zoomWindowHeight){
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvaluewidth + 'px ' + self.largeHeight / self.newvaluewidth + 'px'
});
}else{
self.zoomWindow.css({
"background-size": self.largeWidth / self.newvalueheight + 'px ' + self.largeHeight / self.newvalueheight + 'px'
});
}}
self.changeBgSize=false;
}
self.zoomWindow.css({
backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px'
});
}}
},
setTintPosition: function(e){
var self=this;
self.nzOffset=self.jQueryelem.offset();
self.tintpos=String(((e.pageX - self.nzOffset.left) - (self.zoomLens.width() / 2)) * (-1));
self.tintposy=String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));
if(self.Etoppos){
self.tintposy=0;
}
if(self.Eloppos){
self.tintpos=0;
}
if(self.Eboppos){
self.tintposy=(self.nzHeight - self.zoomLens.height() - (self.options.lensBorderSize * 2)) * (-1);
}
if(self.Eroppos){
self.tintpos=((self.nzWidth - self.zoomLens.width() - (self.options.lensBorderSize * 2)) * (-1));
}
if(self.options.tint){
if(self.fullheight){
self.tintposy=0;
}
if(self.fullwidth){
self.tintpos=0;
}
self.zoomTintImage.css({
'left': self.tintpos + 'px'
});
self.zoomTintImage.css({
'top': self.tintposy + 'px'
});
}},
swaptheimage: function(smallimage, largeimage){
var self=this;
var newImg=new Image();
if(self.options.loadingIcon){
self.spinner=jQuery('<div style="background: url(\'' + self.options.loadingIcon + '\') no-repeat center;height:' + self.nzHeight + 'px;width:' + self.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
self.jQueryelem.after(self.spinner);
}
self.options.onImageSwap(self.jQueryelem);
newImg.onload=function(){
self.largeWidth=newImg.width;
self.largeHeight=newImg.height;
self.zoomImage=largeimage;
self.zoomWindow.css({
"background-size": self.largeWidth + 'px ' + self.largeHeight + 'px'
});
self.zoomWindow.css({
"background-size": self.largeWidth + 'px ' + self.largeHeight + 'px'
});
self.swapAction(smallimage, largeimage);
return;
}
newImg.src=largeimage;
},
swapAction: function(smallimage, largeimage){
var self=this;
var newImg2=new Image();
newImg2.onload=function(){
self.nzHeight=newImg2.height;
self.nzWidth=newImg2.width;
self.options.onImageSwapComplete(self.jQueryelem);
self.doneCallback();
return;
}
newImg2.src=smallimage;
self.currentZoomLevel=self.options.zoomLevel;
self.options.maxZoomLevel=false;
if(self.options.zoomType=="lens"){
self.zoomLens.css({
backgroundImage: "url('" + largeimage + "')"
});
}
if(self.options.zoomType=="window"){
self.zoomWindow.css({
backgroundImage: "url('" + largeimage + "')"
});
}
if(self.options.zoomType=="inner"){
self.zoomWindow.css({
backgroundImage: "url('" + largeimage + "')"
});
}
self.currentImage=largeimage;
if(self.options.imageCrossfade){
var oldImg=self.jQueryelem;
var newImg=oldImg.clone();
self.jQueryelem.attr("src", smallimage)
self.jQueryelem.after(newImg);
newImg.stop(true).fadeOut(self.options.imageCrossfade, function(){
jQuery(this).remove();
});
self.jQueryelem.width("auto").removeAttr("width");
self.jQueryelem.height("auto").removeAttr("height");
oldImg.fadeIn(self.options.imageCrossfade);
if(self.options.tint&&self.options.zoomType!="inner"){
var oldImgTint=self.zoomTintImage;
var newImgTint=oldImgTint.clone();
self.zoomTintImage.attr("src", largeimage)
self.zoomTintImage.after(newImgTint);
newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function(){
jQuery(this).remove();
});
oldImgTint.fadeIn(self.options.imageCrossfade);
self.zoomTint.css({
height: self.jQueryelem.height()
});
self.zoomTint.css({
width: self.jQueryelem.width()
});
}
self.zoomContainer.css("height", self.jQueryelem.height());
self.zoomContainer.css("width", self.jQueryelem.width());
if(self.options.zoomType=="inner"){
if(!self.options.constrainType){
self.zoomWrap.parent().css("height", self.jQueryelem.height());
self.zoomWrap.parent().css("width", self.jQueryelem.width());
self.zoomWindow.css("height", self.jQueryelem.height());
self.zoomWindow.css("width", self.jQueryelem.width());
}}
if(self.options.imageCrossfade){
self.zoomWrap.css("height", self.jQueryelem.height());
self.zoomWrap.css("width", self.jQueryelem.width());
}}else{
self.jQueryelem.attr("src", smallimage);
if(self.options.tint){
self.zoomTintImage.attr("src", largeimage);
self.zoomTintImage.attr("height", self.jQueryelem.height());
self.zoomTintImage.css({
height: self.jQueryelem.height()
});
self.zoomTint.css({
height: self.jQueryelem.height()
});
}
self.zoomContainer.css("height", self.jQueryelem.height());
self.zoomContainer.css("width", self.jQueryelem.width());
if(self.options.imageCrossfade){
self.zoomWrap.css("height", self.jQueryelem.height());
self.zoomWrap.css("width", self.jQueryelem.width());
}}
if(self.options.constrainType){
if(self.options.constrainType=="height"){
self.zoomContainer.css("height", self.options.constrainSize);
self.zoomContainer.css("width", "auto");
if(self.options.imageCrossfade){
self.zoomWrap.css("height", self.options.constrainSize);
self.zoomWrap.css("width", "auto");
self.constwidth=self.zoomWrap.width();
}else{
self.jQueryelem.css("height", self.options.constrainSize);
self.jQueryelem.css("width", "auto");
self.constwidth=self.jQueryelem.width();
}
if(self.options.zoomType=="inner"){
self.zoomWrap.parent().css("height", self.options.constrainSize);
self.zoomWrap.parent().css("width", self.constwidth);
self.zoomWindow.css("height", self.options.constrainSize);
self.zoomWindow.css("width", self.constwidth);
}
if(self.options.tint){
self.tintContainer.css("height", self.options.constrainSize);
self.tintContainer.css("width", self.constwidth);
self.zoomTint.css("height", self.options.constrainSize);
self.zoomTint.css("width", self.constwidth);
self.zoomTintImage.css("height", self.options.constrainSize);
self.zoomTintImage.css("width", self.constwidth);
}}
if(self.options.constrainType=="width"){
self.zoomContainer.css("height", "auto");
self.zoomContainer.css("width", self.options.constrainSize);
if(self.options.imageCrossfade){
self.zoomWrap.css("height", "auto");
self.zoomWrap.css("width", self.options.constrainSize);
self.constheight=self.zoomWrap.height();
}else{
self.jQueryelem.css("height", "auto");
self.jQueryelem.css("width", self.options.constrainSize);
self.constheight=self.jQueryelem.height();
}
if(self.options.zoomType=="inner"){
self.zoomWrap.parent().css("height", self.constheight);
self.zoomWrap.parent().css("width", self.options.constrainSize);
self.zoomWindow.css("height", self.constheight);
self.zoomWindow.css("width", self.options.constrainSize);
}
if(self.options.tint){
self.tintContainer.css("height", self.constheight);
self.tintContainer.css("width", self.options.constrainSize);
self.zoomTint.css("height", self.constheight);
self.zoomTint.css("width", self.options.constrainSize);
self.zoomTintImage.css("height", self.constheight);
self.zoomTintImage.css("width", self.options.constrainSize);
}}
}},
doneCallback: function(){
var self=this;
if(self.options.loadingIcon){
self.spinner.hide();
}
self.nzOffset=self.jQueryelem.offset();
self.nzWidth=self.jQueryelem.width();
self.nzHeight=self.jQueryelem.height();
self.currentZoomLevel=self.options.zoomLevel;
self.widthRatio=self.largeWidth / self.nzWidth;
self.heightRatio=self.largeHeight / self.nzHeight;
if(self.options.zoomType=="window"){
if(self.nzHeight < self.options.zoomWindowWidth / self.widthRatio){
lensHeight=self.nzHeight;
}else{
lensHeight=String((self.options.zoomWindowHeight / self.heightRatio))
}
if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
lensWidth=self.nzWidth;
}else{
lensWidth=(self.options.zoomWindowWidth / self.widthRatio);
}
if(self.zoomLens){
self.zoomLens.css('width', lensWidth);
self.zoomLens.css('height', lensHeight);
}}
},
getCurrentImage: function(){
var self=this;
return self.zoomImage;
},
getGalleryList: function(){
var self=this;
self.gallerylist=[];
if(self.options.gallery){
jQuery('#' + self.options.gallery + ' a').each(function(){
var img_src='';
if(jQuery(this).data("zoom-image")){
img_src=jQuery(this).data("zoom-image");
}else if(jQuery(this).data("image")){
img_src=jQuery(this).data("image");
}
if(img_src==self.zoomImage){
self.gallerylist.unshift({
href: '' + img_src + '',
title: jQuery(this).find('img').attr("title")
});
}else{
self.gallerylist.push({
href: '' + img_src + '',
title: jQuery(this).find('img').attr("title")
});
}});
}else{
self.gallerylist.push({
href: '' + self.zoomImage + '',
title: jQuery(this).find('img').attr("title")
});
}
return self.gallerylist;
},
changeZoomLevel: function(value){
var self=this;
self.scrollingLock=true;
self.newvalue=parseFloat(value).toFixed(2);
newvalue=parseFloat(value).toFixed(2);
maxheightnewvalue=self.largeHeight / ((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);
maxwidthtnewvalue=self.largeWidth / ((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);
if(self.options.zoomType!="inner"){
if(maxheightnewvalue <=newvalue){
self.heightRatio=(self.largeHeight / maxheightnewvalue) / self.nzHeight;
self.newvalueheight=maxheightnewvalue;
self.fullheight=true;
}else{
self.heightRatio=(self.largeHeight / newvalue) / self.nzHeight;
self.newvalueheight=newvalue;
self.fullheight=false;
}
if(maxwidthtnewvalue <=newvalue){
self.widthRatio=(self.largeWidth / maxwidthtnewvalue) / self.nzWidth;
self.newvaluewidth=maxwidthtnewvalue;
self.fullwidth=true;
}else{
self.widthRatio=(self.largeWidth / newvalue) / self.nzWidth;
self.newvaluewidth=newvalue;
self.fullwidth=false;
}
if(self.options.zoomType=="lens"){
if(maxheightnewvalue <=newvalue){
self.fullwidth=true;
self.newvaluewidth=maxheightnewvalue;
}else{
self.widthRatio=(self.largeWidth / newvalue) / self.nzWidth;
self.newvaluewidth=newvalue;
self.fullwidth=false;
}}
}
if(self.options.zoomType=="inner"){
maxheightnewvalue=parseFloat(self.largeHeight / self.nzHeight).toFixed(2);
maxwidthtnewvalue=parseFloat(self.largeWidth / self.nzWidth).toFixed(2);
if(newvalue > maxheightnewvalue){
newvalue=maxheightnewvalue;
}
if(newvalue > maxwidthtnewvalue){
newvalue=maxwidthtnewvalue;
}
if(maxheightnewvalue <=newvalue){
self.heightRatio=(self.largeHeight / newvalue) / self.nzHeight;
if(newvalue > maxheightnewvalue){
self.newvalueheight=maxheightnewvalue;
}else{
self.newvalueheight=newvalue;
}
self.fullheight=true;
}else{
self.heightRatio=(self.largeHeight / newvalue) / self.nzHeight;
if(newvalue > maxheightnewvalue){
self.newvalueheight=maxheightnewvalue;
}else{
self.newvalueheight=newvalue;
}
self.fullheight=false;
}
if(maxwidthtnewvalue <=newvalue){
self.widthRatio=(self.largeWidth / newvalue) / self.nzWidth;
if(newvalue > maxwidthtnewvalue){
self.newvaluewidth=maxwidthtnewvalue;
}else{
self.newvaluewidth=newvalue;
}
self.fullwidth=true;
}else{
self.widthRatio=(self.largeWidth / newvalue) / self.nzWidth;
self.newvaluewidth=newvalue;
self.fullwidth=false;
}}
scrcontinue=false;
if(self.options.zoomType=="inner"){
if(self.nzWidth >=self.nzHeight){
if(self.newvaluewidth <=maxwidthtnewvalue){
scrcontinue=true;
}else{
scrcontinue=false;
self.fullheight=true;
self.fullwidth=true;
}}
if(self.nzHeight > self.nzWidth){
if(self.newvaluewidth <=maxwidthtnewvalue){
scrcontinue=true;
}else{
scrcontinue=false;
self.fullheight=true;
self.fullwidth=true;
}}
}
if(self.options.zoomType!="inner"){
scrcontinue=true;
}
if(scrcontinue){
self.zoomLock=0;
self.changeZoom=true;
if(((self.options.zoomWindowHeight) / self.heightRatio) <=self.nzHeight){
self.currentZoomLevel=self.newvalueheight;
if(self.options.zoomType!="lens"&&self.options.zoomType!="inner"){
self.changeBgSize=true;
self.zoomLens.css({
height: String((self.options.zoomWindowHeight) / self.heightRatio) + 'px'
})
}
if(self.options.zoomType=="lens"||self.options.zoomType=="inner"){
self.changeBgSize=true;
}}
if((self.options.zoomWindowWidth / self.widthRatio) <=self.nzWidth){
if(self.options.zoomType!="inner"){
if(self.newvaluewidth > self.newvalueheight){
self.currentZoomLevel=self.newvaluewidth;
}}
if(self.options.zoomType!="lens"&&self.options.zoomType!="inner"){
self.changeBgSize=true;
self.zoomLens.css({
width: String((self.options.zoomWindowWidth) / self.widthRatio) + 'px'
})
}
if(self.options.zoomType=="lens"||self.options.zoomType=="inner"){
self.changeBgSize=true;
}}
if(self.options.zoomType=="inner"){
self.changeBgSize=true;
if(self.nzWidth > self.nzHeight){
self.currentZoomLevel=self.newvaluewidth;
}
if(self.nzHeight > self.nzWidth){
self.currentZoomLevel=self.newvaluewidth;
}}
}
self.setPosition(self.currentLoc);
},
closeAll: function(){
if(self.zoomWindow){
self.zoomWindow.hide();
}
if(self.zoomLens){
self.zoomLens.hide();
}
if(self.zoomTint){
self.zoomTint.hide();
}},
changeState: function(value){
var self=this;
if(value=='enable'){
self.options.zoomEnabled=true;
}
if(value=='disable'){
self.options.zoomEnabled=false;
}}
};
jQuery.fn.elevateZoom=function(options){
return this.each(function(){
var elevate=Object.create(ElevateZoom);
elevate.init(options, this);
jQuery.data(this, 'elevateZoom', elevate);
});
};
jQuery.fn.elevateZoom.options={
zoomActivation: "hover",
zoomEnabled: true,
preloading: 1,
zoomLevel: 1,
scrollZoom: false,
scrollZoomIncrement: 0.1,
minZoomLevel: false,
maxZoomLevel: false,
easing: false,
easingAmount: 12,
lensSize: 200,
zoomWindowWidth: 400,
zoomWindowHeight: 400,
zoomWindowOffetx: 0,
zoomWindowOffety: 0,
zoomWindowPosition: 1,
zoomWindowBgColour: "#fff",
lensFadeIn: false,
lensFadeOut: false,
debug: false,
zoomWindowFadeIn: false,
zoomWindowFadeOut: false,
zoomWindowAlwaysShow: false,
zoomTintFadeIn: false,
zoomTintFadeOut: false,
borderSize: 4,
showLens: true,
borderColour: "#888",
lensBorderSize: 1,
lensBorderColour: "#000",
lensShape: "square",
zoomType: "window",
containLensZoom: false,
lensColour: "white",
lensOpacity: 0.4,
lenszoom: false,
tint: false,
tintColour: "#333",
tintOpacity: 0.4,
gallery: false,
galleryActiveClass: "zoomGalleryActive",
imageCrossfade: false,
constrainType: false,
constrainSize: false,
loadingIcon: false,
cursor: "default",
responsive: true,
onComplete: jQuery.noop,
onZoomedImageLoaded: function(){},
onImageSwap: jQuery.noop,
onImageSwapComplete: jQuery.noop
};})(jQuery, window, document);
if(jQuery('#product-zoom').length > 0){
jQuery('#product-zoom').elevateZoom({
zoomType: "inner",
cursor: "crosshair",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 750,
gallery: 'gallery_01'
});
};
(function($){
jQuery(document).ready(function(){
mmm_reversal_z_index();
mmm_sticky_menu();
mmm_fullwidth_menu();
mmm_keep_open();
mmm_height_of_tabs_dropdown();
mmm_pushing_content();
mmm_mobile_double_tap_to_go();
mmm_mobile_toggle_menu();
mmm_smooth_scroll_to_anchor();
mmm_accessibility_actions();
jQuery(window).on('resize orientationchange', function(){
mmm_sticky_menu();
mmm_fullwidth_menu();
mmm_height_of_tabs_dropdown();
mmm_pushing_content();
mmm_smooth_scroll_to_anchor();
});
function mmm_reversal_z_index (){
var z_index=1000;
function_selector='.mega_main_menu';
jQuery(function_selector).unbind();
jQuery(function_selector).each(function(index,element){
z_index=z_index - 10;
jQuery(element).css({
'z-index':z_index
});
});
}
function mmm_mobile_toggle_menu (){
function_selector='.mobile_toggle';
jQuery(function_selector).unbind();
jQuery('.mobile_menu_active').removeClass('mobile_menu_active');
jQuery(function_selector).on('click', function(){
if(jQuery(this).parent().hasClass('mobile_menu_active')){
jQuery(this).parent().removeClass('mobile_menu_active');
jQuery(this).parent().parent().removeClass('mobile_menu_active');
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
}else{
jQuery(this).parent().addClass('mobile_menu_active');
jQuery(this).parent().parent().addClass('mobile_menu_active');
}});
}
function mmm_mobile_double_tap_to_go (){
function_selector='.mega_main_menu li:has(.mega_dropdown) > .item_link, .mega_main_menu li:has(.post_details) > .processed_image';
jQuery(function_selector).unbind();
if(/iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())){
var clicked_item=false;
jQuery(function_selector).on('click', function(index){
if(clicked_item!=this){
index.preventDefault();
if(jQuery(this).parent().parent().parent().hasClass('keep_open')){
}else{
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
}
jQuery(this).parent().addClass('keep_open');
clicked_item=this;
}});
}}
function mmm_sticky_menu (){
function_selector='.mega_main_menu > .menu_holder';
jQuery(function_selector).unbind();
jQuery(function_selector).each(function(index,element){
var stickyoffset=[];
var menu_inner_width=[];
var menu_inner=[];
var style_attr=[];
menu_inner[ index ]=jQuery(element).find('.menu_inner');
stickyoffset[ index ]=jQuery(element).data('stickyoffset') * 1;
if(jQuery(element).hasClass('coercive_styles-enable')){
rules_priority=' !important';
}else{
rules_priority='';
}
if(jQuery(element).attr('data-sticky')=='1'&&stickyoffset[ index ]==0){
menu_inner_width[ index ]=menu_inner[ index ].parents('.mega_main_menu').width();
menu_inner[ index ].attr('style' , 'width:' + menu_inner_width[ index ] + 'px;');
jQuery(element).addClass('sticky_container');
}else{
jQuery(window).on('scroll', function(){
if(jQuery(element).attr('data-sticky')=='1'){
scrollpath=jQuery(window).scrollTop();
if(scrollpath > stickyoffset[ index ]){
menu_inner_width[ index ]=menu_inner[ index ].parents('.mega_main_menu').width();
jQuery(element).find('.menu_inner').attr('style' , 'width:' + menu_inner_width[ index ] + 'px;');
jQuery(element).find('.mmm_fullwidth_container').attr('style' , 'left: 0px' + rules_priority + ';');
if(!jQuery(element).hasClass('sticky_container')){
jQuery(element).addClass('sticky_container');
}}else{
mmm_fullwidth_menu();
jQuery(element).removeClass('sticky_container');
style_attr[ index ]=jQuery(menu_inner[ index ]).attr('style');
if(typeof style_attr[ index ]!=='undefined'&&style_attr[ index ]!==false){
menu_inner[ index ].removeAttr('style');
}}
}else{
jQuery(element).removeClass('sticky_container');
}});
}});
}
function mmm_fullwidth_menu (){
function_selector='.mega_main_menu.direction-horizontal.fullwidth-enable';
jQuery(function_selector).unbind();
body_width=jQuery('body').width();
jQuery(function_selector).each(function(index, element){
offset_left=jQuery(element).offset().left;
if(jQuery(element).hasClass('coercive_styles-enable')){
rules_priority=' !important';
}else{
rules_priority='';
}
jQuery(element).find('.mmm_fullwidth_container').attr('style' , 'width:' + body_width + 'px' + rules_priority + ';left: -' + offset_left + 'px' + rules_priority + ';right:auto' + rules_priority + ';');
});
}
function mmm_height_of_tabs_dropdown (){
function_selector='.mega_main_menu .tabs_dropdown > .mega_dropdown > li';
jQuery(function_selector).unbind();
jQuery('.mega_main_menu .tabs_dropdown').on('hover mouseleave mouseenter', function(event){
my_el=jQuery(this).find('.mega_dropdown > li').first();
jQuery(my_el).parent().css({
"min-height": jQuery(my_el).find('.mega_dropdown').outerHeight(true)
});
jQuery(my_el).find(' > .mega_dropdown').css({
"min-height": jQuery(my_el).closest('.mega_dropdown').outerHeight(true)
});
jQuery(my_el).addClass('keep_open');
});
jQuery('.dropdowns_trigger-hover' + function_selector).on('hover mouseenter transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(event){
jQuery(this).parent().css({
"min-height": jQuery(this).find('.mega_dropdown').outerHeight(true)
});
jQuery(this).find(' > .mega_dropdown').css({
"min-height": jQuery(this).closest('.mega_dropdown').outerHeight(true)
});
});
jQuery('.dropdowns_trigger-hover' + function_selector).on('mouseleave ', function(event){
jQuery(this).parent().css({
"min-height": '0px'
});
jQuery(this).find(' > .mega_dropdown').css({
"min-height": '0px'
});
jQuery(this).removeClass('keep_open');
});
jQuery('.dropdowns_trigger-click' + function_selector).on('click', function(){
jQuery(this).parent().parent().find('.mega_dropdown').css({
"min-height": '0px'
});
jQuery(this).parent().css({
"min-height": jQuery(this).find(' > .mega_dropdown').outerHeight(true)
});
});
}
function mmm_pushing_content (){
function_selector='.mega_main_menu.direction-horizontal.pushing_content-enable';
jQuery(function_selector).unbind();
jQuery(function_selector).each(function(index, element){
if(jQuery(element).hasClass('coercive_styles-enable')){
rules_priority=' !important';
}else{
rules_priority='';
}
menu_holder_height=jQuery(element).find('.menu_holder').outerHeight(true);
click_item=false;
if(jQuery(element).hasClass('dropdowns_trigger-click')){
dropdowns_trigger='click';
if(jQuery('.mega_main_menu .nav_logo.mobile_menu_active').length){
}else{
jQuery('body').on(dropdowns_trigger, function(body_el){
menu_item_class=jQuery(body_el.target).closest('.menu-item').attr('class');
if(typeof jQuery(body_el.target).parents('.menu-item').attr('class')!='undefined'){
jQuery(element).css({ height: menu_holder_height + jQuery(this).find('.mega_main_menu_ul > li.keep_open > .mega_dropdown').outerHeight(true) + rules_priority });
if(click_item==menu_item_class){
jQuery(element).css({ height: menu_holder_height });
click_item=false;
}else{
click_item=jQuery(body_el.target).closest('.menu-item').attr('class');
}}else{
jQuery(element).css({ height: menu_holder_height });
click_item=false;
}});
}}else{
dropdowns_trigger='hover mouseleave';
if(jQuery('.mega_main_menu .nav_logo.mobile_menu_active').length){
}else{
jQuery(element).find('li').on(dropdowns_trigger, function(body_el){
jQuery(element).delay(200).css({ height: menu_holder_height + jQuery(element).find('.mega_main_menu_ul > li:hover > .mega_dropdown').outerHeight(true) + rules_priority });
});
}}
});
}
function mmm_smooth_scroll_to_anchor (){
function_selector='.mega_main_menu a[href*="#"]:not([href="#"])';
jQuery(function_selector).on('click', function(){
if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
var target=jQuery(this.hash);
target=target.length ? target:jQuery('[name=' + this.hash.slice(1) +'], [id=' + this.hash.slice(1) +']');
if(target.length){
jQuery('.mega_main_menu .current-menu-item').removeClass('current-menu-item');
jQuery(this).parent().addClass('current-menu-item');
jQuery('html,body').animate({
scrollTop: target.offset().top - 90
}, 600);
jQuery('.mega_main_menu .mobile_menu_active').removeClass('mobile_menu_active');
}}
});
};
function mmm_keep_open (){
/*
function_selector='.mega_main_menu .menu-item *';
jQuery(function_selector).unbind();
jQuery(function_selector).on('focus', function(index){
jQuery(this).parents('.menu-item, .post_item').addClass('keep_open');
})
jQuery(function_selector).on('hover', function(index){
jQuery(this).parents('.menu-item, .post_item').removeClass('keep_open');
})
jQuery(function_selector).on('blur', function(index){
jQuery(this).parents('.menu-item, .post_item').removeClass('keep_open');
})
*/
click_item_2=false;
/*
if(true!=/iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())){
}
*/
jQuery('body').on('click', function(body_el){
menu_item_class=jQuery(body_el.target).closest('.menu-item').attr('class');
if(( click_item_2!=menu_item_class)&&(typeof jQuery(body_el.target).closest('.mega_main_menu.dropdowns_trigger-click .menu-item:has(.mega_dropdown)').attr('class')!='undefined')){
if(jQuery(body_el.target).closest('.menu-item').find('.mega_dropdown').length){
body_el.preventDefault();
}
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
jQuery(body_el.target).parents('.menu-item').addClass('keep_open');
click_item_2=jQuery(body_el.target).closest('.menu-item').attr('class');
}else if(jQuery(body_el.target).is('.mega_main_menu .mega_dropdown form *:focus')){
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
jQuery(body_el.target).parents('.menu-item').addClass('keep_open');
}else if(( click_item_2==menu_item_class)){
jQuery(body_el.target).closest('.menu-item').removeClass('keep_open');
click_item_2=false;
}else{
jQuery('.menu-item').removeClass('keep_open');
click_item_2=false;
}});
}
function mmm_accessibility_actions (){
window.onkeydown=function(onkeydown_event){
if(jQuery(onkeydown_event.target).hasClass('item_link')){
if(onkeydown_event.keyCode==32){
onkeydown_event.preventDefault();
check_condition=jQuery(onkeydown_event.target).parent('.menu-item').hasClass('keep_open');
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
jQuery('.mega_main_menu [aria-expanded="true"]').attr('aria-expanded', false);
jQuery(onkeydown_event.target).parents('.menu-item').addClass('keep_open');
jQuery(onkeydown_event.target).attr('aria-expanded', true);
jQuery(onkeydown_event.target).siblings(".mega_dropdown").attr('aria-expanded', true);
if(check_condition){
jQuery(onkeydown_event.target).parent('.menu-item').removeClass('keep_open');
jQuery(onkeydown_event.target).attr('aria-expanded', false);
jQuery(onkeydown_event.target).siblings(".mega_dropdown").attr('aria-expanded', false);
}}
}else{
jQuery('.mega_main_menu .keep_open').removeClass('keep_open');
jQuery('.mega_main_menu [aria-expanded="true"]').attr('aria-expanded', false);
}};}});
})(jQuery);
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);
(function ($){
"use strict";
$(document).ready(function (){
$("#slideshow > p:gt(0)").hide();
setInterval(function(){
jQuery('#slideshow > p:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slideshow');
},  slidetext.speed);
});
})(jQuery);
(()=>{var e={1677:()=>{function e(e){for(var t=!!e.getAttribute("data-show-if"),r=t?e.getAttribute("data-show-if").split(":"):e.getAttribute("data-hide-if").split(":"),n=r[0],a=(r.length>1?r[1]:"*").split("|"),i=function(e,t){for(var r=[],n=e.querySelectorAll('input[name="'+t+'"],select[name="'+t+'"],textarea[name="'+t+'"]'),a=0;a<n.length;a++){var i=n[a];("radio"!==i.type&&"checkbox"!==i.type||i.checked)&&r.push(i.value)}return r}(function(e){for(var t=e;t.parentElement;)if("FORM"===(t=t.parentElement).tagName)return t;return null}(e),n),o=!1,s=0;s<i.length;s++){var c=i[s];if(o=a.indexOf(c)>-1||a.indexOf("*")>-1&&c.length>0)break}e.style.display=t?o?"":"none":o?"none":"";var u=e.querySelectorAll("input,select,textarea");[].forEach.call(u,(function(e){(o||t)&&e.getAttribute("data-was-required")&&(e.required=!0,e.removeAttribute("data-was-required")),o&&t||!e.required||(e.setAttribute("data-was-required","true"),e.required=!1)}))}function t(){var t=document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");[].forEach.call(t,e)}function r(t){if(t.target&&t.target.form&&!(t.target.form.className.indexOf("mc4wp-form")<0)){var r=t.target.form.querySelectorAll("[data-show-if],[data-hide-if]");[].forEach.call(r,e)}}document.addEventListener("keyup",r,!0),document.addEventListener("change",r,!0),document.addEventListener("mc4wp-refresh",t,!0),window.addEventListener("load",t),t()},2573:(e,t,r)=>{var n=r(7422),a=r(3409),i=function(e,t){this.id=e,this.element=t||document.createElement("form"),this.name=this.element.getAttribute("data-name")||"Form #"+this.id,this.errors=[],this.started=!1};i.prototype.setData=function(e){try{a(this.element,e)}catch(e){console.error(e)}},i.prototype.getData=function(){return n(this.element,{hash:!0,empty:!0})},i.prototype.getSerializedData=function(){return n(this.element,{hash:!1,empty:!0})},i.prototype.setResponse=function(e){this.element.querySelector(".mc4wp-response").innerHTML=e},i.prototype.reset=function(){this.setResponse(""),this.element.querySelector(".mc4wp-form-fields").style.display="",this.element.reset()},e.exports=i},8592:(e,t,r)=>{var n=r(2573),a=[],i={};function o(e,t){i[e]=i[e]||[],i[e].forEach((function(e){return e.apply(null,t)}))}function s(e,t){t=t||parseInt(e.getAttribute("data-id"))||0;var r=new n(t,e);return a.push(r),r}e.exports={get:function(e){e=parseInt(e);for(var t=0;t<a.length;t++)if(a[t].id===e)return a[t];return s(document.querySelector(".mc4wp-form-"+e),e)},getByElement:function(e){for(var t=e.form||e,r=0;r<a.length;r++)if(a[r].element===t)return a[r];return s(t)},on:function(e,t){i[e]=i[e]||[],i[e].push(t)},off:function(e,t){i[e]=i[e]||[],i[e]=i[e].filter((function(e){return e!==t}))},trigger:function(e,t){"submit"===e||e.indexOf(".submit")>0?o(e,t):window.setTimeout((function(){o(e,t)}),1)}}},7422:e=>{var t=/^(?:submit|button|image|reset|file)$/i,r=/^(?:input|select|textarea|keygen)/i,n=/(\[[^\[\]]*\])/g;function a(e,t,r){if(0===t.length)return r;var n=t.shift(),i=n.match(/^\[(.+?)\]$/);if("[]"===n)return e=e||[],Array.isArray(e)?e.push(a(null,t,r)):(e._values=e._values||[],e._values.push(a(null,t,r))),e;if(i){var o=i[1],s=+o;isNaN(s)?(e=e||{})[o]=a(e[o],t,r):(e=e||[])[s]=a(e[s],t,r)}else e[n]=a(e[n],t,r);return e}function i(e,t,r){if(t.match(n))a(e,function(e){var t=[],r=new RegExp(n),a=/^([^\[\]]*)/.exec(e);for(a[1]&&t.push(a[1]);null!==(a=r.exec(e));)t.push(a[1]);return t}(t),r);else{var i=e[t];i?(Array.isArray(i)||(e[t]=[i]),e[t].push(r)):e[t]=r}return e}function o(e,t,r){return r=r.replace(/(\r)?\n/g,"\r\n"),r=(r=encodeURIComponent(r)).replace(/%20/g,"+"),e+(e?"&":"")+encodeURIComponent(t)+"="+r}e.exports=function(e,n){"object"!=typeof n?n={hash:!!n}:void 0===n.hash&&(n.hash=!0);for(var a=n.hash?{}:"",s=n.serializer||(n.hash?i:o),c=e&&e.elements?e.elements:[],u=Object.create(null),l=0;l<c.length;++l){var f=c[l];if((n.disabled||!f.disabled)&&f.name&&r.test(f.nodeName)&&!t.test(f.type)){var d=f.name,m=f.value;if("checkbox"!==f.type&&"radio"!==f.type||f.checked||(m=void 0),n.empty){if("checkbox"!==f.type||f.checked||(m=""),"radio"===f.type&&(u[f.name]||f.checked?f.checked&&(u[f.name]=!0):u[f.name]=!1),null==m&&"radio"==f.type)continue}else if(!m)continue;if("select-multiple"!==f.type)a=s(a,d,m);else{m=[];for(var p=f.options,h=!1,v=0;v<p.length;++v){var g=p[v],y=n.empty&&!g.value,w=g.value||y;g.selected&&w&&(h=!0,a=n.hash&&"[]"!==d.slice(d.length-2)?s(a,d+"[]",g.value):s(a,d,g.value))}!h&&n.empty&&(a=s(a,d,""))}}}if(n.empty)for(var d in u)u[d]||(a=s(a,d,""));return a}},3409:e=>{e.exports&&(e.exports=function e(t,r,n){for(var a in r)if(r.hasOwnProperty(a)){var i=a,o=r[a];if(void 0===o&&(o=""),null===o&&(o=""),void 0!==n&&(i=n+"["+a+"]"),o.constructor===Array)i+="[]";else if("object"==typeof o){e(t,o,i);continue}var s=t.elements.namedItem(i);if(s)switch(s.type||s[0].type){default:s.value=o;break;case"radio":case"checkbox":for(var c=o.constructor===Array?o:[o],u=0;u<s.length;u++)s[u].checked=c.indexOf(s[u].value)>-1;break;case"select-multiple":c=o.constructor===Array?o:[o];for(var l=0;l<s.options.length;l++)s.options[l].selected=c.indexOf(s.options[l].value)>-1;break;case"select":case"select-one":s.value=o.toString()||o;break;case"date":s.value=new Date(o).toISOString().split("T")[0]}}})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(()=>{var e=window.mc4wp||{},t=r(8592);function n(e,r){t.trigger(r[0].id+"."+e,r),t.trigger(e,r)}function a(e,t){document.addEventListener(e,(function(e){if(e.target){var r=e.target,n=!1;"string"==typeof r.className&&(n=r.className.indexOf("mc4wp-form")>-1),n||"function"!=typeof r.matches||(n=r.matches(".mc4wp-form *")),n&&t.call(e,e)}}),!0)}if(r(1677),a("submit",(function(e){var r=t.getByElement(e.target);e.defaultPrevented||t.trigger(r.id+".submit",[r,e]),e.defaultPrevented||t.trigger("submit",[r,e])})),a("focus",(function(e){var r=t.getByElement(e.target);r.started||(n("started",[r,e]),r.started=!0)})),a("change",(function(e){n("change",[t.getByElement(e.target),e])})),e.listeners){for(var i=e.listeners,o=0;o<i.length;o++)t.on(i[o].event,i[o].callback);delete e.listeners}e.forms=t,window.mc4wp=e})()})();