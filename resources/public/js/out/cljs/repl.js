// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42100){
var map__42125 = p__42100;
var map__42125__$1 = ((((!((map__42125 == null)))?((((map__42125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42125):map__42125);
var m = map__42125__$1;
var n = cljs.core.get.call(null,map__42125__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42125__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42127_42149 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42128_42150 = null;
var count__42129_42151 = (0);
var i__42130_42152 = (0);
while(true){
if((i__42130_42152 < count__42129_42151)){
var f_42153 = cljs.core._nth.call(null,chunk__42128_42150,i__42130_42152);
cljs.core.println.call(null,"  ",f_42153);

var G__42154 = seq__42127_42149;
var G__42155 = chunk__42128_42150;
var G__42156 = count__42129_42151;
var G__42157 = (i__42130_42152 + (1));
seq__42127_42149 = G__42154;
chunk__42128_42150 = G__42155;
count__42129_42151 = G__42156;
i__42130_42152 = G__42157;
continue;
} else {
var temp__6503__auto___42158 = cljs.core.seq.call(null,seq__42127_42149);
if(temp__6503__auto___42158){
var seq__42127_42159__$1 = temp__6503__auto___42158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42127_42159__$1)){
var c__33189__auto___42160 = cljs.core.chunk_first.call(null,seq__42127_42159__$1);
var G__42161 = cljs.core.chunk_rest.call(null,seq__42127_42159__$1);
var G__42162 = c__33189__auto___42160;
var G__42163 = cljs.core.count.call(null,c__33189__auto___42160);
var G__42164 = (0);
seq__42127_42149 = G__42161;
chunk__42128_42150 = G__42162;
count__42129_42151 = G__42163;
i__42130_42152 = G__42164;
continue;
} else {
var f_42165 = cljs.core.first.call(null,seq__42127_42159__$1);
cljs.core.println.call(null,"  ",f_42165);

var G__42166 = cljs.core.next.call(null,seq__42127_42159__$1);
var G__42167 = null;
var G__42168 = (0);
var G__42169 = (0);
seq__42127_42149 = G__42166;
chunk__42128_42150 = G__42167;
count__42129_42151 = G__42168;
i__42130_42152 = G__42169;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42170 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__32286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42170);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42170)))?cljs.core.second.call(null,arglists_42170):arglists_42170));
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
var seq__42131_42171 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42132_42172 = null;
var count__42133_42173 = (0);
var i__42134_42174 = (0);
while(true){
if((i__42134_42174 < count__42133_42173)){
var vec__42135_42175 = cljs.core._nth.call(null,chunk__42132_42172,i__42134_42174);
var name_42176 = cljs.core.nth.call(null,vec__42135_42175,(0),null);
var map__42138_42177 = cljs.core.nth.call(null,vec__42135_42175,(1),null);
var map__42138_42178__$1 = ((((!((map__42138_42177 == null)))?((((map__42138_42177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42138_42177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42138_42177):map__42138_42177);
var doc_42179 = cljs.core.get.call(null,map__42138_42178__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42180 = cljs.core.get.call(null,map__42138_42178__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42176);

cljs.core.println.call(null," ",arglists_42180);

if(cljs.core.truth_(doc_42179)){
cljs.core.println.call(null," ",doc_42179);
} else {
}

var G__42181 = seq__42131_42171;
var G__42182 = chunk__42132_42172;
var G__42183 = count__42133_42173;
var G__42184 = (i__42134_42174 + (1));
seq__42131_42171 = G__42181;
chunk__42132_42172 = G__42182;
count__42133_42173 = G__42183;
i__42134_42174 = G__42184;
continue;
} else {
var temp__6503__auto___42185 = cljs.core.seq.call(null,seq__42131_42171);
if(temp__6503__auto___42185){
var seq__42131_42186__$1 = temp__6503__auto___42185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42131_42186__$1)){
var c__33189__auto___42187 = cljs.core.chunk_first.call(null,seq__42131_42186__$1);
var G__42188 = cljs.core.chunk_rest.call(null,seq__42131_42186__$1);
var G__42189 = c__33189__auto___42187;
var G__42190 = cljs.core.count.call(null,c__33189__auto___42187);
var G__42191 = (0);
seq__42131_42171 = G__42188;
chunk__42132_42172 = G__42189;
count__42133_42173 = G__42190;
i__42134_42174 = G__42191;
continue;
} else {
var vec__42140_42192 = cljs.core.first.call(null,seq__42131_42186__$1);
var name_42193 = cljs.core.nth.call(null,vec__42140_42192,(0),null);
var map__42143_42194 = cljs.core.nth.call(null,vec__42140_42192,(1),null);
var map__42143_42195__$1 = ((((!((map__42143_42194 == null)))?((((map__42143_42194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42143_42194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42143_42194):map__42143_42194);
var doc_42196 = cljs.core.get.call(null,map__42143_42195__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42197 = cljs.core.get.call(null,map__42143_42195__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42193);

cljs.core.println.call(null," ",arglists_42197);

if(cljs.core.truth_(doc_42196)){
cljs.core.println.call(null," ",doc_42196);
} else {
}

var G__42198 = cljs.core.next.call(null,seq__42131_42186__$1);
var G__42199 = null;
var G__42200 = (0);
var G__42201 = (0);
seq__42131_42171 = G__42198;
chunk__42132_42172 = G__42199;
count__42133_42173 = G__42200;
i__42134_42174 = G__42201;
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

var seq__42145 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42146 = null;
var count__42147 = (0);
var i__42148 = (0);
while(true){
if((i__42148 < count__42147)){
var role = cljs.core._nth.call(null,chunk__42146,i__42148);
var temp__6503__auto___42202__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___42202__$1)){
var spec_42203 = temp__6503__auto___42202__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42203));
} else {
}

var G__42204 = seq__42145;
var G__42205 = chunk__42146;
var G__42206 = count__42147;
var G__42207 = (i__42148 + (1));
seq__42145 = G__42204;
chunk__42146 = G__42205;
count__42147 = G__42206;
i__42148 = G__42207;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__42145);
if(temp__6503__auto____$1){
var seq__42145__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42145__$1)){
var c__33189__auto__ = cljs.core.chunk_first.call(null,seq__42145__$1);
var G__42208 = cljs.core.chunk_rest.call(null,seq__42145__$1);
var G__42209 = c__33189__auto__;
var G__42210 = cljs.core.count.call(null,c__33189__auto__);
var G__42211 = (0);
seq__42145 = G__42208;
chunk__42146 = G__42209;
count__42147 = G__42210;
i__42148 = G__42211;
continue;
} else {
var role = cljs.core.first.call(null,seq__42145__$1);
var temp__6503__auto___42212__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___42212__$2)){
var spec_42213 = temp__6503__auto___42212__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42213));
} else {
}

var G__42214 = cljs.core.next.call(null,seq__42145__$1);
var G__42215 = null;
var G__42216 = (0);
var G__42217 = (0);
seq__42145 = G__42214;
chunk__42146 = G__42215;
count__42147 = G__42216;
i__42148 = G__42217;
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

//# sourceMappingURL=repl.js.map?rel=1514286309139