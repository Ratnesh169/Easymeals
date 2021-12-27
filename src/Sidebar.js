import FilterRecipes from "./FilterRecipes";
import BySeason from "./BySeason";
import ByDeitaryPreference from "./ByDeitaryPreference";
import ByMeal from "./ByMeal";
import SweetThings from "./SweetThings";
import SearchRecipeTitles from "./SearchRecipeTitles";



function Sidebar() {
 
    return (
    <div className="Sidebar" style={{width:"250px"}}>
        <FilterRecipes/>
        <BySeason/>
        <ByDeitaryPreference/>
        <ByMeal/>
        <SweetThings/>
        <SearchRecipeTitles/>
    </div>
  );
}

export default Sidebar;
