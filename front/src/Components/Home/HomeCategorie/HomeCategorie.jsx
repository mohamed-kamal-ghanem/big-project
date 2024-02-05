import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../../uttilies/subTitle/SubTitle'
import CategorieCard from '../../Categorie/CategorieCard/CategorieCard'
import HomeCategoryHook from '../../../hook/category/home-category-hook'
const HomeCategorie = () => {

  const [category, loading, colors] = HomeCategoryHook();
  return (
    <Container>
      <SubTitle title="Categories" btntitle="More" pathText="/allcategorie" />
      <Row className="my-2 justify-content-around d-flex">
        {
          loading === false ? category.data ? (
            category.data.slice(0, 6).map((item,index) => {
              return (
                <CategorieCard key={index} title={item.name} background={colors[Math.floor(Math.random() * 5) + 1]} img={item.image} category={item}/>

              )
            })
          ) : (<h4>There Is no Categories</h4>)
            : <Spinner animation="border" variant="primary" />
        }
      </Row>
    </Container>
  )
}

export default HomeCategorie