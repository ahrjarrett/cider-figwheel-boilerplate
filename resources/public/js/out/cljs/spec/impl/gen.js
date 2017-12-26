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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__12799__auto__,writer__12800__auto__,opt__12801__auto__){
return cljs.core._write.call(null,writer__12800__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__13337__auto__ = [];
var len__13330__auto___33861 = arguments.length;
var i__13331__auto___33862 = (0);
while(true){
if((i__13331__auto___33862 < len__13330__auto___33861)){
args__13337__auto__.push((arguments[i__13331__auto___33862]));

var G__33863 = (i__13331__auto___33862 + (1));
i__13331__auto___33862 = G__33863;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq33860){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33860));
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
var args__13337__auto__ = [];
var len__13330__auto___33865 = arguments.length;
var i__13331__auto___33866 = (0);
while(true){
if((i__13331__auto___33866 < len__13330__auto___33865)){
args__13337__auto__.push((arguments[i__13331__auto___33866]));

var G__33867 = (i__13331__auto___33866 + (1));
i__13331__auto___33866 = G__33867;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq33864){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33864));
});

var g_QMARK__33868 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_33869 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33868){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33868))
,null));
var mkg_33870 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__33868,g_33869){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__33868,g_33869))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__33868,g_33869,mkg_33870){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__33868).call(null,x);
});})(g_QMARK__33868,g_33869,mkg_33870))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__33868,g_33869,mkg_33870){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_33870).call(null,gfn);
});})(g_QMARK__33868,g_33869,mkg_33870))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__33868,g_33869,mkg_33870){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_33869).call(null,generator);
});})(g_QMARK__33868,g_33869,mkg_33870))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__13414__auto___33888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__13414__auto___33888){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33889 = arguments.length;
var i__13331__auto___33890 = (0);
while(true){
if((i__13331__auto___33890 < len__13330__auto___33889)){
args__13337__auto__.push((arguments[i__13331__auto___33890]));

var G__33891 = (i__13331__auto___33890 + (1));
i__13331__auto___33890 = G__33891;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33888))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33888){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33888),args);
});})(g__13414__auto___33888))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__13414__auto___33888){
return (function (seq33871){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33871));
});})(g__13414__auto___33888))
;


var g__13414__auto___33892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__13414__auto___33892){
return (function cljs$spec$impl$gen$list(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33893 = arguments.length;
var i__13331__auto___33894 = (0);
while(true){
if((i__13331__auto___33894 < len__13330__auto___33893)){
args__13337__auto__.push((arguments[i__13331__auto___33894]));

var G__33895 = (i__13331__auto___33894 + (1));
i__13331__auto___33894 = G__33895;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33892))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33892){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33892),args);
});})(g__13414__auto___33892))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__13414__auto___33892){
return (function (seq33872){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33872));
});})(g__13414__auto___33892))
;


var g__13414__auto___33896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__13414__auto___33896){
return (function cljs$spec$impl$gen$map(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33897 = arguments.length;
var i__13331__auto___33898 = (0);
while(true){
if((i__13331__auto___33898 < len__13330__auto___33897)){
args__13337__auto__.push((arguments[i__13331__auto___33898]));

var G__33899 = (i__13331__auto___33898 + (1));
i__13331__auto___33898 = G__33899;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33896))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33896){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33896),args);
});})(g__13414__auto___33896))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__13414__auto___33896){
return (function (seq33873){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33873));
});})(g__13414__auto___33896))
;


var g__13414__auto___33900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__13414__auto___33900){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33901 = arguments.length;
var i__13331__auto___33902 = (0);
while(true){
if((i__13331__auto___33902 < len__13330__auto___33901)){
args__13337__auto__.push((arguments[i__13331__auto___33902]));

var G__33903 = (i__13331__auto___33902 + (1));
i__13331__auto___33902 = G__33903;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33900))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33900){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33900),args);
});})(g__13414__auto___33900))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__13414__auto___33900){
return (function (seq33874){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33874));
});})(g__13414__auto___33900))
;


var g__13414__auto___33904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__13414__auto___33904){
return (function cljs$spec$impl$gen$set(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33905 = arguments.length;
var i__13331__auto___33906 = (0);
while(true){
if((i__13331__auto___33906 < len__13330__auto___33905)){
args__13337__auto__.push((arguments[i__13331__auto___33906]));

var G__33907 = (i__13331__auto___33906 + (1));
i__13331__auto___33906 = G__33907;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33904))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33904){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33904),args);
});})(g__13414__auto___33904))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__13414__auto___33904){
return (function (seq33875){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33875));
});})(g__13414__auto___33904))
;


var g__13414__auto___33908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__13414__auto___33908){
return (function cljs$spec$impl$gen$vector(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33909 = arguments.length;
var i__13331__auto___33910 = (0);
while(true){
if((i__13331__auto___33910 < len__13330__auto___33909)){
args__13337__auto__.push((arguments[i__13331__auto___33910]));

var G__33911 = (i__13331__auto___33910 + (1));
i__13331__auto___33910 = G__33911;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33908))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33908){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33908),args);
});})(g__13414__auto___33908))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__13414__auto___33908){
return (function (seq33876){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33876));
});})(g__13414__auto___33908))
;


var g__13414__auto___33912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__13414__auto___33912){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33913 = arguments.length;
var i__13331__auto___33914 = (0);
while(true){
if((i__13331__auto___33914 < len__13330__auto___33913)){
args__13337__auto__.push((arguments[i__13331__auto___33914]));

var G__33915 = (i__13331__auto___33914 + (1));
i__13331__auto___33914 = G__33915;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33912))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33912),args);
});})(g__13414__auto___33912))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__13414__auto___33912){
return (function (seq33877){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33877));
});})(g__13414__auto___33912))
;


var g__13414__auto___33916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__13414__auto___33916){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33917 = arguments.length;
var i__13331__auto___33918 = (0);
while(true){
if((i__13331__auto___33918 < len__13330__auto___33917)){
args__13337__auto__.push((arguments[i__13331__auto___33918]));

var G__33919 = (i__13331__auto___33918 + (1));
i__13331__auto___33918 = G__33919;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33916))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33916){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33916),args);
});})(g__13414__auto___33916))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__13414__auto___33916){
return (function (seq33878){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33878));
});})(g__13414__auto___33916))
;


var g__13414__auto___33920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__13414__auto___33920){
return (function cljs$spec$impl$gen$elements(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33921 = arguments.length;
var i__13331__auto___33922 = (0);
while(true){
if((i__13331__auto___33922 < len__13330__auto___33921)){
args__13337__auto__.push((arguments[i__13331__auto___33922]));

var G__33923 = (i__13331__auto___33922 + (1));
i__13331__auto___33922 = G__33923;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33920))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33920){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33920),args);
});})(g__13414__auto___33920))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__13414__auto___33920){
return (function (seq33879){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33879));
});})(g__13414__auto___33920))
;


var g__13414__auto___33924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__13414__auto___33924){
return (function cljs$spec$impl$gen$bind(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33925 = arguments.length;
var i__13331__auto___33926 = (0);
while(true){
if((i__13331__auto___33926 < len__13330__auto___33925)){
args__13337__auto__.push((arguments[i__13331__auto___33926]));

var G__33927 = (i__13331__auto___33926 + (1));
i__13331__auto___33926 = G__33927;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33924))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33924),args);
});})(g__13414__auto___33924))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__13414__auto___33924){
return (function (seq33880){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33880));
});})(g__13414__auto___33924))
;


var g__13414__auto___33928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__13414__auto___33928){
return (function cljs$spec$impl$gen$choose(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33929 = arguments.length;
var i__13331__auto___33930 = (0);
while(true){
if((i__13331__auto___33930 < len__13330__auto___33929)){
args__13337__auto__.push((arguments[i__13331__auto___33930]));

var G__33931 = (i__13331__auto___33930 + (1));
i__13331__auto___33930 = G__33931;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33928))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33928),args);
});})(g__13414__auto___33928))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__13414__auto___33928){
return (function (seq33881){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33881));
});})(g__13414__auto___33928))
;


var g__13414__auto___33932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__13414__auto___33932){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33933 = arguments.length;
var i__13331__auto___33934 = (0);
while(true){
if((i__13331__auto___33934 < len__13330__auto___33933)){
args__13337__auto__.push((arguments[i__13331__auto___33934]));

var G__33935 = (i__13331__auto___33934 + (1));
i__13331__auto___33934 = G__33935;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33932))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33932),args);
});})(g__13414__auto___33932))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__13414__auto___33932){
return (function (seq33882){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33882));
});})(g__13414__auto___33932))
;


var g__13414__auto___33936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__13414__auto___33936){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33937 = arguments.length;
var i__13331__auto___33938 = (0);
while(true){
if((i__13331__auto___33938 < len__13330__auto___33937)){
args__13337__auto__.push((arguments[i__13331__auto___33938]));

var G__33939 = (i__13331__auto___33938 + (1));
i__13331__auto___33938 = G__33939;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33936))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33936),args);
});})(g__13414__auto___33936))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__13414__auto___33936){
return (function (seq33883){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33883));
});})(g__13414__auto___33936))
;


var g__13414__auto___33940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__13414__auto___33940){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33941 = arguments.length;
var i__13331__auto___33942 = (0);
while(true){
if((i__13331__auto___33942 < len__13330__auto___33941)){
args__13337__auto__.push((arguments[i__13331__auto___33942]));

var G__33943 = (i__13331__auto___33942 + (1));
i__13331__auto___33942 = G__33943;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33940))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33940),args);
});})(g__13414__auto___33940))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__13414__auto___33940){
return (function (seq33884){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33884));
});})(g__13414__auto___33940))
;


var g__13414__auto___33944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__13414__auto___33944){
return (function cljs$spec$impl$gen$sample(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33945 = arguments.length;
var i__13331__auto___33946 = (0);
while(true){
if((i__13331__auto___33946 < len__13330__auto___33945)){
args__13337__auto__.push((arguments[i__13331__auto___33946]));

var G__33947 = (i__13331__auto___33946 + (1));
i__13331__auto___33946 = G__33947;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33944))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33944),args);
});})(g__13414__auto___33944))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__13414__auto___33944){
return (function (seq33885){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33885));
});})(g__13414__auto___33944))
;


var g__13414__auto___33948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__13414__auto___33948){
return (function cljs$spec$impl$gen$return(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33949 = arguments.length;
var i__13331__auto___33950 = (0);
while(true){
if((i__13331__auto___33950 < len__13330__auto___33949)){
args__13337__auto__.push((arguments[i__13331__auto___33950]));

var G__33951 = (i__13331__auto___33950 + (1));
i__13331__auto___33950 = G__33951;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33948))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33948),args);
});})(g__13414__auto___33948))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__13414__auto___33948){
return (function (seq33886){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33886));
});})(g__13414__auto___33948))
;


var g__13414__auto___33952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__13414__auto___33952){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33953 = arguments.length;
var i__13331__auto___33954 = (0);
while(true){
if((i__13331__auto___33954 < len__13330__auto___33953)){
args__13337__auto__.push((arguments[i__13331__auto___33954]));

var G__33955 = (i__13331__auto___33954 + (1));
i__13331__auto___33954 = G__33955;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13414__auto___33952))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13414__auto___33952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13414__auto___33952),args);
});})(g__13414__auto___33952))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13414__auto___33952){
return (function (seq33887){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33887));
});})(g__13414__auto___33952))
;

var g__13427__auto___33977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__13427__auto___33977){
return (function cljs$spec$impl$gen$any(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33978 = arguments.length;
var i__13331__auto___33979 = (0);
while(true){
if((i__13331__auto___33979 < len__13330__auto___33978)){
args__13337__auto__.push((arguments[i__13331__auto___33979]));

var G__33980 = (i__13331__auto___33979 + (1));
i__13331__auto___33979 = G__33980;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33977))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33977){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33977);
});})(g__13427__auto___33977))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__13427__auto___33977){
return (function (seq33956){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33956));
});})(g__13427__auto___33977))
;


var g__13427__auto___33981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__13427__auto___33981){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33982 = arguments.length;
var i__13331__auto___33983 = (0);
while(true){
if((i__13331__auto___33983 < len__13330__auto___33982)){
args__13337__auto__.push((arguments[i__13331__auto___33983]));

var G__33984 = (i__13331__auto___33983 + (1));
i__13331__auto___33983 = G__33984;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33981))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33981){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33981);
});})(g__13427__auto___33981))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__13427__auto___33981){
return (function (seq33957){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33957));
});})(g__13427__auto___33981))
;


var g__13427__auto___33985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__13427__auto___33985){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33986 = arguments.length;
var i__13331__auto___33987 = (0);
while(true){
if((i__13331__auto___33987 < len__13330__auto___33986)){
args__13337__auto__.push((arguments[i__13331__auto___33987]));

var G__33988 = (i__13331__auto___33987 + (1));
i__13331__auto___33987 = G__33988;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33985))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33985){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33985);
});})(g__13427__auto___33985))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__13427__auto___33985){
return (function (seq33958){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33958));
});})(g__13427__auto___33985))
;


var g__13427__auto___33989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__13427__auto___33989){
return (function cljs$spec$impl$gen$char(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33990 = arguments.length;
var i__13331__auto___33991 = (0);
while(true){
if((i__13331__auto___33991 < len__13330__auto___33990)){
args__13337__auto__.push((arguments[i__13331__auto___33991]));

var G__33992 = (i__13331__auto___33991 + (1));
i__13331__auto___33991 = G__33992;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33989))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33989){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33989);
});})(g__13427__auto___33989))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__13427__auto___33989){
return (function (seq33959){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33959));
});})(g__13427__auto___33989))
;


var g__13427__auto___33993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__13427__auto___33993){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33994 = arguments.length;
var i__13331__auto___33995 = (0);
while(true){
if((i__13331__auto___33995 < len__13330__auto___33994)){
args__13337__auto__.push((arguments[i__13331__auto___33995]));

var G__33996 = (i__13331__auto___33995 + (1));
i__13331__auto___33995 = G__33996;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33993))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33993){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33993);
});})(g__13427__auto___33993))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__13427__auto___33993){
return (function (seq33960){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33960));
});})(g__13427__auto___33993))
;


var g__13427__auto___33997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__13427__auto___33997){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__13337__auto__ = [];
var len__13330__auto___33998 = arguments.length;
var i__13331__auto___33999 = (0);
while(true){
if((i__13331__auto___33999 < len__13330__auto___33998)){
args__13337__auto__.push((arguments[i__13331__auto___33999]));

var G__34000 = (i__13331__auto___33999 + (1));
i__13331__auto___33999 = G__34000;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___33997))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___33997){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___33997);
});})(g__13427__auto___33997))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__13427__auto___33997){
return (function (seq33961){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33961));
});})(g__13427__auto___33997))
;


var g__13427__auto___34001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__13427__auto___34001){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34002 = arguments.length;
var i__13331__auto___34003 = (0);
while(true){
if((i__13331__auto___34003 < len__13330__auto___34002)){
args__13337__auto__.push((arguments[i__13331__auto___34003]));

var G__34004 = (i__13331__auto___34003 + (1));
i__13331__auto___34003 = G__34004;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34001))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34001){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34001);
});})(g__13427__auto___34001))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__13427__auto___34001){
return (function (seq33962){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33962));
});})(g__13427__auto___34001))
;


var g__13427__auto___34005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__13427__auto___34005){
return (function cljs$spec$impl$gen$double(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34006 = arguments.length;
var i__13331__auto___34007 = (0);
while(true){
if((i__13331__auto___34007 < len__13330__auto___34006)){
args__13337__auto__.push((arguments[i__13331__auto___34007]));

var G__34008 = (i__13331__auto___34007 + (1));
i__13331__auto___34007 = G__34008;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34005))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34005){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34005);
});})(g__13427__auto___34005))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__13427__auto___34005){
return (function (seq33963){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33963));
});})(g__13427__auto___34005))
;


var g__13427__auto___34009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__13427__auto___34009){
return (function cljs$spec$impl$gen$int(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34010 = arguments.length;
var i__13331__auto___34011 = (0);
while(true){
if((i__13331__auto___34011 < len__13330__auto___34010)){
args__13337__auto__.push((arguments[i__13331__auto___34011]));

var G__34012 = (i__13331__auto___34011 + (1));
i__13331__auto___34011 = G__34012;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34009))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34009){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34009);
});})(g__13427__auto___34009))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__13427__auto___34009){
return (function (seq33964){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33964));
});})(g__13427__auto___34009))
;


var g__13427__auto___34013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__13427__auto___34013){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34014 = arguments.length;
var i__13331__auto___34015 = (0);
while(true){
if((i__13331__auto___34015 < len__13330__auto___34014)){
args__13337__auto__.push((arguments[i__13331__auto___34015]));

var G__34016 = (i__13331__auto___34015 + (1));
i__13331__auto___34015 = G__34016;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34013))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34013){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34013);
});})(g__13427__auto___34013))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__13427__auto___34013){
return (function (seq33965){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33965));
});})(g__13427__auto___34013))
;


var g__13427__auto___34017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__13427__auto___34017){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34018 = arguments.length;
var i__13331__auto___34019 = (0);
while(true){
if((i__13331__auto___34019 < len__13330__auto___34018)){
args__13337__auto__.push((arguments[i__13331__auto___34019]));

var G__34020 = (i__13331__auto___34019 + (1));
i__13331__auto___34019 = G__34020;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34017))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34017){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34017);
});})(g__13427__auto___34017))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__13427__auto___34017){
return (function (seq33966){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33966));
});})(g__13427__auto___34017))
;


var g__13427__auto___34021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__13427__auto___34021){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34022 = arguments.length;
var i__13331__auto___34023 = (0);
while(true){
if((i__13331__auto___34023 < len__13330__auto___34022)){
args__13337__auto__.push((arguments[i__13331__auto___34023]));

var G__34024 = (i__13331__auto___34023 + (1));
i__13331__auto___34023 = G__34024;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34021))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34021){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34021);
});})(g__13427__auto___34021))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__13427__auto___34021){
return (function (seq33967){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33967));
});})(g__13427__auto___34021))
;


var g__13427__auto___34025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__13427__auto___34025){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34026 = arguments.length;
var i__13331__auto___34027 = (0);
while(true){
if((i__13331__auto___34027 < len__13330__auto___34026)){
args__13337__auto__.push((arguments[i__13331__auto___34027]));

var G__34028 = (i__13331__auto___34027 + (1));
i__13331__auto___34027 = G__34028;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34025))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34025){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34025);
});})(g__13427__auto___34025))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__13427__auto___34025){
return (function (seq33968){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33968));
});})(g__13427__auto___34025))
;


var g__13427__auto___34029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__13427__auto___34029){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34030 = arguments.length;
var i__13331__auto___34031 = (0);
while(true){
if((i__13331__auto___34031 < len__13330__auto___34030)){
args__13337__auto__.push((arguments[i__13331__auto___34031]));

var G__34032 = (i__13331__auto___34031 + (1));
i__13331__auto___34031 = G__34032;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34029))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34029){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34029);
});})(g__13427__auto___34029))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__13427__auto___34029){
return (function (seq33969){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33969));
});})(g__13427__auto___34029))
;


var g__13427__auto___34033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__13427__auto___34033){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34034 = arguments.length;
var i__13331__auto___34035 = (0);
while(true){
if((i__13331__auto___34035 < len__13330__auto___34034)){
args__13337__auto__.push((arguments[i__13331__auto___34035]));

var G__34036 = (i__13331__auto___34035 + (1));
i__13331__auto___34035 = G__34036;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34033))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34033){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34033);
});})(g__13427__auto___34033))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__13427__auto___34033){
return (function (seq33970){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33970));
});})(g__13427__auto___34033))
;


var g__13427__auto___34037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__13427__auto___34037){
return (function cljs$spec$impl$gen$string(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34038 = arguments.length;
var i__13331__auto___34039 = (0);
while(true){
if((i__13331__auto___34039 < len__13330__auto___34038)){
args__13337__auto__.push((arguments[i__13331__auto___34039]));

var G__34040 = (i__13331__auto___34039 + (1));
i__13331__auto___34039 = G__34040;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34037))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34037){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34037);
});})(g__13427__auto___34037))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__13427__auto___34037){
return (function (seq33971){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33971));
});})(g__13427__auto___34037))
;


var g__13427__auto___34041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__13427__auto___34041){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34042 = arguments.length;
var i__13331__auto___34043 = (0);
while(true){
if((i__13331__auto___34043 < len__13330__auto___34042)){
args__13337__auto__.push((arguments[i__13331__auto___34043]));

var G__34044 = (i__13331__auto___34043 + (1));
i__13331__auto___34043 = G__34044;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34041))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34041){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34041);
});})(g__13427__auto___34041))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__13427__auto___34041){
return (function (seq33972){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33972));
});})(g__13427__auto___34041))
;


var g__13427__auto___34045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__13427__auto___34045){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34046 = arguments.length;
var i__13331__auto___34047 = (0);
while(true){
if((i__13331__auto___34047 < len__13330__auto___34046)){
args__13337__auto__.push((arguments[i__13331__auto___34047]));

var G__34048 = (i__13331__auto___34047 + (1));
i__13331__auto___34047 = G__34048;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34045))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34045){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34045);
});})(g__13427__auto___34045))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__13427__auto___34045){
return (function (seq33973){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33973));
});})(g__13427__auto___34045))
;


var g__13427__auto___34049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__13427__auto___34049){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34050 = arguments.length;
var i__13331__auto___34051 = (0);
while(true){
if((i__13331__auto___34051 < len__13330__auto___34050)){
args__13337__auto__.push((arguments[i__13331__auto___34051]));

var G__34052 = (i__13331__auto___34051 + (1));
i__13331__auto___34051 = G__34052;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34049))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34049){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34049);
});})(g__13427__auto___34049))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__13427__auto___34049){
return (function (seq33974){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33974));
});})(g__13427__auto___34049))
;


var g__13427__auto___34053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__13427__auto___34053){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34054 = arguments.length;
var i__13331__auto___34055 = (0);
while(true){
if((i__13331__auto___34055 < len__13330__auto___34054)){
args__13337__auto__.push((arguments[i__13331__auto___34055]));

var G__34056 = (i__13331__auto___34055 + (1));
i__13331__auto___34055 = G__34056;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34053))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34053){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34053);
});})(g__13427__auto___34053))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__13427__auto___34053){
return (function (seq33975){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33975));
});})(g__13427__auto___34053))
;


var g__13427__auto___34057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__13427__auto___34057){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34058 = arguments.length;
var i__13331__auto___34059 = (0);
while(true){
if((i__13331__auto___34059 < len__13330__auto___34058)){
args__13337__auto__.push((arguments[i__13331__auto___34059]));

var G__34060 = (i__13331__auto___34059 + (1));
i__13331__auto___34059 = G__34060;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});})(g__13427__auto___34057))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13427__auto___34057){
return (function (args){
return cljs.core.deref.call(null,g__13427__auto___34057);
});})(g__13427__auto___34057))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__13427__auto___34057){
return (function (seq33976){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33976));
});})(g__13427__auto___34057))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__13337__auto__ = [];
var len__13330__auto___34063 = arguments.length;
var i__13331__auto___34064 = (0);
while(true){
if((i__13331__auto___34064 < len__13330__auto___34063)){
args__13337__auto__.push((arguments[i__13331__auto___34064]));

var G__34065 = (i__13331__auto___34064 + (1));
i__13331__auto___34064 = G__34065;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__34061_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__34061_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq34062){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34062));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__34066_SHARP_){
return (new Date(p1__34066_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1514283699939