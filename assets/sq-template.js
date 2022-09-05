window.sq = window.sq || {};
window.sq.templates = {
gridItem: `
<div class="sparq-card" :product-handle="item.handle" :product-id="item.id">
   <div class="sparq-thumbnail-wrap">
      <a :href=\"'/products/' + item.handle\" class="sparq-loop-product"
      :class="item.images.length >1 && item.images[1].src ? 'sq-class':''">
      <img v-if="item.image && item.image.src" :src="sq._u.resizeImage(item.image.src, 400)" class="grid-view-item__image" />
      <img v-if="item.images && item.images[1]" :src="sq._u.resizeImage(item.images[1].src, 400)" class="sq-grid-view_image hover" />
      <img v-if="!item.image || !item.image.src" src="https://i.ibb.co/BB0Lw1k/1.png" class="grid-view-item__image" />
      </a>
   </div>
<div class="sq-meta-tag" v-if="item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l && item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l.length && item.meta_rebate_value_96fl56r24trwydfdvya2bbn2 && item.meta_rebate_value_96fl56r24trwydfdvya2bbn2[0] === 'yes'">$ {{item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l[0]}} REBATE</div>
   <div class="sparq-bottom-items">
      <div class="sparq-product-title">
         <a :href=\"'/products/' + item.handle\" class="sparq-title">
			{{item.title}}
         </a>
      </div>
    
      <div class="sq-product-price" >
<div class="sq-meta-tag-1" v-if="item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l && item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l.length && item.price && item.meta_rebate_value_96fl56r24trwydfdvya2bbn2[0] === 'yes'">
<div v-if="item.compare_at_price">
  $ {{Number(item.compare_at_price - item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l[0]).toLocaleString()}}.00
</div>
<div v-else>
  $ {{Number(item.price - item.meta_rebate_amount_6zoufovebjcmt4b9zd9a651l[0]).toLocaleString()}}.00
</div>
</div>
<div class="sparq-price-1" >
            <div class='sq-price-1' v-if="item.meta_rebate_value_96fl56r24trwydfdvya2bbn2 && item.meta_rebate_value_96fl56r24trwydfdvya2bbn2[0] === 'yes'">
              <div v-if="item.compare_at_price">
                   $ {{Number((item.compare_at_price).toFixed(2)).toLocaleString()}}.00 
                </div>
              <div v-else>$ {{Number((item.price).toFixed(2)).toLocaleString()}}.00 </div>
            </div>          
</div> 
<div class="sparq-price" v-if="item.compare_at_price==0 || item.compare_at_price == null">
          <div class='sq-price' v-if="item.meta_rebate_value_96fl56r24trwydfdvya2bbn2 == null || item.meta_rebate_value_96fl56r24trwydfdvya2bbn2[0] === 'no'">
 <div v-if="item.variants[0].on_preorder == false && item.in_stock == 0">
                   Sold Out 
              </div>
              <div v-else-if="!item.variants[0].on_preorder && item.in_stock == 0 ">
                   Sold Out
             </div>
            <div v-else>
                $ {{Number((item.price).toFixed(2)).toLocaleString()}}.00
          </div>
          
</div>
         

</div>
         <div class="sparq-compare-price" v-if="item.meta_rebate_value_96fl56r24trwydfdvya2bbn2 == null || item.meta_rebate_value_96fl56r24trwydfdvya2bbn2[0] === 'no'">
            <span class="sparq-mrp-price"  v-if="item.compare_at_price && item.price"><span class='sq-column-price'><span class="sq-mrp-final-price">$ {{Number((item.price).toFixed(2)).toLocaleString()}}.00  </span></span><span class="sq-mrp-price" >$ {{Number((item.compare_at_price).toFixed(2)).toLocaleString()}}.00 </span></span>
         </div>
      </div>
   </div>
</div>
</div>
</div>
`
}