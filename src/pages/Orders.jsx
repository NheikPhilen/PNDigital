import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Orders(){
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    try{ setOrders(JSON.parse(localStorage.getItem('orders')||'[]')) }catch{ setOrders([]) }
  },[])

  if(!orders || orders.length===0) return (
    <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",maxWidth:900,margin:'80px auto',padding:20,textAlign:'center'}}>
      <div style={{background:'#fff',borderRadius:12,padding:28,border:'1px solid #f3f3f3'}}>No orders yet. <Link to="/">Start shopping</Link></div>
    </div>
  )

  return (
    <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",maxWidth:900,margin:'40px auto',padding:20}}>
      <h2>Your Orders</h2>
      {orders.map(o=> (
        <div key={o.id} style={{background:'#fff',padding:16,borderRadius:10,marginBottom:12,border:'1px solid #f3f3f3'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <div style={{fontWeight:700}}>{o.name}</div>
              <div style={{color:'#6b7280'}}>{o.email}</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontWeight:700}}>{o.id}</div>
              <div style={{color:'#6b7280'}}>${(o.total||0).toFixed(2)}</div>
              <Link to={`/order-confirmation?order=${encodeURIComponent(o.id)}`} style={{display:'inline-block',marginTop:8,color:'#be185d',fontWeight:700,textDecoration:'none'}}>View invoice</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
