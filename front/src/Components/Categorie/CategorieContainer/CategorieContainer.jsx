import { Container, Row, Spinner } from 'react-bootstrap'
import CategorieCard from '../../Categorie/CategorieCard/CategorieCard'
const CategorieContainer = ({data,loading}) => {

    
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

    return (
        <Container>
            <h4 className="my-2">All Categories</h4>
            <Row className="my-2 justify-content-around d-flex">

                {
                    loading === false ?
                        data ? (
                            data.map((item, index) => {
                                return (
                                    <CategorieCard key={index} background={colors[Math.floor(Math.random() * 5) + 1]} category={item} />
                                )
                        })
                    ) : (<h4>There Is no Categories</h4>)
                        : <Spinner animation="border" variant="primary" />
                }
                
            </Row>
        </Container>
    )
}

export default CategorieContainer