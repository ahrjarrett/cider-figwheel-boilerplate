// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.15-SNAPSHOT";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (cljs.core.some_QMARK_.call(null,JSON.stringify)))?(function (x){
return [cljs.core.str("#js "),cljs.core.str(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str(x)].join('');
}catch (e42556){if((e42556 instanceof Error)){
var e = e42556;
return "Error: Unable to stringify";
} else {
throw e42556;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42558 = [];
var len__13330__auto___42561 = arguments.length;
var i__13331__auto___42562 = (0);
while(true){
if((i__13331__auto___42562 < len__13330__auto___42561)){
args42558.push((arguments[i__13331__auto___42562]));

var G__42563 = (i__13331__auto___42562 + (1));
i__13331__auto___42562 = G__42563;
continue;
} else {
}
break;
}

var G__42560 = args42558.length;
switch (G__42560) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42558.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42557_SHARP_){
if(typeof p1__42557_SHARP_ === 'string'){
return p1__42557_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42557_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__13337__auto__ = [];
var len__13330__auto___42566 = arguments.length;
var i__13331__auto___42567 = (0);
while(true){
if((i__13331__auto___42567 < len__13330__auto___42566)){
args__13337__auto__.push((arguments[i__13331__auto___42567]));

var G__42568 = (i__13331__auto___42567 + (1));
i__13331__auto___42567 = G__42568;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42565){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42565));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__13337__auto__ = [];
var len__13330__auto___42570 = arguments.length;
var i__13331__auto___42571 = (0);
while(true){
if((i__13331__auto___42571 < len__13330__auto___42570)){
args__13337__auto__.push((arguments[i__13331__auto___42571]));

var G__42572 = (i__13331__auto___42571 + (1));
i__13331__auto___42571 = G__42572;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42569){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42569));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42573){
var map__42576 = p__42573;
var map__42576__$1 = ((((!((map__42576 == null)))?((((map__42576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42576):map__42576);
var message = cljs.core.get.call(null,map__42576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__12147__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12147__auto__)){
return or__12147__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__12135__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12135__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12135__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35469__auto___42738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___42738,ch){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___42738,ch){
return (function (state_42707){
var state_val_42708 = (state_42707[(1)]);
if((state_val_42708 === (7))){
var inst_42703 = (state_42707[(2)]);
var state_42707__$1 = state_42707;
var statearr_42709_42739 = state_42707__$1;
(statearr_42709_42739[(2)] = inst_42703);

(statearr_42709_42739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (1))){
var state_42707__$1 = state_42707;
var statearr_42710_42740 = state_42707__$1;
(statearr_42710_42740[(2)] = null);

(statearr_42710_42740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (4))){
var inst_42660 = (state_42707[(7)]);
var inst_42660__$1 = (state_42707[(2)]);
var state_42707__$1 = (function (){var statearr_42711 = state_42707;
(statearr_42711[(7)] = inst_42660__$1);

return statearr_42711;
})();
if(cljs.core.truth_(inst_42660__$1)){
var statearr_42712_42741 = state_42707__$1;
(statearr_42712_42741[(1)] = (5));

} else {
var statearr_42713_42742 = state_42707__$1;
(statearr_42713_42742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (15))){
var inst_42667 = (state_42707[(8)]);
var inst_42682 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42667);
var inst_42683 = cljs.core.first.call(null,inst_42682);
var inst_42684 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42683);
var inst_42685 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42684)].join('');
var inst_42686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42685);
var state_42707__$1 = state_42707;
var statearr_42714_42743 = state_42707__$1;
(statearr_42714_42743[(2)] = inst_42686);

(statearr_42714_42743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (13))){
var inst_42691 = (state_42707[(2)]);
var state_42707__$1 = state_42707;
var statearr_42715_42744 = state_42707__$1;
(statearr_42715_42744[(2)] = inst_42691);

(statearr_42715_42744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (6))){
var state_42707__$1 = state_42707;
var statearr_42716_42745 = state_42707__$1;
(statearr_42716_42745[(2)] = null);

(statearr_42716_42745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (17))){
var inst_42689 = (state_42707[(2)]);
var state_42707__$1 = state_42707;
var statearr_42717_42746 = state_42707__$1;
(statearr_42717_42746[(2)] = inst_42689);

(statearr_42717_42746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (3))){
var inst_42705 = (state_42707[(2)]);
var state_42707__$1 = state_42707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42707__$1,inst_42705);
} else {
if((state_val_42708 === (12))){
var inst_42666 = (state_42707[(9)]);
var inst_42680 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42666,opts);
var state_42707__$1 = state_42707;
if(cljs.core.truth_(inst_42680)){
var statearr_42718_42747 = state_42707__$1;
(statearr_42718_42747[(1)] = (15));

} else {
var statearr_42719_42748 = state_42707__$1;
(statearr_42719_42748[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (2))){
var state_42707__$1 = state_42707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42707__$1,(4),ch);
} else {
if((state_val_42708 === (11))){
var inst_42667 = (state_42707[(8)]);
var inst_42672 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42673 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42667);
var inst_42674 = cljs.core.async.timeout.call(null,(1000));
var inst_42675 = [inst_42673,inst_42674];
var inst_42676 = (new cljs.core.PersistentVector(null,2,(5),inst_42672,inst_42675,null));
var state_42707__$1 = state_42707;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42707__$1,(14),inst_42676);
} else {
if((state_val_42708 === (9))){
var inst_42667 = (state_42707[(8)]);
var inst_42693 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42694 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42667);
var inst_42695 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42694);
var inst_42696 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42695)].join('');
var inst_42697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42696);
var state_42707__$1 = (function (){var statearr_42720 = state_42707;
(statearr_42720[(10)] = inst_42693);

return statearr_42720;
})();
var statearr_42721_42749 = state_42707__$1;
(statearr_42721_42749[(2)] = inst_42697);

(statearr_42721_42749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (5))){
var inst_42660 = (state_42707[(7)]);
var inst_42662 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42663 = (new cljs.core.PersistentArrayMap(null,2,inst_42662,null));
var inst_42664 = (new cljs.core.PersistentHashSet(null,inst_42663,null));
var inst_42665 = figwheel.client.focus_msgs.call(null,inst_42664,inst_42660);
var inst_42666 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42665);
var inst_42667 = cljs.core.first.call(null,inst_42665);
var inst_42668 = figwheel.client.autoload_QMARK_.call(null);
var state_42707__$1 = (function (){var statearr_42722 = state_42707;
(statearr_42722[(9)] = inst_42666);

(statearr_42722[(8)] = inst_42667);

return statearr_42722;
})();
if(cljs.core.truth_(inst_42668)){
var statearr_42723_42750 = state_42707__$1;
(statearr_42723_42750[(1)] = (8));

} else {
var statearr_42724_42751 = state_42707__$1;
(statearr_42724_42751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (14))){
var inst_42678 = (state_42707[(2)]);
var state_42707__$1 = state_42707;
var statearr_42725_42752 = state_42707__$1;
(statearr_42725_42752[(2)] = inst_42678);

(statearr_42725_42752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (16))){
var state_42707__$1 = state_42707;
var statearr_42726_42753 = state_42707__$1;
(statearr_42726_42753[(2)] = null);

(statearr_42726_42753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (10))){
var inst_42699 = (state_42707[(2)]);
var state_42707__$1 = (function (){var statearr_42727 = state_42707;
(statearr_42727[(11)] = inst_42699);

return statearr_42727;
})();
var statearr_42728_42754 = state_42707__$1;
(statearr_42728_42754[(2)] = null);

(statearr_42728_42754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42708 === (8))){
var inst_42666 = (state_42707[(9)]);
var inst_42670 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42666,opts);
var state_42707__$1 = state_42707;
if(cljs.core.truth_(inst_42670)){
var statearr_42729_42755 = state_42707__$1;
(statearr_42729_42755[(1)] = (11));

} else {
var statearr_42730_42756 = state_42707__$1;
(statearr_42730_42756[(1)] = (12));

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
});})(c__35469__auto___42738,ch))
;
return ((function (switch__35355__auto__,c__35469__auto___42738,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____0 = (function (){
var statearr_42734 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42734[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__);

(statearr_42734[(1)] = (1));

return statearr_42734;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____1 = (function (state_42707){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_42707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e42735){if((e42735 instanceof Object)){
var ex__35359__auto__ = e42735;
var statearr_42736_42757 = state_42707;
(statearr_42736_42757[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42758 = state_42707;
state_42707 = G__42758;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__ = function(state_42707){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____1.call(this,state_42707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35356__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___42738,ch))
})();
var state__35471__auto__ = (function (){var statearr_42737 = f__35470__auto__.call(null);
(statearr_42737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___42738);

return statearr_42737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___42738,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42759_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42759_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42762 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42762){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42761){if((e42761 instanceof Error)){
var e = e42761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42762], null));
} else {
var e = e42761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42762))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42763){
var map__42772 = p__42763;
var map__42772__$1 = ((((!((map__42772 == null)))?((((map__42772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42772):map__42772);
var opts = map__42772__$1;
var build_id = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42772,map__42772__$1,opts,build_id){
return (function (p__42774){
var vec__42775 = p__42774;
var seq__42776 = cljs.core.seq.call(null,vec__42775);
var first__42777 = cljs.core.first.call(null,seq__42776);
var seq__42776__$1 = cljs.core.next.call(null,seq__42776);
var map__42778 = first__42777;
var map__42778__$1 = ((((!((map__42778 == null)))?((((map__42778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42778):map__42778);
var msg = map__42778__$1;
var msg_name = cljs.core.get.call(null,map__42778__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42776__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42775,seq__42776,first__42777,seq__42776__$1,map__42778,map__42778__$1,msg,msg_name,_,map__42772,map__42772__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42775,seq__42776,first__42777,seq__42776__$1,map__42778,map__42778__$1,msg,msg_name,_,map__42772,map__42772__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42772,map__42772__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42786){
var vec__42787 = p__42786;
var seq__42788 = cljs.core.seq.call(null,vec__42787);
var first__42789 = cljs.core.first.call(null,seq__42788);
var seq__42788__$1 = cljs.core.next.call(null,seq__42788);
var map__42790 = first__42789;
var map__42790__$1 = ((((!((map__42790 == null)))?((((map__42790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42790):map__42790);
var msg = map__42790__$1;
var msg_name = cljs.core.get.call(null,map__42790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42788__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42792){
var map__42804 = p__42792;
var map__42804__$1 = ((((!((map__42804 == null)))?((((map__42804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42804):map__42804);
var on_compile_warning = cljs.core.get.call(null,map__42804__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42804__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42804,map__42804__$1,on_compile_warning,on_compile_fail){
return (function (p__42806){
var vec__42807 = p__42806;
var seq__42808 = cljs.core.seq.call(null,vec__42807);
var first__42809 = cljs.core.first.call(null,seq__42808);
var seq__42808__$1 = cljs.core.next.call(null,seq__42808);
var map__42810 = first__42809;
var map__42810__$1 = ((((!((map__42810 == null)))?((((map__42810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42810):map__42810);
var msg = map__42810__$1;
var msg_name = cljs.core.get.call(null,map__42810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42808__$1;
var pred__42812 = cljs.core._EQ_;
var expr__42813 = msg_name;
if(cljs.core.truth_(pred__42812.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42813))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42812.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42813))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42804,map__42804__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__,msg_hist,msg_names,msg){
return (function (state_43041){
var state_val_43042 = (state_43041[(1)]);
if((state_val_43042 === (7))){
var inst_42961 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42961)){
var statearr_43043_43093 = state_43041__$1;
(statearr_43043_43093[(1)] = (8));

} else {
var statearr_43044_43094 = state_43041__$1;
(statearr_43044_43094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (20))){
var inst_43035 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43045_43095 = state_43041__$1;
(statearr_43045_43095[(2)] = inst_43035);

(statearr_43045_43095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (27))){
var inst_43031 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43046_43096 = state_43041__$1;
(statearr_43046_43096[(2)] = inst_43031);

(statearr_43046_43096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (1))){
var inst_42954 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42954)){
var statearr_43047_43097 = state_43041__$1;
(statearr_43047_43097[(1)] = (2));

} else {
var statearr_43048_43098 = state_43041__$1;
(statearr_43048_43098[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (24))){
var inst_43033 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43049_43099 = state_43041__$1;
(statearr_43049_43099[(2)] = inst_43033);

(statearr_43049_43099[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (4))){
var inst_43039 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43041__$1,inst_43039);
} else {
if((state_val_43042 === (15))){
var inst_43037 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43050_43100 = state_43041__$1;
(statearr_43050_43100[(2)] = inst_43037);

(statearr_43050_43100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (21))){
var inst_42990 = (state_43041[(2)]);
var inst_42991 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42992 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42991);
var state_43041__$1 = (function (){var statearr_43051 = state_43041;
(statearr_43051[(7)] = inst_42990);

return statearr_43051;
})();
var statearr_43052_43101 = state_43041__$1;
(statearr_43052_43101[(2)] = inst_42992);

(statearr_43052_43101[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (31))){
var inst_43020 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43020)){
var statearr_43053_43102 = state_43041__$1;
(statearr_43053_43102[(1)] = (34));

} else {
var statearr_43054_43103 = state_43041__$1;
(statearr_43054_43103[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (32))){
var inst_43029 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43055_43104 = state_43041__$1;
(statearr_43055_43104[(2)] = inst_43029);

(statearr_43055_43104[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (33))){
var inst_43016 = (state_43041[(2)]);
var inst_43017 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43018 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43017);
var state_43041__$1 = (function (){var statearr_43056 = state_43041;
(statearr_43056[(8)] = inst_43016);

return statearr_43056;
})();
var statearr_43057_43105 = state_43041__$1;
(statearr_43057_43105[(2)] = inst_43018);

(statearr_43057_43105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (13))){
var inst_42975 = figwheel.client.heads_up.clear.call(null);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(16),inst_42975);
} else {
if((state_val_43042 === (22))){
var inst_42996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42997 = figwheel.client.heads_up.append_warning_message.call(null,inst_42996);
var state_43041__$1 = state_43041;
var statearr_43058_43106 = state_43041__$1;
(statearr_43058_43106[(2)] = inst_42997);

(statearr_43058_43106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (36))){
var inst_43027 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43059_43107 = state_43041__$1;
(statearr_43059_43107[(2)] = inst_43027);

(statearr_43059_43107[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (29))){
var inst_43007 = (state_43041[(2)]);
var inst_43008 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43009 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43008);
var state_43041__$1 = (function (){var statearr_43060 = state_43041;
(statearr_43060[(9)] = inst_43007);

return statearr_43060;
})();
var statearr_43061_43108 = state_43041__$1;
(statearr_43061_43108[(2)] = inst_43009);

(statearr_43061_43108[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (6))){
var inst_42956 = (state_43041[(10)]);
var state_43041__$1 = state_43041;
var statearr_43062_43109 = state_43041__$1;
(statearr_43062_43109[(2)] = inst_42956);

(statearr_43062_43109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (28))){
var inst_43003 = (state_43041[(2)]);
var inst_43004 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43005 = figwheel.client.heads_up.display_warning.call(null,inst_43004);
var state_43041__$1 = (function (){var statearr_43063 = state_43041;
(statearr_43063[(11)] = inst_43003);

return statearr_43063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(29),inst_43005);
} else {
if((state_val_43042 === (25))){
var inst_43001 = figwheel.client.heads_up.clear.call(null);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(28),inst_43001);
} else {
if((state_val_43042 === (34))){
var inst_43022 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(37),inst_43022);
} else {
if((state_val_43042 === (17))){
var inst_42981 = (state_43041[(2)]);
var inst_42982 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42983 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42982);
var state_43041__$1 = (function (){var statearr_43064 = state_43041;
(statearr_43064[(12)] = inst_42981);

return statearr_43064;
})();
var statearr_43065_43110 = state_43041__$1;
(statearr_43065_43110[(2)] = inst_42983);

(statearr_43065_43110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (3))){
var inst_42973 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42973)){
var statearr_43066_43111 = state_43041__$1;
(statearr_43066_43111[(1)] = (13));

} else {
var statearr_43067_43112 = state_43041__$1;
(statearr_43067_43112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (12))){
var inst_42969 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43068_43113 = state_43041__$1;
(statearr_43068_43113[(2)] = inst_42969);

(statearr_43068_43113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (2))){
var inst_42956 = (state_43041[(10)]);
var inst_42956__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43041__$1 = (function (){var statearr_43069 = state_43041;
(statearr_43069[(10)] = inst_42956__$1);

return statearr_43069;
})();
if(cljs.core.truth_(inst_42956__$1)){
var statearr_43070_43114 = state_43041__$1;
(statearr_43070_43114[(1)] = (5));

} else {
var statearr_43071_43115 = state_43041__$1;
(statearr_43071_43115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (23))){
var inst_42999 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42999)){
var statearr_43072_43116 = state_43041__$1;
(statearr_43072_43116[(1)] = (25));

} else {
var statearr_43073_43117 = state_43041__$1;
(statearr_43073_43117[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (35))){
var state_43041__$1 = state_43041;
var statearr_43074_43118 = state_43041__$1;
(statearr_43074_43118[(2)] = null);

(statearr_43074_43118[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (19))){
var inst_42994 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42994)){
var statearr_43075_43119 = state_43041__$1;
(statearr_43075_43119[(1)] = (22));

} else {
var statearr_43076_43120 = state_43041__$1;
(statearr_43076_43120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (11))){
var inst_42965 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43077_43121 = state_43041__$1;
(statearr_43077_43121[(2)] = inst_42965);

(statearr_43077_43121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (9))){
var inst_42967 = figwheel.client.heads_up.clear.call(null);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(12),inst_42967);
} else {
if((state_val_43042 === (5))){
var inst_42958 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43041__$1 = state_43041;
var statearr_43078_43122 = state_43041__$1;
(statearr_43078_43122[(2)] = inst_42958);

(statearr_43078_43122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (14))){
var inst_42985 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_42985)){
var statearr_43079_43123 = state_43041__$1;
(statearr_43079_43123[(1)] = (18));

} else {
var statearr_43080_43124 = state_43041__$1;
(statearr_43080_43124[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (26))){
var inst_43011 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43041__$1 = state_43041;
if(cljs.core.truth_(inst_43011)){
var statearr_43081_43125 = state_43041__$1;
(statearr_43081_43125[(1)] = (30));

} else {
var statearr_43082_43126 = state_43041__$1;
(statearr_43082_43126[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (16))){
var inst_42977 = (state_43041[(2)]);
var inst_42978 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42979 = figwheel.client.heads_up.display_exception.call(null,inst_42978);
var state_43041__$1 = (function (){var statearr_43083 = state_43041;
(statearr_43083[(13)] = inst_42977);

return statearr_43083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(17),inst_42979);
} else {
if((state_val_43042 === (30))){
var inst_43013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43014 = figwheel.client.heads_up.display_warning.call(null,inst_43013);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(33),inst_43014);
} else {
if((state_val_43042 === (10))){
var inst_42971 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43084_43127 = state_43041__$1;
(statearr_43084_43127[(2)] = inst_42971);

(statearr_43084_43127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (18))){
var inst_42987 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42988 = figwheel.client.heads_up.display_exception.call(null,inst_42987);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(21),inst_42988);
} else {
if((state_val_43042 === (37))){
var inst_43024 = (state_43041[(2)]);
var state_43041__$1 = state_43041;
var statearr_43085_43128 = state_43041__$1;
(statearr_43085_43128[(2)] = inst_43024);

(statearr_43085_43128[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43042 === (8))){
var inst_42963 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43041__$1 = state_43041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43041__$1,(11),inst_42963);
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
});})(c__35469__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35355__auto__,c__35469__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____0 = (function (){
var statearr_43089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43089[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__);

(statearr_43089[(1)] = (1));

return statearr_43089;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____1 = (function (state_43041){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_43041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e43090){if((e43090 instanceof Object)){
var ex__35359__auto__ = e43090;
var statearr_43091_43129 = state_43041;
(statearr_43091_43129[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43130 = state_43041;
state_43041 = G__43130;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__ = function(state_43041){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____1.call(this,state_43041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__,msg_hist,msg_names,msg))
})();
var state__35471__auto__ = (function (){var statearr_43092 = f__35470__auto__.call(null);
(statearr_43092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_43092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__,msg_hist,msg_names,msg))
);

return c__35469__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35469__auto___43193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto___43193,ch){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto___43193,ch){
return (function (state_43176){
var state_val_43177 = (state_43176[(1)]);
if((state_val_43177 === (1))){
var state_43176__$1 = state_43176;
var statearr_43178_43194 = state_43176__$1;
(statearr_43178_43194[(2)] = null);

(statearr_43178_43194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (2))){
var state_43176__$1 = state_43176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43176__$1,(4),ch);
} else {
if((state_val_43177 === (3))){
var inst_43174 = (state_43176[(2)]);
var state_43176__$1 = state_43176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43176__$1,inst_43174);
} else {
if((state_val_43177 === (4))){
var inst_43164 = (state_43176[(7)]);
var inst_43164__$1 = (state_43176[(2)]);
var state_43176__$1 = (function (){var statearr_43179 = state_43176;
(statearr_43179[(7)] = inst_43164__$1);

return statearr_43179;
})();
if(cljs.core.truth_(inst_43164__$1)){
var statearr_43180_43195 = state_43176__$1;
(statearr_43180_43195[(1)] = (5));

} else {
var statearr_43181_43196 = state_43176__$1;
(statearr_43181_43196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (5))){
var inst_43164 = (state_43176[(7)]);
var inst_43166 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43164);
var state_43176__$1 = state_43176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43176__$1,(8),inst_43166);
} else {
if((state_val_43177 === (6))){
var state_43176__$1 = state_43176;
var statearr_43182_43197 = state_43176__$1;
(statearr_43182_43197[(2)] = null);

(statearr_43182_43197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (7))){
var inst_43172 = (state_43176[(2)]);
var state_43176__$1 = state_43176;
var statearr_43183_43198 = state_43176__$1;
(statearr_43183_43198[(2)] = inst_43172);

(statearr_43183_43198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43177 === (8))){
var inst_43168 = (state_43176[(2)]);
var state_43176__$1 = (function (){var statearr_43184 = state_43176;
(statearr_43184[(8)] = inst_43168);

return statearr_43184;
})();
var statearr_43185_43199 = state_43176__$1;
(statearr_43185_43199[(2)] = null);

(statearr_43185_43199[(1)] = (2));


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
});})(c__35469__auto___43193,ch))
;
return ((function (switch__35355__auto__,c__35469__auto___43193,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35356__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35356__auto____0 = (function (){
var statearr_43189 = [null,null,null,null,null,null,null,null,null];
(statearr_43189[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35356__auto__);

(statearr_43189[(1)] = (1));

return statearr_43189;
});
var figwheel$client$heads_up_plugin_$_state_machine__35356__auto____1 = (function (state_43176){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_43176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e43190){if((e43190 instanceof Object)){
var ex__35359__auto__ = e43190;
var statearr_43191_43200 = state_43176;
(statearr_43191_43200[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43201 = state_43176;
state_43176 = G__43201;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35356__auto__ = function(state_43176){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35356__auto____1.call(this,state_43176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35356__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35356__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto___43193,ch))
})();
var state__35471__auto__ = (function (){var statearr_43192 = f__35470__auto__.call(null);
(statearr_43192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto___43193);

return statearr_43192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto___43193,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__){
return (function (state_43222){
var state_val_43223 = (state_43222[(1)]);
if((state_val_43223 === (1))){
var inst_43217 = cljs.core.async.timeout.call(null,(3000));
var state_43222__$1 = state_43222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43222__$1,(2),inst_43217);
} else {
if((state_val_43223 === (2))){
var inst_43219 = (state_43222[(2)]);
var inst_43220 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43222__$1 = (function (){var statearr_43224 = state_43222;
(statearr_43224[(7)] = inst_43219);

return statearr_43224;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43222__$1,inst_43220);
} else {
return null;
}
}
});})(c__35469__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____0 = (function (){
var statearr_43228 = [null,null,null,null,null,null,null,null];
(statearr_43228[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__);

(statearr_43228[(1)] = (1));

return statearr_43228;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____1 = (function (state_43222){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_43222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e43229){if((e43229 instanceof Object)){
var ex__35359__auto__ = e43229;
var statearr_43230_43232 = state_43222;
(statearr_43230_43232[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43233 = state_43222;
state_43222 = G__43233;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__ = function(state_43222){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____1.call(this,state_43222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35356__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__))
})();
var state__35471__auto__ = (function (){var statearr_43231 = f__35470__auto__.call(null);
(statearr_43231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_43231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__))
);

return c__35469__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35469__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__35470__auto__ = (function (){var switch__35355__auto__ = ((function (c__35469__auto__,figwheel_version,temp__6503__auto__){
return (function (state_43256){
var state_val_43257 = (state_43256[(1)]);
if((state_val_43257 === (1))){
var inst_43250 = cljs.core.async.timeout.call(null,(2000));
var state_43256__$1 = state_43256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43256__$1,(2),inst_43250);
} else {
if((state_val_43257 === (2))){
var inst_43252 = (state_43256[(2)]);
var inst_43253 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_43254 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43253);
var state_43256__$1 = (function (){var statearr_43258 = state_43256;
(statearr_43258[(7)] = inst_43252);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43256__$1,inst_43254);
} else {
return null;
}
}
});})(c__35469__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__35355__auto__,c__35469__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____0 = (function (){
var statearr_43262 = [null,null,null,null,null,null,null,null];
(statearr_43262[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__);

(statearr_43262[(1)] = (1));

return statearr_43262;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____1 = (function (state_43256){
while(true){
var ret_value__35357__auto__ = (function (){try{while(true){
var result__35358__auto__ = switch__35355__auto__.call(null,state_43256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35358__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35358__auto__;
}
break;
}
}catch (e43263){if((e43263 instanceof Object)){
var ex__35359__auto__ = e43263;
var statearr_43264_43266 = state_43256;
(statearr_43264_43266[(5)] = ex__35359__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35357__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43267 = state_43256;
state_43256 = G__43267;
continue;
} else {
return ret_value__35357__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__ = function(state_43256){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____1.call(this,state_43256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35356__auto__;
})()
;})(switch__35355__auto__,c__35469__auto__,figwheel_version,temp__6503__auto__))
})();
var state__35471__auto__ = (function (){var statearr_43265 = f__35470__auto__.call(null);
(statearr_43265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35469__auto__);

return statearr_43265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35471__auto__);
});})(c__35469__auto__,figwheel_version,temp__6503__auto__))
);

return c__35469__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43268){
var map__43272 = p__43268;
var map__43272__$1 = ((((!((map__43272 == null)))?((((map__43272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43272):map__43272);
var file = cljs.core.get.call(null,map__43272__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43272__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43274 = "";
var G__43274__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__43274),cljs.core.str("file "),cljs.core.str(file)].join(''):G__43274);
var G__43274__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__43274__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__43274__$1);
if(cljs.core.truth_((function (){var and__12135__auto__ = line;
if(cljs.core.truth_(and__12135__auto__)){
return column;
} else {
return and__12135__auto__;
}
})())){
return [cljs.core.str(G__43274__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__43274__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43275){
var map__43282 = p__43275;
var map__43282__$1 = ((((!((map__43282 == null)))?((((map__43282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43282):map__43282);
var ed = map__43282__$1;
var formatted_exception = cljs.core.get.call(null,map__43282__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43282__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43282__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43284_43288 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43285_43289 = null;
var count__43286_43290 = (0);
var i__43287_43291 = (0);
while(true){
if((i__43287_43291 < count__43286_43290)){
var msg_43292 = cljs.core._nth.call(null,chunk__43285_43289,i__43287_43291);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43292);

var G__43293 = seq__43284_43288;
var G__43294 = chunk__43285_43289;
var G__43295 = count__43286_43290;
var G__43296 = (i__43287_43291 + (1));
seq__43284_43288 = G__43293;
chunk__43285_43289 = G__43294;
count__43286_43290 = G__43295;
i__43287_43291 = G__43296;
continue;
} else {
var temp__6503__auto___43297 = cljs.core.seq.call(null,seq__43284_43288);
if(temp__6503__auto___43297){
var seq__43284_43298__$1 = temp__6503__auto___43297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43284_43298__$1)){
var c__13050__auto___43299 = cljs.core.chunk_first.call(null,seq__43284_43298__$1);
var G__43300 = cljs.core.chunk_rest.call(null,seq__43284_43298__$1);
var G__43301 = c__13050__auto___43299;
var G__43302 = cljs.core.count.call(null,c__13050__auto___43299);
var G__43303 = (0);
seq__43284_43288 = G__43300;
chunk__43285_43289 = G__43301;
count__43286_43290 = G__43302;
i__43287_43291 = G__43303;
continue;
} else {
var msg_43304 = cljs.core.first.call(null,seq__43284_43298__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43304);

var G__43305 = cljs.core.next.call(null,seq__43284_43298__$1);
var G__43306 = null;
var G__43307 = (0);
var G__43308 = (0);
seq__43284_43288 = G__43305;
chunk__43285_43289 = G__43306;
count__43286_43290 = G__43307;
i__43287_43291 = G__43308;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43309){
var map__43312 = p__43309;
var map__43312__$1 = ((((!((map__43312 == null)))?((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43312):map__43312);
var w = map__43312__$1;
var message = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__12135__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__12135__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__12135__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43324 = cljs.core.seq.call(null,plugins);
var chunk__43325 = null;
var count__43326 = (0);
var i__43327 = (0);
while(true){
if((i__43327 < count__43326)){
var vec__43328 = cljs.core._nth.call(null,chunk__43325,i__43327);
var k = cljs.core.nth.call(null,vec__43328,(0),null);
var plugin = cljs.core.nth.call(null,vec__43328,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43324,chunk__43325,count__43326,i__43327,pl_43334,vec__43328,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43334.call(null,msg_hist);
});})(seq__43324,chunk__43325,count__43326,i__43327,pl_43334,vec__43328,k,plugin))
);
} else {
}

var G__43335 = seq__43324;
var G__43336 = chunk__43325;
var G__43337 = count__43326;
var G__43338 = (i__43327 + (1));
seq__43324 = G__43335;
chunk__43325 = G__43336;
count__43326 = G__43337;
i__43327 = G__43338;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__43324);
if(temp__6503__auto__){
var seq__43324__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43324__$1)){
var c__13050__auto__ = cljs.core.chunk_first.call(null,seq__43324__$1);
var G__43339 = cljs.core.chunk_rest.call(null,seq__43324__$1);
var G__43340 = c__13050__auto__;
var G__43341 = cljs.core.count.call(null,c__13050__auto__);
var G__43342 = (0);
seq__43324 = G__43339;
chunk__43325 = G__43340;
count__43326 = G__43341;
i__43327 = G__43342;
continue;
} else {
var vec__43331 = cljs.core.first.call(null,seq__43324__$1);
var k = cljs.core.nth.call(null,vec__43331,(0),null);
var plugin = cljs.core.nth.call(null,vec__43331,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43343 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43324,chunk__43325,count__43326,i__43327,pl_43343,vec__43331,k,plugin,seq__43324__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43343.call(null,msg_hist);
});})(seq__43324,chunk__43325,count__43326,i__43327,pl_43343,vec__43331,k,plugin,seq__43324__$1,temp__6503__auto__))
);
} else {
}

var G__43344 = cljs.core.next.call(null,seq__43324__$1);
var G__43345 = null;
var G__43346 = (0);
var G__43347 = (0);
seq__43324 = G__43344;
chunk__43325 = G__43345;
count__43326 = G__43346;
i__43327 = G__43347;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args43348 = [];
var len__13330__auto___43355 = arguments.length;
var i__13331__auto___43356 = (0);
while(true){
if((i__13331__auto___43356 < len__13330__auto___43355)){
args43348.push((arguments[i__13331__auto___43356]));

var G__43357 = (i__13331__auto___43356 + (1));
i__13331__auto___43356 = G__43357;
continue;
} else {
}
break;
}

var G__43350 = args43348.length;
switch (G__43350) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43348.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43351_43359 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43352_43360 = null;
var count__43353_43361 = (0);
var i__43354_43362 = (0);
while(true){
if((i__43354_43362 < count__43353_43361)){
var msg_43363 = cljs.core._nth.call(null,chunk__43352_43360,i__43354_43362);
figwheel.client.socket.handle_incoming_message.call(null,msg_43363);

var G__43364 = seq__43351_43359;
var G__43365 = chunk__43352_43360;
var G__43366 = count__43353_43361;
var G__43367 = (i__43354_43362 + (1));
seq__43351_43359 = G__43364;
chunk__43352_43360 = G__43365;
count__43353_43361 = G__43366;
i__43354_43362 = G__43367;
continue;
} else {
var temp__6503__auto___43368 = cljs.core.seq.call(null,seq__43351_43359);
if(temp__6503__auto___43368){
var seq__43351_43369__$1 = temp__6503__auto___43368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43351_43369__$1)){
var c__13050__auto___43370 = cljs.core.chunk_first.call(null,seq__43351_43369__$1);
var G__43371 = cljs.core.chunk_rest.call(null,seq__43351_43369__$1);
var G__43372 = c__13050__auto___43370;
var G__43373 = cljs.core.count.call(null,c__13050__auto___43370);
var G__43374 = (0);
seq__43351_43359 = G__43371;
chunk__43352_43360 = G__43372;
count__43353_43361 = G__43373;
i__43354_43362 = G__43374;
continue;
} else {
var msg_43375 = cljs.core.first.call(null,seq__43351_43369__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43375);

var G__43376 = cljs.core.next.call(null,seq__43351_43369__$1);
var G__43377 = null;
var G__43378 = (0);
var G__43379 = (0);
seq__43351_43359 = G__43376;
chunk__43352_43360 = G__43377;
count__43353_43361 = G__43378;
i__43354_43362 = G__43379;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__13337__auto__ = [];
var len__13330__auto___43384 = arguments.length;
var i__13331__auto___43385 = (0);
while(true){
if((i__13331__auto___43385 < len__13330__auto___43384)){
args__13337__auto__.push((arguments[i__13331__auto___43385]));

var G__43386 = (i__13331__auto___43385 + (1));
i__13331__auto___43385 = G__43386;
continue;
} else {
}
break;
}

var argseq__13338__auto__ = ((((0) < args__13337__auto__.length))?(new cljs.core.IndexedSeq(args__13337__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__13338__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43381){
var map__43382 = p__43381;
var map__43382__$1 = ((((!((map__43382 == null)))?((((map__43382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43382):map__43382);
var opts = map__43382__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43380){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43380));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43388){if((e43388 instanceof Error)){
var e = e43388;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43388;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43392){
var map__43393 = p__43392;
var map__43393__$1 = ((((!((map__43393 == null)))?((((map__43393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43393):map__43393);
var msg_name = cljs.core.get.call(null,map__43393__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514283706139