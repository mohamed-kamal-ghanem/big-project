import React from 'react'
import Pagination from '../../Components/uttilies/Pagination/Pagination'
import BrandContainer from '../../Components/Brand/BrandContainer'
import AllBrandPageHook from '../../hook/brand/all-brand-page-hook';

const AllBrand = () => {
  const [brand, loading, pageCount, getPage] = AllBrandPageHook();
  return (
    <div>
      <BrandContainer data={brand.data} loading={loading} />
      {
        pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null
      }
        
    </div>
  )
}

export default AllBrand