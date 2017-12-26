// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816 = (function (box,val,meta33817){
this.box = box;
this.val = val;
this.meta33817 = meta33817;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33818,meta33817__$1){
var self__ = this;
var _33818__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816(self__.box,self__.val,meta33817__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33818){
var self__ = this;
var _33818__$1 = this;
return self__.meta33817;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)))], null)),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta33817","meta33817",1166563087,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels33816";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels33816");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels33816 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels33816(box__$1,val__$1,meta33817){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816(box__$1,val__$1,meta33817));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33816(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async.impl.channels/PutBox");
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
var x__32999__auto__ = (((this$ == null))?null:this$);
var m__33000__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,this$);
} else {
var m__33000__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,this$);
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
var putter_33830 = self__.puts.pop();
if((putter_33830 == null)){
} else {
var put_handler_33831 = putter_33830.handler;
var val_33832 = putter_33830.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_33831)){
var put_cb_33833 = cljs.core.async.impl.protocols.commit.call(null,put_handler_33831);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_33833,put_handler_33831,val_33832,putter_33830,this$__$1){
return (function (){
return put_cb_33833.call(null,true);
});})(put_cb_33833,put_handler_33831,val_33832,putter_33830,this$__$1))
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
if(cljs.core.truth_((function (){var and__32274__auto__ = self__.buf;
if(cljs.core.truth_(and__32274__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__32274__auto__;
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
var G__33834 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__33834;
continue;
} else {
var G__33835 = takers;
takers = G__33835;
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
var seq__33819_33836 = cljs.core.seq.call(null,take_cbs);
var chunk__33820_33837 = null;
var count__33821_33838 = (0);
var i__33822_33839 = (0);
while(true){
if((i__33822_33839 < count__33821_33838)){
var f_33840 = cljs.core._nth.call(null,chunk__33820_33837,i__33822_33839);
cljs.core.async.impl.dispatch.run.call(null,f_33840);

var G__33841 = seq__33819_33836;
var G__33842 = chunk__33820_33837;
var G__33843 = count__33821_33838;
var G__33844 = (i__33822_33839 + (1));
seq__33819_33836 = G__33841;
chunk__33820_33837 = G__33842;
count__33821_33838 = G__33843;
i__33822_33839 = G__33844;
continue;
} else {
var temp__6503__auto___33845 = cljs.core.seq.call(null,seq__33819_33836);
if(temp__6503__auto___33845){
var seq__33819_33846__$1 = temp__6503__auto___33845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33819_33846__$1)){
var c__33189__auto___33847 = cljs.core.chunk_first.call(null,seq__33819_33846__$1);
var G__33848 = cljs.core.chunk_rest.call(null,seq__33819_33846__$1);
var G__33849 = c__33189__auto___33847;
var G__33850 = cljs.core.count.call(null,c__33189__auto___33847);
var G__33851 = (0);
seq__33819_33836 = G__33848;
chunk__33820_33837 = G__33849;
count__33821_33838 = G__33850;
i__33822_33839 = G__33851;
continue;
} else {
var f_33852 = cljs.core.first.call(null,seq__33819_33846__$1);
cljs.core.async.impl.dispatch.run.call(null,f_33852);

var G__33853 = cljs.core.next.call(null,seq__33819_33846__$1);
var G__33854 = null;
var G__33855 = (0);
var G__33856 = (0);
seq__33819_33836 = G__33853;
chunk__33820_33837 = G__33854;
count__33821_33838 = G__33855;
i__33822_33839 = G__33856;
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
var vec__33823 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__32274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__32274__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__32274__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__33857 = cbs__$1;
cbs = G__33857;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__33823,(0),null);
var cbs = cljs.core.nth.call(null,vec__33823,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__33826_33858 = cljs.core.seq.call(null,cbs);
var chunk__33827_33859 = null;
var count__33828_33860 = (0);
var i__33829_33861 = (0);
while(true){
if((i__33829_33861 < count__33828_33860)){
var cb_33862 = cljs.core._nth.call(null,chunk__33827_33859,i__33829_33861);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__33826_33858,chunk__33827_33859,count__33828_33860,i__33829_33861,cb_33862,val,vec__33823,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1){
return (function (){
return cb_33862.call(null,true);
});})(seq__33826_33858,chunk__33827_33859,count__33828_33860,i__33829_33861,cb_33862,val,vec__33823,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1))
);

var G__33863 = seq__33826_33858;
var G__33864 = chunk__33827_33859;
var G__33865 = count__33828_33860;
var G__33866 = (i__33829_33861 + (1));
seq__33826_33858 = G__33863;
chunk__33827_33859 = G__33864;
count__33828_33860 = G__33865;
i__33829_33861 = G__33866;
continue;
} else {
var temp__6503__auto___33867 = cljs.core.seq.call(null,seq__33826_33858);
if(temp__6503__auto___33867){
var seq__33826_33868__$1 = temp__6503__auto___33867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33826_33868__$1)){
var c__33189__auto___33869 = cljs.core.chunk_first.call(null,seq__33826_33868__$1);
var G__33870 = cljs.core.chunk_rest.call(null,seq__33826_33868__$1);
var G__33871 = c__33189__auto___33869;
var G__33872 = cljs.core.count.call(null,c__33189__auto___33869);
var G__33873 = (0);
seq__33826_33858 = G__33870;
chunk__33827_33859 = G__33871;
count__33828_33860 = G__33872;
i__33829_33861 = G__33873;
continue;
} else {
var cb_33874 = cljs.core.first.call(null,seq__33826_33868__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__33826_33858,chunk__33827_33859,count__33828_33860,i__33829_33861,cb_33874,seq__33826_33868__$1,temp__6503__auto___33867,val,vec__33823,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1){
return (function (){
return cb_33874.call(null,true);
});})(seq__33826_33858,chunk__33827_33859,count__33828_33860,i__33829_33861,cb_33874,seq__33826_33868__$1,temp__6503__auto___33867,val,vec__33823,done_QMARK_,cbs,take_cb,temp__6501__auto__,this$__$1))
);

var G__33875 = cljs.core.next.call(null,seq__33826_33868__$1);
var G__33876 = null;
var G__33877 = (0);
var G__33878 = (0);
seq__33826_33858 = G__33875;
chunk__33827_33859 = G__33876;
count__33828_33860 = G__33877;
i__33829_33861 = G__33878;
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

if(cljs.core.truth_((function (){var and__32274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__32274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__32274__auto__;
}
})())){
var has_val = (function (){var and__32274__auto__ = self__.buf;
if(cljs.core.truth_(and__32274__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__32274__auto__;
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

if(cljs.core.truth_((function (){var and__32274__auto__ = self__.buf;
if(cljs.core.truth_(and__32274__auto__)){
return (self__.puts.length === (0));
} else {
return and__32274__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_33879 = self__.takes.pop();
if((taker_33879 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_33879)){
var take_cb_33880 = cljs.core.async.impl.protocols.commit.call(null,taker_33879);
var val_33881 = (cljs.core.truth_((function (){var and__32274__auto__ = self__.buf;
if(cljs.core.truth_(and__32274__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__32274__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_33880,val_33881,taker_33879,this$__$1){
return (function (){
return take_cb_33880.call(null,val_33881);
});})(take_cb_33880,val_33881,taker_33879,this$__$1))
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

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__32286__auto__ = exh;
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
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
var args33882 = [];
var len__33469__auto___33887 = arguments.length;
var i__33470__auto___33888 = (0);
while(true){
if((i__33470__auto___33888 < len__33469__auto___33887)){
args33882.push((arguments[i__33470__auto___33888]));

var G__33889 = (i__33470__auto___33888 + (1));
i__33470__auto___33888 = G__33889;
continue;
} else {
}
break;
}

var G__33884 = args33882.length;
switch (G__33884) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33882.length)].join('')));

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
var G__33891 = null;
var G__33891__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e33885){var t = e33885;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__33891__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e33886){var t = e33886;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__33891 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__33891__1.call(this,buf__$1);
case 2:
return G__33891__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33891.cljs$core$IFn$_invoke$arity$1 = G__33891__1;
G__33891.cljs$core$IFn$_invoke$arity$2 = G__33891__2;
return G__33891;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1514286303919