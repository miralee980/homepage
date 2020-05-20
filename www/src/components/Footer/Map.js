import React from 'react';

class Map extends React.Component {
   constructor(props) {
        super(props);	
    }
    //map;
    //markers = [];
    //infowindows = [];
    componentDidMount(){
      //   var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
      //   var options = { //지도를 생성할 때 필요한 기본 옵션
      //       center: new window.kakao.maps.LatLng(32.49200, 127.03120), //지도의 중심좌표.
      //       level: 4 //지도의 레벨(확대, 축소 정도)
      //   };
      // this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      
      // let el = document.getElementById('myMap');
      // let map = new daum.maps.Map(el, {center: new daum.maps.LatLng(32.49200, 127.03120)});
    }
    render() {
        return (
            <div>
               <div id='myMap'/>
            </div>
        )
    }
}
export default Map;