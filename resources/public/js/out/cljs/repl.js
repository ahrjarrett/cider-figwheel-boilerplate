// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42117){
var map__42142 = p__42117;
var map__42142__$1 = ((((!((map__42142 == null)))?((((map__42142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42142):map__42142);
var m = map__42142__$1;
var n = cljs.core.get.call(null,map__42142__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42144_42166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42145_42167 = null;
var count__42146_42168 = (0);
var i__42147_42169 = (0);
while(true){
if((i__42147_42169 < count__42146_42168)){
var f_42170 = cljs.core._nth.call(null,chunk__42145_42167,i__42147_42169);
cljs.core.println.call(null,"  ",f_42170);

var G__42171 = seq__42144_42166;
var G__42172 = chunk__42145_42167;
var G__42173 = count__42146_42168;
var G__42174 = (i__42147_42169 + (1));
seq__42144_42166 = G__42171;
chunk__42145_42167 = G__42172;
count__42146_42168 = G__42173;
i__42147_42169 = G__42174;
continue;
} else {
var temp__6503__auto___42175 = cljs.core.seq.call(null,seq__42144_42166);
if(temp__6503__auto___42175){
var seq__42144_42176__$1 = temp__6503__auto___42175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42144_42176__$1)){
var c__13050__auto___42177 = cljs.core.chunk_first.call(null,seq__42144_42176__$1);
var G__42178 = cljs.core.chunk_rest.call(null,seq__42144_42176__$1);
var G__42179 = c__13050__auto___42177;
var G__42180 = cljs.core.count.call(null,c__13050__auto___42177);
var G__42181 = (0);
seq__42144_42166 = G__42178;
chunk__42145_42167 = G__42179;
count__42146_42168 = G__42180;
i__42147_42169 = G__42181;
continue;
} else {
var f_42182 = cljs.core.first.call(null,seq__42144_42176__$1);
cljs.core.println.call(null,"  ",f_42182);

var G__42183 = cljs.core.next.call(null,seq__42144_42176__$1);
var G__42184 = null;
var G__42185 = (0);
var G__42186 = (0);
seq__42144_42166 = G__42183;
chunk__42145_42167 = G__42184;
count__42146_42168 = G__42185;
i__42147_42169 = G__42186;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42187 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__12147__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42187);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42187)))?cljs.core.second.call(null,arglists_42187):arglists_42187));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42148_42188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42149_42189 = null;
var count__42150_42190 = (0);
var i__42151_42191 = (0);
while(true){
if((i__42151_42191 < count__42150_42190)){
var vec__42152_42192 = cljs.core._nth.call(null,chunk__42149_42189,i__42151_42191);
var name_42193 = cljs.core.nth.call(null,vec__42152_42192,(0),null);
var map__42155_42194 = cljs.core.nth.call(null,vec__42152_42192,(1),null);
var map__42155_42195__$1 = ((((!((map__42155_42194 == null)))?((((map__42155_42194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42155_42194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42155_42194):map__42155_42194);
var doc_42196 = cljs.core.get.call(null,map__42155_42195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42197 = cljs.core.get.call(null,map__42155_42195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42193);

cljs.core.println.call(null," ",arglists_42197);

if(cljs.core.truth_(doc_42196)){
cljs.core.println.call(null," ",doc_42196);
} else {
}

var G__42198 = seq__42148_42188;
var G__42199 = chunk__42149_42189;
var G__42200 = count__42150_42190;
var G__42201 = (i__42151_42191 + (1));
seq__42148_42188 = G__42198;
chunk__42149_42189 = G__42199;
count__42150_42190 = G__42200;
i__42151_42191 = G__42201;
continue;
} else {
var temp__6503__auto___42202 = cljs.core.seq.call(null,seq__42148_42188);
if(temp__6503__auto___42202){
var seq__42148_42203__$1 = temp__6503__auto___42202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42148_42203__$1)){
var c__13050__auto___42204 = cljs.core.chunk_first.call(null,seq__42148_42203__$1);
var G__42205 = cljs.core.chunk_rest.call(null,seq__42148_42203__$1);
var G__42206 = c__13050__auto___42204;
var G__42207 = cljs.core.count.call(null,c__13050__auto___42204);
var G__42208 = (0);
seq__42148_42188 = G__42205;
chunk__42149_42189 = G__42206;
count__42150_42190 = G__42207;
i__42151_42191 = G__42208;
continue;
} else {
var vec__42157_42209 = cljs.core.first.call(null,seq__42148_42203__$1);
var name_42210 = cljs.core.nth.call(null,vec__42157_42209,(0),null);
var map__42160_42211 = cljs.core.nth.call(null,vec__42157_42209,(1),null);
var map__42160_42212__$1 = ((((!((map__42160_42211 == null)))?((((map__42160_42211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42160_42211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42160_42211):map__42160_42211);
var doc_42213 = cljs.core.get.call(null,map__42160_42212__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42214 = cljs.core.get.call(null,map__42160_42212__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42210);

cljs.core.println.call(null," ",arglists_42214);

if(cljs.core.truth_(doc_42213)){
cljs.core.println.call(null," ",doc_42213);
} else {
}

var G__42215 = cljs.core.next.call(null,seq__42148_42203__$1);
var G__42216 = null;
var G__42217 = (0);
var G__42218 = (0);
seq__42148_42188 = G__42215;
chunk__42149_42189 = G__42216;
count__42150_42190 = G__42217;
i__42151_42191 = G__42218;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__42162 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42163 = null;
var count__42164 = (0);
var i__42165 = (0);
while(true){
if((i__42165 < count__42164)){
var role = cljs.core._nth.call(null,chunk__42163,i__42165);
var temp__6503__auto___42219__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___42219__$1)){
var spec_42220 = temp__6503__auto___42219__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42220));
} else {
}

var G__42221 = seq__42162;
var G__42222 = chunk__42163;
var G__42223 = count__42164;
var G__42224 = (i__42165 + (1));
seq__42162 = G__42221;
chunk__42163 = G__42222;
count__42164 = G__42223;
i__42165 = G__42224;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__42162);
if(temp__6503__auto____$1){
var seq__42162__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42162__$1)){
var c__13050__auto__ = cljs.core.chunk_first.call(null,seq__42162__$1);
var G__42225 = cljs.core.chunk_rest.call(null,seq__42162__$1);
var G__42226 = c__13050__auto__;
var G__42227 = cljs.core.count.call(null,c__13050__auto__);
var G__42228 = (0);
seq__42162 = G__42225;
chunk__42163 = G__42226;
count__42164 = G__42227;
i__42165 = G__42228;
continue;
} else {
var role = cljs.core.first.call(null,seq__42162__$1);
var temp__6503__auto___42229__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___42229__$2)){
var spec_42230 = temp__6503__auto___42229__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42230));
} else {
}

var G__42231 = cljs.core.next.call(null,seq__42162__$1);
var G__42232 = null;
var G__42233 = (0);
var G__42234 = (0);
seq__42162 = G__42231;
chunk__42163 = G__42232;
count__42164 = G__42233;
i__42165 = G__42234;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1514283705632