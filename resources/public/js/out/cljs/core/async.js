// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args35528 = [];
var len__13330__auto___35534 = arguments.length;
var i__13331__auto___35535 = (0);
while(true){
if((i__13331__auto___35535 < len__13330__auto___35534)){
args35528.push((arguments[i__13331__auto___35535]));

var G__35536 = (i__13331__auto___35535 + (1));
i__13331__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var G__35530 = args35528.length;
switch (G__35530) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35528.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35531 = (function (f,blockable,meta35532){
this.f = f;
this.blockable = blockable;
this.meta35532 = meta35532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35533,meta35532__$1){
var self__ = this;
var _35533__$1 = this;
return (new cljs.core.async.t_cljs$core$async35531(self__.f,self__.blockable,meta35532__$1));
});

cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35533){
var self__ = this;
var _35533__$1 = this;
return self__.meta35532;
});

cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35532","meta35532",1152477626,null)], null);
});

cljs.core.async.t_cljs$core$async35531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35531";

cljs.core.async.t_cljs$core$async35531.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async35531");
});

cljs.core.async.__GT_t_cljs$core$async35531 = (function cljs$core$async$__GT_t_cljs$core$async35531(f__$1,blockable__$1,meta35532){
return (new cljs.core.async.t_cljs$core$async35531(f__$1,blockable__$1,meta35532));
});

}

return (new cljs.core.async.t_cljs$core$async35531(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args35540 = [];
var len__13330__auto___35543 = arguments.length;
var i__13331__auto___35544 = (0);
while(true){
if((i__13331__auto___35544 < len__13330__auto___35543)){
args35540.push((arguments[i__13331__auto___35544]));

var G__35545 = (i__13331__auto___35544 + (1));
i__13331__auto___35544 = G__35545;
continue;
} else {
}
break;
}

var G__35542 = args35540.length;
switch (G__35542) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35540.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args35547 = [];
var len__13330__auto___35550 = arguments.length;
var i__13331__auto___35551 = (0);
while(true){
if((i__13331__auto___35551 < len__13330__auto___35550)){
args35547.push((arguments[i__13331__auto___35551]));

var G__35552 = (i__13331__auto___35551 + (1));
i__13331__auto___35551 = G__35552;
continue;
} else {
}
break;
}

var G__35549 = args35547.length;
switch (G__35549) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35547.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args35554 = [];
var len__13330__auto___35557 = arguments.length;
var i__13331__auto___35558 = (0);
while(true){
if((i__13331__auto___35558 < len__13330__auto___35557)){
args35554.push((arguments[i__13331__auto___35558]));

var G__35559 = (i__13331__auto___35558 + (1));
i__13331__auto___35558 = G__35559;
continue;
} else {
}
break;
}

var G__35556 = args35554.length;
switch (G__35556) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35554.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35561 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35561);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35561,ret){
return (function (){
return fn1.call(null,val_35561);
});})(val_35561,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args35562 = [];
var len__13330__auto___35565 = arguments.length;
var i__13331__auto___35566 = (0);
while(true){
if((i__13331__auto___35566 < len__13330__auto___35565)){
args35562.push((arguments[i__13331__auto___35566]));

var G__35567 = (i__13331__auto___35566 + (1));
i__13331__auto___35566 = G__35567;
continue;
} else {
}
break;
}

var G__35564 = args35562.length;
switch (G__35564) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35562.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__13160__auto___35569 = n;
var x_35570 = (0);
while(true){
if((x_35570 < n__13160__auto___35569)){
(a[x_35570] = (0));

var G__35571 = (x_35570 + (1));
x_35570 = G__35571;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35572 = (i + (1));
i = G__35572;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35576 = (function (alt_flag,flag,meta35577){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35577 = meta35577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35578,meta35577__$1){
var self__ = this;
var _35578__$1 = this;
return (new cljs.core.async.t_cljs$core$async35576(self__.alt_flag,self__.flag,meta35577__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35578){
var self__ = this;
var _35578__$1 = this;
return self__.meta35577;
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35577","meta35577",645739631,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35576";

cljs.core.async.t_cljs$core$async35576.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async35576");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35576 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35576(alt_flag__$1,flag__$1,meta35577){
return (new cljs.core.async.t_cljs$core$async35576(alt_flag__$1,flag__$1,meta35577));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35576(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35582 = (function (alt_handler,flag,cb,meta35583){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35583 = meta35583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35584,meta35583__$1){
var self__ = this;
var _35584__$1 = this;
return (new cljs.core.async.t_cljs$core$async35582(self__.alt_handler,self__.flag,self__.cb,meta35583__$1));
});

cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35584){
var self__ = this;
var _35584__$1 = this;
return self__.meta35583;
});

cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35583","meta35583",522893110,null)], null);
});

cljs.core.async.t_cljs$core$async35582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35582";

cljs.core.async.t_cljs$core$async35582.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async35582");
});

cljs.core.async.__GT_t_cljs$core$async35582 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35582(alt_handler__$1,flag__$1,cb__$1,meta35583){
return (new cljs.core.async.t_cljs$core$async35582(alt_handler__$1,flag__$1,cb__$1,meta35583));
});

}

return (new cljs.core.async.t_cljs$core$async35582(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35585_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35585_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35586_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35586_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12147__auto__ = wport;
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35587 = (i + (1));
i = G__35587;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12147__auto__ = ret;
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__12135__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12135__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12135__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__13337__auto__ = [];
var len__13330__auto___35593 = arguments.length;
var i__13331__auto___35594 = (0);
while(true){
if((i__13331__auto___35594 < len__13330__auto___35593)){
args__13337__auto__.push((arguments[i__13331__auto___35594]));

var G__35595 = (i__13331__auto___35594 + (1));
i__13331__auto___35594 = G__35595;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((1) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13338__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35590){
var map__35591 = p__35590;
var map__35591__$1 = ((((!((map__35591 == null)))?((((map__35591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591):map__35591);
var opts = map__35591__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35588){
var G__35589 = cljs.core.first.call(null,seq35588);
var seq35588__$1 = cljs.core.next.call(null,seq35588);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35589,seq35588__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args35596 = [];
var len__13330__auto___35646 = arguments.length;
var i__13331__auto___35647 = (0);
while(true){
if((i__13331__auto___35647 < len__13330__auto___35646)){
args35596.push((arguments[i__13331__auto___35647]));

var G__35648 = (i__13331__auto___35647 + (1));
i__13331__auto___35647 = G__35648;
continue;
} else {
}
break;
}

var G__35598 = args35596.length;
switch (G__35598) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35596.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35469__auto___35650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___35650){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___35650){
return (function (state_35622){
var state_val_35623 = (state_35622[(1)]);
if((state_val_35623 === (7))){
var inst_35618 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35624_35651 = state_35622__$1;
(statearr_35624_35651[(2)] = inst_35618);

(statearr_35624_35651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (1))){
var state_35622__$1 = state_35622;
var statearr_35625_35652 = state_35622__$1;
(statearr_35625_35652[(2)] = null);

(statearr_35625_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (4))){
var inst_35601 = (state_35622[(7)]);
var inst_35601__$1 = (state_35622[(2)]);
var inst_35602 = (inst_35601__$1 == null);
var state_35622__$1 = (function (){var statearr_35626 = state_35622;
(statearr_35626[(7)] = inst_35601__$1);

return statearr_35626;
})();
if(cljs.core.truth_(inst_35602)){
var statearr_35627_35653 = state_35622__$1;
(statearr_35627_35653[(1)] = (5));

} else {
var statearr_35628_35654 = state_35622__$1;
(statearr_35628_35654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (13))){
var state_35622__$1 = state_35622;
var statearr_35629_35655 = state_35622__$1;
(statearr_35629_35655[(2)] = null);

(statearr_35629_35655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (6))){
var inst_35601 = (state_35622[(7)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35622__$1,(11),to,inst_35601);
} else {
if((state_val_35623 === (3))){
var inst_35620 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35622__$1,inst_35620);
} else {
if((state_val_35623 === (12))){
var state_35622__$1 = state_35622;
var statearr_35630_35656 = state_35622__$1;
(statearr_35630_35656[(2)] = null);

(statearr_35630_35656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (2))){
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35622__$1,(4),from);
} else {
if((state_val_35623 === (11))){
var inst_35611 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35611)){
var statearr_35631_35657 = state_35622__$1;
(statearr_35631_35657[(1)] = (12));

} else {
var statearr_35632_35658 = state_35622__$1;
(statearr_35632_35658[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (9))){
var state_35622__$1 = state_35622;
var statearr_35633_35659 = state_35622__$1;
(statearr_35633_35659[(2)] = null);

(statearr_35633_35659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (5))){
var state_35622__$1 = state_35622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35634_35660 = state_35622__$1;
(statearr_35634_35660[(1)] = (8));

} else {
var statearr_35635_35661 = state_35622__$1;
(statearr_35635_35661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (14))){
var inst_35616 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35636_35662 = state_35622__$1;
(statearr_35636_35662[(2)] = inst_35616);

(statearr_35636_35662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (10))){
var inst_35608 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35637_35663 = state_35622__$1;
(statearr_35637_35663[(2)] = inst_35608);

(statearr_35637_35663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (8))){
var inst_35605 = cljs.core.async.close_BANG_.call(null,to);
var state_35622__$1 = state_35622;
var statearr_35638_35664 = state_35622__$1;
(statearr_35638_35664[(2)] = inst_35605);

(statearr_35638_35664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___35650))
;
return ((function (switch__35355__auto__,c__35469__auto___35650){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_35642 = [null,null,null,null,null,null,null,null];
(statearr_35642[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_35642[(1)] = (1));

return statearr_35642;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_35622){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_35622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e35643){if((e35643 instanceof Object)){
var ex__35359__auto__ = e35643;
var statearr_35644_35665 = state_35622;
(statearr_35644_35665[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35666 = state_35622;
state_35622 = G__35666;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___35650))
})();
var state__35471__auto__ = (function (){var statearr_35645 = f__35470__auto__.call(null);
(statearr_35645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___35650);

return statearr_35645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___35650))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35854){
var vec__35855 = p__35854;
var v = cljs.core.nth.call(null,vec__35855,(0),null);
var p = cljs.core.nth.call(null,vec__35855,(1),null);
var job = vec__35855;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35469__auto___36041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results){
return (function (state_35862){
var state_val_35863 = (state_35862[(1)]);
if((state_val_35863 === (1))){
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35862__$1,(2),res,v);
} else {
if((state_val_35863 === (2))){
var inst_35859 = (state_35862[(2)]);
var inst_35860 = cljs.core.async.close_BANG_.call(null,res);
var state_35862__$1 = (function (){var statearr_35864 = state_35862;
(statearr_35864[(7)] = inst_35859);

return statearr_35864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35862__$1,inst_35860);
} else {
return null;
}
}
});})(c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results))
;
return ((function (switch__35355__auto__,c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_35868 = [null,null,null,null,null,null,null,null];
(statearr_35868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__);

(statearr_35868[(1)] = (1));

return statearr_35868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1 = (function (state_35862){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_35862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e35869){if((e35869 instanceof Object)){
var ex__35359__auto__ = e35869;
var statearr_35870_36042 = state_35862;
(statearr_35870_36042[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_35862;
state_35862 = G__36043;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = function(state_35862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1.call(this,state_35862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results))
})();
var state__35471__auto__ = (function (){var statearr_35871 = f__35470__auto__.call(null);
(statearr_35871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36041);

return statearr_35871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___36041,res,vec__35855,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35872){
var vec__35873 = p__35872;
var v = cljs.core.nth.call(null,vec__35873,(0),null);
var p = cljs.core.nth.call(null,vec__35873,(1),null);
var job = vec__35873;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13160__auto___36044 = n;
var __36045 = (0);
while(true){
if((__36045 < n__13160__auto___36044)){
var G__35876_36046 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35876_36046) {
case "compute":
var c__35469__auto___36048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36045,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (__36045,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function (state_35889){
var state_val_35890 = (state_35889[(1)]);
if((state_val_35890 === (1))){
var state_35889__$1 = state_35889;
var statearr_35891_36049 = state_35889__$1;
(statearr_35891_36049[(2)] = null);

(statearr_35891_36049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (2))){
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35889__$1,(4),jobs);
} else {
if((state_val_35890 === (3))){
var inst_35887 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35889__$1,inst_35887);
} else {
if((state_val_35890 === (4))){
var inst_35879 = (state_35889[(2)]);
var inst_35880 = process.call(null,inst_35879);
var state_35889__$1 = state_35889;
if(cljs.core.truth_(inst_35880)){
var statearr_35892_36050 = state_35889__$1;
(statearr_35892_36050[(1)] = (5));

} else {
var statearr_35893_36051 = state_35889__$1;
(statearr_35893_36051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (5))){
var state_35889__$1 = state_35889;
var statearr_35894_36052 = state_35889__$1;
(statearr_35894_36052[(2)] = null);

(statearr_35894_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (6))){
var state_35889__$1 = state_35889;
var statearr_35895_36053 = state_35889__$1;
(statearr_35895_36053[(2)] = null);

(statearr_35895_36053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35890 === (7))){
var inst_35885 = (state_35889[(2)]);
var state_35889__$1 = state_35889;
var statearr_35896_36054 = state_35889__$1;
(statearr_35896_36054[(2)] = inst_35885);

(statearr_35896_36054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36045,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
;
return ((function (__36045,switch__35355__auto__,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_35900 = [null,null,null,null,null,null,null];
(statearr_35900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__);

(statearr_35900[(1)] = (1));

return statearr_35900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1 = (function (state_35889){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_35889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e35901){if((e35901 instanceof Object)){
var ex__35359__auto__ = e35901;
var statearr_35902_36055 = state_35889;
(statearr_35902_36055[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36056 = state_35889;
state_35889 = G__36056;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = function(state_35889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1.call(this,state_35889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__;
})()
;})(__36045,switch__35355__auto__,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
})();
var state__35471__auto__ = (function (){var statearr_35903 = f__35470__auto__.call(null);
(statearr_35903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36048);

return statearr_35903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(__36045,c__35469__auto___36048,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
);


break;
case "async":
var c__35469__auto___36057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36045,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (__36045,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function (state_35916){
var state_val_35917 = (state_35916[(1)]);
if((state_val_35917 === (1))){
var state_35916__$1 = state_35916;
var statearr_35918_36058 = state_35916__$1;
(statearr_35918_36058[(2)] = null);

(statearr_35918_36058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (2))){
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35916__$1,(4),jobs);
} else {
if((state_val_35917 === (3))){
var inst_35914 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35916__$1,inst_35914);
} else {
if((state_val_35917 === (4))){
var inst_35906 = (state_35916[(2)]);
var inst_35907 = async.call(null,inst_35906);
var state_35916__$1 = state_35916;
if(cljs.core.truth_(inst_35907)){
var statearr_35919_36059 = state_35916__$1;
(statearr_35919_36059[(1)] = (5));

} else {
var statearr_35920_36060 = state_35916__$1;
(statearr_35920_36060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (5))){
var state_35916__$1 = state_35916;
var statearr_35921_36061 = state_35916__$1;
(statearr_35921_36061[(2)] = null);

(statearr_35921_36061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (6))){
var state_35916__$1 = state_35916;
var statearr_35922_36062 = state_35916__$1;
(statearr_35922_36062[(2)] = null);

(statearr_35922_36062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35917 === (7))){
var inst_35912 = (state_35916[(2)]);
var state_35916__$1 = state_35916;
var statearr_35923_36063 = state_35916__$1;
(statearr_35923_36063[(2)] = inst_35912);

(statearr_35923_36063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36045,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
;
return ((function (__36045,switch__35355__auto__,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_35927 = [null,null,null,null,null,null,null];
(statearr_35927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__);

(statearr_35927[(1)] = (1));

return statearr_35927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1 = (function (state_35916){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_35916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e35928){if((e35928 instanceof Object)){
var ex__35359__auto__ = e35928;
var statearr_35929_36064 = state_35916;
(statearr_35929_36064[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36065 = state_35916;
state_35916 = G__36065;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = function(state_35916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1.call(this,state_35916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__;
})()
;})(__36045,switch__35355__auto__,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
})();
var state__35471__auto__ = (function (){var statearr_35930 = f__35470__auto__.call(null);
(statearr_35930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36057);

return statearr_35930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(__36045,c__35469__auto___36057,G__35876_36046,n__13160__auto___36044,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36066 = (__36045 + (1));
__36045 = G__36066;
continue;
} else {
}
break;
}

var c__35469__auto___36067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___36067,jobs,results,process,async){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___36067,jobs,results,process,async){
return (function (state_35952){
var state_val_35953 = (state_35952[(1)]);
if((state_val_35953 === (1))){
var state_35952__$1 = state_35952;
var statearr_35954_36068 = state_35952__$1;
(statearr_35954_36068[(2)] = null);

(statearr_35954_36068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (2))){
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35952__$1,(4),from);
} else {
if((state_val_35953 === (3))){
var inst_35950 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35952__$1,inst_35950);
} else {
if((state_val_35953 === (4))){
var inst_35933 = (state_35952[(7)]);
var inst_35933__$1 = (state_35952[(2)]);
var inst_35934 = (inst_35933__$1 == null);
var state_35952__$1 = (function (){var statearr_35955 = state_35952;
(statearr_35955[(7)] = inst_35933__$1);

return statearr_35955;
})();
if(cljs.core.truth_(inst_35934)){
var statearr_35956_36069 = state_35952__$1;
(statearr_35956_36069[(1)] = (5));

} else {
var statearr_35957_36070 = state_35952__$1;
(statearr_35957_36070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (5))){
var inst_35936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35952__$1 = state_35952;
var statearr_35958_36071 = state_35952__$1;
(statearr_35958_36071[(2)] = inst_35936);

(statearr_35958_36071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (6))){
var inst_35933 = (state_35952[(7)]);
var inst_35938 = (state_35952[(8)]);
var inst_35938__$1 = cljs.core.async.chan.call(null,(1));
var inst_35939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35940 = [inst_35933,inst_35938__$1];
var inst_35941 = (new cljs.core.PersistentVector(null,2,(5),inst_35939,inst_35940,null));
var state_35952__$1 = (function (){var statearr_35959 = state_35952;
(statearr_35959[(8)] = inst_35938__$1);

return statearr_35959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35952__$1,(8),jobs,inst_35941);
} else {
if((state_val_35953 === (7))){
var inst_35948 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35960_36072 = state_35952__$1;
(statearr_35960_36072[(2)] = inst_35948);

(statearr_35960_36072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (8))){
var inst_35938 = (state_35952[(8)]);
var inst_35943 = (state_35952[(2)]);
var state_35952__$1 = (function (){var statearr_35961 = state_35952;
(statearr_35961[(9)] = inst_35943);

return statearr_35961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35952__$1,(9),results,inst_35938);
} else {
if((state_val_35953 === (9))){
var inst_35945 = (state_35952[(2)]);
var state_35952__$1 = (function (){var statearr_35962 = state_35952;
(statearr_35962[(10)] = inst_35945);

return statearr_35962;
})();
var statearr_35963_36073 = state_35952__$1;
(statearr_35963_36073[(2)] = null);

(statearr_35963_36073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___36067,jobs,results,process,async))
;
return ((function (switch__35355__auto__,c__35469__auto___36067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_35967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__);

(statearr_35967[(1)] = (1));

return statearr_35967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1 = (function (state_35952){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_35952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e35968){if((e35968 instanceof Object)){
var ex__35359__auto__ = e35968;
var statearr_35969_36074 = state_35952;
(statearr_35969_36074[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36075 = state_35952;
state_35952 = G__36075;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = function(state_35952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1.call(this,state_35952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___36067,jobs,results,process,async))
})();
var state__35471__auto__ = (function (){var statearr_35970 = f__35470__auto__.call(null);
(statearr_35970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36067);

return statearr_35970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___36067,jobs,results,process,async))
);


var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__,jobs,results,process,async){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__,jobs,results,process,async){
return (function (state_36008){
var state_val_36009 = (state_36008[(1)]);
if((state_val_36009 === (7))){
var inst_36004 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36010_36076 = state_36008__$1;
(statearr_36010_36076[(2)] = inst_36004);

(statearr_36010_36076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (20))){
var state_36008__$1 = state_36008;
var statearr_36011_36077 = state_36008__$1;
(statearr_36011_36077[(2)] = null);

(statearr_36011_36077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (1))){
var state_36008__$1 = state_36008;
var statearr_36012_36078 = state_36008__$1;
(statearr_36012_36078[(2)] = null);

(statearr_36012_36078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (4))){
var inst_35973 = (state_36008[(7)]);
var inst_35973__$1 = (state_36008[(2)]);
var inst_35974 = (inst_35973__$1 == null);
var state_36008__$1 = (function (){var statearr_36013 = state_36008;
(statearr_36013[(7)] = inst_35973__$1);

return statearr_36013;
})();
if(cljs.core.truth_(inst_35974)){
var statearr_36014_36079 = state_36008__$1;
(statearr_36014_36079[(1)] = (5));

} else {
var statearr_36015_36080 = state_36008__$1;
(statearr_36015_36080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (15))){
var inst_35986 = (state_36008[(8)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36008__$1,(18),to,inst_35986);
} else {
if((state_val_36009 === (21))){
var inst_35999 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36016_36081 = state_36008__$1;
(statearr_36016_36081[(2)] = inst_35999);

(statearr_36016_36081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (13))){
var inst_36001 = (state_36008[(2)]);
var state_36008__$1 = (function (){var statearr_36017 = state_36008;
(statearr_36017[(9)] = inst_36001);

return statearr_36017;
})();
var statearr_36018_36082 = state_36008__$1;
(statearr_36018_36082[(2)] = null);

(statearr_36018_36082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (6))){
var inst_35973 = (state_36008[(7)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36008__$1,(11),inst_35973);
} else {
if((state_val_36009 === (17))){
var inst_35994 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
if(cljs.core.truth_(inst_35994)){
var statearr_36019_36083 = state_36008__$1;
(statearr_36019_36083[(1)] = (19));

} else {
var statearr_36020_36084 = state_36008__$1;
(statearr_36020_36084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (3))){
var inst_36006 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36008__$1,inst_36006);
} else {
if((state_val_36009 === (12))){
var inst_35983 = (state_36008[(10)]);
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36008__$1,(14),inst_35983);
} else {
if((state_val_36009 === (2))){
var state_36008__$1 = state_36008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36008__$1,(4),results);
} else {
if((state_val_36009 === (19))){
var state_36008__$1 = state_36008;
var statearr_36021_36085 = state_36008__$1;
(statearr_36021_36085[(2)] = null);

(statearr_36021_36085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (11))){
var inst_35983 = (state_36008[(2)]);
var state_36008__$1 = (function (){var statearr_36022 = state_36008;
(statearr_36022[(10)] = inst_35983);

return statearr_36022;
})();
var statearr_36023_36086 = state_36008__$1;
(statearr_36023_36086[(2)] = null);

(statearr_36023_36086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (9))){
var state_36008__$1 = state_36008;
var statearr_36024_36087 = state_36008__$1;
(statearr_36024_36087[(2)] = null);

(statearr_36024_36087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (5))){
var state_36008__$1 = state_36008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36025_36088 = state_36008__$1;
(statearr_36025_36088[(1)] = (8));

} else {
var statearr_36026_36089 = state_36008__$1;
(statearr_36026_36089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (14))){
var inst_35988 = (state_36008[(11)]);
var inst_35986 = (state_36008[(8)]);
var inst_35986__$1 = (state_36008[(2)]);
var inst_35987 = (inst_35986__$1 == null);
var inst_35988__$1 = cljs.core.not.call(null,inst_35987);
var state_36008__$1 = (function (){var statearr_36027 = state_36008;
(statearr_36027[(11)] = inst_35988__$1);

(statearr_36027[(8)] = inst_35986__$1);

return statearr_36027;
})();
if(inst_35988__$1){
var statearr_36028_36090 = state_36008__$1;
(statearr_36028_36090[(1)] = (15));

} else {
var statearr_36029_36091 = state_36008__$1;
(statearr_36029_36091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (16))){
var inst_35988 = (state_36008[(11)]);
var state_36008__$1 = state_36008;
var statearr_36030_36092 = state_36008__$1;
(statearr_36030_36092[(2)] = inst_35988);

(statearr_36030_36092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (10))){
var inst_35980 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36031_36093 = state_36008__$1;
(statearr_36031_36093[(2)] = inst_35980);

(statearr_36031_36093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (18))){
var inst_35991 = (state_36008[(2)]);
var state_36008__$1 = state_36008;
var statearr_36032_36094 = state_36008__$1;
(statearr_36032_36094[(2)] = inst_35991);

(statearr_36032_36094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36009 === (8))){
var inst_35977 = cljs.core.async.close_BANG_.call(null,to);
var state_36008__$1 = state_36008;
var statearr_36033_36095 = state_36008__$1;
(statearr_36033_36095[(2)] = inst_35977);

(statearr_36033_36095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto__,jobs,results,process,async))
;
return ((function (switch__35355__auto__,c__35469__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_36037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__);

(statearr_36037[(1)] = (1));

return statearr_36037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1 = (function (state_36008){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36038){if((e36038 instanceof Object)){
var ex__35359__auto__ = e36038;
var statearr_36039_36096 = state_36008;
(statearr_36039_36096[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36097 = state_36008;
state_36008 = G__36097;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__ = function(state_36008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1.call(this,state_36008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__,jobs,results,process,async))
})();
var state__35471__auto__ = (function (){var statearr_36040 = f__35470__auto__.call(null);
(statearr_36040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_36040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__,jobs,results,process,async))
);

return c__35469__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args36098 = [];
var len__13330__auto___36101 = arguments.length;
var i__13331__auto___36102 = (0);
while(true){
if((i__13331__auto___36102 < len__13330__auto___36101)){
args36098.push((arguments[i__13331__auto___36102]));

var G__36103 = (i__13331__auto___36102 + (1));
i__13331__auto___36102 = G__36103;
continue;
} else {
}
break;
}

var G__36100 = args36098.length;
switch (G__36100) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36098.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args36105 = [];
var len__13330__auto___36108 = arguments.length;
var i__13331__auto___36109 = (0);
while(true){
if((i__13331__auto___36109 < len__13330__auto___36108)){
args36105.push((arguments[i__13331__auto___36109]));

var G__36110 = (i__13331__auto___36109 + (1));
i__13331__auto___36109 = G__36110;
continue;
} else {
}
break;
}

var G__36107 = args36105.length;
switch (G__36107) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36105.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args36112 = [];
var len__13330__auto___36165 = arguments.length;
var i__13331__auto___36166 = (0);
while(true){
if((i__13331__auto___36166 < len__13330__auto___36165)){
args36112.push((arguments[i__13331__auto___36166]));

var G__36167 = (i__13331__auto___36166 + (1));
i__13331__auto___36166 = G__36167;
continue;
} else {
}
break;
}

var G__36114 = args36112.length;
switch (G__36114) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36112.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35469__auto___36169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___36169,tc,fc){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___36169,tc,fc){
return (function (state_36140){
var state_val_36141 = (state_36140[(1)]);
if((state_val_36141 === (7))){
var inst_36136 = (state_36140[(2)]);
var state_36140__$1 = state_36140;
var statearr_36142_36170 = state_36140__$1;
(statearr_36142_36170[(2)] = inst_36136);

(statearr_36142_36170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (1))){
var state_36140__$1 = state_36140;
var statearr_36143_36171 = state_36140__$1;
(statearr_36143_36171[(2)] = null);

(statearr_36143_36171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (4))){
var inst_36117 = (state_36140[(7)]);
var inst_36117__$1 = (state_36140[(2)]);
var inst_36118 = (inst_36117__$1 == null);
var state_36140__$1 = (function (){var statearr_36144 = state_36140;
(statearr_36144[(7)] = inst_36117__$1);

return statearr_36144;
})();
if(cljs.core.truth_(inst_36118)){
var statearr_36145_36172 = state_36140__$1;
(statearr_36145_36172[(1)] = (5));

} else {
var statearr_36146_36173 = state_36140__$1;
(statearr_36146_36173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (13))){
var state_36140__$1 = state_36140;
var statearr_36147_36174 = state_36140__$1;
(statearr_36147_36174[(2)] = null);

(statearr_36147_36174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (6))){
var inst_36117 = (state_36140[(7)]);
var inst_36123 = p.call(null,inst_36117);
var state_36140__$1 = state_36140;
if(cljs.core.truth_(inst_36123)){
var statearr_36148_36175 = state_36140__$1;
(statearr_36148_36175[(1)] = (9));

} else {
var statearr_36149_36176 = state_36140__$1;
(statearr_36149_36176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (3))){
var inst_36138 = (state_36140[(2)]);
var state_36140__$1 = state_36140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36140__$1,inst_36138);
} else {
if((state_val_36141 === (12))){
var state_36140__$1 = state_36140;
var statearr_36150_36177 = state_36140__$1;
(statearr_36150_36177[(2)] = null);

(statearr_36150_36177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (2))){
var state_36140__$1 = state_36140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36140__$1,(4),ch);
} else {
if((state_val_36141 === (11))){
var inst_36117 = (state_36140[(7)]);
var inst_36127 = (state_36140[(2)]);
var state_36140__$1 = state_36140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36140__$1,(8),inst_36127,inst_36117);
} else {
if((state_val_36141 === (9))){
var state_36140__$1 = state_36140;
var statearr_36151_36178 = state_36140__$1;
(statearr_36151_36178[(2)] = tc);

(statearr_36151_36178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (5))){
var inst_36120 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36121 = cljs.core.async.close_BANG_.call(null,fc);
var state_36140__$1 = (function (){var statearr_36152 = state_36140;
(statearr_36152[(8)] = inst_36120);

return statearr_36152;
})();
var statearr_36153_36179 = state_36140__$1;
(statearr_36153_36179[(2)] = inst_36121);

(statearr_36153_36179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (14))){
var inst_36134 = (state_36140[(2)]);
var state_36140__$1 = state_36140;
var statearr_36154_36180 = state_36140__$1;
(statearr_36154_36180[(2)] = inst_36134);

(statearr_36154_36180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (10))){
var state_36140__$1 = state_36140;
var statearr_36155_36181 = state_36140__$1;
(statearr_36155_36181[(2)] = fc);

(statearr_36155_36181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36141 === (8))){
var inst_36129 = (state_36140[(2)]);
var state_36140__$1 = state_36140;
if(cljs.core.truth_(inst_36129)){
var statearr_36156_36182 = state_36140__$1;
(statearr_36156_36182[(1)] = (12));

} else {
var statearr_36157_36183 = state_36140__$1;
(statearr_36157_36183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___36169,tc,fc))
;
return ((function (switch__35355__auto__,c__35469__auto___36169,tc,fc){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_36161 = [null,null,null,null,null,null,null,null,null];
(statearr_36161[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_36161[(1)] = (1));

return statearr_36161;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_36140){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36162){if((e36162 instanceof Object)){
var ex__35359__auto__ = e36162;
var statearr_36163_36184 = state_36140;
(statearr_36163_36184[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36185 = state_36140;
state_36140 = G__36185;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_36140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_36140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___36169,tc,fc))
})();
var state__35471__auto__ = (function (){var statearr_36164 = f__35470__auto__.call(null);
(statearr_36164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36169);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___36169,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__){
return (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (7))){
var inst_36245 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36251_36272 = state_36249__$1;
(statearr_36251_36272[(2)] = inst_36245);

(statearr_36251_36272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (1))){
var inst_36229 = init;
var state_36249__$1 = (function (){var statearr_36252 = state_36249;
(statearr_36252[(7)] = inst_36229);

return statearr_36252;
})();
var statearr_36253_36273 = state_36249__$1;
(statearr_36253_36273[(2)] = null);

(statearr_36253_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (4))){
var inst_36232 = (state_36249[(8)]);
var inst_36232__$1 = (state_36249[(2)]);
var inst_36233 = (inst_36232__$1 == null);
var state_36249__$1 = (function (){var statearr_36254 = state_36249;
(statearr_36254[(8)] = inst_36232__$1);

return statearr_36254;
})();
if(cljs.core.truth_(inst_36233)){
var statearr_36255_36274 = state_36249__$1;
(statearr_36255_36274[(1)] = (5));

} else {
var statearr_36256_36275 = state_36249__$1;
(statearr_36256_36275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (6))){
var inst_36229 = (state_36249[(7)]);
var inst_36236 = (state_36249[(9)]);
var inst_36232 = (state_36249[(8)]);
var inst_36236__$1 = f.call(null,inst_36229,inst_36232);
var inst_36237 = cljs.core.reduced_QMARK_.call(null,inst_36236__$1);
var state_36249__$1 = (function (){var statearr_36257 = state_36249;
(statearr_36257[(9)] = inst_36236__$1);

return statearr_36257;
})();
if(inst_36237){
var statearr_36258_36276 = state_36249__$1;
(statearr_36258_36276[(1)] = (8));

} else {
var statearr_36259_36277 = state_36249__$1;
(statearr_36259_36277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (3))){
var inst_36247 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36249__$1,inst_36247);
} else {
if((state_val_36250 === (2))){
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36249__$1,(4),ch);
} else {
if((state_val_36250 === (9))){
var inst_36236 = (state_36249[(9)]);
var inst_36229 = inst_36236;
var state_36249__$1 = (function (){var statearr_36260 = state_36249;
(statearr_36260[(7)] = inst_36229);

return statearr_36260;
})();
var statearr_36261_36278 = state_36249__$1;
(statearr_36261_36278[(2)] = null);

(statearr_36261_36278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (5))){
var inst_36229 = (state_36249[(7)]);
var state_36249__$1 = state_36249;
var statearr_36262_36279 = state_36249__$1;
(statearr_36262_36279[(2)] = inst_36229);

(statearr_36262_36279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (10))){
var inst_36243 = (state_36249[(2)]);
var state_36249__$1 = state_36249;
var statearr_36263_36280 = state_36249__$1;
(statearr_36263_36280[(2)] = inst_36243);

(statearr_36263_36280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36250 === (8))){
var inst_36236 = (state_36249[(9)]);
var inst_36239 = cljs.core.deref.call(null,inst_36236);
var state_36249__$1 = state_36249;
var statearr_36264_36281 = state_36249__$1;
(statearr_36264_36281[(2)] = inst_36239);

(statearr_36264_36281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35356__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35356__auto____0 = (function (){
var statearr_36268 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36268[(0)] = cljs$core$async$reduce_$_state_machine__35356__auto__);

(statearr_36268[(1)] = (1));

return statearr_36268;
});
var cljs$core$async$reduce_$_state_machine__35356__auto____1 = (function (state_36249){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36269){if((e36269 instanceof Object)){
var ex__35359__auto__ = e36269;
var statearr_36270_36282 = state_36249;
(statearr_36270_36282[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36283 = state_36249;
state_36249 = G__36283;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35356__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35356__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35356__auto____0;
cljs$core$async$reduce_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35356__auto____1;
return cljs$core$async$reduce_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__))
})();
var state__35471__auto__ = (function (){var statearr_36271 = f__35470__auto__.call(null);
(statearr_36271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_36271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__))
);

return c__35469__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__,f__$1){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__,f__$1){
return (function (state_36303){
var state_val_36304 = (state_36303[(1)]);
if((state_val_36304 === (1))){
var inst_36298 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36303__$1,(2),inst_36298);
} else {
if((state_val_36304 === (2))){
var inst_36300 = (state_36303[(2)]);
var inst_36301 = f__$1.call(null,inst_36300);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36303__$1,inst_36301);
} else {
return null;
}
}
});})(c__35469__auto__,f__$1))
;
return ((function (switch__35355__auto__,c__35469__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35356__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35356__auto____0 = (function (){
var statearr_36308 = [null,null,null,null,null,null,null];
(statearr_36308[(0)] = cljs$core$async$transduce_$_state_machine__35356__auto__);

(statearr_36308[(1)] = (1));

return statearr_36308;
});
var cljs$core$async$transduce_$_state_machine__35356__auto____1 = (function (state_36303){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36309){if((e36309 instanceof Object)){
var ex__35359__auto__ = e36309;
var statearr_36310_36312 = state_36303;
(statearr_36310_36312[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36313 = state_36303;
state_36303 = G__36313;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35356__auto__ = function(state_36303){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35356__auto____1.call(this,state_36303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35356__auto____0;
cljs$core$async$transduce_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35356__auto____1;
return cljs$core$async$transduce_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__,f__$1))
})();
var state__35471__auto__ = (function (){var statearr_36311 = f__35470__auto__.call(null);
(statearr_36311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_36311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__,f__$1))
);

return c__35469__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args36314 = [];
var len__13330__auto___36366 = arguments.length;
var i__13331__auto___36367 = (0);
while(true){
if((i__13331__auto___36367 < len__13330__auto___36366)){
args36314.push((arguments[i__13331__auto___36367]));

var G__36368 = (i__13331__auto___36367 + (1));
i__13331__auto___36367 = G__36368;
continue;
} else {
}
break;
}

var G__36316 = args36314.length;
switch (G__36316) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36314.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__){
return (function (state_36341){
var state_val_36342 = (state_36341[(1)]);
if((state_val_36342 === (7))){
var inst_36323 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36343_36370 = state_36341__$1;
(statearr_36343_36370[(2)] = inst_36323);

(statearr_36343_36370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (1))){
var inst_36317 = cljs.core.seq.call(null,coll);
var inst_36318 = inst_36317;
var state_36341__$1 = (function (){var statearr_36344 = state_36341;
(statearr_36344[(7)] = inst_36318);

return statearr_36344;
})();
var statearr_36345_36371 = state_36341__$1;
(statearr_36345_36371[(2)] = null);

(statearr_36345_36371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (4))){
var inst_36318 = (state_36341[(7)]);
var inst_36321 = cljs.core.first.call(null,inst_36318);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36341__$1,(7),ch,inst_36321);
} else {
if((state_val_36342 === (13))){
var inst_36335 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36346_36372 = state_36341__$1;
(statearr_36346_36372[(2)] = inst_36335);

(statearr_36346_36372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (6))){
var inst_36326 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
if(cljs.core.truth_(inst_36326)){
var statearr_36347_36373 = state_36341__$1;
(statearr_36347_36373[(1)] = (8));

} else {
var statearr_36348_36374 = state_36341__$1;
(statearr_36348_36374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (3))){
var inst_36339 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36341__$1,inst_36339);
} else {
if((state_val_36342 === (12))){
var state_36341__$1 = state_36341;
var statearr_36349_36375 = state_36341__$1;
(statearr_36349_36375[(2)] = null);

(statearr_36349_36375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (2))){
var inst_36318 = (state_36341[(7)]);
var state_36341__$1 = state_36341;
if(cljs.core.truth_(inst_36318)){
var statearr_36350_36376 = state_36341__$1;
(statearr_36350_36376[(1)] = (4));

} else {
var statearr_36351_36377 = state_36341__$1;
(statearr_36351_36377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (11))){
var inst_36332 = cljs.core.async.close_BANG_.call(null,ch);
var state_36341__$1 = state_36341;
var statearr_36352_36378 = state_36341__$1;
(statearr_36352_36378[(2)] = inst_36332);

(statearr_36352_36378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (9))){
var state_36341__$1 = state_36341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36353_36379 = state_36341__$1;
(statearr_36353_36379[(1)] = (11));

} else {
var statearr_36354_36380 = state_36341__$1;
(statearr_36354_36380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (5))){
var inst_36318 = (state_36341[(7)]);
var state_36341__$1 = state_36341;
var statearr_36355_36381 = state_36341__$1;
(statearr_36355_36381[(2)] = inst_36318);

(statearr_36355_36381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (10))){
var inst_36337 = (state_36341[(2)]);
var state_36341__$1 = state_36341;
var statearr_36356_36382 = state_36341__$1;
(statearr_36356_36382[(2)] = inst_36337);

(statearr_36356_36382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36342 === (8))){
var inst_36318 = (state_36341[(7)]);
var inst_36328 = cljs.core.next.call(null,inst_36318);
var inst_36318__$1 = inst_36328;
var state_36341__$1 = (function (){var statearr_36357 = state_36341;
(statearr_36357[(7)] = inst_36318__$1);

return statearr_36357;
})();
var statearr_36358_36383 = state_36341__$1;
(statearr_36358_36383[(2)] = null);

(statearr_36358_36383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_36362 = [null,null,null,null,null,null,null,null];
(statearr_36362[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_36362[(1)] = (1));

return statearr_36362;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_36341){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36363){if((e36363 instanceof Object)){
var ex__35359__auto__ = e36363;
var statearr_36364_36384 = state_36341;
(statearr_36364_36384[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36385 = state_36341;
state_36341 = G__36385;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_36341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_36341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__))
})();
var state__35471__auto__ = (function (){var statearr_36365 = f__35470__auto__.call(null);
(statearr_36365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_36365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__))
);

return c__35469__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12860__auto__ = (((_ == null))?null:_);
var m__12861__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,_);
} else {
var m__12861__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__12861__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,ch);
} else {
var m__12861__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m);
} else {
var m__12861__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36611 = (function (mult,ch,cs,meta36612){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36612 = meta36612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36613,meta36612__$1){
var self__ = this;
var _36613__$1 = this;
return (new cljs.core.async.t_cljs$core$async36611(self__.mult,self__.ch,self__.cs,meta36612__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36613){
var self__ = this;
var _36613__$1 = this;
return self__.meta36612;
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36612","meta36612",-1313242682,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36611";

cljs.core.async.t_cljs$core$async36611.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async36611");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36611 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36611(mult__$1,ch__$1,cs__$1,meta36612){
return (new cljs.core.async.t_cljs$core$async36611(mult__$1,ch__$1,cs__$1,meta36612));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36611(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35469__auto___36836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___36836,cs,m,dchan,dctr,done){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___36836,cs,m,dchan,dctr,done){
return (function (state_36748){
var state_val_36749 = (state_36748[(1)]);
if((state_val_36749 === (7))){
var inst_36744 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36750_36837 = state_36748__$1;
(statearr_36750_36837[(2)] = inst_36744);

(statearr_36750_36837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (20))){
var inst_36647 = (state_36748[(7)]);
var inst_36659 = cljs.core.first.call(null,inst_36647);
var inst_36660 = cljs.core.nth.call(null,inst_36659,(0),null);
var inst_36661 = cljs.core.nth.call(null,inst_36659,(1),null);
var state_36748__$1 = (function (){var statearr_36751 = state_36748;
(statearr_36751[(8)] = inst_36660);

return statearr_36751;
})();
if(cljs.core.truth_(inst_36661)){
var statearr_36752_36838 = state_36748__$1;
(statearr_36752_36838[(1)] = (22));

} else {
var statearr_36753_36839 = state_36748__$1;
(statearr_36753_36839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (27))){
var inst_36691 = (state_36748[(9)]);
var inst_36616 = (state_36748[(10)]);
var inst_36696 = (state_36748[(11)]);
var inst_36689 = (state_36748[(12)]);
var inst_36696__$1 = cljs.core._nth.call(null,inst_36689,inst_36691);
var inst_36697 = cljs.core.async.put_BANG_.call(null,inst_36696__$1,inst_36616,done);
var state_36748__$1 = (function (){var statearr_36754 = state_36748;
(statearr_36754[(11)] = inst_36696__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36697)){
var statearr_36755_36840 = state_36748__$1;
(statearr_36755_36840[(1)] = (30));

} else {
var statearr_36756_36841 = state_36748__$1;
(statearr_36756_36841[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (1))){
var state_36748__$1 = state_36748;
var statearr_36757_36842 = state_36748__$1;
(statearr_36757_36842[(2)] = null);

(statearr_36757_36842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (24))){
var inst_36647 = (state_36748[(7)]);
var inst_36666 = (state_36748[(2)]);
var inst_36667 = cljs.core.next.call(null,inst_36647);
var inst_36625 = inst_36667;
var inst_36626 = null;
var inst_36627 = (0);
var inst_36628 = (0);
var state_36748__$1 = (function (){var statearr_36758 = state_36748;
(statearr_36758[(13)] = inst_36628);

(statearr_36758[(14)] = inst_36625);

(statearr_36758[(15)] = inst_36666);

(statearr_36758[(16)] = inst_36626);

(statearr_36758[(17)] = inst_36627);

return statearr_36758;
})();
var statearr_36759_36843 = state_36748__$1;
(statearr_36759_36843[(2)] = null);

(statearr_36759_36843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (39))){
var state_36748__$1 = state_36748;
var statearr_36763_36844 = state_36748__$1;
(statearr_36763_36844[(2)] = null);

(statearr_36763_36844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (4))){
var inst_36616 = (state_36748[(10)]);
var inst_36616__$1 = (state_36748[(2)]);
var inst_36617 = (inst_36616__$1 == null);
var state_36748__$1 = (function (){var statearr_36764 = state_36748;
(statearr_36764[(10)] = inst_36616__$1);

return statearr_36764;
})();
if(cljs.core.truth_(inst_36617)){
var statearr_36765_36845 = state_36748__$1;
(statearr_36765_36845[(1)] = (5));

} else {
var statearr_36766_36846 = state_36748__$1;
(statearr_36766_36846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (15))){
var inst_36628 = (state_36748[(13)]);
var inst_36625 = (state_36748[(14)]);
var inst_36626 = (state_36748[(16)]);
var inst_36627 = (state_36748[(17)]);
var inst_36643 = (state_36748[(2)]);
var inst_36644 = (inst_36628 + (1));
var tmp36760 = inst_36625;
var tmp36761 = inst_36626;
var tmp36762 = inst_36627;
var inst_36625__$1 = tmp36760;
var inst_36626__$1 = tmp36761;
var inst_36627__$1 = tmp36762;
var inst_36628__$1 = inst_36644;
var state_36748__$1 = (function (){var statearr_36767 = state_36748;
(statearr_36767[(13)] = inst_36628__$1);

(statearr_36767[(18)] = inst_36643);

(statearr_36767[(14)] = inst_36625__$1);

(statearr_36767[(16)] = inst_36626__$1);

(statearr_36767[(17)] = inst_36627__$1);

return statearr_36767;
})();
var statearr_36768_36847 = state_36748__$1;
(statearr_36768_36847[(2)] = null);

(statearr_36768_36847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (21))){
var inst_36670 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36772_36848 = state_36748__$1;
(statearr_36772_36848[(2)] = inst_36670);

(statearr_36772_36848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (31))){
var inst_36696 = (state_36748[(11)]);
var inst_36700 = done.call(null,null);
var inst_36701 = cljs.core.async.untap_STAR_.call(null,m,inst_36696);
var state_36748__$1 = (function (){var statearr_36773 = state_36748;
(statearr_36773[(19)] = inst_36700);

return statearr_36773;
})();
var statearr_36774_36849 = state_36748__$1;
(statearr_36774_36849[(2)] = inst_36701);

(statearr_36774_36849[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (32))){
var inst_36691 = (state_36748[(9)]);
var inst_36688 = (state_36748[(20)]);
var inst_36690 = (state_36748[(21)]);
var inst_36689 = (state_36748[(12)]);
var inst_36703 = (state_36748[(2)]);
var inst_36704 = (inst_36691 + (1));
var tmp36769 = inst_36688;
var tmp36770 = inst_36690;
var tmp36771 = inst_36689;
var inst_36688__$1 = tmp36769;
var inst_36689__$1 = tmp36771;
var inst_36690__$1 = tmp36770;
var inst_36691__$1 = inst_36704;
var state_36748__$1 = (function (){var statearr_36775 = state_36748;
(statearr_36775[(9)] = inst_36691__$1);

(statearr_36775[(22)] = inst_36703);

(statearr_36775[(20)] = inst_36688__$1);

(statearr_36775[(21)] = inst_36690__$1);

(statearr_36775[(12)] = inst_36689__$1);

return statearr_36775;
})();
var statearr_36776_36850 = state_36748__$1;
(statearr_36776_36850[(2)] = null);

(statearr_36776_36850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (40))){
var inst_36716 = (state_36748[(23)]);
var inst_36720 = done.call(null,null);
var inst_36721 = cljs.core.async.untap_STAR_.call(null,m,inst_36716);
var state_36748__$1 = (function (){var statearr_36777 = state_36748;
(statearr_36777[(24)] = inst_36720);

return statearr_36777;
})();
var statearr_36778_36851 = state_36748__$1;
(statearr_36778_36851[(2)] = inst_36721);

(statearr_36778_36851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (33))){
var inst_36707 = (state_36748[(25)]);
var inst_36709 = cljs.core.chunked_seq_QMARK_.call(null,inst_36707);
var state_36748__$1 = state_36748;
if(inst_36709){
var statearr_36779_36852 = state_36748__$1;
(statearr_36779_36852[(1)] = (36));

} else {
var statearr_36780_36853 = state_36748__$1;
(statearr_36780_36853[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (13))){
var inst_36637 = (state_36748[(26)]);
var inst_36640 = cljs.core.async.close_BANG_.call(null,inst_36637);
var state_36748__$1 = state_36748;
var statearr_36781_36854 = state_36748__$1;
(statearr_36781_36854[(2)] = inst_36640);

(statearr_36781_36854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (22))){
var inst_36660 = (state_36748[(8)]);
var inst_36663 = cljs.core.async.close_BANG_.call(null,inst_36660);
var state_36748__$1 = state_36748;
var statearr_36782_36855 = state_36748__$1;
(statearr_36782_36855[(2)] = inst_36663);

(statearr_36782_36855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (36))){
var inst_36707 = (state_36748[(25)]);
var inst_36711 = cljs.core.chunk_first.call(null,inst_36707);
var inst_36712 = cljs.core.chunk_rest.call(null,inst_36707);
var inst_36713 = cljs.core.count.call(null,inst_36711);
var inst_36688 = inst_36712;
var inst_36689 = inst_36711;
var inst_36690 = inst_36713;
var inst_36691 = (0);
var state_36748__$1 = (function (){var statearr_36783 = state_36748;
(statearr_36783[(9)] = inst_36691);

(statearr_36783[(20)] = inst_36688);

(statearr_36783[(21)] = inst_36690);

(statearr_36783[(12)] = inst_36689);

return statearr_36783;
})();
var statearr_36784_36856 = state_36748__$1;
(statearr_36784_36856[(2)] = null);

(statearr_36784_36856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (41))){
var inst_36707 = (state_36748[(25)]);
var inst_36723 = (state_36748[(2)]);
var inst_36724 = cljs.core.next.call(null,inst_36707);
var inst_36688 = inst_36724;
var inst_36689 = null;
var inst_36690 = (0);
var inst_36691 = (0);
var state_36748__$1 = (function (){var statearr_36785 = state_36748;
(statearr_36785[(9)] = inst_36691);

(statearr_36785[(20)] = inst_36688);

(statearr_36785[(27)] = inst_36723);

(statearr_36785[(21)] = inst_36690);

(statearr_36785[(12)] = inst_36689);

return statearr_36785;
})();
var statearr_36786_36857 = state_36748__$1;
(statearr_36786_36857[(2)] = null);

(statearr_36786_36857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (43))){
var state_36748__$1 = state_36748;
var statearr_36787_36858 = state_36748__$1;
(statearr_36787_36858[(2)] = null);

(statearr_36787_36858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (29))){
var inst_36732 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36788_36859 = state_36748__$1;
(statearr_36788_36859[(2)] = inst_36732);

(statearr_36788_36859[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (44))){
var inst_36741 = (state_36748[(2)]);
var state_36748__$1 = (function (){var statearr_36789 = state_36748;
(statearr_36789[(28)] = inst_36741);

return statearr_36789;
})();
var statearr_36790_36860 = state_36748__$1;
(statearr_36790_36860[(2)] = null);

(statearr_36790_36860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (6))){
var inst_36680 = (state_36748[(29)]);
var inst_36679 = cljs.core.deref.call(null,cs);
var inst_36680__$1 = cljs.core.keys.call(null,inst_36679);
var inst_36681 = cljs.core.count.call(null,inst_36680__$1);
var inst_36682 = cljs.core.reset_BANG_.call(null,dctr,inst_36681);
var inst_36687 = cljs.core.seq.call(null,inst_36680__$1);
var inst_36688 = inst_36687;
var inst_36689 = null;
var inst_36690 = (0);
var inst_36691 = (0);
var state_36748__$1 = (function (){var statearr_36791 = state_36748;
(statearr_36791[(9)] = inst_36691);

(statearr_36791[(30)] = inst_36682);

(statearr_36791[(20)] = inst_36688);

(statearr_36791[(29)] = inst_36680__$1);

(statearr_36791[(21)] = inst_36690);

(statearr_36791[(12)] = inst_36689);

return statearr_36791;
})();
var statearr_36792_36861 = state_36748__$1;
(statearr_36792_36861[(2)] = null);

(statearr_36792_36861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (28))){
var inst_36707 = (state_36748[(25)]);
var inst_36688 = (state_36748[(20)]);
var inst_36707__$1 = cljs.core.seq.call(null,inst_36688);
var state_36748__$1 = (function (){var statearr_36793 = state_36748;
(statearr_36793[(25)] = inst_36707__$1);

return statearr_36793;
})();
if(inst_36707__$1){
var statearr_36794_36862 = state_36748__$1;
(statearr_36794_36862[(1)] = (33));

} else {
var statearr_36795_36863 = state_36748__$1;
(statearr_36795_36863[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (25))){
var inst_36691 = (state_36748[(9)]);
var inst_36690 = (state_36748[(21)]);
var inst_36693 = (inst_36691 < inst_36690);
var inst_36694 = inst_36693;
var state_36748__$1 = state_36748;
if(cljs.core.truth_(inst_36694)){
var statearr_36796_36864 = state_36748__$1;
(statearr_36796_36864[(1)] = (27));

} else {
var statearr_36797_36865 = state_36748__$1;
(statearr_36797_36865[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (34))){
var state_36748__$1 = state_36748;
var statearr_36798_36866 = state_36748__$1;
(statearr_36798_36866[(2)] = null);

(statearr_36798_36866[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (17))){
var state_36748__$1 = state_36748;
var statearr_36799_36867 = state_36748__$1;
(statearr_36799_36867[(2)] = null);

(statearr_36799_36867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (3))){
var inst_36746 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36748__$1,inst_36746);
} else {
if((state_val_36749 === (12))){
var inst_36675 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36800_36868 = state_36748__$1;
(statearr_36800_36868[(2)] = inst_36675);

(statearr_36800_36868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (2))){
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36748__$1,(4),ch);
} else {
if((state_val_36749 === (23))){
var state_36748__$1 = state_36748;
var statearr_36801_36869 = state_36748__$1;
(statearr_36801_36869[(2)] = null);

(statearr_36801_36869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (35))){
var inst_36730 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36802_36870 = state_36748__$1;
(statearr_36802_36870[(2)] = inst_36730);

(statearr_36802_36870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (19))){
var inst_36647 = (state_36748[(7)]);
var inst_36651 = cljs.core.chunk_first.call(null,inst_36647);
var inst_36652 = cljs.core.chunk_rest.call(null,inst_36647);
var inst_36653 = cljs.core.count.call(null,inst_36651);
var inst_36625 = inst_36652;
var inst_36626 = inst_36651;
var inst_36627 = inst_36653;
var inst_36628 = (0);
var state_36748__$1 = (function (){var statearr_36803 = state_36748;
(statearr_36803[(13)] = inst_36628);

(statearr_36803[(14)] = inst_36625);

(statearr_36803[(16)] = inst_36626);

(statearr_36803[(17)] = inst_36627);

return statearr_36803;
})();
var statearr_36804_36871 = state_36748__$1;
(statearr_36804_36871[(2)] = null);

(statearr_36804_36871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (11))){
var inst_36625 = (state_36748[(14)]);
var inst_36647 = (state_36748[(7)]);
var inst_36647__$1 = cljs.core.seq.call(null,inst_36625);
var state_36748__$1 = (function (){var statearr_36805 = state_36748;
(statearr_36805[(7)] = inst_36647__$1);

return statearr_36805;
})();
if(inst_36647__$1){
var statearr_36806_36872 = state_36748__$1;
(statearr_36806_36872[(1)] = (16));

} else {
var statearr_36807_36873 = state_36748__$1;
(statearr_36807_36873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (9))){
var inst_36677 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36808_36874 = state_36748__$1;
(statearr_36808_36874[(2)] = inst_36677);

(statearr_36808_36874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (5))){
var inst_36623 = cljs.core.deref.call(null,cs);
var inst_36624 = cljs.core.seq.call(null,inst_36623);
var inst_36625 = inst_36624;
var inst_36626 = null;
var inst_36627 = (0);
var inst_36628 = (0);
var state_36748__$1 = (function (){var statearr_36809 = state_36748;
(statearr_36809[(13)] = inst_36628);

(statearr_36809[(14)] = inst_36625);

(statearr_36809[(16)] = inst_36626);

(statearr_36809[(17)] = inst_36627);

return statearr_36809;
})();
var statearr_36810_36875 = state_36748__$1;
(statearr_36810_36875[(2)] = null);

(statearr_36810_36875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (14))){
var state_36748__$1 = state_36748;
var statearr_36811_36876 = state_36748__$1;
(statearr_36811_36876[(2)] = null);

(statearr_36811_36876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (45))){
var inst_36738 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36812_36877 = state_36748__$1;
(statearr_36812_36877[(2)] = inst_36738);

(statearr_36812_36877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (26))){
var inst_36680 = (state_36748[(29)]);
var inst_36734 = (state_36748[(2)]);
var inst_36735 = cljs.core.seq.call(null,inst_36680);
var state_36748__$1 = (function (){var statearr_36813 = state_36748;
(statearr_36813[(31)] = inst_36734);

return statearr_36813;
})();
if(inst_36735){
var statearr_36814_36878 = state_36748__$1;
(statearr_36814_36878[(1)] = (42));

} else {
var statearr_36815_36879 = state_36748__$1;
(statearr_36815_36879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (16))){
var inst_36647 = (state_36748[(7)]);
var inst_36649 = cljs.core.chunked_seq_QMARK_.call(null,inst_36647);
var state_36748__$1 = state_36748;
if(inst_36649){
var statearr_36816_36880 = state_36748__$1;
(statearr_36816_36880[(1)] = (19));

} else {
var statearr_36817_36881 = state_36748__$1;
(statearr_36817_36881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (38))){
var inst_36727 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36818_36882 = state_36748__$1;
(statearr_36818_36882[(2)] = inst_36727);

(statearr_36818_36882[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (30))){
var state_36748__$1 = state_36748;
var statearr_36819_36883 = state_36748__$1;
(statearr_36819_36883[(2)] = null);

(statearr_36819_36883[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (10))){
var inst_36628 = (state_36748[(13)]);
var inst_36626 = (state_36748[(16)]);
var inst_36636 = cljs.core._nth.call(null,inst_36626,inst_36628);
var inst_36637 = cljs.core.nth.call(null,inst_36636,(0),null);
var inst_36638 = cljs.core.nth.call(null,inst_36636,(1),null);
var state_36748__$1 = (function (){var statearr_36820 = state_36748;
(statearr_36820[(26)] = inst_36637);

return statearr_36820;
})();
if(cljs.core.truth_(inst_36638)){
var statearr_36821_36884 = state_36748__$1;
(statearr_36821_36884[(1)] = (13));

} else {
var statearr_36822_36885 = state_36748__$1;
(statearr_36822_36885[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (18))){
var inst_36673 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36823_36886 = state_36748__$1;
(statearr_36823_36886[(2)] = inst_36673);

(statearr_36823_36886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (42))){
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36748__$1,(45),dchan);
} else {
if((state_val_36749 === (37))){
var inst_36616 = (state_36748[(10)]);
var inst_36707 = (state_36748[(25)]);
var inst_36716 = (state_36748[(23)]);
var inst_36716__$1 = cljs.core.first.call(null,inst_36707);
var inst_36717 = cljs.core.async.put_BANG_.call(null,inst_36716__$1,inst_36616,done);
var state_36748__$1 = (function (){var statearr_36824 = state_36748;
(statearr_36824[(23)] = inst_36716__$1);

return statearr_36824;
})();
if(cljs.core.truth_(inst_36717)){
var statearr_36825_36887 = state_36748__$1;
(statearr_36825_36887[(1)] = (39));

} else {
var statearr_36826_36888 = state_36748__$1;
(statearr_36826_36888[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (8))){
var inst_36628 = (state_36748[(13)]);
var inst_36627 = (state_36748[(17)]);
var inst_36630 = (inst_36628 < inst_36627);
var inst_36631 = inst_36630;
var state_36748__$1 = state_36748;
if(cljs.core.truth_(inst_36631)){
var statearr_36827_36889 = state_36748__$1;
(statearr_36827_36889[(1)] = (10));

} else {
var statearr_36828_36890 = state_36748__$1;
(statearr_36828_36890[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___36836,cs,m,dchan,dctr,done))
;
return ((function (switch__35355__auto__,c__35469__auto___36836,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35356__auto__ = null;
var cljs$core$async$mult_$_state_machine__35356__auto____0 = (function (){
var statearr_36832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36832[(0)] = cljs$core$async$mult_$_state_machine__35356__auto__);

(statearr_36832[(1)] = (1));

return statearr_36832;
});
var cljs$core$async$mult_$_state_machine__35356__auto____1 = (function (state_36748){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_36748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e36833){if((e36833 instanceof Object)){
var ex__35359__auto__ = e36833;
var statearr_36834_36891 = state_36748;
(statearr_36834_36891[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36892 = state_36748;
state_36748 = G__36892;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35356__auto__ = function(state_36748){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35356__auto____1.call(this,state_36748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35356__auto____0;
cljs$core$async$mult_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35356__auto____1;
return cljs$core$async$mult_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___36836,cs,m,dchan,dctr,done))
})();
var state__35471__auto__ = (function (){var statearr_36835 = f__35470__auto__.call(null);
(statearr_36835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___36836);

return statearr_36835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___36836,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args36893 = [];
var len__13330__auto___36896 = arguments.length;
var i__13331__auto___36897 = (0);
while(true){
if((i__13331__auto___36897 < len__13330__auto___36896)){
args36893.push((arguments[i__13331__auto___36897]));

var G__36898 = (i__13331__auto___36897 + (1));
i__13331__auto___36897 = G__36898;
continue;
} else {
}
break;
}

var G__36895 = args36893.length;
switch (G__36895) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36893.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,ch);
} else {
var m__12861__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,ch);
} else {
var m__12861__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m);
} else {
var m__12861__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,state_map);
} else {
var m__12861__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12860__auto__ = (((m == null))?null:m);
var m__12861__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,m,mode);
} else {
var m__12861__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__13337__auto__ = [];
var len__13330__auto___36910 = arguments.length;
var i__13331__auto___36911 = (0);
while(true){
if((i__13331__auto___36911 < len__13330__auto___36910)){
args__13337__auto__.push((arguments[i__13331__auto___36911]));

var G__36912 = (i__13331__auto___36911 + (1));
i__13331__auto___36911 = G__36912;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((3) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13338__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36904){
var map__36905 = p__36904;
var map__36905__$1 = ((((!((map__36905 == null)))?((((map__36905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36905):map__36905);
var opts = map__36905__$1;
var statearr_36907_36913 = state;
(statearr_36907_36913[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__36905,map__36905__$1,opts){
return (function (val){
var statearr_36908_36914 = state;
(statearr_36908_36914[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36905,map__36905__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_36909_36915 = state;
(statearr_36909_36915[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36900){
var G__36901 = cljs.core.first.call(null,seq36900);
var seq36900__$1 = cljs.core.next.call(null,seq36900);
var G__36902 = cljs.core.first.call(null,seq36900__$1);
var seq36900__$2 = cljs.core.next.call(null,seq36900__$1);
var G__36903 = cljs.core.first.call(null,seq36900__$2);
var seq36900__$3 = cljs.core.next.call(null,seq36900__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36901,G__36902,G__36903,seq36900__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async37081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37081 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37082){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37082 = meta37082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37083,meta37082__$1){
var self__ = this;
var _37083__$1 = this;
return (new cljs.core.async.t_cljs$core$async37081(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37082__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37083){
var self__ = this;
var _37083__$1 = this;
return self__.meta37082;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37082","meta37082",95943853,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37081";

cljs.core.async.t_cljs$core$async37081.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37081");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37081 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37082){
return (new cljs.core.async.t_cljs$core$async37081(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37082));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37081(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35469__auto___37246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37183){
var state_val_37184 = (state_37183[(1)]);
if((state_val_37184 === (7))){
var inst_37099 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37185_37247 = state_37183__$1;
(statearr_37185_37247[(2)] = inst_37099);

(statearr_37185_37247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (20))){
var inst_37111 = (state_37183[(7)]);
var state_37183__$1 = state_37183;
var statearr_37186_37248 = state_37183__$1;
(statearr_37186_37248[(2)] = inst_37111);

(statearr_37186_37248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (27))){
var state_37183__$1 = state_37183;
var statearr_37187_37249 = state_37183__$1;
(statearr_37187_37249[(2)] = null);

(statearr_37187_37249[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (1))){
var inst_37087 = (state_37183[(8)]);
var inst_37087__$1 = calc_state.call(null);
var inst_37089 = (inst_37087__$1 == null);
var inst_37090 = cljs.core.not.call(null,inst_37089);
var state_37183__$1 = (function (){var statearr_37188 = state_37183;
(statearr_37188[(8)] = inst_37087__$1);

return statearr_37188;
})();
if(inst_37090){
var statearr_37189_37250 = state_37183__$1;
(statearr_37189_37250[(1)] = (2));

} else {
var statearr_37190_37251 = state_37183__$1;
(statearr_37190_37251[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (24))){
var inst_37134 = (state_37183[(9)]);
var inst_37143 = (state_37183[(10)]);
var inst_37157 = (state_37183[(11)]);
var inst_37157__$1 = inst_37134.call(null,inst_37143);
var state_37183__$1 = (function (){var statearr_37191 = state_37183;
(statearr_37191[(11)] = inst_37157__$1);

return statearr_37191;
})();
if(cljs.core.truth_(inst_37157__$1)){
var statearr_37192_37252 = state_37183__$1;
(statearr_37192_37252[(1)] = (29));

} else {
var statearr_37193_37253 = state_37183__$1;
(statearr_37193_37253[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (4))){
var inst_37102 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37102)){
var statearr_37194_37254 = state_37183__$1;
(statearr_37194_37254[(1)] = (8));

} else {
var statearr_37195_37255 = state_37183__$1;
(statearr_37195_37255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (15))){
var inst_37128 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37128)){
var statearr_37196_37256 = state_37183__$1;
(statearr_37196_37256[(1)] = (19));

} else {
var statearr_37197_37257 = state_37183__$1;
(statearr_37197_37257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (21))){
var inst_37133 = (state_37183[(12)]);
var inst_37133__$1 = (state_37183[(2)]);
var inst_37134 = cljs.core.get.call(null,inst_37133__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37135 = cljs.core.get.call(null,inst_37133__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37136 = cljs.core.get.call(null,inst_37133__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37183__$1 = (function (){var statearr_37198 = state_37183;
(statearr_37198[(13)] = inst_37135);

(statearr_37198[(9)] = inst_37134);

(statearr_37198[(12)] = inst_37133__$1);

return statearr_37198;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37183__$1,(22),inst_37136);
} else {
if((state_val_37184 === (31))){
var inst_37165 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37165)){
var statearr_37199_37258 = state_37183__$1;
(statearr_37199_37258[(1)] = (32));

} else {
var statearr_37200_37259 = state_37183__$1;
(statearr_37200_37259[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (32))){
var inst_37142 = (state_37183[(14)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37183__$1,(35),out,inst_37142);
} else {
if((state_val_37184 === (33))){
var inst_37133 = (state_37183[(12)]);
var inst_37111 = inst_37133;
var state_37183__$1 = (function (){var statearr_37201 = state_37183;
(statearr_37201[(7)] = inst_37111);

return statearr_37201;
})();
var statearr_37202_37260 = state_37183__$1;
(statearr_37202_37260[(2)] = null);

(statearr_37202_37260[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (13))){
var inst_37111 = (state_37183[(7)]);
var inst_37118 = inst_37111.cljs$lang$protocol_mask$partition0$;
var inst_37119 = (inst_37118 & (64));
var inst_37120 = inst_37111.cljs$core$ISeq$;
var inst_37121 = (inst_37119) || (inst_37120);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37121)){
var statearr_37203_37261 = state_37183__$1;
(statearr_37203_37261[(1)] = (16));

} else {
var statearr_37204_37262 = state_37183__$1;
(statearr_37204_37262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (22))){
var inst_37142 = (state_37183[(14)]);
var inst_37143 = (state_37183[(10)]);
var inst_37141 = (state_37183[(2)]);
var inst_37142__$1 = cljs.core.nth.call(null,inst_37141,(0),null);
var inst_37143__$1 = cljs.core.nth.call(null,inst_37141,(1),null);
var inst_37144 = (inst_37142__$1 == null);
var inst_37145 = cljs.core._EQ_.call(null,inst_37143__$1,change);
var inst_37146 = (inst_37144) || (inst_37145);
var state_37183__$1 = (function (){var statearr_37205 = state_37183;
(statearr_37205[(14)] = inst_37142__$1);

(statearr_37205[(10)] = inst_37143__$1);

return statearr_37205;
})();
if(cljs.core.truth_(inst_37146)){
var statearr_37206_37263 = state_37183__$1;
(statearr_37206_37263[(1)] = (23));

} else {
var statearr_37207_37264 = state_37183__$1;
(statearr_37207_37264[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (36))){
var inst_37133 = (state_37183[(12)]);
var inst_37111 = inst_37133;
var state_37183__$1 = (function (){var statearr_37208 = state_37183;
(statearr_37208[(7)] = inst_37111);

return statearr_37208;
})();
var statearr_37209_37265 = state_37183__$1;
(statearr_37209_37265[(2)] = null);

(statearr_37209_37265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (29))){
var inst_37157 = (state_37183[(11)]);
var state_37183__$1 = state_37183;
var statearr_37210_37266 = state_37183__$1;
(statearr_37210_37266[(2)] = inst_37157);

(statearr_37210_37266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (6))){
var state_37183__$1 = state_37183;
var statearr_37211_37267 = state_37183__$1;
(statearr_37211_37267[(2)] = false);

(statearr_37211_37267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (28))){
var inst_37153 = (state_37183[(2)]);
var inst_37154 = calc_state.call(null);
var inst_37111 = inst_37154;
var state_37183__$1 = (function (){var statearr_37212 = state_37183;
(statearr_37212[(15)] = inst_37153);

(statearr_37212[(7)] = inst_37111);

return statearr_37212;
})();
var statearr_37213_37268 = state_37183__$1;
(statearr_37213_37268[(2)] = null);

(statearr_37213_37268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (25))){
var inst_37179 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37214_37269 = state_37183__$1;
(statearr_37214_37269[(2)] = inst_37179);

(statearr_37214_37269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (34))){
var inst_37177 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37215_37270 = state_37183__$1;
(statearr_37215_37270[(2)] = inst_37177);

(statearr_37215_37270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (17))){
var state_37183__$1 = state_37183;
var statearr_37216_37271 = state_37183__$1;
(statearr_37216_37271[(2)] = false);

(statearr_37216_37271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (3))){
var state_37183__$1 = state_37183;
var statearr_37217_37272 = state_37183__$1;
(statearr_37217_37272[(2)] = false);

(statearr_37217_37272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (12))){
var inst_37181 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37183__$1,inst_37181);
} else {
if((state_val_37184 === (2))){
var inst_37087 = (state_37183[(8)]);
var inst_37092 = inst_37087.cljs$lang$protocol_mask$partition0$;
var inst_37093 = (inst_37092 & (64));
var inst_37094 = inst_37087.cljs$core$ISeq$;
var inst_37095 = (inst_37093) || (inst_37094);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37095)){
var statearr_37218_37273 = state_37183__$1;
(statearr_37218_37273[(1)] = (5));

} else {
var statearr_37219_37274 = state_37183__$1;
(statearr_37219_37274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (23))){
var inst_37142 = (state_37183[(14)]);
var inst_37148 = (inst_37142 == null);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37148)){
var statearr_37220_37275 = state_37183__$1;
(statearr_37220_37275[(1)] = (26));

} else {
var statearr_37221_37276 = state_37183__$1;
(statearr_37221_37276[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (35))){
var inst_37168 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37168)){
var statearr_37222_37277 = state_37183__$1;
(statearr_37222_37277[(1)] = (36));

} else {
var statearr_37223_37278 = state_37183__$1;
(statearr_37223_37278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (19))){
var inst_37111 = (state_37183[(7)]);
var inst_37130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37111);
var state_37183__$1 = state_37183;
var statearr_37224_37279 = state_37183__$1;
(statearr_37224_37279[(2)] = inst_37130);

(statearr_37224_37279[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (11))){
var inst_37111 = (state_37183[(7)]);
var inst_37115 = (inst_37111 == null);
var inst_37116 = cljs.core.not.call(null,inst_37115);
var state_37183__$1 = state_37183;
if(inst_37116){
var statearr_37225_37280 = state_37183__$1;
(statearr_37225_37280[(1)] = (13));

} else {
var statearr_37226_37281 = state_37183__$1;
(statearr_37226_37281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (9))){
var inst_37087 = (state_37183[(8)]);
var state_37183__$1 = state_37183;
var statearr_37227_37282 = state_37183__$1;
(statearr_37227_37282[(2)] = inst_37087);

(statearr_37227_37282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (5))){
var state_37183__$1 = state_37183;
var statearr_37228_37283 = state_37183__$1;
(statearr_37228_37283[(2)] = true);

(statearr_37228_37283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (14))){
var state_37183__$1 = state_37183;
var statearr_37229_37284 = state_37183__$1;
(statearr_37229_37284[(2)] = false);

(statearr_37229_37284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (26))){
var inst_37143 = (state_37183[(10)]);
var inst_37150 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37143);
var state_37183__$1 = state_37183;
var statearr_37230_37285 = state_37183__$1;
(statearr_37230_37285[(2)] = inst_37150);

(statearr_37230_37285[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (16))){
var state_37183__$1 = state_37183;
var statearr_37231_37286 = state_37183__$1;
(statearr_37231_37286[(2)] = true);

(statearr_37231_37286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (38))){
var inst_37173 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37232_37287 = state_37183__$1;
(statearr_37232_37287[(2)] = inst_37173);

(statearr_37232_37287[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (30))){
var inst_37135 = (state_37183[(13)]);
var inst_37134 = (state_37183[(9)]);
var inst_37143 = (state_37183[(10)]);
var inst_37160 = cljs.core.empty_QMARK_.call(null,inst_37134);
var inst_37161 = inst_37135.call(null,inst_37143);
var inst_37162 = cljs.core.not.call(null,inst_37161);
var inst_37163 = (inst_37160) && (inst_37162);
var state_37183__$1 = state_37183;
var statearr_37233_37288 = state_37183__$1;
(statearr_37233_37288[(2)] = inst_37163);

(statearr_37233_37288[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (10))){
var inst_37087 = (state_37183[(8)]);
var inst_37107 = (state_37183[(2)]);
var inst_37108 = cljs.core.get.call(null,inst_37107,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37109 = cljs.core.get.call(null,inst_37107,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37110 = cljs.core.get.call(null,inst_37107,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37111 = inst_37087;
var state_37183__$1 = (function (){var statearr_37234 = state_37183;
(statearr_37234[(16)] = inst_37110);

(statearr_37234[(17)] = inst_37109);

(statearr_37234[(7)] = inst_37111);

(statearr_37234[(18)] = inst_37108);

return statearr_37234;
})();
var statearr_37235_37289 = state_37183__$1;
(statearr_37235_37289[(2)] = null);

(statearr_37235_37289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (18))){
var inst_37125 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37236_37290 = state_37183__$1;
(statearr_37236_37290[(2)] = inst_37125);

(statearr_37236_37290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (37))){
var state_37183__$1 = state_37183;
var statearr_37237_37291 = state_37183__$1;
(statearr_37237_37291[(2)] = null);

(statearr_37237_37291[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (8))){
var inst_37087 = (state_37183[(8)]);
var inst_37104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37087);
var state_37183__$1 = state_37183;
var statearr_37238_37292 = state_37183__$1;
(statearr_37238_37292[(2)] = inst_37104);

(statearr_37238_37292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35355__auto__,c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35356__auto__ = null;
var cljs$core$async$mix_$_state_machine__35356__auto____0 = (function (){
var statearr_37242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37242[(0)] = cljs$core$async$mix_$_state_machine__35356__auto__);

(statearr_37242[(1)] = (1));

return statearr_37242;
});
var cljs$core$async$mix_$_state_machine__35356__auto____1 = (function (state_37183){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37243){if((e37243 instanceof Object)){
var ex__35359__auto__ = e37243;
var statearr_37244_37293 = state_37183;
(statearr_37244_37293[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37294 = state_37183;
state_37183 = G__37294;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35356__auto__ = function(state_37183){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35356__auto____1.call(this,state_37183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35356__auto____0;
cljs$core$async$mix_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35356__auto____1;
return cljs$core$async$mix_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35471__auto__ = (function (){var statearr_37245 = f__35470__auto__.call(null);
(statearr_37245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37246);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37246,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12860__auto__ = (((p == null))?null:p);
var m__12861__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__12861__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12860__auto__ = (((p == null))?null:p);
var m__12861__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,p,v,ch);
} else {
var m__12861__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37295 = [];
var len__13330__auto___37298 = arguments.length;
var i__13331__auto___37299 = (0);
while(true){
if((i__13331__auto___37299 < len__13330__auto___37298)){
args37295.push((arguments[i__13331__auto___37299]));

var G__37300 = (i__13331__auto___37299 + (1));
i__13331__auto___37299 = G__37300;
continue;
} else {
}
break;
}

var G__37297 = args37295.length;
switch (G__37297) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37295.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12860__auto__ = (((p == null))?null:p);
var m__12861__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,p);
} else {
var m__12861__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12860__auto__ = (((p == null))?null:p);
var m__12861__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12860__auto__)]);
if(!((m__12861__auto__ == null))){
return m__12861__auto__.call(null,p,v);
} else {
var m__12861__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12861__auto____$1 == null))){
return m__12861__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args37303 = [];
var len__13330__auto___37428 = arguments.length;
var i__13331__auto___37429 = (0);
while(true){
if((i__13331__auto___37429 < len__13330__auto___37428)){
args37303.push((arguments[i__13331__auto___37429]));

var G__37430 = (i__13331__auto___37429 + (1));
i__13331__auto___37429 = G__37430;
continue;
} else {
}
break;
}

var G__37305 = args37303.length;
switch (G__37305) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37303.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12147__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12147__auto__,mults){
return (function (p1__37302_SHARP_){
if(cljs.core.truth_(p1__37302_SHARP_.call(null,topic))){
return p1__37302_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37302_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12147__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37307 = meta37307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37308,meta37307__$1){
var self__ = this;
var _37308__$1 = this;
return (new cljs.core.async.t_cljs$core$async37306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37308){
var self__ = this;
var _37308__$1 = this;
return self__.meta37307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37307","meta37307",466747121,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37306";

cljs.core.async.t_cljs$core$async37306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37306");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37307){
return (new cljs.core.async.t_cljs$core$async37306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35469__auto___37432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37432,mults,ensure_mult,p){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37432,mults,ensure_mult,p){
return (function (state_37380){
var state_val_37381 = (state_37380[(1)]);
if((state_val_37381 === (7))){
var inst_37376 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37382_37433 = state_37380__$1;
(statearr_37382_37433[(2)] = inst_37376);

(statearr_37382_37433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (20))){
var state_37380__$1 = state_37380;
var statearr_37383_37434 = state_37380__$1;
(statearr_37383_37434[(2)] = null);

(statearr_37383_37434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (1))){
var state_37380__$1 = state_37380;
var statearr_37384_37435 = state_37380__$1;
(statearr_37384_37435[(2)] = null);

(statearr_37384_37435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (24))){
var inst_37359 = (state_37380[(7)]);
var inst_37368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37359);
var state_37380__$1 = state_37380;
var statearr_37385_37436 = state_37380__$1;
(statearr_37385_37436[(2)] = inst_37368);

(statearr_37385_37436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (4))){
var inst_37311 = (state_37380[(8)]);
var inst_37311__$1 = (state_37380[(2)]);
var inst_37312 = (inst_37311__$1 == null);
var state_37380__$1 = (function (){var statearr_37386 = state_37380;
(statearr_37386[(8)] = inst_37311__$1);

return statearr_37386;
})();
if(cljs.core.truth_(inst_37312)){
var statearr_37387_37437 = state_37380__$1;
(statearr_37387_37437[(1)] = (5));

} else {
var statearr_37388_37438 = state_37380__$1;
(statearr_37388_37438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (15))){
var inst_37353 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37389_37439 = state_37380__$1;
(statearr_37389_37439[(2)] = inst_37353);

(statearr_37389_37439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (21))){
var inst_37373 = (state_37380[(2)]);
var state_37380__$1 = (function (){var statearr_37390 = state_37380;
(statearr_37390[(9)] = inst_37373);

return statearr_37390;
})();
var statearr_37391_37440 = state_37380__$1;
(statearr_37391_37440[(2)] = null);

(statearr_37391_37440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (13))){
var inst_37335 = (state_37380[(10)]);
var inst_37337 = cljs.core.chunked_seq_QMARK_.call(null,inst_37335);
var state_37380__$1 = state_37380;
if(inst_37337){
var statearr_37392_37441 = state_37380__$1;
(statearr_37392_37441[(1)] = (16));

} else {
var statearr_37393_37442 = state_37380__$1;
(statearr_37393_37442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (22))){
var inst_37365 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
if(cljs.core.truth_(inst_37365)){
var statearr_37394_37443 = state_37380__$1;
(statearr_37394_37443[(1)] = (23));

} else {
var statearr_37395_37444 = state_37380__$1;
(statearr_37395_37444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (6))){
var inst_37359 = (state_37380[(7)]);
var inst_37361 = (state_37380[(11)]);
var inst_37311 = (state_37380[(8)]);
var inst_37359__$1 = topic_fn.call(null,inst_37311);
var inst_37360 = cljs.core.deref.call(null,mults);
var inst_37361__$1 = cljs.core.get.call(null,inst_37360,inst_37359__$1);
var state_37380__$1 = (function (){var statearr_37396 = state_37380;
(statearr_37396[(7)] = inst_37359__$1);

(statearr_37396[(11)] = inst_37361__$1);

return statearr_37396;
})();
if(cljs.core.truth_(inst_37361__$1)){
var statearr_37397_37445 = state_37380__$1;
(statearr_37397_37445[(1)] = (19));

} else {
var statearr_37398_37446 = state_37380__$1;
(statearr_37398_37446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (25))){
var inst_37370 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37399_37447 = state_37380__$1;
(statearr_37399_37447[(2)] = inst_37370);

(statearr_37399_37447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (17))){
var inst_37335 = (state_37380[(10)]);
var inst_37344 = cljs.core.first.call(null,inst_37335);
var inst_37345 = cljs.core.async.muxch_STAR_.call(null,inst_37344);
var inst_37346 = cljs.core.async.close_BANG_.call(null,inst_37345);
var inst_37347 = cljs.core.next.call(null,inst_37335);
var inst_37321 = inst_37347;
var inst_37322 = null;
var inst_37323 = (0);
var inst_37324 = (0);
var state_37380__$1 = (function (){var statearr_37400 = state_37380;
(statearr_37400[(12)] = inst_37321);

(statearr_37400[(13)] = inst_37323);

(statearr_37400[(14)] = inst_37322);

(statearr_37400[(15)] = inst_37346);

(statearr_37400[(16)] = inst_37324);

return statearr_37400;
})();
var statearr_37401_37448 = state_37380__$1;
(statearr_37401_37448[(2)] = null);

(statearr_37401_37448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (3))){
var inst_37378 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37380__$1,inst_37378);
} else {
if((state_val_37381 === (12))){
var inst_37355 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37402_37449 = state_37380__$1;
(statearr_37402_37449[(2)] = inst_37355);

(statearr_37402_37449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (2))){
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37380__$1,(4),ch);
} else {
if((state_val_37381 === (23))){
var state_37380__$1 = state_37380;
var statearr_37403_37450 = state_37380__$1;
(statearr_37403_37450[(2)] = null);

(statearr_37403_37450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (19))){
var inst_37361 = (state_37380[(11)]);
var inst_37311 = (state_37380[(8)]);
var inst_37363 = cljs.core.async.muxch_STAR_.call(null,inst_37361);
var state_37380__$1 = state_37380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37380__$1,(22),inst_37363,inst_37311);
} else {
if((state_val_37381 === (11))){
var inst_37321 = (state_37380[(12)]);
var inst_37335 = (state_37380[(10)]);
var inst_37335__$1 = cljs.core.seq.call(null,inst_37321);
var state_37380__$1 = (function (){var statearr_37404 = state_37380;
(statearr_37404[(10)] = inst_37335__$1);

return statearr_37404;
})();
if(inst_37335__$1){
var statearr_37405_37451 = state_37380__$1;
(statearr_37405_37451[(1)] = (13));

} else {
var statearr_37406_37452 = state_37380__$1;
(statearr_37406_37452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (9))){
var inst_37357 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37407_37453 = state_37380__$1;
(statearr_37407_37453[(2)] = inst_37357);

(statearr_37407_37453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (5))){
var inst_37318 = cljs.core.deref.call(null,mults);
var inst_37319 = cljs.core.vals.call(null,inst_37318);
var inst_37320 = cljs.core.seq.call(null,inst_37319);
var inst_37321 = inst_37320;
var inst_37322 = null;
var inst_37323 = (0);
var inst_37324 = (0);
var state_37380__$1 = (function (){var statearr_37408 = state_37380;
(statearr_37408[(12)] = inst_37321);

(statearr_37408[(13)] = inst_37323);

(statearr_37408[(14)] = inst_37322);

(statearr_37408[(16)] = inst_37324);

return statearr_37408;
})();
var statearr_37409_37454 = state_37380__$1;
(statearr_37409_37454[(2)] = null);

(statearr_37409_37454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (14))){
var state_37380__$1 = state_37380;
var statearr_37413_37455 = state_37380__$1;
(statearr_37413_37455[(2)] = null);

(statearr_37413_37455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (16))){
var inst_37335 = (state_37380[(10)]);
var inst_37339 = cljs.core.chunk_first.call(null,inst_37335);
var inst_37340 = cljs.core.chunk_rest.call(null,inst_37335);
var inst_37341 = cljs.core.count.call(null,inst_37339);
var inst_37321 = inst_37340;
var inst_37322 = inst_37339;
var inst_37323 = inst_37341;
var inst_37324 = (0);
var state_37380__$1 = (function (){var statearr_37414 = state_37380;
(statearr_37414[(12)] = inst_37321);

(statearr_37414[(13)] = inst_37323);

(statearr_37414[(14)] = inst_37322);

(statearr_37414[(16)] = inst_37324);

return statearr_37414;
})();
var statearr_37415_37456 = state_37380__$1;
(statearr_37415_37456[(2)] = null);

(statearr_37415_37456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (10))){
var inst_37321 = (state_37380[(12)]);
var inst_37323 = (state_37380[(13)]);
var inst_37322 = (state_37380[(14)]);
var inst_37324 = (state_37380[(16)]);
var inst_37329 = cljs.core._nth.call(null,inst_37322,inst_37324);
var inst_37330 = cljs.core.async.muxch_STAR_.call(null,inst_37329);
var inst_37331 = cljs.core.async.close_BANG_.call(null,inst_37330);
var inst_37332 = (inst_37324 + (1));
var tmp37410 = inst_37321;
var tmp37411 = inst_37323;
var tmp37412 = inst_37322;
var inst_37321__$1 = tmp37410;
var inst_37322__$1 = tmp37412;
var inst_37323__$1 = tmp37411;
var inst_37324__$1 = inst_37332;
var state_37380__$1 = (function (){var statearr_37416 = state_37380;
(statearr_37416[(12)] = inst_37321__$1);

(statearr_37416[(13)] = inst_37323__$1);

(statearr_37416[(14)] = inst_37322__$1);

(statearr_37416[(17)] = inst_37331);

(statearr_37416[(16)] = inst_37324__$1);

return statearr_37416;
})();
var statearr_37417_37457 = state_37380__$1;
(statearr_37417_37457[(2)] = null);

(statearr_37417_37457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (18))){
var inst_37350 = (state_37380[(2)]);
var state_37380__$1 = state_37380;
var statearr_37418_37458 = state_37380__$1;
(statearr_37418_37458[(2)] = inst_37350);

(statearr_37418_37458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37381 === (8))){
var inst_37323 = (state_37380[(13)]);
var inst_37324 = (state_37380[(16)]);
var inst_37326 = (inst_37324 < inst_37323);
var inst_37327 = inst_37326;
var state_37380__$1 = state_37380;
if(cljs.core.truth_(inst_37327)){
var statearr_37419_37459 = state_37380__$1;
(statearr_37419_37459[(1)] = (10));

} else {
var statearr_37420_37460 = state_37380__$1;
(statearr_37420_37460[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37432,mults,ensure_mult,p))
;
return ((function (switch__35355__auto__,c__35469__auto___37432,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_37424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37424[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_37424[(1)] = (1));

return statearr_37424;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_37380){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37425){if((e37425 instanceof Object)){
var ex__35359__auto__ = e37425;
var statearr_37426_37461 = state_37380;
(statearr_37426_37461[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37462 = state_37380;
state_37380 = G__37462;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_37380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_37380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37432,mults,ensure_mult,p))
})();
var state__35471__auto__ = (function (){var statearr_37427 = f__35470__auto__.call(null);
(statearr_37427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37432);

return statearr_37427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37432,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args37463 = [];
var len__13330__auto___37466 = arguments.length;
var i__13331__auto___37467 = (0);
while(true){
if((i__13331__auto___37467 < len__13330__auto___37466)){
args37463.push((arguments[i__13331__auto___37467]));

var G__37468 = (i__13331__auto___37467 + (1));
i__13331__auto___37467 = G__37468;
continue;
} else {
}
break;
}

var G__37465 = args37463.length;
switch (G__37465) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37463.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args37470 = [];
var len__13330__auto___37473 = arguments.length;
var i__13331__auto___37474 = (0);
while(true){
if((i__13331__auto___37474 < len__13330__auto___37473)){
args37470.push((arguments[i__13331__auto___37474]));

var G__37475 = (i__13331__auto___37474 + (1));
i__13331__auto___37474 = G__37475;
continue;
} else {
}
break;
}

var G__37472 = args37470.length;
switch (G__37472) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37470.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args37477 = [];
var len__13330__auto___37548 = arguments.length;
var i__13331__auto___37549 = (0);
while(true){
if((i__13331__auto___37549 < len__13330__auto___37548)){
args37477.push((arguments[i__13331__auto___37549]));

var G__37550 = (i__13331__auto___37549 + (1));
i__13331__auto___37549 = G__37550;
continue;
} else {
}
break;
}

var G__37479 = args37477.length;
switch (G__37479) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37477.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35469__auto___37552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37518){
var state_val_37519 = (state_37518[(1)]);
if((state_val_37519 === (7))){
var state_37518__$1 = state_37518;
var statearr_37520_37553 = state_37518__$1;
(statearr_37520_37553[(2)] = null);

(statearr_37520_37553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (1))){
var state_37518__$1 = state_37518;
var statearr_37521_37554 = state_37518__$1;
(statearr_37521_37554[(2)] = null);

(statearr_37521_37554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (4))){
var inst_37482 = (state_37518[(7)]);
var inst_37484 = (inst_37482 < cnt);
var state_37518__$1 = state_37518;
if(cljs.core.truth_(inst_37484)){
var statearr_37522_37555 = state_37518__$1;
(statearr_37522_37555[(1)] = (6));

} else {
var statearr_37523_37556 = state_37518__$1;
(statearr_37523_37556[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (15))){
var inst_37514 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37524_37557 = state_37518__$1;
(statearr_37524_37557[(2)] = inst_37514);

(statearr_37524_37557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (13))){
var inst_37507 = cljs.core.async.close_BANG_.call(null,out);
var state_37518__$1 = state_37518;
var statearr_37525_37558 = state_37518__$1;
(statearr_37525_37558[(2)] = inst_37507);

(statearr_37525_37558[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (6))){
var state_37518__$1 = state_37518;
var statearr_37526_37559 = state_37518__$1;
(statearr_37526_37559[(2)] = null);

(statearr_37526_37559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (3))){
var inst_37516 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37518__$1,inst_37516);
} else {
if((state_val_37519 === (12))){
var inst_37504 = (state_37518[(8)]);
var inst_37504__$1 = (state_37518[(2)]);
var inst_37505 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37504__$1);
var state_37518__$1 = (function (){var statearr_37527 = state_37518;
(statearr_37527[(8)] = inst_37504__$1);

return statearr_37527;
})();
if(cljs.core.truth_(inst_37505)){
var statearr_37528_37560 = state_37518__$1;
(statearr_37528_37560[(1)] = (13));

} else {
var statearr_37529_37561 = state_37518__$1;
(statearr_37529_37561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (2))){
var inst_37481 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37482 = (0);
var state_37518__$1 = (function (){var statearr_37530 = state_37518;
(statearr_37530[(9)] = inst_37481);

(statearr_37530[(7)] = inst_37482);

return statearr_37530;
})();
var statearr_37531_37562 = state_37518__$1;
(statearr_37531_37562[(2)] = null);

(statearr_37531_37562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (11))){
var inst_37482 = (state_37518[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37518,(10),Object,null,(9));
var inst_37491 = chs__$1.call(null,inst_37482);
var inst_37492 = done.call(null,inst_37482);
var inst_37493 = cljs.core.async.take_BANG_.call(null,inst_37491,inst_37492);
var state_37518__$1 = state_37518;
var statearr_37532_37563 = state_37518__$1;
(statearr_37532_37563[(2)] = inst_37493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (9))){
var inst_37482 = (state_37518[(7)]);
var inst_37495 = (state_37518[(2)]);
var inst_37496 = (inst_37482 + (1));
var inst_37482__$1 = inst_37496;
var state_37518__$1 = (function (){var statearr_37533 = state_37518;
(statearr_37533[(10)] = inst_37495);

(statearr_37533[(7)] = inst_37482__$1);

return statearr_37533;
})();
var statearr_37534_37564 = state_37518__$1;
(statearr_37534_37564[(2)] = null);

(statearr_37534_37564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (5))){
var inst_37502 = (state_37518[(2)]);
var state_37518__$1 = (function (){var statearr_37535 = state_37518;
(statearr_37535[(11)] = inst_37502);

return statearr_37535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37518__$1,(12),dchan);
} else {
if((state_val_37519 === (14))){
var inst_37504 = (state_37518[(8)]);
var inst_37509 = cljs.core.apply.call(null,f,inst_37504);
var state_37518__$1 = state_37518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37518__$1,(16),out,inst_37509);
} else {
if((state_val_37519 === (16))){
var inst_37511 = (state_37518[(2)]);
var state_37518__$1 = (function (){var statearr_37536 = state_37518;
(statearr_37536[(12)] = inst_37511);

return statearr_37536;
})();
var statearr_37537_37565 = state_37518__$1;
(statearr_37537_37565[(2)] = null);

(statearr_37537_37565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (10))){
var inst_37486 = (state_37518[(2)]);
var inst_37487 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37518__$1 = (function (){var statearr_37538 = state_37518;
(statearr_37538[(13)] = inst_37486);

return statearr_37538;
})();
var statearr_37539_37566 = state_37518__$1;
(statearr_37539_37566[(2)] = inst_37487);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37519 === (8))){
var inst_37500 = (state_37518[(2)]);
var state_37518__$1 = state_37518;
var statearr_37540_37567 = state_37518__$1;
(statearr_37540_37567[(2)] = inst_37500);

(statearr_37540_37567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35355__auto__,c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_37544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37544[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_37544[(1)] = (1));

return statearr_37544;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_37518){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37545){if((e37545 instanceof Object)){
var ex__35359__auto__ = e37545;
var statearr_37546_37568 = state_37518;
(statearr_37546_37568[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37569 = state_37518;
state_37518 = G__37569;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_37518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_37518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35471__auto__ = (function (){var statearr_37547 = f__35470__auto__.call(null);
(statearr_37547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37552);

return statearr_37547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37552,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args37571 = [];
var len__13330__auto___37629 = arguments.length;
var i__13331__auto___37630 = (0);
while(true){
if((i__13331__auto___37630 < len__13330__auto___37629)){
args37571.push((arguments[i__13331__auto___37630]));

var G__37631 = (i__13331__auto___37630 + (1));
i__13331__auto___37630 = G__37631;
continue;
} else {
}
break;
}

var G__37573 = args37571.length;
switch (G__37573) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37571.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___37633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37633,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37633,out){
return (function (state_37605){
var state_val_37606 = (state_37605[(1)]);
if((state_val_37606 === (7))){
var inst_37585 = (state_37605[(7)]);
var inst_37584 = (state_37605[(8)]);
var inst_37584__$1 = (state_37605[(2)]);
var inst_37585__$1 = cljs.core.nth.call(null,inst_37584__$1,(0),null);
var inst_37586 = cljs.core.nth.call(null,inst_37584__$1,(1),null);
var inst_37587 = (inst_37585__$1 == null);
var state_37605__$1 = (function (){var statearr_37607 = state_37605;
(statearr_37607[(9)] = inst_37586);

(statearr_37607[(7)] = inst_37585__$1);

(statearr_37607[(8)] = inst_37584__$1);

return statearr_37607;
})();
if(cljs.core.truth_(inst_37587)){
var statearr_37608_37634 = state_37605__$1;
(statearr_37608_37634[(1)] = (8));

} else {
var statearr_37609_37635 = state_37605__$1;
(statearr_37609_37635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (1))){
var inst_37574 = cljs.core.vec.call(null,chs);
var inst_37575 = inst_37574;
var state_37605__$1 = (function (){var statearr_37610 = state_37605;
(statearr_37610[(10)] = inst_37575);

return statearr_37610;
})();
var statearr_37611_37636 = state_37605__$1;
(statearr_37611_37636[(2)] = null);

(statearr_37611_37636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (4))){
var inst_37575 = (state_37605[(10)]);
var state_37605__$1 = state_37605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37605__$1,(7),inst_37575);
} else {
if((state_val_37606 === (6))){
var inst_37601 = (state_37605[(2)]);
var state_37605__$1 = state_37605;
var statearr_37612_37637 = state_37605__$1;
(statearr_37612_37637[(2)] = inst_37601);

(statearr_37612_37637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (3))){
var inst_37603 = (state_37605[(2)]);
var state_37605__$1 = state_37605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37605__$1,inst_37603);
} else {
if((state_val_37606 === (2))){
var inst_37575 = (state_37605[(10)]);
var inst_37577 = cljs.core.count.call(null,inst_37575);
var inst_37578 = (inst_37577 > (0));
var state_37605__$1 = state_37605;
if(cljs.core.truth_(inst_37578)){
var statearr_37614_37638 = state_37605__$1;
(statearr_37614_37638[(1)] = (4));

} else {
var statearr_37615_37639 = state_37605__$1;
(statearr_37615_37639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (11))){
var inst_37575 = (state_37605[(10)]);
var inst_37594 = (state_37605[(2)]);
var tmp37613 = inst_37575;
var inst_37575__$1 = tmp37613;
var state_37605__$1 = (function (){var statearr_37616 = state_37605;
(statearr_37616[(10)] = inst_37575__$1);

(statearr_37616[(11)] = inst_37594);

return statearr_37616;
})();
var statearr_37617_37640 = state_37605__$1;
(statearr_37617_37640[(2)] = null);

(statearr_37617_37640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (9))){
var inst_37585 = (state_37605[(7)]);
var state_37605__$1 = state_37605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37605__$1,(11),out,inst_37585);
} else {
if((state_val_37606 === (5))){
var inst_37599 = cljs.core.async.close_BANG_.call(null,out);
var state_37605__$1 = state_37605;
var statearr_37618_37641 = state_37605__$1;
(statearr_37618_37641[(2)] = inst_37599);

(statearr_37618_37641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (10))){
var inst_37597 = (state_37605[(2)]);
var state_37605__$1 = state_37605;
var statearr_37619_37642 = state_37605__$1;
(statearr_37619_37642[(2)] = inst_37597);

(statearr_37619_37642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37606 === (8))){
var inst_37586 = (state_37605[(9)]);
var inst_37575 = (state_37605[(10)]);
var inst_37585 = (state_37605[(7)]);
var inst_37584 = (state_37605[(8)]);
var inst_37589 = (function (){var cs = inst_37575;
var vec__37580 = inst_37584;
var v = inst_37585;
var c = inst_37586;
return ((function (cs,vec__37580,v,c,inst_37586,inst_37575,inst_37585,inst_37584,state_val_37606,c__35469__auto___37633,out){
return (function (p1__37570_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37570_SHARP_);
});
;})(cs,vec__37580,v,c,inst_37586,inst_37575,inst_37585,inst_37584,state_val_37606,c__35469__auto___37633,out))
})();
var inst_37590 = cljs.core.filterv.call(null,inst_37589,inst_37575);
var inst_37575__$1 = inst_37590;
var state_37605__$1 = (function (){var statearr_37620 = state_37605;
(statearr_37620[(10)] = inst_37575__$1);

return statearr_37620;
})();
var statearr_37621_37643 = state_37605__$1;
(statearr_37621_37643[(2)] = null);

(statearr_37621_37643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37633,out))
;
return ((function (switch__35355__auto__,c__35469__auto___37633,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_37625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37625[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_37625[(1)] = (1));

return statearr_37625;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_37605){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37626){if((e37626 instanceof Object)){
var ex__35359__auto__ = e37626;
var statearr_37627_37644 = state_37605;
(statearr_37627_37644[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37645 = state_37605;
state_37605 = G__37645;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_37605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_37605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37633,out))
})();
var state__35471__auto__ = (function (){var statearr_37628 = f__35470__auto__.call(null);
(statearr_37628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37633);

return statearr_37628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37633,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args37646 = [];
var len__13330__auto___37695 = arguments.length;
var i__13331__auto___37696 = (0);
while(true){
if((i__13331__auto___37696 < len__13330__auto___37695)){
args37646.push((arguments[i__13331__auto___37696]));

var G__37697 = (i__13331__auto___37696 + (1));
i__13331__auto___37696 = G__37697;
continue;
} else {
}
break;
}

var G__37648 = args37646.length;
switch (G__37648) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37646.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___37699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37699,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37699,out){
return (function (state_37672){
var state_val_37673 = (state_37672[(1)]);
if((state_val_37673 === (7))){
var inst_37654 = (state_37672[(7)]);
var inst_37654__$1 = (state_37672[(2)]);
var inst_37655 = (inst_37654__$1 == null);
var inst_37656 = cljs.core.not.call(null,inst_37655);
var state_37672__$1 = (function (){var statearr_37674 = state_37672;
(statearr_37674[(7)] = inst_37654__$1);

return statearr_37674;
})();
if(inst_37656){
var statearr_37675_37700 = state_37672__$1;
(statearr_37675_37700[(1)] = (8));

} else {
var statearr_37676_37701 = state_37672__$1;
(statearr_37676_37701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (1))){
var inst_37649 = (0);
var state_37672__$1 = (function (){var statearr_37677 = state_37672;
(statearr_37677[(8)] = inst_37649);

return statearr_37677;
})();
var statearr_37678_37702 = state_37672__$1;
(statearr_37678_37702[(2)] = null);

(statearr_37678_37702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (4))){
var state_37672__$1 = state_37672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37672__$1,(7),ch);
} else {
if((state_val_37673 === (6))){
var inst_37667 = (state_37672[(2)]);
var state_37672__$1 = state_37672;
var statearr_37679_37703 = state_37672__$1;
(statearr_37679_37703[(2)] = inst_37667);

(statearr_37679_37703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (3))){
var inst_37669 = (state_37672[(2)]);
var inst_37670 = cljs.core.async.close_BANG_.call(null,out);
var state_37672__$1 = (function (){var statearr_37680 = state_37672;
(statearr_37680[(9)] = inst_37669);

return statearr_37680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37672__$1,inst_37670);
} else {
if((state_val_37673 === (2))){
var inst_37649 = (state_37672[(8)]);
var inst_37651 = (inst_37649 < n);
var state_37672__$1 = state_37672;
if(cljs.core.truth_(inst_37651)){
var statearr_37681_37704 = state_37672__$1;
(statearr_37681_37704[(1)] = (4));

} else {
var statearr_37682_37705 = state_37672__$1;
(statearr_37682_37705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (11))){
var inst_37649 = (state_37672[(8)]);
var inst_37659 = (state_37672[(2)]);
var inst_37660 = (inst_37649 + (1));
var inst_37649__$1 = inst_37660;
var state_37672__$1 = (function (){var statearr_37683 = state_37672;
(statearr_37683[(10)] = inst_37659);

(statearr_37683[(8)] = inst_37649__$1);

return statearr_37683;
})();
var statearr_37684_37706 = state_37672__$1;
(statearr_37684_37706[(2)] = null);

(statearr_37684_37706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (9))){
var state_37672__$1 = state_37672;
var statearr_37685_37707 = state_37672__$1;
(statearr_37685_37707[(2)] = null);

(statearr_37685_37707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (5))){
var state_37672__$1 = state_37672;
var statearr_37686_37708 = state_37672__$1;
(statearr_37686_37708[(2)] = null);

(statearr_37686_37708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (10))){
var inst_37664 = (state_37672[(2)]);
var state_37672__$1 = state_37672;
var statearr_37687_37709 = state_37672__$1;
(statearr_37687_37709[(2)] = inst_37664);

(statearr_37687_37709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37673 === (8))){
var inst_37654 = (state_37672[(7)]);
var state_37672__$1 = state_37672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37672__$1,(11),out,inst_37654);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37699,out))
;
return ((function (switch__35355__auto__,c__35469__auto___37699,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_37691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37691[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_37691[(1)] = (1));

return statearr_37691;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_37672){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37692){if((e37692 instanceof Object)){
var ex__35359__auto__ = e37692;
var statearr_37693_37710 = state_37672;
(statearr_37693_37710[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37711 = state_37672;
state_37672 = G__37711;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_37672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_37672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37699,out))
})();
var state__35471__auto__ = (function (){var statearr_37694 = f__35470__auto__.call(null);
(statearr_37694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37699);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37699,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37719 = (function (map_LT_,f,ch,meta37720){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37720 = meta37720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37721,meta37720__$1){
var self__ = this;
var _37721__$1 = this;
return (new cljs.core.async.t_cljs$core$async37719(self__.map_LT_,self__.f,self__.ch,meta37720__$1));
});

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37721){
var self__ = this;
var _37721__$1 = this;
return self__.meta37720;
});

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37722 = (function (map_LT_,f,ch,meta37720,_,fn1,meta37723){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37720 = meta37720;
this._ = _;
this.fn1 = fn1;
this.meta37723 = meta37723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37724,meta37723__$1){
var self__ = this;
var _37724__$1 = this;
return (new cljs.core.async.t_cljs$core$async37722(self__.map_LT_,self__.f,self__.ch,self__.meta37720,self__._,self__.fn1,meta37723__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37724){
var self__ = this;
var _37724__$1 = this;
return self__.meta37723;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37712_SHARP_){
return f1.call(null,(((p1__37712_SHARP_ == null))?null:self__.f.call(null,p1__37712_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37720","meta37720",1723397637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37719","cljs.core.async/t_cljs$core$async37719",-2058697887,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37723","meta37723",-1903530232,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37722";

cljs.core.async.t_cljs$core$async37722.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37722");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37722 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37722(map_LT___$1,f__$1,ch__$1,meta37720__$1,___$2,fn1__$1,meta37723){
return (new cljs.core.async.t_cljs$core$async37722(map_LT___$1,f__$1,ch__$1,meta37720__$1,___$2,fn1__$1,meta37723));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37722(self__.map_LT_,self__.f,self__.ch,self__.meta37720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__12135__auto__ = ret;
if(cljs.core.truth_(and__12135__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12135__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37720","meta37720",1723397637,null)], null);
});

cljs.core.async.t_cljs$core$async37719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37719";

cljs.core.async.t_cljs$core$async37719.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37719");
});

cljs.core.async.__GT_t_cljs$core$async37719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37719(map_LT___$1,f__$1,ch__$1,meta37720){
return (new cljs.core.async.t_cljs$core$async37719(map_LT___$1,f__$1,ch__$1,meta37720));
});

}

return (new cljs.core.async.t_cljs$core$async37719(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37728 = (function (map_GT_,f,ch,meta37729){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37729 = meta37729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37730,meta37729__$1){
var self__ = this;
var _37730__$1 = this;
return (new cljs.core.async.t_cljs$core$async37728(self__.map_GT_,self__.f,self__.ch,meta37729__$1));
});

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37730){
var self__ = this;
var _37730__$1 = this;
return self__.meta37729;
});

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37729","meta37729",2135564339,null)], null);
});

cljs.core.async.t_cljs$core$async37728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37728";

cljs.core.async.t_cljs$core$async37728.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37728");
});

cljs.core.async.__GT_t_cljs$core$async37728 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37728(map_GT___$1,f__$1,ch__$1,meta37729){
return (new cljs.core.async.t_cljs$core$async37728(map_GT___$1,f__$1,ch__$1,meta37729));
});

}

return (new cljs.core.async.t_cljs$core$async37728(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37734 = (function (filter_GT_,p,ch,meta37735){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37735 = meta37735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37736,meta37735__$1){
var self__ = this;
var _37736__$1 = this;
return (new cljs.core.async.t_cljs$core$async37734(self__.filter_GT_,self__.p,self__.ch,meta37735__$1));
});

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37736){
var self__ = this;
var _37736__$1 = this;
return self__.meta37735;
});

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37735","meta37735",1753342624,null)], null);
});

cljs.core.async.t_cljs$core$async37734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37734";

cljs.core.async.t_cljs$core$async37734.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.core.async/t_cljs$core$async37734");
});

cljs.core.async.__GT_t_cljs$core$async37734 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37734(filter_GT___$1,p__$1,ch__$1,meta37735){
return (new cljs.core.async.t_cljs$core$async37734(filter_GT___$1,p__$1,ch__$1,meta37735));
});

}

return (new cljs.core.async.t_cljs$core$async37734(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args37737 = [];
var len__13330__auto___37781 = arguments.length;
var i__13331__auto___37782 = (0);
while(true){
if((i__13331__auto___37782 < len__13330__auto___37781)){
args37737.push((arguments[i__13331__auto___37782]));

var G__37783 = (i__13331__auto___37782 + (1));
i__13331__auto___37782 = G__37783;
continue;
} else {
}
break;
}

var G__37739 = args37737.length;
switch (G__37739) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37737.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___37785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___37785,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___37785,out){
return (function (state_37760){
var state_val_37761 = (state_37760[(1)]);
if((state_val_37761 === (7))){
var inst_37756 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
var statearr_37762_37786 = state_37760__$1;
(statearr_37762_37786[(2)] = inst_37756);

(statearr_37762_37786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (1))){
var state_37760__$1 = state_37760;
var statearr_37763_37787 = state_37760__$1;
(statearr_37763_37787[(2)] = null);

(statearr_37763_37787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (4))){
var inst_37742 = (state_37760[(7)]);
var inst_37742__$1 = (state_37760[(2)]);
var inst_37743 = (inst_37742__$1 == null);
var state_37760__$1 = (function (){var statearr_37764 = state_37760;
(statearr_37764[(7)] = inst_37742__$1);

return statearr_37764;
})();
if(cljs.core.truth_(inst_37743)){
var statearr_37765_37788 = state_37760__$1;
(statearr_37765_37788[(1)] = (5));

} else {
var statearr_37766_37789 = state_37760__$1;
(statearr_37766_37789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (6))){
var inst_37742 = (state_37760[(7)]);
var inst_37747 = p.call(null,inst_37742);
var state_37760__$1 = state_37760;
if(cljs.core.truth_(inst_37747)){
var statearr_37767_37790 = state_37760__$1;
(statearr_37767_37790[(1)] = (8));

} else {
var statearr_37768_37791 = state_37760__$1;
(statearr_37768_37791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (3))){
var inst_37758 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37760__$1,inst_37758);
} else {
if((state_val_37761 === (2))){
var state_37760__$1 = state_37760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37760__$1,(4),ch);
} else {
if((state_val_37761 === (11))){
var inst_37750 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
var statearr_37769_37792 = state_37760__$1;
(statearr_37769_37792[(2)] = inst_37750);

(statearr_37769_37792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (9))){
var state_37760__$1 = state_37760;
var statearr_37770_37793 = state_37760__$1;
(statearr_37770_37793[(2)] = null);

(statearr_37770_37793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (5))){
var inst_37745 = cljs.core.async.close_BANG_.call(null,out);
var state_37760__$1 = state_37760;
var statearr_37771_37794 = state_37760__$1;
(statearr_37771_37794[(2)] = inst_37745);

(statearr_37771_37794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (10))){
var inst_37753 = (state_37760[(2)]);
var state_37760__$1 = (function (){var statearr_37772 = state_37760;
(statearr_37772[(8)] = inst_37753);

return statearr_37772;
})();
var statearr_37773_37795 = state_37760__$1;
(statearr_37773_37795[(2)] = null);

(statearr_37773_37795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (8))){
var inst_37742 = (state_37760[(7)]);
var state_37760__$1 = state_37760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37760__$1,(11),out,inst_37742);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___37785,out))
;
return ((function (switch__35355__auto__,c__35469__auto___37785,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_37777 = [null,null,null,null,null,null,null,null,null];
(statearr_37777[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_37777[(1)] = (1));

return statearr_37777;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_37760){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e37778){if((e37778 instanceof Object)){
var ex__35359__auto__ = e37778;
var statearr_37779_37796 = state_37760;
(statearr_37779_37796[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_37760;
state_37760 = G__37797;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_37760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_37760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___37785,out))
})();
var state__35471__auto__ = (function (){var statearr_37780 = f__35470__auto__.call(null);
(statearr_37780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___37785);

return statearr_37780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___37785,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args37798 = [];
var len__13330__auto___37801 = arguments.length;
var i__13331__auto___37802 = (0);
while(true){
if((i__13331__auto___37802 < len__13330__auto___37801)){
args37798.push((arguments[i__13331__auto___37802]));

var G__37803 = (i__13331__auto___37802 + (1));
i__13331__auto___37802 = G__37803;
continue;
} else {
}
break;
}

var G__37800 = args37798.length;
switch (G__37800) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37798.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__){
return (function (state_37970){
var state_val_37971 = (state_37970[(1)]);
if((state_val_37971 === (7))){
var inst_37966 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37972_38013 = state_37970__$1;
(statearr_37972_38013[(2)] = inst_37966);

(statearr_37972_38013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (20))){
var inst_37936 = (state_37970[(7)]);
var inst_37947 = (state_37970[(2)]);
var inst_37948 = cljs.core.next.call(null,inst_37936);
var inst_37922 = inst_37948;
var inst_37923 = null;
var inst_37924 = (0);
var inst_37925 = (0);
var state_37970__$1 = (function (){var statearr_37973 = state_37970;
(statearr_37973[(8)] = inst_37947);

(statearr_37973[(9)] = inst_37923);

(statearr_37973[(10)] = inst_37925);

(statearr_37973[(11)] = inst_37922);

(statearr_37973[(12)] = inst_37924);

return statearr_37973;
})();
var statearr_37974_38014 = state_37970__$1;
(statearr_37974_38014[(2)] = null);

(statearr_37974_38014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (1))){
var state_37970__$1 = state_37970;
var statearr_37975_38015 = state_37970__$1;
(statearr_37975_38015[(2)] = null);

(statearr_37975_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (4))){
var inst_37911 = (state_37970[(13)]);
var inst_37911__$1 = (state_37970[(2)]);
var inst_37912 = (inst_37911__$1 == null);
var state_37970__$1 = (function (){var statearr_37976 = state_37970;
(statearr_37976[(13)] = inst_37911__$1);

return statearr_37976;
})();
if(cljs.core.truth_(inst_37912)){
var statearr_37977_38016 = state_37970__$1;
(statearr_37977_38016[(1)] = (5));

} else {
var statearr_37978_38017 = state_37970__$1;
(statearr_37978_38017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (15))){
var state_37970__$1 = state_37970;
var statearr_37982_38018 = state_37970__$1;
(statearr_37982_38018[(2)] = null);

(statearr_37982_38018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (21))){
var state_37970__$1 = state_37970;
var statearr_37983_38019 = state_37970__$1;
(statearr_37983_38019[(2)] = null);

(statearr_37983_38019[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (13))){
var inst_37923 = (state_37970[(9)]);
var inst_37925 = (state_37970[(10)]);
var inst_37922 = (state_37970[(11)]);
var inst_37924 = (state_37970[(12)]);
var inst_37932 = (state_37970[(2)]);
var inst_37933 = (inst_37925 + (1));
var tmp37979 = inst_37923;
var tmp37980 = inst_37922;
var tmp37981 = inst_37924;
var inst_37922__$1 = tmp37980;
var inst_37923__$1 = tmp37979;
var inst_37924__$1 = tmp37981;
var inst_37925__$1 = inst_37933;
var state_37970__$1 = (function (){var statearr_37984 = state_37970;
(statearr_37984[(9)] = inst_37923__$1);

(statearr_37984[(14)] = inst_37932);

(statearr_37984[(10)] = inst_37925__$1);

(statearr_37984[(11)] = inst_37922__$1);

(statearr_37984[(12)] = inst_37924__$1);

return statearr_37984;
})();
var statearr_37985_38020 = state_37970__$1;
(statearr_37985_38020[(2)] = null);

(statearr_37985_38020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (22))){
var state_37970__$1 = state_37970;
var statearr_37986_38021 = state_37970__$1;
(statearr_37986_38021[(2)] = null);

(statearr_37986_38021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (6))){
var inst_37911 = (state_37970[(13)]);
var inst_37920 = f.call(null,inst_37911);
var inst_37921 = cljs.core.seq.call(null,inst_37920);
var inst_37922 = inst_37921;
var inst_37923 = null;
var inst_37924 = (0);
var inst_37925 = (0);
var state_37970__$1 = (function (){var statearr_37987 = state_37970;
(statearr_37987[(9)] = inst_37923);

(statearr_37987[(10)] = inst_37925);

(statearr_37987[(11)] = inst_37922);

(statearr_37987[(12)] = inst_37924);

return statearr_37987;
})();
var statearr_37988_38022 = state_37970__$1;
(statearr_37988_38022[(2)] = null);

(statearr_37988_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (17))){
var inst_37936 = (state_37970[(7)]);
var inst_37940 = cljs.core.chunk_first.call(null,inst_37936);
var inst_37941 = cljs.core.chunk_rest.call(null,inst_37936);
var inst_37942 = cljs.core.count.call(null,inst_37940);
var inst_37922 = inst_37941;
var inst_37923 = inst_37940;
var inst_37924 = inst_37942;
var inst_37925 = (0);
var state_37970__$1 = (function (){var statearr_37989 = state_37970;
(statearr_37989[(9)] = inst_37923);

(statearr_37989[(10)] = inst_37925);

(statearr_37989[(11)] = inst_37922);

(statearr_37989[(12)] = inst_37924);

return statearr_37989;
})();
var statearr_37990_38023 = state_37970__$1;
(statearr_37990_38023[(2)] = null);

(statearr_37990_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (3))){
var inst_37968 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37970__$1,inst_37968);
} else {
if((state_val_37971 === (12))){
var inst_37956 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37991_38024 = state_37970__$1;
(statearr_37991_38024[(2)] = inst_37956);

(statearr_37991_38024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (2))){
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37970__$1,(4),in$);
} else {
if((state_val_37971 === (23))){
var inst_37964 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37992_38025 = state_37970__$1;
(statearr_37992_38025[(2)] = inst_37964);

(statearr_37992_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (19))){
var inst_37951 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_37993_38026 = state_37970__$1;
(statearr_37993_38026[(2)] = inst_37951);

(statearr_37993_38026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (11))){
var inst_37936 = (state_37970[(7)]);
var inst_37922 = (state_37970[(11)]);
var inst_37936__$1 = cljs.core.seq.call(null,inst_37922);
var state_37970__$1 = (function (){var statearr_37994 = state_37970;
(statearr_37994[(7)] = inst_37936__$1);

return statearr_37994;
})();
if(inst_37936__$1){
var statearr_37995_38027 = state_37970__$1;
(statearr_37995_38027[(1)] = (14));

} else {
var statearr_37996_38028 = state_37970__$1;
(statearr_37996_38028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (9))){
var inst_37958 = (state_37970[(2)]);
var inst_37959 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37970__$1 = (function (){var statearr_37997 = state_37970;
(statearr_37997[(15)] = inst_37958);

return statearr_37997;
})();
if(cljs.core.truth_(inst_37959)){
var statearr_37998_38029 = state_37970__$1;
(statearr_37998_38029[(1)] = (21));

} else {
var statearr_37999_38030 = state_37970__$1;
(statearr_37999_38030[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (5))){
var inst_37914 = cljs.core.async.close_BANG_.call(null,out);
var state_37970__$1 = state_37970;
var statearr_38000_38031 = state_37970__$1;
(statearr_38000_38031[(2)] = inst_37914);

(statearr_38000_38031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (14))){
var inst_37936 = (state_37970[(7)]);
var inst_37938 = cljs.core.chunked_seq_QMARK_.call(null,inst_37936);
var state_37970__$1 = state_37970;
if(inst_37938){
var statearr_38001_38032 = state_37970__$1;
(statearr_38001_38032[(1)] = (17));

} else {
var statearr_38002_38033 = state_37970__$1;
(statearr_38002_38033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (16))){
var inst_37954 = (state_37970[(2)]);
var state_37970__$1 = state_37970;
var statearr_38003_38034 = state_37970__$1;
(statearr_38003_38034[(2)] = inst_37954);

(statearr_38003_38034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37971 === (10))){
var inst_37923 = (state_37970[(9)]);
var inst_37925 = (state_37970[(10)]);
var inst_37930 = cljs.core._nth.call(null,inst_37923,inst_37925);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37970__$1,(13),out,inst_37930);
} else {
if((state_val_37971 === (18))){
var inst_37936 = (state_37970[(7)]);
var inst_37945 = cljs.core.first.call(null,inst_37936);
var state_37970__$1 = state_37970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37970__$1,(20),out,inst_37945);
} else {
if((state_val_37971 === (8))){
var inst_37925 = (state_37970[(10)]);
var inst_37924 = (state_37970[(12)]);
var inst_37927 = (inst_37925 < inst_37924);
var inst_37928 = inst_37927;
var state_37970__$1 = state_37970;
if(cljs.core.truth_(inst_37928)){
var statearr_38004_38035 = state_37970__$1;
(statearr_38004_38035[(1)] = (10));

} else {
var statearr_38005_38036 = state_37970__$1;
(statearr_38005_38036[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____0 = (function (){
var statearr_38009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38009[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__);

(statearr_38009[(1)] = (1));

return statearr_38009;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____1 = (function (state_37970){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_37970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e38010){if((e38010 instanceof Object)){
var ex__35359__auto__ = e38010;
var statearr_38011_38037 = state_37970;
(statearr_38011_38037[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38038 = state_37970;
state_37970 = G__38038;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__ = function(state_37970){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____1.call(this,state_37970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35356__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__))
})();
var state__35471__auto__ = (function (){var statearr_38012 = f__35470__auto__.call(null);
(statearr_38012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_38012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__))
);

return c__35469__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args38039 = [];
var len__13330__auto___38042 = arguments.length;
var i__13331__auto___38043 = (0);
while(true){
if((i__13331__auto___38043 < len__13330__auto___38042)){
args38039.push((arguments[i__13331__auto___38043]));

var G__38044 = (i__13331__auto___38043 + (1));
i__13331__auto___38043 = G__38044;
continue;
} else {
}
break;
}

var G__38041 = args38039.length;
switch (G__38041) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38039.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args38046 = [];
var len__13330__auto___38049 = arguments.length;
var i__13331__auto___38050 = (0);
while(true){
if((i__13331__auto___38050 < len__13330__auto___38049)){
args38046.push((arguments[i__13331__auto___38050]));

var G__38051 = (i__13331__auto___38050 + (1));
i__13331__auto___38050 = G__38051;
continue;
} else {
}
break;
}

var G__38048 = args38046.length;
switch (G__38048) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38046.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args38053 = [];
var len__13330__auto___38104 = arguments.length;
var i__13331__auto___38105 = (0);
while(true){
if((i__13331__auto___38105 < len__13330__auto___38104)){
args38053.push((arguments[i__13331__auto___38105]));

var G__38106 = (i__13331__auto___38105 + (1));
i__13331__auto___38105 = G__38106;
continue;
} else {
}
break;
}

var G__38055 = args38053.length;
switch (G__38055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38053.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___38108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___38108,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___38108,out){
return (function (state_38079){
var state_val_38080 = (state_38079[(1)]);
if((state_val_38080 === (7))){
var inst_38074 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38081_38109 = state_38079__$1;
(statearr_38081_38109[(2)] = inst_38074);

(statearr_38081_38109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (1))){
var inst_38056 = null;
var state_38079__$1 = (function (){var statearr_38082 = state_38079;
(statearr_38082[(7)] = inst_38056);

return statearr_38082;
})();
var statearr_38083_38110 = state_38079__$1;
(statearr_38083_38110[(2)] = null);

(statearr_38083_38110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (4))){
var inst_38059 = (state_38079[(8)]);
var inst_38059__$1 = (state_38079[(2)]);
var inst_38060 = (inst_38059__$1 == null);
var inst_38061 = cljs.core.not.call(null,inst_38060);
var state_38079__$1 = (function (){var statearr_38084 = state_38079;
(statearr_38084[(8)] = inst_38059__$1);

return statearr_38084;
})();
if(inst_38061){
var statearr_38085_38111 = state_38079__$1;
(statearr_38085_38111[(1)] = (5));

} else {
var statearr_38086_38112 = state_38079__$1;
(statearr_38086_38112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (6))){
var state_38079__$1 = state_38079;
var statearr_38087_38113 = state_38079__$1;
(statearr_38087_38113[(2)] = null);

(statearr_38087_38113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (3))){
var inst_38076 = (state_38079[(2)]);
var inst_38077 = cljs.core.async.close_BANG_.call(null,out);
var state_38079__$1 = (function (){var statearr_38088 = state_38079;
(statearr_38088[(9)] = inst_38076);

return statearr_38088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38079__$1,inst_38077);
} else {
if((state_val_38080 === (2))){
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38079__$1,(4),ch);
} else {
if((state_val_38080 === (11))){
var inst_38059 = (state_38079[(8)]);
var inst_38068 = (state_38079[(2)]);
var inst_38056 = inst_38059;
var state_38079__$1 = (function (){var statearr_38089 = state_38079;
(statearr_38089[(10)] = inst_38068);

(statearr_38089[(7)] = inst_38056);

return statearr_38089;
})();
var statearr_38090_38114 = state_38079__$1;
(statearr_38090_38114[(2)] = null);

(statearr_38090_38114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (9))){
var inst_38059 = (state_38079[(8)]);
var state_38079__$1 = state_38079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38079__$1,(11),out,inst_38059);
} else {
if((state_val_38080 === (5))){
var inst_38059 = (state_38079[(8)]);
var inst_38056 = (state_38079[(7)]);
var inst_38063 = cljs.core._EQ_.call(null,inst_38059,inst_38056);
var state_38079__$1 = state_38079;
if(inst_38063){
var statearr_38092_38115 = state_38079__$1;
(statearr_38092_38115[(1)] = (8));

} else {
var statearr_38093_38116 = state_38079__$1;
(statearr_38093_38116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (10))){
var inst_38071 = (state_38079[(2)]);
var state_38079__$1 = state_38079;
var statearr_38094_38117 = state_38079__$1;
(statearr_38094_38117[(2)] = inst_38071);

(statearr_38094_38117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38080 === (8))){
var inst_38056 = (state_38079[(7)]);
var tmp38091 = inst_38056;
var inst_38056__$1 = tmp38091;
var state_38079__$1 = (function (){var statearr_38095 = state_38079;
(statearr_38095[(7)] = inst_38056__$1);

return statearr_38095;
})();
var statearr_38096_38118 = state_38079__$1;
(statearr_38096_38118[(2)] = null);

(statearr_38096_38118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___38108,out))
;
return ((function (switch__35355__auto__,c__35469__auto___38108,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_38100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38100[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_38100[(1)] = (1));

return statearr_38100;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_38079){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_38079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e38101){if((e38101 instanceof Object)){
var ex__35359__auto__ = e38101;
var statearr_38102_38119 = state_38079;
(statearr_38102_38119[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38120 = state_38079;
state_38079 = G__38120;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_38079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_38079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___38108,out))
})();
var state__35471__auto__ = (function (){var statearr_38103 = f__35470__auto__.call(null);
(statearr_38103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___38108);

return statearr_38103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___38108,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args38121 = [];
var len__13330__auto___38191 = arguments.length;
var i__13331__auto___38192 = (0);
while(true){
if((i__13331__auto___38192 < len__13330__auto___38191)){
args38121.push((arguments[i__13331__auto___38192]));

var G__38193 = (i__13331__auto___38192 + (1));
i__13331__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var G__38123 = args38121.length;
switch (G__38123) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38121.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___38195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___38195,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___38195,out){
return (function (state_38161){
var state_val_38162 = (state_38161[(1)]);
if((state_val_38162 === (7))){
var inst_38157 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38163_38196 = state_38161__$1;
(statearr_38163_38196[(2)] = inst_38157);

(statearr_38163_38196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (1))){
var inst_38124 = (new Array(n));
var inst_38125 = inst_38124;
var inst_38126 = (0);
var state_38161__$1 = (function (){var statearr_38164 = state_38161;
(statearr_38164[(7)] = inst_38125);

(statearr_38164[(8)] = inst_38126);

return statearr_38164;
})();
var statearr_38165_38197 = state_38161__$1;
(statearr_38165_38197[(2)] = null);

(statearr_38165_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (4))){
var inst_38129 = (state_38161[(9)]);
var inst_38129__$1 = (state_38161[(2)]);
var inst_38130 = (inst_38129__$1 == null);
var inst_38131 = cljs.core.not.call(null,inst_38130);
var state_38161__$1 = (function (){var statearr_38166 = state_38161;
(statearr_38166[(9)] = inst_38129__$1);

return statearr_38166;
})();
if(inst_38131){
var statearr_38167_38198 = state_38161__$1;
(statearr_38167_38198[(1)] = (5));

} else {
var statearr_38168_38199 = state_38161__$1;
(statearr_38168_38199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (15))){
var inst_38151 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38169_38200 = state_38161__$1;
(statearr_38169_38200[(2)] = inst_38151);

(statearr_38169_38200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (13))){
var state_38161__$1 = state_38161;
var statearr_38170_38201 = state_38161__$1;
(statearr_38170_38201[(2)] = null);

(statearr_38170_38201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (6))){
var inst_38126 = (state_38161[(8)]);
var inst_38147 = (inst_38126 > (0));
var state_38161__$1 = state_38161;
if(cljs.core.truth_(inst_38147)){
var statearr_38171_38202 = state_38161__$1;
(statearr_38171_38202[(1)] = (12));

} else {
var statearr_38172_38203 = state_38161__$1;
(statearr_38172_38203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (3))){
var inst_38159 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38161__$1,inst_38159);
} else {
if((state_val_38162 === (12))){
var inst_38125 = (state_38161[(7)]);
var inst_38149 = cljs.core.vec.call(null,inst_38125);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38161__$1,(15),out,inst_38149);
} else {
if((state_val_38162 === (2))){
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38161__$1,(4),ch);
} else {
if((state_val_38162 === (11))){
var inst_38141 = (state_38161[(2)]);
var inst_38142 = (new Array(n));
var inst_38125 = inst_38142;
var inst_38126 = (0);
var state_38161__$1 = (function (){var statearr_38173 = state_38161;
(statearr_38173[(7)] = inst_38125);

(statearr_38173[(8)] = inst_38126);

(statearr_38173[(10)] = inst_38141);

return statearr_38173;
})();
var statearr_38174_38204 = state_38161__$1;
(statearr_38174_38204[(2)] = null);

(statearr_38174_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (9))){
var inst_38125 = (state_38161[(7)]);
var inst_38139 = cljs.core.vec.call(null,inst_38125);
var state_38161__$1 = state_38161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38161__$1,(11),out,inst_38139);
} else {
if((state_val_38162 === (5))){
var inst_38125 = (state_38161[(7)]);
var inst_38134 = (state_38161[(11)]);
var inst_38129 = (state_38161[(9)]);
var inst_38126 = (state_38161[(8)]);
var inst_38133 = (inst_38125[inst_38126] = inst_38129);
var inst_38134__$1 = (inst_38126 + (1));
var inst_38135 = (inst_38134__$1 < n);
var state_38161__$1 = (function (){var statearr_38175 = state_38161;
(statearr_38175[(11)] = inst_38134__$1);

(statearr_38175[(12)] = inst_38133);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38135)){
var statearr_38176_38205 = state_38161__$1;
(statearr_38176_38205[(1)] = (8));

} else {
var statearr_38177_38206 = state_38161__$1;
(statearr_38177_38206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (14))){
var inst_38154 = (state_38161[(2)]);
var inst_38155 = cljs.core.async.close_BANG_.call(null,out);
var state_38161__$1 = (function (){var statearr_38179 = state_38161;
(statearr_38179[(13)] = inst_38154);

return statearr_38179;
})();
var statearr_38180_38207 = state_38161__$1;
(statearr_38180_38207[(2)] = inst_38155);

(statearr_38180_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (10))){
var inst_38145 = (state_38161[(2)]);
var state_38161__$1 = state_38161;
var statearr_38181_38208 = state_38161__$1;
(statearr_38181_38208[(2)] = inst_38145);

(statearr_38181_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38162 === (8))){
var inst_38125 = (state_38161[(7)]);
var inst_38134 = (state_38161[(11)]);
var tmp38178 = inst_38125;
var inst_38125__$1 = tmp38178;
var inst_38126 = inst_38134;
var state_38161__$1 = (function (){var statearr_38182 = state_38161;
(statearr_38182[(7)] = inst_38125__$1);

(statearr_38182[(8)] = inst_38126);

return statearr_38182;
})();
var statearr_38183_38209 = state_38161__$1;
(statearr_38183_38209[(2)] = null);

(statearr_38183_38209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___38195,out))
;
return ((function (switch__35355__auto__,c__35469__auto___38195,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_38187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38187[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_38187[(1)] = (1));

return statearr_38187;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_38161){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_38161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e38188){if((e38188 instanceof Object)){
var ex__35359__auto__ = e38188;
var statearr_38189_38210 = state_38161;
(statearr_38189_38210[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38211 = state_38161;
state_38161 = G__38211;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_38161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_38161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___38195,out))
})();
var state__35471__auto__ = (function (){var statearr_38190 = f__35470__auto__.call(null);
(statearr_38190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___38195);

return statearr_38190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___38195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args38212 = [];
var len__13330__auto___38286 = arguments.length;
var i__13331__auto___38287 = (0);
while(true){
if((i__13331__auto___38287 < len__13330__auto___38286)){
args38212.push((arguments[i__13331__auto___38287]));

var G__38288 = (i__13331__auto___38287 + (1));
i__13331__auto___38287 = G__38288;
continue;
} else {
}
break;
}

var G__38214 = args38212.length;
switch (G__38214) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38212.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35469__auto___38290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___38290,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___38290,out){
return (function (state_38256){
var state_val_38257 = (state_38256[(1)]);
if((state_val_38257 === (7))){
var inst_38252 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
var statearr_38258_38291 = state_38256__$1;
(statearr_38258_38291[(2)] = inst_38252);

(statearr_38258_38291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (1))){
var inst_38215 = [];
var inst_38216 = inst_38215;
var inst_38217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38256__$1 = (function (){var statearr_38259 = state_38256;
(statearr_38259[(7)] = inst_38216);

(statearr_38259[(8)] = inst_38217);

return statearr_38259;
})();
var statearr_38260_38292 = state_38256__$1;
(statearr_38260_38292[(2)] = null);

(statearr_38260_38292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (4))){
var inst_38220 = (state_38256[(9)]);
var inst_38220__$1 = (state_38256[(2)]);
var inst_38221 = (inst_38220__$1 == null);
var inst_38222 = cljs.core.not.call(null,inst_38221);
var state_38256__$1 = (function (){var statearr_38261 = state_38256;
(statearr_38261[(9)] = inst_38220__$1);

return statearr_38261;
})();
if(inst_38222){
var statearr_38262_38293 = state_38256__$1;
(statearr_38262_38293[(1)] = (5));

} else {
var statearr_38263_38294 = state_38256__$1;
(statearr_38263_38294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (15))){
var inst_38246 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
var statearr_38264_38295 = state_38256__$1;
(statearr_38264_38295[(2)] = inst_38246);

(statearr_38264_38295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (13))){
var state_38256__$1 = state_38256;
var statearr_38265_38296 = state_38256__$1;
(statearr_38265_38296[(2)] = null);

(statearr_38265_38296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (6))){
var inst_38216 = (state_38256[(7)]);
var inst_38241 = inst_38216.length;
var inst_38242 = (inst_38241 > (0));
var state_38256__$1 = state_38256;
if(cljs.core.truth_(inst_38242)){
var statearr_38266_38297 = state_38256__$1;
(statearr_38266_38297[(1)] = (12));

} else {
var statearr_38267_38298 = state_38256__$1;
(statearr_38267_38298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (3))){
var inst_38254 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38256__$1,inst_38254);
} else {
if((state_val_38257 === (12))){
var inst_38216 = (state_38256[(7)]);
var inst_38244 = cljs.core.vec.call(null,inst_38216);
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38256__$1,(15),out,inst_38244);
} else {
if((state_val_38257 === (2))){
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38256__$1,(4),ch);
} else {
if((state_val_38257 === (11))){
var inst_38220 = (state_38256[(9)]);
var inst_38224 = (state_38256[(10)]);
var inst_38234 = (state_38256[(2)]);
var inst_38235 = [];
var inst_38236 = inst_38235.push(inst_38220);
var inst_38216 = inst_38235;
var inst_38217 = inst_38224;
var state_38256__$1 = (function (){var statearr_38268 = state_38256;
(statearr_38268[(7)] = inst_38216);

(statearr_38268[(11)] = inst_38236);

(statearr_38268[(12)] = inst_38234);

(statearr_38268[(8)] = inst_38217);

return statearr_38268;
})();
var statearr_38269_38299 = state_38256__$1;
(statearr_38269_38299[(2)] = null);

(statearr_38269_38299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (9))){
var inst_38216 = (state_38256[(7)]);
var inst_38232 = cljs.core.vec.call(null,inst_38216);
var state_38256__$1 = state_38256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38256__$1,(11),out,inst_38232);
} else {
if((state_val_38257 === (5))){
var inst_38220 = (state_38256[(9)]);
var inst_38217 = (state_38256[(8)]);
var inst_38224 = (state_38256[(10)]);
var inst_38224__$1 = f.call(null,inst_38220);
var inst_38225 = cljs.core._EQ_.call(null,inst_38224__$1,inst_38217);
var inst_38226 = cljs.core.keyword_identical_QMARK_.call(null,inst_38217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38227 = (inst_38225) || (inst_38226);
var state_38256__$1 = (function (){var statearr_38270 = state_38256;
(statearr_38270[(10)] = inst_38224__$1);

return statearr_38270;
})();
if(cljs.core.truth_(inst_38227)){
var statearr_38271_38300 = state_38256__$1;
(statearr_38271_38300[(1)] = (8));

} else {
var statearr_38272_38301 = state_38256__$1;
(statearr_38272_38301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (14))){
var inst_38249 = (state_38256[(2)]);
var inst_38250 = cljs.core.async.close_BANG_.call(null,out);
var state_38256__$1 = (function (){var statearr_38274 = state_38256;
(statearr_38274[(13)] = inst_38249);

return statearr_38274;
})();
var statearr_38275_38302 = state_38256__$1;
(statearr_38275_38302[(2)] = inst_38250);

(statearr_38275_38302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (10))){
var inst_38239 = (state_38256[(2)]);
var state_38256__$1 = state_38256;
var statearr_38276_38303 = state_38256__$1;
(statearr_38276_38303[(2)] = inst_38239);

(statearr_38276_38303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38257 === (8))){
var inst_38216 = (state_38256[(7)]);
var inst_38220 = (state_38256[(9)]);
var inst_38224 = (state_38256[(10)]);
var inst_38229 = inst_38216.push(inst_38220);
var tmp38273 = inst_38216;
var inst_38216__$1 = tmp38273;
var inst_38217 = inst_38224;
var state_38256__$1 = (function (){var statearr_38277 = state_38256;
(statearr_38277[(7)] = inst_38216__$1);

(statearr_38277[(14)] = inst_38229);

(statearr_38277[(8)] = inst_38217);

return statearr_38277;
})();
var statearr_38278_38304 = state_38256__$1;
(statearr_38278_38304[(2)] = null);

(statearr_38278_38304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35469__auto___38290,out))
;
return ((function (switch__35355__auto__,c__35469__auto___38290,out){
return (function() {
var cljs$core$async$state_machine__35356__auto__ = null;
var cljs$core$async$state_machine__35356__auto____0 = (function (){
var statearr_38282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38282[(0)] = cljs$core$async$state_machine__35356__auto__);

(statearr_38282[(1)] = (1));

return statearr_38282;
});
var cljs$core$async$state_machine__35356__auto____1 = (function (state_38256){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_38256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e38283){if((e38283 instanceof Object)){
var ex__35359__auto__ = e38283;
var statearr_38284_38305 = state_38256;
(statearr_38284_38305[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38306 = state_38256;
state_38256 = G__38306;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
cljs$core$async$state_machine__35356__auto__ = function(state_38256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35356__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35356__auto____1.call(this,state_38256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35356__auto____0;
cljs$core$async$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35356__auto____1;
return cljs$core$async$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___38290,out))
})();
var state__35471__auto__ = (function (){var statearr_38285 = f__35470__auto__.call(null);
(statearr_38285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___38290);

return statearr_38285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___38290,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514283702165