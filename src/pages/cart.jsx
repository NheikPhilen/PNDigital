import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CartPage(){
  const [cart, setCart] = useState(()=>{
    try{ return JSON.parse(localStorage.getItem('cart')||'[]') || [] }catch{ return [] }
  })
  const [pendingRemove, setPendingRemove] = useState(null)
  const [showEmptyCartPopup, setShowEmptyCartPopup] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  function changeQty(id, size, delta){
    setCart(prev=>{
      const copy = prev.slice()
      const idx = copy.findIndex(i=>String(i.id)===String(id) && (i.size || 'M') === (size || 'M'))
      if(idx===-1) return prev
      copy[idx] = {...copy[idx], qty: Math.max(0,(copy[idx].qty||0)+delta)}
      return copy.filter(i=>i.qty>0)
    })
  }

  function confirmRemove(){
    if(!pendingRemove) return
    setCart(prev=>prev.filter(i=>
      String(i.id)!==String(pendingRemove.id) || (i.size || 'M') !== (pendingRemove.size || 'M')
    ))
    setPendingRemove(null)
  }

  function clearCart(){
    if(!confirm('Clear the cart?')) return
    setCart([])
  }

  function checkout(){
    if(!cart || cart.length===0){
      setShowEmptyCartPopup(true)
      return
    }
    navigate('/checkout')
  }

  const subtotal = cart.reduce((s,i)=>s + (i.price||0)*(i.qty||0),0)
  const shipping = subtotal > 0 && subtotal < 50 ? 2 : 0
  const total = subtotal + shipping
  const totalCount = cart.reduce((s,i)=>s + (i.qty||0),0)

  return (
    <div style={{fontFamily:"MIsansKhmer, system-ui, sans-serif",padding:20,background:'linear-gradient(180deg,#fff 0%'}}>
      <main style={{maxWidth:1100,margin:'28px auto',padding:'0 20px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:28}}>
          <section style={{background:'#fff',borderRadius:14,padding:18,border:'1px solid rgba(0,0,0,.04)'}}>
            <h2 style={{margin:'0 0 12px 0'}}>Shopping Cart</h2>
            {cart.length===0 ? (
              <div style={{padding:40,textAlign:'center',color:'#6b7280'}}>Your cart is empty - add items from the shop.</div>
            ) : (
              cart.map(item=> (
                <div key={`${item.id}-${item.size || 'M'}`} style={{display:'flex',gap:12,alignItems:'center',padding:'12px 0',borderBottom:'1px solid #f3f3f3'}}>
                  <img src={item.img} alt={item.name} style={{width:88,height:88,objectFit:'cover',borderRadius:10}} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight:600,marginBottom:6}}>{item.name}</div>
                    <div style={{color:'#6b7280',fontSize:13}}>${(item.price||0).toFixed(2)} - {item.category || 'Apparel'} - Size: {item.size || 'M'}</div>
                    <div style={{marginTop:8,display:'flex',alignItems:'center',gap:8}}>
                      <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <button onClick={()=>changeQty(item.id,item.size,-1)} style={{padding:'8px 12px',borderRadius:10,border:'1px solid rgba(0,0,0,.06)'}}>-</button>
                        <div style={{minWidth:36,textAlign:'center'}}>{item.qty}</div>
                        <button onClick={()=>changeQty(item.id,item.size,1)} style={{padding:'8px 12px',borderRadius:10,border:'1px solid rgba(0,0,0,.06)'}}>+</button>
                      </div>
                      <button onClick={()=>setPendingRemove(item)} style={{padding:'8px 12px',borderRadius:10,border:'1px solid rgba(0,0,0,.06)'}}>Remove</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>

          <aside style={{background:'#fff',borderRadius:14,padding:18,border:'1px solid rgba(0,0,0,.04)'}}>
            <h3 style={{margin:'0 0 8px 0'}}>Order Summary</h3>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Items</span><span>{totalCount}</span></div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div style={{borderTop:'1px solid #f3f3f3',paddingTop:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <div style={{display:'flex',gap:10,marginTop:10}}>
                <button onClick={checkout} style={{flex:1,background:'linear-gradient(90deg,#ff4da6,#ec4899)',color:'#fff',padding:'10px 14px',borderRadius:10,border:0,fontWeight:700,cursor:'pointer'}}>Checkout</button>
                <button onClick={clearCart} style={{padding:'8px 12px',borderRadius:10,border:'1px solid rgba(0,0,0,.06)',background:'#fff'}}>Clear</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {pendingRemove && (
        <div
          onClick={()=>setPendingRemove(null)}
          style={{position:'fixed',inset:0,background:'rgba(15,23,42,.48)',display:'flex',alignItems:'center',justifyContent:'center',padding:20,zIndex:50,backdropFilter:'blur(4px)'}}
        >
          <div
            onClick={e=>e.stopPropagation()}
            style={{width:'100%',maxWidth:420,background:'#fff',borderRadius:20,padding:24,boxShadow:'0 30px 90px rgba(15,23,42,.28)',border:'1px solid rgba(15,23,42,.08)'}}
          >
            <div style={{width:48,height:48,borderRadius:16,background:'#fdf2f8',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:800,marginBottom:16}}>!</div>
            <h3 style={{margin:'0 0 8px',fontSize:22,color:'#111827'}}>Remove from cart?</h3>
            <p style={{margin:'0 0 18px',color:'#64748b',lineHeight:1.6}}>
              Are you sure you want to remove <strong style={{color:'#111827'}}>{pendingRemove.name}</strong> from your cart?
            </p>
            <div style={{display:'flex',gap:12,justifyContent:'flex-end',flexWrap:'wrap'}}>
              <button
                type="button"
                onClick={()=>setPendingRemove(null)}
                style={{padding:'11px 16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',color:'#334155',fontWeight:800,cursor:'pointer'}}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmRemove}
                style={{padding:'11px 16px',borderRadius:12,border:0,background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',fontWeight:800,cursor:'pointer',boxShadow:'0 14px 30px rgba(236,72,153,.2)'}}
              >
                Remove item
              </button>
            </div>
          </div>
        </div>
      )}

      {showEmptyCartPopup && (
        <div
          onClick={()=>setShowEmptyCartPopup(false)}
          style={{position:'fixed',inset:0,background:'rgba(15,23,42,.48)',display:'flex',alignItems:'center',justifyContent:'center',padding:20,zIndex:50,backdropFilter:'blur(4px)'}}
        >
          <div
            onClick={e=>e.stopPropagation()}
            style={{width:'100%',maxWidth:420,background:'#fff',borderRadius:20,padding:24,boxShadow:'0 30px 90px rgba(15,23,42,.28)',border:'1px solid rgba(15,23,42,.08)'}}
          >
            <div style={{width:48,height:48,borderRadius:16,background:'#fdf2f8',color:'#be185d',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:800,marginBottom:16}}>!</div>
            <h3 style={{margin:'0 0 8px',fontSize:22,color:'#111827'}}>Your cart is empty</h3>
            <p style={{margin:'0 0 18px',color:'#64748b',lineHeight:1.6}}>
              No item in cart yet. Please add an item first or continue shopping.
            </p>
            <div style={{display:'flex',gap:12,justifyContent:'flex-end',flexWrap:'wrap'}}>
              <button
                type="button"
                onClick={()=>setShowEmptyCartPopup(false)}
                style={{padding:'11px 16px',borderRadius:12,border:'1px solid #e2e8f0',background:'#fff',color:'#334155',fontWeight:800,cursor:'pointer'}}
              >
                Close
              </button>
              <button
                type="button"
                onClick={()=>navigate('/')}
                style={{padding:'11px 16px',borderRadius:12,border:0,background:'linear-gradient(90deg,#ec4899,#ff4da6)',color:'#fff',fontWeight:800,cursor:'pointer',boxShadow:'0 14px 30px rgba(236,72,153,.2)'}}
              >
                Go shopping
              </button>
            </div>
          </div>
        </div>
      )}

      <footer style={{padding:22,textAlign:'center',color:'#6b7280',fontSize:14}}>&copy; {new Date().getFullYear()} LN Clothsie</footer>
    </div>
  )
}
