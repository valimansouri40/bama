import React, { useState } from 'react';
import Header from './Component/Header/Header';
import Navigation from './Component/Navigation/Navigation';
import SearchBar from './Component/Searchbar/SearchBar';
import Searchbar from './Component/Searchbar/SearchBar';
import Lauoyt from './Container/Layout/Layout';
import Drawerres from './responsive/Drawerres/Drawerres';
import Headerres from './responsive/Headerres/Headerres';
import NavigationItem from './responsive/NavigationItem/NavigationItem';

function App(){
  const [bolean,setbol]=useState(false);
  const [drw,setdrw]=useState(false);

  return bolean?<SearchBar setbol={setbol}/>:<div style={{position:'relative'}}>
     
    
    <Header setbol={setbol}/>
    <Lauoyt/>
    <Headerres setbol={setbol} setdrw={setdrw}/>
    <NavigationItem/>
    {drw?<Drawerres setdrw={setdrw}/>:null}
    </div>
  
}
export default App;