/*! jQuery spinner - v0.1.5 - 2013-12-03
* https://github.com/xixilive/jquery-spinner
* Copyright (c) 2013 xixilive; Licensed MIT */
!function(a){"use strict";var b,c=function(b,d){return this.$el=b,this.options=a.extend({},c.rules.defaults,c.rules[d.rule]||{},d||{}),this.min=parseFloat(this.options.min)||0,this.max=parseFloat(this.options.max)||0,this.$el.on("focus.spinner",a.proxy(function(b){b.preventDefault(),a(document).trigger("mouseup.spinner"),this.oldValue=this.value()},this)).on("change.spinner",a.proxy(function(a){a.preventDefault(),this.value(this.$el.val())},this)).on("keydown.spinner",a.proxy(function(a){var b={38:"up",40:"down"}[a.which];b&&(a.preventDefault(),this.spin(b))},this)),this.oldValue=this.value(),this.value(this.$el.val()),this};c.rules={defaults:{min:null,max:null,step:1,precision:0},currency:{min:0,max:null,step:.01,precision:2},quantity:{min:1,max:999,step:1,precision:0},percent:{min:1,max:100,step:1,precision:0},month:{min:1,max:12,step:1,precision:0},day:{min:1,max:31,step:1,precision:0},hour:{min:0,max:23,step:1,precision:0},minute:{min:1,max:59,step:1,precision:0},second:{min:1,max:59,step:1,precision:0}},c.prototype={spin:function(a){switch(this.oldValue=this.value(),a){case"up":this.value(this.oldValue+Number(this.options.step,10));break;case"down":this.value(this.oldValue-Number(this.options.step,10))}},value:function(c){if(null===c||void 0===c)return this.numeric(this.$el.val());c=this.numeric(c);var e=this.validate(c);0!==e&&(c=-1===e?this.min:this.max),this.$el.val(c.toFixed(this.options.precision)),this.oldValue!==this.value()&&(this.$el.trigger("changing.spinner",[this.value(),this.oldValue]),clearTimeout(b),b=setTimeout(a.proxy(function(){this.$el.trigger("changed.spinner",[this.value(),this.oldValue])},this),d.delay))},numeric:function(a){return a=this.options.precision>0?parseFloat(a,10):parseInt(a,10),a||this.options.min||0},validate:function(a){return null!==this.options.min&&a<this.min?-1:null!==this.options.max&&a>this.max?1:0}};var d=function(b,d){this.$el=b,this.$spinning=a("[data-spin='spinner']",this.$el),0===this.$spinning.length&&(this.$spinning=a(":input[type='text']",this.$el)),this.spinning=new c(this.$spinning,this.$spinning.data()),this.$el.on("click.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)).on("mousedown.spinner","[data-spin='up'],[data-spin='down']",a.proxy(this.spin,this)),a(document).on("mouseup.spinner",a.proxy(function(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)},this)),d=a.extend({},d),d.delay&&this.delay(d.delay),d.changed&&this.changed(d.changed),d.changing&&this.changing(d.changing)};d.delay=500,d.prototype={constructor:d,spin:function(b){var c=a(b.currentTarget).data("spin");switch(b.type){case"click":b.preventDefault(),this.spinning.spin(c);break;case"mousedown":1===b.which&&(this.spinTimeout=setTimeout(a.proxy(this.beginSpin,this,c),300))}},delay:function(a){var b=parseInt(a,10);b>0&&(this.constructor.delay=b+100)},value:function(){return this.spinning.value()},changed:function(a){this.bindHandler("changed.spinner",a)},changing:function(a){this.bindHandler("changing.spinner",a)},bindHandler:function(b,c){a.isFunction(c)?this.$spinning.on(b,c):this.$spinning.off(b)},beginSpin:function(b){this.spinInterval=setInterval(a.proxy(this.spinning.spin,this.spinning,b),100)}},a.fn.spinner=function(b,c){return this.each(function(){var e=a(this),f=e.data("spinner");f||e.data("spinner",f=new d(e,a.extend({},e.data(),b))),("delay"===b||"changed"===b||"changing"===b)&&f[b](c),"spin"===b&&c&&f.spinning.spin(c)})},a(function(){a('[data-trigger="spinner"]').spinner()})}(jQuery);
;
!function(a){function b(a,b){if(g[a]){var d=c(this);return g[a].apply(d,b)}throw new Error("method '"+a+"()' does not exist for slider.")}function c(b){var c=a(b).data("slider");if(c&&c instanceof f)return c;throw new Error(e.callingContextNotSliderInstance)}function d(b){var c=a(this),d=c.data("slider"),e="object"==typeof b&&b;return d||c.data("slider",d=new f(this,a.extend({},a.fn.slider.defaults,e))),c}var e={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},f=function(b,c){var d=this.element=a(b).hide(),e=d.outerWidth(),f=!1,g=this.element.parent();g.hasClass("slider")===!0?(f=!0,this.picker=g):this.picker=a('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element),this.id=this.element.data("slider-id")||c.id,this.id&&(this.picker[0].id=this.id),"undefined"!=typeof Modernizr&&Modernizr.touch&&(this.touchCapable=!0);var h=this.element.data("slider-tooltip")||c.tooltip;switch(this.tooltip=this.picker.find(".tooltip"),this.tooltipInner=this.tooltip.find("div.tooltip-inner"),this.orientation=this.element.data("slider-orientation")||c.orientation,this.orientation){case"vertical":this.picker.addClass("slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight",this.tooltip.addClass("right")[0].style.left="100%";break;default:this.picker.addClass("slider-horizontal").css("width",e),this.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth",this.tooltip.addClass("top")[0].style.top=-this.tooltip.outerHeight()-14+"px"}["min","max","step","value"].forEach(function(a){this[a]="undefined"!=typeof d.data("slider-"+a)?d.data("slider-"+a):"undefined"!=typeof c[a]?c[a]:"undefined"!=typeof d.prop(a)?d.prop(a):0},this),this.value instanceof Array&&(this.range=!0),this.selection=this.element.data("slider-selection")||c.selection,this.selectionEl=this.picker.find(".slider-selection"),"none"===this.selection&&this.selectionEl.addClass("hide"),this.selectionElStyle=this.selectionEl[0].style,this.handle1=this.picker.find(".slider-handle:first"),this.handle1Stype=this.handle1[0].style,this.handle2=this.picker.find(".slider-handle:last"),this.handle2Stype=this.handle2[0].style;var i=this.element.data("slider-handle")||c.handle;switch(i){case"round":this.handle1.addClass("round"),this.handle2.addClass("round");break;case"triangle":this.handle1.addClass("triangle"),this.handle2.addClass("triangle")}if(this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos],this.formater=c.formater,this.reversed=this.element.data("slider-reversed")||c.reversed,this.layout(),this.touchCapable?this.picker.on({touchstart:a.proxy(this.mousedown,this)}):this.picker.on({mousedown:a.proxy(this.mousedown,this)}),"hide"===h?this.tooltip.addClass("hide"):"always"===h?(this.showTooltip(),this.alwaysShowTooltip=!0):this.picker.on({mouseenter:a.proxy(this.showTooltip,this),mouseleave:a.proxy(this.hideTooltip,this)}),f===!0){var j=this.getValue(),k=this.calculateValue();this.element.trigger({type:"slide",value:k}).data("value",k).prop("value",k),j!==k&&this.element.trigger({type:"slideChange","new":k,old:j}).data("value",k).prop("value",k)}this.enabled=c.enabled&&(void 0===this.element.data("slider-enabled")||this.element.data("slider-enabled")===!0),this.enabled||this.disable()};f.prototype={constructor:f,over:!1,inDrag:!1,showTooltip:function(){this.tooltip.addClass("in"),this.over=!0},hideTooltip:function(){this.inDrag===!1&&this.alwaysShowTooltip!==!0&&this.tooltip.removeClass("in"),this.over=!1},layout:function(){var a;a=this.reversed?[100-this.percentage[0],this.percentage[1]]:[this.percentage[0],this.percentage[1]],this.handle1Stype[this.stylePos]=a[0]+"%",this.handle2Stype[this.stylePos]=a[1]+"%","vertical"===this.orientation?(this.selectionElStyle.top=Math.min(a[0],a[1])+"%",this.selectionElStyle.height=Math.abs(a[0]-a[1])+"%"):(this.selectionElStyle.left=Math.min(a[0],a[1])+"%",this.selectionElStyle.width=Math.abs(a[0]-a[1])+"%"),this.range?(this.tooltipInner.text(this.formater(this.value[0])+" : "+this.formater(this.value[1])),this.tooltip[0].style[this.stylePos]=this.size*(a[0]+(a[1]-a[0])/2)/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px"):(this.tooltipInner.text(this.formater(this.value[0])),this.tooltip[0].style[this.stylePos]=this.size*a[0]/100-("vertical"===this.orientation?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+"px")},mousedown:function(b){if(!this.isEnabled())return!1;this.touchCapable&&"touchstart"===b.type&&(b=b.originalEvent),this.offset=this.picker.offset(),this.size=this.picker[0][this.sizePos];var c=this.getPercentage(b);if(this.range){var d=Math.abs(this.percentage[0]-c),e=Math.abs(this.percentage[1]-c);this.dragged=e>d?0:1}else this.dragged=0;this.percentage[this.dragged]=this.reversed?100-c:c,this.layout(),this.touchCapable?a(document).on({touchmove:a.proxy(this.mousemove,this),touchend:a.proxy(this.mouseup,this)}):a(document).on({mousemove:a.proxy(this.mousemove,this),mouseup:a.proxy(this.mouseup,this)}),this.inDrag=!0;var f=this.calculateValue();return this.setValue(f),this.element.trigger({type:"slideStart",value:f}).trigger({type:"slide",value:f}),!1},mousemove:function(a){if(!this.isEnabled())return!1;this.touchCapable&&"touchmove"===a.type&&(a=a.originalEvent);var b=this.getPercentage(a);this.range&&(0===this.dragged&&this.percentage[1]<b?(this.percentage[0]=this.percentage[1],this.dragged=1):1===this.dragged&&this.percentage[0]>b&&(this.percentage[1]=this.percentage[0],this.dragged=0)),this.percentage[this.dragged]=this.reversed?100-b:b,this.layout();var c=this.calculateValue();return this.setValue(c),this.element.trigger({type:"slide",value:c}).data("value",c).prop("value",c),!1},mouseup:function(){if(!this.isEnabled())return!1;this.touchCapable?a(document).off({touchmove:this.mousemove,touchend:this.mouseup}):a(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),this.inDrag=!1,this.over===!1&&this.hideTooltip();var b=this.calculateValue();return this.layout(),this.element.data("value",b).prop("value",b).trigger({type:"slideStop",value:b}),!1},calculateValue:function(){var a;return this.range?(a=[Math.max(this.min,this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step),Math.min(this.max,this.min+Math.round(this.diff*this.percentage[1]/100/this.step)*this.step)],this.value=a):(a=this.min+Math.round(this.diff*this.percentage[0]/100/this.step)*this.step,a<this.min?a=this.min:a>this.max&&(a=this.max),a=parseFloat(a),this.value=[a,this.value[1]]),a},getPercentage:function(a){this.touchCapable&&(a=a.touches[0]);var b=100*(a[this.mousePos]-this.offset[this.stylePos])/this.size;return b=Math.round(b/this.percentage[2])*this.percentage[2],Math.max(0,Math.min(100,b))},getValue:function(){return this.range?this.value:this.value[0]},setValue:function(a){this.value=this.validateInputValue(a),this.range?(this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0])),this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]))):(this.value=[Math.max(this.min,Math.min(this.max,this.value))],this.handle2.addClass("hide"),this.value[1]="after"===this.selection?this.max:this.min),this.diff=this.max-this.min,this.percentage=[100*(this.value[0]-this.min)/this.diff,100*(this.value[1]-this.min)/this.diff,100*this.step/this.diff],this.layout()},validateInputValue:function(a){if("number"==typeof a)return a;if(a instanceof Array)return a.forEach(function(a){if("number"!=typeof a)throw new Error(e.formatInvalidInputErrorMsg(a))}),a;throw new Error(e.formatInvalidInputErrorMsg(a))},destroy:function(){this.element.show().insertBefore(this.picker),this.picker.remove(),a(this.element).removeData("slider"),a(this.element).off()},disable:function(){this.enabled=!1,this.picker.addClass("slider-disabled"),this.element.trigger("slideDisabled")},enable:function(){this.enabled=!0,this.picker.removeClass("slider-disabled"),this.element.trigger("slideEnabled")},toggle:function(){this.enabled?this.disable():this.enable()},isEnabled:function(){return this.enabled}};var g={getValue:f.prototype.getValue,setValue:f.prototype.setValue,destroy:f.prototype.destroy,disable:f.prototype.disable,enable:f.prototype.enable,toggle:f.prototype.toggle,isEnabled:f.prototype.isEnabled};a.fn.slider=function(a){if("string"==typeof a){var c=Array.prototype.slice.call(arguments,1);return b.call(this,a,c)}return d.call(this,a)},a.fn.slider.defaults={min:0,max:10,step:1,orientation:"horizontal",value:5,selection:"before",tooltip:"show",handle:"round",reversed:!1,enabled:!0,formater:function(a){return a}},a.fn.slider.Constructor=f}(window.jQuery);
;
/*!
 * jQuery Steps v1.0.7 - 05/07/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e),a.triggerHandler("stepChanged",[d,e])):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus()})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=p(b,d.currentIndex);if(!c.enableContentCache||!e.contentLoaded)switch(r($,e.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+e.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var f=k(b,d.currentIndex)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:e.contentUrl,cache:!1}).done(function(a){f.empty().html(a)._aria("busy","false").data("loaded","1")})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"finish":h(d,g);break;case"next":s(d,f,g);break;case"previous":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#finish']").parent(),e=a.find(".actions a[href$='#next']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#previous']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("previous",b.labels.previous)),f+=e.format("next",b.labels.next),b.enableFinishButton&&(f+=e.format("finish",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f){var g=b.find(".content > .body"),h=r(ab,c.transitionEffect),i=c.transitionEffectSpeed,j=g.eq(e),k=g.eq(f);switch(h){case ab.fade:case ab.slide:var l=h===ab.fade?"fadeOut":"slideUp",m=h===ab.fade?"fadeIn":"slideDown";d.transitionElement=j,k[l](i,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[m](i,function(){a(this)._showAria()}),c.transitionElement=null)}).promise();break;case ab.slideLeft:var o=k.outerWidth(!0),p=e>f?-o:o,q=e>f?o:-o;k.animate({left:p},i,function(){a(this)._showAria(!1)}).promise(),j.css("left",q+"px")._showAria().animate({left:0},i).promise();break;default:k._showAria(!1),j._showAria()}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);
;
!function(a){a(["jquery"],function(a){return function(){function b(a,b,c){return o({type:u.error,iconClass:p().iconClasses.error,message:a,optionsOverride:c,title:b})}function c(b,c){return b||(b=p()),r=a("#"+b.containerId),r.length?r:(c&&(r=l(b)),r)}function d(a,b,c){return o({type:u.info,iconClass:p().iconClasses.info,message:a,optionsOverride:c,title:b})}function e(a){s=a}function f(a,b,c){return o({type:u.success,iconClass:p().iconClasses.success,message:a,optionsOverride:c,title:b})}function g(a,b,c){return o({type:u.warning,iconClass:p().iconClasses.warning,message:a,optionsOverride:c,title:b})}function h(a){var b=p();r||c(b),k(a,b)||j(b)}function i(b){var d=p();return r||c(d),b&&0===a(":focus",b).length?void q(b):void(r.children().length&&r.remove())}function j(b){for(var c=r.children(),d=c.length-1;d>=0;d--)k(a(c[d]),b)}function k(b,c){return b&&0===a(":focus",b).length?(b[c.hideMethod]({duration:c.hideDuration,easing:c.hideEasing,complete:function(){q(b)}}),!0):!1}function l(b){return r=a("<div/>").attr("id",b.containerId).addClass(b.positionClass).attr("aria-live","polite").attr("role","alert"),r.appendTo(a(b.target)),r}function m(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0}}function n(a){s&&s(a)}function o(b){function d(b){return!a(":focus",j).length||b?j[g.hideMethod]({duration:g.hideDuration,easing:g.hideEasing,complete:function(){q(j),g.onHidden&&"hidden"!==o.state&&g.onHidden(),o.state="hidden",o.endTime=new Date,n(o)}}):void 0}function e(){(g.timeOut>0||g.extendedTimeOut>0)&&(i=setTimeout(d,g.extendedTimeOut))}function f(){clearTimeout(i),j.stop(!0,!0)[g.showMethod]({duration:g.showDuration,easing:g.showEasing})}var g=p(),h=b.iconClass||g.iconClass;"undefined"!=typeof b.optionsOverride&&(g=a.extend(g,b.optionsOverride),h=b.optionsOverride.iconClass||h),t++,r=c(g,!0);var i=null,j=a("<div/>"),k=a("<div/>"),l=a("<div/>"),m=a(g.closeHtml),o={toastId:t,state:"visible",startTime:new Date,options:g,map:b};return b.iconClass&&j.addClass(g.toastClass).addClass(h),b.title&&(k.append(b.title).addClass(g.titleClass),j.append(k)),b.message&&(l.append(b.message).addClass(g.messageClass),j.append(l)),g.closeButton&&(m.addClass("toast-close-button").attr("role","button"),j.prepend(m)),j.hide(),g.newestOnTop?r.prepend(j):r.append(j),j[g.showMethod]({duration:g.showDuration,easing:g.showEasing,complete:g.onShown}),g.timeOut>0&&(i=setTimeout(d,g.timeOut)),j.hover(f,e),!g.onclick&&g.tapToDismiss&&j.click(d),g.closeButton&&m&&m.click(function(a){a.stopPropagation?a.stopPropagation():void 0!==a.cancelBubble&&a.cancelBubble!==!0&&(a.cancelBubble=!0),d(!0)}),g.onclick&&j.click(function(){g.onclick(),d()}),n(o),g.debug&&console&&console.log(o),j}function p(){return a.extend({},m(),v.options)}function q(a){r||(r=c()),a.is(":visible")||(a.remove(),a=null,0===r.children().length&&r.remove())}var r,s,t=0,u={error:"error",info:"info",success:"success",warning:"warning"},v={clear:h,remove:i,error:b,getContainer:c,info:d,options:{},subscribe:e,success:f,version:"2.0.3",warning:g};return v}()})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):window.toastr=b(window.jQuery)});
;



/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder = Holder || {};
(function (app, win) {
var system_config = {
	use_svg: false,
	use_canvas: false,
	use_fallback: false
};
var instance_config = {};
var preempted = false;
canvas = document.createElement('canvas');
var dpr = 1, bsr = 1;
var resizable_images = [];

if (!canvas.getContext) {
	system_config.use_fallback = true;
} else {
	if (canvas.toDataURL("image/png")
		.indexOf("data:image/png") < 0) {
		//Android doesn't support data URI
		system_config.use_fallback = true;
	} else {
		var ctx = canvas.getContext("2d");
	}
}

if(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect){
	system_config.use_svg = true;
	system_config.use_canvas = false;
}

if(!system_config.use_fallback){
    dpr = window.devicePixelRatio || 1,
    bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
}

var ratio = dpr / bsr;

var settings = {
	domain: "holder.js",
	images: "img",
	bgnodes: ".holderjs",
	themes: {
		"gray": {
			background: "#eee",
			foreground: "#aaa",
			size: 12
		},
		"social": {
			background: "#3a5a97",
			foreground: "#fff",
			size: 12
		},
		"industrial": {
			background: "#434A52",
			foreground: "#C2F200",
			size: 12
		},
		"sky": {
			background: "#0D8FDB",
			foreground: "#fff",
			size: 12
		},
		"vine": {
			background: "#39DBAC",
			foreground: "#1E292C",
			size: 12
		},
		"lava": {
			background: "#F8591A",
			foreground: "#1C2846",
			size: 12
		}
	},
	stylesheet: ""
};


//github.com/davidchambers/Base64.js
(function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,n,a=0,i=r,c="";e.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-8*(a%1))){if(n=e.charCodeAt(a+=.75),n>255)throw new t("'btoa' failed");o=o<<8|n}return c}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var o,n,a=0,i=0,c="";n=e.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(6&-2*a)):0)n=r.indexOf(n);return c})})();

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}}

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a,b){var a=a.match(/^(\W)?(.*)/),b=b||document,c=b["getElement"+(a[1]?"#"==a[1]?"ById":"sByClassName":"sByTagName")],d=c.call(b,a[2]),e=[];return null!==d&&(e=d.length||0===d.length?d:[d]),e}



//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
    /*jshint -W001, -W103 */
    Object.prototype.hasOwnProperty = function(prop) {
		var proto = this.__proto__ || this.constructor.prototype;
		return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
	}
    /*jshint +W001, +W103 */

})(Holder, window);


/*!ngTagsInput v2.0.1 License: MIT */
!function(){"use strict";function a(){var a={};return{on:function(b,c){return b.split(" ").forEach(function(b){a[b]||(a[b]=[]),a[b].push(c)}),this},trigger:function(b,c){return angular.forEach(a[b],function(a){a.call(null,c)}),this}}}function b(a,b){return a=a||[],a.length>0&&!angular.isObject(a[0])&&a.forEach(function(c,d){a[d]={},a[d][b]=c}),a}function c(a,b,c){for(var d=null,e=0;e<a.length;e++)if(a[e][c].toLowerCase()===b[c].toLowerCase()){d=a[e];break}return d}function d(a,b,c){var d=b.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return a.replace(new RegExp(d,"gi"),c)}var e={backspace:8,tab:9,enter:13,escape:27,space:32,up:38,down:40,comma:188},f=angular.module("ngTagsInput",[]);f.directive("tagsInput",["$timeout","$document","tagsInputConfig",function(d,f,g){function h(a,b){var d,e,f,g={};return d=function(b){return b[a.displayProperty]},e=function(b,c){b[a.displayProperty]=c},f=function(b){var e=d(b);return e.length>=a.minLength&&e.length<=(a.maxLength||e.length)&&a.allowedTagsPattern.test(e)&&!c(g.items,b,a.displayProperty)},g.items=[],g.addText=function(a){var b={};return e(b,a),g.add(b)},g.add=function(c){var h=d(c).trim();return a.replaceSpacesWithDashes&&(h=h.replace(/\s/g,"-")),e(c,h),f(c)?(g.items.push(c),b.trigger("tag-added",{$tag:c})):b.trigger("invalid-tag",{$tag:c}),c},g.remove=function(a){var c=g.items.splice(a,1)[0];return b.trigger("tag-removed",{$tag:c}),c},g.removeLast=function(){var b,c=g.items.length-1;return a.enableEditingLastTag||g.selected?(g.selected=null,b=g.remove(c)):g.selected||(g.selected=g.items[c]),b},g}return{restrict:"E",require:"ngModel",scope:{tags:"=ngModel",onTagAdded:"&",onTagRemoved:"&"},replace:!1,transclude:!0,templateUrl:"ngTagsInput/tags-input.html",controller:["$scope","$attrs","$element",function(b,c,d){g.load("tagsInput",b,c,{placeholder:[String,"Add a tag"],tabindex:[Number],removeTagSymbol:[String,String.fromCharCode(215)],replaceSpacesWithDashes:[Boolean,!0],minLength:[Number,3],maxLength:[Number],addOnEnter:[Boolean,!0],addOnSpace:[Boolean,!1],addOnComma:[Boolean,!0],addOnBlur:[Boolean,!0],allowedTagsPattern:[RegExp,/.+/],enableEditingLastTag:[Boolean,!1],minTags:[Number],maxTags:[Number],displayProperty:[String,"text"],allowLeftoverText:[Boolean,!1],addFromAutocompleteOnly:[Boolean,!1]}),b.events=new a,b.tagList=new h(b.options,b.events),this.registerAutocomplete=function(){var a=d.find("input");return a.on("keydown",function(a){b.events.trigger("input-keydown",a)}),{addTag:function(a){return b.tagList.add(a)},focusInput:function(){a[0].focus()},getTags:function(){return b.tags},getOptions:function(){return b.options},on:function(a,c){return b.events.on(a,c),this}}}}],link:function(a,c,g,h){var i=[e.enter,e.comma,e.space,e.backspace],j=a.tagList,k=a.events,l=a.options,m=c.find("input");k.on("tag-added",a.onTagAdded).on("tag-removed",a.onTagRemoved).on("tag-added",function(){a.newTag.text=""}).on("tag-added tag-removed",function(){h.$setViewValue(a.tags)}).on("invalid-tag",function(){a.newTag.invalid=!0}).on("input-change",function(){j.selected=null,a.newTag.invalid=null}).on("input-focus",function(){h.$setValidity("leftoverText",!0)}).on("input-blur",function(){l.addFromAutocompleteOnly||(l.addOnBlur&&j.addText(a.newTag.text),h.$setValidity("leftoverText",l.allowLeftoverText?!0:!a.newTag.text))}),a.newTag={text:"",invalid:null},a.getDisplayText=function(a){return a[l.displayProperty].trim()},a.track=function(a){return a[l.displayProperty]},a.newTagChange=function(){k.trigger("input-change",a.newTag.text)},a.$watch("tags",function(c){a.tags=b(c,l.displayProperty),j.items=a.tags}),a.$watch("tags.length",function(a){h.$setValidity("maxTags",angular.isUndefined(l.maxTags)||a<=l.maxTags),h.$setValidity("minTags",angular.isUndefined(l.minTags)||a>=l.minTags)}),m.on("keydown",function(b){if(!b.isImmediatePropagationStopped||!b.isImmediatePropagationStopped()){var c,d,f=b.keyCode,g=b.shiftKey||b.altKey||b.ctrlKey||b.metaKey,h={};if(!g&&-1!==i.indexOf(f))if(h[e.enter]=l.addOnEnter,h[e.comma]=l.addOnComma,h[e.space]=l.addOnSpace,c=!l.addFromAutocompleteOnly&&h[f],d=!c&&f===e.backspace&&0===a.newTag.text.length,c)j.addText(a.newTag.text),a.$apply(),b.preventDefault();else if(d){var k=j.removeLast();k&&l.enableEditingLastTag&&(a.newTag.text=k[l.displayProperty]),a.$apply(),b.preventDefault()}}}).on("focus",function(){a.hasFocus||(a.hasFocus=!0,k.trigger("input-focus"),a.$apply())}).on("blur",function(){d(function(){var b=f.prop("activeElement"),d=b===m[0],e=c[0].contains(b);(d||!e)&&(a.hasFocus=!1,k.trigger("input-blur"))})}),c.find("div").on("click",function(){m[0].focus()})}}}]),f.directive("autoComplete",["$document","$timeout","$sce","tagsInputConfig",function(a,f,g,h){function i(a,d){var e,g,h,i={};return g=function(a,b){return a.filter(function(a){return!c(b,a,d.tagsInput.displayProperty)})},i.reset=function(){h=null,i.items=[],i.visible=!1,i.index=-1,i.selected=null,i.query=null,f.cancel(e)},i.show=function(){i.selected=null,i.visible=!0},i.load=function(c,j){return c.length<d.minLength?void i.reset():(f.cancel(e),void(e=f(function(){i.query=c;var e=a({$query:c});h=e,e.then(function(a){e===h&&(a=b(a.data||a,d.tagsInput.displayProperty),a=g(a,j),i.items=a.slice(0,d.maxResultsToShow),i.items.length>0?i.show():i.reset())})},d.debounceDelay,!1)))},i.selectNext=function(){i.select(++i.index)},i.selectPrior=function(){i.select(--i.index)},i.select=function(a){0>a?a=i.items.length-1:a>=i.items.length&&(a=0),i.index=a,i.selected=i.items[a]},i.reset(),i}function j(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}return{restrict:"E",require:"^tagsInput",scope:{source:"&"},templateUrl:"ngTagsInput/auto-complete.html",link:function(b,c,f,k){var l,m,n,o,p,q=[e.enter,e.tab,e.escape,e.up,e.down];h.load("autoComplete",b,f,{debounceDelay:[Number,100],minLength:[Number,3],highlightMatchedText:[Boolean,!0],maxResultsToShow:[Number,10]}),n=b.options,m=k.registerAutocomplete(),n.tagsInput=m.getOptions(),l=new i(b.source,n),o=function(a){return a[n.tagsInput.displayProperty]},b.suggestionList=l,b.addSuggestion=function(){var a=!1;return l.selected&&(m.addTag(l.selected),l.reset(),m.focusInput(),a=!0),a},b.highlight=function(a){var b=o(a);return b=j(b),n.highlightMatchedText&&(b=d(b,j(l.query),"<em>$&</em>")),g.trustAsHtml(b)},b.track=function(a){return o(a)},m.on("tag-added invalid-tag",function(){l.reset()}).on("input-change",function(a){a?l.load(a,m.getTags()):l.reset()}).on("input-keydown",function(a){var c,d;if(-1!==q.indexOf(a.keyCode)){var f=!1;a.stopImmediatePropagation=function(){f=!0,a.stopPropagation()},a.isImmediatePropagationStopped=function(){return f},l.visible&&(c=a.keyCode,d=!1,c===e.down?(l.selectNext(),d=!0):c===e.up?(l.selectPrior(),d=!0):c===e.escape?(l.reset(),d=!0):(c===e.enter||c===e.tab)&&(d=b.addSuggestion()),d&&(a.preventDefault(),a.stopImmediatePropagation(),b.$apply()))}}).on("input-blur",function(){l.reset()}),p=function(){l.visible&&(l.reset(),b.$apply())},a.on("click",p),b.$on("$destroy",function(){a.off("click",p)})}}}]),f.directive("tiTranscludeAppend",function(){return function(a,b,c,d,e){e(function(a){b.append(a)})}}),f.directive("tiAutosize",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e,f,g=3;e=angular.element('<span class="input"></span>'),e.css("display","none").css("visibility","hidden").css("width","auto").css("white-space","pre"),b.parent().append(e),f=function(a){var d,f=a;return angular.isString(f)&&0===f.length&&(f=c.placeholder),f&&(e.text(f),e.css("display",""),d=e.prop("offsetWidth"),e.css("display","none")),b.css("width",d?d+g+"px":""),a},d.$parsers.unshift(f),d.$formatters.unshift(f),c.$observe("placeholder",function(a){d.$modelValue||f(a)})}}}),f.provider("tagsInputConfig",function(){var a={},b={};this.setDefaults=function(b,c){return a[b]=c,this},this.setActiveInterpolation=function(a,c){return b[a]=c,this},this.$get=["$interpolate",function(c){var d={};return d[String]=function(a){return a},d[Number]=function(a){return parseInt(a,10)},d[Boolean]=function(a){return"true"===a.toLowerCase()},d[RegExp]=function(a){return new RegExp(a)},{load:function(e,f,g,h){f.options={},angular.forEach(h,function(h,i){var j,k,l,m,n;j=h[0],k=h[1],l=d[j],m=function(){var b=a[e]&&a[e][i];return angular.isDefined(b)?b:k},n=function(a){f.options[i]=a?l(a):m()},b[e]&&b[e][i]?g.$observe(i,function(a){n(a)}):n(g[i]&&c(g[i])(f.$parent))})}}}]}),f.run(["$templateCache",function(a){a.put("ngTagsInput/tags-input.html",'<div class="host" tabindex="-1" ti-transclude-append=""><div class="tags" ng-class="{focused: hasFocus}"><ul class="tag-list"><li class="tag-item" ng-repeat="tag in tagList.items track by track(tag)" ng-class="{ selected: tag == tagList.selected }"><span>{{getDisplayText(tag)}}</span> <a class="remove-button" ng-click="tagList.remove($index)">{{options.removeTagSymbol}}</a></li></ul><input class="input" placeholder="{{options.placeholder}}" tabindex="{{options.tabindex}}" ng-model="newTag.text" ng-change="newTagChange()" ng-trim="false" ng-class="{\'invalid-tag\': newTag.invalid}" ti-autosize=""></div></div>'),a.put("ngTagsInput/auto-complete.html",'<div class="autocomplete" ng-show="suggestionList.visible"><ul class="suggestion-list"><li class="suggestion-item" ng-repeat="item in suggestionList.items track by track(item)" ng-class="{selected: item == suggestionList.selected}" ng-click="addSuggestion()" ng-mouseenter="suggestionList.select($index)" ng-bind-html="highlight(item)"></li></ul></div>')}])}();

/*
 Bootstrap - File Input
 ======================

 This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

 Converts all
 <input type="file">
 into Bootstrap buttons
 <a class="btn">Browse</a>

 */
(function($) {

    $.fn.bootstrapFileInput = function() {

        this.each(function(i,elem){

            var $elem = $(elem);

            // Maybe some fields don't need to be standardized.
            if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
                return;
            }

            // Set the word to be displayed on the button
            var buttonWord = 'Browse';

            if (typeof $elem.attr('title') != 'undefined') {
                buttonWord = $elem.attr('title');
            }

            var className = '';

            if (!!$elem.attr('class')) {
                className = ' ' + $elem.attr('class');
            }

            // Now we're going to wrap that input field with a Bootstrap button.
            // The input will actually still be there, it will just be float above and transparent (done with the CSS).
            $elem.wrap('<a class="file-input-wrapper btn btn-default ' + className + '"></a>').parent().prepend($('<span></span>').html(buttonWord));
        })

            // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
            // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
            .promise().done( function(){

                // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
                // This gives us the pointer cursor that FF denies us
                $('.file-input-wrapper').mousemove(function(cursor) {

                    var input, wrapper,
                        wrapperX, wrapperY,
                        inputWidth, inputHeight,
                        cursorX, cursorY;

                    // This wrapper element (the button surround this file input)
                    wrapper = $(this);
                    // The invisible file input element
                    input = wrapper.find("input");
                    // The left-most position of the wrapper
                    wrapperX = wrapper.offset().left;
                    // The top-most position of the wrapper
                    wrapperY = wrapper.offset().top;
                    // The with of the browsers input field
                    inputWidth= input.width();
                    // The height of the browsers input field
                    inputHeight= input.height();
                    //The position of the cursor in the wrapper
                    cursorX = cursor.pageX;
                    cursorY = cursor.pageY;

                    //The positions we are to move the invisible file input
                    // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
                    moveInputX = cursorX - wrapperX - inputWidth + 20;
                    // Slides the invisible input Browse button to be positioned middle under the cursor
                    moveInputY = cursorY- wrapperY - (inputHeight/2);

                    // Apply the positioning styles to actually move the invisible file input
                    input.css({
                        left:moveInputX,
                        top:moveInputY
                    });
                });

                $('body').on('change', '.file-input-wrapper input[type=file]', function(){

                    var fileName;
                    fileName = $(this).val();

                    // Remove any previous file names
                    $(this).parent().next('.file-input-name').remove();
                    if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
                        fileName = $(this)[0].files.length+' files';
                        //$(this).parent().after('<span class="file-input-name">'+$(this)[0].files.length+' files</span>');
                    }
                    else {
                        // var fakepath = 'C:\\fakepath\\';
                        // fileName = $(this).val().replace('C:\\fakepath\\','');
                        fileName = fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
                    }

                    var selectedFileNamePlacement = $(this).data('filename-placement') || 'outside';
                    if (selectedFileNamePlacement === 'inside') {
                        // Print the fileName inside
                        $(this).siblings('span').html(fileName);
                        $(this).attr('title', fileName);
                    } else if (selectedFileNamePlacement === 'outside') {
                        // Print the fileName aside (right after the the button)
                        $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
                    } else {
                        console.log('Error in bootstrap-file-input plugin : unknown placement [' + selectedFileNamePlacement + '] for selected filename');
                    }
                });

            });

    };

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
    var cssHtml = '<style>'+
        '.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }'+
        '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
        '.file-input-name { margin-left: 8px; }'+
        '</style>';
    $('link[rel=stylesheet]').eq(0).before(cssHtml);

})(jQuery);