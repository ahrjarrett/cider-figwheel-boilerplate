// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__12147__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__12147__auto__){
return or__12147__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__12147__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
var or__12147__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__12147__auto____$1)){
return or__12147__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40220_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40220_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40225 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40226 = null;
var count__40227 = (0);
var i__40228 = (0);
while(true){
if((i__40228 < count__40227)){
var n = cljs.core._nth.call(null,chunk__40226,i__40228);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40229 = seq__40225;
var G__40230 = chunk__40226;
var G__40231 = count__40227;
var G__40232 = (i__40228 + (1));
seq__40225 = G__40229;
chunk__40226 = G__40230;
count__40227 = G__40231;
i__40228 = G__40232;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__40225);
if(temp__6503__auto__){
var seq__40225__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40225__$1)){
var c__13050__auto__ = cljs.core.chunk_first.call(null,seq__40225__$1);
var G__40233 = cljs.core.chunk_rest.call(null,seq__40225__$1);
var G__40234 = c__13050__auto__;
var G__40235 = cljs.core.count.call(null,c__13050__auto__);
var G__40236 = (0);
seq__40225 = G__40233;
chunk__40226 = G__40234;
count__40227 = G__40235;
i__40228 = G__40236;
continue;
} else {
var n = cljs.core.first.call(null,seq__40225__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40237 = cljs.core.next.call(null,seq__40225__$1);
var G__40238 = null;
var G__40239 = (0);
var G__40240 = (0);
seq__40225 = G__40237;
chunk__40226 = G__40238;
count__40227 = G__40239;
i__40228 = G__40240;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40249){
var vec__40250 = p__40249;
var _ = cljs.core.nth.call(null,vec__40250,(0),null);
var v = cljs.core.nth.call(null,vec__40250,(1),null);
var and__12135__auto__ = v;
if(cljs.core.truth_(and__12135__auto__)){
return v.call(null,dep);
} else {
return and__12135__auto__;
}
}),cljs.core.filter.call(null,(function (p__40253){
var vec__40254 = p__40253;
var k = cljs.core.nth.call(null,vec__40254,(0),null);
var v = cljs.core.nth.call(null,vec__40254,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40307_40318 = cljs.core.seq.call(null,deps);
var chunk__40308_40319 = null;
var count__40309_40320 = (0);
var i__40310_40321 = (0);
while(true){
if((i__40310_40321 < count__40309_40320)){
var dep_40322 = cljs.core._nth.call(null,chunk__40308_40319,i__40310_40321);
if(cljs.core.truth_((function (){var and__12135__auto__ = dep_40322;
if(cljs.core.truth_(and__12135__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40322));
} else {
return and__12135__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40322,(depth + (1)),state);
} else {
}

var G__40323 = seq__40307_40318;
var G__40324 = chunk__40308_40319;
var G__40325 = count__40309_40320;
var G__40326 = (i__40310_40321 + (1));
seq__40307_40318 = G__40323;
chunk__40308_40319 = G__40324;
count__40309_40320 = G__40325;
i__40310_40321 = G__40326;
continue;
} else {
var temp__6503__auto___40327 = cljs.core.seq.call(null,seq__40307_40318);
if(temp__6503__auto___40327){
var seq__40307_40328__$1 = temp__6503__auto___40327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40307_40328__$1)){
var c__13050__auto___40329 = cljs.core.chunk_first.call(null,seq__40307_40328__$1);
var G__40330 = cljs.core.chunk_rest.call(null,seq__40307_40328__$1);
var G__40331 = c__13050__auto___40329;
var G__40332 = cljs.core.count.call(null,c__13050__auto___40329);
var G__40333 = (0);
seq__40307_40318 = G__40330;
chunk__40308_40319 = G__40331;
count__40309_40320 = G__40332;
i__40310_40321 = G__40333;
continue;
} else {
var dep_40334 = cljs.core.first.call(null,seq__40307_40328__$1);
if(cljs.core.truth_((function (){var and__12135__auto__ = dep_40334;
if(cljs.core.truth_(and__12135__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40334));
} else {
return and__12135__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40334,(depth + (1)),state);
} else {
}

var G__40335 = cljs.core.next.call(null,seq__40307_40328__$1);
var G__40336 = null;
var G__40337 = (0);
var G__40338 = (0);
seq__40307_40318 = G__40335;
chunk__40308_40319 = G__40336;
count__40309_40320 = G__40337;
i__40310_40321 = G__40338;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40311){
var vec__40315 = p__40311;
var seq__40316 = cljs.core.seq.call(null,vec__40315);
var first__40317 = cljs.core.first.call(null,seq__40316);
var seq__40316__$1 = cljs.core.next.call(null,seq__40316);
var x = first__40317;
var xs = seq__40316__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40315,seq__40316,first__40317,seq__40316__$1,x,xs,get_deps__$1){
return (function (p1__40257_SHARP_){
return clojure.set.difference.call(null,p1__40257_SHARP_,x);
});})(vec__40315,seq__40316,first__40317,seq__40316__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40351 = cljs.core.seq.call(null,provides);
var chunk__40352 = null;
var count__40353 = (0);
var i__40354 = (0);
while(true){
if((i__40354 < count__40353)){
var prov = cljs.core._nth.call(null,chunk__40352,i__40354);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40355_40363 = cljs.core.seq.call(null,requires);
var chunk__40356_40364 = null;
var count__40357_40365 = (0);
var i__40358_40366 = (0);
while(true){
if((i__40358_40366 < count__40357_40365)){
var req_40367 = cljs.core._nth.call(null,chunk__40356_40364,i__40358_40366);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40367,prov);

var G__40368 = seq__40355_40363;
var G__40369 = chunk__40356_40364;
var G__40370 = count__40357_40365;
var G__40371 = (i__40358_40366 + (1));
seq__40355_40363 = G__40368;
chunk__40356_40364 = G__40369;
count__40357_40365 = G__40370;
i__40358_40366 = G__40371;
continue;
} else {
var temp__6503__auto___40372 = cljs.core.seq.call(null,seq__40355_40363);
if(temp__6503__auto___40372){
var seq__40355_40373__$1 = temp__6503__auto___40372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40355_40373__$1)){
var c__13050__auto___40374 = cljs.core.chunk_first.call(null,seq__40355_40373__$1);
var G__40375 = cljs.core.chunk_rest.call(null,seq__40355_40373__$1);
var G__40376 = c__13050__auto___40374;
var G__40377 = cljs.core.count.call(null,c__13050__auto___40374);
var G__40378 = (0);
seq__40355_40363 = G__40375;
chunk__40356_40364 = G__40376;
count__40357_40365 = G__40377;
i__40358_40366 = G__40378;
continue;
} else {
var req_40379 = cljs.core.first.call(null,seq__40355_40373__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40379,prov);

var G__40380 = cljs.core.next.call(null,seq__40355_40373__$1);
var G__40381 = null;
var G__40382 = (0);
var G__40383 = (0);
seq__40355_40363 = G__40380;
chunk__40356_40364 = G__40381;
count__40357_40365 = G__40382;
i__40358_40366 = G__40383;
continue;
}
} else {
}
}
break;
}

var G__40384 = seq__40351;
var G__40385 = chunk__40352;
var G__40386 = count__40353;
var G__40387 = (i__40354 + (1));
seq__40351 = G__40384;
chunk__40352 = G__40385;
count__40353 = G__40386;
i__40354 = G__40387;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__40351);
if(temp__6503__auto__){
var seq__40351__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40351__$1)){
var c__13050__auto__ = cljs.core.chunk_first.call(null,seq__40351__$1);
var G__40388 = cljs.core.chunk_rest.call(null,seq__40351__$1);
var G__40389 = c__13050__auto__;
var G__40390 = cljs.core.count.call(null,c__13050__auto__);
var G__40391 = (0);
seq__40351 = G__40388;
chunk__40352 = G__40389;
count__40353 = G__40390;
i__40354 = G__40391;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40351__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40359_40392 = cljs.core.seq.call(null,requires);
var chunk__40360_40393 = null;
var count__40361_40394 = (0);
var i__40362_40395 = (0);
while(true){
if((i__40362_40395 < count__40361_40394)){
var req_40396 = cljs.core._nth.call(null,chunk__40360_40393,i__40362_40395);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40396,prov);

var G__40397 = seq__40359_40392;
var G__40398 = chunk__40360_40393;
var G__40399 = count__40361_40394;
var G__40400 = (i__40362_40395 + (1));
seq__40359_40392 = G__40397;
chunk__40360_40393 = G__40398;
count__40361_40394 = G__40399;
i__40362_40395 = G__40400;
continue;
} else {
var temp__6503__auto___40401__$1 = cljs.core.seq.call(null,seq__40359_40392);
if(temp__6503__auto___40401__$1){
var seq__40359_40402__$1 = temp__6503__auto___40401__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40359_40402__$1)){
var c__13050__auto___40403 = cljs.core.chunk_first.call(null,seq__40359_40402__$1);
var G__40404 = cljs.core.chunk_rest.call(null,seq__40359_40402__$1);
var G__40405 = c__13050__auto___40403;
var G__40406 = cljs.core.count.call(null,c__13050__auto___40403);
var G__40407 = (0);
seq__40359_40392 = G__40404;
chunk__40360_40393 = G__40405;
count__40361_40394 = G__40406;
i__40362_40395 = G__40407;
continue;
} else {
var req_40408 = cljs.core.first.call(null,seq__40359_40402__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40408,prov);

var G__40409 = cljs.core.next.call(null,seq__40359_40402__$1);
var G__40410 = null;
var G__40411 = (0);
var G__40412 = (0);
seq__40359_40392 = G__40409;
chunk__40360_40393 = G__40410;
count__40361_40394 = G__40411;
i__40362_40395 = G__40412;
continue;
}
} else {
}
}
break;
}

var G__40413 = cljs.core.next.call(null,seq__40351__$1);
var G__40414 = null;
var G__40415 = (0);
var G__40416 = (0);
seq__40351 = G__40413;
chunk__40352 = G__40414;
count__40353 = G__40415;
i__40354 = G__40416;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40421_40425 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40422_40426 = null;
var count__40423_40427 = (0);
var i__40424_40428 = (0);
while(true){
if((i__40424_40428 < count__40423_40427)){
var ns_40429 = cljs.core._nth.call(null,chunk__40422_40426,i__40424_40428);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40429);

var G__40430 = seq__40421_40425;
var G__40431 = chunk__40422_40426;
var G__40432 = count__40423_40427;
var G__40433 = (i__40424_40428 + (1));
seq__40421_40425 = G__40430;
chunk__40422_40426 = G__40431;
count__40423_40427 = G__40432;
i__40424_40428 = G__40433;
continue;
} else {
var temp__6503__auto___40434 = cljs.core.seq.call(null,seq__40421_40425);
if(temp__6503__auto___40434){
var seq__40421_40435__$1 = temp__6503__auto___40434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40421_40435__$1)){
var c__13050__auto___40436 = cljs.core.chunk_first.call(null,seq__40421_40435__$1);
var G__40437 = cljs.core.chunk_rest.call(null,seq__40421_40435__$1);
var G__40438 = c__13050__auto___40436;
var G__40439 = cljs.core.count.call(null,c__13050__auto___40436);
var G__40440 = (0);
seq__40421_40425 = G__40437;
chunk__40422_40426 = G__40438;
count__40423_40427 = G__40439;
i__40424_40428 = G__40440;
continue;
} else {
var ns_40441 = cljs.core.first.call(null,seq__40421_40435__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40441);

var G__40442 = cljs.core.next.call(null,seq__40421_40435__$1);
var G__40443 = null;
var G__40444 = (0);
var G__40445 = (0);
seq__40421_40425 = G__40442;
chunk__40422_40426 = G__40443;
count__40423_40427 = G__40444;
i__40424_40428 = G__40445;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__12147__auto__ = goog.require__;
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40446__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40447__i = 0, G__40447__a = new Array(arguments.length -  0);
while (G__40447__i < G__40447__a.length) {G__40447__a[G__40447__i] = arguments[G__40447__i + 0]; ++G__40447__i;}
  args = new cljs.core.IndexedSeq(G__40447__a,0);
} 
return G__40446__delegate.call(this,args);};
G__40446.cljs$lang$maxFixedArity = 0;
G__40446.cljs$lang$applyTo = (function (arglist__40448){
var args = cljs.core.seq(arglist__40448);
return G__40446__delegate(args);
});
G__40446.cljs$core$IFn$_invoke$arity$variadic = G__40446__delegate;
return G__40446;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__40449_SHARP_,p2__40450_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str(p1__40449_SHARP_)].join('')),p2__40450_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__40451_SHARP_,p2__40452_SHARP_){
return goog.net.jsloader.load([cljs.core.str(p1__40451_SHARP_)].join(''),p2__40452_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40454 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
G__40454.addCallback(((function (G__40454){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40454))
);

G__40454.addErrback(((function (G__40454){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40454))
);

return G__40454;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40456){if((e40456 instanceof Error)){
var e = e40456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40456;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40458){if((e40458 instanceof Error)){
var e = e40458;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40458;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40459 = cljs.core._EQ_;
var expr__40460 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40459.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40460))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40459.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40460))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40459.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40460))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40459,expr__40460){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40459,expr__40460))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40462,callback){
var map__40465 = p__40462;
var map__40465__$1 = ((((!((map__40465 == null)))?((((map__40465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40465):map__40465);
var file_msg = map__40465__$1;
var request_url = cljs.core.get.call(null,map__40465__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return (function (){var or__12147__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40465,map__40465__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40465,map__40465__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__){
return (function (state_40503){
var state_val_40504 = (state_40503[(1)]);
if((state_val_40504 === (7))){
var inst_40499 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40505_40534 = state_40503__$1;
(statearr_40505_40534[(2)] = inst_40499);

(statearr_40505_40534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (1))){
var state_40503__$1 = state_40503;
var statearr_40506_40535 = state_40503__$1;
(statearr_40506_40535[(2)] = null);

(statearr_40506_40535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (4))){
var inst_40469 = (state_40503[(7)]);
var inst_40469__$1 = (state_40503[(2)]);
var state_40503__$1 = (function (){var statearr_40507 = state_40503;
(statearr_40507[(7)] = inst_40469__$1);

return statearr_40507;
})();
if(cljs.core.truth_(inst_40469__$1)){
var statearr_40508_40536 = state_40503__$1;
(statearr_40508_40536[(1)] = (5));

} else {
var statearr_40509_40537 = state_40503__$1;
(statearr_40509_40537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (15))){
var inst_40484 = (state_40503[(8)]);
var inst_40482 = (state_40503[(9)]);
var inst_40486 = inst_40484.call(null,inst_40482);
var state_40503__$1 = state_40503;
var statearr_40510_40538 = state_40503__$1;
(statearr_40510_40538[(2)] = inst_40486);

(statearr_40510_40538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (13))){
var inst_40493 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40511_40539 = state_40503__$1;
(statearr_40511_40539[(2)] = inst_40493);

(statearr_40511_40539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (6))){
var state_40503__$1 = state_40503;
var statearr_40512_40540 = state_40503__$1;
(statearr_40512_40540[(2)] = null);

(statearr_40512_40540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (17))){
var inst_40490 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
var statearr_40513_40541 = state_40503__$1;
(statearr_40513_40541[(2)] = inst_40490);

(statearr_40513_40541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (3))){
var inst_40501 = (state_40503[(2)]);
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40503__$1,inst_40501);
} else {
if((state_val_40504 === (12))){
var state_40503__$1 = state_40503;
var statearr_40514_40542 = state_40503__$1;
(statearr_40514_40542[(2)] = null);

(statearr_40514_40542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (2))){
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40503__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40504 === (11))){
var inst_40474 = (state_40503[(10)]);
var inst_40480 = figwheel.client.file_reloading.blocking_load.call(null,inst_40474);
var state_40503__$1 = state_40503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40503__$1,(14),inst_40480);
} else {
if((state_val_40504 === (9))){
var inst_40474 = (state_40503[(10)]);
var state_40503__$1 = state_40503;
if(cljs.core.truth_(inst_40474)){
var statearr_40515_40543 = state_40503__$1;
(statearr_40515_40543[(1)] = (11));

} else {
var statearr_40516_40544 = state_40503__$1;
(statearr_40516_40544[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (5))){
var inst_40475 = (state_40503[(11)]);
var inst_40469 = (state_40503[(7)]);
var inst_40474 = cljs.core.nth.call(null,inst_40469,(0),null);
var inst_40475__$1 = cljs.core.nth.call(null,inst_40469,(1),null);
var state_40503__$1 = (function (){var statearr_40517 = state_40503;
(statearr_40517[(11)] = inst_40475__$1);

(statearr_40517[(10)] = inst_40474);

return statearr_40517;
})();
if(cljs.core.truth_(inst_40475__$1)){
var statearr_40518_40545 = state_40503__$1;
(statearr_40518_40545[(1)] = (8));

} else {
var statearr_40519_40546 = state_40503__$1;
(statearr_40519_40546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (14))){
var inst_40484 = (state_40503[(8)]);
var inst_40474 = (state_40503[(10)]);
var inst_40482 = (state_40503[(2)]);
var inst_40483 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40484__$1 = cljs.core.get.call(null,inst_40483,inst_40474);
var state_40503__$1 = (function (){var statearr_40520 = state_40503;
(statearr_40520[(8)] = inst_40484__$1);

(statearr_40520[(9)] = inst_40482);

return statearr_40520;
})();
if(cljs.core.truth_(inst_40484__$1)){
var statearr_40521_40547 = state_40503__$1;
(statearr_40521_40547[(1)] = (15));

} else {
var statearr_40522_40548 = state_40503__$1;
(statearr_40522_40548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (16))){
var inst_40482 = (state_40503[(9)]);
var inst_40488 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40482);
var state_40503__$1 = state_40503;
var statearr_40523_40549 = state_40503__$1;
(statearr_40523_40549[(2)] = inst_40488);

(statearr_40523_40549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (10))){
var inst_40495 = (state_40503[(2)]);
var state_40503__$1 = (function (){var statearr_40524 = state_40503;
(statearr_40524[(12)] = inst_40495);

return statearr_40524;
})();
var statearr_40525_40550 = state_40503__$1;
(statearr_40525_40550[(2)] = null);

(statearr_40525_40550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40504 === (8))){
var inst_40475 = (state_40503[(11)]);
var inst_40477 = eval(inst_40475);
var state_40503__$1 = state_40503;
var statearr_40526_40551 = state_40503__$1;
(statearr_40526_40551[(2)] = inst_40477);

(statearr_40526_40551[(1)] = (10));


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
});})(c__35469__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35356__auto__ = null;
var figwheel$client$file_reloading$state_machine__35356__auto____0 = (function (){
var statearr_40530 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40530[(0)] = figwheel$client$file_reloading$state_machine__35356__auto__);

(statearr_40530[(1)] = (1));

return statearr_40530;
});
var figwheel$client$file_reloading$state_machine__35356__auto____1 = (function (state_40503){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_40503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e40531){if((e40531 instanceof Object)){
var ex__35359__auto__ = e40531;
var statearr_40532_40552 = state_40503;
(statearr_40532_40552[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40553 = state_40503;
state_40503 = G__40553;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35356__auto__ = function(state_40503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35356__auto____1.call(this,state_40503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35356__auto____0;
figwheel$client$file_reloading$state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35356__auto____1;
return figwheel$client$file_reloading$state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__))
})();
var state__35471__auto__ = (function (){var statearr_40533 = f__35470__auto__.call(null);
(statearr_40533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_40533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__))
);

return c__35469__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var args40554 = [];
var len__13330__auto___40557 = arguments.length;
var i__13331__auto___40558 = (0);
while(true){
if((i__13331__auto___40558 < len__13330__auto___40557)){
args40554.push((arguments[i__13331__auto___40558]));

var G__40559 = (i__13331__auto___40558 + (1));
i__13331__auto___40558 = G__40559;
continue;
} else {
}
break;
}

var G__40556 = args40554.length;
switch (G__40556) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40554.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40561,callback){
var map__40564 = p__40561;
var map__40564__$1 = ((((!((map__40564 == null)))?((((map__40564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40564):map__40564);
var file_msg = map__40564__$1;
var namespace = cljs.core.get.call(null,map__40564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40564,map__40564__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40564,map__40564__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40566){
var map__40569 = p__40566;
var map__40569__$1 = ((((!((map__40569 == null)))?((((map__40569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40569):map__40569);
var file_msg = map__40569__$1;
var namespace = cljs.core.get.call(null,map__40569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return cljs.core.some_QMARK_.call(null,cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,{}),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40571){
var map__40574 = p__40571;
var map__40574__$1 = ((((!((map__40574 == null)))?((((map__40574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40574):map__40574);
var file_msg = map__40574__$1;
var namespace = cljs.core.get.call(null,map__40574__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__12135__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__12135__auto__){
var or__12147__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
var or__12147__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__12147__auto____$1)){
return or__12147__auto____$1;
} else {
var or__12147__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__12147__auto____$2)){
return or__12147__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__12135__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40576,callback){
var map__40579 = p__40576;
var map__40579__$1 = ((((!((map__40579 == null)))?((((map__40579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40579):map__40579);
var file_msg = map__40579__$1;
var request_url = cljs.core.get.call(null,map__40579__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40579__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35469__auto___40683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___40683,out){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___40683,out){
return (function (state_40665){
var state_val_40666 = (state_40665[(1)]);
if((state_val_40666 === (1))){
var inst_40639 = cljs.core.seq.call(null,files);
var inst_40640 = cljs.core.first.call(null,inst_40639);
var inst_40641 = cljs.core.next.call(null,inst_40639);
var inst_40642 = files;
var state_40665__$1 = (function (){var statearr_40667 = state_40665;
(statearr_40667[(7)] = inst_40640);

(statearr_40667[(8)] = inst_40642);

(statearr_40667[(9)] = inst_40641);

return statearr_40667;
})();
var statearr_40668_40684 = state_40665__$1;
(statearr_40668_40684[(2)] = null);

(statearr_40668_40684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40666 === (2))){
var inst_40648 = (state_40665[(10)]);
var inst_40642 = (state_40665[(8)]);
var inst_40647 = cljs.core.seq.call(null,inst_40642);
var inst_40648__$1 = cljs.core.first.call(null,inst_40647);
var inst_40649 = cljs.core.next.call(null,inst_40647);
var inst_40650 = (inst_40648__$1 == null);
var inst_40651 = cljs.core.not.call(null,inst_40650);
var state_40665__$1 = (function (){var statearr_40669 = state_40665;
(statearr_40669[(10)] = inst_40648__$1);

(statearr_40669[(11)] = inst_40649);

return statearr_40669;
})();
if(inst_40651){
var statearr_40670_40685 = state_40665__$1;
(statearr_40670_40685[(1)] = (4));

} else {
var statearr_40671_40686 = state_40665__$1;
(statearr_40671_40686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40666 === (3))){
var inst_40663 = (state_40665[(2)]);
var state_40665__$1 = state_40665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40665__$1,inst_40663);
} else {
if((state_val_40666 === (4))){
var inst_40648 = (state_40665[(10)]);
var inst_40653 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40648);
var state_40665__$1 = state_40665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40665__$1,(7),inst_40653);
} else {
if((state_val_40666 === (5))){
var inst_40659 = cljs.core.async.close_BANG_.call(null,out);
var state_40665__$1 = state_40665;
var statearr_40672_40687 = state_40665__$1;
(statearr_40672_40687[(2)] = inst_40659);

(statearr_40672_40687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40666 === (6))){
var inst_40661 = (state_40665[(2)]);
var state_40665__$1 = state_40665;
var statearr_40673_40688 = state_40665__$1;
(statearr_40673_40688[(2)] = inst_40661);

(statearr_40673_40688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40666 === (7))){
var inst_40649 = (state_40665[(11)]);
var inst_40655 = (state_40665[(2)]);
var inst_40656 = cljs.core.async.put_BANG_.call(null,out,inst_40655);
var inst_40642 = inst_40649;
var state_40665__$1 = (function (){var statearr_40674 = state_40665;
(statearr_40674[(12)] = inst_40656);

(statearr_40674[(8)] = inst_40642);

return statearr_40674;
})();
var statearr_40675_40689 = state_40665__$1;
(statearr_40675_40689[(2)] = null);

(statearr_40675_40689[(1)] = (2));


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
});})(c__35469__auto___40683,out))
;
return ((function (switch__35355__auto__,c__35469__auto___40683,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____0 = (function (){
var statearr_40679 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40679[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__);

(statearr_40679[(1)] = (1));

return statearr_40679;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____1 = (function (state_40665){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_40665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e40680){if((e40680 instanceof Object)){
var ex__35359__auto__ = e40680;
var statearr_40681_40690 = state_40665;
(statearr_40681_40690[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40691 = state_40665;
state_40665 = G__40691;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__ = function(state_40665){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____1.call(this,state_40665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___40683,out))
})();
var state__35471__auto__ = (function (){var statearr_40682 = f__35470__auto__.call(null);
(statearr_40682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___40683);

return statearr_40682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___40683,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40692,opts){
var map__40696 = p__40692;
var map__40696__$1 = ((((!((map__40696 == null)))?((((map__40696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40696):map__40696);
var eval_body__$1 = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__12135__auto__ = eval_body__$1;
if(cljs.core.truth_(and__12135__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__12135__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40698){var e = e40698;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40699_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40699_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40708){
var vec__40709 = p__40708;
var k = cljs.core.nth.call(null,vec__40709,(0),null);
var v = cljs.core.nth.call(null,vec__40709,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40712){
var vec__40713 = p__40712;
var k = cljs.core.nth.call(null,vec__40713,(0),null);
var v = cljs.core.nth.call(null,vec__40713,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40719,p__40720){
var map__40967 = p__40719;
var map__40967__$1 = ((((!((map__40967 == null)))?((((map__40967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40967):map__40967);
var opts = map__40967__$1;
var before_jsload = cljs.core.get.call(null,map__40967__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40967__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40967__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40968 = p__40720;
var map__40968__$1 = ((((!((map__40968 == null)))?((((map__40968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40968):map__40968);
var msg = map__40968__$1;
var files = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40968__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41121){
var state_val_41122 = (state_41121[(1)]);
if((state_val_41122 === (7))){
var inst_40982 = (state_41121[(7)]);
var inst_40983 = (state_41121[(8)]);
var inst_40984 = (state_41121[(9)]);
var inst_40985 = (state_41121[(10)]);
var inst_40990 = cljs.core._nth.call(null,inst_40983,inst_40985);
var inst_40991 = figwheel.client.file_reloading.eval_body.call(null,inst_40990,opts);
var inst_40992 = (inst_40985 + (1));
var tmp41123 = inst_40982;
var tmp41124 = inst_40983;
var tmp41125 = inst_40984;
var inst_40982__$1 = tmp41123;
var inst_40983__$1 = tmp41124;
var inst_40984__$1 = tmp41125;
var inst_40985__$1 = inst_40992;
var state_41121__$1 = (function (){var statearr_41126 = state_41121;
(statearr_41126[(7)] = inst_40982__$1);

(statearr_41126[(8)] = inst_40983__$1);

(statearr_41126[(9)] = inst_40984__$1);

(statearr_41126[(10)] = inst_40985__$1);

(statearr_41126[(11)] = inst_40991);

return statearr_41126;
})();
var statearr_41127_41213 = state_41121__$1;
(statearr_41127_41213[(2)] = null);

(statearr_41127_41213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (20))){
var inst_41025 = (state_41121[(12)]);
var inst_41033 = figwheel.client.file_reloading.sort_files.call(null,inst_41025);
var state_41121__$1 = state_41121;
var statearr_41128_41214 = state_41121__$1;
(statearr_41128_41214[(2)] = inst_41033);

(statearr_41128_41214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (27))){
var state_41121__$1 = state_41121;
var statearr_41129_41215 = state_41121__$1;
(statearr_41129_41215[(2)] = null);

(statearr_41129_41215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (1))){
var inst_40974 = (state_41121[(13)]);
var inst_40971 = before_jsload.call(null,files);
var inst_40972 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40973 = (function (){return ((function (inst_40974,inst_40971,inst_40972,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40716_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40716_SHARP_);
});
;})(inst_40974,inst_40971,inst_40972,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40974__$1 = cljs.core.filter.call(null,inst_40973,files);
var inst_40975 = cljs.core.not_empty.call(null,inst_40974__$1);
var state_41121__$1 = (function (){var statearr_41130 = state_41121;
(statearr_41130[(14)] = inst_40971);

(statearr_41130[(15)] = inst_40972);

(statearr_41130[(13)] = inst_40974__$1);

return statearr_41130;
})();
if(cljs.core.truth_(inst_40975)){
var statearr_41131_41216 = state_41121__$1;
(statearr_41131_41216[(1)] = (2));

} else {
var statearr_41132_41217 = state_41121__$1;
(statearr_41132_41217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (24))){
var state_41121__$1 = state_41121;
var statearr_41133_41218 = state_41121__$1;
(statearr_41133_41218[(2)] = null);

(statearr_41133_41218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (39))){
var inst_41075 = (state_41121[(16)]);
var state_41121__$1 = state_41121;
var statearr_41134_41219 = state_41121__$1;
(statearr_41134_41219[(2)] = inst_41075);

(statearr_41134_41219[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (46))){
var inst_41116 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41135_41220 = state_41121__$1;
(statearr_41135_41220[(2)] = inst_41116);

(statearr_41135_41220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (4))){
var inst_41019 = (state_41121[(2)]);
var inst_41020 = cljs.core.List.EMPTY;
var inst_41021 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41020);
var inst_41022 = (function (){return ((function (inst_41019,inst_41020,inst_41021,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40717_SHARP_){
var and__12135__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40717_SHARP_);
if(cljs.core.truth_(and__12135__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40717_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40717_SHARP_)));
} else {
return and__12135__auto__;
}
});
;})(inst_41019,inst_41020,inst_41021,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41023 = cljs.core.filter.call(null,inst_41022,files);
var inst_41024 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41025 = cljs.core.concat.call(null,inst_41023,inst_41024);
var state_41121__$1 = (function (){var statearr_41136 = state_41121;
(statearr_41136[(12)] = inst_41025);

(statearr_41136[(17)] = inst_41019);

(statearr_41136[(18)] = inst_41021);

return statearr_41136;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41137_41221 = state_41121__$1;
(statearr_41137_41221[(1)] = (16));

} else {
var statearr_41138_41222 = state_41121__$1;
(statearr_41138_41222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (15))){
var inst_41009 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41139_41223 = state_41121__$1;
(statearr_41139_41223[(2)] = inst_41009);

(statearr_41139_41223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (21))){
var inst_41035 = (state_41121[(19)]);
var inst_41035__$1 = (state_41121[(2)]);
var inst_41036 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41035__$1);
var state_41121__$1 = (function (){var statearr_41140 = state_41121;
(statearr_41140[(19)] = inst_41035__$1);

return statearr_41140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41121__$1,(22),inst_41036);
} else {
if((state_val_41122 === (31))){
var inst_41119 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41121__$1,inst_41119);
} else {
if((state_val_41122 === (32))){
var inst_41075 = (state_41121[(16)]);
var inst_41080 = inst_41075.cljs$lang$protocol_mask$partition0$;
var inst_41081 = (inst_41080 & (64));
var inst_41082 = inst_41075.cljs$core$ISeq$;
var inst_41083 = (inst_41081) || (inst_41082);
var state_41121__$1 = state_41121;
if(cljs.core.truth_(inst_41083)){
var statearr_41141_41224 = state_41121__$1;
(statearr_41141_41224[(1)] = (35));

} else {
var statearr_41142_41225 = state_41121__$1;
(statearr_41142_41225[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (40))){
var inst_41096 = (state_41121[(20)]);
var inst_41095 = (state_41121[(2)]);
var inst_41096__$1 = cljs.core.get.call(null,inst_41095,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41097 = cljs.core.get.call(null,inst_41095,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41098 = cljs.core.not_empty.call(null,inst_41096__$1);
var state_41121__$1 = (function (){var statearr_41143 = state_41121;
(statearr_41143[(21)] = inst_41097);

(statearr_41143[(20)] = inst_41096__$1);

return statearr_41143;
})();
if(cljs.core.truth_(inst_41098)){
var statearr_41144_41226 = state_41121__$1;
(statearr_41144_41226[(1)] = (41));

} else {
var statearr_41145_41227 = state_41121__$1;
(statearr_41145_41227[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (33))){
var state_41121__$1 = state_41121;
var statearr_41146_41228 = state_41121__$1;
(statearr_41146_41228[(2)] = false);

(statearr_41146_41228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (13))){
var inst_40995 = (state_41121[(22)]);
var inst_40999 = cljs.core.chunk_first.call(null,inst_40995);
var inst_41000 = cljs.core.chunk_rest.call(null,inst_40995);
var inst_41001 = cljs.core.count.call(null,inst_40999);
var inst_40982 = inst_41000;
var inst_40983 = inst_40999;
var inst_40984 = inst_41001;
var inst_40985 = (0);
var state_41121__$1 = (function (){var statearr_41147 = state_41121;
(statearr_41147[(7)] = inst_40982);

(statearr_41147[(8)] = inst_40983);

(statearr_41147[(9)] = inst_40984);

(statearr_41147[(10)] = inst_40985);

return statearr_41147;
})();
var statearr_41148_41229 = state_41121__$1;
(statearr_41148_41229[(2)] = null);

(statearr_41148_41229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (22))){
var inst_41043 = (state_41121[(23)]);
var inst_41035 = (state_41121[(19)]);
var inst_41038 = (state_41121[(24)]);
var inst_41039 = (state_41121[(25)]);
var inst_41038__$1 = (state_41121[(2)]);
var inst_41039__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41038__$1);
var inst_41040 = (function (){var all_files = inst_41035;
var res_SINGLEQUOTE_ = inst_41038__$1;
var res = inst_41039__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41043,inst_41035,inst_41038,inst_41039,inst_41038__$1,inst_41039__$1,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40718_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40718_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41043,inst_41035,inst_41038,inst_41039,inst_41038__$1,inst_41039__$1,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41041 = cljs.core.filter.call(null,inst_41040,inst_41038__$1);
var inst_41042 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41043__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41042);
var inst_41044 = cljs.core.not_empty.call(null,inst_41043__$1);
var state_41121__$1 = (function (){var statearr_41149 = state_41121;
(statearr_41149[(23)] = inst_41043__$1);

(statearr_41149[(26)] = inst_41041);

(statearr_41149[(24)] = inst_41038__$1);

(statearr_41149[(25)] = inst_41039__$1);

return statearr_41149;
})();
if(cljs.core.truth_(inst_41044)){
var statearr_41150_41230 = state_41121__$1;
(statearr_41150_41230[(1)] = (23));

} else {
var statearr_41151_41231 = state_41121__$1;
(statearr_41151_41231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (36))){
var state_41121__$1 = state_41121;
var statearr_41152_41232 = state_41121__$1;
(statearr_41152_41232[(2)] = false);

(statearr_41152_41232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (41))){
var inst_41096 = (state_41121[(20)]);
var inst_41100 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41101 = cljs.core.map.call(null,inst_41100,inst_41096);
var inst_41102 = cljs.core.pr_str.call(null,inst_41101);
var inst_41103 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41102)].join('');
var inst_41104 = figwheel.client.utils.log.call(null,inst_41103);
var state_41121__$1 = state_41121;
var statearr_41153_41233 = state_41121__$1;
(statearr_41153_41233[(2)] = inst_41104);

(statearr_41153_41233[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (43))){
var inst_41097 = (state_41121[(21)]);
var inst_41107 = (state_41121[(2)]);
var inst_41108 = cljs.core.not_empty.call(null,inst_41097);
var state_41121__$1 = (function (){var statearr_41154 = state_41121;
(statearr_41154[(27)] = inst_41107);

return statearr_41154;
})();
if(cljs.core.truth_(inst_41108)){
var statearr_41155_41234 = state_41121__$1;
(statearr_41155_41234[(1)] = (44));

} else {
var statearr_41156_41235 = state_41121__$1;
(statearr_41156_41235[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (29))){
var inst_41043 = (state_41121[(23)]);
var inst_41075 = (state_41121[(16)]);
var inst_41035 = (state_41121[(19)]);
var inst_41041 = (state_41121[(26)]);
var inst_41038 = (state_41121[(24)]);
var inst_41039 = (state_41121[(25)]);
var inst_41071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41074 = (function (){var all_files = inst_41035;
var res_SINGLEQUOTE_ = inst_41038;
var res = inst_41039;
var files_not_loaded = inst_41041;
var dependencies_that_loaded = inst_41043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41075,inst_41035,inst_41041,inst_41038,inst_41039,inst_41071,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41073){
var map__41157 = p__41073;
var map__41157__$1 = ((((!((map__41157 == null)))?((((map__41157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41157):map__41157);
var namespace = cljs.core.get.call(null,map__41157__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41075,inst_41035,inst_41041,inst_41038,inst_41039,inst_41071,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41075__$1 = cljs.core.group_by.call(null,inst_41074,inst_41041);
var inst_41077 = (inst_41075__$1 == null);
var inst_41078 = cljs.core.not.call(null,inst_41077);
var state_41121__$1 = (function (){var statearr_41159 = state_41121;
(statearr_41159[(16)] = inst_41075__$1);

(statearr_41159[(28)] = inst_41071);

return statearr_41159;
})();
if(inst_41078){
var statearr_41160_41236 = state_41121__$1;
(statearr_41160_41236[(1)] = (32));

} else {
var statearr_41161_41237 = state_41121__$1;
(statearr_41161_41237[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (44))){
var inst_41097 = (state_41121[(21)]);
var inst_41110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41097);
var inst_41111 = cljs.core.pr_str.call(null,inst_41110);
var inst_41112 = [cljs.core.str("not required: "),cljs.core.str(inst_41111)].join('');
var inst_41113 = figwheel.client.utils.log.call(null,inst_41112);
var state_41121__$1 = state_41121;
var statearr_41162_41238 = state_41121__$1;
(statearr_41162_41238[(2)] = inst_41113);

(statearr_41162_41238[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (6))){
var inst_41016 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41163_41239 = state_41121__$1;
(statearr_41163_41239[(2)] = inst_41016);

(statearr_41163_41239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (28))){
var inst_41041 = (state_41121[(26)]);
var inst_41068 = (state_41121[(2)]);
var inst_41069 = cljs.core.not_empty.call(null,inst_41041);
var state_41121__$1 = (function (){var statearr_41164 = state_41121;
(statearr_41164[(29)] = inst_41068);

return statearr_41164;
})();
if(cljs.core.truth_(inst_41069)){
var statearr_41165_41240 = state_41121__$1;
(statearr_41165_41240[(1)] = (29));

} else {
var statearr_41166_41241 = state_41121__$1;
(statearr_41166_41241[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (25))){
var inst_41039 = (state_41121[(25)]);
var inst_41055 = (state_41121[(2)]);
var inst_41056 = cljs.core.not_empty.call(null,inst_41039);
var state_41121__$1 = (function (){var statearr_41167 = state_41121;
(statearr_41167[(30)] = inst_41055);

return statearr_41167;
})();
if(cljs.core.truth_(inst_41056)){
var statearr_41168_41242 = state_41121__$1;
(statearr_41168_41242[(1)] = (26));

} else {
var statearr_41169_41243 = state_41121__$1;
(statearr_41169_41243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (34))){
var inst_41090 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
if(cljs.core.truth_(inst_41090)){
var statearr_41170_41244 = state_41121__$1;
(statearr_41170_41244[(1)] = (38));

} else {
var statearr_41171_41245 = state_41121__$1;
(statearr_41171_41245[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (17))){
var state_41121__$1 = state_41121;
var statearr_41172_41246 = state_41121__$1;
(statearr_41172_41246[(2)] = recompile_dependents);

(statearr_41172_41246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (3))){
var state_41121__$1 = state_41121;
var statearr_41173_41247 = state_41121__$1;
(statearr_41173_41247[(2)] = null);

(statearr_41173_41247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (12))){
var inst_41012 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41174_41248 = state_41121__$1;
(statearr_41174_41248[(2)] = inst_41012);

(statearr_41174_41248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (2))){
var inst_40974 = (state_41121[(13)]);
var inst_40981 = cljs.core.seq.call(null,inst_40974);
var inst_40982 = inst_40981;
var inst_40983 = null;
var inst_40984 = (0);
var inst_40985 = (0);
var state_41121__$1 = (function (){var statearr_41175 = state_41121;
(statearr_41175[(7)] = inst_40982);

(statearr_41175[(8)] = inst_40983);

(statearr_41175[(9)] = inst_40984);

(statearr_41175[(10)] = inst_40985);

return statearr_41175;
})();
var statearr_41176_41249 = state_41121__$1;
(statearr_41176_41249[(2)] = null);

(statearr_41176_41249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (23))){
var inst_41043 = (state_41121[(23)]);
var inst_41035 = (state_41121[(19)]);
var inst_41041 = (state_41121[(26)]);
var inst_41038 = (state_41121[(24)]);
var inst_41039 = (state_41121[(25)]);
var inst_41046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41048 = (function (){var all_files = inst_41035;
var res_SINGLEQUOTE_ = inst_41038;
var res = inst_41039;
var files_not_loaded = inst_41041;
var dependencies_that_loaded = inst_41043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41046,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41047){
var map__41177 = p__41047;
var map__41177__$1 = ((((!((map__41177 == null)))?((((map__41177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41177):map__41177);
var request_url = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41046,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41049 = cljs.core.reverse.call(null,inst_41043);
var inst_41050 = cljs.core.map.call(null,inst_41048,inst_41049);
var inst_41051 = cljs.core.pr_str.call(null,inst_41050);
var inst_41052 = figwheel.client.utils.log.call(null,inst_41051);
var state_41121__$1 = (function (){var statearr_41179 = state_41121;
(statearr_41179[(31)] = inst_41046);

return statearr_41179;
})();
var statearr_41180_41250 = state_41121__$1;
(statearr_41180_41250[(2)] = inst_41052);

(statearr_41180_41250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (35))){
var state_41121__$1 = state_41121;
var statearr_41181_41251 = state_41121__$1;
(statearr_41181_41251[(2)] = true);

(statearr_41181_41251[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (19))){
var inst_41025 = (state_41121[(12)]);
var inst_41031 = figwheel.client.file_reloading.expand_files.call(null,inst_41025);
var state_41121__$1 = state_41121;
var statearr_41182_41252 = state_41121__$1;
(statearr_41182_41252[(2)] = inst_41031);

(statearr_41182_41252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (11))){
var state_41121__$1 = state_41121;
var statearr_41183_41253 = state_41121__$1;
(statearr_41183_41253[(2)] = null);

(statearr_41183_41253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (9))){
var inst_41014 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41184_41254 = state_41121__$1;
(statearr_41184_41254[(2)] = inst_41014);

(statearr_41184_41254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (5))){
var inst_40984 = (state_41121[(9)]);
var inst_40985 = (state_41121[(10)]);
var inst_40987 = (inst_40985 < inst_40984);
var inst_40988 = inst_40987;
var state_41121__$1 = state_41121;
if(cljs.core.truth_(inst_40988)){
var statearr_41185_41255 = state_41121__$1;
(statearr_41185_41255[(1)] = (7));

} else {
var statearr_41186_41256 = state_41121__$1;
(statearr_41186_41256[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (14))){
var inst_40995 = (state_41121[(22)]);
var inst_41004 = cljs.core.first.call(null,inst_40995);
var inst_41005 = figwheel.client.file_reloading.eval_body.call(null,inst_41004,opts);
var inst_41006 = cljs.core.next.call(null,inst_40995);
var inst_40982 = inst_41006;
var inst_40983 = null;
var inst_40984 = (0);
var inst_40985 = (0);
var state_41121__$1 = (function (){var statearr_41187 = state_41121;
(statearr_41187[(7)] = inst_40982);

(statearr_41187[(32)] = inst_41005);

(statearr_41187[(8)] = inst_40983);

(statearr_41187[(9)] = inst_40984);

(statearr_41187[(10)] = inst_40985);

return statearr_41187;
})();
var statearr_41188_41257 = state_41121__$1;
(statearr_41188_41257[(2)] = null);

(statearr_41188_41257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (45))){
var state_41121__$1 = state_41121;
var statearr_41189_41258 = state_41121__$1;
(statearr_41189_41258[(2)] = null);

(statearr_41189_41258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (26))){
var inst_41043 = (state_41121[(23)]);
var inst_41035 = (state_41121[(19)]);
var inst_41041 = (state_41121[(26)]);
var inst_41038 = (state_41121[(24)]);
var inst_41039 = (state_41121[(25)]);
var inst_41058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41060 = (function (){var all_files = inst_41035;
var res_SINGLEQUOTE_ = inst_41038;
var res = inst_41039;
var files_not_loaded = inst_41041;
var dependencies_that_loaded = inst_41043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41058,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41059){
var map__41190 = p__41059;
var map__41190__$1 = ((((!((map__41190 == null)))?((((map__41190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41190):map__41190);
var namespace = cljs.core.get.call(null,map__41190__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41058,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41061 = cljs.core.map.call(null,inst_41060,inst_41039);
var inst_41062 = cljs.core.pr_str.call(null,inst_41061);
var inst_41063 = figwheel.client.utils.log.call(null,inst_41062);
var inst_41064 = (function (){var all_files = inst_41035;
var res_SINGLEQUOTE_ = inst_41038;
var res = inst_41039;
var files_not_loaded = inst_41041;
var dependencies_that_loaded = inst_41043;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41058,inst_41060,inst_41061,inst_41062,inst_41063,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41043,inst_41035,inst_41041,inst_41038,inst_41039,inst_41058,inst_41060,inst_41061,inst_41062,inst_41063,state_val_41122,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41065 = setTimeout(inst_41064,(10));
var state_41121__$1 = (function (){var statearr_41192 = state_41121;
(statearr_41192[(33)] = inst_41058);

(statearr_41192[(34)] = inst_41063);

return statearr_41192;
})();
var statearr_41193_41259 = state_41121__$1;
(statearr_41193_41259[(2)] = inst_41065);

(statearr_41193_41259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (16))){
var state_41121__$1 = state_41121;
var statearr_41194_41260 = state_41121__$1;
(statearr_41194_41260[(2)] = reload_dependents);

(statearr_41194_41260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (38))){
var inst_41075 = (state_41121[(16)]);
var inst_41092 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41075);
var state_41121__$1 = state_41121;
var statearr_41195_41261 = state_41121__$1;
(statearr_41195_41261[(2)] = inst_41092);

(statearr_41195_41261[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (30))){
var state_41121__$1 = state_41121;
var statearr_41196_41262 = state_41121__$1;
(statearr_41196_41262[(2)] = null);

(statearr_41196_41262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (10))){
var inst_40995 = (state_41121[(22)]);
var inst_40997 = cljs.core.chunked_seq_QMARK_.call(null,inst_40995);
var state_41121__$1 = state_41121;
if(inst_40997){
var statearr_41197_41263 = state_41121__$1;
(statearr_41197_41263[(1)] = (13));

} else {
var statearr_41198_41264 = state_41121__$1;
(statearr_41198_41264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (18))){
var inst_41029 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
if(cljs.core.truth_(inst_41029)){
var statearr_41199_41265 = state_41121__$1;
(statearr_41199_41265[(1)] = (19));

} else {
var statearr_41200_41266 = state_41121__$1;
(statearr_41200_41266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (42))){
var state_41121__$1 = state_41121;
var statearr_41201_41267 = state_41121__$1;
(statearr_41201_41267[(2)] = null);

(statearr_41201_41267[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (37))){
var inst_41087 = (state_41121[(2)]);
var state_41121__$1 = state_41121;
var statearr_41202_41268 = state_41121__$1;
(statearr_41202_41268[(2)] = inst_41087);

(statearr_41202_41268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41122 === (8))){
var inst_40982 = (state_41121[(7)]);
var inst_40995 = (state_41121[(22)]);
var inst_40995__$1 = cljs.core.seq.call(null,inst_40982);
var state_41121__$1 = (function (){var statearr_41203 = state_41121;
(statearr_41203[(22)] = inst_40995__$1);

return statearr_41203;
})();
if(inst_40995__$1){
var statearr_41204_41269 = state_41121__$1;
(statearr_41204_41269[(1)] = (10));

} else {
var statearr_41205_41270 = state_41121__$1;
(statearr_41205_41270[(1)] = (11));

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
}
});})(c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35355__auto__,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____0 = (function (){
var statearr_41209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41209[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__);

(statearr_41209[(1)] = (1));

return statearr_41209;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____1 = (function (state_41121){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_41121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e41210){if((e41210 instanceof Object)){
var ex__35359__auto__ = e41210;
var statearr_41211_41271 = state_41121;
(statearr_41211_41271[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41272 = state_41121;
state_41121 = G__41272;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__ = function(state_41121){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____1.call(this,state_41121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35471__auto__ = (function (){var statearr_41212 = f__35470__auto__.call(null);
(statearr_41212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_41212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__,map__40967,map__40967__$1,opts,before_jsload,on_jsload,reload_dependents,map__40968,map__40968__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35469__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41275,link){
var map__41278 = p__41275;
var map__41278__$1 = ((((!((map__41278 == null)))?((((map__41278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41278):map__41278);
var file = cljs.core.get.call(null,map__41278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__41278,map__41278__$1,file){
return (function (p1__41273_SHARP_,p2__41274_SHARP_){
if(cljs.core._EQ_.call(null,p1__41273_SHARP_,p2__41274_SHARP_)){
return p1__41273_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__41278,map__41278__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41284){
var map__41285 = p__41284;
var map__41285__$1 = ((((!((map__41285 == null)))?((((map__41285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41285):map__41285);
var match_length = cljs.core.get.call(null,map__41285__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41285__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41280_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41280_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41287_SHARP_,p2__41288_SHARP_){
return cljs.core.assoc.call(null,p1__41287_SHARP_,cljs.core.get.call(null,p2__41288_SHARP_,key),p2__41288_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6501__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6501__auto__)){
var link = temp__6501__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6501__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6501__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41289 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41289);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41289);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41290,p__41291){
var map__41296 = p__41290;
var map__41296__$1 = ((((!((map__41296 == null)))?((((map__41296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41296):map__41296);
var on_cssload = cljs.core.get.call(null,map__41296__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41297 = p__41291;
var map__41297__$1 = ((((!((map__41297 == null)))?((((map__41297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41297):map__41297);
var files_msg = map__41297__$1;
var files = cljs.core.get.call(null,map__41297__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6503__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6503__auto__)){
var f_datas = temp__6503__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1514283704703