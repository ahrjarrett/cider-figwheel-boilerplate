// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__32938__auto__,writer__32939__auto__,opt__32940__auto__){
return cljs.core._write.call(null,writer__32939__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33584 = arguments.length;
var i__33470__auto___33585 = (0);
while(true){
if((i__33470__auto___33585 < len__33469__auto___33584)){
args__33476__auto__.push((arguments[i__33470__auto___33585]));

var G__33586 = (i__33470__auto___33585 + (1));
i__33470__auto___33585 = G__33586;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33583){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33583));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33588 = arguments.length;
var i__33470__auto___33589 = (0);
while(true){
if((i__33470__auto___33589 < len__33469__auto___33588)){
args__33476__auto__.push((arguments[i__33470__auto___33589]));

var G__33590 = (i__33470__auto___33589 + (1));
i__33470__auto___33589 = G__33590;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33587){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33587));
});

var g_QMARK__33591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_33592 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33591){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33591))
,null));
var mkg_33593 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33591,g_33592){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33591,g_33592))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33591,g_33592,mkg_33593){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33591).call(null,x);
});})(g_QMARK__33591,g_33592,mkg_33593))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33591,g_33592,mkg_33593){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33593).call(null,gfn);
});})(g_QMARK__33591,g_33592,mkg_33593))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33591,g_33592,mkg_33593){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33592).call(null,generator);
});})(g_QMARK__33591,g_33592,mkg_33593))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33555__auto___33611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__33555__auto___33611){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33612 = arguments.length;
var i__33470__auto___33613 = (0);
while(true){
if((i__33470__auto___33613 < len__33469__auto___33612)){
args__33476__auto__.push((arguments[i__33470__auto___33613]));

var G__33614 = (i__33470__auto___33613 + (1));
i__33470__auto___33613 = G__33614;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33611))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33611),args);
});})(g__33555__auto___33611))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__33555__auto___33611){
return (function (seq33594){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33594));
});})(g__33555__auto___33611))
;


var g__33555__auto___33615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__33555__auto___33615){
return (function cljs$spec$impl$gen$list(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33616 = arguments.length;
var i__33470__auto___33617 = (0);
while(true){
if((i__33470__auto___33617 < len__33469__auto___33616)){
args__33476__auto__.push((arguments[i__33470__auto___33617]));

var G__33618 = (i__33470__auto___33617 + (1));
i__33470__auto___33617 = G__33618;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33615))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33615),args);
});})(g__33555__auto___33615))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__33555__auto___33615){
return (function (seq33595){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33595));
});})(g__33555__auto___33615))
;


var g__33555__auto___33619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__33555__auto___33619){
return (function cljs$spec$impl$gen$map(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33620 = arguments.length;
var i__33470__auto___33621 = (0);
while(true){
if((i__33470__auto___33621 < len__33469__auto___33620)){
args__33476__auto__.push((arguments[i__33470__auto___33621]));

var G__33622 = (i__33470__auto___33621 + (1));
i__33470__auto___33621 = G__33622;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33619))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33619),args);
});})(g__33555__auto___33619))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__33555__auto___33619){
return (function (seq33596){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33596));
});})(g__33555__auto___33619))
;


var g__33555__auto___33623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__33555__auto___33623){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33624 = arguments.length;
var i__33470__auto___33625 = (0);
while(true){
if((i__33470__auto___33625 < len__33469__auto___33624)){
args__33476__auto__.push((arguments[i__33470__auto___33625]));

var G__33626 = (i__33470__auto___33625 + (1));
i__33470__auto___33625 = G__33626;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33623))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33623),args);
});})(g__33555__auto___33623))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__33555__auto___33623){
return (function (seq33597){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33597));
});})(g__33555__auto___33623))
;


var g__33555__auto___33627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__33555__auto___33627){
return (function cljs$spec$impl$gen$set(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33628 = arguments.length;
var i__33470__auto___33629 = (0);
while(true){
if((i__33470__auto___33629 < len__33469__auto___33628)){
args__33476__auto__.push((arguments[i__33470__auto___33629]));

var G__33630 = (i__33470__auto___33629 + (1));
i__33470__auto___33629 = G__33630;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33627))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33627),args);
});})(g__33555__auto___33627))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__33555__auto___33627){
return (function (seq33598){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33598));
});})(g__33555__auto___33627))
;


var g__33555__auto___33631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__33555__auto___33631){
return (function cljs$spec$impl$gen$vector(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33632 = arguments.length;
var i__33470__auto___33633 = (0);
while(true){
if((i__33470__auto___33633 < len__33469__auto___33632)){
args__33476__auto__.push((arguments[i__33470__auto___33633]));

var G__33634 = (i__33470__auto___33633 + (1));
i__33470__auto___33633 = G__33634;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33631))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33631),args);
});})(g__33555__auto___33631))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__33555__auto___33631){
return (function (seq33599){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33599));
});})(g__33555__auto___33631))
;


var g__33555__auto___33635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__33555__auto___33635){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33636 = arguments.length;
var i__33470__auto___33637 = (0);
while(true){
if((i__33470__auto___33637 < len__33469__auto___33636)){
args__33476__auto__.push((arguments[i__33470__auto___33637]));

var G__33638 = (i__33470__auto___33637 + (1));
i__33470__auto___33637 = G__33638;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33635))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33635),args);
});})(g__33555__auto___33635))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__33555__auto___33635){
return (function (seq33600){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33600));
});})(g__33555__auto___33635))
;


var g__33555__auto___33639 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__33555__auto___33639){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33640 = arguments.length;
var i__33470__auto___33641 = (0);
while(true){
if((i__33470__auto___33641 < len__33469__auto___33640)){
args__33476__auto__.push((arguments[i__33470__auto___33641]));

var G__33642 = (i__33470__auto___33641 + (1));
i__33470__auto___33641 = G__33642;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33639))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33639){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33639),args);
});})(g__33555__auto___33639))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__33555__auto___33639){
return (function (seq33601){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33601));
});})(g__33555__auto___33639))
;


var g__33555__auto___33643 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__33555__auto___33643){
return (function cljs$spec$impl$gen$elements(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33644 = arguments.length;
var i__33470__auto___33645 = (0);
while(true){
if((i__33470__auto___33645 < len__33469__auto___33644)){
args__33476__auto__.push((arguments[i__33470__auto___33645]));

var G__33646 = (i__33470__auto___33645 + (1));
i__33470__auto___33645 = G__33646;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33643))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33643){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33643),args);
});})(g__33555__auto___33643))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__33555__auto___33643){
return (function (seq33602){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33602));
});})(g__33555__auto___33643))
;


var g__33555__auto___33647 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__33555__auto___33647){
return (function cljs$spec$impl$gen$bind(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33648 = arguments.length;
var i__33470__auto___33649 = (0);
while(true){
if((i__33470__auto___33649 < len__33469__auto___33648)){
args__33476__auto__.push((arguments[i__33470__auto___33649]));

var G__33650 = (i__33470__auto___33649 + (1));
i__33470__auto___33649 = G__33650;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33647))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33647){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33647),args);
});})(g__33555__auto___33647))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__33555__auto___33647){
return (function (seq33603){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33603));
});})(g__33555__auto___33647))
;


var g__33555__auto___33651 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__33555__auto___33651){
return (function cljs$spec$impl$gen$choose(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33652 = arguments.length;
var i__33470__auto___33653 = (0);
while(true){
if((i__33470__auto___33653 < len__33469__auto___33652)){
args__33476__auto__.push((arguments[i__33470__auto___33653]));

var G__33654 = (i__33470__auto___33653 + (1));
i__33470__auto___33653 = G__33654;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33651))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33651){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33651),args);
});})(g__33555__auto___33651))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__33555__auto___33651){
return (function (seq33604){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33604));
});})(g__33555__auto___33651))
;


var g__33555__auto___33655 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__33555__auto___33655){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33656 = arguments.length;
var i__33470__auto___33657 = (0);
while(true){
if((i__33470__auto___33657 < len__33469__auto___33656)){
args__33476__auto__.push((arguments[i__33470__auto___33657]));

var G__33658 = (i__33470__auto___33657 + (1));
i__33470__auto___33657 = G__33658;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33655))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33655){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33655),args);
});})(g__33555__auto___33655))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__33555__auto___33655){
return (function (seq33605){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33605));
});})(g__33555__auto___33655))
;


var g__33555__auto___33659 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__33555__auto___33659){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33660 = arguments.length;
var i__33470__auto___33661 = (0);
while(true){
if((i__33470__auto___33661 < len__33469__auto___33660)){
args__33476__auto__.push((arguments[i__33470__auto___33661]));

var G__33662 = (i__33470__auto___33661 + (1));
i__33470__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33659))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33659){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33659),args);
});})(g__33555__auto___33659))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__33555__auto___33659){
return (function (seq33606){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33606));
});})(g__33555__auto___33659))
;


var g__33555__auto___33663 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__33555__auto___33663){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33664 = arguments.length;
var i__33470__auto___33665 = (0);
while(true){
if((i__33470__auto___33665 < len__33469__auto___33664)){
args__33476__auto__.push((arguments[i__33470__auto___33665]));

var G__33666 = (i__33470__auto___33665 + (1));
i__33470__auto___33665 = G__33666;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33663))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33663){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33663),args);
});})(g__33555__auto___33663))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__33555__auto___33663){
return (function (seq33607){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33607));
});})(g__33555__auto___33663))
;


var g__33555__auto___33667 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__33555__auto___33667){
return (function cljs$spec$impl$gen$sample(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33668 = arguments.length;
var i__33470__auto___33669 = (0);
while(true){
if((i__33470__auto___33669 < len__33469__auto___33668)){
args__33476__auto__.push((arguments[i__33470__auto___33669]));

var G__33670 = (i__33470__auto___33669 + (1));
i__33470__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33667))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33667){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33667),args);
});})(g__33555__auto___33667))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__33555__auto___33667){
return (function (seq33608){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33608));
});})(g__33555__auto___33667))
;


var g__33555__auto___33671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__33555__auto___33671){
return (function cljs$spec$impl$gen$return(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33672 = arguments.length;
var i__33470__auto___33673 = (0);
while(true){
if((i__33470__auto___33673 < len__33469__auto___33672)){
args__33476__auto__.push((arguments[i__33470__auto___33673]));

var G__33674 = (i__33470__auto___33673 + (1));
i__33470__auto___33673 = G__33674;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33671))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33671),args);
});})(g__33555__auto___33671))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__33555__auto___33671){
return (function (seq33609){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33609));
});})(g__33555__auto___33671))
;


var g__33555__auto___33675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__33555__auto___33675){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33676 = arguments.length;
var i__33470__auto___33677 = (0);
while(true){
if((i__33470__auto___33677 < len__33469__auto___33676)){
args__33476__auto__.push((arguments[i__33470__auto___33677]));

var G__33678 = (i__33470__auto___33677 + (1));
i__33470__auto___33677 = G__33678;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33555__auto___33675))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33555__auto___33675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33555__auto___33675),args);
});})(g__33555__auto___33675))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33555__auto___33675){
return (function (seq33610){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33610));
});})(g__33555__auto___33675))
;

var g__33568__auto___33700 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__33568__auto___33700){
return (function cljs$spec$impl$gen$any(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33701 = arguments.length;
var i__33470__auto___33702 = (0);
while(true){
if((i__33470__auto___33702 < len__33469__auto___33701)){
args__33476__auto__.push((arguments[i__33470__auto___33702]));

var G__33703 = (i__33470__auto___33702 + (1));
i__33470__auto___33702 = G__33703;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33700))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33700){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33700);
});})(g__33568__auto___33700))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__33568__auto___33700){
return (function (seq33679){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33679));
});})(g__33568__auto___33700))
;


var g__33568__auto___33704 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__33568__auto___33704){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33705 = arguments.length;
var i__33470__auto___33706 = (0);
while(true){
if((i__33470__auto___33706 < len__33469__auto___33705)){
args__33476__auto__.push((arguments[i__33470__auto___33706]));

var G__33707 = (i__33470__auto___33706 + (1));
i__33470__auto___33706 = G__33707;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33704))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33704){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33704);
});})(g__33568__auto___33704))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__33568__auto___33704){
return (function (seq33680){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33680));
});})(g__33568__auto___33704))
;


var g__33568__auto___33708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__33568__auto___33708){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33709 = arguments.length;
var i__33470__auto___33710 = (0);
while(true){
if((i__33470__auto___33710 < len__33469__auto___33709)){
args__33476__auto__.push((arguments[i__33470__auto___33710]));

var G__33711 = (i__33470__auto___33710 + (1));
i__33470__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33708))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33708){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33708);
});})(g__33568__auto___33708))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__33568__auto___33708){
return (function (seq33681){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33681));
});})(g__33568__auto___33708))
;


var g__33568__auto___33712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__33568__auto___33712){
return (function cljs$spec$impl$gen$char(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33713 = arguments.length;
var i__33470__auto___33714 = (0);
while(true){
if((i__33470__auto___33714 < len__33469__auto___33713)){
args__33476__auto__.push((arguments[i__33470__auto___33714]));

var G__33715 = (i__33470__auto___33714 + (1));
i__33470__auto___33714 = G__33715;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33712))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33712){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33712);
});})(g__33568__auto___33712))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__33568__auto___33712){
return (function (seq33682){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33682));
});})(g__33568__auto___33712))
;


var g__33568__auto___33716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__33568__auto___33716){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33717 = arguments.length;
var i__33470__auto___33718 = (0);
while(true){
if((i__33470__auto___33718 < len__33469__auto___33717)){
args__33476__auto__.push((arguments[i__33470__auto___33718]));

var G__33719 = (i__33470__auto___33718 + (1));
i__33470__auto___33718 = G__33719;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33716))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33716){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33716);
});})(g__33568__auto___33716))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__33568__auto___33716){
return (function (seq33683){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33683));
});})(g__33568__auto___33716))
;


var g__33568__auto___33720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__33568__auto___33720){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33721 = arguments.length;
var i__33470__auto___33722 = (0);
while(true){
if((i__33470__auto___33722 < len__33469__auto___33721)){
args__33476__auto__.push((arguments[i__33470__auto___33722]));

var G__33723 = (i__33470__auto___33722 + (1));
i__33470__auto___33722 = G__33723;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33720))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33720){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33720);
});})(g__33568__auto___33720))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__33568__auto___33720){
return (function (seq33684){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33684));
});})(g__33568__auto___33720))
;


var g__33568__auto___33724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__33568__auto___33724){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33725 = arguments.length;
var i__33470__auto___33726 = (0);
while(true){
if((i__33470__auto___33726 < len__33469__auto___33725)){
args__33476__auto__.push((arguments[i__33470__auto___33726]));

var G__33727 = (i__33470__auto___33726 + (1));
i__33470__auto___33726 = G__33727;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33724))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33724){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33724);
});})(g__33568__auto___33724))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__33568__auto___33724){
return (function (seq33685){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33685));
});})(g__33568__auto___33724))
;


var g__33568__auto___33728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__33568__auto___33728){
return (function cljs$spec$impl$gen$double(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33729 = arguments.length;
var i__33470__auto___33730 = (0);
while(true){
if((i__33470__auto___33730 < len__33469__auto___33729)){
args__33476__auto__.push((arguments[i__33470__auto___33730]));

var G__33731 = (i__33470__auto___33730 + (1));
i__33470__auto___33730 = G__33731;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33728))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33728){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33728);
});})(g__33568__auto___33728))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__33568__auto___33728){
return (function (seq33686){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33686));
});})(g__33568__auto___33728))
;


var g__33568__auto___33732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__33568__auto___33732){
return (function cljs$spec$impl$gen$int(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33733 = arguments.length;
var i__33470__auto___33734 = (0);
while(true){
if((i__33470__auto___33734 < len__33469__auto___33733)){
args__33476__auto__.push((arguments[i__33470__auto___33734]));

var G__33735 = (i__33470__auto___33734 + (1));
i__33470__auto___33734 = G__33735;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33732))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33732){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33732);
});})(g__33568__auto___33732))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__33568__auto___33732){
return (function (seq33687){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33687));
});})(g__33568__auto___33732))
;


var g__33568__auto___33736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__33568__auto___33736){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33737 = arguments.length;
var i__33470__auto___33738 = (0);
while(true){
if((i__33470__auto___33738 < len__33469__auto___33737)){
args__33476__auto__.push((arguments[i__33470__auto___33738]));

var G__33739 = (i__33470__auto___33738 + (1));
i__33470__auto___33738 = G__33739;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33736))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33736){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33736);
});})(g__33568__auto___33736))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__33568__auto___33736){
return (function (seq33688){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33688));
});})(g__33568__auto___33736))
;


var g__33568__auto___33740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__33568__auto___33740){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33741 = arguments.length;
var i__33470__auto___33742 = (0);
while(true){
if((i__33470__auto___33742 < len__33469__auto___33741)){
args__33476__auto__.push((arguments[i__33470__auto___33742]));

var G__33743 = (i__33470__auto___33742 + (1));
i__33470__auto___33742 = G__33743;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33740))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33740){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33740);
});})(g__33568__auto___33740))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__33568__auto___33740){
return (function (seq33689){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33689));
});})(g__33568__auto___33740))
;


var g__33568__auto___33744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__33568__auto___33744){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33745 = arguments.length;
var i__33470__auto___33746 = (0);
while(true){
if((i__33470__auto___33746 < len__33469__auto___33745)){
args__33476__auto__.push((arguments[i__33470__auto___33746]));

var G__33747 = (i__33470__auto___33746 + (1));
i__33470__auto___33746 = G__33747;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33744))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33744){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33744);
});})(g__33568__auto___33744))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__33568__auto___33744){
return (function (seq33690){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33690));
});})(g__33568__auto___33744))
;


var g__33568__auto___33748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__33568__auto___33748){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33749 = arguments.length;
var i__33470__auto___33750 = (0);
while(true){
if((i__33470__auto___33750 < len__33469__auto___33749)){
args__33476__auto__.push((arguments[i__33470__auto___33750]));

var G__33751 = (i__33470__auto___33750 + (1));
i__33470__auto___33750 = G__33751;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33748))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33748){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33748);
});})(g__33568__auto___33748))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__33568__auto___33748){
return (function (seq33691){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33691));
});})(g__33568__auto___33748))
;


var g__33568__auto___33752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__33568__auto___33752){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33753 = arguments.length;
var i__33470__auto___33754 = (0);
while(true){
if((i__33470__auto___33754 < len__33469__auto___33753)){
args__33476__auto__.push((arguments[i__33470__auto___33754]));

var G__33755 = (i__33470__auto___33754 + (1));
i__33470__auto___33754 = G__33755;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33752))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33752){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33752);
});})(g__33568__auto___33752))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__33568__auto___33752){
return (function (seq33692){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33692));
});})(g__33568__auto___33752))
;


var g__33568__auto___33756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__33568__auto___33756){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33757 = arguments.length;
var i__33470__auto___33758 = (0);
while(true){
if((i__33470__auto___33758 < len__33469__auto___33757)){
args__33476__auto__.push((arguments[i__33470__auto___33758]));

var G__33759 = (i__33470__auto___33758 + (1));
i__33470__auto___33758 = G__33759;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33756))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33756){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33756);
});})(g__33568__auto___33756))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__33568__auto___33756){
return (function (seq33693){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33693));
});})(g__33568__auto___33756))
;


var g__33568__auto___33760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__33568__auto___33760){
return (function cljs$spec$impl$gen$string(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33761 = arguments.length;
var i__33470__auto___33762 = (0);
while(true){
if((i__33470__auto___33762 < len__33469__auto___33761)){
args__33476__auto__.push((arguments[i__33470__auto___33762]));

var G__33763 = (i__33470__auto___33762 + (1));
i__33470__auto___33762 = G__33763;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33760))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33760){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33760);
});})(g__33568__auto___33760))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__33568__auto___33760){
return (function (seq33694){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33694));
});})(g__33568__auto___33760))
;


var g__33568__auto___33764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__33568__auto___33764){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33765 = arguments.length;
var i__33470__auto___33766 = (0);
while(true){
if((i__33470__auto___33766 < len__33469__auto___33765)){
args__33476__auto__.push((arguments[i__33470__auto___33766]));

var G__33767 = (i__33470__auto___33766 + (1));
i__33470__auto___33766 = G__33767;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33764))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33764){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33764);
});})(g__33568__auto___33764))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__33568__auto___33764){
return (function (seq33695){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33695));
});})(g__33568__auto___33764))
;


var g__33568__auto___33768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__33568__auto___33768){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33769 = arguments.length;
var i__33470__auto___33770 = (0);
while(true){
if((i__33470__auto___33770 < len__33469__auto___33769)){
args__33476__auto__.push((arguments[i__33470__auto___33770]));

var G__33771 = (i__33470__auto___33770 + (1));
i__33470__auto___33770 = G__33771;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33768))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33768){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33768);
});})(g__33568__auto___33768))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__33568__auto___33768){
return (function (seq33696){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33696));
});})(g__33568__auto___33768))
;


var g__33568__auto___33772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__33568__auto___33772){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33773 = arguments.length;
var i__33470__auto___33774 = (0);
while(true){
if((i__33470__auto___33774 < len__33469__auto___33773)){
args__33476__auto__.push((arguments[i__33470__auto___33774]));

var G__33775 = (i__33470__auto___33774 + (1));
i__33470__auto___33774 = G__33775;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33772))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33772){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33772);
});})(g__33568__auto___33772))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__33568__auto___33772){
return (function (seq33697){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33697));
});})(g__33568__auto___33772))
;


var g__33568__auto___33776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__33568__auto___33776){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33777 = arguments.length;
var i__33470__auto___33778 = (0);
while(true){
if((i__33470__auto___33778 < len__33469__auto___33777)){
args__33476__auto__.push((arguments[i__33470__auto___33778]));

var G__33779 = (i__33470__auto___33778 + (1));
i__33470__auto___33778 = G__33779;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33776))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33776){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33776);
});})(g__33568__auto___33776))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__33568__auto___33776){
return (function (seq33698){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33698));
});})(g__33568__auto___33776))
;


var g__33568__auto___33780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__33568__auto___33780){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33781 = arguments.length;
var i__33470__auto___33782 = (0);
while(true){
if((i__33470__auto___33782 < len__33469__auto___33781)){
args__33476__auto__.push((arguments[i__33470__auto___33782]));

var G__33783 = (i__33470__auto___33782 + (1));
i__33470__auto___33782 = G__33783;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});})(g__33568__auto___33780))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33568__auto___33780){
return (function (args){
return cljs.core.deref.call(null,g__33568__auto___33780);
});})(g__33568__auto___33780))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__33568__auto___33780){
return (function (seq33699){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33699));
});})(g__33568__auto___33780))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__33476__auto__ = [];
var len__33469__auto___33786 = arguments.length;
var i__33470__auto___33787 = (0);
while(true){
if((i__33470__auto___33787 < len__33469__auto___33786)){
args__33476__auto__.push((arguments[i__33470__auto___33787]));

var G__33788 = (i__33470__auto___33787 + (1));
i__33470__auto___33787 = G__33788;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33784_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33784_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33785){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33785));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__33789_SHARP_){
return (new Date(p1__33789_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1514286303474