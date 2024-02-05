import CategorieContainer from "../../Components/Categorie/CategorieContainer/CategorieContainer";
import Pagination from "../../Components/uttilies/Pagination/Pagination";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";


const CategoriePage = () => {
  
  const [category, loading, pageCount, getPage] = AllCategoryPageHook();
  return (
      <div>
      <CategorieContainer data={category.data} loading={loading} />
      {
        pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null
      }
    </div>
  )
}

export default CategoriePage