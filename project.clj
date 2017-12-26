(defproject cider-figwheel-boilerplate "0.0.1"
  :dependencies [[org.clojure/clojure "1.9.0-alpha10"]
                 [org.clojure/clojurescript "1.9.89"]]

  :plugins [[lein-figwheel "0.5.14"]]

  ;; hack to get figwheel to play nice with Java 9
  :jvm-opts ["--add-modules" "java.xml.bind"]

  :cljsbuild {:builds
              [{:id "cider-figwheel-boilerplate"
                :source-paths ["src/"]
                :figwheel true
                :compiler
                {:main "cider-figwheel-boilerplate.core"
                 :asset-path "js/out"
                 :output-to "resources/public/js/cider-figwheel-boilerplate.js"
                 :output-dir "resources/public/js/out"}}]}

  ;; piggieback repl config:
  :profiles {:dev
             {:dependencies [[com.cemerick/piggieback "0.2.2"]
                             [figwheel-sidecar "0.5.15-SNAPSHOT"]]
              :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
