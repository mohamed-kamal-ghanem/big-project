import { Row, Col, FloatingLabel, Form, FormControl } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../assets/images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';

import { ToastContainer } from 'react-toastify';
import AddProductHook from '../../hook/products/add-product-hook';
const AdminAddProductCom = () => {

  const [setName, setDescription, setQuantity, setPriceBefore, setShowColor, setPriceAfter, setImages, name, category, description, quantity
    , priceAfter, priceBefore, images, colors, showColor, options, handleSelectBrand, handleSubmitProducts, onComplete, handleSelectCategory
    , onSelect, onRemove, brandItem, onRemoveColor] = AddProductHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <h2>Add New Product</h2>
        <Col sm="8">
          <div className="text-form pb-2">Product Image</div>
          <MultiImageInput
            images={images}
            setImages={setImages}
            allowCrop={false}
            max={5}
            theme={'light'}
          />
          <FloatingLabel controlId="floatingPassword" label="Product Name" className="my-3">
            <Form.Control type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Product Description">
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <FormControl type="number" step={1} className='my-2' placeholder="Price" value={priceBefore} onChange={(e) => setPriceBefore(e.target.value)} />
          <FormControl type="number" step={1} className='my-2' placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <Form.Select aria-label="Default select example" className='my-2' onChange={handleSelectCategory}>
            <option>Main Product</option>
            {
              category.data &&
              category.data.map((cat, index) => {
                return (
                  <option key={index} value={cat._id}>{cat.name}</option>
                )
              })
            }

          </Form.Select>
          <Multiselect
            className="mt-2"
            placeholder="Sub-Product"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            showArrow={true}
            style={{ color: "red" }}
          />
          <Form.Select aria-label="Default select example" className='my-2' onChange={handleSelectBrand}>
            <option>Brand</option>
            {
              brandItem.data &&
              brandItem.data.map((cat, index) => {
                return (
                  <option key={index} value={cat._id}>{cat.name}</option>
                )
              })
            }
          </Form.Select>
          <div className="text-form mt-3 ">Available Colors</div>
          <div className="mt-1 d-flex wrap flex-wrap">

            {
              colors.length >= 1 && colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => onRemoveColor(index)}
                    className="color ms-2 border  mt-1"
                    style={{ backgroundColor: color }}>

                  </div>
                )
              })
            }

            <img src={add} alt="" width="30px" height="35px" style={{ cursor: "pointer", margin: "0 5px" }} onClick={() => setShowColor(!showColor)} />
            {
              showColor && <CompactPicker onChangeComplete={onComplete} />
            }
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex">
          <button className="my-2 btn btn-dark rounded-pill" onClick={handleSubmitProducts}>Save Edit</button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default AdminAddProductCom