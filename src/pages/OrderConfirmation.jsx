import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function loadOrder(id){
  try{
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    return orders.find(order=>order.id === id) || null
  }catch{
    return null
  }
}

export default function OrderConfirmation(){
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const id = params.get('order') || ''
  const [order, setOrder] = useState(()=>loadOrder(id))

  useEffect(()=>{
    setOrder(loadOrder(id))
  },[id])

  if(!order){
    return (
      <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",background:'#f8fafc',minHeight:'100vh',padding:'60px 20px'}}>
        <div style={{maxWidth:760,margin:'0 auto',background:'#fff',borderRadius:20,padding:28,border:'1px solid #e2e8f0',textAlign:'center'}}>
          <h1 style={{margin:'0 0 10px',color:'#111827'}}>Order not found</h1>
          <p style={{margin:'0 0 18px',color:'#64748b'}}>We could not find the invoice for this order.</p>
          <Link to="/" style={{color:'#be185d',fontWeight:800}}>Back to shop</Link>
        </div>
      </div>
    )
  }

  const items = order.items || []
  const subtotal = items.reduce((sum,item)=>sum + (item.price||0)*(item.qty||0),0)
  const shipping = typeof order.shipping === 'number' ? order.shipping : (subtotal > 0 && subtotal < 50 ? 2 : 0)
  const total = typeof order.total === 'number' ? order.total : subtotal + shipping
  const invoiceNo = order.invoiceNo || order.id.replace('ORD-','INV-')
  const date = order.createdAt ? new Date(order.createdAt) : new Date()

  return (
    <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",background:'#f8fafc',minHeight:'100vh',padding:'36px 20px',color:'#0f172a'}}>
      <style>{`
        @media print{
          .invoice-actions{display:none!important}
          body{background:#fff!important}
        }
      `}</style>

      <main style={{maxWidth:980,margin:'0 auto'}}>
        <div className="invoice-actions" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,marginBottom:18,flexWrap:'wrap'}}>
          <div>
            <h1 style={{margin:0,fontSize:30}}>Order confirmed</h1>
            <p style={{margin:'6px 0 0',color:'#64748b'}}>Your invoice has been generated.</p>
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <Link to="/" style={{textDecoration:'none',padding:'11px 16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',color:'#334155',fontWeight:800}}>Shop</Link>
            <Link to="/orders" style={{textDecoration:'none',padding:'11px 16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',color:'#334155',fontWeight:800}}>Orders</Link>
            <button onClick={()=>window.print()} style={{padding:'11px 16px',borderRadius:12,border:0,background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',fontWeight:800,cursor:'pointer'}}>Print invoice</button>
          </div>
        </div>

        <section style={{background:'#fff',borderRadius:22,padding:28,border:'1px solid rgba(15,23,42,.08)',boxShadow:'0 24px 70px rgba(15,23,42,.08)'}}>
          <div style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap',borderBottom:'1px solid #e2e8f0',paddingBottom:22}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:14}}>
                <img src={logo} alt="PN Digital" style={{ height: 48, width: 'auto', display: 'block', objectFit: 'contain' }} />
                <div>
                  <div style={{fontSize:13,color:'#64748b'}}>Demo store invoice</div>
                </div>
              </div>
              <div style={{color:'#64748b',lineHeight:1.6,fontSize:14}}>
                Thank you for shopping with us.<br />
                This invoice was generated after checkout.
              </div>
            </div>

            <div style={{textAlign:'right'}}>
              <div style={{fontSize:32,fontWeight:900,color:'#ec4899'}}>INVOICE</div>
              <div style={{marginTop:8,color:'#64748b',fontSize:14}}>Invoice No.</div>
              <div style={{fontWeight:900}}>{invoiceNo}</div>
              <div style={{marginTop:8,color:'#64748b',fontSize:14}}>Date</div>
              <div style={{fontWeight:800}}>{date.toLocaleDateString()}</div>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:18,marginTop:22}}>
            <div style={{background:'#f8fafc',borderRadius:16,padding:16,border:'1px solid #e2e8f0'}}>
              <div style={{fontSize:13,color:'#64748b',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',marginBottom:8}}>Bill to</div>
              <div style={{fontWeight:900}}>{order.name}</div>
              <div style={{color:'#64748b',fontSize:14,marginTop:4}}>{order.email}</div>
              <div style={{color:'#64748b',fontSize:14,marginTop:8,lineHeight:1.5}}>{order.address}<br />{order.city}, {order.zip}<br />{order.country}</div>
            </div>

            <div style={{background:'#f8fafc',borderRadius:16,padding:16,border:'1px solid #e2e8f0'}}>
              <div style={{fontSize:13,color:'#64748b',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',marginBottom:8}}>Order details</div>
              <div style={{display:'flex',justifyContent:'space-between',gap:12,marginBottom:8}}><span style={{color:'#64748b'}}>Order ID</span><strong>{order.id}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',gap:12,marginBottom:8}}><span style={{color:'#64748b'}}>Payment</span><strong>{order.method}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',gap:12}}><span style={{color:'#64748b'}}>Status</span><strong style={{color:'#16a34a'}}>Paid</strong></div>
            </div>
          </div>

          <div style={{marginTop:24,overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',minWidth:620}}>
              <thead>
                <tr style={{background:'#fdf2f8',color:'#be185d'}}>
                  <th style={{textAlign:'left',padding:14,borderRadius:'12px 0 0 12px'}}>Item</th>
                  <th style={{textAlign:'left',padding:14}}>Size</th>
                  <th style={{textAlign:'right',padding:14}}>Qty</th>
                  <th style={{textAlign:'right',padding:14}}>Price</th>
                  <th style={{textAlign:'right',padding:14,borderRadius:'0 12px 12px 0'}}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item=> (
                  <tr key={`${item.id}-${item.size || 'M'}`} style={{borderBottom:'1px solid #e2e8f0'}}>
                    <td style={{padding:14,fontWeight:800}}>{item.name}</td>
                    <td style={{padding:14,color:'#64748b'}}>{item.size || 'M'}</td>
                    <td style={{padding:14,textAlign:'right'}}>{item.qty || 1}</td>
                    <td style={{padding:14,textAlign:'right'}}>${(item.price || 0).toFixed(2)}</td>
                    <td style={{padding:14,textAlign:'right',fontWeight:900}}>${((item.price||0)*(item.qty||0)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{display:'flex',justifyContent:'flex-end',marginTop:22}}>
            <div style={{width:'100%',maxWidth:340,display:'flex',flexDirection:'column',gap:12}}>
              <div style={{display:'flex',justifyContent:'space-between',color:'#64748b'}}><span>Subtotal</span><strong style={{color:'#0f172a'}}>${subtotal.toFixed(2)}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',color:'#64748b'}}><span>Shipping</span><strong style={{color:'#0f172a'}}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',color:'#64748b'}}><span>Tax</span><strong style={{color:'#0f172a'}}>$0.00</strong></div>
              <div style={{borderTop:'1px solid #e2e8f0',paddingTop:14,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <strong style={{fontSize:18}}>Total</strong>
                <strong style={{fontSize:26,color:'#ec4899'}}>${total.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
