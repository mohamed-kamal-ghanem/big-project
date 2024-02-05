import React from 'react'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import { Row, Spinner } from 'react-bootstrap'
import Paginate from '../uttilies/Pagination/Pagination'
import GetAllOrderHook from '../../hook/order/get-all-order-hook'
const AdminAllOrdersCom = () => {
  const [orderData,, paginate, onPress] = GetAllOrderHook();
  return (
    <div>
      <h2>Manage All Orders</h2>
      <Row>
        {
          orderData.length >= 1 ? (orderData.map((orderItem, index) => {
            return <AdminAllOrdersItem key={index} order={orderItem} />
          })) : <Spinner variant='primary' />
        }
      </Row>
      {
        paginate.numberOfPages >= 2 ? (<Paginate onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
      }
    </div>
  )
}

export default AdminAllOrdersCom