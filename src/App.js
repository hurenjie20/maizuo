import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/publish/footer";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Movie from "./components/movie";
import Loading from "./components/loading/loading";
import My from "./components/my";
import store from "./store";
import "./common/css/reset.css";
import "./common/js/flexble";
import "./common/css/iconfont/iconfont.css";

//路由懒加载
let Home = Loadable({
  loader: () => import("./components/home"),
  loading: Loading
})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            {/* 渲染组件 */}
            <Route path="/home" component={Home}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/my" component={My}></Route>
            {/* 路由重定向 */}
            <Redirect path="/" to="/home" />
            </Switch>
            {/* 公共组件 */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
