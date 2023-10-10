import './App.css';

function App() {
  return (
    <div id="root">
    <MainContent />
    </div>);
}
  function MainContent() {
    return(
      <div id="MainCon">
    <div className="graybar">
    <div className="row">
    <a className="hoverpink" style= {{ textAlign: "center"}} href=" ">FREE 1-3 Day Shipping Over $79</a>
    <a className="sidegray hovergreen clickaqua" href ="https://www.gamestop.com/stores/?showMap=true&horizontalView=true&isForm=true"><i className="material-icons sidegrayicon">storefront</i>{"\n"}Your Store</a>
    <a className="sidegray clicklime" href= "https://www.gamestop.com/orders/"><i className="material-icons sidegrayicon">assignment</i>{"\n"}Track Order</a>
    </div>
    </div>
    <div className="rainbowbar">
    <div className="row">
    <a className="hoverpink clickaqua" href="https://www.gamestop.com/pro/">Get 5% Extra Off Your Purchase When You Join Or Renew GameStop Pro.*</a>
    </div></div>
    <div className="gmebar">
    <div className="row">
    <a href=" " className="inline" style= {{ FontFace: "Poppins", fontSize: "11px", textAlign: "center" }}><i style={{ textAlign: "center" }} className="material-icons">density_medium</i>Menu</a>
    <a href="https://www.gamestop.com/"><img className="llogo" alt="nah" src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw3fe7a996/images/svg-icons/logo-gs-mono.svg"/></a>
    <div className="searcharea"><a style= {{textDecoration: 'none'}} href=" "><button className="searchbutt"><i className="material-icons">search</i></button><input className="searchbar" type="text" autocomplete="on" placeholder="Search games, consoles & more"/></a></div>
    </div>
        </div>
        <button id="showbutt">Click Me</button>
    </div>);
    
}

export default App;