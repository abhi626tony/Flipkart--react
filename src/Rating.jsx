import React from 'react'

function Rating() {
  return (
    <div>
    <div className='m-0 w-2/3'>

<div class="inner">
    <div class="rating">
      <span class="rating-num">4.0</span>
      <div class="rating-stars">
        <span><i class="active icon-star"></i></span>
        <span><i class="active icon-star"></i></span>
        <span><i class="active icon-star"></i></span>
        <span><i class="active icon-star"></i></span>
        <span><i class="icon-star"></i></span>
      </div>
      <div class="rating-users">
        <i class="icon-user"></i> 1,014,004 total
      </div>
    </div>
    
    <div class="histo">
      <div class="five histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 5           </span>
        <span class="bar-block">
          <span id="bar-five" class="bar">
            <span>566,784</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="four histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 4           </span>
        <span class="bar-block">
          <span id="bar-four" class="bar">
            <span>171,298</span>&nbsp;
          </span> 
        </span>
      </div> 
      
      <div class="three histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 3           </span>
        <span class="bar-block">
          <span id="bar-three" class="bar">
            <span>94,940</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="two histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 2           </span>
        <span class="bar-block">
          <span id="bar-two" class="bar">
            <span>44,525</span>&nbsp;
          </span> 
        </span>
      </div>
      
      <div class="one histo-rate">
        <span class="histo-star">
          <i class="active icon-star"></i> 1           </span>
        <span class="bar-block">
          <span id="bar-one" class="bar">
            <span>136,457</span>&nbsp;
          </span> 
        </span>
      </div>
    </div>
  </div>

<div class="progress">
    <svg class="progress-circle" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
	    <circle class="progress-circle-back"
		        cx="80" cy="80" r="74"></circle>
        <circle class="progress-circle-prog"
                cx="80" cy="80" r="74"></circle>
    </svg>
	  <div class="progress-text" data-progress="0">4.6</div>
  <p className='ml-10'>Camera</p>
  
</div>	
</div></div>
   
  )
}

export default Rating