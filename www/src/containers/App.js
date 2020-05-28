import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "screens/AppRoutes";
import Header from "components/Header";
import Footer from "components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.path);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    // scroll event
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    // 따라서 스크롤 시점에 따라 특정 액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
    console.log("scroll = %d", scrollTop);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header color={this.state.scrollTop > 30 ? "gray" : "transparent"} />
          <div>
            <MainRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
