import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function loadCart(){
  try{
    return JSON.parse(localStorage.getItem('cart') || '[]') || []
  }catch{
    return []
  }
}

function getOrderTotals(items){
  const subtotal = items.reduce((s,i)=>s + (i.price||0)*(i.qty||0),0)
  const shipping = subtotal > 0 && subtotal < 50 ? 2 : 0
  return {
    subtotal,
    shipping,
    total: subtotal + shipping
  }
}

export default function Checkout(){
  const navigate = useNavigate()
  const [cart, setCart] = useState(()=>loadCart())
  const [paymentMethod, setPaymentMethod] = useState('Cash on delivery')
  const [pendingOrder, setPendingOrder] = useState(null)
  const [orderedId, setOrderedId] = useState(null)

  useEffect(()=>{
    const cached = loadCart()
    setCart(cached)
    if(!cached || cached.length===0) navigate('/cart')
  },[navigate])

  useEffect(()=>{
    if(!orderedId) return
    const timer = setTimeout(()=>{
      navigate('/order-confirmation?order='+encodeURIComponent(orderedId))
    },1400)
    return ()=>clearTimeout(timer)
  },[orderedId, navigate])

  function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const currentCart = loadCart()
    if(!currentCart || currentCart.length===0){alert('Cart empty'); return}
    setPendingOrder({
      first: form.get('first'),
      last: form.get('last'),
      email: form.get('email'),
      address: form.get('address'),
      city: form.get('city'),
      zip: form.get('zip'),
      country: form.get('country'),
      method: form.get('method')
    })
  }

  function confirmOrder(){
    if(!pendingOrder) return
    const currentCart = loadCart()
    if(!currentCart || currentCart.length===0){
      alert('Cart empty')
      setPendingOrder(null)
      return
    }
    const now = Date.now()
    const orderTotals = getOrderTotals(currentCart)
    const order = {
      id: 'ORD-'+now,
      invoiceNo: 'INV-'+now,
      createdAt: new Date().toISOString(),
      name: pendingOrder.first + ' ' + pendingOrder.last,
      email: pendingOrder.email,
      address: pendingOrder.address,
      city: pendingOrder.city,
      zip: pendingOrder.zip,
      country: pendingOrder.country,
      method: pendingOrder.method,
      items: currentCart,
      subtotal: orderTotals.subtotal,
      shipping: orderTotals.shipping,
      total: orderTotals.total
    }
    const orders = JSON.parse(localStorage.getItem('orders')||'[]')
    orders.push(order)
    localStorage.setItem('orders',JSON.stringify(orders))
    localStorage.removeItem('cart')
    setPendingOrder(null)
    setCart([])
    setOrderedId(order.id)
  }

  const {subtotal, shipping, total} = getOrderTotals(cart)
  const itemCount = cart.reduce((s,i)=>s + (i.qty||0),0)
  const fieldStyle = {
    width:'100%',
    boxSizing:'border-box',
    marginTop:8,
    padding:'13px 14px',
    borderRadius:12,
    border:'1px solid #e2e8f0',
    background:'#f8fafc',
    color:'#0f172a',
    fontSize:14,
    outline:'none'
  }
  const labelStyle = {
    display:'block',
    color:'#334155',
    fontSize:13,
    fontWeight:700
  }

  return (
    <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",background:'#f8fafc',color:'#0f172a',minHeight:'100vh'}}>
      <style>{`
        .checkout-grid{display:grid;grid-template-columns:minmax(0,1fr) 380px;gap:28px;align-items:start}
        .checkout-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
        .checkout-field:focus{border-color:#ec4899!important;background:#fff!important;box-shadow:0 0 0 4px rgba(236,72,153,.12)}
        .success-check{stroke-dasharray:80;stroke-dashoffset:80;animation:draw-check .55s ease .18s forwards}
        .success-ring{animation:pop-ring .45s ease forwards}
        @keyframes draw-check{to{stroke-dashoffset:0}}
        @keyframes pop-ring{0%{transform:scale(.72);opacity:.45}70%{transform:scale(1.08);opacity:1}100%{transform:scale(1);opacity:1}}
        @media (max-width: 860px){
          .checkout-grid{grid-template-columns:1fr}
          .checkout-form-grid{grid-template-columns:1fr}
          .checkout-summary{position:static!important}
        }
      `}</style>

      <main style={{maxWidth:1180,margin:'0 auto',padding:'36px 20px 48px'}}>
        <div style={{marginBottom:28}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 12px',borderRadius:999,background:'#fdf2f8',color:'#be185d',fontSize:13,fontWeight:700}}>Step 2 of 2</div>
          <h2 style={{margin:'14px 0 8px',fontSize:34,lineHeight:1.1}}>Checkout</h2>
          <p style={{margin:0,color:'#64748b',fontSize:15}}>Enter your delivery details and review your order before placing it.</p>
        </div>

        <div className="checkout-grid">
          <section style={{background:'#fff',borderRadius:20,padding:24,border:'1px solid rgba(15,23,42,.07)',boxShadow:'0 24px 70px rgba(15,23,42,.08)'}}>
            <form onSubmit={handleSubmit} id="checkoutForm">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,marginBottom:20}}>
                <div>
                  <h3 style={{margin:0,fontSize:20}}>Shipping details</h3>
                  <p style={{margin:'6px 0 0',color:'#64748b',fontSize:14}}>We will use this information for your demo order.</p>
                </div>
                <div style={{width:42,height:42,borderRadius:14,background:'#fdf2f8',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>1</div>
              </div>

              <div className="checkout-form-grid">
                <div>
                  <label style={labelStyle}>First name</label>
                  <input className="checkout-field" name="first" required style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last name</label>
                  <input className="checkout-field" name="last" required style={fieldStyle} />
                </div>
              </div>

              <div style={{marginTop:16}}>
                <label style={labelStyle}>Email</label>
                <input className="checkout-field" name="email" type="email" required style={fieldStyle} />
              </div>

              <div style={{marginTop:16}}>
                <label style={labelStyle}>Address</label>
                <input className="checkout-field" name="address" required style={fieldStyle} />
              </div>

              <div className="checkout-form-grid" style={{marginTop:16}}>
                <div>
                  <label style={labelStyle}>City</label>
                  <input className="checkout-field" name="city" required style={fieldStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Postal / Zip</label>
                  <input className="checkout-field" name="zip" required style={fieldStyle} />
                </div>
              </div>

              <div style={{marginTop:16}}>
                <label style={labelStyle}>Country</label>
                <input className="checkout-field" name="country" required style={fieldStyle} />
              </div>

              <div style={{height:1,background:'#e2e8f0',margin:'26px 0'}} />

              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,marginBottom:20}}>
                <div>
                  <h3 style={{margin:0,fontSize:20}}>Payment</h3>
                  <p style={{margin:'6px 0 0',color:'#64748b',fontSize:14}}>Demo payment only. No real charge is processed.</p>
                </div>
                <div style={{width:42,height:42,borderRadius:14,background:'#fdf2f8',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800}}>2</div>
              </div>

              <div>
                <label style={labelStyle}>Payment method</label>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:12,marginTop:8}}>
                  {['Cash on delivery','Card'].map(method=> (
                    <label
                      key={method}
                      style={{
                        display:'flex',
                        alignItems:'center',
                        gap:10,
                        padding:'14px 16px',
                        borderRadius:14,
                        border: paymentMethod === method ? '1px solid #ec4899' : '1px solid #e2e8f0',
                        background: paymentMethod === method ? '#fdf2f8' : '#fff',
                        color: paymentMethod === method ? '#be185d' : '#334155',
                        fontWeight:800,
                        cursor:'pointer'
                      }}
                    >
                      <input
                        type="radio"
                        name="method"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={()=>setPaymentMethod(method)}
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              {paymentMethod === 'Card' && (
                <div style={{marginTop:16}}>
                  <label style={labelStyle}>Card details</label>
                  <input className="checkout-field" name="card" placeholder="4242 4242 4242 4242" required style={fieldStyle} />
                </div>
              )}

              <div style={{marginTop:24,display:'flex',gap:12,flexWrap:'wrap'}}>
                <button type="submit" style={{flex:'1 1 220px',background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',padding:'14px 18px',borderRadius:14,border:0,fontWeight:800,cursor:'pointer',boxShadow:'0 18px 38px rgba(236,72,153,.22)'}}>Place order</button>
                <button type="button" onClick={()=>navigate('/cart')} style={{background:'#fff',color:'#334155',border:'1px solid #e2e8f0',padding:'14px 18px',borderRadius:14,fontWeight:800,cursor:'pointer'}}>Cancel</button>
              </div>
            </form>
          </section>

          <aside className="checkout-summary" style={{background:'#fff',borderRadius:20,padding:22,border:'1px solid rgba(15,23,42,.07)',boxShadow:'0 24px 70px rgba(15,23,42,.08)',position:'sticky',top:96}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,marginBottom:16}}>
              <h3 style={{margin:0,fontSize:20}}>Order summary</h3>
              <span style={{fontSize:13,fontWeight:800,color:'#be185d',background:'#fdf2f8',padding:'7px 10px',borderRadius:999}}>{itemCount} items</span>
            </div>

            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              {cart.map(item=> (
                <div key={`${item.id}-${item.size || 'M'}`} style={{display:'grid',gridTemplateColumns:'64px 1fr auto',gap:12,alignItems:'center'}}>
                  <img src={item.img} alt={item.name} style={{width:64,height:64,borderRadius:14,objectFit:'cover',background:'#f1f5f9'}} />
                  <div style={{minWidth:0}}>
                    <div style={{fontWeight:800,fontSize:14,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{item.name}</div>
                    <div style={{color:'#64748b',fontSize:13,marginTop:4}}>Size {item.size || 'M'} x {item.qty || 1}</div>
                  </div>
                  <div style={{fontWeight:800,fontSize:14}}>${(((item.price||0)*(item.qty||0))).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div style={{height:1,background:'#e2e8f0',margin:'20px 0'}} />

            <div style={{display:'flex',flexDirection:'column',gap:12,color:'#475569',fontSize:14}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Subtotal</span><strong style={{color:'#0f172a'}}>${subtotal.toFixed(2)}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Shipping</span><strong style={{color:'#0f172a'}}>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Tax</span><strong style={{color:'#0f172a'}}>$0.00</strong></div>
            </div>

            <div style={{borderTop:'1px solid #e2e8f0',marginTop:18,paddingTop:18,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <strong style={{fontSize:18}}>Total</strong>
              <strong style={{fontSize:24,color:'#ec4899'}}>${total.toFixed(2)}</strong>
            </div>
          </aside>
        </div>
      </main>

      {pendingOrder && (
        <div
          onClick={()=>setPendingOrder(null)}
          style={{position:'fixed',inset:0,background:'rgba(15,23,42,.48)',display:'flex',alignItems:'center',justifyContent:'center',padding:20,zIndex:60,backdropFilter:'blur(4px)'}}
        >
          <div
            onClick={e=>e.stopPropagation()}
            style={{width:'100%',maxWidth:460,background:'#fff',borderRadius:20,padding:24,boxShadow:'0 30px 90px rgba(15,23,42,.28)',border:'1px solid rgba(15,23,42,.08)'}}
          >
            <div style={{width:48,height:48,borderRadius:16,background:'#fdf2f8',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:800,marginBottom:16}}>?</div>
            <h3 style={{margin:'0 0 8px',fontSize:22,color:'#111827'}}>Confirm your order?</h3>
            <p style={{margin:'0 0 18px',color:'#64748b',lineHeight:1.6}}>
              Are you sure you want to place this order with <strong style={{color:'#111827'}}>{pendingOrder.method}</strong>?
            </p>
            <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:14,padding:14,marginBottom:18}}>
              <div style={{display:'flex',justifyContent:'space-between',gap:12,marginBottom:8}}>
                <span style={{color:'#64748b'}}>Items</span>
                <strong>{itemCount}</strong>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',gap:12}}>
                <span style={{color:'#64748b'}}>Total</span>
                <strong style={{color:'#ec4899'}}>${total.toFixed(2)}</strong>
              </div>
            </div>
            <div style={{display:'flex',gap:12,justifyContent:'flex-end',flexWrap:'wrap'}}>
              <button
                type="button"
                onClick={()=>setPendingOrder(null)}
                style={{padding:'11px 16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',color:'#334155',fontWeight:800,cursor:'pointer'}}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmOrder}
                style={{padding:'11px 16px',borderRadius:12,border:0,background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',fontWeight:800,cursor:'pointer',boxShadow:'0 14px 30px rgba(236,72,153,.2)'}}
              >
                Yes, place order
              </button>
            </div>
          </div>
        </div>
      )}

      {orderedId && (
        <div
          style={{position:'fixed',inset:0,background:'rgba(15,23,42,.48)',display:'flex',alignItems:'center',justifyContent:'center',padding:20,zIndex:70,backdropFilter:'blur(4px)'}}
        >
          <div style={{width:'100%',maxWidth:400,background:'#fff',borderRadius:22,padding:28,boxShadow:'0 30px 90px rgba(15,23,42,.28)',border:'1px solid rgba(15,23,42,.08)',textAlign:'center'}}>
            <div className="success-ring" style={{width:88,height:88,borderRadius:'50%',background:'#dcfce7',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px',transformOrigin:'center'}}>
              <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
                <circle cx="26" cy="26" r="23" fill="none" stroke="#22c55e" strokeWidth="4" opacity=".22" />
                <path className="success-check" d="M15 27.5l7.2 7.2L38 18.8" fill="none" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 style={{margin:'0 0 8px',fontSize:24,color:'#111827'}}>Ordered!</h3>
            <p style={{margin:'0 0 18px',color:'#64748b',lineHeight:1.6}}>
              Your order was placed successfully. Opening your invoice now.
            </p>
            <button
              type="button"
              onClick={()=>navigate('/order-confirmation?order='+encodeURIComponent(orderedId))}
              style={{padding:'11px 16px',borderRadius:12,border:0,background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',fontWeight:800,cursor:'pointer',boxShadow:'0 14px 30px rgba(236,72,153,.2)'}}
            >
              View invoice
            </button>
          </div>
        </div>
      )}

      <footer style={{padding:22,textAlign:'center',color:'#64748b',fontSize:14}}>&copy; {new Date().getFullYear()} LN Clothsie</footer>
    </div>
  )
}
