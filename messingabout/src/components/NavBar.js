    function NavBar() { return (
     <div id="MainCon">
     <div className="graybar">
      <div className="row">
    <a className="hoverpink" style= {{ textAlign: "center"}} href=" ">FREE 1-3 Day Shipping Over $79</a>
    <a style= {{ Display: "inline-flex", texAlign: "right" }} className="sidegray hovergreen clickaqua" href ="https://www.gamestop.com/stores/?showMap=true&horizontalView=true&isForm=true"><i className="material-icons sidegrayicon">storefront</i>{"\n"}Your Store</a>
    <a style= {{ Display: "inline-flex", texAlign: "right" }} className="sidegray clicklime" href= "https://www.gamestop.com/orders/"><i className="material-icons sidegrayicon">assignment</i>{"\n"}Track Order</a>
      </div>
     </div>
    <div className="rainbowbar">
     <div className="row">
    <a className="hoverpink clickaqua" href="https://www.gamestop.com/pro/">Get 5% Extra Off Your Purchase When You Join Or Renew GameStop Pro.*</a>
     </div>
    </div>
     <div className="gmebar">
      <div className="row">
        {/* Menu */}
        <a className="menucon"><i className="material-icons" style={{ marginRight: "0", paddingLeft: "10px", float: "left", color: "black", fontSize: "30px"}}>menu</i>
    Menu</a>
        {/* GME Logo */}
    <img className="llogo" href="https://www.gamestop.com/" alt="gmelogo" src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw3fe7a996/images/svg-icons/logo-gs-mono.svg"/>
       {/* Searchbar/Searcharea */}
       <div className="searcharea"><button className="searchbutt"><i className="material-icons">search</i></button>
    <input className="searchbar" type="text" autocomplete="on" placeholder="Search games, consoles & more"/></div>
       {/* Trade */}
   <a className="split hideme minicons" href="https://www.gamestop.com/trade/"><i className="material-icons">repeat</i>Trade-In</a>
   {/* GameStop Pro */}
    <a href="https://www.gamestop.com/pro/" className="split hideme lgcons"><button style={{ backgroundColor: "inherit", border: "none" }}><img className="cart" alt="regpic" src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw5be8f0e6/images/svg-icons/gamestop-pro-icon.svg"/></button>GameStop Pro</a>
    {/* Login */}
<a href="https://www.gamestop.com/login/"
  className="split minicons"><button style={{ backgroundColor: "inherit", border: "none" }} ><i className="material-icons">person</i></button>{"\n"}Sign In</a>
  {/* Cart */}
    <a href="https://www.gamestop.com/cart/" className="split minicons"><button style={{ backgroundColor: "inherit", border: "none" }}><img alt="cart" className="cart" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3216541/shopping-cart-icon-md.png"/></button>{"\n"}Cart</a>
             </div>
             </div>
    </div>
     );
    };
     export default NavBar;