import { Row, Col, FloatingLabel, Form, Spinner } from 'react-bootstrap'
import AddBrandHook from '../../hook/brand/add-brand-hook';
import { MdCloudDone } from 'react-icons/md';
import { FaTimesCircle } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

const AdminAddBrandCom = () => {
  const [img, name, res, setName, onImageChange, handleSubmit, loading, isPress] = AddBrandHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Brand</h2>
        <Col sm="8">
          <div className="text-form pb-2">Brand Photo</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="category-item"
                height="150px"
                width="150px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <FloatingLabel controlId="floatingPassword" label="Brand Name" className="my-3">
            <Form.Control type="text" placeholder="Brand Name" onChange={(e) => { e.persist();  setName(e.target.value) }} value={name}/>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex">
          <button className="my-2 btn btn-dark" onClick={handleSubmit}>Save Edit</button>
        </Col>
      </Row>

      {
        isPress ? loading ? <Spinner animation="border" role="status"></Spinner> : res.status === 201 ?<MdCloudDone className='fs-2 text-success'/>:<FaTimesCircle className='fs-2 text-danger'/> : null
      }

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default AdminAddBrandCom