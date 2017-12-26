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
var args35251 = [];
var len__33469__auto___35257 = arguments.length;
var i__33470__auto___35258 = (0);
while(true){
if((i__33470__auto___35258 < len__33469__auto___35257)){
args35251.push((arguments[i__33470__auto___35258]));

var G__35259 = (i__33470__auto___35258 + (1));
i__33470__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var G__35253 = args35251.length;
switch (G__35253) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35251.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35254 = (function (f,blockable,meta35255){
this.f = f;
this.blockable = blockable;
this.meta35255 = meta35255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35256,meta35255__$1){
var self__ = this;
var _35256__$1 = this;
return (new cljs.core.async.t_cljs$core$async35254(self__.f,self__.blockable,meta35255__$1));
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35256){
var self__ = this;
var _35256__$1 = this;
return self__.meta35255;
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35255","meta35255",-1216303981,null)], null);
});

cljs.core.async.t_cljs$core$async35254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35254";

cljs.core.async.t_cljs$core$async35254.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async35254");
});

cljs.core.async.__GT_t_cljs$core$async35254 = (function cljs$core$async$__GT_t_cljs$core$async35254(f__$1,blockable__$1,meta35255){
return (new cljs.core.async.t_cljs$core$async35254(f__$1,blockable__$1,meta35255));
});

}

return (new cljs.core.async.t_cljs$core$async35254(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args35263 = [];
var len__33469__auto___35266 = arguments.length;
var i__33470__auto___35267 = (0);
while(true){
if((i__33470__auto___35267 < len__33469__auto___35266)){
args35263.push((arguments[i__33470__auto___35267]));

var G__35268 = (i__33470__auto___35267 + (1));
i__33470__auto___35267 = G__35268;
continue;
} else {
}
break;
}

var G__35265 = args35263.length;
switch (G__35265) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35263.length)].join('')));

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
var args35270 = [];
var len__33469__auto___35273 = arguments.length;
var i__33470__auto___35274 = (0);
while(true){
if((i__33470__auto___35274 < len__33469__auto___35273)){
args35270.push((arguments[i__33470__auto___35274]));

var G__35275 = (i__33470__auto___35274 + (1));
i__33470__auto___35274 = G__35275;
continue;
} else {
}
break;
}

var G__35272 = args35270.length;
switch (G__35272) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35270.length)].join('')));

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
var args35277 = [];
var len__33469__auto___35280 = arguments.length;
var i__33470__auto___35281 = (0);
while(true){
if((i__33470__auto___35281 < len__33469__auto___35280)){
args35277.push((arguments[i__33470__auto___35281]));

var G__35282 = (i__33470__auto___35281 + (1));
i__33470__auto___35281 = G__35282;
continue;
} else {
}
break;
}

var G__35279 = args35277.length;
switch (G__35279) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35277.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35284 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35284);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35284,ret){
return (function (){
return fn1.call(null,val_35284);
});})(val_35284,ret))
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
var args35285 = [];
var len__33469__auto___35288 = arguments.length;
var i__33470__auto___35289 = (0);
while(true){
if((i__33470__auto___35289 < len__33469__auto___35288)){
args35285.push((arguments[i__33470__auto___35289]));

var G__35290 = (i__33470__auto___35289 + (1));
i__33470__auto___35289 = G__35290;
continue;
} else {
}
break;
}

var G__35287 = args35285.length;
switch (G__35287) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35285.length)].join('')));

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
var n__33299__auto___35292 = n;
var x_35293 = (0);
while(true){
if((x_35293 < n__33299__auto___35292)){
(a[x_35293] = (0));

var G__35294 = (x_35293 + (1));
x_35293 = G__35294;
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

var G__35295 = (i + (1));
i = G__35295;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35299 = (function (alt_flag,flag,meta35300){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35301,meta35300__$1){
var self__ = this;
var _35301__$1 = this;
return (new cljs.core.async.t_cljs$core$async35299(self__.alt_flag,self__.flag,meta35300__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35301){
var self__ = this;
var _35301__$1 = this;
return self__.meta35300;
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35300","meta35300",1688392038,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35299";

cljs.core.async.t_cljs$core$async35299.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async35299");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35299 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35299(alt_flag__$1,flag__$1,meta35300){
return (new cljs.core.async.t_cljs$core$async35299(alt_flag__$1,flag__$1,meta35300));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35299(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35305 = (function (alt_handler,flag,cb,meta35306){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35306 = meta35306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35307,meta35306__$1){
var self__ = this;
var _35307__$1 = this;
return (new cljs.core.async.t_cljs$core$async35305(self__.alt_handler,self__.flag,self__.cb,meta35306__$1));
});

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35307){
var self__ = this;
var _35307__$1 = this;
return self__.meta35306;
});

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35306","meta35306",1262575883,null)], null);
});

cljs.core.async.t_cljs$core$async35305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35305";

cljs.core.async.t_cljs$core$async35305.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async35305");
});

cljs.core.async.__GT_t_cljs$core$async35305 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35305(alt_handler__$1,flag__$1,cb__$1,meta35306){
return (new cljs.core.async.t_cljs$core$async35305(alt_handler__$1,flag__$1,cb__$1,meta35306));
});

}

return (new cljs.core.async.t_cljs$core$async35305(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35308_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35308_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35309_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35309_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__32286__auto__ = wport;
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35310 = (i + (1));
i = G__35310;
continue;
}
} else {
return null;
}
break;
}
})();
var or__32286__auto__ = ret;
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__32274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__32274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__32274__auto__;
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
var args__33476__auto__ = [];
var len__33469__auto___35316 = arguments.length;
var i__33470__auto___35317 = (0);
while(true){
if((i__33470__auto___35317 < len__33469__auto___35316)){
args__33476__auto__.push((arguments[i__33470__auto___35317]));

var G__35318 = (i__33470__auto___35317 + (1));
i__33470__auto___35317 = G__35318;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((1) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__33477__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35313){
var map__35314 = p__35313;
var map__35314__$1 = ((((!((map__35314 == null)))?((((map__35314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35314):map__35314);
var opts = map__35314__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35311){
var G__35312 = cljs.core.first.call(null,seq35311);
var seq35311__$1 = cljs.core.next.call(null,seq35311);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35312,seq35311__$1);
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
var args35319 = [];
var len__33469__auto___35369 = arguments.length;
var i__33470__auto___35370 = (0);
while(true){
if((i__33470__auto___35370 < len__33469__auto___35369)){
args35319.push((arguments[i__33470__auto___35370]));

var G__35371 = (i__33470__auto___35370 + (1));
i__33470__auto___35370 = G__35371;
continue;
} else {
}
break;
}

var G__35321 = args35319.length;
switch (G__35321) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35319.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35192__auto___35373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___35373){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___35373){
return (function (state_35345){
var state_val_35346 = (state_35345[(1)]);
if((state_val_35346 === (7))){
var inst_35341 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
var statearr_35347_35374 = state_35345__$1;
(statearr_35347_35374[(2)] = inst_35341);

(statearr_35347_35374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (1))){
var state_35345__$1 = state_35345;
var statearr_35348_35375 = state_35345__$1;
(statearr_35348_35375[(2)] = null);

(statearr_35348_35375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (4))){
var inst_35324 = (state_35345[(7)]);
var inst_35324__$1 = (state_35345[(2)]);
var inst_35325 = (inst_35324__$1 == null);
var state_35345__$1 = (function (){var statearr_35349 = state_35345;
(statearr_35349[(7)] = inst_35324__$1);

return statearr_35349;
})();
if(cljs.core.truth_(inst_35325)){
var statearr_35350_35376 = state_35345__$1;
(statearr_35350_35376[(1)] = (5));

} else {
var statearr_35351_35377 = state_35345__$1;
(statearr_35351_35377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (13))){
var state_35345__$1 = state_35345;
var statearr_35352_35378 = state_35345__$1;
(statearr_35352_35378[(2)] = null);

(statearr_35352_35378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (6))){
var inst_35324 = (state_35345[(7)]);
var state_35345__$1 = state_35345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35345__$1,(11),to,inst_35324);
} else {
if((state_val_35346 === (3))){
var inst_35343 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35345__$1,inst_35343);
} else {
if((state_val_35346 === (12))){
var state_35345__$1 = state_35345;
var statearr_35353_35379 = state_35345__$1;
(statearr_35353_35379[(2)] = null);

(statearr_35353_35379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (2))){
var state_35345__$1 = state_35345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35345__$1,(4),from);
} else {
if((state_val_35346 === (11))){
var inst_35334 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
if(cljs.core.truth_(inst_35334)){
var statearr_35354_35380 = state_35345__$1;
(statearr_35354_35380[(1)] = (12));

} else {
var statearr_35355_35381 = state_35345__$1;
(statearr_35355_35381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (9))){
var state_35345__$1 = state_35345;
var statearr_35356_35382 = state_35345__$1;
(statearr_35356_35382[(2)] = null);

(statearr_35356_35382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (5))){
var state_35345__$1 = state_35345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35357_35383 = state_35345__$1;
(statearr_35357_35383[(1)] = (8));

} else {
var statearr_35358_35384 = state_35345__$1;
(statearr_35358_35384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (14))){
var inst_35339 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
var statearr_35359_35385 = state_35345__$1;
(statearr_35359_35385[(2)] = inst_35339);

(statearr_35359_35385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (10))){
var inst_35331 = (state_35345[(2)]);
var state_35345__$1 = state_35345;
var statearr_35360_35386 = state_35345__$1;
(statearr_35360_35386[(2)] = inst_35331);

(statearr_35360_35386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35346 === (8))){
var inst_35328 = cljs.core.async.close_BANG_.call(null,to);
var state_35345__$1 = state_35345;
var statearr_35361_35387 = state_35345__$1;
(statearr_35361_35387[(2)] = inst_35328);

(statearr_35361_35387[(1)] = (10));


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
});})(c__35192__auto___35373))
;
return ((function (switch__35078__auto__,c__35192__auto___35373){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_35365 = [null,null,null,null,null,null,null,null];
(statearr_35365[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_35365[(1)] = (1));

return statearr_35365;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_35345){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35366){if((e35366 instanceof Object)){
var ex__35082__auto__ = e35366;
var statearr_35367_35388 = state_35345;
(statearr_35367_35388[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35389 = state_35345;
state_35345 = G__35389;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_35345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_35345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___35373))
})();
var state__35194__auto__ = (function (){var statearr_35368 = f__35193__auto__.call(null);
(statearr_35368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35373);

return statearr_35368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___35373))
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
return (function (p__35577){
var vec__35578 = p__35577;
var v = cljs.core.nth.call(null,vec__35578,(0),null);
var p = cljs.core.nth.call(null,vec__35578,(1),null);
var job = vec__35578;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35192__auto___35764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results){
return (function (state_35585){
var state_val_35586 = (state_35585[(1)]);
if((state_val_35586 === (1))){
var state_35585__$1 = state_35585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35585__$1,(2),res,v);
} else {
if((state_val_35586 === (2))){
var inst_35582 = (state_35585[(2)]);
var inst_35583 = cljs.core.async.close_BANG_.call(null,res);
var state_35585__$1 = (function (){var statearr_35587 = state_35585;
(statearr_35587[(7)] = inst_35582);

return statearr_35587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35585__$1,inst_35583);
} else {
return null;
}
}
});})(c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results))
;
return ((function (switch__35078__auto__,c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_35591 = [null,null,null,null,null,null,null,null];
(statearr_35591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__);

(statearr_35591[(1)] = (1));

return statearr_35591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1 = (function (state_35585){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35592){if((e35592 instanceof Object)){
var ex__35082__auto__ = e35592;
var statearr_35593_35765 = state_35585;
(statearr_35593_35765[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_35585;
state_35585 = G__35766;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = function(state_35585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1.call(this,state_35585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results))
})();
var state__35194__auto__ = (function (){var statearr_35594 = f__35193__auto__.call(null);
(statearr_35594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35764);

return statearr_35594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___35764,res,vec__35578,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35595){
var vec__35596 = p__35595;
var v = cljs.core.nth.call(null,vec__35596,(0),null);
var p = cljs.core.nth.call(null,vec__35596,(1),null);
var job = vec__35596;
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
var n__33299__auto___35767 = n;
var __35768 = (0);
while(true){
if((__35768 < n__33299__auto___35767)){
var G__35599_35769 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35599_35769) {
case "compute":
var c__35192__auto___35771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35768,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (__35768,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function (state_35612){
var state_val_35613 = (state_35612[(1)]);
if((state_val_35613 === (1))){
var state_35612__$1 = state_35612;
var statearr_35614_35772 = state_35612__$1;
(statearr_35614_35772[(2)] = null);

(statearr_35614_35772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (2))){
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35612__$1,(4),jobs);
} else {
if((state_val_35613 === (3))){
var inst_35610 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35612__$1,inst_35610);
} else {
if((state_val_35613 === (4))){
var inst_35602 = (state_35612[(2)]);
var inst_35603 = process.call(null,inst_35602);
var state_35612__$1 = state_35612;
if(cljs.core.truth_(inst_35603)){
var statearr_35615_35773 = state_35612__$1;
(statearr_35615_35773[(1)] = (5));

} else {
var statearr_35616_35774 = state_35612__$1;
(statearr_35616_35774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (5))){
var state_35612__$1 = state_35612;
var statearr_35617_35775 = state_35612__$1;
(statearr_35617_35775[(2)] = null);

(statearr_35617_35775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (6))){
var state_35612__$1 = state_35612;
var statearr_35618_35776 = state_35612__$1;
(statearr_35618_35776[(2)] = null);

(statearr_35618_35776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35613 === (7))){
var inst_35608 = (state_35612[(2)]);
var state_35612__$1 = state_35612;
var statearr_35619_35777 = state_35612__$1;
(statearr_35619_35777[(2)] = inst_35608);

(statearr_35619_35777[(1)] = (3));


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
});})(__35768,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
;
return ((function (__35768,switch__35078__auto__,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_35623 = [null,null,null,null,null,null,null];
(statearr_35623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__);

(statearr_35623[(1)] = (1));

return statearr_35623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1 = (function (state_35612){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35624){if((e35624 instanceof Object)){
var ex__35082__auto__ = e35624;
var statearr_35625_35778 = state_35612;
(statearr_35625_35778[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35779 = state_35612;
state_35612 = G__35779;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = function(state_35612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1.call(this,state_35612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__;
})()
;})(__35768,switch__35078__auto__,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
})();
var state__35194__auto__ = (function (){var statearr_35626 = f__35193__auto__.call(null);
(statearr_35626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35771);

return statearr_35626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(__35768,c__35192__auto___35771,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
);


break;
case "async":
var c__35192__auto___35780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35768,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (__35768,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function (state_35639){
var state_val_35640 = (state_35639[(1)]);
if((state_val_35640 === (1))){
var state_35639__$1 = state_35639;
var statearr_35641_35781 = state_35639__$1;
(statearr_35641_35781[(2)] = null);

(statearr_35641_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (2))){
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35639__$1,(4),jobs);
} else {
if((state_val_35640 === (3))){
var inst_35637 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35639__$1,inst_35637);
} else {
if((state_val_35640 === (4))){
var inst_35629 = (state_35639[(2)]);
var inst_35630 = async.call(null,inst_35629);
var state_35639__$1 = state_35639;
if(cljs.core.truth_(inst_35630)){
var statearr_35642_35782 = state_35639__$1;
(statearr_35642_35782[(1)] = (5));

} else {
var statearr_35643_35783 = state_35639__$1;
(statearr_35643_35783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (5))){
var state_35639__$1 = state_35639;
var statearr_35644_35784 = state_35639__$1;
(statearr_35644_35784[(2)] = null);

(statearr_35644_35784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (6))){
var state_35639__$1 = state_35639;
var statearr_35645_35785 = state_35639__$1;
(statearr_35645_35785[(2)] = null);

(statearr_35645_35785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35640 === (7))){
var inst_35635 = (state_35639[(2)]);
var state_35639__$1 = state_35639;
var statearr_35646_35786 = state_35639__$1;
(statearr_35646_35786[(2)] = inst_35635);

(statearr_35646_35786[(1)] = (3));


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
});})(__35768,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
;
return ((function (__35768,switch__35078__auto__,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_35650 = [null,null,null,null,null,null,null];
(statearr_35650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__);

(statearr_35650[(1)] = (1));

return statearr_35650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1 = (function (state_35639){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35651){if((e35651 instanceof Object)){
var ex__35082__auto__ = e35651;
var statearr_35652_35787 = state_35639;
(statearr_35652_35787[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35788 = state_35639;
state_35639 = G__35788;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = function(state_35639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1.call(this,state_35639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__;
})()
;})(__35768,switch__35078__auto__,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
})();
var state__35194__auto__ = (function (){var statearr_35653 = f__35193__auto__.call(null);
(statearr_35653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35780);

return statearr_35653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(__35768,c__35192__auto___35780,G__35599_35769,n__33299__auto___35767,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35789 = (__35768 + (1));
__35768 = G__35789;
continue;
} else {
}
break;
}

var c__35192__auto___35790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___35790,jobs,results,process,async){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___35790,jobs,results,process,async){
return (function (state_35675){
var state_val_35676 = (state_35675[(1)]);
if((state_val_35676 === (1))){
var state_35675__$1 = state_35675;
var statearr_35677_35791 = state_35675__$1;
(statearr_35677_35791[(2)] = null);

(statearr_35677_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (2))){
var state_35675__$1 = state_35675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35675__$1,(4),from);
} else {
if((state_val_35676 === (3))){
var inst_35673 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35675__$1,inst_35673);
} else {
if((state_val_35676 === (4))){
var inst_35656 = (state_35675[(7)]);
var inst_35656__$1 = (state_35675[(2)]);
var inst_35657 = (inst_35656__$1 == null);
var state_35675__$1 = (function (){var statearr_35678 = state_35675;
(statearr_35678[(7)] = inst_35656__$1);

return statearr_35678;
})();
if(cljs.core.truth_(inst_35657)){
var statearr_35679_35792 = state_35675__$1;
(statearr_35679_35792[(1)] = (5));

} else {
var statearr_35680_35793 = state_35675__$1;
(statearr_35680_35793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (5))){
var inst_35659 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35675__$1 = state_35675;
var statearr_35681_35794 = state_35675__$1;
(statearr_35681_35794[(2)] = inst_35659);

(statearr_35681_35794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (6))){
var inst_35661 = (state_35675[(8)]);
var inst_35656 = (state_35675[(7)]);
var inst_35661__$1 = cljs.core.async.chan.call(null,(1));
var inst_35662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35663 = [inst_35656,inst_35661__$1];
var inst_35664 = (new cljs.core.PersistentVector(null,2,(5),inst_35662,inst_35663,null));
var state_35675__$1 = (function (){var statearr_35682 = state_35675;
(statearr_35682[(8)] = inst_35661__$1);

return statearr_35682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35675__$1,(8),jobs,inst_35664);
} else {
if((state_val_35676 === (7))){
var inst_35671 = (state_35675[(2)]);
var state_35675__$1 = state_35675;
var statearr_35683_35795 = state_35675__$1;
(statearr_35683_35795[(2)] = inst_35671);

(statearr_35683_35795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35676 === (8))){
var inst_35661 = (state_35675[(8)]);
var inst_35666 = (state_35675[(2)]);
var state_35675__$1 = (function (){var statearr_35684 = state_35675;
(statearr_35684[(9)] = inst_35666);

return statearr_35684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35675__$1,(9),results,inst_35661);
} else {
if((state_val_35676 === (9))){
var inst_35668 = (state_35675[(2)]);
var state_35675__$1 = (function (){var statearr_35685 = state_35675;
(statearr_35685[(10)] = inst_35668);

return statearr_35685;
})();
var statearr_35686_35796 = state_35675__$1;
(statearr_35686_35796[(2)] = null);

(statearr_35686_35796[(1)] = (2));


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
});})(c__35192__auto___35790,jobs,results,process,async))
;
return ((function (switch__35078__auto__,c__35192__auto___35790,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_35690 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__);

(statearr_35690[(1)] = (1));

return statearr_35690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1 = (function (state_35675){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35691){if((e35691 instanceof Object)){
var ex__35082__auto__ = e35691;
var statearr_35692_35797 = state_35675;
(statearr_35692_35797[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35798 = state_35675;
state_35675 = G__35798;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = function(state_35675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1.call(this,state_35675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___35790,jobs,results,process,async))
})();
var state__35194__auto__ = (function (){var statearr_35693 = f__35193__auto__.call(null);
(statearr_35693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35790);

return statearr_35693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___35790,jobs,results,process,async))
);


var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__,jobs,results,process,async){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__,jobs,results,process,async){
return (function (state_35731){
var state_val_35732 = (state_35731[(1)]);
if((state_val_35732 === (7))){
var inst_35727 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35733_35799 = state_35731__$1;
(statearr_35733_35799[(2)] = inst_35727);

(statearr_35733_35799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (20))){
var state_35731__$1 = state_35731;
var statearr_35734_35800 = state_35731__$1;
(statearr_35734_35800[(2)] = null);

(statearr_35734_35800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (1))){
var state_35731__$1 = state_35731;
var statearr_35735_35801 = state_35731__$1;
(statearr_35735_35801[(2)] = null);

(statearr_35735_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (4))){
var inst_35696 = (state_35731[(7)]);
var inst_35696__$1 = (state_35731[(2)]);
var inst_35697 = (inst_35696__$1 == null);
var state_35731__$1 = (function (){var statearr_35736 = state_35731;
(statearr_35736[(7)] = inst_35696__$1);

return statearr_35736;
})();
if(cljs.core.truth_(inst_35697)){
var statearr_35737_35802 = state_35731__$1;
(statearr_35737_35802[(1)] = (5));

} else {
var statearr_35738_35803 = state_35731__$1;
(statearr_35738_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (15))){
var inst_35709 = (state_35731[(8)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35731__$1,(18),to,inst_35709);
} else {
if((state_val_35732 === (21))){
var inst_35722 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35739_35804 = state_35731__$1;
(statearr_35739_35804[(2)] = inst_35722);

(statearr_35739_35804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (13))){
var inst_35724 = (state_35731[(2)]);
var state_35731__$1 = (function (){var statearr_35740 = state_35731;
(statearr_35740[(9)] = inst_35724);

return statearr_35740;
})();
var statearr_35741_35805 = state_35731__$1;
(statearr_35741_35805[(2)] = null);

(statearr_35741_35805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (6))){
var inst_35696 = (state_35731[(7)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35731__$1,(11),inst_35696);
} else {
if((state_val_35732 === (17))){
var inst_35717 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
if(cljs.core.truth_(inst_35717)){
var statearr_35742_35806 = state_35731__$1;
(statearr_35742_35806[(1)] = (19));

} else {
var statearr_35743_35807 = state_35731__$1;
(statearr_35743_35807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (3))){
var inst_35729 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35731__$1,inst_35729);
} else {
if((state_val_35732 === (12))){
var inst_35706 = (state_35731[(10)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35731__$1,(14),inst_35706);
} else {
if((state_val_35732 === (2))){
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35731__$1,(4),results);
} else {
if((state_val_35732 === (19))){
var state_35731__$1 = state_35731;
var statearr_35744_35808 = state_35731__$1;
(statearr_35744_35808[(2)] = null);

(statearr_35744_35808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (11))){
var inst_35706 = (state_35731[(2)]);
var state_35731__$1 = (function (){var statearr_35745 = state_35731;
(statearr_35745[(10)] = inst_35706);

return statearr_35745;
})();
var statearr_35746_35809 = state_35731__$1;
(statearr_35746_35809[(2)] = null);

(statearr_35746_35809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (9))){
var state_35731__$1 = state_35731;
var statearr_35747_35810 = state_35731__$1;
(statearr_35747_35810[(2)] = null);

(statearr_35747_35810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (5))){
var state_35731__$1 = state_35731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35748_35811 = state_35731__$1;
(statearr_35748_35811[(1)] = (8));

} else {
var statearr_35749_35812 = state_35731__$1;
(statearr_35749_35812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (14))){
var inst_35711 = (state_35731[(11)]);
var inst_35709 = (state_35731[(8)]);
var inst_35709__$1 = (state_35731[(2)]);
var inst_35710 = (inst_35709__$1 == null);
var inst_35711__$1 = cljs.core.not.call(null,inst_35710);
var state_35731__$1 = (function (){var statearr_35750 = state_35731;
(statearr_35750[(11)] = inst_35711__$1);

(statearr_35750[(8)] = inst_35709__$1);

return statearr_35750;
})();
if(inst_35711__$1){
var statearr_35751_35813 = state_35731__$1;
(statearr_35751_35813[(1)] = (15));

} else {
var statearr_35752_35814 = state_35731__$1;
(statearr_35752_35814[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (16))){
var inst_35711 = (state_35731[(11)]);
var state_35731__$1 = state_35731;
var statearr_35753_35815 = state_35731__$1;
(statearr_35753_35815[(2)] = inst_35711);

(statearr_35753_35815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (10))){
var inst_35703 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35754_35816 = state_35731__$1;
(statearr_35754_35816[(2)] = inst_35703);

(statearr_35754_35816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (18))){
var inst_35714 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35755_35817 = state_35731__$1;
(statearr_35755_35817[(2)] = inst_35714);

(statearr_35755_35817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (8))){
var inst_35700 = cljs.core.async.close_BANG_.call(null,to);
var state_35731__$1 = state_35731;
var statearr_35756_35818 = state_35731__$1;
(statearr_35756_35818[(2)] = inst_35700);

(statearr_35756_35818[(1)] = (10));


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
});})(c__35192__auto__,jobs,results,process,async))
;
return ((function (switch__35078__auto__,c__35192__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1 = (function (state_35731){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35761){if((e35761 instanceof Object)){
var ex__35082__auto__ = e35761;
var statearr_35762_35819 = state_35731;
(statearr_35762_35819[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35820 = state_35731;
state_35731 = G__35820;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__ = function(state_35731){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1.call(this,state_35731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__,jobs,results,process,async))
})();
var state__35194__auto__ = (function (){var statearr_35763 = f__35193__auto__.call(null);
(statearr_35763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__,jobs,results,process,async))
);

return c__35192__auto__;
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
var args35821 = [];
var len__33469__auto___35824 = arguments.length;
var i__33470__auto___35825 = (0);
while(true){
if((i__33470__auto___35825 < len__33469__auto___35824)){
args35821.push((arguments[i__33470__auto___35825]));

var G__35826 = (i__33470__auto___35825 + (1));
i__33470__auto___35825 = G__35826;
continue;
} else {
}
break;
}

var G__35823 = args35821.length;
switch (G__35823) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35821.length)].join('')));

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
var args35828 = [];
var len__33469__auto___35831 = arguments.length;
var i__33470__auto___35832 = (0);
while(true){
if((i__33470__auto___35832 < len__33469__auto___35831)){
args35828.push((arguments[i__33470__auto___35832]));

var G__35833 = (i__33470__auto___35832 + (1));
i__33470__auto___35832 = G__35833;
continue;
} else {
}
break;
}

var G__35830 = args35828.length;
switch (G__35830) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35828.length)].join('')));

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
var args35835 = [];
var len__33469__auto___35888 = arguments.length;
var i__33470__auto___35889 = (0);
while(true){
if((i__33470__auto___35889 < len__33469__auto___35888)){
args35835.push((arguments[i__33470__auto___35889]));

var G__35890 = (i__33470__auto___35889 + (1));
i__33470__auto___35889 = G__35890;
continue;
} else {
}
break;
}

var G__35837 = args35835.length;
switch (G__35837) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35835.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35192__auto___35892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___35892,tc,fc){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___35892,tc,fc){
return (function (state_35863){
var state_val_35864 = (state_35863[(1)]);
if((state_val_35864 === (7))){
var inst_35859 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
var statearr_35865_35893 = state_35863__$1;
(statearr_35865_35893[(2)] = inst_35859);

(statearr_35865_35893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (1))){
var state_35863__$1 = state_35863;
var statearr_35866_35894 = state_35863__$1;
(statearr_35866_35894[(2)] = null);

(statearr_35866_35894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (4))){
var inst_35840 = (state_35863[(7)]);
var inst_35840__$1 = (state_35863[(2)]);
var inst_35841 = (inst_35840__$1 == null);
var state_35863__$1 = (function (){var statearr_35867 = state_35863;
(statearr_35867[(7)] = inst_35840__$1);

return statearr_35867;
})();
if(cljs.core.truth_(inst_35841)){
var statearr_35868_35895 = state_35863__$1;
(statearr_35868_35895[(1)] = (5));

} else {
var statearr_35869_35896 = state_35863__$1;
(statearr_35869_35896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (13))){
var state_35863__$1 = state_35863;
var statearr_35870_35897 = state_35863__$1;
(statearr_35870_35897[(2)] = null);

(statearr_35870_35897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (6))){
var inst_35840 = (state_35863[(7)]);
var inst_35846 = p.call(null,inst_35840);
var state_35863__$1 = state_35863;
if(cljs.core.truth_(inst_35846)){
var statearr_35871_35898 = state_35863__$1;
(statearr_35871_35898[(1)] = (9));

} else {
var statearr_35872_35899 = state_35863__$1;
(statearr_35872_35899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (3))){
var inst_35861 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35863__$1,inst_35861);
} else {
if((state_val_35864 === (12))){
var state_35863__$1 = state_35863;
var statearr_35873_35900 = state_35863__$1;
(statearr_35873_35900[(2)] = null);

(statearr_35873_35900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (2))){
var state_35863__$1 = state_35863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35863__$1,(4),ch);
} else {
if((state_val_35864 === (11))){
var inst_35840 = (state_35863[(7)]);
var inst_35850 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35863__$1,(8),inst_35850,inst_35840);
} else {
if((state_val_35864 === (9))){
var state_35863__$1 = state_35863;
var statearr_35874_35901 = state_35863__$1;
(statearr_35874_35901[(2)] = tc);

(statearr_35874_35901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (5))){
var inst_35843 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35844 = cljs.core.async.close_BANG_.call(null,fc);
var state_35863__$1 = (function (){var statearr_35875 = state_35863;
(statearr_35875[(8)] = inst_35843);

return statearr_35875;
})();
var statearr_35876_35902 = state_35863__$1;
(statearr_35876_35902[(2)] = inst_35844);

(statearr_35876_35902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (14))){
var inst_35857 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
var statearr_35877_35903 = state_35863__$1;
(statearr_35877_35903[(2)] = inst_35857);

(statearr_35877_35903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (10))){
var state_35863__$1 = state_35863;
var statearr_35878_35904 = state_35863__$1;
(statearr_35878_35904[(2)] = fc);

(statearr_35878_35904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35864 === (8))){
var inst_35852 = (state_35863[(2)]);
var state_35863__$1 = state_35863;
if(cljs.core.truth_(inst_35852)){
var statearr_35879_35905 = state_35863__$1;
(statearr_35879_35905[(1)] = (12));

} else {
var statearr_35880_35906 = state_35863__$1;
(statearr_35880_35906[(1)] = (13));

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
});})(c__35192__auto___35892,tc,fc))
;
return ((function (switch__35078__auto__,c__35192__auto___35892,tc,fc){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_35884 = [null,null,null,null,null,null,null,null,null];
(statearr_35884[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_35884[(1)] = (1));

return statearr_35884;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_35863){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35885){if((e35885 instanceof Object)){
var ex__35082__auto__ = e35885;
var statearr_35886_35907 = state_35863;
(statearr_35886_35907[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35908 = state_35863;
state_35863 = G__35908;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_35863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_35863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___35892,tc,fc))
})();
var state__35194__auto__ = (function (){var statearr_35887 = f__35193__auto__.call(null);
(statearr_35887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___35892);

return statearr_35887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___35892,tc,fc))
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
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__){
return (function (state_35972){
var state_val_35973 = (state_35972[(1)]);
if((state_val_35973 === (7))){
var inst_35968 = (state_35972[(2)]);
var state_35972__$1 = state_35972;
var statearr_35974_35995 = state_35972__$1;
(statearr_35974_35995[(2)] = inst_35968);

(statearr_35974_35995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (1))){
var inst_35952 = init;
var state_35972__$1 = (function (){var statearr_35975 = state_35972;
(statearr_35975[(7)] = inst_35952);

return statearr_35975;
})();
var statearr_35976_35996 = state_35972__$1;
(statearr_35976_35996[(2)] = null);

(statearr_35976_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (4))){
var inst_35955 = (state_35972[(8)]);
var inst_35955__$1 = (state_35972[(2)]);
var inst_35956 = (inst_35955__$1 == null);
var state_35972__$1 = (function (){var statearr_35977 = state_35972;
(statearr_35977[(8)] = inst_35955__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35956)){
var statearr_35978_35997 = state_35972__$1;
(statearr_35978_35997[(1)] = (5));

} else {
var statearr_35979_35998 = state_35972__$1;
(statearr_35979_35998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (6))){
var inst_35952 = (state_35972[(7)]);
var inst_35955 = (state_35972[(8)]);
var inst_35959 = (state_35972[(9)]);
var inst_35959__$1 = f.call(null,inst_35952,inst_35955);
var inst_35960 = cljs.core.reduced_QMARK_.call(null,inst_35959__$1);
var state_35972__$1 = (function (){var statearr_35980 = state_35972;
(statearr_35980[(9)] = inst_35959__$1);

return statearr_35980;
})();
if(inst_35960){
var statearr_35981_35999 = state_35972__$1;
(statearr_35981_35999[(1)] = (8));

} else {
var statearr_35982_36000 = state_35972__$1;
(statearr_35982_36000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (3))){
var inst_35970 = (state_35972[(2)]);
var state_35972__$1 = state_35972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35972__$1,inst_35970);
} else {
if((state_val_35973 === (2))){
var state_35972__$1 = state_35972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35972__$1,(4),ch);
} else {
if((state_val_35973 === (9))){
var inst_35959 = (state_35972[(9)]);
var inst_35952 = inst_35959;
var state_35972__$1 = (function (){var statearr_35983 = state_35972;
(statearr_35983[(7)] = inst_35952);

return statearr_35983;
})();
var statearr_35984_36001 = state_35972__$1;
(statearr_35984_36001[(2)] = null);

(statearr_35984_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (5))){
var inst_35952 = (state_35972[(7)]);
var state_35972__$1 = state_35972;
var statearr_35985_36002 = state_35972__$1;
(statearr_35985_36002[(2)] = inst_35952);

(statearr_35985_36002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (10))){
var inst_35966 = (state_35972[(2)]);
var state_35972__$1 = state_35972;
var statearr_35986_36003 = state_35972__$1;
(statearr_35986_36003[(2)] = inst_35966);

(statearr_35986_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35973 === (8))){
var inst_35959 = (state_35972[(9)]);
var inst_35962 = cljs.core.deref.call(null,inst_35959);
var state_35972__$1 = state_35972;
var statearr_35987_36004 = state_35972__$1;
(statearr_35987_36004[(2)] = inst_35962);

(statearr_35987_36004[(1)] = (10));


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
});})(c__35192__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35079__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35079__auto____0 = (function (){
var statearr_35991 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35991[(0)] = cljs$core$async$reduce_$_state_machine__35079__auto__);

(statearr_35991[(1)] = (1));

return statearr_35991;
});
var cljs$core$async$reduce_$_state_machine__35079__auto____1 = (function (state_35972){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_35972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e35992){if((e35992 instanceof Object)){
var ex__35082__auto__ = e35992;
var statearr_35993_36005 = state_35972;
(statearr_35993_36005[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36006 = state_35972;
state_35972 = G__36006;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35079__auto__ = function(state_35972){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35079__auto____1.call(this,state_35972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35079__auto____0;
cljs$core$async$reduce_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35079__auto____1;
return cljs$core$async$reduce_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__))
})();
var state__35194__auto__ = (function (){var statearr_35994 = f__35193__auto__.call(null);
(statearr_35994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_35994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__))
);

return c__35192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__,f__$1){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__,f__$1){
return (function (state_36026){
var state_val_36027 = (state_36026[(1)]);
if((state_val_36027 === (1))){
var inst_36021 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36026__$1,(2),inst_36021);
} else {
if((state_val_36027 === (2))){
var inst_36023 = (state_36026[(2)]);
var inst_36024 = f__$1.call(null,inst_36023);
var state_36026__$1 = state_36026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36026__$1,inst_36024);
} else {
return null;
}
}
});})(c__35192__auto__,f__$1))
;
return ((function (switch__35078__auto__,c__35192__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35079__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35079__auto____0 = (function (){
var statearr_36031 = [null,null,null,null,null,null,null];
(statearr_36031[(0)] = cljs$core$async$transduce_$_state_machine__35079__auto__);

(statearr_36031[(1)] = (1));

return statearr_36031;
});
var cljs$core$async$transduce_$_state_machine__35079__auto____1 = (function (state_36026){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_36026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e36032){if((e36032 instanceof Object)){
var ex__35082__auto__ = e36032;
var statearr_36033_36035 = state_36026;
(statearr_36033_36035[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_36026;
state_36026 = G__36036;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35079__auto__ = function(state_36026){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35079__auto____1.call(this,state_36026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35079__auto____0;
cljs$core$async$transduce_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35079__auto____1;
return cljs$core$async$transduce_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__,f__$1))
})();
var state__35194__auto__ = (function (){var statearr_36034 = f__35193__auto__.call(null);
(statearr_36034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_36034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__,f__$1))
);

return c__35192__auto__;
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
var args36037 = [];
var len__33469__auto___36089 = arguments.length;
var i__33470__auto___36090 = (0);
while(true){
if((i__33470__auto___36090 < len__33469__auto___36089)){
args36037.push((arguments[i__33470__auto___36090]));

var G__36091 = (i__33470__auto___36090 + (1));
i__33470__auto___36090 = G__36091;
continue;
} else {
}
break;
}

var G__36039 = args36037.length;
switch (G__36039) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36037.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__){
return (function (state_36064){
var state_val_36065 = (state_36064[(1)]);
if((state_val_36065 === (7))){
var inst_36046 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
var statearr_36066_36093 = state_36064__$1;
(statearr_36066_36093[(2)] = inst_36046);

(statearr_36066_36093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (1))){
var inst_36040 = cljs.core.seq.call(null,coll);
var inst_36041 = inst_36040;
var state_36064__$1 = (function (){var statearr_36067 = state_36064;
(statearr_36067[(7)] = inst_36041);

return statearr_36067;
})();
var statearr_36068_36094 = state_36064__$1;
(statearr_36068_36094[(2)] = null);

(statearr_36068_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (4))){
var inst_36041 = (state_36064[(7)]);
var inst_36044 = cljs.core.first.call(null,inst_36041);
var state_36064__$1 = state_36064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36064__$1,(7),ch,inst_36044);
} else {
if((state_val_36065 === (13))){
var inst_36058 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
var statearr_36069_36095 = state_36064__$1;
(statearr_36069_36095[(2)] = inst_36058);

(statearr_36069_36095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (6))){
var inst_36049 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
if(cljs.core.truth_(inst_36049)){
var statearr_36070_36096 = state_36064__$1;
(statearr_36070_36096[(1)] = (8));

} else {
var statearr_36071_36097 = state_36064__$1;
(statearr_36071_36097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (3))){
var inst_36062 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36064__$1,inst_36062);
} else {
if((state_val_36065 === (12))){
var state_36064__$1 = state_36064;
var statearr_36072_36098 = state_36064__$1;
(statearr_36072_36098[(2)] = null);

(statearr_36072_36098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (2))){
var inst_36041 = (state_36064[(7)]);
var state_36064__$1 = state_36064;
if(cljs.core.truth_(inst_36041)){
var statearr_36073_36099 = state_36064__$1;
(statearr_36073_36099[(1)] = (4));

} else {
var statearr_36074_36100 = state_36064__$1;
(statearr_36074_36100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (11))){
var inst_36055 = cljs.core.async.close_BANG_.call(null,ch);
var state_36064__$1 = state_36064;
var statearr_36075_36101 = state_36064__$1;
(statearr_36075_36101[(2)] = inst_36055);

(statearr_36075_36101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (9))){
var state_36064__$1 = state_36064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36076_36102 = state_36064__$1;
(statearr_36076_36102[(1)] = (11));

} else {
var statearr_36077_36103 = state_36064__$1;
(statearr_36077_36103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (5))){
var inst_36041 = (state_36064[(7)]);
var state_36064__$1 = state_36064;
var statearr_36078_36104 = state_36064__$1;
(statearr_36078_36104[(2)] = inst_36041);

(statearr_36078_36104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (10))){
var inst_36060 = (state_36064[(2)]);
var state_36064__$1 = state_36064;
var statearr_36079_36105 = state_36064__$1;
(statearr_36079_36105[(2)] = inst_36060);

(statearr_36079_36105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36065 === (8))){
var inst_36041 = (state_36064[(7)]);
var inst_36051 = cljs.core.next.call(null,inst_36041);
var inst_36041__$1 = inst_36051;
var state_36064__$1 = (function (){var statearr_36080 = state_36064;
(statearr_36080[(7)] = inst_36041__$1);

return statearr_36080;
})();
var statearr_36081_36106 = state_36064__$1;
(statearr_36081_36106[(2)] = null);

(statearr_36081_36106[(1)] = (2));


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
});})(c__35192__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_36085 = [null,null,null,null,null,null,null,null];
(statearr_36085[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_36085[(1)] = (1));

return statearr_36085;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_36064){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_36064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e36086){if((e36086 instanceof Object)){
var ex__35082__auto__ = e36086;
var statearr_36087_36107 = state_36064;
(statearr_36087_36107[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36108 = state_36064;
state_36064 = G__36108;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_36064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_36064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__))
})();
var state__35194__auto__ = (function (){var statearr_36088 = f__35193__auto__.call(null);
(statearr_36088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_36088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__))
);

return c__35192__auto__;
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
var x__32999__auto__ = (((_ == null))?null:_);
var m__33000__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,_);
} else {
var m__33000__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,_);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__33000__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,ch);
} else {
var m__33000__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,ch);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m);
} else {
var m__33000__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async36334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36334 = (function (mult,ch,cs,meta36335){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36335 = meta36335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36336,meta36335__$1){
var self__ = this;
var _36336__$1 = this;
return (new cljs.core.async.t_cljs$core$async36334(self__.mult,self__.ch,self__.cs,meta36335__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36336){
var self__ = this;
var _36336__$1 = this;
return self__.meta36335;
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36335","meta36335",622785842,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36334";

cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async36334");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36334 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36334(mult__$1,ch__$1,cs__$1,meta36335){
return (new cljs.core.async.t_cljs$core$async36334(mult__$1,ch__$1,cs__$1,meta36335));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36334(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35192__auto___36559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___36559,cs,m,dchan,dctr,done){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___36559,cs,m,dchan,dctr,done){
return (function (state_36471){
var state_val_36472 = (state_36471[(1)]);
if((state_val_36472 === (7))){
var inst_36467 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36473_36560 = state_36471__$1;
(statearr_36473_36560[(2)] = inst_36467);

(statearr_36473_36560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (20))){
var inst_36370 = (state_36471[(7)]);
var inst_36382 = cljs.core.first.call(null,inst_36370);
var inst_36383 = cljs.core.nth.call(null,inst_36382,(0),null);
var inst_36384 = cljs.core.nth.call(null,inst_36382,(1),null);
var state_36471__$1 = (function (){var statearr_36474 = state_36471;
(statearr_36474[(8)] = inst_36383);

return statearr_36474;
})();
if(cljs.core.truth_(inst_36384)){
var statearr_36475_36561 = state_36471__$1;
(statearr_36475_36561[(1)] = (22));

} else {
var statearr_36476_36562 = state_36471__$1;
(statearr_36476_36562[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (27))){
var inst_36339 = (state_36471[(9)]);
var inst_36412 = (state_36471[(10)]);
var inst_36419 = (state_36471[(11)]);
var inst_36414 = (state_36471[(12)]);
var inst_36419__$1 = cljs.core._nth.call(null,inst_36412,inst_36414);
var inst_36420 = cljs.core.async.put_BANG_.call(null,inst_36419__$1,inst_36339,done);
var state_36471__$1 = (function (){var statearr_36477 = state_36471;
(statearr_36477[(11)] = inst_36419__$1);

return statearr_36477;
})();
if(cljs.core.truth_(inst_36420)){
var statearr_36478_36563 = state_36471__$1;
(statearr_36478_36563[(1)] = (30));

} else {
var statearr_36479_36564 = state_36471__$1;
(statearr_36479_36564[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (1))){
var state_36471__$1 = state_36471;
var statearr_36480_36565 = state_36471__$1;
(statearr_36480_36565[(2)] = null);

(statearr_36480_36565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (24))){
var inst_36370 = (state_36471[(7)]);
var inst_36389 = (state_36471[(2)]);
var inst_36390 = cljs.core.next.call(null,inst_36370);
var inst_36348 = inst_36390;
var inst_36349 = null;
var inst_36350 = (0);
var inst_36351 = (0);
var state_36471__$1 = (function (){var statearr_36481 = state_36471;
(statearr_36481[(13)] = inst_36349);

(statearr_36481[(14)] = inst_36348);

(statearr_36481[(15)] = inst_36350);

(statearr_36481[(16)] = inst_36351);

(statearr_36481[(17)] = inst_36389);

return statearr_36481;
})();
var statearr_36482_36566 = state_36471__$1;
(statearr_36482_36566[(2)] = null);

(statearr_36482_36566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (39))){
var state_36471__$1 = state_36471;
var statearr_36486_36567 = state_36471__$1;
(statearr_36486_36567[(2)] = null);

(statearr_36486_36567[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (4))){
var inst_36339 = (state_36471[(9)]);
var inst_36339__$1 = (state_36471[(2)]);
var inst_36340 = (inst_36339__$1 == null);
var state_36471__$1 = (function (){var statearr_36487 = state_36471;
(statearr_36487[(9)] = inst_36339__$1);

return statearr_36487;
})();
if(cljs.core.truth_(inst_36340)){
var statearr_36488_36568 = state_36471__$1;
(statearr_36488_36568[(1)] = (5));

} else {
var statearr_36489_36569 = state_36471__$1;
(statearr_36489_36569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (15))){
var inst_36349 = (state_36471[(13)]);
var inst_36348 = (state_36471[(14)]);
var inst_36350 = (state_36471[(15)]);
var inst_36351 = (state_36471[(16)]);
var inst_36366 = (state_36471[(2)]);
var inst_36367 = (inst_36351 + (1));
var tmp36483 = inst_36349;
var tmp36484 = inst_36348;
var tmp36485 = inst_36350;
var inst_36348__$1 = tmp36484;
var inst_36349__$1 = tmp36483;
var inst_36350__$1 = tmp36485;
var inst_36351__$1 = inst_36367;
var state_36471__$1 = (function (){var statearr_36490 = state_36471;
(statearr_36490[(13)] = inst_36349__$1);

(statearr_36490[(14)] = inst_36348__$1);

(statearr_36490[(18)] = inst_36366);

(statearr_36490[(15)] = inst_36350__$1);

(statearr_36490[(16)] = inst_36351__$1);

return statearr_36490;
})();
var statearr_36491_36570 = state_36471__$1;
(statearr_36491_36570[(2)] = null);

(statearr_36491_36570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (21))){
var inst_36393 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36495_36571 = state_36471__$1;
(statearr_36495_36571[(2)] = inst_36393);

(statearr_36495_36571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (31))){
var inst_36419 = (state_36471[(11)]);
var inst_36423 = done.call(null,null);
var inst_36424 = cljs.core.async.untap_STAR_.call(null,m,inst_36419);
var state_36471__$1 = (function (){var statearr_36496 = state_36471;
(statearr_36496[(19)] = inst_36423);

return statearr_36496;
})();
var statearr_36497_36572 = state_36471__$1;
(statearr_36497_36572[(2)] = inst_36424);

(statearr_36497_36572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (32))){
var inst_36413 = (state_36471[(20)]);
var inst_36411 = (state_36471[(21)]);
var inst_36412 = (state_36471[(10)]);
var inst_36414 = (state_36471[(12)]);
var inst_36426 = (state_36471[(2)]);
var inst_36427 = (inst_36414 + (1));
var tmp36492 = inst_36413;
var tmp36493 = inst_36411;
var tmp36494 = inst_36412;
var inst_36411__$1 = tmp36493;
var inst_36412__$1 = tmp36494;
var inst_36413__$1 = tmp36492;
var inst_36414__$1 = inst_36427;
var state_36471__$1 = (function (){var statearr_36498 = state_36471;
(statearr_36498[(20)] = inst_36413__$1);

(statearr_36498[(22)] = inst_36426);

(statearr_36498[(21)] = inst_36411__$1);

(statearr_36498[(10)] = inst_36412__$1);

(statearr_36498[(12)] = inst_36414__$1);

return statearr_36498;
})();
var statearr_36499_36573 = state_36471__$1;
(statearr_36499_36573[(2)] = null);

(statearr_36499_36573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (40))){
var inst_36439 = (state_36471[(23)]);
var inst_36443 = done.call(null,null);
var inst_36444 = cljs.core.async.untap_STAR_.call(null,m,inst_36439);
var state_36471__$1 = (function (){var statearr_36500 = state_36471;
(statearr_36500[(24)] = inst_36443);

return statearr_36500;
})();
var statearr_36501_36574 = state_36471__$1;
(statearr_36501_36574[(2)] = inst_36444);

(statearr_36501_36574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (33))){
var inst_36430 = (state_36471[(25)]);
var inst_36432 = cljs.core.chunked_seq_QMARK_.call(null,inst_36430);
var state_36471__$1 = state_36471;
if(inst_36432){
var statearr_36502_36575 = state_36471__$1;
(statearr_36502_36575[(1)] = (36));

} else {
var statearr_36503_36576 = state_36471__$1;
(statearr_36503_36576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (13))){
var inst_36360 = (state_36471[(26)]);
var inst_36363 = cljs.core.async.close_BANG_.call(null,inst_36360);
var state_36471__$1 = state_36471;
var statearr_36504_36577 = state_36471__$1;
(statearr_36504_36577[(2)] = inst_36363);

(statearr_36504_36577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (22))){
var inst_36383 = (state_36471[(8)]);
var inst_36386 = cljs.core.async.close_BANG_.call(null,inst_36383);
var state_36471__$1 = state_36471;
var statearr_36505_36578 = state_36471__$1;
(statearr_36505_36578[(2)] = inst_36386);

(statearr_36505_36578[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (36))){
var inst_36430 = (state_36471[(25)]);
var inst_36434 = cljs.core.chunk_first.call(null,inst_36430);
var inst_36435 = cljs.core.chunk_rest.call(null,inst_36430);
var inst_36436 = cljs.core.count.call(null,inst_36434);
var inst_36411 = inst_36435;
var inst_36412 = inst_36434;
var inst_36413 = inst_36436;
var inst_36414 = (0);
var state_36471__$1 = (function (){var statearr_36506 = state_36471;
(statearr_36506[(20)] = inst_36413);

(statearr_36506[(21)] = inst_36411);

(statearr_36506[(10)] = inst_36412);

(statearr_36506[(12)] = inst_36414);

return statearr_36506;
})();
var statearr_36507_36579 = state_36471__$1;
(statearr_36507_36579[(2)] = null);

(statearr_36507_36579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (41))){
var inst_36430 = (state_36471[(25)]);
var inst_36446 = (state_36471[(2)]);
var inst_36447 = cljs.core.next.call(null,inst_36430);
var inst_36411 = inst_36447;
var inst_36412 = null;
var inst_36413 = (0);
var inst_36414 = (0);
var state_36471__$1 = (function (){var statearr_36508 = state_36471;
(statearr_36508[(20)] = inst_36413);

(statearr_36508[(21)] = inst_36411);

(statearr_36508[(10)] = inst_36412);

(statearr_36508[(27)] = inst_36446);

(statearr_36508[(12)] = inst_36414);

return statearr_36508;
})();
var statearr_36509_36580 = state_36471__$1;
(statearr_36509_36580[(2)] = null);

(statearr_36509_36580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (43))){
var state_36471__$1 = state_36471;
var statearr_36510_36581 = state_36471__$1;
(statearr_36510_36581[(2)] = null);

(statearr_36510_36581[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (29))){
var inst_36455 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36511_36582 = state_36471__$1;
(statearr_36511_36582[(2)] = inst_36455);

(statearr_36511_36582[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (44))){
var inst_36464 = (state_36471[(2)]);
var state_36471__$1 = (function (){var statearr_36512 = state_36471;
(statearr_36512[(28)] = inst_36464);

return statearr_36512;
})();
var statearr_36513_36583 = state_36471__$1;
(statearr_36513_36583[(2)] = null);

(statearr_36513_36583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (6))){
var inst_36403 = (state_36471[(29)]);
var inst_36402 = cljs.core.deref.call(null,cs);
var inst_36403__$1 = cljs.core.keys.call(null,inst_36402);
var inst_36404 = cljs.core.count.call(null,inst_36403__$1);
var inst_36405 = cljs.core.reset_BANG_.call(null,dctr,inst_36404);
var inst_36410 = cljs.core.seq.call(null,inst_36403__$1);
var inst_36411 = inst_36410;
var inst_36412 = null;
var inst_36413 = (0);
var inst_36414 = (0);
var state_36471__$1 = (function (){var statearr_36514 = state_36471;
(statearr_36514[(29)] = inst_36403__$1);

(statearr_36514[(20)] = inst_36413);

(statearr_36514[(30)] = inst_36405);

(statearr_36514[(21)] = inst_36411);

(statearr_36514[(10)] = inst_36412);

(statearr_36514[(12)] = inst_36414);

return statearr_36514;
})();
var statearr_36515_36584 = state_36471__$1;
(statearr_36515_36584[(2)] = null);

(statearr_36515_36584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (28))){
var inst_36411 = (state_36471[(21)]);
var inst_36430 = (state_36471[(25)]);
var inst_36430__$1 = cljs.core.seq.call(null,inst_36411);
var state_36471__$1 = (function (){var statearr_36516 = state_36471;
(statearr_36516[(25)] = inst_36430__$1);

return statearr_36516;
})();
if(inst_36430__$1){
var statearr_36517_36585 = state_36471__$1;
(statearr_36517_36585[(1)] = (33));

} else {
var statearr_36518_36586 = state_36471__$1;
(statearr_36518_36586[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (25))){
var inst_36413 = (state_36471[(20)]);
var inst_36414 = (state_36471[(12)]);
var inst_36416 = (inst_36414 < inst_36413);
var inst_36417 = inst_36416;
var state_36471__$1 = state_36471;
if(cljs.core.truth_(inst_36417)){
var statearr_36519_36587 = state_36471__$1;
(statearr_36519_36587[(1)] = (27));

} else {
var statearr_36520_36588 = state_36471__$1;
(statearr_36520_36588[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (34))){
var state_36471__$1 = state_36471;
var statearr_36521_36589 = state_36471__$1;
(statearr_36521_36589[(2)] = null);

(statearr_36521_36589[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (17))){
var state_36471__$1 = state_36471;
var statearr_36522_36590 = state_36471__$1;
(statearr_36522_36590[(2)] = null);

(statearr_36522_36590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (3))){
var inst_36469 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36471__$1,inst_36469);
} else {
if((state_val_36472 === (12))){
var inst_36398 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36523_36591 = state_36471__$1;
(statearr_36523_36591[(2)] = inst_36398);

(statearr_36523_36591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (2))){
var state_36471__$1 = state_36471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36471__$1,(4),ch);
} else {
if((state_val_36472 === (23))){
var state_36471__$1 = state_36471;
var statearr_36524_36592 = state_36471__$1;
(statearr_36524_36592[(2)] = null);

(statearr_36524_36592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (35))){
var inst_36453 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36525_36593 = state_36471__$1;
(statearr_36525_36593[(2)] = inst_36453);

(statearr_36525_36593[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (19))){
var inst_36370 = (state_36471[(7)]);
var inst_36374 = cljs.core.chunk_first.call(null,inst_36370);
var inst_36375 = cljs.core.chunk_rest.call(null,inst_36370);
var inst_36376 = cljs.core.count.call(null,inst_36374);
var inst_36348 = inst_36375;
var inst_36349 = inst_36374;
var inst_36350 = inst_36376;
var inst_36351 = (0);
var state_36471__$1 = (function (){var statearr_36526 = state_36471;
(statearr_36526[(13)] = inst_36349);

(statearr_36526[(14)] = inst_36348);

(statearr_36526[(15)] = inst_36350);

(statearr_36526[(16)] = inst_36351);

return statearr_36526;
})();
var statearr_36527_36594 = state_36471__$1;
(statearr_36527_36594[(2)] = null);

(statearr_36527_36594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (11))){
var inst_36348 = (state_36471[(14)]);
var inst_36370 = (state_36471[(7)]);
var inst_36370__$1 = cljs.core.seq.call(null,inst_36348);
var state_36471__$1 = (function (){var statearr_36528 = state_36471;
(statearr_36528[(7)] = inst_36370__$1);

return statearr_36528;
})();
if(inst_36370__$1){
var statearr_36529_36595 = state_36471__$1;
(statearr_36529_36595[(1)] = (16));

} else {
var statearr_36530_36596 = state_36471__$1;
(statearr_36530_36596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (9))){
var inst_36400 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36531_36597 = state_36471__$1;
(statearr_36531_36597[(2)] = inst_36400);

(statearr_36531_36597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (5))){
var inst_36346 = cljs.core.deref.call(null,cs);
var inst_36347 = cljs.core.seq.call(null,inst_36346);
var inst_36348 = inst_36347;
var inst_36349 = null;
var inst_36350 = (0);
var inst_36351 = (0);
var state_36471__$1 = (function (){var statearr_36532 = state_36471;
(statearr_36532[(13)] = inst_36349);

(statearr_36532[(14)] = inst_36348);

(statearr_36532[(15)] = inst_36350);

(statearr_36532[(16)] = inst_36351);

return statearr_36532;
})();
var statearr_36533_36598 = state_36471__$1;
(statearr_36533_36598[(2)] = null);

(statearr_36533_36598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (14))){
var state_36471__$1 = state_36471;
var statearr_36534_36599 = state_36471__$1;
(statearr_36534_36599[(2)] = null);

(statearr_36534_36599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (45))){
var inst_36461 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36535_36600 = state_36471__$1;
(statearr_36535_36600[(2)] = inst_36461);

(statearr_36535_36600[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (26))){
var inst_36403 = (state_36471[(29)]);
var inst_36457 = (state_36471[(2)]);
var inst_36458 = cljs.core.seq.call(null,inst_36403);
var state_36471__$1 = (function (){var statearr_36536 = state_36471;
(statearr_36536[(31)] = inst_36457);

return statearr_36536;
})();
if(inst_36458){
var statearr_36537_36601 = state_36471__$1;
(statearr_36537_36601[(1)] = (42));

} else {
var statearr_36538_36602 = state_36471__$1;
(statearr_36538_36602[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (16))){
var inst_36370 = (state_36471[(7)]);
var inst_36372 = cljs.core.chunked_seq_QMARK_.call(null,inst_36370);
var state_36471__$1 = state_36471;
if(inst_36372){
var statearr_36539_36603 = state_36471__$1;
(statearr_36539_36603[(1)] = (19));

} else {
var statearr_36540_36604 = state_36471__$1;
(statearr_36540_36604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (38))){
var inst_36450 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36541_36605 = state_36471__$1;
(statearr_36541_36605[(2)] = inst_36450);

(statearr_36541_36605[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (30))){
var state_36471__$1 = state_36471;
var statearr_36542_36606 = state_36471__$1;
(statearr_36542_36606[(2)] = null);

(statearr_36542_36606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (10))){
var inst_36349 = (state_36471[(13)]);
var inst_36351 = (state_36471[(16)]);
var inst_36359 = cljs.core._nth.call(null,inst_36349,inst_36351);
var inst_36360 = cljs.core.nth.call(null,inst_36359,(0),null);
var inst_36361 = cljs.core.nth.call(null,inst_36359,(1),null);
var state_36471__$1 = (function (){var statearr_36543 = state_36471;
(statearr_36543[(26)] = inst_36360);

return statearr_36543;
})();
if(cljs.core.truth_(inst_36361)){
var statearr_36544_36607 = state_36471__$1;
(statearr_36544_36607[(1)] = (13));

} else {
var statearr_36545_36608 = state_36471__$1;
(statearr_36545_36608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (18))){
var inst_36396 = (state_36471[(2)]);
var state_36471__$1 = state_36471;
var statearr_36546_36609 = state_36471__$1;
(statearr_36546_36609[(2)] = inst_36396);

(statearr_36546_36609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (42))){
var state_36471__$1 = state_36471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36471__$1,(45),dchan);
} else {
if((state_val_36472 === (37))){
var inst_36339 = (state_36471[(9)]);
var inst_36439 = (state_36471[(23)]);
var inst_36430 = (state_36471[(25)]);
var inst_36439__$1 = cljs.core.first.call(null,inst_36430);
var inst_36440 = cljs.core.async.put_BANG_.call(null,inst_36439__$1,inst_36339,done);
var state_36471__$1 = (function (){var statearr_36547 = state_36471;
(statearr_36547[(23)] = inst_36439__$1);

return statearr_36547;
})();
if(cljs.core.truth_(inst_36440)){
var statearr_36548_36610 = state_36471__$1;
(statearr_36548_36610[(1)] = (39));

} else {
var statearr_36549_36611 = state_36471__$1;
(statearr_36549_36611[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36472 === (8))){
var inst_36350 = (state_36471[(15)]);
var inst_36351 = (state_36471[(16)]);
var inst_36353 = (inst_36351 < inst_36350);
var inst_36354 = inst_36353;
var state_36471__$1 = state_36471;
if(cljs.core.truth_(inst_36354)){
var statearr_36550_36612 = state_36471__$1;
(statearr_36550_36612[(1)] = (10));

} else {
var statearr_36551_36613 = state_36471__$1;
(statearr_36551_36613[(1)] = (11));

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
});})(c__35192__auto___36559,cs,m,dchan,dctr,done))
;
return ((function (switch__35078__auto__,c__35192__auto___36559,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35079__auto__ = null;
var cljs$core$async$mult_$_state_machine__35079__auto____0 = (function (){
var statearr_36555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36555[(0)] = cljs$core$async$mult_$_state_machine__35079__auto__);

(statearr_36555[(1)] = (1));

return statearr_36555;
});
var cljs$core$async$mult_$_state_machine__35079__auto____1 = (function (state_36471){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_36471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e36556){if((e36556 instanceof Object)){
var ex__35082__auto__ = e36556;
var statearr_36557_36614 = state_36471;
(statearr_36557_36614[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36615 = state_36471;
state_36471 = G__36615;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35079__auto__ = function(state_36471){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35079__auto____1.call(this,state_36471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35079__auto____0;
cljs$core$async$mult_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35079__auto____1;
return cljs$core$async$mult_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___36559,cs,m,dchan,dctr,done))
})();
var state__35194__auto__ = (function (){var statearr_36558 = f__35193__auto__.call(null);
(statearr_36558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___36559);

return statearr_36558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___36559,cs,m,dchan,dctr,done))
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
var args36616 = [];
var len__33469__auto___36619 = arguments.length;
var i__33470__auto___36620 = (0);
while(true){
if((i__33470__auto___36620 < len__33469__auto___36619)){
args36616.push((arguments[i__33470__auto___36620]));

var G__36621 = (i__33470__auto___36620 + (1));
i__33470__auto___36620 = G__36621;
continue;
} else {
}
break;
}

var G__36618 = args36616.length;
switch (G__36618) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36616.length)].join('')));

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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,ch);
} else {
var m__33000__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,ch);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,ch);
} else {
var m__33000__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,ch);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m);
} else {
var m__33000__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,state_map);
} else {
var m__33000__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,state_map);
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
var x__32999__auto__ = (((m == null))?null:m);
var m__33000__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,m,mode);
} else {
var m__33000__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__33476__auto__ = [];
var len__33469__auto___36633 = arguments.length;
var i__33470__auto___36634 = (0);
while(true){
if((i__33470__auto___36634 < len__33469__auto___36633)){
args__33476__auto__.push((arguments[i__33470__auto___36634]));

var G__36635 = (i__33470__auto___36634 + (1));
i__33470__auto___36634 = G__36635;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((3) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__33477__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36627){
var map__36628 = p__36627;
var map__36628__$1 = ((((!((map__36628 == null)))?((((map__36628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36628):map__36628);
var opts = map__36628__$1;
var statearr_36630_36636 = state;
(statearr_36630_36636[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__36628,map__36628__$1,opts){
return (function (val){
var statearr_36631_36637 = state;
(statearr_36631_36637[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36628,map__36628__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_36632_36638 = state;
(statearr_36632_36638[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36623){
var G__36624 = cljs.core.first.call(null,seq36623);
var seq36623__$1 = cljs.core.next.call(null,seq36623);
var G__36625 = cljs.core.first.call(null,seq36623__$1);
var seq36623__$2 = cljs.core.next.call(null,seq36623__$1);
var G__36626 = cljs.core.first.call(null,seq36623__$2);
var seq36623__$3 = cljs.core.next.call(null,seq36623__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36624,G__36625,G__36626,seq36623__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36804 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36805){
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
this.meta36805 = meta36805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36806,meta36805__$1){
var self__ = this;
var _36806__$1 = this;
return (new cljs.core.async.t_cljs$core$async36804(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36805__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36806){
var self__ = this;
var _36806__$1 = this;
return self__.meta36805;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36804.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36805","meta36805",-1924176140,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36804";

cljs.core.async.t_cljs$core$async36804.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async36804");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36804 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36804(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36805){
return (new cljs.core.async.t_cljs$core$async36804(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36805));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36804(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35192__auto___36969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36906){
var state_val_36907 = (state_36906[(1)]);
if((state_val_36907 === (7))){
var inst_36822 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36908_36970 = state_36906__$1;
(statearr_36908_36970[(2)] = inst_36822);

(statearr_36908_36970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (20))){
var inst_36834 = (state_36906[(7)]);
var state_36906__$1 = state_36906;
var statearr_36909_36971 = state_36906__$1;
(statearr_36909_36971[(2)] = inst_36834);

(statearr_36909_36971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (27))){
var state_36906__$1 = state_36906;
var statearr_36910_36972 = state_36906__$1;
(statearr_36910_36972[(2)] = null);

(statearr_36910_36972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (1))){
var inst_36810 = (state_36906[(8)]);
var inst_36810__$1 = calc_state.call(null);
var inst_36812 = (inst_36810__$1 == null);
var inst_36813 = cljs.core.not.call(null,inst_36812);
var state_36906__$1 = (function (){var statearr_36911 = state_36906;
(statearr_36911[(8)] = inst_36810__$1);

return statearr_36911;
})();
if(inst_36813){
var statearr_36912_36973 = state_36906__$1;
(statearr_36912_36973[(1)] = (2));

} else {
var statearr_36913_36974 = state_36906__$1;
(statearr_36913_36974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (24))){
var inst_36866 = (state_36906[(9)]);
var inst_36880 = (state_36906[(10)]);
var inst_36857 = (state_36906[(11)]);
var inst_36880__$1 = inst_36857.call(null,inst_36866);
var state_36906__$1 = (function (){var statearr_36914 = state_36906;
(statearr_36914[(10)] = inst_36880__$1);

return statearr_36914;
})();
if(cljs.core.truth_(inst_36880__$1)){
var statearr_36915_36975 = state_36906__$1;
(statearr_36915_36975[(1)] = (29));

} else {
var statearr_36916_36976 = state_36906__$1;
(statearr_36916_36976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (4))){
var inst_36825 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36825)){
var statearr_36917_36977 = state_36906__$1;
(statearr_36917_36977[(1)] = (8));

} else {
var statearr_36918_36978 = state_36906__$1;
(statearr_36918_36978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (15))){
var inst_36851 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36851)){
var statearr_36919_36979 = state_36906__$1;
(statearr_36919_36979[(1)] = (19));

} else {
var statearr_36920_36980 = state_36906__$1;
(statearr_36920_36980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (21))){
var inst_36856 = (state_36906[(12)]);
var inst_36856__$1 = (state_36906[(2)]);
var inst_36857 = cljs.core.get.call(null,inst_36856__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36858 = cljs.core.get.call(null,inst_36856__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36859 = cljs.core.get.call(null,inst_36856__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36906__$1 = (function (){var statearr_36921 = state_36906;
(statearr_36921[(12)] = inst_36856__$1);

(statearr_36921[(13)] = inst_36858);

(statearr_36921[(11)] = inst_36857);

return statearr_36921;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36906__$1,(22),inst_36859);
} else {
if((state_val_36907 === (31))){
var inst_36888 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36888)){
var statearr_36922_36981 = state_36906__$1;
(statearr_36922_36981[(1)] = (32));

} else {
var statearr_36923_36982 = state_36906__$1;
(statearr_36923_36982[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (32))){
var inst_36865 = (state_36906[(14)]);
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36906__$1,(35),out,inst_36865);
} else {
if((state_val_36907 === (33))){
var inst_36856 = (state_36906[(12)]);
var inst_36834 = inst_36856;
var state_36906__$1 = (function (){var statearr_36924 = state_36906;
(statearr_36924[(7)] = inst_36834);

return statearr_36924;
})();
var statearr_36925_36983 = state_36906__$1;
(statearr_36925_36983[(2)] = null);

(statearr_36925_36983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (13))){
var inst_36834 = (state_36906[(7)]);
var inst_36841 = inst_36834.cljs$lang$protocol_mask$partition0$;
var inst_36842 = (inst_36841 & (64));
var inst_36843 = inst_36834.cljs$core$ISeq$;
var inst_36844 = (inst_36842) || (inst_36843);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36844)){
var statearr_36926_36984 = state_36906__$1;
(statearr_36926_36984[(1)] = (16));

} else {
var statearr_36927_36985 = state_36906__$1;
(statearr_36927_36985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (22))){
var inst_36866 = (state_36906[(9)]);
var inst_36865 = (state_36906[(14)]);
var inst_36864 = (state_36906[(2)]);
var inst_36865__$1 = cljs.core.nth.call(null,inst_36864,(0),null);
var inst_36866__$1 = cljs.core.nth.call(null,inst_36864,(1),null);
var inst_36867 = (inst_36865__$1 == null);
var inst_36868 = cljs.core._EQ_.call(null,inst_36866__$1,change);
var inst_36869 = (inst_36867) || (inst_36868);
var state_36906__$1 = (function (){var statearr_36928 = state_36906;
(statearr_36928[(9)] = inst_36866__$1);

(statearr_36928[(14)] = inst_36865__$1);

return statearr_36928;
})();
if(cljs.core.truth_(inst_36869)){
var statearr_36929_36986 = state_36906__$1;
(statearr_36929_36986[(1)] = (23));

} else {
var statearr_36930_36987 = state_36906__$1;
(statearr_36930_36987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (36))){
var inst_36856 = (state_36906[(12)]);
var inst_36834 = inst_36856;
var state_36906__$1 = (function (){var statearr_36931 = state_36906;
(statearr_36931[(7)] = inst_36834);

return statearr_36931;
})();
var statearr_36932_36988 = state_36906__$1;
(statearr_36932_36988[(2)] = null);

(statearr_36932_36988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (29))){
var inst_36880 = (state_36906[(10)]);
var state_36906__$1 = state_36906;
var statearr_36933_36989 = state_36906__$1;
(statearr_36933_36989[(2)] = inst_36880);

(statearr_36933_36989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (6))){
var state_36906__$1 = state_36906;
var statearr_36934_36990 = state_36906__$1;
(statearr_36934_36990[(2)] = false);

(statearr_36934_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (28))){
var inst_36876 = (state_36906[(2)]);
var inst_36877 = calc_state.call(null);
var inst_36834 = inst_36877;
var state_36906__$1 = (function (){var statearr_36935 = state_36906;
(statearr_36935[(15)] = inst_36876);

(statearr_36935[(7)] = inst_36834);

return statearr_36935;
})();
var statearr_36936_36991 = state_36906__$1;
(statearr_36936_36991[(2)] = null);

(statearr_36936_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (25))){
var inst_36902 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36937_36992 = state_36906__$1;
(statearr_36937_36992[(2)] = inst_36902);

(statearr_36937_36992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (34))){
var inst_36900 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36938_36993 = state_36906__$1;
(statearr_36938_36993[(2)] = inst_36900);

(statearr_36938_36993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (17))){
var state_36906__$1 = state_36906;
var statearr_36939_36994 = state_36906__$1;
(statearr_36939_36994[(2)] = false);

(statearr_36939_36994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (3))){
var state_36906__$1 = state_36906;
var statearr_36940_36995 = state_36906__$1;
(statearr_36940_36995[(2)] = false);

(statearr_36940_36995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (12))){
var inst_36904 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36906__$1,inst_36904);
} else {
if((state_val_36907 === (2))){
var inst_36810 = (state_36906[(8)]);
var inst_36815 = inst_36810.cljs$lang$protocol_mask$partition0$;
var inst_36816 = (inst_36815 & (64));
var inst_36817 = inst_36810.cljs$core$ISeq$;
var inst_36818 = (inst_36816) || (inst_36817);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36818)){
var statearr_36941_36996 = state_36906__$1;
(statearr_36941_36996[(1)] = (5));

} else {
var statearr_36942_36997 = state_36906__$1;
(statearr_36942_36997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (23))){
var inst_36865 = (state_36906[(14)]);
var inst_36871 = (inst_36865 == null);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36871)){
var statearr_36943_36998 = state_36906__$1;
(statearr_36943_36998[(1)] = (26));

} else {
var statearr_36944_36999 = state_36906__$1;
(statearr_36944_36999[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (35))){
var inst_36891 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
if(cljs.core.truth_(inst_36891)){
var statearr_36945_37000 = state_36906__$1;
(statearr_36945_37000[(1)] = (36));

} else {
var statearr_36946_37001 = state_36906__$1;
(statearr_36946_37001[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (19))){
var inst_36834 = (state_36906[(7)]);
var inst_36853 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36834);
var state_36906__$1 = state_36906;
var statearr_36947_37002 = state_36906__$1;
(statearr_36947_37002[(2)] = inst_36853);

(statearr_36947_37002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (11))){
var inst_36834 = (state_36906[(7)]);
var inst_36838 = (inst_36834 == null);
var inst_36839 = cljs.core.not.call(null,inst_36838);
var state_36906__$1 = state_36906;
if(inst_36839){
var statearr_36948_37003 = state_36906__$1;
(statearr_36948_37003[(1)] = (13));

} else {
var statearr_36949_37004 = state_36906__$1;
(statearr_36949_37004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (9))){
var inst_36810 = (state_36906[(8)]);
var state_36906__$1 = state_36906;
var statearr_36950_37005 = state_36906__$1;
(statearr_36950_37005[(2)] = inst_36810);

(statearr_36950_37005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (5))){
var state_36906__$1 = state_36906;
var statearr_36951_37006 = state_36906__$1;
(statearr_36951_37006[(2)] = true);

(statearr_36951_37006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (14))){
var state_36906__$1 = state_36906;
var statearr_36952_37007 = state_36906__$1;
(statearr_36952_37007[(2)] = false);

(statearr_36952_37007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (26))){
var inst_36866 = (state_36906[(9)]);
var inst_36873 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36866);
var state_36906__$1 = state_36906;
var statearr_36953_37008 = state_36906__$1;
(statearr_36953_37008[(2)] = inst_36873);

(statearr_36953_37008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (16))){
var state_36906__$1 = state_36906;
var statearr_36954_37009 = state_36906__$1;
(statearr_36954_37009[(2)] = true);

(statearr_36954_37009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (38))){
var inst_36896 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36955_37010 = state_36906__$1;
(statearr_36955_37010[(2)] = inst_36896);

(statearr_36955_37010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (30))){
var inst_36866 = (state_36906[(9)]);
var inst_36858 = (state_36906[(13)]);
var inst_36857 = (state_36906[(11)]);
var inst_36883 = cljs.core.empty_QMARK_.call(null,inst_36857);
var inst_36884 = inst_36858.call(null,inst_36866);
var inst_36885 = cljs.core.not.call(null,inst_36884);
var inst_36886 = (inst_36883) && (inst_36885);
var state_36906__$1 = state_36906;
var statearr_36956_37011 = state_36906__$1;
(statearr_36956_37011[(2)] = inst_36886);

(statearr_36956_37011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (10))){
var inst_36810 = (state_36906[(8)]);
var inst_36830 = (state_36906[(2)]);
var inst_36831 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36832 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36833 = cljs.core.get.call(null,inst_36830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36834 = inst_36810;
var state_36906__$1 = (function (){var statearr_36957 = state_36906;
(statearr_36957[(16)] = inst_36832);

(statearr_36957[(17)] = inst_36833);

(statearr_36957[(18)] = inst_36831);

(statearr_36957[(7)] = inst_36834);

return statearr_36957;
})();
var statearr_36958_37012 = state_36906__$1;
(statearr_36958_37012[(2)] = null);

(statearr_36958_37012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (18))){
var inst_36848 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36959_37013 = state_36906__$1;
(statearr_36959_37013[(2)] = inst_36848);

(statearr_36959_37013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (37))){
var state_36906__$1 = state_36906;
var statearr_36960_37014 = state_36906__$1;
(statearr_36960_37014[(2)] = null);

(statearr_36960_37014[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (8))){
var inst_36810 = (state_36906[(8)]);
var inst_36827 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36810);
var state_36906__$1 = state_36906;
var statearr_36961_37015 = state_36906__$1;
(statearr_36961_37015[(2)] = inst_36827);

(statearr_36961_37015[(1)] = (10));


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
});})(c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35078__auto__,c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35079__auto__ = null;
var cljs$core$async$mix_$_state_machine__35079__auto____0 = (function (){
var statearr_36965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36965[(0)] = cljs$core$async$mix_$_state_machine__35079__auto__);

(statearr_36965[(1)] = (1));

return statearr_36965;
});
var cljs$core$async$mix_$_state_machine__35079__auto____1 = (function (state_36906){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_36906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e36966){if((e36966 instanceof Object)){
var ex__35082__auto__ = e36966;
var statearr_36967_37016 = state_36906;
(statearr_36967_37016[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37017 = state_36906;
state_36906 = G__37017;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35079__auto__ = function(state_36906){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35079__auto____1.call(this,state_36906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35079__auto____0;
cljs$core$async$mix_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35079__auto____1;
return cljs$core$async$mix_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35194__auto__ = (function (){var statearr_36968 = f__35193__auto__.call(null);
(statearr_36968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___36969);

return statearr_36968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___36969,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__32999__auto__ = (((p == null))?null:p);
var m__33000__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__33000__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__32999__auto__ = (((p == null))?null:p);
var m__33000__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,p,v,ch);
} else {
var m__33000__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args37018 = [];
var len__33469__auto___37021 = arguments.length;
var i__33470__auto___37022 = (0);
while(true){
if((i__33470__auto___37022 < len__33469__auto___37021)){
args37018.push((arguments[i__33470__auto___37022]));

var G__37023 = (i__33470__auto___37022 + (1));
i__33470__auto___37022 = G__37023;
continue;
} else {
}
break;
}

var G__37020 = args37018.length;
switch (G__37020) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37018.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__32999__auto__ = (((p == null))?null:p);
var m__33000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,p);
} else {
var m__33000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,p);
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
var x__32999__auto__ = (((p == null))?null:p);
var m__33000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__32999__auto__)]);
if(!((m__33000__auto__ == null))){
return m__33000__auto__.call(null,p,v);
} else {
var m__33000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__33000__auto____$1 == null))){
return m__33000__auto____$1.call(null,p,v);
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
var args37026 = [];
var len__33469__auto___37151 = arguments.length;
var i__33470__auto___37152 = (0);
while(true){
if((i__33470__auto___37152 < len__33469__auto___37151)){
args37026.push((arguments[i__33470__auto___37152]));

var G__37153 = (i__33470__auto___37152 + (1));
i__33470__auto___37152 = G__37153;
continue;
} else {
}
break;
}

var G__37028 = args37026.length;
switch (G__37028) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37026.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__32286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__32286__auto__,mults){
return (function (p1__37025_SHARP_){
if(cljs.core.truth_(p1__37025_SHARP_.call(null,topic))){
return p1__37025_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37025_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__32286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37029 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37030){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37030 = meta37030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37031,meta37030__$1){
var self__ = this;
var _37031__$1 = this;
return (new cljs.core.async.t_cljs$core$async37029(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37030__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37031){
var self__ = this;
var _37031__$1 = this;
return self__.meta37030;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37030","meta37030",-1814703105,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37029";

cljs.core.async.t_cljs$core$async37029.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async37029");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37029 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37030){
return (new cljs.core.async.t_cljs$core$async37029(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37030));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37029(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35192__auto___37155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37155,mults,ensure_mult,p){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37155,mults,ensure_mult,p){
return (function (state_37103){
var state_val_37104 = (state_37103[(1)]);
if((state_val_37104 === (7))){
var inst_37099 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37105_37156 = state_37103__$1;
(statearr_37105_37156[(2)] = inst_37099);

(statearr_37105_37156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (20))){
var state_37103__$1 = state_37103;
var statearr_37106_37157 = state_37103__$1;
(statearr_37106_37157[(2)] = null);

(statearr_37106_37157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (1))){
var state_37103__$1 = state_37103;
var statearr_37107_37158 = state_37103__$1;
(statearr_37107_37158[(2)] = null);

(statearr_37107_37158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (24))){
var inst_37082 = (state_37103[(7)]);
var inst_37091 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37082);
var state_37103__$1 = state_37103;
var statearr_37108_37159 = state_37103__$1;
(statearr_37108_37159[(2)] = inst_37091);

(statearr_37108_37159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (4))){
var inst_37034 = (state_37103[(8)]);
var inst_37034__$1 = (state_37103[(2)]);
var inst_37035 = (inst_37034__$1 == null);
var state_37103__$1 = (function (){var statearr_37109 = state_37103;
(statearr_37109[(8)] = inst_37034__$1);

return statearr_37109;
})();
if(cljs.core.truth_(inst_37035)){
var statearr_37110_37160 = state_37103__$1;
(statearr_37110_37160[(1)] = (5));

} else {
var statearr_37111_37161 = state_37103__$1;
(statearr_37111_37161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (15))){
var inst_37076 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37112_37162 = state_37103__$1;
(statearr_37112_37162[(2)] = inst_37076);

(statearr_37112_37162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (21))){
var inst_37096 = (state_37103[(2)]);
var state_37103__$1 = (function (){var statearr_37113 = state_37103;
(statearr_37113[(9)] = inst_37096);

return statearr_37113;
})();
var statearr_37114_37163 = state_37103__$1;
(statearr_37114_37163[(2)] = null);

(statearr_37114_37163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (13))){
var inst_37058 = (state_37103[(10)]);
var inst_37060 = cljs.core.chunked_seq_QMARK_.call(null,inst_37058);
var state_37103__$1 = state_37103;
if(inst_37060){
var statearr_37115_37164 = state_37103__$1;
(statearr_37115_37164[(1)] = (16));

} else {
var statearr_37116_37165 = state_37103__$1;
(statearr_37116_37165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (22))){
var inst_37088 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
if(cljs.core.truth_(inst_37088)){
var statearr_37117_37166 = state_37103__$1;
(statearr_37117_37166[(1)] = (23));

} else {
var statearr_37118_37167 = state_37103__$1;
(statearr_37118_37167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (6))){
var inst_37034 = (state_37103[(8)]);
var inst_37082 = (state_37103[(7)]);
var inst_37084 = (state_37103[(11)]);
var inst_37082__$1 = topic_fn.call(null,inst_37034);
var inst_37083 = cljs.core.deref.call(null,mults);
var inst_37084__$1 = cljs.core.get.call(null,inst_37083,inst_37082__$1);
var state_37103__$1 = (function (){var statearr_37119 = state_37103;
(statearr_37119[(7)] = inst_37082__$1);

(statearr_37119[(11)] = inst_37084__$1);

return statearr_37119;
})();
if(cljs.core.truth_(inst_37084__$1)){
var statearr_37120_37168 = state_37103__$1;
(statearr_37120_37168[(1)] = (19));

} else {
var statearr_37121_37169 = state_37103__$1;
(statearr_37121_37169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (25))){
var inst_37093 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37122_37170 = state_37103__$1;
(statearr_37122_37170[(2)] = inst_37093);

(statearr_37122_37170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (17))){
var inst_37058 = (state_37103[(10)]);
var inst_37067 = cljs.core.first.call(null,inst_37058);
var inst_37068 = cljs.core.async.muxch_STAR_.call(null,inst_37067);
var inst_37069 = cljs.core.async.close_BANG_.call(null,inst_37068);
var inst_37070 = cljs.core.next.call(null,inst_37058);
var inst_37044 = inst_37070;
var inst_37045 = null;
var inst_37046 = (0);
var inst_37047 = (0);
var state_37103__$1 = (function (){var statearr_37123 = state_37103;
(statearr_37123[(12)] = inst_37069);

(statearr_37123[(13)] = inst_37044);

(statearr_37123[(14)] = inst_37046);

(statearr_37123[(15)] = inst_37047);

(statearr_37123[(16)] = inst_37045);

return statearr_37123;
})();
var statearr_37124_37171 = state_37103__$1;
(statearr_37124_37171[(2)] = null);

(statearr_37124_37171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (3))){
var inst_37101 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37103__$1,inst_37101);
} else {
if((state_val_37104 === (12))){
var inst_37078 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37125_37172 = state_37103__$1;
(statearr_37125_37172[(2)] = inst_37078);

(statearr_37125_37172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (2))){
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37103__$1,(4),ch);
} else {
if((state_val_37104 === (23))){
var state_37103__$1 = state_37103;
var statearr_37126_37173 = state_37103__$1;
(statearr_37126_37173[(2)] = null);

(statearr_37126_37173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (19))){
var inst_37034 = (state_37103[(8)]);
var inst_37084 = (state_37103[(11)]);
var inst_37086 = cljs.core.async.muxch_STAR_.call(null,inst_37084);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37103__$1,(22),inst_37086,inst_37034);
} else {
if((state_val_37104 === (11))){
var inst_37044 = (state_37103[(13)]);
var inst_37058 = (state_37103[(10)]);
var inst_37058__$1 = cljs.core.seq.call(null,inst_37044);
var state_37103__$1 = (function (){var statearr_37127 = state_37103;
(statearr_37127[(10)] = inst_37058__$1);

return statearr_37127;
})();
if(inst_37058__$1){
var statearr_37128_37174 = state_37103__$1;
(statearr_37128_37174[(1)] = (13));

} else {
var statearr_37129_37175 = state_37103__$1;
(statearr_37129_37175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (9))){
var inst_37080 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37130_37176 = state_37103__$1;
(statearr_37130_37176[(2)] = inst_37080);

(statearr_37130_37176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (5))){
var inst_37041 = cljs.core.deref.call(null,mults);
var inst_37042 = cljs.core.vals.call(null,inst_37041);
var inst_37043 = cljs.core.seq.call(null,inst_37042);
var inst_37044 = inst_37043;
var inst_37045 = null;
var inst_37046 = (0);
var inst_37047 = (0);
var state_37103__$1 = (function (){var statearr_37131 = state_37103;
(statearr_37131[(13)] = inst_37044);

(statearr_37131[(14)] = inst_37046);

(statearr_37131[(15)] = inst_37047);

(statearr_37131[(16)] = inst_37045);

return statearr_37131;
})();
var statearr_37132_37177 = state_37103__$1;
(statearr_37132_37177[(2)] = null);

(statearr_37132_37177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (14))){
var state_37103__$1 = state_37103;
var statearr_37136_37178 = state_37103__$1;
(statearr_37136_37178[(2)] = null);

(statearr_37136_37178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (16))){
var inst_37058 = (state_37103[(10)]);
var inst_37062 = cljs.core.chunk_first.call(null,inst_37058);
var inst_37063 = cljs.core.chunk_rest.call(null,inst_37058);
var inst_37064 = cljs.core.count.call(null,inst_37062);
var inst_37044 = inst_37063;
var inst_37045 = inst_37062;
var inst_37046 = inst_37064;
var inst_37047 = (0);
var state_37103__$1 = (function (){var statearr_37137 = state_37103;
(statearr_37137[(13)] = inst_37044);

(statearr_37137[(14)] = inst_37046);

(statearr_37137[(15)] = inst_37047);

(statearr_37137[(16)] = inst_37045);

return statearr_37137;
})();
var statearr_37138_37179 = state_37103__$1;
(statearr_37138_37179[(2)] = null);

(statearr_37138_37179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (10))){
var inst_37044 = (state_37103[(13)]);
var inst_37046 = (state_37103[(14)]);
var inst_37047 = (state_37103[(15)]);
var inst_37045 = (state_37103[(16)]);
var inst_37052 = cljs.core._nth.call(null,inst_37045,inst_37047);
var inst_37053 = cljs.core.async.muxch_STAR_.call(null,inst_37052);
var inst_37054 = cljs.core.async.close_BANG_.call(null,inst_37053);
var inst_37055 = (inst_37047 + (1));
var tmp37133 = inst_37044;
var tmp37134 = inst_37046;
var tmp37135 = inst_37045;
var inst_37044__$1 = tmp37133;
var inst_37045__$1 = tmp37135;
var inst_37046__$1 = tmp37134;
var inst_37047__$1 = inst_37055;
var state_37103__$1 = (function (){var statearr_37139 = state_37103;
(statearr_37139[(13)] = inst_37044__$1);

(statearr_37139[(14)] = inst_37046__$1);

(statearr_37139[(15)] = inst_37047__$1);

(statearr_37139[(16)] = inst_37045__$1);

(statearr_37139[(17)] = inst_37054);

return statearr_37139;
})();
var statearr_37140_37180 = state_37103__$1;
(statearr_37140_37180[(2)] = null);

(statearr_37140_37180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (18))){
var inst_37073 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37141_37181 = state_37103__$1;
(statearr_37141_37181[(2)] = inst_37073);

(statearr_37141_37181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (8))){
var inst_37046 = (state_37103[(14)]);
var inst_37047 = (state_37103[(15)]);
var inst_37049 = (inst_37047 < inst_37046);
var inst_37050 = inst_37049;
var state_37103__$1 = state_37103;
if(cljs.core.truth_(inst_37050)){
var statearr_37142_37182 = state_37103__$1;
(statearr_37142_37182[(1)] = (10));

} else {
var statearr_37143_37183 = state_37103__$1;
(statearr_37143_37183[(1)] = (11));

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
});})(c__35192__auto___37155,mults,ensure_mult,p))
;
return ((function (switch__35078__auto__,c__35192__auto___37155,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37147[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37147[(1)] = (1));

return statearr_37147;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37103){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37148){if((e37148 instanceof Object)){
var ex__35082__auto__ = e37148;
var statearr_37149_37184 = state_37103;
(statearr_37149_37184[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37185 = state_37103;
state_37103 = G__37185;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37155,mults,ensure_mult,p))
})();
var state__35194__auto__ = (function (){var statearr_37150 = f__35193__auto__.call(null);
(statearr_37150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37155);

return statearr_37150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37155,mults,ensure_mult,p))
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
var args37186 = [];
var len__33469__auto___37189 = arguments.length;
var i__33470__auto___37190 = (0);
while(true){
if((i__33470__auto___37190 < len__33469__auto___37189)){
args37186.push((arguments[i__33470__auto___37190]));

var G__37191 = (i__33470__auto___37190 + (1));
i__33470__auto___37190 = G__37191;
continue;
} else {
}
break;
}

var G__37188 = args37186.length;
switch (G__37188) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37186.length)].join('')));

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
var args37193 = [];
var len__33469__auto___37196 = arguments.length;
var i__33470__auto___37197 = (0);
while(true){
if((i__33470__auto___37197 < len__33469__auto___37196)){
args37193.push((arguments[i__33470__auto___37197]));

var G__37198 = (i__33470__auto___37197 + (1));
i__33470__auto___37197 = G__37198;
continue;
} else {
}
break;
}

var G__37195 = args37193.length;
switch (G__37195) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37193.length)].join('')));

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
var args37200 = [];
var len__33469__auto___37271 = arguments.length;
var i__33470__auto___37272 = (0);
while(true){
if((i__33470__auto___37272 < len__33469__auto___37271)){
args37200.push((arguments[i__33470__auto___37272]));

var G__37273 = (i__33470__auto___37272 + (1));
i__33470__auto___37272 = G__37273;
continue;
} else {
}
break;
}

var G__37202 = args37200.length;
switch (G__37202) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37200.length)].join('')));

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
var c__35192__auto___37275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37241){
var state_val_37242 = (state_37241[(1)]);
if((state_val_37242 === (7))){
var state_37241__$1 = state_37241;
var statearr_37243_37276 = state_37241__$1;
(statearr_37243_37276[(2)] = null);

(statearr_37243_37276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (1))){
var state_37241__$1 = state_37241;
var statearr_37244_37277 = state_37241__$1;
(statearr_37244_37277[(2)] = null);

(statearr_37244_37277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (4))){
var inst_37205 = (state_37241[(7)]);
var inst_37207 = (inst_37205 < cnt);
var state_37241__$1 = state_37241;
if(cljs.core.truth_(inst_37207)){
var statearr_37245_37278 = state_37241__$1;
(statearr_37245_37278[(1)] = (6));

} else {
var statearr_37246_37279 = state_37241__$1;
(statearr_37246_37279[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (15))){
var inst_37237 = (state_37241[(2)]);
var state_37241__$1 = state_37241;
var statearr_37247_37280 = state_37241__$1;
(statearr_37247_37280[(2)] = inst_37237);

(statearr_37247_37280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (13))){
var inst_37230 = cljs.core.async.close_BANG_.call(null,out);
var state_37241__$1 = state_37241;
var statearr_37248_37281 = state_37241__$1;
(statearr_37248_37281[(2)] = inst_37230);

(statearr_37248_37281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (6))){
var state_37241__$1 = state_37241;
var statearr_37249_37282 = state_37241__$1;
(statearr_37249_37282[(2)] = null);

(statearr_37249_37282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (3))){
var inst_37239 = (state_37241[(2)]);
var state_37241__$1 = state_37241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37241__$1,inst_37239);
} else {
if((state_val_37242 === (12))){
var inst_37227 = (state_37241[(8)]);
var inst_37227__$1 = (state_37241[(2)]);
var inst_37228 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37227__$1);
var state_37241__$1 = (function (){var statearr_37250 = state_37241;
(statearr_37250[(8)] = inst_37227__$1);

return statearr_37250;
})();
if(cljs.core.truth_(inst_37228)){
var statearr_37251_37283 = state_37241__$1;
(statearr_37251_37283[(1)] = (13));

} else {
var statearr_37252_37284 = state_37241__$1;
(statearr_37252_37284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (2))){
var inst_37204 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37205 = (0);
var state_37241__$1 = (function (){var statearr_37253 = state_37241;
(statearr_37253[(7)] = inst_37205);

(statearr_37253[(9)] = inst_37204);

return statearr_37253;
})();
var statearr_37254_37285 = state_37241__$1;
(statearr_37254_37285[(2)] = null);

(statearr_37254_37285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (11))){
var inst_37205 = (state_37241[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37241,(10),Object,null,(9));
var inst_37214 = chs__$1.call(null,inst_37205);
var inst_37215 = done.call(null,inst_37205);
var inst_37216 = cljs.core.async.take_BANG_.call(null,inst_37214,inst_37215);
var state_37241__$1 = state_37241;
var statearr_37255_37286 = state_37241__$1;
(statearr_37255_37286[(2)] = inst_37216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (9))){
var inst_37205 = (state_37241[(7)]);
var inst_37218 = (state_37241[(2)]);
var inst_37219 = (inst_37205 + (1));
var inst_37205__$1 = inst_37219;
var state_37241__$1 = (function (){var statearr_37256 = state_37241;
(statearr_37256[(10)] = inst_37218);

(statearr_37256[(7)] = inst_37205__$1);

return statearr_37256;
})();
var statearr_37257_37287 = state_37241__$1;
(statearr_37257_37287[(2)] = null);

(statearr_37257_37287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (5))){
var inst_37225 = (state_37241[(2)]);
var state_37241__$1 = (function (){var statearr_37258 = state_37241;
(statearr_37258[(11)] = inst_37225);

return statearr_37258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37241__$1,(12),dchan);
} else {
if((state_val_37242 === (14))){
var inst_37227 = (state_37241[(8)]);
var inst_37232 = cljs.core.apply.call(null,f,inst_37227);
var state_37241__$1 = state_37241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37241__$1,(16),out,inst_37232);
} else {
if((state_val_37242 === (16))){
var inst_37234 = (state_37241[(2)]);
var state_37241__$1 = (function (){var statearr_37259 = state_37241;
(statearr_37259[(12)] = inst_37234);

return statearr_37259;
})();
var statearr_37260_37288 = state_37241__$1;
(statearr_37260_37288[(2)] = null);

(statearr_37260_37288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (10))){
var inst_37209 = (state_37241[(2)]);
var inst_37210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37241__$1 = (function (){var statearr_37261 = state_37241;
(statearr_37261[(13)] = inst_37209);

return statearr_37261;
})();
var statearr_37262_37289 = state_37241__$1;
(statearr_37262_37289[(2)] = inst_37210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37241__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37242 === (8))){
var inst_37223 = (state_37241[(2)]);
var state_37241__$1 = state_37241;
var statearr_37263_37290 = state_37241__$1;
(statearr_37263_37290[(2)] = inst_37223);

(statearr_37263_37290[(1)] = (5));


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
});})(c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35078__auto__,c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37267[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37267[(1)] = (1));

return statearr_37267;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37241){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37268){if((e37268 instanceof Object)){
var ex__35082__auto__ = e37268;
var statearr_37269_37291 = state_37241;
(statearr_37269_37291[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37292 = state_37241;
state_37241 = G__37292;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35194__auto__ = (function (){var statearr_37270 = f__35193__auto__.call(null);
(statearr_37270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37275);

return statearr_37270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37275,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args37294 = [];
var len__33469__auto___37352 = arguments.length;
var i__33470__auto___37353 = (0);
while(true){
if((i__33470__auto___37353 < len__33469__auto___37352)){
args37294.push((arguments[i__33470__auto___37353]));

var G__37354 = (i__33470__auto___37353 + (1));
i__33470__auto___37353 = G__37354;
continue;
} else {
}
break;
}

var G__37296 = args37294.length;
switch (G__37296) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37294.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___37356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37356,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37356,out){
return (function (state_37328){
var state_val_37329 = (state_37328[(1)]);
if((state_val_37329 === (7))){
var inst_37307 = (state_37328[(7)]);
var inst_37308 = (state_37328[(8)]);
var inst_37307__$1 = (state_37328[(2)]);
var inst_37308__$1 = cljs.core.nth.call(null,inst_37307__$1,(0),null);
var inst_37309 = cljs.core.nth.call(null,inst_37307__$1,(1),null);
var inst_37310 = (inst_37308__$1 == null);
var state_37328__$1 = (function (){var statearr_37330 = state_37328;
(statearr_37330[(9)] = inst_37309);

(statearr_37330[(7)] = inst_37307__$1);

(statearr_37330[(8)] = inst_37308__$1);

return statearr_37330;
})();
if(cljs.core.truth_(inst_37310)){
var statearr_37331_37357 = state_37328__$1;
(statearr_37331_37357[(1)] = (8));

} else {
var statearr_37332_37358 = state_37328__$1;
(statearr_37332_37358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (1))){
var inst_37297 = cljs.core.vec.call(null,chs);
var inst_37298 = inst_37297;
var state_37328__$1 = (function (){var statearr_37333 = state_37328;
(statearr_37333[(10)] = inst_37298);

return statearr_37333;
})();
var statearr_37334_37359 = state_37328__$1;
(statearr_37334_37359[(2)] = null);

(statearr_37334_37359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (4))){
var inst_37298 = (state_37328[(10)]);
var state_37328__$1 = state_37328;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37328__$1,(7),inst_37298);
} else {
if((state_val_37329 === (6))){
var inst_37324 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
var statearr_37335_37360 = state_37328__$1;
(statearr_37335_37360[(2)] = inst_37324);

(statearr_37335_37360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (3))){
var inst_37326 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37328__$1,inst_37326);
} else {
if((state_val_37329 === (2))){
var inst_37298 = (state_37328[(10)]);
var inst_37300 = cljs.core.count.call(null,inst_37298);
var inst_37301 = (inst_37300 > (0));
var state_37328__$1 = state_37328;
if(cljs.core.truth_(inst_37301)){
var statearr_37337_37361 = state_37328__$1;
(statearr_37337_37361[(1)] = (4));

} else {
var statearr_37338_37362 = state_37328__$1;
(statearr_37338_37362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (11))){
var inst_37298 = (state_37328[(10)]);
var inst_37317 = (state_37328[(2)]);
var tmp37336 = inst_37298;
var inst_37298__$1 = tmp37336;
var state_37328__$1 = (function (){var statearr_37339 = state_37328;
(statearr_37339[(10)] = inst_37298__$1);

(statearr_37339[(11)] = inst_37317);

return statearr_37339;
})();
var statearr_37340_37363 = state_37328__$1;
(statearr_37340_37363[(2)] = null);

(statearr_37340_37363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (9))){
var inst_37308 = (state_37328[(8)]);
var state_37328__$1 = state_37328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37328__$1,(11),out,inst_37308);
} else {
if((state_val_37329 === (5))){
var inst_37322 = cljs.core.async.close_BANG_.call(null,out);
var state_37328__$1 = state_37328;
var statearr_37341_37364 = state_37328__$1;
(statearr_37341_37364[(2)] = inst_37322);

(statearr_37341_37364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (10))){
var inst_37320 = (state_37328[(2)]);
var state_37328__$1 = state_37328;
var statearr_37342_37365 = state_37328__$1;
(statearr_37342_37365[(2)] = inst_37320);

(statearr_37342_37365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37329 === (8))){
var inst_37309 = (state_37328[(9)]);
var inst_37298 = (state_37328[(10)]);
var inst_37307 = (state_37328[(7)]);
var inst_37308 = (state_37328[(8)]);
var inst_37312 = (function (){var cs = inst_37298;
var vec__37303 = inst_37307;
var v = inst_37308;
var c = inst_37309;
return ((function (cs,vec__37303,v,c,inst_37309,inst_37298,inst_37307,inst_37308,state_val_37329,c__35192__auto___37356,out){
return (function (p1__37293_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37293_SHARP_);
});
;})(cs,vec__37303,v,c,inst_37309,inst_37298,inst_37307,inst_37308,state_val_37329,c__35192__auto___37356,out))
})();
var inst_37313 = cljs.core.filterv.call(null,inst_37312,inst_37298);
var inst_37298__$1 = inst_37313;
var state_37328__$1 = (function (){var statearr_37343 = state_37328;
(statearr_37343[(10)] = inst_37298__$1);

return statearr_37343;
})();
var statearr_37344_37366 = state_37328__$1;
(statearr_37344_37366[(2)] = null);

(statearr_37344_37366[(1)] = (2));


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
});})(c__35192__auto___37356,out))
;
return ((function (switch__35078__auto__,c__35192__auto___37356,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37348[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37348[(1)] = (1));

return statearr_37348;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37328){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37349){if((e37349 instanceof Object)){
var ex__35082__auto__ = e37349;
var statearr_37350_37367 = state_37328;
(statearr_37350_37367[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37368 = state_37328;
state_37328 = G__37368;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37356,out))
})();
var state__35194__auto__ = (function (){var statearr_37351 = f__35193__auto__.call(null);
(statearr_37351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37356);

return statearr_37351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37356,out))
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
var args37369 = [];
var len__33469__auto___37418 = arguments.length;
var i__33470__auto___37419 = (0);
while(true){
if((i__33470__auto___37419 < len__33469__auto___37418)){
args37369.push((arguments[i__33470__auto___37419]));

var G__37420 = (i__33470__auto___37419 + (1));
i__33470__auto___37419 = G__37420;
continue;
} else {
}
break;
}

var G__37371 = args37369.length;
switch (G__37371) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37369.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___37422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37422,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37422,out){
return (function (state_37395){
var state_val_37396 = (state_37395[(1)]);
if((state_val_37396 === (7))){
var inst_37377 = (state_37395[(7)]);
var inst_37377__$1 = (state_37395[(2)]);
var inst_37378 = (inst_37377__$1 == null);
var inst_37379 = cljs.core.not.call(null,inst_37378);
var state_37395__$1 = (function (){var statearr_37397 = state_37395;
(statearr_37397[(7)] = inst_37377__$1);

return statearr_37397;
})();
if(inst_37379){
var statearr_37398_37423 = state_37395__$1;
(statearr_37398_37423[(1)] = (8));

} else {
var statearr_37399_37424 = state_37395__$1;
(statearr_37399_37424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (1))){
var inst_37372 = (0);
var state_37395__$1 = (function (){var statearr_37400 = state_37395;
(statearr_37400[(8)] = inst_37372);

return statearr_37400;
})();
var statearr_37401_37425 = state_37395__$1;
(statearr_37401_37425[(2)] = null);

(statearr_37401_37425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (4))){
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37395__$1,(7),ch);
} else {
if((state_val_37396 === (6))){
var inst_37390 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37402_37426 = state_37395__$1;
(statearr_37402_37426[(2)] = inst_37390);

(statearr_37402_37426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (3))){
var inst_37392 = (state_37395[(2)]);
var inst_37393 = cljs.core.async.close_BANG_.call(null,out);
var state_37395__$1 = (function (){var statearr_37403 = state_37395;
(statearr_37403[(9)] = inst_37392);

return statearr_37403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37395__$1,inst_37393);
} else {
if((state_val_37396 === (2))){
var inst_37372 = (state_37395[(8)]);
var inst_37374 = (inst_37372 < n);
var state_37395__$1 = state_37395;
if(cljs.core.truth_(inst_37374)){
var statearr_37404_37427 = state_37395__$1;
(statearr_37404_37427[(1)] = (4));

} else {
var statearr_37405_37428 = state_37395__$1;
(statearr_37405_37428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (11))){
var inst_37372 = (state_37395[(8)]);
var inst_37382 = (state_37395[(2)]);
var inst_37383 = (inst_37372 + (1));
var inst_37372__$1 = inst_37383;
var state_37395__$1 = (function (){var statearr_37406 = state_37395;
(statearr_37406[(10)] = inst_37382);

(statearr_37406[(8)] = inst_37372__$1);

return statearr_37406;
})();
var statearr_37407_37429 = state_37395__$1;
(statearr_37407_37429[(2)] = null);

(statearr_37407_37429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (9))){
var state_37395__$1 = state_37395;
var statearr_37408_37430 = state_37395__$1;
(statearr_37408_37430[(2)] = null);

(statearr_37408_37430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (5))){
var state_37395__$1 = state_37395;
var statearr_37409_37431 = state_37395__$1;
(statearr_37409_37431[(2)] = null);

(statearr_37409_37431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (10))){
var inst_37387 = (state_37395[(2)]);
var state_37395__$1 = state_37395;
var statearr_37410_37432 = state_37395__$1;
(statearr_37410_37432[(2)] = inst_37387);

(statearr_37410_37432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37396 === (8))){
var inst_37377 = (state_37395[(7)]);
var state_37395__$1 = state_37395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37395__$1,(11),out,inst_37377);
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
});})(c__35192__auto___37422,out))
;
return ((function (switch__35078__auto__,c__35192__auto___37422,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37414[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37414[(1)] = (1));

return statearr_37414;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37395){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37415){if((e37415 instanceof Object)){
var ex__35082__auto__ = e37415;
var statearr_37416_37433 = state_37395;
(statearr_37416_37433[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37434 = state_37395;
state_37395 = G__37434;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37422,out))
})();
var state__35194__auto__ = (function (){var statearr_37417 = f__35193__auto__.call(null);
(statearr_37417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37422);

return statearr_37417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37422,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37442 = (function (map_LT_,f,ch,meta37443){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37443 = meta37443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37444,meta37443__$1){
var self__ = this;
var _37444__$1 = this;
return (new cljs.core.async.t_cljs$core$async37442(self__.map_LT_,self__.f,self__.ch,meta37443__$1));
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37444){
var self__ = this;
var _37444__$1 = this;
return self__.meta37443;
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37445 = (function (map_LT_,f,ch,meta37443,_,fn1,meta37446){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37443 = meta37443;
this._ = _;
this.fn1 = fn1;
this.meta37446 = meta37446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37447,meta37446__$1){
var self__ = this;
var _37447__$1 = this;
return (new cljs.core.async.t_cljs$core$async37445(self__.map_LT_,self__.f,self__.ch,self__.meta37443,self__._,self__.fn1,meta37446__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37447){
var self__ = this;
var _37447__$1 = this;
return self__.meta37446;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37435_SHARP_){
return f1.call(null,(((p1__37435_SHARP_ == null))?null:self__.f.call(null,p1__37435_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37443","meta37443",-807569637,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37442","cljs.core.async/t_cljs$core$async37442",-1902218853,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37446","meta37446",-932292706,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37445";

cljs.core.async.t_cljs$core$async37445.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async37445");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37445 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37445(map_LT___$1,f__$1,ch__$1,meta37443__$1,___$2,fn1__$1,meta37446){
return (new cljs.core.async.t_cljs$core$async37445(map_LT___$1,f__$1,ch__$1,meta37443__$1,___$2,fn1__$1,meta37446));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37445(self__.map_LT_,self__.f,self__.ch,self__.meta37443,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__32274__auto__ = ret;
if(cljs.core.truth_(and__32274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__32274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37443","meta37443",-807569637,null)], null);
});

cljs.core.async.t_cljs$core$async37442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37442";

cljs.core.async.t_cljs$core$async37442.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async37442");
});

cljs.core.async.__GT_t_cljs$core$async37442 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37442(map_LT___$1,f__$1,ch__$1,meta37443){
return (new cljs.core.async.t_cljs$core$async37442(map_LT___$1,f__$1,ch__$1,meta37443));
});

}

return (new cljs.core.async.t_cljs$core$async37442(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37451 = (function (map_GT_,f,ch,meta37452){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37452 = meta37452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37453,meta37452__$1){
var self__ = this;
var _37453__$1 = this;
return (new cljs.core.async.t_cljs$core$async37451(self__.map_GT_,self__.f,self__.ch,meta37452__$1));
});

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37453){
var self__ = this;
var _37453__$1 = this;
return self__.meta37452;
});

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37452","meta37452",-1589408390,null)], null);
});

cljs.core.async.t_cljs$core$async37451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37451";

cljs.core.async.t_cljs$core$async37451.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async37451");
});

cljs.core.async.__GT_t_cljs$core$async37451 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37451(map_GT___$1,f__$1,ch__$1,meta37452){
return (new cljs.core.async.t_cljs$core$async37451(map_GT___$1,f__$1,ch__$1,meta37452));
});

}

return (new cljs.core.async.t_cljs$core$async37451(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37457 = (function (filter_GT_,p,ch,meta37458){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37458 = meta37458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37459,meta37458__$1){
var self__ = this;
var _37459__$1 = this;
return (new cljs.core.async.t_cljs$core$async37457(self__.filter_GT_,self__.p,self__.ch,meta37458__$1));
});

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37459){
var self__ = this;
var _37459__$1 = this;
return self__.meta37458;
});

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37458","meta37458",-790287541,null)], null);
});

cljs.core.async.t_cljs$core$async37457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37457";

cljs.core.async.t_cljs$core$async37457.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.core.async/t_cljs$core$async37457");
});

cljs.core.async.__GT_t_cljs$core$async37457 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37457(filter_GT___$1,p__$1,ch__$1,meta37458){
return (new cljs.core.async.t_cljs$core$async37457(filter_GT___$1,p__$1,ch__$1,meta37458));
});

}

return (new cljs.core.async.t_cljs$core$async37457(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args37460 = [];
var len__33469__auto___37504 = arguments.length;
var i__33470__auto___37505 = (0);
while(true){
if((i__33470__auto___37505 < len__33469__auto___37504)){
args37460.push((arguments[i__33470__auto___37505]));

var G__37506 = (i__33470__auto___37505 + (1));
i__33470__auto___37505 = G__37506;
continue;
} else {
}
break;
}

var G__37462 = args37460.length;
switch (G__37462) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37460.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___37508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37508,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37508,out){
return (function (state_37483){
var state_val_37484 = (state_37483[(1)]);
if((state_val_37484 === (7))){
var inst_37479 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37485_37509 = state_37483__$1;
(statearr_37485_37509[(2)] = inst_37479);

(statearr_37485_37509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (1))){
var state_37483__$1 = state_37483;
var statearr_37486_37510 = state_37483__$1;
(statearr_37486_37510[(2)] = null);

(statearr_37486_37510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (4))){
var inst_37465 = (state_37483[(7)]);
var inst_37465__$1 = (state_37483[(2)]);
var inst_37466 = (inst_37465__$1 == null);
var state_37483__$1 = (function (){var statearr_37487 = state_37483;
(statearr_37487[(7)] = inst_37465__$1);

return statearr_37487;
})();
if(cljs.core.truth_(inst_37466)){
var statearr_37488_37511 = state_37483__$1;
(statearr_37488_37511[(1)] = (5));

} else {
var statearr_37489_37512 = state_37483__$1;
(statearr_37489_37512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (6))){
var inst_37465 = (state_37483[(7)]);
var inst_37470 = p.call(null,inst_37465);
var state_37483__$1 = state_37483;
if(cljs.core.truth_(inst_37470)){
var statearr_37490_37513 = state_37483__$1;
(statearr_37490_37513[(1)] = (8));

} else {
var statearr_37491_37514 = state_37483__$1;
(statearr_37491_37514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (3))){
var inst_37481 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37483__$1,inst_37481);
} else {
if((state_val_37484 === (2))){
var state_37483__$1 = state_37483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37483__$1,(4),ch);
} else {
if((state_val_37484 === (11))){
var inst_37473 = (state_37483[(2)]);
var state_37483__$1 = state_37483;
var statearr_37492_37515 = state_37483__$1;
(statearr_37492_37515[(2)] = inst_37473);

(statearr_37492_37515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (9))){
var state_37483__$1 = state_37483;
var statearr_37493_37516 = state_37483__$1;
(statearr_37493_37516[(2)] = null);

(statearr_37493_37516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (5))){
var inst_37468 = cljs.core.async.close_BANG_.call(null,out);
var state_37483__$1 = state_37483;
var statearr_37494_37517 = state_37483__$1;
(statearr_37494_37517[(2)] = inst_37468);

(statearr_37494_37517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (10))){
var inst_37476 = (state_37483[(2)]);
var state_37483__$1 = (function (){var statearr_37495 = state_37483;
(statearr_37495[(8)] = inst_37476);

return statearr_37495;
})();
var statearr_37496_37518 = state_37483__$1;
(statearr_37496_37518[(2)] = null);

(statearr_37496_37518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37484 === (8))){
var inst_37465 = (state_37483[(7)]);
var state_37483__$1 = state_37483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37483__$1,(11),out,inst_37465);
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
});})(c__35192__auto___37508,out))
;
return ((function (switch__35078__auto__,c__35192__auto___37508,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37500 = [null,null,null,null,null,null,null,null,null];
(statearr_37500[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37500[(1)] = (1));

return statearr_37500;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37483){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37501){if((e37501 instanceof Object)){
var ex__35082__auto__ = e37501;
var statearr_37502_37519 = state_37483;
(statearr_37502_37519[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37520 = state_37483;
state_37483 = G__37520;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37508,out))
})();
var state__35194__auto__ = (function (){var statearr_37503 = f__35193__auto__.call(null);
(statearr_37503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37508);

return statearr_37503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37508,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args37521 = [];
var len__33469__auto___37524 = arguments.length;
var i__33470__auto___37525 = (0);
while(true){
if((i__33470__auto___37525 < len__33469__auto___37524)){
args37521.push((arguments[i__33470__auto___37525]));

var G__37526 = (i__33470__auto___37525 + (1));
i__33470__auto___37525 = G__37526;
continue;
} else {
}
break;
}

var G__37523 = args37521.length;
switch (G__37523) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37521.length)].join('')));

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
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__){
return (function (state_37693){
var state_val_37694 = (state_37693[(1)]);
if((state_val_37694 === (7))){
var inst_37689 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37695_37736 = state_37693__$1;
(statearr_37695_37736[(2)] = inst_37689);

(statearr_37695_37736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (20))){
var inst_37659 = (state_37693[(7)]);
var inst_37670 = (state_37693[(2)]);
var inst_37671 = cljs.core.next.call(null,inst_37659);
var inst_37645 = inst_37671;
var inst_37646 = null;
var inst_37647 = (0);
var inst_37648 = (0);
var state_37693__$1 = (function (){var statearr_37696 = state_37693;
(statearr_37696[(8)] = inst_37646);

(statearr_37696[(9)] = inst_37648);

(statearr_37696[(10)] = inst_37645);

(statearr_37696[(11)] = inst_37670);

(statearr_37696[(12)] = inst_37647);

return statearr_37696;
})();
var statearr_37697_37737 = state_37693__$1;
(statearr_37697_37737[(2)] = null);

(statearr_37697_37737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (1))){
var state_37693__$1 = state_37693;
var statearr_37698_37738 = state_37693__$1;
(statearr_37698_37738[(2)] = null);

(statearr_37698_37738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (4))){
var inst_37634 = (state_37693[(13)]);
var inst_37634__$1 = (state_37693[(2)]);
var inst_37635 = (inst_37634__$1 == null);
var state_37693__$1 = (function (){var statearr_37699 = state_37693;
(statearr_37699[(13)] = inst_37634__$1);

return statearr_37699;
})();
if(cljs.core.truth_(inst_37635)){
var statearr_37700_37739 = state_37693__$1;
(statearr_37700_37739[(1)] = (5));

} else {
var statearr_37701_37740 = state_37693__$1;
(statearr_37701_37740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (15))){
var state_37693__$1 = state_37693;
var statearr_37705_37741 = state_37693__$1;
(statearr_37705_37741[(2)] = null);

(statearr_37705_37741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (21))){
var state_37693__$1 = state_37693;
var statearr_37706_37742 = state_37693__$1;
(statearr_37706_37742[(2)] = null);

(statearr_37706_37742[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (13))){
var inst_37646 = (state_37693[(8)]);
var inst_37648 = (state_37693[(9)]);
var inst_37645 = (state_37693[(10)]);
var inst_37647 = (state_37693[(12)]);
var inst_37655 = (state_37693[(2)]);
var inst_37656 = (inst_37648 + (1));
var tmp37702 = inst_37646;
var tmp37703 = inst_37645;
var tmp37704 = inst_37647;
var inst_37645__$1 = tmp37703;
var inst_37646__$1 = tmp37702;
var inst_37647__$1 = tmp37704;
var inst_37648__$1 = inst_37656;
var state_37693__$1 = (function (){var statearr_37707 = state_37693;
(statearr_37707[(8)] = inst_37646__$1);

(statearr_37707[(9)] = inst_37648__$1);

(statearr_37707[(10)] = inst_37645__$1);

(statearr_37707[(14)] = inst_37655);

(statearr_37707[(12)] = inst_37647__$1);

return statearr_37707;
})();
var statearr_37708_37743 = state_37693__$1;
(statearr_37708_37743[(2)] = null);

(statearr_37708_37743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (22))){
var state_37693__$1 = state_37693;
var statearr_37709_37744 = state_37693__$1;
(statearr_37709_37744[(2)] = null);

(statearr_37709_37744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (6))){
var inst_37634 = (state_37693[(13)]);
var inst_37643 = f.call(null,inst_37634);
var inst_37644 = cljs.core.seq.call(null,inst_37643);
var inst_37645 = inst_37644;
var inst_37646 = null;
var inst_37647 = (0);
var inst_37648 = (0);
var state_37693__$1 = (function (){var statearr_37710 = state_37693;
(statearr_37710[(8)] = inst_37646);

(statearr_37710[(9)] = inst_37648);

(statearr_37710[(10)] = inst_37645);

(statearr_37710[(12)] = inst_37647);

return statearr_37710;
})();
var statearr_37711_37745 = state_37693__$1;
(statearr_37711_37745[(2)] = null);

(statearr_37711_37745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (17))){
var inst_37659 = (state_37693[(7)]);
var inst_37663 = cljs.core.chunk_first.call(null,inst_37659);
var inst_37664 = cljs.core.chunk_rest.call(null,inst_37659);
var inst_37665 = cljs.core.count.call(null,inst_37663);
var inst_37645 = inst_37664;
var inst_37646 = inst_37663;
var inst_37647 = inst_37665;
var inst_37648 = (0);
var state_37693__$1 = (function (){var statearr_37712 = state_37693;
(statearr_37712[(8)] = inst_37646);

(statearr_37712[(9)] = inst_37648);

(statearr_37712[(10)] = inst_37645);

(statearr_37712[(12)] = inst_37647);

return statearr_37712;
})();
var statearr_37713_37746 = state_37693__$1;
(statearr_37713_37746[(2)] = null);

(statearr_37713_37746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (3))){
var inst_37691 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37693__$1,inst_37691);
} else {
if((state_val_37694 === (12))){
var inst_37679 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37714_37747 = state_37693__$1;
(statearr_37714_37747[(2)] = inst_37679);

(statearr_37714_37747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (2))){
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(4),in$);
} else {
if((state_val_37694 === (23))){
var inst_37687 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37715_37748 = state_37693__$1;
(statearr_37715_37748[(2)] = inst_37687);

(statearr_37715_37748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (19))){
var inst_37674 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37716_37749 = state_37693__$1;
(statearr_37716_37749[(2)] = inst_37674);

(statearr_37716_37749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (11))){
var inst_37659 = (state_37693[(7)]);
var inst_37645 = (state_37693[(10)]);
var inst_37659__$1 = cljs.core.seq.call(null,inst_37645);
var state_37693__$1 = (function (){var statearr_37717 = state_37693;
(statearr_37717[(7)] = inst_37659__$1);

return statearr_37717;
})();
if(inst_37659__$1){
var statearr_37718_37750 = state_37693__$1;
(statearr_37718_37750[(1)] = (14));

} else {
var statearr_37719_37751 = state_37693__$1;
(statearr_37719_37751[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (9))){
var inst_37681 = (state_37693[(2)]);
var inst_37682 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37693__$1 = (function (){var statearr_37720 = state_37693;
(statearr_37720[(15)] = inst_37681);

return statearr_37720;
})();
if(cljs.core.truth_(inst_37682)){
var statearr_37721_37752 = state_37693__$1;
(statearr_37721_37752[(1)] = (21));

} else {
var statearr_37722_37753 = state_37693__$1;
(statearr_37722_37753[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (5))){
var inst_37637 = cljs.core.async.close_BANG_.call(null,out);
var state_37693__$1 = state_37693;
var statearr_37723_37754 = state_37693__$1;
(statearr_37723_37754[(2)] = inst_37637);

(statearr_37723_37754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (14))){
var inst_37659 = (state_37693[(7)]);
var inst_37661 = cljs.core.chunked_seq_QMARK_.call(null,inst_37659);
var state_37693__$1 = state_37693;
if(inst_37661){
var statearr_37724_37755 = state_37693__$1;
(statearr_37724_37755[(1)] = (17));

} else {
var statearr_37725_37756 = state_37693__$1;
(statearr_37725_37756[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (16))){
var inst_37677 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37726_37757 = state_37693__$1;
(statearr_37726_37757[(2)] = inst_37677);

(statearr_37726_37757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (10))){
var inst_37646 = (state_37693[(8)]);
var inst_37648 = (state_37693[(9)]);
var inst_37653 = cljs.core._nth.call(null,inst_37646,inst_37648);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37693__$1,(13),out,inst_37653);
} else {
if((state_val_37694 === (18))){
var inst_37659 = (state_37693[(7)]);
var inst_37668 = cljs.core.first.call(null,inst_37659);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37693__$1,(20),out,inst_37668);
} else {
if((state_val_37694 === (8))){
var inst_37648 = (state_37693[(9)]);
var inst_37647 = (state_37693[(12)]);
var inst_37650 = (inst_37648 < inst_37647);
var inst_37651 = inst_37650;
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37651)){
var statearr_37727_37758 = state_37693__$1;
(statearr_37727_37758[(1)] = (10));

} else {
var statearr_37728_37759 = state_37693__$1;
(statearr_37728_37759[(1)] = (11));

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
});})(c__35192__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____0 = (function (){
var statearr_37732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37732[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__);

(statearr_37732[(1)] = (1));

return statearr_37732;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____1 = (function (state_37693){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37733){if((e37733 instanceof Object)){
var ex__35082__auto__ = e37733;
var statearr_37734_37760 = state_37693;
(statearr_37734_37760[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37761 = state_37693;
state_37693 = G__37761;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__ = function(state_37693){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____1.call(this,state_37693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35079__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__))
})();
var state__35194__auto__ = (function (){var statearr_37735 = f__35193__auto__.call(null);
(statearr_37735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_37735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__))
);

return c__35192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37762 = [];
var len__33469__auto___37765 = arguments.length;
var i__33470__auto___37766 = (0);
while(true){
if((i__33470__auto___37766 < len__33469__auto___37765)){
args37762.push((arguments[i__33470__auto___37766]));

var G__37767 = (i__33470__auto___37766 + (1));
i__33470__auto___37766 = G__37767;
continue;
} else {
}
break;
}

var G__37764 = args37762.length;
switch (G__37764) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37762.length)].join('')));

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
var args37769 = [];
var len__33469__auto___37772 = arguments.length;
var i__33470__auto___37773 = (0);
while(true){
if((i__33470__auto___37773 < len__33469__auto___37772)){
args37769.push((arguments[i__33470__auto___37773]));

var G__37774 = (i__33470__auto___37773 + (1));
i__33470__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var G__37771 = args37769.length;
switch (G__37771) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37769.length)].join('')));

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
var args37776 = [];
var len__33469__auto___37827 = arguments.length;
var i__33470__auto___37828 = (0);
while(true){
if((i__33470__auto___37828 < len__33469__auto___37827)){
args37776.push((arguments[i__33470__auto___37828]));

var G__37829 = (i__33470__auto___37828 + (1));
i__33470__auto___37828 = G__37829;
continue;
} else {
}
break;
}

var G__37778 = args37776.length;
switch (G__37778) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37776.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___37831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37831,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37831,out){
return (function (state_37802){
var state_val_37803 = (state_37802[(1)]);
if((state_val_37803 === (7))){
var inst_37797 = (state_37802[(2)]);
var state_37802__$1 = state_37802;
var statearr_37804_37832 = state_37802__$1;
(statearr_37804_37832[(2)] = inst_37797);

(statearr_37804_37832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (1))){
var inst_37779 = null;
var state_37802__$1 = (function (){var statearr_37805 = state_37802;
(statearr_37805[(7)] = inst_37779);

return statearr_37805;
})();
var statearr_37806_37833 = state_37802__$1;
(statearr_37806_37833[(2)] = null);

(statearr_37806_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (4))){
var inst_37782 = (state_37802[(8)]);
var inst_37782__$1 = (state_37802[(2)]);
var inst_37783 = (inst_37782__$1 == null);
var inst_37784 = cljs.core.not.call(null,inst_37783);
var state_37802__$1 = (function (){var statearr_37807 = state_37802;
(statearr_37807[(8)] = inst_37782__$1);

return statearr_37807;
})();
if(inst_37784){
var statearr_37808_37834 = state_37802__$1;
(statearr_37808_37834[(1)] = (5));

} else {
var statearr_37809_37835 = state_37802__$1;
(statearr_37809_37835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (6))){
var state_37802__$1 = state_37802;
var statearr_37810_37836 = state_37802__$1;
(statearr_37810_37836[(2)] = null);

(statearr_37810_37836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (3))){
var inst_37799 = (state_37802[(2)]);
var inst_37800 = cljs.core.async.close_BANG_.call(null,out);
var state_37802__$1 = (function (){var statearr_37811 = state_37802;
(statearr_37811[(9)] = inst_37799);

return statearr_37811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37802__$1,inst_37800);
} else {
if((state_val_37803 === (2))){
var state_37802__$1 = state_37802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37802__$1,(4),ch);
} else {
if((state_val_37803 === (11))){
var inst_37782 = (state_37802[(8)]);
var inst_37791 = (state_37802[(2)]);
var inst_37779 = inst_37782;
var state_37802__$1 = (function (){var statearr_37812 = state_37802;
(statearr_37812[(7)] = inst_37779);

(statearr_37812[(10)] = inst_37791);

return statearr_37812;
})();
var statearr_37813_37837 = state_37802__$1;
(statearr_37813_37837[(2)] = null);

(statearr_37813_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (9))){
var inst_37782 = (state_37802[(8)]);
var state_37802__$1 = state_37802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37802__$1,(11),out,inst_37782);
} else {
if((state_val_37803 === (5))){
var inst_37779 = (state_37802[(7)]);
var inst_37782 = (state_37802[(8)]);
var inst_37786 = cljs.core._EQ_.call(null,inst_37782,inst_37779);
var state_37802__$1 = state_37802;
if(inst_37786){
var statearr_37815_37838 = state_37802__$1;
(statearr_37815_37838[(1)] = (8));

} else {
var statearr_37816_37839 = state_37802__$1;
(statearr_37816_37839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (10))){
var inst_37794 = (state_37802[(2)]);
var state_37802__$1 = state_37802;
var statearr_37817_37840 = state_37802__$1;
(statearr_37817_37840[(2)] = inst_37794);

(statearr_37817_37840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37803 === (8))){
var inst_37779 = (state_37802[(7)]);
var tmp37814 = inst_37779;
var inst_37779__$1 = tmp37814;
var state_37802__$1 = (function (){var statearr_37818 = state_37802;
(statearr_37818[(7)] = inst_37779__$1);

return statearr_37818;
})();
var statearr_37819_37841 = state_37802__$1;
(statearr_37819_37841[(2)] = null);

(statearr_37819_37841[(1)] = (2));


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
});})(c__35192__auto___37831,out))
;
return ((function (switch__35078__auto__,c__35192__auto___37831,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37823[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37823[(1)] = (1));

return statearr_37823;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37802){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37824){if((e37824 instanceof Object)){
var ex__35082__auto__ = e37824;
var statearr_37825_37842 = state_37802;
(statearr_37825_37842[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37843 = state_37802;
state_37802 = G__37843;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37831,out))
})();
var state__35194__auto__ = (function (){var statearr_37826 = f__35193__auto__.call(null);
(statearr_37826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37831);

return statearr_37826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37831,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37844 = [];
var len__33469__auto___37914 = arguments.length;
var i__33470__auto___37915 = (0);
while(true){
if((i__33470__auto___37915 < len__33469__auto___37914)){
args37844.push((arguments[i__33470__auto___37915]));

var G__37916 = (i__33470__auto___37915 + (1));
i__33470__auto___37915 = G__37916;
continue;
} else {
}
break;
}

var G__37846 = args37844.length;
switch (G__37846) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37844.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___37918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___37918,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___37918,out){
return (function (state_37884){
var state_val_37885 = (state_37884[(1)]);
if((state_val_37885 === (7))){
var inst_37880 = (state_37884[(2)]);
var state_37884__$1 = state_37884;
var statearr_37886_37919 = state_37884__$1;
(statearr_37886_37919[(2)] = inst_37880);

(statearr_37886_37919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (1))){
var inst_37847 = (new Array(n));
var inst_37848 = inst_37847;
var inst_37849 = (0);
var state_37884__$1 = (function (){var statearr_37887 = state_37884;
(statearr_37887[(7)] = inst_37849);

(statearr_37887[(8)] = inst_37848);

return statearr_37887;
})();
var statearr_37888_37920 = state_37884__$1;
(statearr_37888_37920[(2)] = null);

(statearr_37888_37920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (4))){
var inst_37852 = (state_37884[(9)]);
var inst_37852__$1 = (state_37884[(2)]);
var inst_37853 = (inst_37852__$1 == null);
var inst_37854 = cljs.core.not.call(null,inst_37853);
var state_37884__$1 = (function (){var statearr_37889 = state_37884;
(statearr_37889[(9)] = inst_37852__$1);

return statearr_37889;
})();
if(inst_37854){
var statearr_37890_37921 = state_37884__$1;
(statearr_37890_37921[(1)] = (5));

} else {
var statearr_37891_37922 = state_37884__$1;
(statearr_37891_37922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (15))){
var inst_37874 = (state_37884[(2)]);
var state_37884__$1 = state_37884;
var statearr_37892_37923 = state_37884__$1;
(statearr_37892_37923[(2)] = inst_37874);

(statearr_37892_37923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (13))){
var state_37884__$1 = state_37884;
var statearr_37893_37924 = state_37884__$1;
(statearr_37893_37924[(2)] = null);

(statearr_37893_37924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (6))){
var inst_37849 = (state_37884[(7)]);
var inst_37870 = (inst_37849 > (0));
var state_37884__$1 = state_37884;
if(cljs.core.truth_(inst_37870)){
var statearr_37894_37925 = state_37884__$1;
(statearr_37894_37925[(1)] = (12));

} else {
var statearr_37895_37926 = state_37884__$1;
(statearr_37895_37926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (3))){
var inst_37882 = (state_37884[(2)]);
var state_37884__$1 = state_37884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37884__$1,inst_37882);
} else {
if((state_val_37885 === (12))){
var inst_37848 = (state_37884[(8)]);
var inst_37872 = cljs.core.vec.call(null,inst_37848);
var state_37884__$1 = state_37884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37884__$1,(15),out,inst_37872);
} else {
if((state_val_37885 === (2))){
var state_37884__$1 = state_37884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37884__$1,(4),ch);
} else {
if((state_val_37885 === (11))){
var inst_37864 = (state_37884[(2)]);
var inst_37865 = (new Array(n));
var inst_37848 = inst_37865;
var inst_37849 = (0);
var state_37884__$1 = (function (){var statearr_37896 = state_37884;
(statearr_37896[(7)] = inst_37849);

(statearr_37896[(8)] = inst_37848);

(statearr_37896[(10)] = inst_37864);

return statearr_37896;
})();
var statearr_37897_37927 = state_37884__$1;
(statearr_37897_37927[(2)] = null);

(statearr_37897_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (9))){
var inst_37848 = (state_37884[(8)]);
var inst_37862 = cljs.core.vec.call(null,inst_37848);
var state_37884__$1 = state_37884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37884__$1,(11),out,inst_37862);
} else {
if((state_val_37885 === (5))){
var inst_37849 = (state_37884[(7)]);
var inst_37857 = (state_37884[(11)]);
var inst_37848 = (state_37884[(8)]);
var inst_37852 = (state_37884[(9)]);
var inst_37856 = (inst_37848[inst_37849] = inst_37852);
var inst_37857__$1 = (inst_37849 + (1));
var inst_37858 = (inst_37857__$1 < n);
var state_37884__$1 = (function (){var statearr_37898 = state_37884;
(statearr_37898[(11)] = inst_37857__$1);

(statearr_37898[(12)] = inst_37856);

return statearr_37898;
})();
if(cljs.core.truth_(inst_37858)){
var statearr_37899_37928 = state_37884__$1;
(statearr_37899_37928[(1)] = (8));

} else {
var statearr_37900_37929 = state_37884__$1;
(statearr_37900_37929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (14))){
var inst_37877 = (state_37884[(2)]);
var inst_37878 = cljs.core.async.close_BANG_.call(null,out);
var state_37884__$1 = (function (){var statearr_37902 = state_37884;
(statearr_37902[(13)] = inst_37877);

return statearr_37902;
})();
var statearr_37903_37930 = state_37884__$1;
(statearr_37903_37930[(2)] = inst_37878);

(statearr_37903_37930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (10))){
var inst_37868 = (state_37884[(2)]);
var state_37884__$1 = state_37884;
var statearr_37904_37931 = state_37884__$1;
(statearr_37904_37931[(2)] = inst_37868);

(statearr_37904_37931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37885 === (8))){
var inst_37857 = (state_37884[(11)]);
var inst_37848 = (state_37884[(8)]);
var tmp37901 = inst_37848;
var inst_37848__$1 = tmp37901;
var inst_37849 = inst_37857;
var state_37884__$1 = (function (){var statearr_37905 = state_37884;
(statearr_37905[(7)] = inst_37849);

(statearr_37905[(8)] = inst_37848__$1);

return statearr_37905;
})();
var statearr_37906_37932 = state_37884__$1;
(statearr_37906_37932[(2)] = null);

(statearr_37906_37932[(1)] = (2));


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
});})(c__35192__auto___37918,out))
;
return ((function (switch__35078__auto__,c__35192__auto___37918,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_37910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37910[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_37910[(1)] = (1));

return statearr_37910;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37884){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e37911){if((e37911 instanceof Object)){
var ex__35082__auto__ = e37911;
var statearr_37912_37933 = state_37884;
(statearr_37912_37933[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37934 = state_37884;
state_37884 = G__37934;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___37918,out))
})();
var state__35194__auto__ = (function (){var statearr_37913 = f__35193__auto__.call(null);
(statearr_37913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___37918);

return statearr_37913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___37918,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37935 = [];
var len__33469__auto___38009 = arguments.length;
var i__33470__auto___38010 = (0);
while(true){
if((i__33470__auto___38010 < len__33469__auto___38009)){
args37935.push((arguments[i__33470__auto___38010]));

var G__38011 = (i__33470__auto___38010 + (1));
i__33470__auto___38010 = G__38011;
continue;
} else {
}
break;
}

var G__37937 = args37935.length;
switch (G__37937) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37935.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35192__auto___38013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___38013,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___38013,out){
return (function (state_37979){
var state_val_37980 = (state_37979[(1)]);
if((state_val_37980 === (7))){
var inst_37975 = (state_37979[(2)]);
var state_37979__$1 = state_37979;
var statearr_37981_38014 = state_37979__$1;
(statearr_37981_38014[(2)] = inst_37975);

(statearr_37981_38014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (1))){
var inst_37938 = [];
var inst_37939 = inst_37938;
var inst_37940 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37979__$1 = (function (){var statearr_37982 = state_37979;
(statearr_37982[(7)] = inst_37940);

(statearr_37982[(8)] = inst_37939);

return statearr_37982;
})();
var statearr_37983_38015 = state_37979__$1;
(statearr_37983_38015[(2)] = null);

(statearr_37983_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (4))){
var inst_37943 = (state_37979[(9)]);
var inst_37943__$1 = (state_37979[(2)]);
var inst_37944 = (inst_37943__$1 == null);
var inst_37945 = cljs.core.not.call(null,inst_37944);
var state_37979__$1 = (function (){var statearr_37984 = state_37979;
(statearr_37984[(9)] = inst_37943__$1);

return statearr_37984;
})();
if(inst_37945){
var statearr_37985_38016 = state_37979__$1;
(statearr_37985_38016[(1)] = (5));

} else {
var statearr_37986_38017 = state_37979__$1;
(statearr_37986_38017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (15))){
var inst_37969 = (state_37979[(2)]);
var state_37979__$1 = state_37979;
var statearr_37987_38018 = state_37979__$1;
(statearr_37987_38018[(2)] = inst_37969);

(statearr_37987_38018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (13))){
var state_37979__$1 = state_37979;
var statearr_37988_38019 = state_37979__$1;
(statearr_37988_38019[(2)] = null);

(statearr_37988_38019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (6))){
var inst_37939 = (state_37979[(8)]);
var inst_37964 = inst_37939.length;
var inst_37965 = (inst_37964 > (0));
var state_37979__$1 = state_37979;
if(cljs.core.truth_(inst_37965)){
var statearr_37989_38020 = state_37979__$1;
(statearr_37989_38020[(1)] = (12));

} else {
var statearr_37990_38021 = state_37979__$1;
(statearr_37990_38021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (3))){
var inst_37977 = (state_37979[(2)]);
var state_37979__$1 = state_37979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37979__$1,inst_37977);
} else {
if((state_val_37980 === (12))){
var inst_37939 = (state_37979[(8)]);
var inst_37967 = cljs.core.vec.call(null,inst_37939);
var state_37979__$1 = state_37979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37979__$1,(15),out,inst_37967);
} else {
if((state_val_37980 === (2))){
var state_37979__$1 = state_37979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37979__$1,(4),ch);
} else {
if((state_val_37980 === (11))){
var inst_37947 = (state_37979[(10)]);
var inst_37943 = (state_37979[(9)]);
var inst_37957 = (state_37979[(2)]);
var inst_37958 = [];
var inst_37959 = inst_37958.push(inst_37943);
var inst_37939 = inst_37958;
var inst_37940 = inst_37947;
var state_37979__$1 = (function (){var statearr_37991 = state_37979;
(statearr_37991[(7)] = inst_37940);

(statearr_37991[(11)] = inst_37959);

(statearr_37991[(8)] = inst_37939);

(statearr_37991[(12)] = inst_37957);

return statearr_37991;
})();
var statearr_37992_38022 = state_37979__$1;
(statearr_37992_38022[(2)] = null);

(statearr_37992_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (9))){
var inst_37939 = (state_37979[(8)]);
var inst_37955 = cljs.core.vec.call(null,inst_37939);
var state_37979__$1 = state_37979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37979__$1,(11),out,inst_37955);
} else {
if((state_val_37980 === (5))){
var inst_37947 = (state_37979[(10)]);
var inst_37943 = (state_37979[(9)]);
var inst_37940 = (state_37979[(7)]);
var inst_37947__$1 = f.call(null,inst_37943);
var inst_37948 = cljs.core._EQ_.call(null,inst_37947__$1,inst_37940);
var inst_37949 = cljs.core.keyword_identical_QMARK_.call(null,inst_37940,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37950 = (inst_37948) || (inst_37949);
var state_37979__$1 = (function (){var statearr_37993 = state_37979;
(statearr_37993[(10)] = inst_37947__$1);

return statearr_37993;
})();
if(cljs.core.truth_(inst_37950)){
var statearr_37994_38023 = state_37979__$1;
(statearr_37994_38023[(1)] = (8));

} else {
var statearr_37995_38024 = state_37979__$1;
(statearr_37995_38024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (14))){
var inst_37972 = (state_37979[(2)]);
var inst_37973 = cljs.core.async.close_BANG_.call(null,out);
var state_37979__$1 = (function (){var statearr_37997 = state_37979;
(statearr_37997[(13)] = inst_37972);

return statearr_37997;
})();
var statearr_37998_38025 = state_37979__$1;
(statearr_37998_38025[(2)] = inst_37973);

(statearr_37998_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (10))){
var inst_37962 = (state_37979[(2)]);
var state_37979__$1 = state_37979;
var statearr_37999_38026 = state_37979__$1;
(statearr_37999_38026[(2)] = inst_37962);

(statearr_37999_38026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37980 === (8))){
var inst_37947 = (state_37979[(10)]);
var inst_37943 = (state_37979[(9)]);
var inst_37939 = (state_37979[(8)]);
var inst_37952 = inst_37939.push(inst_37943);
var tmp37996 = inst_37939;
var inst_37939__$1 = tmp37996;
var inst_37940 = inst_37947;
var state_37979__$1 = (function (){var statearr_38000 = state_37979;
(statearr_38000[(7)] = inst_37940);

(statearr_38000[(14)] = inst_37952);

(statearr_38000[(8)] = inst_37939__$1);

return statearr_38000;
})();
var statearr_38001_38027 = state_37979__$1;
(statearr_38001_38027[(2)] = null);

(statearr_38001_38027[(1)] = (2));


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
});})(c__35192__auto___38013,out))
;
return ((function (switch__35078__auto__,c__35192__auto___38013,out){
return (function() {
var cljs$core$async$state_machine__35079__auto__ = null;
var cljs$core$async$state_machine__35079__auto____0 = (function (){
var statearr_38005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38005[(0)] = cljs$core$async$state_machine__35079__auto__);

(statearr_38005[(1)] = (1));

return statearr_38005;
});
var cljs$core$async$state_machine__35079__auto____1 = (function (state_37979){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_37979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e38006){if((e38006 instanceof Object)){
var ex__35082__auto__ = e38006;
var statearr_38007_38028 = state_37979;
(statearr_38007_38028[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_37979;
state_37979 = G__38029;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
cljs$core$async$state_machine__35079__auto__ = function(state_37979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35079__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35079__auto____1.call(this,state_37979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35079__auto____0;
cljs$core$async$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35079__auto____1;
return cljs$core$async$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___38013,out))
})();
var state__35194__auto__ = (function (){var statearr_38008 = f__35193__auto__.call(null);
(statearr_38008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___38013);

return statearr_38008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___38013,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514286305678