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
}catch (e42539){if((e42539 instanceof Error)){
var e = e42539;
return "Error: Unable to stringify";
} else {
throw e42539;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42541 = [];
var len__33469__auto___42544 = arguments.length;
var i__33470__auto___42545 = (0);
while(true){
if((i__33470__auto___42545 < len__33469__auto___42544)){
args42541.push((arguments[i__33470__auto___42545]));

var G__42546 = (i__33470__auto___42545 + (1));
i__33470__auto___42545 = G__42546;
continue;
} else {
}
break;
}

var G__42543 = args42541.length;
switch (G__42543) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42541.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42540_SHARP_){
if(typeof p1__42540_SHARP_ === 'string'){
return p1__42540_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42540_SHARP_);
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
var args__33476__auto__ = [];
var len__33469__auto___42549 = arguments.length;
var i__33470__auto___42550 = (0);
while(true){
if((i__33470__auto___42550 < len__33469__auto___42549)){
args__33476__auto__.push((arguments[i__33470__auto___42550]));

var G__42551 = (i__33470__auto___42550 + (1));
i__33470__auto___42550 = G__42551;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42548){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42548));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__33476__auto__ = [];
var len__33469__auto___42553 = arguments.length;
var i__33470__auto___42554 = (0);
while(true){
if((i__33470__auto___42554 < len__33469__auto___42553)){
args__33476__auto__.push((arguments[i__33470__auto___42554]));

var G__42555 = (i__33470__auto___42554 + (1));
i__33470__auto___42554 = G__42555;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42552){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42552));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42556){
var map__42559 = p__42556;
var map__42559__$1 = ((((!((map__42559 == null)))?((((map__42559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42559):map__42559);
var message = cljs.core.get.call(null,map__42559__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42559__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__32286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__32286__auto__)){
return or__32286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__32274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__32274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__32274__auto__;
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
var c__35192__auto___42721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___42721,ch){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___42721,ch){
return (function (state_42690){
var state_val_42691 = (state_42690[(1)]);
if((state_val_42691 === (7))){
var inst_42686 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42692_42722 = state_42690__$1;
(statearr_42692_42722[(2)] = inst_42686);

(statearr_42692_42722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (1))){
var state_42690__$1 = state_42690;
var statearr_42693_42723 = state_42690__$1;
(statearr_42693_42723[(2)] = null);

(statearr_42693_42723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (4))){
var inst_42643 = (state_42690[(7)]);
var inst_42643__$1 = (state_42690[(2)]);
var state_42690__$1 = (function (){var statearr_42694 = state_42690;
(statearr_42694[(7)] = inst_42643__$1);

return statearr_42694;
})();
if(cljs.core.truth_(inst_42643__$1)){
var statearr_42695_42724 = state_42690__$1;
(statearr_42695_42724[(1)] = (5));

} else {
var statearr_42696_42725 = state_42690__$1;
(statearr_42696_42725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (15))){
var inst_42650 = (state_42690[(8)]);
var inst_42665 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42650);
var inst_42666 = cljs.core.first.call(null,inst_42665);
var inst_42667 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42666);
var inst_42668 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42667)].join('');
var inst_42669 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42668);
var state_42690__$1 = state_42690;
var statearr_42697_42726 = state_42690__$1;
(statearr_42697_42726[(2)] = inst_42669);

(statearr_42697_42726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (13))){
var inst_42674 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42698_42727 = state_42690__$1;
(statearr_42698_42727[(2)] = inst_42674);

(statearr_42698_42727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (6))){
var state_42690__$1 = state_42690;
var statearr_42699_42728 = state_42690__$1;
(statearr_42699_42728[(2)] = null);

(statearr_42699_42728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (17))){
var inst_42672 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42700_42729 = state_42690__$1;
(statearr_42700_42729[(2)] = inst_42672);

(statearr_42700_42729[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (3))){
var inst_42688 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42690__$1,inst_42688);
} else {
if((state_val_42691 === (12))){
var inst_42649 = (state_42690[(9)]);
var inst_42663 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42649,opts);
var state_42690__$1 = state_42690;
if(cljs.core.truth_(inst_42663)){
var statearr_42701_42730 = state_42690__$1;
(statearr_42701_42730[(1)] = (15));

} else {
var statearr_42702_42731 = state_42690__$1;
(statearr_42702_42731[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (2))){
var state_42690__$1 = state_42690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42690__$1,(4),ch);
} else {
if((state_val_42691 === (11))){
var inst_42650 = (state_42690[(8)]);
var inst_42655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42656 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42650);
var inst_42657 = cljs.core.async.timeout.call(null,(1000));
var inst_42658 = [inst_42656,inst_42657];
var inst_42659 = (new cljs.core.PersistentVector(null,2,(5),inst_42655,inst_42658,null));
var state_42690__$1 = state_42690;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42690__$1,(14),inst_42659);
} else {
if((state_val_42691 === (9))){
var inst_42650 = (state_42690[(8)]);
var inst_42676 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42677 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42650);
var inst_42678 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42677);
var inst_42679 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42678)].join('');
var inst_42680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42679);
var state_42690__$1 = (function (){var statearr_42703 = state_42690;
(statearr_42703[(10)] = inst_42676);

return statearr_42703;
})();
var statearr_42704_42732 = state_42690__$1;
(statearr_42704_42732[(2)] = inst_42680);

(statearr_42704_42732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (5))){
var inst_42643 = (state_42690[(7)]);
var inst_42645 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42646 = (new cljs.core.PersistentArrayMap(null,2,inst_42645,null));
var inst_42647 = (new cljs.core.PersistentHashSet(null,inst_42646,null));
var inst_42648 = figwheel.client.focus_msgs.call(null,inst_42647,inst_42643);
var inst_42649 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42648);
var inst_42650 = cljs.core.first.call(null,inst_42648);
var inst_42651 = figwheel.client.autoload_QMARK_.call(null);
var state_42690__$1 = (function (){var statearr_42705 = state_42690;
(statearr_42705[(8)] = inst_42650);

(statearr_42705[(9)] = inst_42649);

return statearr_42705;
})();
if(cljs.core.truth_(inst_42651)){
var statearr_42706_42733 = state_42690__$1;
(statearr_42706_42733[(1)] = (8));

} else {
var statearr_42707_42734 = state_42690__$1;
(statearr_42707_42734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (14))){
var inst_42661 = (state_42690[(2)]);
var state_42690__$1 = state_42690;
var statearr_42708_42735 = state_42690__$1;
(statearr_42708_42735[(2)] = inst_42661);

(statearr_42708_42735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (16))){
var state_42690__$1 = state_42690;
var statearr_42709_42736 = state_42690__$1;
(statearr_42709_42736[(2)] = null);

(statearr_42709_42736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (10))){
var inst_42682 = (state_42690[(2)]);
var state_42690__$1 = (function (){var statearr_42710 = state_42690;
(statearr_42710[(11)] = inst_42682);

return statearr_42710;
})();
var statearr_42711_42737 = state_42690__$1;
(statearr_42711_42737[(2)] = null);

(statearr_42711_42737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42691 === (8))){
var inst_42649 = (state_42690[(9)]);
var inst_42653 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42649,opts);
var state_42690__$1 = state_42690;
if(cljs.core.truth_(inst_42653)){
var statearr_42712_42738 = state_42690__$1;
(statearr_42712_42738[(1)] = (11));

} else {
var statearr_42713_42739 = state_42690__$1;
(statearr_42713_42739[(1)] = (12));

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
});})(c__35192__auto___42721,ch))
;
return ((function (switch__35078__auto__,c__35192__auto___42721,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____0 = (function (){
var statearr_42717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42717[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__);

(statearr_42717[(1)] = (1));

return statearr_42717;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____1 = (function (state_42690){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_42690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e42718){if((e42718 instanceof Object)){
var ex__35082__auto__ = e42718;
var statearr_42719_42740 = state_42690;
(statearr_42719_42740[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42741 = state_42690;
state_42690 = G__42741;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__ = function(state_42690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____1.call(this,state_42690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35079__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___42721,ch))
})();
var state__35194__auto__ = (function (){var statearr_42720 = f__35193__auto__.call(null);
(statearr_42720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___42721);

return statearr_42720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___42721,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42742_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42742_SHARP_));
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
var base_path_42745 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42745){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42744){if((e42744 instanceof Error)){
var e = e42744;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42745], null));
} else {
var e = e42744;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42745))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42746){
var map__42755 = p__42746;
var map__42755__$1 = ((((!((map__42755 == null)))?((((map__42755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42755):map__42755);
var opts = map__42755__$1;
var build_id = cljs.core.get.call(null,map__42755__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42755,map__42755__$1,opts,build_id){
return (function (p__42757){
var vec__42758 = p__42757;
var seq__42759 = cljs.core.seq.call(null,vec__42758);
var first__42760 = cljs.core.first.call(null,seq__42759);
var seq__42759__$1 = cljs.core.next.call(null,seq__42759);
var map__42761 = first__42760;
var map__42761__$1 = ((((!((map__42761 == null)))?((((map__42761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42761):map__42761);
var msg = map__42761__$1;
var msg_name = cljs.core.get.call(null,map__42761__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42759__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42758,seq__42759,first__42760,seq__42759__$1,map__42761,map__42761__$1,msg,msg_name,_,map__42755,map__42755__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42758,seq__42759,first__42760,seq__42759__$1,map__42761,map__42761__$1,msg,msg_name,_,map__42755,map__42755__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42755,map__42755__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42769){
var vec__42770 = p__42769;
var seq__42771 = cljs.core.seq.call(null,vec__42770);
var first__42772 = cljs.core.first.call(null,seq__42771);
var seq__42771__$1 = cljs.core.next.call(null,seq__42771);
var map__42773 = first__42772;
var map__42773__$1 = ((((!((map__42773 == null)))?((((map__42773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42773):map__42773);
var msg = map__42773__$1;
var msg_name = cljs.core.get.call(null,map__42773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42771__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42775){
var map__42787 = p__42775;
var map__42787__$1 = ((((!((map__42787 == null)))?((((map__42787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42787):map__42787);
var on_compile_warning = cljs.core.get.call(null,map__42787__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42787__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42787,map__42787__$1,on_compile_warning,on_compile_fail){
return (function (p__42789){
var vec__42790 = p__42789;
var seq__42791 = cljs.core.seq.call(null,vec__42790);
var first__42792 = cljs.core.first.call(null,seq__42791);
var seq__42791__$1 = cljs.core.next.call(null,seq__42791);
var map__42793 = first__42792;
var map__42793__$1 = ((((!((map__42793 == null)))?((((map__42793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42793):map__42793);
var msg = map__42793__$1;
var msg_name = cljs.core.get.call(null,map__42793__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42791__$1;
var pred__42795 = cljs.core._EQ_;
var expr__42796 = msg_name;
if(cljs.core.truth_(pred__42795.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42796))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42795.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42796))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42787,map__42787__$1,on_compile_warning,on_compile_fail))
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
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__,msg_hist,msg_names,msg){
return (function (state_43024){
var state_val_43025 = (state_43024[(1)]);
if((state_val_43025 === (7))){
var inst_42944 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42944)){
var statearr_43026_43076 = state_43024__$1;
(statearr_43026_43076[(1)] = (8));

} else {
var statearr_43027_43077 = state_43024__$1;
(statearr_43027_43077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (20))){
var inst_43018 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43028_43078 = state_43024__$1;
(statearr_43028_43078[(2)] = inst_43018);

(statearr_43028_43078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (27))){
var inst_43014 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43029_43079 = state_43024__$1;
(statearr_43029_43079[(2)] = inst_43014);

(statearr_43029_43079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (1))){
var inst_42937 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42937)){
var statearr_43030_43080 = state_43024__$1;
(statearr_43030_43080[(1)] = (2));

} else {
var statearr_43031_43081 = state_43024__$1;
(statearr_43031_43081[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (24))){
var inst_43016 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43032_43082 = state_43024__$1;
(statearr_43032_43082[(2)] = inst_43016);

(statearr_43032_43082[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (4))){
var inst_43022 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43024__$1,inst_43022);
} else {
if((state_val_43025 === (15))){
var inst_43020 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43033_43083 = state_43024__$1;
(statearr_43033_43083[(2)] = inst_43020);

(statearr_43033_43083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (21))){
var inst_42973 = (state_43024[(2)]);
var inst_42974 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42975 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42974);
var state_43024__$1 = (function (){var statearr_43034 = state_43024;
(statearr_43034[(7)] = inst_42973);

return statearr_43034;
})();
var statearr_43035_43084 = state_43024__$1;
(statearr_43035_43084[(2)] = inst_42975);

(statearr_43035_43084[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (31))){
var inst_43003 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_43003)){
var statearr_43036_43085 = state_43024__$1;
(statearr_43036_43085[(1)] = (34));

} else {
var statearr_43037_43086 = state_43024__$1;
(statearr_43037_43086[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (32))){
var inst_43012 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43038_43087 = state_43024__$1;
(statearr_43038_43087[(2)] = inst_43012);

(statearr_43038_43087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (33))){
var inst_42999 = (state_43024[(2)]);
var inst_43000 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43001 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43000);
var state_43024__$1 = (function (){var statearr_43039 = state_43024;
(statearr_43039[(8)] = inst_42999);

return statearr_43039;
})();
var statearr_43040_43088 = state_43024__$1;
(statearr_43040_43088[(2)] = inst_43001);

(statearr_43040_43088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (13))){
var inst_42958 = figwheel.client.heads_up.clear.call(null);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(16),inst_42958);
} else {
if((state_val_43025 === (22))){
var inst_42979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42980 = figwheel.client.heads_up.append_warning_message.call(null,inst_42979);
var state_43024__$1 = state_43024;
var statearr_43041_43089 = state_43024__$1;
(statearr_43041_43089[(2)] = inst_42980);

(statearr_43041_43089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (36))){
var inst_43010 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43042_43090 = state_43024__$1;
(statearr_43042_43090[(2)] = inst_43010);

(statearr_43042_43090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (29))){
var inst_42990 = (state_43024[(2)]);
var inst_42991 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42992 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42991);
var state_43024__$1 = (function (){var statearr_43043 = state_43024;
(statearr_43043[(9)] = inst_42990);

return statearr_43043;
})();
var statearr_43044_43091 = state_43024__$1;
(statearr_43044_43091[(2)] = inst_42992);

(statearr_43044_43091[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (6))){
var inst_42939 = (state_43024[(10)]);
var state_43024__$1 = state_43024;
var statearr_43045_43092 = state_43024__$1;
(statearr_43045_43092[(2)] = inst_42939);

(statearr_43045_43092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (28))){
var inst_42986 = (state_43024[(2)]);
var inst_42987 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42988 = figwheel.client.heads_up.display_warning.call(null,inst_42987);
var state_43024__$1 = (function (){var statearr_43046 = state_43024;
(statearr_43046[(11)] = inst_42986);

return statearr_43046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(29),inst_42988);
} else {
if((state_val_43025 === (25))){
var inst_42984 = figwheel.client.heads_up.clear.call(null);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(28),inst_42984);
} else {
if((state_val_43025 === (34))){
var inst_43005 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(37),inst_43005);
} else {
if((state_val_43025 === (17))){
var inst_42964 = (state_43024[(2)]);
var inst_42965 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42966 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42965);
var state_43024__$1 = (function (){var statearr_43047 = state_43024;
(statearr_43047[(12)] = inst_42964);

return statearr_43047;
})();
var statearr_43048_43093 = state_43024__$1;
(statearr_43048_43093[(2)] = inst_42966);

(statearr_43048_43093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (3))){
var inst_42956 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42956)){
var statearr_43049_43094 = state_43024__$1;
(statearr_43049_43094[(1)] = (13));

} else {
var statearr_43050_43095 = state_43024__$1;
(statearr_43050_43095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (12))){
var inst_42952 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43051_43096 = state_43024__$1;
(statearr_43051_43096[(2)] = inst_42952);

(statearr_43051_43096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (2))){
var inst_42939 = (state_43024[(10)]);
var inst_42939__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43024__$1 = (function (){var statearr_43052 = state_43024;
(statearr_43052[(10)] = inst_42939__$1);

return statearr_43052;
})();
if(cljs.core.truth_(inst_42939__$1)){
var statearr_43053_43097 = state_43024__$1;
(statearr_43053_43097[(1)] = (5));

} else {
var statearr_43054_43098 = state_43024__$1;
(statearr_43054_43098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (23))){
var inst_42982 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42982)){
var statearr_43055_43099 = state_43024__$1;
(statearr_43055_43099[(1)] = (25));

} else {
var statearr_43056_43100 = state_43024__$1;
(statearr_43056_43100[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (35))){
var state_43024__$1 = state_43024;
var statearr_43057_43101 = state_43024__$1;
(statearr_43057_43101[(2)] = null);

(statearr_43057_43101[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (19))){
var inst_42977 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42977)){
var statearr_43058_43102 = state_43024__$1;
(statearr_43058_43102[(1)] = (22));

} else {
var statearr_43059_43103 = state_43024__$1;
(statearr_43059_43103[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (11))){
var inst_42948 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43060_43104 = state_43024__$1;
(statearr_43060_43104[(2)] = inst_42948);

(statearr_43060_43104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (9))){
var inst_42950 = figwheel.client.heads_up.clear.call(null);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(12),inst_42950);
} else {
if((state_val_43025 === (5))){
var inst_42941 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43024__$1 = state_43024;
var statearr_43061_43105 = state_43024__$1;
(statearr_43061_43105[(2)] = inst_42941);

(statearr_43061_43105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (14))){
var inst_42968 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42968)){
var statearr_43062_43106 = state_43024__$1;
(statearr_43062_43106[(1)] = (18));

} else {
var statearr_43063_43107 = state_43024__$1;
(statearr_43063_43107[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (26))){
var inst_42994 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43024__$1 = state_43024;
if(cljs.core.truth_(inst_42994)){
var statearr_43064_43108 = state_43024__$1;
(statearr_43064_43108[(1)] = (30));

} else {
var statearr_43065_43109 = state_43024__$1;
(statearr_43065_43109[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (16))){
var inst_42960 = (state_43024[(2)]);
var inst_42961 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42962 = figwheel.client.heads_up.display_exception.call(null,inst_42961);
var state_43024__$1 = (function (){var statearr_43066 = state_43024;
(statearr_43066[(13)] = inst_42960);

return statearr_43066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(17),inst_42962);
} else {
if((state_val_43025 === (30))){
var inst_42996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42997 = figwheel.client.heads_up.display_warning.call(null,inst_42996);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(33),inst_42997);
} else {
if((state_val_43025 === (10))){
var inst_42954 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43067_43110 = state_43024__$1;
(statearr_43067_43110[(2)] = inst_42954);

(statearr_43067_43110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (18))){
var inst_42970 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42971 = figwheel.client.heads_up.display_exception.call(null,inst_42970);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(21),inst_42971);
} else {
if((state_val_43025 === (37))){
var inst_43007 = (state_43024[(2)]);
var state_43024__$1 = state_43024;
var statearr_43068_43111 = state_43024__$1;
(statearr_43068_43111[(2)] = inst_43007);

(statearr_43068_43111[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43025 === (8))){
var inst_42946 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43024__$1 = state_43024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43024__$1,(11),inst_42946);
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
});})(c__35192__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35078__auto__,c__35192__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____0 = (function (){
var statearr_43072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43072[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__);

(statearr_43072[(1)] = (1));

return statearr_43072;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____1 = (function (state_43024){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_43024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e43073){if((e43073 instanceof Object)){
var ex__35082__auto__ = e43073;
var statearr_43074_43112 = state_43024;
(statearr_43074_43112[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43113 = state_43024;
state_43024 = G__43113;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__ = function(state_43024){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____1.call(this,state_43024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__,msg_hist,msg_names,msg))
})();
var state__35194__auto__ = (function (){var statearr_43075 = f__35193__auto__.call(null);
(statearr_43075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_43075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__,msg_hist,msg_names,msg))
);

return c__35192__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35192__auto___43176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto___43176,ch){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto___43176,ch){
return (function (state_43159){
var state_val_43160 = (state_43159[(1)]);
if((state_val_43160 === (1))){
var state_43159__$1 = state_43159;
var statearr_43161_43177 = state_43159__$1;
(statearr_43161_43177[(2)] = null);

(statearr_43161_43177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (2))){
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43159__$1,(4),ch);
} else {
if((state_val_43160 === (3))){
var inst_43157 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43159__$1,inst_43157);
} else {
if((state_val_43160 === (4))){
var inst_43147 = (state_43159[(7)]);
var inst_43147__$1 = (state_43159[(2)]);
var state_43159__$1 = (function (){var statearr_43162 = state_43159;
(statearr_43162[(7)] = inst_43147__$1);

return statearr_43162;
})();
if(cljs.core.truth_(inst_43147__$1)){
var statearr_43163_43178 = state_43159__$1;
(statearr_43163_43178[(1)] = (5));

} else {
var statearr_43164_43179 = state_43159__$1;
(statearr_43164_43179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (5))){
var inst_43147 = (state_43159[(7)]);
var inst_43149 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43147);
var state_43159__$1 = state_43159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43159__$1,(8),inst_43149);
} else {
if((state_val_43160 === (6))){
var state_43159__$1 = state_43159;
var statearr_43165_43180 = state_43159__$1;
(statearr_43165_43180[(2)] = null);

(statearr_43165_43180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (7))){
var inst_43155 = (state_43159[(2)]);
var state_43159__$1 = state_43159;
var statearr_43166_43181 = state_43159__$1;
(statearr_43166_43181[(2)] = inst_43155);

(statearr_43166_43181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43160 === (8))){
var inst_43151 = (state_43159[(2)]);
var state_43159__$1 = (function (){var statearr_43167 = state_43159;
(statearr_43167[(8)] = inst_43151);

return statearr_43167;
})();
var statearr_43168_43182 = state_43159__$1;
(statearr_43168_43182[(2)] = null);

(statearr_43168_43182[(1)] = (2));


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
});})(c__35192__auto___43176,ch))
;
return ((function (switch__35078__auto__,c__35192__auto___43176,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35079__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35079__auto____0 = (function (){
var statearr_43172 = [null,null,null,null,null,null,null,null,null];
(statearr_43172[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35079__auto__);

(statearr_43172[(1)] = (1));

return statearr_43172;
});
var figwheel$client$heads_up_plugin_$_state_machine__35079__auto____1 = (function (state_43159){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_43159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e43173){if((e43173 instanceof Object)){
var ex__35082__auto__ = e43173;
var statearr_43174_43183 = state_43159;
(statearr_43174_43183[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43184 = state_43159;
state_43159 = G__43184;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35079__auto__ = function(state_43159){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35079__auto____1.call(this,state_43159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35079__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35079__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto___43176,ch))
})();
var state__35194__auto__ = (function (){var statearr_43175 = f__35193__auto__.call(null);
(statearr_43175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto___43176);

return statearr_43175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto___43176,ch))
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
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__){
return (function (state_43205){
var state_val_43206 = (state_43205[(1)]);
if((state_val_43206 === (1))){
var inst_43200 = cljs.core.async.timeout.call(null,(3000));
var state_43205__$1 = state_43205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43205__$1,(2),inst_43200);
} else {
if((state_val_43206 === (2))){
var inst_43202 = (state_43205[(2)]);
var inst_43203 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43205__$1 = (function (){var statearr_43207 = state_43205;
(statearr_43207[(7)] = inst_43202);

return statearr_43207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43205__$1,inst_43203);
} else {
return null;
}
}
});})(c__35192__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____0 = (function (){
var statearr_43211 = [null,null,null,null,null,null,null,null];
(statearr_43211[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__);

(statearr_43211[(1)] = (1));

return statearr_43211;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____1 = (function (state_43205){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_43205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e43212){if((e43212 instanceof Object)){
var ex__35082__auto__ = e43212;
var statearr_43213_43215 = state_43205;
(statearr_43213_43215[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43216 = state_43205;
state_43205 = G__43216;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__ = function(state_43205){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____1.call(this,state_43205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35079__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__))
})();
var state__35194__auto__ = (function (){var statearr_43214 = f__35193__auto__.call(null);
(statearr_43214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_43214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__))
);

return c__35192__auto__;
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
var c__35192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35192__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__35193__auto__ = (function (){var switch__35078__auto__ = ((function (c__35192__auto__,figwheel_version,temp__6503__auto__){
return (function (state_43239){
var state_val_43240 = (state_43239[(1)]);
if((state_val_43240 === (1))){
var inst_43233 = cljs.core.async.timeout.call(null,(2000));
var state_43239__$1 = state_43239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43239__$1,(2),inst_43233);
} else {
if((state_val_43240 === (2))){
var inst_43235 = (state_43239[(2)]);
var inst_43236 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_43237 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43236);
var state_43239__$1 = (function (){var statearr_43241 = state_43239;
(statearr_43241[(7)] = inst_43235);

return statearr_43241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43239__$1,inst_43237);
} else {
return null;
}
}
});})(c__35192__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__35078__auto__,c__35192__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____0 = (function (){
var statearr_43245 = [null,null,null,null,null,null,null,null];
(statearr_43245[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__);

(statearr_43245[(1)] = (1));

return statearr_43245;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____1 = (function (state_43239){
while(true){
var ret_value__35080__auto__ = (function (){try{while(true){
var result__35081__auto__ = switch__35078__auto__.call(null,state_43239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35081__auto__;
}
break;
}
}catch (e43246){if((e43246 instanceof Object)){
var ex__35082__auto__ = e43246;
var statearr_43247_43249 = state_43239;
(statearr_43247_43249[(5)] = ex__35082__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35080__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43250 = state_43239;
state_43239 = G__43250;
continue;
} else {
return ret_value__35080__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__ = function(state_43239){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____1.call(this,state_43239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35079__auto__;
})()
;})(switch__35078__auto__,c__35192__auto__,figwheel_version,temp__6503__auto__))
})();
var state__35194__auto__ = (function (){var statearr_43248 = f__35193__auto__.call(null);
(statearr_43248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35192__auto__);

return statearr_43248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35194__auto__);
});})(c__35192__auto__,figwheel_version,temp__6503__auto__))
);

return c__35192__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43251){
var map__43255 = p__43251;
var map__43255__$1 = ((((!((map__43255 == null)))?((((map__43255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43255):map__43255);
var file = cljs.core.get.call(null,map__43255__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43255__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43255__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43257 = "";
var G__43257__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__43257),cljs.core.str("file "),cljs.core.str(file)].join(''):G__43257);
var G__43257__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__43257__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__43257__$1);
if(cljs.core.truth_((function (){var and__32274__auto__ = line;
if(cljs.core.truth_(and__32274__auto__)){
return column;
} else {
return and__32274__auto__;
}
})())){
return [cljs.core.str(G__43257__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__43257__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43258){
var map__43265 = p__43258;
var map__43265__$1 = ((((!((map__43265 == null)))?((((map__43265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43265):map__43265);
var ed = map__43265__$1;
var formatted_exception = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43265__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43267_43271 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43268_43272 = null;
var count__43269_43273 = (0);
var i__43270_43274 = (0);
while(true){
if((i__43270_43274 < count__43269_43273)){
var msg_43275 = cljs.core._nth.call(null,chunk__43268_43272,i__43270_43274);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43275);

var G__43276 = seq__43267_43271;
var G__43277 = chunk__43268_43272;
var G__43278 = count__43269_43273;
var G__43279 = (i__43270_43274 + (1));
seq__43267_43271 = G__43276;
chunk__43268_43272 = G__43277;
count__43269_43273 = G__43278;
i__43270_43274 = G__43279;
continue;
} else {
var temp__6503__auto___43280 = cljs.core.seq.call(null,seq__43267_43271);
if(temp__6503__auto___43280){
var seq__43267_43281__$1 = temp__6503__auto___43280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43267_43281__$1)){
var c__33189__auto___43282 = cljs.core.chunk_first.call(null,seq__43267_43281__$1);
var G__43283 = cljs.core.chunk_rest.call(null,seq__43267_43281__$1);
var G__43284 = c__33189__auto___43282;
var G__43285 = cljs.core.count.call(null,c__33189__auto___43282);
var G__43286 = (0);
seq__43267_43271 = G__43283;
chunk__43268_43272 = G__43284;
count__43269_43273 = G__43285;
i__43270_43274 = G__43286;
continue;
} else {
var msg_43287 = cljs.core.first.call(null,seq__43267_43281__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43287);

var G__43288 = cljs.core.next.call(null,seq__43267_43281__$1);
var G__43289 = null;
var G__43290 = (0);
var G__43291 = (0);
seq__43267_43271 = G__43288;
chunk__43268_43272 = G__43289;
count__43269_43273 = G__43290;
i__43270_43274 = G__43291;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43292){
var map__43295 = p__43292;
var map__43295__$1 = ((((!((map__43295 == null)))?((((map__43295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43295):map__43295);
var w = map__43295__$1;
var message = cljs.core.get.call(null,map__43295__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__32274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__32274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__32274__auto__;
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
var seq__43307 = cljs.core.seq.call(null,plugins);
var chunk__43308 = null;
var count__43309 = (0);
var i__43310 = (0);
while(true){
if((i__43310 < count__43309)){
var vec__43311 = cljs.core._nth.call(null,chunk__43308,i__43310);
var k = cljs.core.nth.call(null,vec__43311,(0),null);
var plugin = cljs.core.nth.call(null,vec__43311,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43317 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43307,chunk__43308,count__43309,i__43310,pl_43317,vec__43311,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43317.call(null,msg_hist);
});})(seq__43307,chunk__43308,count__43309,i__43310,pl_43317,vec__43311,k,plugin))
);
} else {
}

var G__43318 = seq__43307;
var G__43319 = chunk__43308;
var G__43320 = count__43309;
var G__43321 = (i__43310 + (1));
seq__43307 = G__43318;
chunk__43308 = G__43319;
count__43309 = G__43320;
i__43310 = G__43321;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__43307);
if(temp__6503__auto__){
var seq__43307__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43307__$1)){
var c__33189__auto__ = cljs.core.chunk_first.call(null,seq__43307__$1);
var G__43322 = cljs.core.chunk_rest.call(null,seq__43307__$1);
var G__43323 = c__33189__auto__;
var G__43324 = cljs.core.count.call(null,c__33189__auto__);
var G__43325 = (0);
seq__43307 = G__43322;
chunk__43308 = G__43323;
count__43309 = G__43324;
i__43310 = G__43325;
continue;
} else {
var vec__43314 = cljs.core.first.call(null,seq__43307__$1);
var k = cljs.core.nth.call(null,vec__43314,(0),null);
var plugin = cljs.core.nth.call(null,vec__43314,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43326 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43307,chunk__43308,count__43309,i__43310,pl_43326,vec__43314,k,plugin,seq__43307__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43326.call(null,msg_hist);
});})(seq__43307,chunk__43308,count__43309,i__43310,pl_43326,vec__43314,k,plugin,seq__43307__$1,temp__6503__auto__))
);
} else {
}

var G__43327 = cljs.core.next.call(null,seq__43307__$1);
var G__43328 = null;
var G__43329 = (0);
var G__43330 = (0);
seq__43307 = G__43327;
chunk__43308 = G__43328;
count__43309 = G__43329;
i__43310 = G__43330;
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
var args43331 = [];
var len__33469__auto___43338 = arguments.length;
var i__33470__auto___43339 = (0);
while(true){
if((i__33470__auto___43339 < len__33469__auto___43338)){
args43331.push((arguments[i__33470__auto___43339]));

var G__43340 = (i__33470__auto___43339 + (1));
i__33470__auto___43339 = G__43340;
continue;
} else {
}
break;
}

var G__43333 = args43331.length;
switch (G__43333) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43331.length)].join('')));

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

var seq__43334_43342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43335_43343 = null;
var count__43336_43344 = (0);
var i__43337_43345 = (0);
while(true){
if((i__43337_43345 < count__43336_43344)){
var msg_43346 = cljs.core._nth.call(null,chunk__43335_43343,i__43337_43345);
figwheel.client.socket.handle_incoming_message.call(null,msg_43346);

var G__43347 = seq__43334_43342;
var G__43348 = chunk__43335_43343;
var G__43349 = count__43336_43344;
var G__43350 = (i__43337_43345 + (1));
seq__43334_43342 = G__43347;
chunk__43335_43343 = G__43348;
count__43336_43344 = G__43349;
i__43337_43345 = G__43350;
continue;
} else {
var temp__6503__auto___43351 = cljs.core.seq.call(null,seq__43334_43342);
if(temp__6503__auto___43351){
var seq__43334_43352__$1 = temp__6503__auto___43351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43334_43352__$1)){
var c__33189__auto___43353 = cljs.core.chunk_first.call(null,seq__43334_43352__$1);
var G__43354 = cljs.core.chunk_rest.call(null,seq__43334_43352__$1);
var G__43355 = c__33189__auto___43353;
var G__43356 = cljs.core.count.call(null,c__33189__auto___43353);
var G__43357 = (0);
seq__43334_43342 = G__43354;
chunk__43335_43343 = G__43355;
count__43336_43344 = G__43356;
i__43337_43345 = G__43357;
continue;
} else {
var msg_43358 = cljs.core.first.call(null,seq__43334_43352__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43358);

var G__43359 = cljs.core.next.call(null,seq__43334_43352__$1);
var G__43360 = null;
var G__43361 = (0);
var G__43362 = (0);
seq__43334_43342 = G__43359;
chunk__43335_43343 = G__43360;
count__43336_43344 = G__43361;
i__43337_43345 = G__43362;
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
var args__33476__auto__ = [];
var len__33469__auto___43367 = arguments.length;
var i__33470__auto___43368 = (0);
while(true){
if((i__33470__auto___43368 < len__33469__auto___43367)){
args__33476__auto__.push((arguments[i__33470__auto___43368]));

var G__43369 = (i__33470__auto___43368 + (1));
i__33470__auto___43368 = G__43369;
continue;
} else {
}
break;
}

var argseq__33477__auto__ = ((((0) < args__33476__auto__.length))?(new cljs.core.IndexedSeq(args__33476__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__33477__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43364){
var map__43365 = p__43364;
var map__43365__$1 = ((((!((map__43365 == null)))?((((map__43365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43365):map__43365);
var opts = map__43365__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43363){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43363));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43371){if((e43371 instanceof Error)){
var e = e43371;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43371;

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
return (function (p__43375){
var map__43376 = p__43375;
var map__43376__$1 = ((((!((map__43376 == null)))?((((map__43376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43376):map__43376);
var msg_name = cljs.core.get.call(null,map__43376__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514286309695