import { Row, Col, FloatingLabel, Form } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddSubcategoryHook from '../../hook/subCategory/add-subcategory-hook';


const AdminAddSubCategoriyCom = () => {
  const [category, onChangeName, name, handleSelect, handleSubmit] = AddSubcategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New SubCategoiry</h2>
        <Col sm="8">
          <FloatingLabel controlId="floatingPassword" label="Categoriy Name" className="my-3">
            <Form.Control type="text" placeholder="Categoriy Name" value={name} onChange={onChangeName} />
          </FloatingLabel>
          <Form.Select aria-label="Default select example" onChange={handleSelect}>
            <option value="0">Select main Categoriy</option>
            {
              category.data && category.data.map((item, index) => {
                return (
                  <option key={index} value={item._id}>{item.name}</option>
                )
              })
            }
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex ">
          <button className="my-2 btn btn-dark" onClick={handleSubmit}>Save Edit</button>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  )
}

export default AdminAddSubCategoriyCom