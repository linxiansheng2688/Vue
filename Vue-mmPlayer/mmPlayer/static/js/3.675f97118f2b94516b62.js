webpackJsonp([3],{EoE7:function(t,e){},Wix1:function(t,e){},ilYB:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),r=s.n(i),n=s("gyMJ"),c=s("vgQg"),u={initAudio:function(t){var e=t.audioEle;e.onprogress=function(){try{if(e.buffered.length>0){var s,i=t.currentMusic.duration;e.buffered.end(0),s=e.buffered.end(0)>i?i:e.buffered.end(0),t.currentProgress=s/i}}catch(t){}},e.onplay=function(){var e=void 0;clearTimeout(e),e=setTimeout(function(){t.musicReady=!0},100)},e.ontimeupdate=function(){t.currentTime=e.currentTime},e.onended=function(){t.mode===c.e.loop?t.loop():t.next()},e.onerror=function(){t.$mmToast("当前音乐不可播放，已自动播放下一曲"),t.next()},e.onstalled=function(){e.load(),t.setPlaying(!1);var s=void 0;clearTimeout(s),s=setTimeout(function(){t.setPlaying(!0)},10)},e.oncanplay=function(){0!==t.historyList.length&&t.currentMusic.id===t.historyList[0].id||t.setHistory(t.currentMusic)}}},o=s("LOkV"),a=s("NYxO"),l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-btn"},[s("router-link",{attrs:{to:"/music/playlist",tag:"span"}},[t._v("正在播放")]),t._v(" "),s("router-link",{attrs:{to:"/music/toplist",tag:"span"}},[t._v("推荐")]),t._v(" "),s("router-link",{attrs:{to:"/music/search",tag:"span"}},[t._v("搜索")]),t._v(" "),s("router-link",{staticClass:"none-414",attrs:{to:"/music/userlist",tag:"span"}},[t._v("我的歌单")]),t._v(" "),s("router-link",{attrs:{to:"/music/historylist",tag:"span"}},[t._v("我听过的")])],1)},staticRenderFns:[]};var A=s("VU/8")({},l,!1,function(t){s("q3bf")},"data-v-9049a18a",null).exports,m={name:"lyric",props:{lyric:{type:Array,default:[]},nolyric:{type:Boolean,default:!1},lyricIndex:{type:Number,default:0}},data:function(){return{top:0}},computed:r()({musicPicUrl:function(){return this.currentMusic.id?this.currentMusic.image+"?param=200y200":s("qcF+")},lyricTop:function(){return"transform :translate3d(0, "+-34*(this.lyricIndex-this.top)+"px, 0)"}},Object(a.c)(["currentMusic"])),mounted:function(){var t=this;window.addEventListener("resize",function(){clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){return t.clacTop()},60)}),this.$nextTick(function(){return t.clacTop()})},methods:{clacTop:function(){var t=this.$refs.musicLyric.offsetHeight;this.top=Math.floor(t/34/2)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("dl",{staticClass:"music-info"},[s("dt",[s("img",{attrs:{src:t.musicPicUrl}})]),t._v(" "),t.currentMusic.id?[s("dd",[t._v("歌曲名："+t._s(t.currentMusic.name))]),t._v(" "),s("dd",[t._v("歌手名："+t._s(t.currentMusic.singer))]),t._v(" "),s("dd",[t._v("专辑名："+t._s(t.currentMusic.album))])]:[s("dd",[t._v("mmPlayer在线音乐播放器")]),t._v(" "),t._m(0)]],2),t._v(" "),s("div",{ref:"musicLyric",staticClass:"music-lyric"},[s("div",{staticClass:"music-lyric-items",style:t.lyricTop},[t.currentMusic.id?t.nolyric?s("p",[t._v("暂无歌词！")]):t.lyric.length>0?t._l(t.lyric,function(e,i){return s("p",{key:i,class:{on:t.lyricIndex===i}},[t._v(t._s(e.text))])}):s("p",[t._v("歌词加载失败！")]):s("p",[t._v("还没有播放音乐哦！")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("a",{staticClass:"github",attrs:{target:"_blank",href:"https://github.com/maomao1996"}},[this._v("茂茂")])])}]};var v=s("VU/8")(m,d,!1,function(t){s("zL4i")},"data-v-36d4e090",null).exports,h={name:"mmProgress",data:function(){return{move:{status:!1,startX:0,left:0}}},props:{percent:{type:[Number],default:0},percentProgress:{type:[Number],default:0}},mounted:function(){var t=this;this.$nextTick(function(){t.bindEvents();var e=t.$refs.mmProgress.clientWidth-10,s=t.percent*e;t.moveSilde(s)})},methods:{bindEvents:function(){document.addEventListener("mousemove",this.barMove),document.addEventListener("mouseup",this.barUp),document.addEventListener("touchmove",this.barMove),document.addEventListener("touchend",this.barUp)},unbindEvents:function(){document.removeEventListener("mousemove",this.barMove),document.removeEventListener("mouseup",this.barUp),document.removeEventListener("touchmove",this.barMove),document.removeEventListener("touchend",this.barUp)},barClick:function(t){var e=this.$refs.mmProgress.getBoundingClientRect(),s=Math.min(this.$refs.mmProgress.clientWidth-10,Math.max(0,t.clientX-e.left));this.moveSilde(s),this.commitPercent()},barDown:function(t){this.move.status=!0,this.move.startX=t.clientX||t.touches[0].pageX,this.move.left=this.$refs.mmProgressInner.clientWidth},barMove:function(t){if(!this.move.status)return!1;var e=(t.clientX||t.touches[0].pageX)-this.move.startX,s=Math.min(this.$refs.mmProgress.clientWidth-10,Math.max(0,this.move.left+e));this.moveSilde(s),this.commitPercent()},barUp:function(t){t.stopPropagation(),this.move.status=!1},moveSilde:function(t){this.$refs.mmProgressInner.style.width=t+"px"},commitPercent:function(){var t=this.$refs.mmProgress.clientWidth-10,e=this.$refs.mmProgressInner.clientWidth/t;this.$emit("percentChange",e)}},watch:{percent:function(t){if(t>=0&&!this.move.status){var e=t*(this.$refs.mmProgress.clientWidth-10);this.moveSilde(e)}},percentProgress:function(t){var e=this.$refs.mmProgress.clientWidth*t;this.$refs.mmPercentProgress.style.width=e+"px"}},beforeDestroy:function(){this.unbindEvents()}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"mmProgress",staticClass:"mmProgress",on:{click:t.barClick}},[s("div",{staticClass:"mmProgress-bar"}),t._v(" "),s("div",{ref:"mmPercentProgress",staticClass:"mmProgress-outer"}),t._v(" "),s("div",{ref:"mmProgressInner",staticClass:"mmProgress-inner"},[s("div",{staticClass:"mmProgress-dot",on:{mousedown:t.barDown,touchstart:function(e){return e.preventDefault(),t.barDown(e)}}})])])},staticRenderFns:[]};var f=s("VU/8")(h,g,!1,function(t){s("EoE7")},null,null).exports,y={name:"music",components:{Lyric:v,MusicBtn:A,MmDialog:s("N3MO").a,MmProgress:f},data:function(){return{musicReady:!1,currentTime:0,currentProgress:0,lyric:[],nolyric:!1,lyricIndex:0,isMute:!1,volume:1}},mounted:function(){var t=this;this.$nextTick(function(){u.initAudio(t),t.keyDown()})},computed:r()({picUrl:function(){return this.currentMusic.id&&this.currentMusic.image?"url("+this.currentMusic.image+"?param=300y300)":"url("+c.b+")"},modeClass:function(){switch(this.mode){case c.e.listLoop:return"mode-listLoop";case c.e.order:return"mode-order";case c.e.random:return"mode-random";case c.e.loop:return"mode-loop"}},modeTitle:function(){var t="Ctrl + O";switch(this.mode){case c.e.listLoop:return"列表循环 "+t;case c.e.order:return"顺序播放 "+t;case c.e.random:return"随机播放 "+t;case c.e.loop:return"单曲循环 "+t}},percentMusic:function(){var t=this.currentMusic.duration;return this.currentTime&&t?this.currentTime/t:0}},Object(a.c)(["audioEle","mode","playing","playlist","orderList","currentIndex","currentMusic","historyList"])),watch:{currentMusic:function(t,e){var s=this;if(t.id){if(t.id!==e.id){this.audioEle.src=t.url,this.lyricIndex=this.currentTime=this.percentMusic=this.currentProgress=0;try{this.audioEle.play().catch(function(t){})}catch(t){}this.$nextTick(function(){s._getLyric(t.id)})}}else this.lyric=[]},playing:function(t){var e=this,s=this.audioEle;this.$nextTick(function(){t?s.play():s.pause(),e.musicReady=!0})},currentTime:function(t){if(!this.nolyric){for(var e=0,s=0;s<this.lyric.length;s++)t>this.lyric[s].time&&(e=s);this.lyricIndex=e}}},methods:r()({keyDown:function(){var t=this;document.onkeydown=function(e){switch(e.ctrlKey&&e.keyCode){case 32:t.play();break;case 37:t.prev();break;case 38:var s=Number((t.volume+=.1).toFixed(1));s>1&&(s=1),t.volumeChange(s);break;case 39:t.next();break;case 40:var i=Number((t.volume-=.1).toFixed(1));i<0&&(i=0),t.volumeChange(i);break;case 79:t.modeChange()}}},prev:function(){if(this.musicReady)if(1===this.playlist.length)this.loop();else{var t=this.currentIndex-1;t<0&&(t=this.playlist.length-1),this.setCurrentIndex(t),!this.playing&&this.musicReady&&this.setPlaying(!0),this.musicReady=!1}},play:function(){this.musicReady&&this.setPlaying(!this.playing)},next:function(){if(this.musicReady){if(this.playlist.length-1===this.currentIndex&&this.mode===c.e.order)return this.setCurrentIndex(-1),void this.setPlaying(!1);if(1===this.playlist.length)this.loop();else{var t=this.currentIndex+1;t===this.playlist.length&&(t=0),!this.playing&&this.musicReady&&this.setPlaying(!0),this.setCurrentIndex(t),this.musicReady=!1}}},loop:function(){this.audioEle.currentTime=0,this.audioEle.play(),this.setPlaying(!0),this.lyric.length>0&&(this.lyricIndex=0)},progressMusic:function(t){this.audioEle.currentTime=this.currentMusic.duration*t},modeChange:function(){var t=(this.mode+1)%4;if(this.setPlayMode(t),t!==c.e.loop){var e=[];switch(t){case c.e.listLoop:case c.e.order:e=this.orderList;break;case c.e.random:e=Object(o.c)(this.orderList)}this.resetCurrentIndex(e),this.setPlaylist(e)}},resetCurrentIndex:function(t){var e=this,s=t.findIndex(function(t){return t.id===e.currentMusic.id});this.setCurrentIndex(s)},openComment:function(){if(!this.currentMusic.id)return this.$mmToast("还没有播放歌曲哦！"),!1;this.$router.push("/music/comment/"+this.currentMusic.id)},volumeChange:function(t){this.isMute=0===t,this.volume=t,this.audioEle.volume=t},switchMute:function(){var t=this.audioEle;this.isMute=!this.isMute,this.isMute?t.volume=0:t.volume=this.volume},_getLyric:function(t){var e=this;Object(n.b)(t).then(function(t){200===t.status&&(t.data.nolyric?e.nolyric=!0:(e.nolyric=!1,e.lyric=Object(o.b)(t.data.lrc.lyric)),e.audioEle.play())})}},Object(a.d)({setPlaying:"SET_PLAYING",setPlaylist:"SET_PLAYLIST",setCurrentIndex:"SET_CURRENTINDEX"}),Object(a.b)(["setHistory","setPlayMode"])),filters:{format:function(t){var e=Math.floor(t/60),s=Math.floor(t%60);return Object(o.a)(e)+":"+Object(o.a)(s)},formatDuration:function(t){var e=t%3600,s=Math.floor(e/60),i=Math.floor(e%60);return Object(o.a)(s)+":"+Object(o.a)(i)}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music"},[s("div",{staticClass:"music-content"},[s("div",{staticClass:"music-left"},[s("music-btn"),t._v(" "),s("keep-alive",[t.$route.meta.keepAlive?s("router-view",{staticClass:"music-list"}):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():s("router-view",{key:t.$route.path,staticClass:"music-list"})],1),t._v(" "),s("lyric",{staticClass:"music-right",attrs:{lyric:t.lyric,nolyric:t.nolyric,lyricIndex:t.lyricIndex}})],1),t._v(" "),s("div",{staticClass:"music-bar",class:{disable:!t.musicReady||!t.currentMusic.id}},[s("div",{staticClass:"music-bar-btns"},[s("i",{staticClass:"bar-icon btn-prev",attrs:{title:"上一曲 Ctrl + Left"},on:{click:t.prev}}),t._v(" "),s("i",{staticClass:"bar-icon btn-play",class:{"btn-play-pause":t.playing},attrs:{title:"播放暂停 Ctrl + Space"},on:{click:t.play}}),t._v(" "),s("i",{staticClass:"bar-icon btn-next",attrs:{title:"下一曲 Ctrl + Right"},on:{click:t.next}})]),t._v(" "),s("div",{staticClass:"music-music"},[s("div",{staticClass:"music-bar-info"},[t.currentMusic&&t.currentMusic.id?[t._v("\n                    "+t._s(t.currentMusic.name)+"\n                    "),s("span",[t._v(" - "+t._s(t.currentMusic.singer))])]:[t._v("欢迎使用mmPlayer在线音乐播放器")]],2),t._v(" "),t.currentMusic.id?s("div",{staticClass:"music-bar-time"},[t._v(t._s(t._f("format")(t.currentTime))+"/"+t._s(t._f("formatDuration")(t.currentMusic.duration))+"\n            ")]):t._e(),t._v(" "),s("mm-progress",{staticClass:"music-progress",attrs:{percent:t.percentMusic,percentProgress:t.currentProgress},on:{percentChange:t.progressMusic}})],1),t._v(" "),s("i",{staticClass:"bar-icon btn-mode",class:t.modeClass,attrs:{title:t.modeTitle},on:{click:t.modeChange}}),t._v(" "),s("i",{staticClass:"bar-icon btn-comment",on:{click:t.openComment}}),t._v(" "),s("div",{staticClass:"music-bar-volume",attrs:{title:"音量加减 [Ctrl+Up/Down]"}},[s("i",{staticClass:"bar-icon btn-volume",class:{"btn-volume-no":t.isMute},on:{click:t.switchMute}}),t._v(" "),s("mm-progress",{attrs:{percent:t.volume},on:{percentChange:t.volumeChange}})],1)]),t._v(" "),s("div",{staticClass:"mmPlayer-bg",style:{backgroundImage:t.picUrl}}),t._v(" "),s("div",{staticClass:"mmPlayer-mask"})])},staticRenderFns:[]};var p=s("VU/8")(y,C,!1,function(t){s("Wix1")},null,null);e.default=p.exports},q3bf:function(t,e){},"qcF+":function(t,e){t.exports="data:image/png;base64,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"},zL4i:function(t,e){}});