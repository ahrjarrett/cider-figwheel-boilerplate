// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093 = (function (box,val,meta34094){
this.box = box;
this.val = val;
this.meta34094 = meta34094;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34095,meta34094__$1){
var self__ = this;
var _34095__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093(self__.box,self__.val,meta34094__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34095){
var self__ = this;
var _34095__$1 = this;
return self__.meta34094;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)))], null)),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta34094","meta34094",1927089461,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels34093";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels34093");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels34093 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels34093(box__$1,val__$1,meta34094){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093(box__$1,val__$1,meta34094));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34093(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__12860__auto__ = (((this$ == null))?null:this$);
var m__12861__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,this$);
} else {
var m__12861__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_34107 = self__.puts.pop();
if((putter_34107 == null)){
} else {
var put_handler_34108 = putter_34107.handler;
var val_34109 = putter_34107.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_34108)){
var put_cb_34110 = cljs.core.async.impl.protocols.commit.call(null,put_handler_34108);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_34110,put_handler_34108,val_34109,putter_34107,this$__$1){
return (function (){
return put_cb_34110.call(null,true);
});})(put_cb_34110,put_handler_34108,val_34109,putter_34107,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__12135__auto__ = self__.buf;
if(cljs.core.truth_(and__12135__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__12135__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__34111 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__34111;
continue;
} else {
var G__34112 = takers;
takers = G__34112;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__34096_34113 = cljs.core.seq.call(null,take_cbs);
var chunk__34097_34114 = null;
var count__34098_34115 = (0);
var i__34099_34116 = (0);
while(true){
if((i__34099_34116 < count__34098_34115)){
var f_34117 = cljs.core._nth.call(null,chunk__34097_34114,i__34099_34116);
cljs.core.async.impl.dispatch.run.call(null,f_34117);

var G__34118 = seq__34096_34113;
var G__34119 = chunk__34097_34114;
var G__34120 = count__34098_34115;
var G__34121 = (i__34099_34116 + (1));
seq__34096_34113 = G__34118;
chunk__34097_34114 = G__34119;
count__34098_34115 = G__34120;
i__34099_34116 = G__34121;
continue;
} else {
var temp__6503__auto___34122 = cljs.core.seq.call(null,seq__34096_34113);
if(temp__6503__auto___34122){
var seq__34096_34123__$1 = temp__6503__auto___34122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34096_34123__$1)){
var c__13050__auto___34124 = cljs.core.chunk_first.call(null,seq__34096_34123__$1);
var G__34125 = cljs.core.chunk_rest.call(null,seq__34096_34123__$1);
var G__34126 = c__13050__auto___34124;
var G__34127 = cljs.core.count.call(null,c__13050__auto___34124);
var G__34128 = (0);
seq__34096_34113 = G__34125;
chunk__34097_34114 = G__34126;
count__34098_34115 = G__34127;
i__34099_34116 = G__34128;
continue;
} else {
var f_34129 = cljs.core.first.call(null,seq__34096_34123__$1);
cljs.core.async.impl.dispatch.run.call(null,f_34129);

var G__34130 = cljs.core.next.call(null,seq__34096_34123__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__34096_34113 = G__34130;
chunk__34097_34114 = G__34131;
count__34098_34115 = G__34132;
i__34099_34116 = G__34133;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__6501__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__6501__auto__)){
var take_cb = temp__6501__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__34100 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__12135__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__12135__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__12135__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__34134 = cbs__$1;
cbs = G__34134;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__34100,(0),null);
var cbs = cljs.core.nth.call(null,vec__34100,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__34103_34135 = cljs.core.seq.call(null,cbs);
var chunk__34104_34136 = null;
var count__34105_34137 = (0);
var i__34106_34138 = (0);
while(true){
if((i__34106_34138 < count__34105_34137)){
var cb_34139 = cljs.core._nth.call(null,chunk__34104_34136,i__34106_34138);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34103_34135,chunk__34104_34136,count__34105_34137,i__34106_34138,cb_34139,val,vec__34100,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1){
return (function (){
return cb_34139.call(null,true);
});})(seq__34103_34135,chunk__34104_34136,count__34105_34137,i__34106_34138,cb_34139,val,vec__34100,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1))
);

var G__34140 = seq__34103_34135;
var G__34141 = chunk__34104_34136;
var G__34142 = count__34105_34137;
var G__34143 = (i__34106_34138 + (1));
seq__34103_34135 = G__34140;
chunk__34104_34136 = G__34141;
count__34105_34137 = G__34142;
i__34106_34138 = G__34143;
continue;
} else {
var temp__6503__auto___34144 = cljs.core.seq.call(null,seq__34103_34135);
if(temp__6503__auto___34144){
var seq__34103_34145__$1 = temp__6503__auto___34144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34103_34145__$1)){
var c__13050__auto___34146 = cljs.core.chunk_first.call(null,seq__34103_34145__$1);
var G__34147 = cljs.core.chunk_rest.call(null,seq__34103_34145__$1);
var G__34148 = c__13050__auto___34146;
var G__34149 = cljs.core.count.call(null,c__13050__auto___34146);
var G__34150 = (0);
seq__34103_34135 = G__34147;
chunk__34104_34136 = G__34148;
count__34105_34137 = G__34149;
i__34106_34138 = G__34150;
continue;
} else {
var cb_34151 = cljs.core.first.call(null,seq__34103_34145__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34103_34135,chunk__34104_34136,count__34105_34137,i__34106_34138,cb_34151,seq__34103_34145__$1,temp__6503__auto___34144,val,vec__34100,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1){
return (function (){
return cb_34151.call(null,true);
});})(seq__34103_34135,chunk__34104_34136,count__34105_34137,i__34106_34138,cb_34151,seq__34103_34145__$1,temp__6503__auto___34144,val,vec__34100,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1))
);

var G__34152 = cljs.core.next.call(null,seq__34103_34145__$1);
var G__34153 = null;
var G__34154 = (0);
var G__34155 = (0);
seq__34103_34135 = G__34152;
chunk__34104_34136 = G__34153;
count__34105_34137 = G__34154;
i__34106_34138 = G__34155;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__12135__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__12135__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__12135__auto__;
}
})())){
var has_val = (function (){var and__12135__auto__ = self__.buf;
if(cljs.core.truth_(and__12135__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__12135__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__12135__auto__ = self__.buf;
if(cljs.core.truth_(and__12135__auto__)){
return (self__.puts.length === (0));
} else {
return and__12135__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_34156 = self__.takes.pop();
if((taker_34156 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_34156)){
var take_cb_34157 = cljs.core.async.impl.protocols.commit.call(null,taker_34156);
var val_34158 = (cljs.core.truth_((function (){var and__12135__auto__ = self__.buf;
if(cljs.core.truth_(and__12135__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__12135__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_34157,val_34158,taker_34156,this$__$1){
return (function (){
return take_cb_34157.call(null,val_34158);
});})(take_cb_34157,val_34158,taker_34156,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__12147__auto__ = exh;
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args34159 = [];
var len__13330__auto___34164 = arguments.length;
var i__13331__auto___34165 = (0);
while(true){
if((i__13331__auto___34165 < len__13330__auto___34164)){
args34159.push((arguments[i__13331__auto___34165]));

var G__34166 = (i__13331__auto___34165 + (1));
i__13331__auto___34165 = G__34166;
continue;
} else {
}
break;
}

var G__34161 = args34159.length;
switch (G__34161) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34159.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__34168 = null;
var G__34168__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e34162){var t = e34162;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__34168__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e34163){var t = e34163;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__34168 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__34168__1.call(this,buf__$1);
case 2:
return G__34168__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34168.cljs$core$IFn$_invoke$arity$1 = G__34168__1;
G__34168.cljs$core$IFn$_invoke$arity$2 = G__34168__2;
return G__34168;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1514283700388