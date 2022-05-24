import React from "react";
import { SearchArea,SearchBar } from "./Style";
import { FiSearch } from "react-icons/fi";
function Search(){
   return(
    <SearchArea>
        <FiSearch style={{ fontSize:16, marginLeft:8 }} />
        <form>
            <SearchBar type="text" name="search" placeholder="트위터 검색" />
        </form>
    </SearchArea>
   );
}
export default Search;
