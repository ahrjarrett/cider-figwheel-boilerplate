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
var or__32286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__32286__auto__){
return or__32286__auto__;
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
var or__32286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
var or__32286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__32286__auto____$1)){
return or__32286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39943_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39943_SHARP_));
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
var seq__39948 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39949 = null;
var count__39950 = (0);
var i__39951 = (0);
while(true){
if((i__39951 < count__39950)){
var n = cljs.core._nth.call(null,chunk__39949,i__39951);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39952 = seq__39948;
var G__39953 = chunk__39949;
var G__39954 = count__39950;
var G__39955 = (i__39951 + (1));
seq__39948 = G__39952;
chunk__39949 = G__39953;
count__39950 = G__39954;
i__39951 = G__39955;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__39948);
if(temp__6503__auto__){
var seq__39948__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39948__$1)){
var c__33189__auto__ = cljs.core.chunk_first.call(null,seq__39948__$1);
var G__39956 = cljs.core.chunk_rest.call(null,seq__39948__$1);
var G__39957 = c__33189__auto__;
var G__39958 = cljs.core.count.call(null,c__33189__auto__);
var G__39959 = (0);
seq__39948 = G__39956;
chunk__39949 = G__39957;
count__39950 = G__39958;
i__39951 = G__39959;
continue;
} else {
var n = cljs.core.first.call(null,seq__39948__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39960 = cljs.core.next.call(null,seq__39948__$1);
var G__39961 = null;
var G__39962 = (0);
var G__39963 = (0);
seq__39948 = G__39960;
chunk__39949 = G__39961;
count__39950 = G__39962;
i__39951 = G__39963;
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
return cljs.core.some.call(null,(function (p__39972){
var vec__39973 = p__39972;
var _ = cljs.core.nth.call(null,vec__39973,(0),null);
var v = cljs.core.nth.call(null,vec__39973,(1),null);
var and__32274__auto__ = v;
if(cljs.core.truth_(and__32274__auto__)){
return v.call(null,dep);
} else {
return and__32274__auto__;
}
}),cljs.core.filter.call(null,(function (p__39976){
var vec__39977 = p__39976;
var k = cljs.core.nth.call(null,vec__39977,(0),null);
var v = cljs.core.nth.call(null,vec__39977,(1),null);
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

var seq__40030_40041 = cljs.core.seq.call(null,deps);
var chunk__40031_40042 = null;
var count__40032_40043 = (0);
var i__40033_40044 = (0);
while(true){
if((i__40033_40044 < count__40032_40043)){
var dep_40045 = cljs.core._nth.call(null,chunk__40031_40042,i__40033_40044);
if(cljs.core.truth_((function (){var and__32274__auto__ = dep_40045;
if(cljs.core.truth_(and__32274__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40045));
} else {
return and__32274__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40045,(depth + (1)),state);
} else {
}

var G__40046 = seq__40030_40041;
var G__40047 = chunk__40031_40042;
var G__40048 = count__40032_40043;
var G__40049 = (i__40033_40044 + (1));
seq__40030_40041 = G__40046;
chunk__40031_40042 = G__40047;
count__40032_40043 = G__40048;
i__40033_40044 = G__40049;
continue;
} else {
var temp__6503__auto___40050 = cljs.core.seq.call(null,seq__40030_40041);
if(temp__6503__auto___40050){
var seq__40030_40051__$1 = temp__6503__auto___40050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40030_40051__$1)){
var c__33189__auto___40052 = cljs.core.chunk_first.call(null,seq__40030_40051__$1);
var G__40053 = cljs.core.chunk_rest.call(null,seq__40030_40051__$1);
var G__40054 = c__33189__auto___40052;
var G__40055 = cljs.core.count.call(null,c__33189__auto___40052);
var G__40056 = (0);
seq__40030_40041 = G__40053;
chunk__40031_40042 = G__40054;
count__40032_40043 = G__40055;
i__40033_40044 = G__40056;
continue;
} else {
var dep_40057 = cljs.core.first.call(null,seq__40030_40051__$1);
if(cljs.core.truth_((function (){var and__32274__auto__ = dep_40057;
if(cljs.core.truth_(and__32274__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40057));
} else {
return and__32274__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40057,(depth + (1)),state);
} else {
}

var G__40058 = cljs.core.next.call(null,seq__40030_40051__$1);
var G__40059 = null;
var G__40060 = (0);
var G__40061 = (0);
seq__40030_40041 = G__40058;
chunk__40031_40042 = G__40059;
count__40032_40043 = G__40060;
i__40033_40044 = G__40061;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40034){
var vec__40038 = p__40034;
var seq__40039 = cljs.core.seq.call(null,vec__40038);
var first__40040 = cljs.core.first.call(null,seq__40039);
var seq__40039__$1 = cljs.core.next.call(null,seq__40039);
var x = first__40040;
var xs = seq__40039__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40038,seq__40039,first__40040,seq__40039__$1,x,xs,get_deps__$1){
return (function (p1__39980_SHARP_){
return clojure.set.difference.call(null,p1__39980_SHARP_,x);
});})(vec__40038,seq__40039,first__40040,seq__40039__$1,x,xs,get_deps__$1))
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
var seq__40074 = cljs.core.seq.call(null,provides);
var chunk__40075 = null;
var count__40076 = (0);
var i__40077 = (0);
while(true){
if((i__40077 < count__40076)){
var prov = cljs.core._nth.call(null,chunk__40075,i__40077);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40078_40086 = cljs.core.seq.call(null,requires);
var chunk__40079_40087 = null;
var count__40080_40088 = (0);
var i__40081_40089 = (0);
while(true){
if((i__40081_40089 < count__40080_40088)){
var req_40090 = cljs.core._nth.call(null,chunk__40079_40087,i__40081_40089);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40090,prov);

var G__40091 = seq__40078_40086;
var G__40092 = chunk__40079_40087;
var G__40093 = count__40080_40088;
var G__40094 = (i__40081_40089 + (1));
seq__40078_40086 = G__40091;
chunk__40079_40087 = G__40092;
count__40080_40088 = G__40093;
i__40081_40089 = G__40094;
continue;
} else {
var temp__6503__auto___40095 = cljs.core.seq.call(null,seq__40078_40086);
if(temp__6503__auto___40095){
var seq__40078_40096__$1 = temp__6503__auto___40095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40078_40096__$1)){
var c__33189__auto___40097 = cljs.core.chunk_first.call(null,seq__40078_40096__$1);
var G__40098 = cljs.core.chunk_rest.call(null,seq__40078_40096__$1);
var G__40099 = c__33189__auto___40097;
var G__40100 = cljs.core.count.call(null,c__33189__auto___40097);
var G__40101 = (0);
seq__40078_40086 = G__40098;
chunk__40079_40087 = G__40099;
count__40080_40088 = G__40100;
i__40081_40089 = G__40101;
continue;
} else {
var req_40102 = cljs.core.first.call(null,seq__40078_40096__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40102,prov);

var G__40103 = cljs.core.next.call(null,seq__40078_40096__$1);
var G__40104 = null;
var G__40105 = (0);
var G__40106 = (0);
seq__40078_40086 = G__40103;
chunk__40079_40087 = G__40104;
count__40080_40088 = G__40105;
i__40081_40089 = G__40106;
continue;
}
} else {
}
}
break;
}

var G__40107 = seq__40074;
var G__40108 = chunk__40075;
var G__40109 = count__40076;
var G__40110 = (i__40077 + (1));
seq__40074 = G__40107;
chunk__40075 = G__40108;
count__40076 = G__40109;
i__40077 = G__40110;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__40074);
if(temp__6503__auto__){
var seq__40074__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40074__$1)){
var c__33189__auto__ = cljs.core.chunk_first.call(null,seq__40074__$1);
var G__40111 = cljs.core.chunk_rest.call(null,seq__40074__$1);
var G__40112 = c__33189__auto__;
var G__40113 = cljs.core.count.call(null,c__33189__auto__);
var G__40114 = (0);
seq__40074 = G__40111;
chunk__40075 = G__40112;
count__40076 = G__40113;
i__40077 = G__40114;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40074__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40082_40115 = cljs.core.seq.call(null,requires);
var chunk__40083_40116 = null;
var count__40084_40117 = (0);
var i__40085_40118 = (0);
while(true){
if((i__40085_40118 < count__40084_40117)){
var req_40119 = cljs.core._nth.call(null,chunk__40083_40116,i__40085_40118);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40119,prov);

var G__40120 = seq__40082_40115;
var G__40121 = chunk__40083_40116;
var G__40122 = count__40084_40117;
var G__40123 = (i__40085_40118 + (1));
seq__40082_40115 = G__40120;
chunk__40083_40116 = G__40121;
count__40084_40117 = G__40122;
i__40085_40118 = G__40123;
continue;
} else {
var temp__6503__auto___40124__$1 = cljs.core.seq.call(null,seq__40082_40115);
if(temp__6503__auto___40124__$1){
var seq__40082_40125__$1 = temp__6503__auto___40124__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40082_40125__$1)){
var c__33189__auto___40126 = cljs.core.chunk_first.call(null,seq__40082_40125__$1);
var G__40127 = cljs.core.chunk_rest.call(null,seq__40082_40125__$1);
var G__40128 = c__33189__auto___40126;
var G__40129 = cljs.core.count.call(null,c__33189__auto___40126);
var G__40130 = (0);
seq__40082_40115 = G__40127;
chunk__40083_40116 = G__40128;
count__40084_40117 = G__40129;
i__40085_40118 = G__40130;
continue;
} else {
var req_40131 = cljs.core.first.call(null,seq__40082_40125__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40131,prov);

var G__40132 = cljs.core.next.call(null,seq__40082_40125__$1);
var G__40133 = null;
var G__40134 = (0);
var G__40135 = (0);
seq__40082_40115 = G__40132;
chunk__40083_40116 = G__40133;
count__40084_40117 = G__40134;
i__40085_40118 = G__40135;
continue;
}
} else {
}
}
break;
}

var G__40136 = cljs.core.next.call(null,seq__40074__$1);
var G__40137 = null;
var G__40138 = (0);
var G__40139 = (0);
seq__40074 = G__40136;
chunk__40075 = G__40137;
count__40076 = G__40138;
i__40077 = G__40139;
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
var seq__40144_40148 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40145_40149 = null;
var count__40146_40150 = (0);
var i__40147_40151 = (0);
while(true){
if((i__40147_40151 < count__40146_40150)){
var ns_40152 = cljs.core._nth.call(null,chunk__40145_40149,i__40147_40151);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40152);

var G__40153 = seq__40144_40148;
var G__40154 = chunk__40145_40149;
var G__40155 = count__40146_40150;
var G__40156 = (i__40147_40151 + (1));
seq__40144_40148 = G__40153;
chunk__40145_40149 = G__40154;
count__40146_40150 = G__40155;
i__40147_40151 = G__40156;
continue;
} else {
var temp__6503__auto___40157 = cljs.core.seq.call(null,seq__40144_40148);
if(temp__6503__auto___40157){
var seq__40144_40158__$1 = temp__6503__auto___40157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40144_40158__$1)){
var c__33189__auto___40159 = cljs.core.chunk_first.call(null,seq__40144_40158__$1);
var G__40160 = cljs.core.chunk_rest.call(null,seq__40144_40158__$1);
var G__40161 = c__33189__auto___40159;
var G__40162 = cljs.core.count.call(null,c__33189__auto___40159);
var G__40163 = (0);
seq__40144_40148 = G__40160;
chunk__40145_40149 = G__40161;
count__40146_40150 = G__40162;
i__40147_40151 = G__40163;
continue;
} else {
var ns_40164 = cljs.core.first.call(null,seq__40144_40158__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40164);

var G__40165 = cljs.core.next.call(null,seq__40144_40158__$1);
var G__40166 = null;
var G__40167 = (0);
var G__40168 = (0);
seq__40144_40148 = G__40165;
chunk__40145_40149 = G__40166;
count__40146_40150 = G__40167;
i__40147_40151 = G__40168;
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
goog.require_figwheel_backup_ = (function (){var or__32286__auto__ = goog.require__;
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
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
var G__40169__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40170__i = 0, G__40170__a = new Array(arguments.length -  0);
while (G__40170__i < G__40170__a.length) {G__40170__a[G__40170__i] = arguments[G__40170__i + 0]; ++G__40170__i;}
  args = new cljs.core.IndexedSeq(G__40170__a,0);
} 
return G__40169__delegate.call(this,args);};
G__40169.cljs$lang$maxFixedArity = 0;
G__40169.cljs$lang$applyTo = (function (arglist__40171){
var args = cljs.core.seq(arglist__40171);
return G__40169__delegate(args);
});
G__40169.cljs$core$IFn$_invoke$arity$variadic = G__40169__delegate;
return G__40169;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__40172_SHARP_,p2__40173_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str(p1__40172_SHARP_)].join('')),p2__40173_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__40174_SHARP_,p2__40175_SHARP_){
return goog.net.jsloader.load([cljs.core.str(p1__40174_SHARP_)].join(''),p2__40175_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40177 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
G__40177.addCallback(((function (G__40177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40177))
);

G__40177.addErrback(((function (G__40177){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40177))
);

return G__40177;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40179){if((e40179 instanceof Error)){
var e = e40179;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40179;

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
}catch (e40181){if((e40181 instanceof Error)){
var e = e40181;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40181;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40182 = cljs.core._EQ_;
var expr__40183 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40182.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40183))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40182.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40183))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40182.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40183))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40182,expr__40183){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40182,expr__40183))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40185,callback){
var map__40188 = p__40185;
var map__40188__$1 = ((((!((map__40188 == null)))?((((map__40188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40188):map__40188);
var file_msg = map__40188__$1;
var request_url = cljs.core.get.call(null,map__40188__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return (function (){var or__32286__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40188,map__40188__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40188,map__40188__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__){
return (function (state_40226){
var state_val_40227 = (state_40226[(1)]);
if((state_val_40227 === (7))){
var inst_40222 = (state_40226[(2)]);
var state_40226__$1 = state_40226;
var statearr_40228_40257 = state_40226__$1;
(statearr_40228_40257[(2)] = inst_40222);

(statearr_40228_40257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (1))){
var state_40226__$1 = state_40226;
var statearr_40229_40258 = state_40226__$1;
(statearr_40229_40258[(2)] = null);

(statearr_40229_40258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (4))){
var inst_40192 = (state_40226[(7)]);
var inst_40192__$1 = (state_40226[(2)]);
var state_40226__$1 = (function (){var statearr_40230 = state_40226;
(statearr_40230[(7)] = inst_40192__$1);

return statearr_40230;
})();
if(cljs.core.truth_(inst_40192__$1)){
var statearr_40231_40259 = state_40226__$1;
(statearr_40231_40259[(1)] = (5));

} else {
var statearr_40232_40260 = state_40226__$1;
(statearr_40232_40260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (15))){
var inst_40205 = (state_40226[(8)]);
var inst_40207 = (state_40226[(9)]);
var inst_40209 = inst_40207.call(null,inst_40205);
var state_40226__$1 = state_40226;
var statearr_40233_40261 = state_40226__$1;
(statearr_40233_40261[(2)] = inst_40209);

(statearr_40233_40261[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (13))){
var inst_40216 = (state_40226[(2)]);
var state_40226__$1 = state_40226;
var statearr_40234_40262 = state_40226__$1;
(statearr_40234_40262[(2)] = inst_40216);

(statearr_40234_40262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (6))){
var state_40226__$1 = state_40226;
var statearr_40235_40263 = state_40226__$1;
(statearr_40235_40263[(2)] = null);

(statearr_40235_40263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (17))){
var inst_40213 = (state_40226[(2)]);
var state_40226__$1 = state_40226;
var statearr_40236_40264 = state_40226__$1;
(statearr_40236_40264[(2)] = inst_40213);

(statearr_40236_40264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (3))){
var inst_40224 = (state_40226[(2)]);
var state_40226__$1 = state_40226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40226__$1,inst_40224);
} else {
if((state_val_40227 === (12))){
var state_40226__$1 = state_40226;
var statearr_40237_40265 = state_40226__$1;
(statearr_40237_40265[(2)] = null);

(statearr_40237_40265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (2))){
var state_40226__$1 = state_40226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40226__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40227 === (11))){
var inst_40197 = (state_40226[(10)]);
var inst_40203 = figwheel.client.file_reloading.blocking_load.call(null,inst_40197);
var state_40226__$1 = state_40226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40226__$1,(14),inst_40203);
} else {
if((state_val_40227 === (9))){
var inst_40197 = (state_40226[(10)]);
var state_40226__$1 = state_40226;
if(cljs.core.truth_(inst_40197)){
var statearr_40238_40266 = state_40226__$1;
(statearr_40238_40266[(1)] = (11));

} else {
var statearr_40239_40267 = state_40226__$1;
(statearr_40239_40267[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (5))){
var inst_40192 = (state_40226[(7)]);
var inst_40198 = (state_40226[(11)]);
var inst_40197 = cljs.core.nth.call(null,inst_40192,(0),null);
var inst_40198__$1 = cljs.core.nth.call(null,inst_40192,(1),null);
var state_40226__$1 = (function (){var statearr_40240 = state_40226;
(statearr_40240[(11)] = inst_40198__$1);

(statearr_40240[(10)] = inst_40197);

return statearr_40240;
})();
if(cljs.core.truth_(inst_40198__$1)){
var statearr_40241_40268 = state_40226__$1;
(statearr_40241_40268[(1)] = (8));

} else {
var statearr_40242_40269 = state_40226__$1;
(statearr_40242_40269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (14))){
var inst_40207 = (state_40226[(9)]);
var inst_40197 = (state_40226[(10)]);
var inst_40205 = (state_40226[(2)]);
var inst_40206 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40207__$1 = cljs.core.get.call(null,inst_40206,inst_40197);
var state_40226__$1 = (function (){var statearr_40243 = state_40226;
(statearr_40243[(8)] = inst_40205);

(statearr_40243[(9)] = inst_40207__$1);

return statearr_40243;
})();
if(cljs.core.truth_(inst_40207__$1)){
var statearr_40244_40270 = state_40226__$1;
(statearr_40244_40270[(1)] = (15));

} else {
var statearr_40245_40271 = state_40226__$1;
(statearr_40245_40271[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (16))){
var inst_40205 = (state_40226[(8)]);
var inst_40211 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40205);
var state_40226__$1 = state_40226;
var statearr_40246_40272 = state_40226__$1;
(statearr_40246_40272[(2)] = inst_40211);

(statearr_40246_40272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (10))){
var inst_40218 = (state_40226[(2)]);
var state_40226__$1 = (function (){var statearr_40247 = state_40226;
(statearr_40247[(12)] = inst_40218);

return statearr_40247;
})();
var statearr_40248_40273 = state_40226__$1;
(statearr_40248_40273[(2)] = null);

(statearr_40248_40273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40227 === (8))){
var inst_40198 = (state_40226[(11)]);
var inst_40200 = eval(inst_40198);
var state_40226__$1 = state_40226;
var statearr_40249_40274 = state_40226__$1;
(statearr_40249_40274[(2)] = inst_40200);

(statearr_40249_40274[(1)] = (10));


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
});})(c__35192__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35079__auto__ = null;
var figwheel$client$file_reloading$state_machine__35079__auto____0 = (function (){
var statearr_40253 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40253[(0)] = figwheel$client$file_reloading$state_machine__35079__auto__);

(statearr_40253[(1)] = (1));

return statearr_40253;
});
var figwheel$client$file_reloading$state_machine__35079__auto____1 = (function (state_40226){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_40226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e40254){if((e40254 instanceof Object)){
var ex__35082__auto__ = e40254;
var statearr_40255_40275 = state_40226;
(statearr_40255_40275[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40276 = state_40226;
state_40226 = G__40276;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35079__auto__ = function(state_40226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35079__auto____1.call(this,state_40226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35079__auto____0;
figwheel$client$file_reloading$state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35079__auto____1;
return figwheel$client$file_reloading$state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__))
})();
var state__35194__auto__ = (function (){var statearr_40256 = f__35193__auto__.call(null);
(statearr_40256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_40256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__))
);

return c__35192__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var args40277 = [];
var len__33469__auto___40280 = arguments.length;
var i__33470__auto___40281 = (0);
while(true){
if((i__33470__auto___40281 < len__33469__auto___40280)){
args40277.push((arguments[i__33470__auto___40281]));

var G__40282 = (i__33470__auto___40281 + (1));
i__33470__auto___40281 = G__40282;
continue;
} else {
}
break;
}

var G__40279 = args40277.length;
switch (G__40279) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40277.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40284,callback){
var map__40287 = p__40284;
var map__40287__$1 = ((((!((map__40287 == null)))?((((map__40287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40287):map__40287);
var file_msg = map__40287__$1;
var namespace = cljs.core.get.call(null,map__40287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40287,map__40287__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40287,map__40287__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40289){
var map__40292 = p__40289;
var map__40292__$1 = ((((!((map__40292 == null)))?((((map__40292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40292):map__40292);
var file_msg = map__40292__$1;
var namespace = cljs.core.get.call(null,map__40292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return cljs.core.some_QMARK_.call(null,cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,{}),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40294){
var map__40297 = p__40294;
var map__40297__$1 = ((((!((map__40297 == null)))?((((map__40297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40297):map__40297);
var file_msg = map__40297__$1;
var namespace = cljs.core.get.call(null,map__40297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__32274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__32274__auto__){
var or__32286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
var or__32286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__32286__auto____$1)){
return or__32286__auto____$1;
} else {
var or__32286__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__32286__auto____$2)){
return or__32286__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__32274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40299,callback){
var map__40302 = p__40299;
var map__40302__$1 = ((((!((map__40302 == null)))?((((map__40302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40302):map__40302);
var file_msg = map__40302__$1;
var request_url = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40302__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35192__auto___40406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___40406,out){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___40406,out){
return (function (state_40388){
var state_val_40389 = (state_40388[(1)]);
if((state_val_40389 === (1))){
var inst_40362 = cljs.core.seq.call(null,files);
var inst_40363 = cljs.core.first.call(null,inst_40362);
var inst_40364 = cljs.core.next.call(null,inst_40362);
var inst_40365 = files;
var state_40388__$1 = (function (){var statearr_40390 = state_40388;
(statearr_40390[(7)] = inst_40364);

(statearr_40390[(8)] = inst_40365);

(statearr_40390[(9)] = inst_40363);

return statearr_40390;
})();
var statearr_40391_40407 = state_40388__$1;
(statearr_40391_40407[(2)] = null);

(statearr_40391_40407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (2))){
var inst_40371 = (state_40388[(10)]);
var inst_40365 = (state_40388[(8)]);
var inst_40370 = cljs.core.seq.call(null,inst_40365);
var inst_40371__$1 = cljs.core.first.call(null,inst_40370);
var inst_40372 = cljs.core.next.call(null,inst_40370);
var inst_40373 = (inst_40371__$1 == null);
var inst_40374 = cljs.core.not.call(null,inst_40373);
var state_40388__$1 = (function (){var statearr_40392 = state_40388;
(statearr_40392[(10)] = inst_40371__$1);

(statearr_40392[(11)] = inst_40372);

return statearr_40392;
})();
if(inst_40374){
var statearr_40393_40408 = state_40388__$1;
(statearr_40393_40408[(1)] = (4));

} else {
var statearr_40394_40409 = state_40388__$1;
(statearr_40394_40409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (3))){
var inst_40386 = (state_40388[(2)]);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40388__$1,inst_40386);
} else {
if((state_val_40389 === (4))){
var inst_40371 = (state_40388[(10)]);
var inst_40376 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40371);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40388__$1,(7),inst_40376);
} else {
if((state_val_40389 === (5))){
var inst_40382 = cljs.core.async.close_BANG_.call(null,out);
var state_40388__$1 = state_40388;
var statearr_40395_40410 = state_40388__$1;
(statearr_40395_40410[(2)] = inst_40382);

(statearr_40395_40410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (6))){
var inst_40384 = (state_40388[(2)]);
var state_40388__$1 = state_40388;
var statearr_40396_40411 = state_40388__$1;
(statearr_40396_40411[(2)] = inst_40384);

(statearr_40396_40411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (7))){
var inst_40372 = (state_40388[(11)]);
var inst_40378 = (state_40388[(2)]);
var inst_40379 = cljs.core.async.put_BANG_.call(null,out,inst_40378);
var inst_40365 = inst_40372;
var state_40388__$1 = (function (){var statearr_40397 = state_40388;
(statearr_40397[(12)] = inst_40379);

(statearr_40397[(8)] = inst_40365);

return statearr_40397;
})();
var statearr_40398_40412 = state_40388__$1;
(statearr_40398_40412[(2)] = null);

(statearr_40398_40412[(1)] = (2));


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
});})(c__35192__auto___40406,out))
;
return ((function (switch__35078__auto__,c__35192__auto___40406,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____0 = (function (){
var statearr_40402 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40402[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__);

(statearr_40402[(1)] = (1));

return statearr_40402;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____1 = (function (state_40388){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_40388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e40403){if((e40403 instanceof Object)){
var ex__35082__auto__ = e40403;
var statearr_40404_40413 = state_40388;
(statearr_40404_40413[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40414 = state_40388;
state_40388 = G__40414;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__ = function(state_40388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____1.call(this,state_40388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___40406,out))
})();
var state__35194__auto__ = (function (){var statearr_40405 = f__35193__auto__.call(null);
(statearr_40405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___40406);

return statearr_40405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___40406,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40415,opts){
var map__40419 = p__40415;
var map__40419__$1 = ((((!((map__40419 == null)))?((((map__40419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40419):map__40419);
var eval_body__$1 = cljs.core.get.call(null,map__40419__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__32274__auto__ = eval_body__$1;
if(cljs.core.truth_(and__32274__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__32274__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40421){var e = e40421;
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
return (function (p1__40422_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40422_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40431){
var vec__40432 = p__40431;
var k = cljs.core.nth.call(null,vec__40432,(0),null);
var v = cljs.core.nth.call(null,vec__40432,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40435){
var vec__40436 = p__40435;
var k = cljs.core.nth.call(null,vec__40436,(0),null);
var v = cljs.core.nth.call(null,vec__40436,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40442,p__40443){
var map__40690 = p__40442;
var map__40690__$1 = ((((!((map__40690 == null)))?((((map__40690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40690):map__40690);
var opts = map__40690__$1;
var before_jsload = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40691 = p__40443;
var map__40691__$1 = ((((!((map__40691 == null)))?((((map__40691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40691):map__40691);
var msg = map__40691__$1;
var files = cljs.core.get.call(null,map__40691__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40691__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40691__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40844){
var state_val_40845 = (state_40844[(1)]);
if((state_val_40845 === (7))){
var inst_40708 = (state_40844[(7)]);
var inst_40707 = (state_40844[(8)]);
var inst_40706 = (state_40844[(9)]);
var inst_40705 = (state_40844[(10)]);
var inst_40713 = cljs.core._nth.call(null,inst_40706,inst_40708);
var inst_40714 = figwheel.client.file_reloading.eval_body.call(null,inst_40713,opts);
var inst_40715 = (inst_40708 + (1));
var tmp40846 = inst_40707;
var tmp40847 = inst_40706;
var tmp40848 = inst_40705;
var inst_40705__$1 = tmp40848;
var inst_40706__$1 = tmp40847;
var inst_40707__$1 = tmp40846;
var inst_40708__$1 = inst_40715;
var state_40844__$1 = (function (){var statearr_40849 = state_40844;
(statearr_40849[(7)] = inst_40708__$1);

(statearr_40849[(11)] = inst_40714);

(statearr_40849[(8)] = inst_40707__$1);

(statearr_40849[(9)] = inst_40706__$1);

(statearr_40849[(10)] = inst_40705__$1);

return statearr_40849;
})();
var statearr_40850_40936 = state_40844__$1;
(statearr_40850_40936[(2)] = null);

(statearr_40850_40936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (20))){
var inst_40748 = (state_40844[(12)]);
var inst_40756 = figwheel.client.file_reloading.sort_files.call(null,inst_40748);
var state_40844__$1 = state_40844;
var statearr_40851_40937 = state_40844__$1;
(statearr_40851_40937[(2)] = inst_40756);

(statearr_40851_40937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (27))){
var state_40844__$1 = state_40844;
var statearr_40852_40938 = state_40844__$1;
(statearr_40852_40938[(2)] = null);

(statearr_40852_40938[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (1))){
var inst_40697 = (state_40844[(13)]);
var inst_40694 = before_jsload.call(null,files);
var inst_40695 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40696 = (function (){return ((function (inst_40697,inst_40694,inst_40695,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40439_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40439_SHARP_);
});
;})(inst_40697,inst_40694,inst_40695,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40697__$1 = cljs.core.filter.call(null,inst_40696,files);
var inst_40698 = cljs.core.not_empty.call(null,inst_40697__$1);
var state_40844__$1 = (function (){var statearr_40853 = state_40844;
(statearr_40853[(13)] = inst_40697__$1);

(statearr_40853[(14)] = inst_40695);

(statearr_40853[(15)] = inst_40694);

return statearr_40853;
})();
if(cljs.core.truth_(inst_40698)){
var statearr_40854_40939 = state_40844__$1;
(statearr_40854_40939[(1)] = (2));

} else {
var statearr_40855_40940 = state_40844__$1;
(statearr_40855_40940[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (24))){
var state_40844__$1 = state_40844;
var statearr_40856_40941 = state_40844__$1;
(statearr_40856_40941[(2)] = null);

(statearr_40856_40941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (39))){
var inst_40798 = (state_40844[(16)]);
var state_40844__$1 = state_40844;
var statearr_40857_40942 = state_40844__$1;
(statearr_40857_40942[(2)] = inst_40798);

(statearr_40857_40942[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (46))){
var inst_40839 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40858_40943 = state_40844__$1;
(statearr_40858_40943[(2)] = inst_40839);

(statearr_40858_40943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (4))){
var inst_40742 = (state_40844[(2)]);
var inst_40743 = cljs.core.List.EMPTY;
var inst_40744 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40743);
var inst_40745 = (function (){return ((function (inst_40742,inst_40743,inst_40744,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40440_SHARP_){
var and__32274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40440_SHARP_);
if(cljs.core.truth_(and__32274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40440_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40440_SHARP_)));
} else {
return and__32274__auto__;
}
});
;})(inst_40742,inst_40743,inst_40744,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40746 = cljs.core.filter.call(null,inst_40745,files);
var inst_40747 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40748 = cljs.core.concat.call(null,inst_40746,inst_40747);
var state_40844__$1 = (function (){var statearr_40859 = state_40844;
(statearr_40859[(17)] = inst_40742);

(statearr_40859[(18)] = inst_40744);

(statearr_40859[(12)] = inst_40748);

return statearr_40859;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40860_40944 = state_40844__$1;
(statearr_40860_40944[(1)] = (16));

} else {
var statearr_40861_40945 = state_40844__$1;
(statearr_40861_40945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (15))){
var inst_40732 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40862_40946 = state_40844__$1;
(statearr_40862_40946[(2)] = inst_40732);

(statearr_40862_40946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (21))){
var inst_40758 = (state_40844[(19)]);
var inst_40758__$1 = (state_40844[(2)]);
var inst_40759 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40758__$1);
var state_40844__$1 = (function (){var statearr_40863 = state_40844;
(statearr_40863[(19)] = inst_40758__$1);

return statearr_40863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40844__$1,(22),inst_40759);
} else {
if((state_val_40845 === (31))){
var inst_40842 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40844__$1,inst_40842);
} else {
if((state_val_40845 === (32))){
var inst_40798 = (state_40844[(16)]);
var inst_40803 = inst_40798.cljs$lang$protocol_mask$partition0$;
var inst_40804 = (inst_40803 & (64));
var inst_40805 = inst_40798.cljs$core$ISeq$;
var inst_40806 = (inst_40804) || (inst_40805);
var state_40844__$1 = state_40844;
if(cljs.core.truth_(inst_40806)){
var statearr_40864_40947 = state_40844__$1;
(statearr_40864_40947[(1)] = (35));

} else {
var statearr_40865_40948 = state_40844__$1;
(statearr_40865_40948[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (40))){
var inst_40819 = (state_40844[(20)]);
var inst_40818 = (state_40844[(2)]);
var inst_40819__$1 = cljs.core.get.call(null,inst_40818,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40820 = cljs.core.get.call(null,inst_40818,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40821 = cljs.core.not_empty.call(null,inst_40819__$1);
var state_40844__$1 = (function (){var statearr_40866 = state_40844;
(statearr_40866[(21)] = inst_40820);

(statearr_40866[(20)] = inst_40819__$1);

return statearr_40866;
})();
if(cljs.core.truth_(inst_40821)){
var statearr_40867_40949 = state_40844__$1;
(statearr_40867_40949[(1)] = (41));

} else {
var statearr_40868_40950 = state_40844__$1;
(statearr_40868_40950[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (33))){
var state_40844__$1 = state_40844;
var statearr_40869_40951 = state_40844__$1;
(statearr_40869_40951[(2)] = false);

(statearr_40869_40951[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (13))){
var inst_40718 = (state_40844[(22)]);
var inst_40722 = cljs.core.chunk_first.call(null,inst_40718);
var inst_40723 = cljs.core.chunk_rest.call(null,inst_40718);
var inst_40724 = cljs.core.count.call(null,inst_40722);
var inst_40705 = inst_40723;
var inst_40706 = inst_40722;
var inst_40707 = inst_40724;
var inst_40708 = (0);
var state_40844__$1 = (function (){var statearr_40870 = state_40844;
(statearr_40870[(7)] = inst_40708);

(statearr_40870[(8)] = inst_40707);

(statearr_40870[(9)] = inst_40706);

(statearr_40870[(10)] = inst_40705);

return statearr_40870;
})();
var statearr_40871_40952 = state_40844__$1;
(statearr_40871_40952[(2)] = null);

(statearr_40871_40952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (22))){
var inst_40766 = (state_40844[(23)]);
var inst_40762 = (state_40844[(24)]);
var inst_40761 = (state_40844[(25)]);
var inst_40758 = (state_40844[(19)]);
var inst_40761__$1 = (state_40844[(2)]);
var inst_40762__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40761__$1);
var inst_40763 = (function (){var all_files = inst_40758;
var res_SINGLEQUOTE_ = inst_40761__$1;
var res = inst_40762__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40766,inst_40762,inst_40761,inst_40758,inst_40761__$1,inst_40762__$1,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40441_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40441_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40766,inst_40762,inst_40761,inst_40758,inst_40761__$1,inst_40762__$1,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40764 = cljs.core.filter.call(null,inst_40763,inst_40761__$1);
var inst_40765 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40766__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40765);
var inst_40767 = cljs.core.not_empty.call(null,inst_40766__$1);
var state_40844__$1 = (function (){var statearr_40872 = state_40844;
(statearr_40872[(23)] = inst_40766__$1);

(statearr_40872[(24)] = inst_40762__$1);

(statearr_40872[(26)] = inst_40764);

(statearr_40872[(25)] = inst_40761__$1);

return statearr_40872;
})();
if(cljs.core.truth_(inst_40767)){
var statearr_40873_40953 = state_40844__$1;
(statearr_40873_40953[(1)] = (23));

} else {
var statearr_40874_40954 = state_40844__$1;
(statearr_40874_40954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (36))){
var state_40844__$1 = state_40844;
var statearr_40875_40955 = state_40844__$1;
(statearr_40875_40955[(2)] = false);

(statearr_40875_40955[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (41))){
var inst_40819 = (state_40844[(20)]);
var inst_40823 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40824 = cljs.core.map.call(null,inst_40823,inst_40819);
var inst_40825 = cljs.core.pr_str.call(null,inst_40824);
var inst_40826 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40825)].join('');
var inst_40827 = figwheel.client.utils.log.call(null,inst_40826);
var state_40844__$1 = state_40844;
var statearr_40876_40956 = state_40844__$1;
(statearr_40876_40956[(2)] = inst_40827);

(statearr_40876_40956[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (43))){
var inst_40820 = (state_40844[(21)]);
var inst_40830 = (state_40844[(2)]);
var inst_40831 = cljs.core.not_empty.call(null,inst_40820);
var state_40844__$1 = (function (){var statearr_40877 = state_40844;
(statearr_40877[(27)] = inst_40830);

return statearr_40877;
})();
if(cljs.core.truth_(inst_40831)){
var statearr_40878_40957 = state_40844__$1;
(statearr_40878_40957[(1)] = (44));

} else {
var statearr_40879_40958 = state_40844__$1;
(statearr_40879_40958[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (29))){
var inst_40766 = (state_40844[(23)]);
var inst_40762 = (state_40844[(24)]);
var inst_40764 = (state_40844[(26)]);
var inst_40761 = (state_40844[(25)]);
var inst_40798 = (state_40844[(16)]);
var inst_40758 = (state_40844[(19)]);
var inst_40794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40797 = (function (){var all_files = inst_40758;
var res_SINGLEQUOTE_ = inst_40761;
var res = inst_40762;
var files_not_loaded = inst_40764;
var dependencies_that_loaded = inst_40766;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40798,inst_40758,inst_40794,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40796){
var map__40880 = p__40796;
var map__40880__$1 = ((((!((map__40880 == null)))?((((map__40880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40880):map__40880);
var namespace = cljs.core.get.call(null,map__40880__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40798,inst_40758,inst_40794,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40798__$1 = cljs.core.group_by.call(null,inst_40797,inst_40764);
var inst_40800 = (inst_40798__$1 == null);
var inst_40801 = cljs.core.not.call(null,inst_40800);
var state_40844__$1 = (function (){var statearr_40882 = state_40844;
(statearr_40882[(28)] = inst_40794);

(statearr_40882[(16)] = inst_40798__$1);

return statearr_40882;
})();
if(inst_40801){
var statearr_40883_40959 = state_40844__$1;
(statearr_40883_40959[(1)] = (32));

} else {
var statearr_40884_40960 = state_40844__$1;
(statearr_40884_40960[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (44))){
var inst_40820 = (state_40844[(21)]);
var inst_40833 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40820);
var inst_40834 = cljs.core.pr_str.call(null,inst_40833);
var inst_40835 = [cljs.core.str("not required: "),cljs.core.str(inst_40834)].join('');
var inst_40836 = figwheel.client.utils.log.call(null,inst_40835);
var state_40844__$1 = state_40844;
var statearr_40885_40961 = state_40844__$1;
(statearr_40885_40961[(2)] = inst_40836);

(statearr_40885_40961[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (6))){
var inst_40739 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40886_40962 = state_40844__$1;
(statearr_40886_40962[(2)] = inst_40739);

(statearr_40886_40962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (28))){
var inst_40764 = (state_40844[(26)]);
var inst_40791 = (state_40844[(2)]);
var inst_40792 = cljs.core.not_empty.call(null,inst_40764);
var state_40844__$1 = (function (){var statearr_40887 = state_40844;
(statearr_40887[(29)] = inst_40791);

return statearr_40887;
})();
if(cljs.core.truth_(inst_40792)){
var statearr_40888_40963 = state_40844__$1;
(statearr_40888_40963[(1)] = (29));

} else {
var statearr_40889_40964 = state_40844__$1;
(statearr_40889_40964[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (25))){
var inst_40762 = (state_40844[(24)]);
var inst_40778 = (state_40844[(2)]);
var inst_40779 = cljs.core.not_empty.call(null,inst_40762);
var state_40844__$1 = (function (){var statearr_40890 = state_40844;
(statearr_40890[(30)] = inst_40778);

return statearr_40890;
})();
if(cljs.core.truth_(inst_40779)){
var statearr_40891_40965 = state_40844__$1;
(statearr_40891_40965[(1)] = (26));

} else {
var statearr_40892_40966 = state_40844__$1;
(statearr_40892_40966[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (34))){
var inst_40813 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
if(cljs.core.truth_(inst_40813)){
var statearr_40893_40967 = state_40844__$1;
(statearr_40893_40967[(1)] = (38));

} else {
var statearr_40894_40968 = state_40844__$1;
(statearr_40894_40968[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (17))){
var state_40844__$1 = state_40844;
var statearr_40895_40969 = state_40844__$1;
(statearr_40895_40969[(2)] = recompile_dependents);

(statearr_40895_40969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (3))){
var state_40844__$1 = state_40844;
var statearr_40896_40970 = state_40844__$1;
(statearr_40896_40970[(2)] = null);

(statearr_40896_40970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (12))){
var inst_40735 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40897_40971 = state_40844__$1;
(statearr_40897_40971[(2)] = inst_40735);

(statearr_40897_40971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (2))){
var inst_40697 = (state_40844[(13)]);
var inst_40704 = cljs.core.seq.call(null,inst_40697);
var inst_40705 = inst_40704;
var inst_40706 = null;
var inst_40707 = (0);
var inst_40708 = (0);
var state_40844__$1 = (function (){var statearr_40898 = state_40844;
(statearr_40898[(7)] = inst_40708);

(statearr_40898[(8)] = inst_40707);

(statearr_40898[(9)] = inst_40706);

(statearr_40898[(10)] = inst_40705);

return statearr_40898;
})();
var statearr_40899_40972 = state_40844__$1;
(statearr_40899_40972[(2)] = null);

(statearr_40899_40972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (23))){
var inst_40766 = (state_40844[(23)]);
var inst_40762 = (state_40844[(24)]);
var inst_40764 = (state_40844[(26)]);
var inst_40761 = (state_40844[(25)]);
var inst_40758 = (state_40844[(19)]);
var inst_40769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40771 = (function (){var all_files = inst_40758;
var res_SINGLEQUOTE_ = inst_40761;
var res = inst_40762;
var files_not_loaded = inst_40764;
var dependencies_that_loaded = inst_40766;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40769,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40770){
var map__40900 = p__40770;
var map__40900__$1 = ((((!((map__40900 == null)))?((((map__40900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40900):map__40900);
var request_url = cljs.core.get.call(null,map__40900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40769,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40772 = cljs.core.reverse.call(null,inst_40766);
var inst_40773 = cljs.core.map.call(null,inst_40771,inst_40772);
var inst_40774 = cljs.core.pr_str.call(null,inst_40773);
var inst_40775 = figwheel.client.utils.log.call(null,inst_40774);
var state_40844__$1 = (function (){var statearr_40902 = state_40844;
(statearr_40902[(31)] = inst_40769);

return statearr_40902;
})();
var statearr_40903_40973 = state_40844__$1;
(statearr_40903_40973[(2)] = inst_40775);

(statearr_40903_40973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (35))){
var state_40844__$1 = state_40844;
var statearr_40904_40974 = state_40844__$1;
(statearr_40904_40974[(2)] = true);

(statearr_40904_40974[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (19))){
var inst_40748 = (state_40844[(12)]);
var inst_40754 = figwheel.client.file_reloading.expand_files.call(null,inst_40748);
var state_40844__$1 = state_40844;
var statearr_40905_40975 = state_40844__$1;
(statearr_40905_40975[(2)] = inst_40754);

(statearr_40905_40975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (11))){
var state_40844__$1 = state_40844;
var statearr_40906_40976 = state_40844__$1;
(statearr_40906_40976[(2)] = null);

(statearr_40906_40976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (9))){
var inst_40737 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40907_40977 = state_40844__$1;
(statearr_40907_40977[(2)] = inst_40737);

(statearr_40907_40977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (5))){
var inst_40708 = (state_40844[(7)]);
var inst_40707 = (state_40844[(8)]);
var inst_40710 = (inst_40708 < inst_40707);
var inst_40711 = inst_40710;
var state_40844__$1 = state_40844;
if(cljs.core.truth_(inst_40711)){
var statearr_40908_40978 = state_40844__$1;
(statearr_40908_40978[(1)] = (7));

} else {
var statearr_40909_40979 = state_40844__$1;
(statearr_40909_40979[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (14))){
var inst_40718 = (state_40844[(22)]);
var inst_40727 = cljs.core.first.call(null,inst_40718);
var inst_40728 = figwheel.client.file_reloading.eval_body.call(null,inst_40727,opts);
var inst_40729 = cljs.core.next.call(null,inst_40718);
var inst_40705 = inst_40729;
var inst_40706 = null;
var inst_40707 = (0);
var inst_40708 = (0);
var state_40844__$1 = (function (){var statearr_40910 = state_40844;
(statearr_40910[(7)] = inst_40708);

(statearr_40910[(32)] = inst_40728);

(statearr_40910[(8)] = inst_40707);

(statearr_40910[(9)] = inst_40706);

(statearr_40910[(10)] = inst_40705);

return statearr_40910;
})();
var statearr_40911_40980 = state_40844__$1;
(statearr_40911_40980[(2)] = null);

(statearr_40911_40980[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (45))){
var state_40844__$1 = state_40844;
var statearr_40912_40981 = state_40844__$1;
(statearr_40912_40981[(2)] = null);

(statearr_40912_40981[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (26))){
var inst_40766 = (state_40844[(23)]);
var inst_40762 = (state_40844[(24)]);
var inst_40764 = (state_40844[(26)]);
var inst_40761 = (state_40844[(25)]);
var inst_40758 = (state_40844[(19)]);
var inst_40781 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40783 = (function (){var all_files = inst_40758;
var res_SINGLEQUOTE_ = inst_40761;
var res = inst_40762;
var files_not_loaded = inst_40764;
var dependencies_that_loaded = inst_40766;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40781,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40782){
var map__40913 = p__40782;
var map__40913__$1 = ((((!((map__40913 == null)))?((((map__40913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40913):map__40913);
var namespace = cljs.core.get.call(null,map__40913__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40913__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40781,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40784 = cljs.core.map.call(null,inst_40783,inst_40762);
var inst_40785 = cljs.core.pr_str.call(null,inst_40784);
var inst_40786 = figwheel.client.utils.log.call(null,inst_40785);
var inst_40787 = (function (){var all_files = inst_40758;
var res_SINGLEQUOTE_ = inst_40761;
var res = inst_40762;
var files_not_loaded = inst_40764;
var dependencies_that_loaded = inst_40766;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40781,inst_40783,inst_40784,inst_40785,inst_40786,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40766,inst_40762,inst_40764,inst_40761,inst_40758,inst_40781,inst_40783,inst_40784,inst_40785,inst_40786,state_val_40845,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40788 = setTimeout(inst_40787,(10));
var state_40844__$1 = (function (){var statearr_40915 = state_40844;
(statearr_40915[(33)] = inst_40786);

(statearr_40915[(34)] = inst_40781);

return statearr_40915;
})();
var statearr_40916_40982 = state_40844__$1;
(statearr_40916_40982[(2)] = inst_40788);

(statearr_40916_40982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (16))){
var state_40844__$1 = state_40844;
var statearr_40917_40983 = state_40844__$1;
(statearr_40917_40983[(2)] = reload_dependents);

(statearr_40917_40983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (38))){
var inst_40798 = (state_40844[(16)]);
var inst_40815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40798);
var state_40844__$1 = state_40844;
var statearr_40918_40984 = state_40844__$1;
(statearr_40918_40984[(2)] = inst_40815);

(statearr_40918_40984[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (30))){
var state_40844__$1 = state_40844;
var statearr_40919_40985 = state_40844__$1;
(statearr_40919_40985[(2)] = null);

(statearr_40919_40985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (10))){
var inst_40718 = (state_40844[(22)]);
var inst_40720 = cljs.core.chunked_seq_QMARK_.call(null,inst_40718);
var state_40844__$1 = state_40844;
if(inst_40720){
var statearr_40920_40986 = state_40844__$1;
(statearr_40920_40986[(1)] = (13));

} else {
var statearr_40921_40987 = state_40844__$1;
(statearr_40921_40987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (18))){
var inst_40752 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
if(cljs.core.truth_(inst_40752)){
var statearr_40922_40988 = state_40844__$1;
(statearr_40922_40988[(1)] = (19));

} else {
var statearr_40923_40989 = state_40844__$1;
(statearr_40923_40989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (42))){
var state_40844__$1 = state_40844;
var statearr_40924_40990 = state_40844__$1;
(statearr_40924_40990[(2)] = null);

(statearr_40924_40990[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (37))){
var inst_40810 = (state_40844[(2)]);
var state_40844__$1 = state_40844;
var statearr_40925_40991 = state_40844__$1;
(statearr_40925_40991[(2)] = inst_40810);

(statearr_40925_40991[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40845 === (8))){
var inst_40718 = (state_40844[(22)]);
var inst_40705 = (state_40844[(10)]);
var inst_40718__$1 = cljs.core.seq.call(null,inst_40705);
var state_40844__$1 = (function (){var statearr_40926 = state_40844;
(statearr_40926[(22)] = inst_40718__$1);

return statearr_40926;
})();
if(inst_40718__$1){
var statearr_40927_40992 = state_40844__$1;
(statearr_40927_40992[(1)] = (10));

} else {
var statearr_40928_40993 = state_40844__$1;
(statearr_40928_40993[(1)] = (11));

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
});})(c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35078__auto__,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____0 = (function (){
var statearr_40932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40932[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__);

(statearr_40932[(1)] = (1));

return statearr_40932;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____1 = (function (state_40844){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_40844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e40933){if((e40933 instanceof Object)){
var ex__35082__auto__ = e40933;
var statearr_40934_40994 = state_40844;
(statearr_40934_40994[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40995 = state_40844;
state_40844 = G__40995;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__ = function(state_40844){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____1.call(this,state_40844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35194__auto__ = (function (){var statearr_40935 = f__35193__auto__.call(null);
(statearr_40935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_40935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__,map__40690,map__40690__$1,opts,before_jsload,on_jsload,reload_dependents,map__40691,map__40691__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35192__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40998,link){
var map__41001 = p__40998;
var map__41001__$1 = ((((!((map__41001 == null)))?((((map__41001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41001):map__41001);
var file = cljs.core.get.call(null,map__41001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__41001,map__41001__$1,file){
return (function (p1__40996_SHARP_,p2__40997_SHARP_){
if(cljs.core._EQ_.call(null,p1__40996_SHARP_,p2__40997_SHARP_)){
return p1__40996_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__41001,map__41001__$1,file))
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
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41007){
var map__41008 = p__41007;
var map__41008__$1 = ((((!((map__41008 == null)))?((((map__41008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41008):map__41008);
var match_length = cljs.core.get.call(null,map__41008__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41008__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41003_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41003_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41010_SHARP_,p2__41011_SHARP_){
return cljs.core.assoc.call(null,p1__41010_SHARP_,cljs.core.get.call(null,p2__41011_SHARP_,key),p2__41011_SHARP_);
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
var loaded_f_datas_41012 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41012);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41012);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41013,p__41014){
var map__41019 = p__41013;
var map__41019__$1 = ((((!((map__41019 == null)))?((((map__41019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41019):map__41019);
var on_cssload = cljs.core.get.call(null,map__41019__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41020 = p__41014;
var map__41020__$1 = ((((!((map__41020 == null)))?((((map__41020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41020):map__41020);
var files_msg = map__41020__$1;
var files = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514286308185